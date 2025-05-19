'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Book, 
  Video, 
  FileText, 
  Users 
} from 'lucide-react';
import { useState } from 'react';

interface SupportCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: SupportCategory[] = [
    {
      icon: <Book className="h-6 w-6 text-blue-500" />,
      title: "Documentation",
      description: "Detailed guides and API documentation",
      link: "/docs"
    },
    {
      icon: <Video className="h-6 w-6 text-green-500" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      title: "Knowledge Base",
      description: "Articles and FAQs",
      link: "/faq"
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-500" />,
      title: "Community Forum",
      description: "Connect with other users",
      link: "/forum"
    }
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
              How can we help?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to your questions or get in touch with our support team.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="mx-auto max-w-2xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help..."
                className="w-full px-4 py-3 pl-12 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Support Categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.title}
              href={category.link}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <motion.div 
        className="bg-gray-50 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Support
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-4xl lg:mx-auto">
            {[
              {
                icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                link: "/chat"
              },
              {
                icon: <Mail className="h-8 w-8 text-green-500" />,
                title: "Email Support",
                description: "support@mergematrix.com",
                link: "mailto:support@mergematrix.com"
              },
              {
                icon: <Phone className="h-8 w-8 text-purple-500" />,
                title: "Phone Support",
                description: "+1 (555) 123-4567",
                link: "tel:+15551234567"
              }
            ].map((option, index) => (
              <motion.a
                key={option.title}
                href={option.link}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Hours */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Support Hours
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 6pm EST<br />
                  Saturday: 10am - 4pm EST<br />
                  Sunday: Closed
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Technical Support
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 8am - 8pm EST<br />
                  Saturday: 9am - 5pm EST<br />
                  Sunday: 10am - 4pm EST
                </p>
              </div>
            </div>
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
              Still Need Help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Our support team is here to help you get the most out of MergeMatrix.
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