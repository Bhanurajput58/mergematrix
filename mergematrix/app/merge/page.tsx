'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { useRouter } from 'next/navigation';

interface FileWithPreview extends File {
  preview?: string;
}

export default function Merge() {
  const router = useRouter();
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    quality: 'high',
    orientation: 'portrait',
    compression: 'none',
  });
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [generations, setGenerations] = useState(0);
  const [isPremium, setIsPremium] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please select at least 2 PDF files to merge');
      return;
    }

    if (!email) {
      setShowEmailModal(true);
      return;
    }

    try {
      setIsMerging(true);
      setError(null);

      // Check generations limit
      const generationsResponse = await fetch('/api/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': email
        }
      });

      if (!generationsResponse.ok) {
        const data = await generationsResponse.json();
        if (generationsResponse.status === 403) {
          setError('You have reached your PDF merge limit. Please upgrade to premium for unlimited merges.');
          return;
        }
        throw new Error(data.error || 'Failed to check generations limit');
      }

      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
      }

      const mergedPdfFile = await mergedPdf.save();
      const blob = new Blob([mergedPdfFile], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setFiles([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while merging PDFs');
    } finally {
      setIsMerging(false);
    }
  };

  useEffect(() => {
    const checkGenerations = async () => {
      if (!email) return;
      
      try {
        const response = await fetch('/api/generations', {
          headers: {
            'x-user-email': email
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setGenerations(data.generations);
          setIsPremium(data.isPremium);
        }
      } catch (error) {
        console.error('Error checking generations:', error);
      }
    };

    checkGenerations();
  }, [email]);

  const handleSettingsChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Merge PDF Files</h1>
      
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Enter your email</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEmailModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (email) {
                    setShowEmailModal(false);
                    handleMerge();
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the PDF files here...</p>
          ) : (
            <p>Drag and drop PDF files here, or click to select files</p>
          )}
        </div>
      </div>

      {files.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Selected Files:</h2>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-800 p-3 rounded">
                <span>{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={handleMerge}
          disabled={isMerging || files.length < 2}
          className={`px-6 py-2 rounded ${
            isMerging || files.length < 2
              ? 'bg-gray-700 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isMerging ? 'Merging...' : 'Merge PDFs'}
        </button>
        
        {email && (
          <div className="text-sm text-gray-600">
            {isPremium ? (
              <span>Premium User - Unlimited merges</span>
            ) : (
              <span>Free User - {3 - generations} merges remaining</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 