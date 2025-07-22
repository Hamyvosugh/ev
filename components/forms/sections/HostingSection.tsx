'use client';

import React from 'react';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import TextField from '@/components/forms/fields/TextField';
import SelectField from '@/components/forms/fields/SelectField';
import { HostingDomain, SupportedLanguage, REGION_OPTIONS } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Globe, Server, MapPin } from 'lucide-react';

interface HostingSectionProps {
  data: HostingDomain;
  onChange: (data: HostingDomain) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const HostingSection: React.FC<HostingSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof HostingDomain, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getDomainOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I have a domain' },
        { value: 'false', label: 'No, I need help choosing a domain' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich habe eine Domain' },
        { value: 'false', label: 'Nein, ich brauche Hilfe bei der Domain-Auswahl' }
      ],
      fa: [
        { value: 'true', label: 'بله، دامنه دارم' },
        { value: 'false', label: 'خیر، برای انتخاب دامنه کمک نیاز دارم' }
      ],
      tr: [
        { value: 'true', label: 'Evet, domain\'im var' },
        { value: 'false', label: 'Hayır, domain seçiminde yardıma ihtiyacım var' }
      ]
    };
    return options[language] || options.en;
  };

  const getHostingOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I have hosting' },
        { value: 'false', label: 'No, please recommend hosting' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich habe Hosting' },
        { value: 'false', label: 'Nein, bitte empfehlen Sie Hosting' }
      ],
      fa: [
        { value: 'true', label: 'بله، هاست دارم' },
        { value: 'false', label: 'خیر، لطفاً هاست پیشنهاد دهید' }
      ],
      tr: [
        { value: 'true', label: 'Evet, hosting\'im var' },
        { value: 'false', label: 'Hayır, lütfen hosting önerin' }
      ]
    };
    return options[language] || options.en;
  };

  const getDomainProviderOptions = () => {
    const providers = {
      en: [
        { value: 'godaddy', label: 'GoDaddy' },
        { value: 'namecheap', label: 'Namecheap' },
        { value: 'ionos', label: 'IONOS' },
        { value: 'strato', label: 'Strato' },
        { value: 'united-domains', label: 'United Domains' },
        { value: 'other', label: 'Other Provider' },
        { value: 'unknown', label: 'I don\'t know' }
      ],
      de: [
        { value: 'godaddy', label: 'GoDaddy' },
        { value: 'namecheap', label: 'Namecheap' },
        { value: 'ionos', label: 'IONOS' },
        { value: 'strato', label: 'Strato' },
        { value: 'united-domains', label: 'United Domains' },
        { value: 'other', label: 'Anderer Anbieter' },
        { value: 'unknown', label: 'Ich weiß es nicht' }
      ],
      fa: [
        { value: 'godaddy', label: 'GoDaddy' },
        { value: 'namecheap', label: 'Namecheap' },
        { value: 'ionos', label: 'IONOS' },
        { value: 'strato', label: 'Strato' },
        { value: 'united-domains', label: 'United Domains' },
        { value: 'other', label: 'ارائه‌دهنده دیگر' },
        { value: 'unknown', label: 'نمی‌دانم' }
      ],
      tr: [
        { value: 'godaddy', label: 'GoDaddy' },
        { value: 'namecheap', label: 'Namecheap' },
        { value: 'ionos', label: 'IONOS' },
        { value: 'strato', label: 'Strato' },
        { value: 'united-domains', label: 'United Domains' },
        { value: 'other', label: 'Diğer Sağlayıcı' },
        { value: 'unknown', label: 'Bilmiyorum' }
      ]
    };
    return providers[language] || providers.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Server className="w-6 h-6 text-emerald-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.hostingDomain')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Let us know about your domain and hosting setup for your website.'}
          {language === 'de' && 'Teilen Sie uns Ihre Domain- und Hosting-Einrichtung für Ihre Website mit.'}
          {language === 'fa' && 'اطلاعات دامنه و هاست خود برای وب‌سایت را به ما بگویید.'}
          {language === 'tr' && 'Web siteniz için domain ve hosting kurulumunuz hakkında bize bilgi verin.'}
        </p>
      </div>

      {/* Domain */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Globe className="w-5 h-5 text-blue-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you have a domain?'}
            {language === 'de' && 'Haben Sie eine Domain?'}
            {language === 'fa' && 'آیا دامنه دارید؟'}
            {language === 'tr' && 'Domain\'iniz var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="hasDomain"
          options={getDomainOptions()}
          value={data.hasDomain ? 'true' : 'false'}
          onChange={(value) => handleChange('hasDomain', value === 'true')}
          error={errors.hasDomain}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Domain Provider */}
      {data.hasDomain && (
        <SelectField
          label={
            language === 'en' ? 'Which company is your domain registered with?' :
            language === 'de' ? 'Bei welcher Firma ist Ihre Domain registriert?' :
            language === 'fa' ? 'دامنه شما نزد کدام شرکت ثبت شده؟' :
            'Domain\'iniz hangi şirkette kayıtlı?'
          }
          options={getDomainProviderOptions()}
          value={data.domainProvider || ''}
          onChange={(value) => handleChange('domainProvider', value)}
          error={errors.domainProvider}
          language={language}
          placeholder={
            language === 'en' ? 'Select domain provider' :
            language === 'de' ? 'Domain-Anbieter auswählen' :
            language === 'fa' ? 'ارائه‌دهنده دامنه را انتخاب کنید' :
            'Domain sağlayıcısını seçin'
          }
        />
      )}

      {/* Hosting */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Server className="w-5 h-5 text-green-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you have hosting?'}
            {language === 'de' && 'Haben Sie Hosting?'}
            {language === 'fa' && 'آیا هاست دارید؟'}
            {language === 'tr' && 'Hosting\'iniz var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="hasHosting"
          options={getHostingOptions()}
          value={data.hasHosting ? 'true' : 'false'}
          onChange={(value) => handleChange('hasHosting', value === 'true')}
          error={errors.hasHosting}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Audience Region */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <MapPin className="w-5 h-5 text-purple-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Where are most of your visitors located?'}
            {language === 'de' && 'Wo befinden sich die meisten Ihrer Besucher?'}
            {language === 'fa' && 'اکثریت بازدیدکنندگان شما در کجا هستند؟'}
            {language === 'tr' && 'Ziyaretçilerinizin çoğu nerede bulunuyor?'}
          </h3>
        </div>

        <SelectField
          label=""
          options={REGION_OPTIONS}
          value={data.audienceRegion}
          onChange={(value) => handleChange('audienceRegion', value)}
          error={errors.audienceRegion}
          required
          language={language}
          placeholder={
            language === 'en' ? 'Select primary region' :
            language === 'de' ? 'Hauptregion auswählen' :
            language === 'fa' ? 'منطقه اصلی را انتخاب کنید' :
            'Ana bölgeyi seçin'
          }
          helperText={
            language === 'en' ? 'This helps us choose the best server location for optimal performance' :
            language === 'de' ? 'Dies hilft uns, den besten Serverstandort für optimale Leistung zu wählen' :
            language === 'fa' ? 'این به ما کمک می‌کند بهترین مکان سرور را برای عملکرد بهینه انتخاب کنیم' :
            'Bu, optimal performans için en iyi sunucu konumunu seçmemize yardımcı olur'
          }
        />
      </div>

      {/* Info Card */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-8">
        <div className="flex items-center mb-2">
          <Server className="w-5 h-5 text-emerald-600 mr-2" />
          <h3 className="font-medium text-emerald-900">
            {language === 'en' && 'Our Recommendations'}
            {language === 'de' && 'Unsere Empfehlungen'}
            {language === 'fa' && 'پیشنهادات ما'}
            {language === 'tr' && 'Önerilerimiz'}
          </h3>
        </div>
        <p className="text-sm text-emerald-700">
          {language === 'en' && 'We can help you choose reliable hosting and register domains. Our recommendations are based on performance, security, and cost-effectiveness.'}
          {language === 'de' && 'Wir können Ihnen bei der Auswahl zuverlässiger Hosting-Dienste und der Registrierung von Domains helfen. Unsere Empfehlungen basieren auf Leistung, Sicherheit und Kosteneffizienz.'}
          {language === 'fa' && 'ما می‌توانیم به شما در انتخاب هاست قابل اعتماد و ثبت دامنه کمک کنیم. پیشنهادات ما بر اساس عملکرد، امنیت و مقرون‌به‌صرفه بودن است.'}
          {language === 'tr' && 'Güvenilir hosting seçmenizde ve domain kaydetmenizde size yardımcı olabiliriz. Önerilerimiz performans, güvenlik ve maliyet etkinliği temelinde oluşturulmuştur.'}
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm">
          <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 8 of 10 - Hosting & Domain'}
          {language === 'de' && 'Schritt 8 von 10 - Hosting & Domain'}
          {language === 'fa' && 'مرحله ۸ از ۱۰ - هاست و دامنه'}
          {language === 'tr' && 'Adım 8 / 10 - Hosting ve Domain'}
        </div>
      </div>
    </div>
  );
};

export default HostingSection;