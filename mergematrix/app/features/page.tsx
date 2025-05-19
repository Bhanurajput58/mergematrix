'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  FileText, 
  Lock, 
  Smartphone, 
  Cloud, 
  Settings, 
  Users 
} from 'lucide-react';

export default function Features() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Lightning Fast Merging",
      description: "Merge multiple PDFs in seconds with our optimized processing engine.",
      category: "core"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Secure Processing",
      description: "Your files are processed locally in your browser, ensuring maximum privacy.",
      category: "security"
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      title: "Multiple File Support",
      description: "Merge up to 10 files in the free version, 50+ in premium.",
      category: "core"
    },
    {
      icon: <Lock className="h-8 w-8 text-red-500" />,
      title: "No Data Storage",
      description: "We never store your files on our servers. Everything happens in your browser.",
      category: "security"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-yellow-500" />,
      title: "Mobile Friendly",
      description: "Full functionality on all devices, from desktop to mobile.",
      category: "accessibility"
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-500" />,
      title: "Cloud Integration",
      description: "Connect with your favorite cloud storage services (Premium).",
      category: "premium"
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-500" />,
      title: "Advanced Options",
      description: "Customize page order, quality, and compression settings.",
      category: "premium"
    },
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "Team Collaboration",
      description: "Share and collaborate on PDFs with your team (Premium).",
      category: "premium"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'core', name: 'Core Features' },
    { id: 'security', name: 'Security' },
    { id: 'premium', name: 'Premium Features' },
    { id: 'accessibility', name: 'Accessibility' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-white py-24 sm:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            {...fadeIn}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Powerful Features
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover everything MergeMatrix has to offer. From basic merging to advanced PDF manipulation, we've got you covered.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
                <div className="mb-6 flex items-center">
                  {feature.icon}
                  {feature.category === 'premium' && (
                    <span className="ml-2 px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                      Pro
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <motion.div 
        className="bg-gray-50 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to merge your PDFs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Upload PDFs",
                description: "Drag and drop your PDF files or click to select them from your device."
              },
              {
                step: "2",
                title: "Arrange & Configure",
                description: "Reorder your files and adjust settings like quality and compression."
              },
              {
                step: "3",
                title: "Download",
                description: "Click merge and download your combined PDF file instantly."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="bg-blue-600 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Try MergeMatrix today and experience the easiest way to merge PDFs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/merge"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Merging
              </a>
              <a href="/pricing" className="text-lg font-semibold leading-6 text-white">
                View Pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 