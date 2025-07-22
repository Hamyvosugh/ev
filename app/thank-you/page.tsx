'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Home, ArrowRight, Phone, Mail, Clock, Star } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Success Icon and Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your website request has been successfully submitted. We have received all your information and will contact you shortly.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Request successfully sent
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Happens Next
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24 Hours</h3>
              <p className="text-gray-600 text-sm">
                We will review your request and create a custom proposal for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receive Proposal</h3>
              <p className="text-gray-600 text-sm">
                You will receive a detailed proposal with timeline and costs via email.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation Call</h3>
              <p className="text-gray-600 text-sm">
                We'll schedule a meeting to discuss your project in detail.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-900 rounded-2xl text-white p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Have Questions?</h2>
            <p className="text-blue-100">
              We're here to help and answer all your questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-100">Phone</h3>
                <a href="tel:061814347066" className="text-white hover:text-blue-200 transition-colors">
                  06181 4347066
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-100">Email</h3>
                <a href="mailto:hi@emoviral.com" className="text-white hover:text-blue-200 transition-colors">
                  hi@emoviral.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-blue-200 text-sm">
              Business Hours: Monday - Friday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-amber-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose EmoViral?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Automotive Industry Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Specialized in digital solutions for car dealerships and automotive businesses.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete Service Package</h3>
                <p className="text-gray-600 text-sm">
                  From photography to website development - everything from one source.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fast Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Efficient workflow for timely project completion.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Personal Support</h3>
                <p className="text-gray-600 text-sm">
                  Direct contact person and continuous support throughout the project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Homepage
          </Link>
          
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            Read Our Blog
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">
            You have also received a confirmation email. If it doesn't appear in your inbox, 
            please check your spam folder as well.
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/impressum" className="hover:text-blue-600 transition-colors">
              Imprint
            </Link>
            <Link href="/datenschutz" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/kontakt" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;