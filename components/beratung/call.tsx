import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CTAComponent = () => {
  return (
    <div className="w-full bg-blue-900 text-white py-3 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left side - CTA text */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Erste kostenlose <span className="text-yellow-300">Beratungstermin vereinbaren</span></h3>
            <p className="text-sm text-gray-200">oder anrufen Sie uns direkt</p>
          </div>
          
          {/* Right side - Contact options */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {/* Phone */}
            <a 
              href="tel:06438-4039867" 
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 transition-colors py-2 px-4 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={18} />
              <span>06438 4039867</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:hi@emoviral.com" 
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 transition-colors py-2 px-4 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} />
              <span>hi@emoviral.com</span>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/4917647666407" 
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 transition-colors py-2 px-4 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;