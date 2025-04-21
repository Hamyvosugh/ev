import React from 'react';
import { MessageSquare } from 'lucide-react';

const CTAComponent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Background decorative element */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative accent lines */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-blue-900/20"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-blue-900/20"></div>
          
          {/* Main content box */}
          <div className="bg-white rounded-lg shadow-xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bereit für Ihren nächsten digitalen Erfolg?
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihren professionellen Online-Auftritt gestalten und verwalten.
              Kontaktieren Sie uns jetzt für eine kostenlose Erstberatung – unverbindlich und persönlich.
            </p>
            
            <button className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto group">
              <span>Jetzt Beratung anfordern</span>
              <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            {/* Trust badges/elements */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Kostenlose Erstberatung</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Schnelle Reaktionszeit</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <span className="text-gray-700">Persönliche Betreuung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAComponent;