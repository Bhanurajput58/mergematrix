'use client';

import { motion } from 'framer-motion';
import { Users, Shield, Zap, Heart } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "User-Focused",
      description: "Built with our users in mind, providing an intuitive and seamless experience."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Secure & Reliable",
      description: "Your documents are handled with the highest level of security and privacy."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Experience quick and efficient PDF merging with our optimized engine."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Made with Love",
      description: "Crafted with passion to make your document management easier."
    }
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
              About MergeMatrix
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're revolutionizing the way people handle PDF documents. Our mission is to make document management simple, efficient, and accessible to everyone.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose MergeMatrix?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine powerful features with an intuitive interface to deliver the best PDF merging experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.div 
        className="bg-gray-50 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              MergeMatrix was born from a simple idea: making PDF management easier for everyone. 
              We saw the challenges people faced when trying to combine multiple PDF files and decided to create a solution that's both powerful and user-friendly.
            </p>
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
              Ready to Simplify Your PDF Management?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join thousands of satisfied users who trust MergeMatrix for their document needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/merge"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
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