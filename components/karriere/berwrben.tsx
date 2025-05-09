'use client';
import React, { useState } from 'react';
import { User, Mail, Briefcase, MapPin, FileText, Upload, Send } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  message: string;
  resume: File | null;
  portfolio: File | null;
  agreedToTerms: boolean;
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    message: '',
    resume: null,
    portfolio: null,
    agreedToTerms: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    'Fahrzeugfotograf:in Frankfurt',
    'Fahrzeugfotograf:in Hanau',
    'Fahrzeugfotograf:in Offenbach',
    'Content Creator / Social Media Manager:in',
    'Grafikdesigner:in / UI Designer:in',
    'Webentwickler:in (Next.js, Tailwind)',
    'Foto-Editor:in & Postproduktion',
    'Sonstige Position'
  ];

  const locations = [
    'Frankfurt am Main',
    'Hanau & Umgebung',
    'Offenbach am Main',
    'Remote / Deutschlandweit'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        location: '',
        message: '',
        resume: null,
        portfolio: null,
        agreedToTerms: false
      });
    }, 1500);
  };

  return (
    <section className="py-8 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Bewerbungsformular</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Wir freuen uns auf deine Bewerbung! Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-md text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Bewerbung erfolgreich gesendet!</h3>
            <p className="text-gray-700 mb-6">
              Vielen Dank für dein Interesse an Emoviral. Wir werden deine Unterlagen sorgfältig prüfen und uns zeitnah bei dir melden.
            </p>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-3 bg-blue-900 text-white font-medium rounded-md transition duration-300 hover:bg-blue-800"
            >
              Neue Bewerbung
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 rounded-lg shadow-md w-full">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Persönliche Informationen</h3>
              
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        placeholder="max.mustermann@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        placeholder="+49 123 4567890"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Stelleninformationen</h3>
              
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Gewünschte Position *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      >
                        <option value="">Bitte wählen</option>
                        {positions.map((pos, index) => (
                          <option key={index} value={pos}>{pos}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Gewünschter Standort *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      >
                        <option value="">Bitte wählen</option>
                        {locations.map((loc, index) => (
                          <option key={index} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Nachricht / Motivation</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="block w-full pl-10 py-3 px-4 border border-gray-300 rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Erzähle uns kurz etwas über dich und warum du bei Emoviral arbeiten möchtest..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            {/* File Uploads */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Dokumente</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lebenslauf *</label>
                  <div className="p-4 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="text-center">
                      <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                      <div className="text-sm text-gray-600 mb-1">
                        <label htmlFor="resume" className="relative cursor-pointer bg-white font-medium text-blue-900 hover:text-blue-800">
                          <span>Datei auswählen</span>
                          <input 
                            id="resume" 
                            name="resume" 
                            type="file" 
                            className="sr-only"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                        <span className="pl-1">oder hierher ziehen</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC oder DOCX bis 10MB
                      </p>
                      {formData.resume && (
                        <p className="text-sm text-green-600 mt-2">
                          Datei ausgewählt: {(formData.resume as File).name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio / Arbeitsproben</label>
                  <div className="p-4 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="text-center">
                      <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                      <div className="text-sm text-gray-600 mb-1">
                        <label htmlFor="portfolio" className="relative cursor-pointer bg-white font-medium text-blue-900 hover:text-blue-800">
                          <span>Datei auswählen</span>
                          <input 
                            id="portfolio" 
                            name="portfolio" 
                            type="file" 
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <span className="pl-1">oder hierher ziehen</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, ZIP, PNG oder JPG bis 20MB
                      </p>
                      {formData.portfolio && (
                        <p className="text-sm text-green-600 mt-2">
                          Datei ausgewählt: {(formData.portfolio as File).name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terms and Submit */}
            <div className="mt-8">
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="agreedToTerms"
                    name="agreedToTerms"
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={handleCheckboxChange}
                    required
                    className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreedToTerms" className="font-medium text-gray-700">
                    Ich stimme der <a href="#" className="text-blue-900 hover:underline">Datenschutzerklärung</a> zu und akzeptiere die Verarbeitung meiner Daten im Rahmen des Bewerbungsprozesses. *
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Bewerbung absenden
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-gray-500 text-center">
                Felder mit * sind Pflichtfelder
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ApplicationForm;