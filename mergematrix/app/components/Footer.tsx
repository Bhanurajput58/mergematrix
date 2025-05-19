'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
  contact: [
    {
      name: 'Email',
      href: 'mailto:contact@mergematrix.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      href: 'tel:+1234567890',
      icon: Phone,
    },
    {
      name: 'Address',
      href: '#',
      icon: MapPin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {navigation.contact.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} MergeMatrix. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 