'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

interface PricingFeature {
  name: string;
  free: boolean;
  premium: boolean;
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const features: PricingFeature[] = [
    { name: "Merge up to 5 PDFs", free: true, premium: true },
    { name: "Basic PDF merging", free: true, premium: true },
    { name: "Drag and drop interface", free: true, premium: true },
    { name: "Mobile support", free: true, premium: true },
    { name: "Merge up to 50 PDFs", free: false, premium: true },
    { name: "Advanced PDF editing", free: false, premium: true },
    { name: "Cloud storage integration", free: false, premium: true },
    { name: "Priority support", free: false, premium: true },
    { name: "Team collaboration", free: false, premium: true },
    { name: "Custom branding", free: false, premium: true }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

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
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that's right for you. All plans include our core PDF merging features.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Toggle */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500'
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                !isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {/* Free Plan */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
              <p className="mt-4 text-gray-600">Perfect for occasional use</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/forever</span>
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.free ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300" />
                    )}
                    <span className={`ml-3 ${feature.free ? 'text-gray-900' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/merge"
                className="mt-8 block w-full bg-gray-100 text-center px-6 py-3 text-sm font-semibold text-gray-900 rounded-md hover:bg-gray-200"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="mt-4 text-blue-100">For power users and teams</p>
              <p className="mt-8">
                <span className="text-4xl font-bold">
                  ${isAnnual ? '99' : '9.99'}
                </span>
                <span className="text-blue-100">/{isAnnual ? 'year' : 'month'}</span>
              </p>
              {isAnnual && (
                <p className="text-sm text-blue-100 mt-2">
                  Save 17% with annual billing
                </p>
              )}
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.premium ? (
                      <Check className="h-5 w-5 text-green-400" />
                    ) : (
                      <X className="h-5 w-5 text-blue-400" />
                    )}
                    <span className="ml-3 text-blue-100">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/merge"
                className="mt-8 block w-full bg-white text-center px-6 py-3 text-sm font-semibold text-blue-600 rounded-md hover:bg-blue-50"
              >
                Upgrade to Premium
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div 
        className="bg-gray-50 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade to Premium at any time. If you need to downgrade, you can do so at the end of your billing period."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and other popular payment methods."
              },
              {
                question: "Is there a refund policy?",
                answer: "Yes, we offer a 30-day money-back guarantee for all Premium subscriptions."
              },
              {
                question: "Do you offer team discounts?",
                answer: "Yes, we offer special pricing for teams of 5 or more users. Contact our sales team for details."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
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
              Join thousands of satisfied users who trust MergeMatrix for their PDF needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/merge"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Try for Free
              </a>
              <a href="/contact" className="text-lg font-semibold leading-6 text-white">
                Contact Sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 