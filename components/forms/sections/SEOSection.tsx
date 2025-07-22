'use client';

import React from 'react';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import TextField from '@/components/forms/fields/TextField';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import { SEOMarketing, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Search, TrendingUp, Edit, Share2 } from 'lucide-react';

interface SEOSectionProps {
  data: SEOMarketing;
  onChange: (data: SEOMarketing) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const SEOSection: React.FC<SEOSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof SEOMarketing, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getYesNoOptions = (type: 'keywords' | 'strategy' | 'blog') => {
    const labels = {
      keywords: {
        yes: language === 'en' ? 'Yes, I know my target keywords' : 
             language === 'de' ? 'Ja, ich kenne meine Ziel-Keywords' :
             language === 'fa' ? 'بله، کلمات کلیدی هدف را می‌دانم' :
             'Evet, hedef anahtar kelimelerimi biliyorum',
        no: language === 'en' ? 'No, I need help with keyword research' :
            language === 'de' ? 'Nein, ich brauche Hilfe bei der Keyword-Recherche' :
            language === 'fa' ? 'خیر، برای تحقیق کلمات کلیدی کمک نیاز دارم' :
            'Hayır, anahtar kelime araştırmasında yardıma ihtiyacım var'
      },
      strategy: {
        yes: language === 'en' ? 'Yes, I have an SEO strategy' :
             language === 'de' ? 'Ja, ich habe eine SEO-Strategie' :
             language === 'fa' ? 'بله، استراتژی سئو دارم' :
             'Evet, SEO stratejim var',
        no: language === 'en' ? 'No, please recommend an SEO strategy' :
            language === 'de' ? 'Nein, bitte empfehlen Sie eine SEO-Strategie' :
            language === 'fa' ? 'خیر، لطفاً استراتژی سئو پیشنهاد دهید' :
            'Hayır, lütfen bir SEO stratejisi önerin'
      },
      blog: {
        yes: language === 'en' ? 'Yes, I want a blog for SEO content' :
             language === 'de' ? 'Ja, ich möchte einen Blog für SEO-Inhalte' :
             language === 'fa' ? 'بله، برای محتوای سئو بلاگ می‌خواهم' :
             'Evet, SEO içeriği için blog istiyorum',
        no: language === 'en' ? 'No, blog is not needed' :
            language === 'de' ? 'Nein, Blog wird nicht benötigt' :
            language === 'fa' ? 'خیر، بلاگ لازم نیست' :
            'Hayır, blog gerekli değil'
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
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Search className="w-6 h-6 text-orange-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.seoMarketing')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Help us optimize your website for search engines and plan your content strategy.'}
          {language === 'de' && 'Helfen Sie uns, Ihre Website für Suchmaschinen zu optimieren und Ihre Content-Strategie zu planen.'}
          {language === 'fa' && 'به ما کمک کنید وب‌سایت شما را برای موتورهای جستجو بهینه‌سازی کنیم و استراتژی محتوای شما را برنامه‌ریزی کنیم.'}
          {language === 'tr' && 'Web sitenizi arama motorları için optimize etmemize ve içerik stratejinizi planlamamıza yardımcı olun.'}
        </p>
      </div>

      {/* Keywords Knowledge */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you know your target keywords?'}
            {language === 'de' && 'Kennen Sie Ihre Ziel-Keywords?'}
            {language === 'fa' && 'آیا کلمات کلیدی هدف خود را می‌دانید؟'}
            {language === 'tr' && 'Hedef anahtar kelimelerinizi biliyor musunuz?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="knowsKeywords"
          options={getYesNoOptions('keywords')}
          value={data.knowsKeywords ? 'true' : 'false'}
          onChange={(value) => handleChange('knowsKeywords', value === 'true')}
          error={errors.knowsKeywords}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Keywords Input */}
      {data.knowsKeywords && (
        <TextField
          label={
            language === 'en' ? 'Your target keywords' :
            language === 'de' ? 'Ihre Ziel-Keywords' :
            language === 'fa' ? 'کلمات کلیدی هدف شما' :
            'Hedef anahtar kelimeleriniz'
          }
          name="keywords"
          value={data.keywords || ''}
          onChange={(e) => handleChange('keywords', e.target.value)}
          placeholder={
            language === 'en' ? 'e.g: web design, digital marketing, SEO services' :
            language === 'de' ? 'z.B: Webdesign, digitales Marketing, SEO-Dienstleistungen' :
            language === 'fa' ? 'مثال: طراحی وب، دیجیتال مارکتینگ، خدمات سئو' :
            'örn: web tasarım, dijital pazarlama, SEO hizmetleri'
          }
          error={errors.keywords}
          language={language}
          icon={<Search className="w-5 h-5" />}
        />
      )}

      {/* SEO Strategy */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you have an SEO strategy?'}
            {language === 'de' && 'Haben Sie eine SEO-Strategie?'}
            {language === 'fa' && 'آیا استراتژی سئو دارید؟'}
            {language === 'tr' && 'SEO stratejiniz var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="hasSEOStrategy"
          options={getYesNoOptions('strategy')}
          value={data.hasSEOStrategy ? 'true' : 'false'}
          onChange={(value) => handleChange('hasSEOStrategy', value === 'true')}
          error={errors.hasSEOStrategy}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Blog/Content */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Edit className="w-5 h-5 text-purple-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you need a blog or SEO content section?'}
            {language === 'de' && 'Benötigen Sie einen Blog oder SEO-Content-Bereich?'}
            {language === 'fa' && 'آیا به بلاگ یا بخش محتوای سئو نیاز دارید؟'}
            {language === 'tr' && 'Blog veya SEO içerik bölümüne ihtiyacınız var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="needsBlog"
          options={getYesNoOptions('blog')}
          value={data.needsBlog ? 'true' : 'false'}
          onChange={(value) => handleChange('needsBlog', value === 'true')}
          error={errors.needsBlog}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Share2 className="w-5 h-5 text-red-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Social media pages to display'}
            {language === 'de' && 'Anzuzeigende Social-Media-Seiten'}
            {language === 'fa' && 'صفحات شبکه‌های اجتماعی برای نمایش'}
            {language === 'tr' && 'Görüntülenecek sosyal medya sayfaları'}
          </h3>
        </div>

        <TextAreaField
          label=""
          name="socialMediaLinks"
          value={data.socialMediaLinks}
          onChange={(e) => handleChange('socialMediaLinks', e.target.value)}
          placeholder={
            language === 'en' ? 'Facebook: https://facebook.com/yourpage\nInstagram: https://instagram.com/yourpage\nLinkedIn: https://linkedin.com/company/yourcompany' :
            language === 'de' ? 'Facebook: https://facebook.com/ihreseite\nInstagram: https://instagram.com/ihreseite\nLinkedIn: https://linkedin.com/company/ihrefirma' :
            language === 'fa' ? 'فیسبوک: https://facebook.com/yourpage\nاینستاگرام: https://instagram.com/yourpage\nلینکدین: https://linkedin.com/company/yourcompany' :
            'Facebook: https://facebook.com/sayfaniz\nInstagram: https://instagram.com/sayfaniz\nLinkedIn: https://linkedin.com/company/sirketiniz'
          }
          error={errors.socialMediaLinks}
          language={language}
          minRows={4}
          maxLength={1000}
          helperText={
            language === 'en' ? 'Enter one social media link per line' :
            language === 'de' ? 'Geben Sie einen Social-Media-Link pro Zeile ein' :
            language === 'fa' ? 'هر خط یک لینک شبکه اجتماعی وارد کنید' :
            'Her satıra bir sosyal medya bağlantısı girin'
          }
        />
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-black text-sm">
          <div className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 6 of 10 - SEO & Marketing'}
          {language === 'de' && 'Schritt 6 von 10 - SEO & Marketing'}
          {language === 'fa' && 'مرحله ۶ از ۱۰ - سئو و مارکتینگ'}
          {language === 'tr' && 'Adım 6 / 10 - SEO ve Pazarlama'}
        </div>
      </div>
    </div>
  );
};

export default SEOSection;