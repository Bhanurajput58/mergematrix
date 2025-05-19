'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      question: "How many PDFs can I merge at once?",
      answer: "You can merge up to 10 PDF files at once in the free version. Premium users can merge up to 50 files simultaneously.",
      category: "usage"
    },
    {
      question: "What is the maximum file size for each PDF?",
      answer: "Each PDF file can be up to 10MB in size. This limit applies to both free and premium users.",
      category: "usage"
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All files are processed locally in your browser and are never stored on our servers. We use industry-standard encryption for all data transfers.",
      category: "security"
    },
    {
      question: "What happens to my files after merging?",
      answer: "Your original files remain unchanged. The merged PDF is created as a new file and downloaded to your device. We don't store any of your files on our servers.",
      category: "security"
    },
    {
      question: "How do I upgrade to premium?",
      answer: "You can upgrade to premium by clicking the 'Upgrade' button in the top navigation or visiting our pricing page. We accept all major credit cards and PayPal.",
      category: "billing"
    },
    {
      question: "What features are included in the premium version?",
      answer: "Premium features include: unlimited PDF merges, larger file size limits, priority support, advanced PDF editing options, and more.",
      category: "billing"
    },
    {
      question: "Can I merge PDFs on mobile devices?",
      answer: "Yes, our service is fully responsive and works on all modern mobile devices. You can merge PDFs directly from your smartphone or tablet.",
      category: "usage"
    },
    {
      question: "What file formats are supported?",
      answer: "Currently, we support PDF files only. The files must be valid PDFs and not password-protected.",
      category: "usage"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'usage', name: 'Usage' },
    { id: 'security', name: 'Security' },
    { id: 'billing', name: 'Billing & Premium' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about MergeMatrix and our PDF merging service.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

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
              Still have questions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Our support team is here to help. Contact us for personalized assistance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 