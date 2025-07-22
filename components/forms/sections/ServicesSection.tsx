'use client';

import React from 'react';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import { AdditionalServices, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Headphones, RefreshCw, Users, CheckCircle } from 'lucide-react';

interface ServicesSectionProps {
  data: AdditionalServices;
  onChange: (data: AdditionalServices) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof AdditionalServices, value: boolean) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getYesNoOptions = (type: 'support' | 'content' | 'longterm') => {
    const labels = {
      support: {
        yes: language === 'en' ? 'Yes, I need ongoing technical support' : 
             language === 'de' ? 'Ja, ich brauche laufenden technischen Support' :
             language === 'fa' ? 'بله، به پشتیبانی فنی مداوم نیاز دارم' :
             'Evet, sürekli teknik desteğe ihtiyacım var',
        no: language === 'en' ? 'No, I can manage it myself' :
            language === 'de' ? 'Nein, ich kann es selbst verwalten' :
            language === 'fa' ? 'خیر، خودم می‌توانم مدیریت کنم' :
            'Hayır, kendim yönetebilirim'
      },
      content: {
        yes: language === 'en' ? 'Yes, I want content management services' :
             language === 'de' ? 'Ja, ich möchte Content-Management-Services' :
             language === 'fa' ? 'بله، خدمات مدیریت محتوا می‌خواهم' :
             'Evet, içerik yönetim hizmetleri istiyorum',
        no: language === 'en' ? 'No, I will handle content myself' :
            language === 'de' ? 'Nein, ich werde den Content selbst verwalten' :
            language === 'fa' ? 'خیر، محتوا را خودم مدیریت می‌کنم' :
            'Hayır, içeriği kendim yöneteceğim'
      },
      longterm: {
        yes: language === 'en' ? 'Yes, I\'m interested in a long-term partnership' :
             language === 'de' ? 'Ja, ich bin an einer langfristigen Partnerschaft interessiert' :
             language === 'fa' ? 'بله، به همکاری طولانی‌مدت علاقه‌مندم' :
             'Evet, uzun vadeli ortaklıkla ilgileniyorum',
        no: language === 'en' ? 'No, just the website development' :
            language === 'de' ? 'Nein, nur die Website-Entwicklung' :
            language === 'fa' ? 'خیر، فقط توسعه وب‌سایت' :
            'Hayır, sadece web sitesi geliştirme'
      }
    };
    
    return [
      { value: 'true', label: labels[type].yes },
      { value: 'false', label: labels[type].no }
    ];
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
            <Headphones className="w-6 h-6 text-violet-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.additionalServices')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Let us know if you need ongoing support and additional services after your website launch.'}
          {language === 'de' && 'Lassen Sie uns wissen, ob Sie nach dem Start Ihrer Website laufende Unterstützung und zusätzliche Services benötigen.'}
          {language === 'fa' && 'اگر پس از راه‌اندازی وب‌سایت به پشتیبانی مداوم و خدمات اضافی نیاز دارید، به ما اطلاع دهید.'}
          {language === 'tr' && 'Web siteniz yayına alındıktan sonra sürekli destek ve ek hizmetlere ihtiyacınız olup olmadığını bize bildirin.'}
        </p>
      </div>

      {/* Technical Support */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Headphones className="w-5 h-5 text-blue-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you need ongoing technical support?'}
            {language === 'de' && 'Benötigen Sie laufenden technischen Support?'}
            {language === 'fa' && 'آیا به پشتیبانی فنی مداوم نیاز دارید؟'}
            {language === 'tr' && 'Sürekli teknik desteğe ihtiyacınız var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="needsSupport"
          options={getYesNoOptions('support')}
          value={data.needsSupport ? 'true' : 'false'}
          onChange={(value) => handleChange('needsSupport', value === 'true')}
          error={errors.needsSupport}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Content Management */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <RefreshCw className="w-5 h-5 text-green-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you want content management and SEO services?'}
            {language === 'de' && 'Möchten Sie Content-Management und SEO-Services?'}
            {language === 'fa' && 'آیا خدمات مدیریت محتوا و سئو می‌خواهید؟'}
            {language === 'tr' && 'İçerik yönetimi ve SEO hizmetleri istiyor musunuz?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="needsContentManagement"
          options={getYesNoOptions('content')}
          value={data.needsContentManagement ? 'true' : 'false'}
          onChange={(value) => handleChange('needsContentManagement', value === 'true')}
          error={errors.needsContentManagement}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Long-term Partnership */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Users className="w-5 h-5 text-purple-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Are you interested in a long-term partnership?'}
            {language === 'de' && 'Sind Sie an einer langfristigen Partnerschaft interessiert?'}
            {language === 'fa' && 'آیا به همکاری طولانی‌مدت علاقه‌مندید؟'}
            {language === 'tr' && 'Uzun vadeli ortaklıkla ilgileniyor musunuz?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="interestedInLongTerm"
          options={getYesNoOptions('longterm')}
          value={data.interestedInLongTerm ? 'true' : 'false'}
          onChange={(value) => handleChange('interestedInLongTerm', value === 'true')}
          error={errors.interestedInLongTerm}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Services Info Card */}
      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6 mt-8">
        <div className="flex items-center mb-3">
          <CheckCircle className="w-6 h-6 text-violet-600 mr-3" />
          <h3 className="font-semibold text-violet-900">
            {language === 'en' && 'Our Additional Services Include:'}
            {language === 'de' && 'Unsere zusätzlichen Services umfassen:'}
            {language === 'fa' && 'خدمات اضافی ما شامل:'}
            {language === 'tr' && 'Ek hizmetlerimiz şunları içerir:'}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-violet-700">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'Website maintenance & updates'}
            {language === 'de' && 'Website-Wartung & Updates'}
            {language === 'fa' && 'نگهداری و به‌روزرسانی وب‌سایت'}
            {language === 'tr' && 'Web sitesi bakımı ve güncellemeler'}
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'SEO optimization & monitoring'}
            {language === 'de' && 'SEO-Optimierung & Monitoring'}
            {language === 'fa' && 'بهینه‌سازی و نظارت بر سئو'}
            {language === 'tr' && 'SEO optimizasyonu ve izleme'}
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'Content creation & management'}
            {language === 'de' && 'Content-Erstellung & Management'}
            {language === 'fa' && 'ایجاد و مدیریت محتوا'}
            {language === 'tr' && 'İçerik oluşturma ve yönetimi'}
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'Performance optimization'}
            {language === 'de' && 'Performance-Optimierung'}
            {language === 'fa' && 'بهینه‌سازی عملکرد'}
            {language === 'tr' && 'Performans optimizasyonu'}
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'Security monitoring'}
            {language === 'de' && 'Sicherheitsüberwachung'}
            {language === 'fa' && 'نظارت بر امنیت'}
            {language === 'tr' && 'Güvenlik izleme'}
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-violet-400 rounded-full mr-2"></div>
            {language === 'en' && 'Analytics & reporting'}
            {language === 'de' && 'Analytics & Reporting'}
            {language === 'fa' && 'تجزیه و تحلیل و گزارش‌دهی'}
            {language === 'tr' && 'Analitik ve raporlama'}
          </div>
        </div>
      </div>

      {/* Final Progress Indicator */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
          <CheckCircle className="w-4 h-4 mr-2" />
          {language === 'en' && 'Step 10 of 10 - Almost Complete!'}
          {language === 'de' && 'Schritt 10 von 10 - Fast fertig!'}
          {language === 'fa' && 'مرحله ۱۰ از ۱۰ - تقریباً تمام!'}
          {language === 'tr' && 'Adım 10 / 10 - Neredeyse Tamamlandı!'}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;