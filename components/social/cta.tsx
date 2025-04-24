'use client';
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full translate-y-1/3 -translate-x-1/4 opacity-70"></div>
            
            {/* Content container */}
            <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Left side - Text content */}
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Bereit, Ihre Social-Media-Präsenz auf das nächste Level zu bringen?
                </h2>
                <div className="h-1 w-24 bg-yellow-400 mb-6 mx-auto md:mx-0"></div>
                <p className="text-blue-100 text-lg mb-8">
                  Lassen Sie uns gemeinsam Ihre Reichweite steigern, Ihre Community stärken und Ihre Marke zum Strahlen bringen!
                  Vereinbaren Sie jetzt eine kostenlose Erstberatung – unverbindlich und persönlich.
                </p>
                
                <Link href='/beratung' className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium px-8 py-4 rounded-lg transition-colors shadow-lg group">
                  <MessageSquare className="w-5 h-5" />
                  Jetzt kostenlos beraten lassen
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Right side - Visual element */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Social media icons collection */}
                  <div className="bg-white bg-opacity-10 p-8 rounded-full w-64 h-64 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-50 p-3 rounded-full shadow-lg">
                        <svg className="w-10 h-10 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute top-1/4 right-0 bg-blue-50 p-3 rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute bottom-1/4 left-0 bg-blue-50 p-3 rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-50 p-3 rounded-full shadow-lg">
                        <svg className="w-10 h-10 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 p-4 rounded-full shadow-lg">
                        <MessageSquare className="w-12 h-12 text-blue-900" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Growth indicators */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;