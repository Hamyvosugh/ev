import React from 'react';
import { Phone, Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import ScrollButton from '@/components/global/Scroll100vh';
import Link from 'next/link';


const TallCTAComponent = () => {
  return (
    <div className="w-full bg-blue-900 text-white py-16 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Header section */}
          <div className="text-center max-w-2xl">
            <h2 className="font-bold text-3xl mb-4">Erste kostenlose <span className="text-yellow-300">Beratungstermin vereinbaren</span></h2>
            <p className="text-xl text-gray-200">Wir helfen Ihnen, Ihre Fahrzeugpräsentation auf das nächste Level zu bringen</p>
          </div>
          
          {/* Call to action button */}
          <ScrollButton 
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold transition-colors py-3 px-8 rounded-md text-lg"

          >
            <Calendar size={20} />
            <span>Termin vereinbaren</span>
            <ArrowRight size={20} />
            </ScrollButton>
          
          {/* "or call us directly" text */}
          <div className="flex items-center gap-3 text-lg">
            <div className="h-px w-20 bg-blue-700"></div>
            <p>oder anrufen Sie uns direkt</p>
            <div className="h-px w-20 bg-blue-700"></div>
          </div>
          
          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Phone */}
            <Link 
              href="tel:06438-4039867" 
              className="flex flex-col items-center gap-3 bg-blue-800 hover:bg-blue-700 transition-colors py-6 px-4 rounded-lg text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-700 p-4 rounded-full">
                <Phone size={28} />
              </div>
              <span className="font-bold text-lg">Telefon</span>
              <span className="text-gray-200">06438 4039867</span>
            </Link> 
            
            {/* Email */}
            <Link 
              href="mailto:hi@emoviral.com" 
              className="flex flex-col items-center gap-3 bg-blue-800 hover:bg-blue-700 transition-colors py-6 px-4 rounded-lg text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-700 p-4 rounded-full">
                <Mail size={28} />
              </div>
              <span className="font-bold text-lg">E-Mail</span>
              <span className="text-gray-200">hi@emoviral.com</span>
            </Link> 
            
            {/* WhatsApp */}
            <Link 
              href="https://wa.me/4917647666407" 
              className="flex flex-col items-center gap-3 bg-blue-800 hover:bg-blue-700 transition-colors py-6 px-4 rounded-lg text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-700 p-4 rounded-full">
                <MessageCircle size={28} />
              </div>
              <span className="font-bold text-lg">WhatsApp</span>
              <span className="text-gray-200">+49 17647666407</span>
            </Link> 
          </div>
          
          {/* Bottom text */}
          <p className="text-center text-gray-300 max-w-2xl">
            Wir sind Ihre Spezialisten für professionelle Fahrzeugpräsentation. 
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TallCTAComponent;