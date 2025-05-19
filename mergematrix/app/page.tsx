import Link from 'next/link';
import { ArrowRight, FileText, Lock, Zap, Upload } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Merge PDFs with</span>
              <span className="block text-blue-600">Ease and Precision</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Combine multiple PDF files into one document quickly and securely. Professional-grade PDF merging made simple.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/merge"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Merging
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose MergeMatrix?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The most reliable PDF merging solution for your needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Easy Upload</h3>
              <p className="mt-2 text-base text-gray-500">
                Drag and drop your PDF files or select them from your device. Simple and intuitive interface.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Lightning Fast</h3>
              <p className="mt-2 text-base text-gray-500">
                Merge your PDFs in seconds with our optimized processing engine.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure & Private</h3>
              <p className="mt-2 text-base text-gray-500">
                Your files are automatically deleted after processing. We never store your documents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to merge your PDFs?</span>
            <span className="block text-blue-200">Start using MergeMatrix today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/merge"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
