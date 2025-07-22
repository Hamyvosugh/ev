'use client';

import React, { useState } from 'react';
import WebsiteRequestForm from '@/components/forms/WebsiteRequestForm';
import { WebsiteRequestFormData, SupportedLanguage } from '@/types/WebsiteRequestForm';
import type { Metadata } from 'next';

// Note: Since this is a client component, metadata should be defined in a parent server component
// For now, we'll handle SEO in the component itself

const WebsiteRequestPage: React.FC = () => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (data: WebsiteRequestFormData) => {
    try {
      console.log('Form submitted with data:', data);
      
      // Here you would typically send the data to your API
      const response = await fetch('/api/website-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          submissionDate: new Date().toISOString(),
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      
      setSubmissionStatus('success');
      
      // Clear localStorage after successful submission
      localStorage.removeItem('website-request-form');
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    }
  };

  const getPageTitle = () => {
    switch (language) {
      case 'de':
        return 'Website-Anfrage | Digitale Lösungen für Ihr Unternehmen';
      case 'fa':
        return 'درخواست وب‌سایت | راه‌حل‌های دیجیتال برای کسب‌وکار شما';
      case 'tr':
        return 'Web Sitesi Talebi | İşletmeniz İçin Dijital Çözümler';
      default:
        return 'Website Request | Digital Solutions for Your Business';
    }
  };

  const getPageDescription = () => {
    switch (language) {
      case 'de':
        return 'Teilen Sie uns Ihre Website-Anforderungen mit. Unser detailliertes Formular hilft uns, die perfekte digitale Lösung für Ihr Unternehmen zu erstellen.';
      case 'fa':
        return 'نیازهای وب‌سایت خود را با ما در میان بگذارید. فرم تفصیلی ما به ما کمک می‌کند تا راه‌حل دیجیتال مناسب برای کسب‌وکار شما ایجاد کنیم.';
      case 'tr':
        return 'Web sitesi gereksinimlerinizi bizimle paylaşın. Detaylı formumuz, işletmeniz için mükemmel dijital çözümü oluşturmamıza yardımcı olur.';
      default:
        return 'Share your website requirements with us. Our detailed form helps us create the perfect digital solution for your business.';
    }
  };

  const getHeroContent = () => {
    switch (language) {
      case 'de':
        return {
          title: 'Lassen Sie uns Ihre perfekte Website erstellen',
          subtitle: 'Teilen Sie Ihre Vision mit uns und wir verwandeln sie in eine professionelle, leistungsstarke Website, die Ergebnisse liefert.',
          features: [
            'Professionelle Beratung',
            'Maßgeschneiderte Lösungen',
            'Schnelle Umsetzung',
            'Laufender Support'
          ]
        };
      case 'fa':
        return {
          title: 'بیایید وب‌سایت مناسب شما را بسازیم',
          subtitle: 'ایده خود را با ما در میان بگذارید و ما آن را به وب‌سایتی حرفه‌ای و قدرتمند تبدیل می‌کنیم که نتیجه‌ای عالی دارد.',
          features: [
            'مشاوره حرفه‌ای',
            'راه‌حل‌های سفارشی',
            'اجرای سریع',
            'پشتیبانی مداوم'
          ]
        };
      case 'tr':
        return {
          title: 'Mükemmel Web Sitenizi Oluşturalım',
          subtitle: 'Vizyonunuzu bizimle paylaşın, biz de onu sonuç getiren profesyonel, güçlü bir web sitesine dönüştürelim.',
          features: [
            'Profesyonel Danışmanlık',
            'Özel Çözümler',
            'Hızlı Uygulama',
            'Sürekli Destek'
          ]
        };
      default:
        return {
          title: 'Let\'s Build Your Perfect Website',
          subtitle: 'Share your vision with us and we\'ll transform it into a professional, powerful website that delivers results.',
          features: [
            'Professional Consultation',
            'Custom Solutions',
            'Fast Implementation',
            'Ongoing Support'
          ]
        };
    }
  };

  const heroContent = getHeroContent();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Head Elements - In a real app, this would be in metadata */}
      <head>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/website-request" />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {heroContent.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="w-8 h-8 bg-amber-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <WebsiteRequestForm
          onSubmit={handleFormSubmit}
          language={language}
          onLanguageChange={setLanguage}
        />
      </section>

      {/* Success/Error Messages */}
      {submissionStatus === 'success' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {language === 'en' && 'Thank You!'}
              {language === 'de' && 'Vielen Dank!'}
              {language === 'fa' && 'متشکرم!'}
              {language === 'tr' && 'Teşekkürler!'}
            </h3>
            <p className="text-gray-600">
              {language === 'en' && 'Your request has been submitted successfully. We\'ll contact you soon!'}
              {language === 'de' && 'Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns bald bei Ihnen melden!'}
              {language === 'fa' && 'درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت!'}
              {language === 'tr' && 'Talebiniz başarıyla gönderildi. Yakında sizinle iletişime geçeceğiz!'}
            </p>
          </div>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          <p className="font-medium">
            {language === 'en' && 'Submission failed. Please try again.'}
            {language === 'de' && 'Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut.'}
            {language === 'fa' && 'ارسال ناموفق. لطفاً دوباره تلاش کنید.'}
            {language === 'tr' && 'Gönderim başarısız. Lütfen tekrar deneyin.'}
          </p>
        </div>
      )}

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'en' && 'Why Choose Our Website Development Service?'}
            {language === 'de' && 'Warum unseren Website-Entwicklungsservice wählen?'}
            {language === 'fa' && 'چرا خدمات توسعه وب‌سایت ما را انتخاب کنید؟'}
            {language === 'tr' && 'Neden Web Sitesi Geliştirme Hizmetimizi Seçmelisiniz?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' && 'Fast & Efficient'}
                {language === 'de' && 'Schnell & Effizient'}
                {language === 'fa' && 'سریع و کارآمد'}
                {language === 'tr' && 'Hızlı ve Verimli'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' && 'We deliver high-quality websites quickly without compromising on quality.'}
                {language === 'de' && 'Wir liefern hochwertige Websites schnell, ohne Kompromisse bei der Qualität.'}
                {language === 'fa' && 'ما وب‌سایت‌های با کیفیت بالا را بدون به خطر انداختن کیفیت سریع تحویل می‌دهیم.'}
                {language === 'tr' && 'Kaliteden ödün vermeden hızlı bir şekilde yüksek kaliteli web siteleri sunuyoruz.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' && 'Secure & Reliable'}
                {language === 'de' && 'Sicher & Zuverlässig'}
                {language === 'fa' && 'امن و قابل اعتماد'}
                {language === 'tr' && 'Güvenli ve Güvenilir'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' && 'Built with security best practices and reliable hosting infrastructure.'}
                {language === 'de' && 'Erstellt mit Sicherheits-Best-Practices und zuverlässiger Hosting-Infrastruktur.'}
                {language === 'fa' && 'با بهترین روش‌های امنیتی و زیرساخت میزبانی قابل اعتماد ساخته شده.'}
                {language === 'tr' && 'Güvenlik en iyi uygulamaları ve güvenilir hosting altyapısı ile oluşturulmuştur.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' && 'Ongoing Support'}
                {language === 'de' && 'Laufender Support'}
                {language === 'fa' && 'پشتیبانی مداوم'}
                {language === 'tr' && 'Sürekli Destek'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' && 'We provide continuous support and maintenance to keep your website running smoothly.'}
                {language === 'de' && 'Wir bieten kontinuierlichen Support und Wartung, um Ihre Website reibungslos am Laufen zu halten.'}
                {language === 'fa' && 'ما پشتیبانی و نگهداری مداوم ارائه می‌دهیم تا وب‌سایت شما به روانی کار کند.'}
                {language === 'tr' && 'Web sitenizin sorunsuz çalışmasını sağlamak için sürekli destek ve bakım sağlıyoruz.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteRequestPage;