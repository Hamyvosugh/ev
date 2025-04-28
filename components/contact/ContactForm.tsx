// components/ContactForm.tsx
'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'hi@emoviral.com',
        }),
      });

      let responseData;
      
      try {
        responseData = await response.json();
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
      }
      
      if (response.ok || (responseData && responseData.success)) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setShowStatusMessage(true);
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        setShowStatusMessage(false);
      }, 5000);
    }
  };

  return (
    <div id="contact-form" className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-[#1a365d] mb-6">Kontaktformular</h2>
        <p className="text-gray-600 mb-8">
          Füllen Sie das folgende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                placeholder="ihre.email@beispiel.de"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Autohaus / Firma
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                placeholder="Name Ihres Autohauses"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Gewünschte Dienstleistung *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
            >
              <option value="">Bitte wählen Sie</option>
              <option value="fotografie">Fahrzeugfotografie</option>
              <option value="webentwicklung">Website-Entwicklung</option>
              <option value="social_media">Social Media Management</option>
              <option value="onlineshop">Onlineshop-Einrichtung</option>
              <option value="andere">Andere</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Ihre Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
              placeholder="Bitte beschreiben Sie Ihre Anfrage..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-[#1a365d] text-white font-medium rounded-md hover:bg-[#2c5282] transition-colors duration-200 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>
          </div>

          {showStatusMessage && submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md animate-fade-in">
              Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.
            </div>
          )}

          {showStatusMessage && submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md animate-fade-in">
              Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;