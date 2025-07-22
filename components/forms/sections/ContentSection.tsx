'use client';

import React from 'react';
import { MultiCheckboxField } from '@/components/forms/fields/CheckboxField';
import SelectField from '@/components/forms/fields/SelectField';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import { ContentStructure, SupportedLanguage, CONTENT_LANGUAGE_OPTIONS } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { FileText, Globe, UserCheck, Info, Layout, Languages } from 'lucide-react';

interface ContentSectionProps {
  data: ContentStructure;
  onChange: (data: ContentStructure) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof ContentStructure, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  // Page options based on language
  const getPageOptions = () => {
    const pages = {
      en: [
        { value: 'home', label: 'Home Page' },
        { value: 'about', label: 'About Us' },
        { value: 'services', label: 'Services/Products' },
        { value: 'portfolio', label: 'Portfolio/Gallery' },
        { value: 'shop', label: 'Online Shop' },
        { value: 'blog', label: 'Blog/News' },
        { value: 'contact', label: 'Contact Us' },
        { value: 'faq', label: 'FAQ' },
        { value: 'testimonials', label: 'Testimonials' },
        { value: 'team', label: 'Our Team' },
        { value: 'careers', label: 'Careers' },
        { value: 'privacy', label: 'Privacy Policy' },
        { value: 'terms', label: 'Terms of Service' },
        { value: 'sitemap', label: 'Sitemap' },
      ],
      de: [
        { value: 'home', label: 'Startseite' },
        { value: 'about', label: 'Über uns' },
        { value: 'services', label: 'Dienstleistungen/Produkte' },
        { value: 'portfolio', label: 'Portfolio/Galerie' },
        { value: 'shop', label: 'Online-Shop' },
        { value: 'blog', label: 'Blog/News' },
        { value: 'contact', label: 'Kontakt' },
        { value: 'faq', label: 'FAQ' },
        { value: 'testimonials', label: 'Testimonials' },
        { value: 'team', label: 'Unser Team' },
        { value: 'careers', label: 'Karriere' },
        { value: 'privacy', label: 'Datenschutz' },
        { value: 'terms', label: 'Nutzungsbedingungen' },
        { value: 'sitemap', label: 'Sitemap' },
      ],
      fa: [
        { value: 'home', label: 'صفحه اصلی' },
        { value: 'about', label: 'درباره ما' },
        { value: 'services', label: 'خدمات/محصولات' },
        { value: 'portfolio', label: 'نمونه کارها/گالری' },
        { value: 'shop', label: 'فروشگاه آنلاین' },
        { value: 'blog', label: 'بلاگ/اخبار' },
        { value: 'contact', label: 'تماس با ما' },
        { value: 'faq', label: 'سوالات متداول' },
        { value: 'testimonials', label: 'نظرات مشتریان' },
        { value: 'team', label: 'تیم ما' },
        { value: 'careers', label: 'فرصت‌های شغلی' },
        { value: 'privacy', label: 'حریم خصوصی' },
        { value: 'terms', label: 'شرایط استفاده' },
        { value: 'sitemap', label: 'نقشه سایت' },
      ],
      tr: [
        { value: 'home', label: 'Ana Sayfa' },
        { value: 'about', label: 'Hakkımızda' },
        { value: 'services', label: 'Hizmetler/Ürünler' },
        { value: 'portfolio', label: 'Portföy/Galeri' },
        { value: 'shop', label: 'Online Mağaza' },
        { value: 'blog', label: 'Blog/Haberler' },
        { value: 'contact', label: 'İletişim' },
        { value: 'faq', label: 'SSS' },
        { value: 'testimonials', label: 'Referanslar' },
        { value: 'team', label: 'Ekibimiz' },
        { value: 'careers', label: 'Kariyer' },
        { value: 'privacy', label: 'Gizlilik Politikası' },
        { value: 'terms', label: 'Kullanım Şartları' },
        { value: 'sitemap', label: 'Site Haritası' },
      ]
    };
    return pages[language] || pages.en;
  };

  // User registration options
  const getUserRegistrationOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, users need to register/login' },
        { value: 'false', label: 'No, no user registration needed' }
      ],
      de: [
        { value: 'true', label: 'Ja, Nutzer müssen sich registrieren/anmelden' },
        { value: 'false', label: 'Nein, keine Benutzerregistrierung erforderlich' }
      ],
      fa: [
        { value: 'true', label: 'بله، کاربران باید ثبت‌نام/ورود کنند' },
        { value: 'false', label: 'خیر، نیازی به ثبت‌نام کاربر نیست' }
      ],
      tr: [
        { value: 'true', label: 'Evet, kullanıcıların kaydolması/giriş yapması gerekiyor' },
        { value: 'false', label: 'Hayır, kullanıcı kaydı gerekli değil' }
      ]
    };
    return options[language] || options.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Layout className="w-6 h-6 text-green-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.contentStructure')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Define the pages, language, and user interaction requirements for your website structure.'}
          {language === 'de' && 'Definieren Sie die Seiten, Sprache und Benutzerinteraktionsanforderungen für Ihre Website-Struktur.'}
          {language === 'fa' && 'صفحات، زبان و نیازهای تعامل کاربر برای ساختار وب‌سایت خود را تعریف کنید.'}
          {language === 'tr' && 'Web sitesi yapınız için sayfa, dil ve kullanıcı etkileşim gereksinimlerini tanımlayın.'}
        </p>
      </div>

      {/* Required Pages */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What pages do you need for your website?'}
              {language === 'de' && 'Welche Seiten benötigen Sie für Ihre Website?'}
              {language === 'fa' && 'چه صفحاتی را برای وب‌سایت خود نیاز دارید؟'}
              {language === 'tr' && 'Web siteniz için hangi sayfalara ihtiyacınız var?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Select all pages that should be included in your website'}
              {language === 'de' && 'Wählen Sie alle Seiten aus, die in Ihre Website aufgenommen werden sollen'}
              {language === 'fa' && 'تمام صفحاتی که باید در وب‌سایت شما گنجانده شود را انتخاب کنید'}
              {language === 'tr' && 'Web sitenizde yer alması gereken tüm sayfaları seçin'}
            </p>
          </div>
        </div>

        <MultiCheckboxField
          label=""
          name="requiredPages"
          options={getPageOptions()}
          values={data.requiredPages}
          onChange={(values) => handleChange('requiredPages', values)}
          error={errors.requiredPages}
          language={language}
          layout="grid"
          size="md"
        />
      </div>

      {/* Website Language */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Languages className="w-4 h-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What is the primary language for your website content?'}
              {language === 'de' && 'Was ist die Hauptsprache für Ihre Website-Inhalte?'}
              {language === 'fa' && 'زبان اصلی محتوای وب‌سایت شما چیست؟'}
              {language === 'tr' && 'Web sitesi içeriğinizin ana dili nedir?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'This will be the main language for all content and interface elements'}
              {language === 'de' && 'Dies wird die Hauptsprache für alle Inhalte und Schnittstellenelemente sein'}
              {language === 'fa' && 'این زبان اصلی برای تمام محتوا و عناصر رابط کاربری خواهد بود'}
              {language === 'tr' && 'Bu, tüm içerik ve arayüz öğeleri için ana dil olacaktır'}
            </p>
          </div>
        </div>

        <SelectField
          label=""
          options={CONTENT_LANGUAGE_OPTIONS}
          value={data.language}
          onChange={(value) => handleChange('language', value)}
          error={errors.language}
          required
          language={language}
          placeholder={
            language === 'en' ? 'Select primary language' :
            language === 'de' ? 'Hauptsprache auswählen' :
            language === 'fa' ? 'زبان اصلی را انتخاب کنید' :
            language === 'tr' ? 'Ana dili seçin' : ''
          }
        />
      </div>

      {/* User Registration */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <UserCheck className="w-4 h-4 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Do users need to register or have user accounts?'}
              {language === 'de' && 'Müssen sich Benutzer registrieren oder Benutzerkonten haben?'}
              {language === 'fa' && 'آیا کاربران باید ثبت‌نام کنند یا حساب کاربری داشته باشند؟'}
              {language === 'tr' && 'Kullanıcıların kaydolması veya kullanıcı hesapları olması gerekiyor mu?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'This affects features like user dashboards, login systems, and personalized content'}
              {language === 'de' && 'Dies beeinflusst Funktionen wie Benutzer-Dashboards, Login-Systeme und personalisierte Inhalte'}
              {language === 'fa' && 'این بر ویژگی‌هایی مانند داشبورد کاربری، سیستم ورود و محتوای شخصی‌سازی شده تأثیر می‌گذارد'}
              {language === 'tr' ? 'Bu, kullanıcı panelleri, giriş sistemleri ve kişiselleştirilmiş içerik gibi özellikleri etkiler' : ''}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="userRegistration"
          options={getUserRegistrationOptions()}
          value={data.userRegistration ? 'true' : 'false'}
          onChange={(value) => handleChange('userRegistration', value === 'true')}
          error={errors.userRegistration}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-950 border border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Info className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="font-medium text-green-900">
              {language === 'en' && 'Content Planning'}
              {language === 'de' && 'Inhaltsplanung'}
              {language === 'fa' && 'برنامه‌ریزی محتوا'}
              {language === 'tr' && 'İçerik Planlama'}
            </h3>
          </div>
          <p className="text-sm text-green-700">
            {language === 'en' && 'Consider your content creation capacity. More pages mean more content to write and maintain.'}
            {language === 'de' && 'Berücksichtigen Sie Ihre Kapazität zur Inhaltserstellung. Mehr Seiten bedeuten mehr Inhalte zum Schreiben und Pflegen.'}
            {language === 'fa' && 'ظرفیت تولید محتوای خود را در نظر بگیرید. صفحات بیشتر به معنای محتوای بیشتر برای نوشتن و نگهداری است.'}
            {language === 'tr' && 'İçerik oluşturma kapasitenizi göz önünde bulundurun. Daha fazla sayfa, yazılacak ve bakım yapılacak daha fazla içerik demektir.'}
          </p>
        </div>

        <div className="bg-blue-950 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Globe className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="font-medium text-purple-900">
              {language === 'en' && 'Multi-language Support'}
              {language === 'de' && 'Mehrsprachige Unterstützung'}
              {language === 'fa' && 'پشتیبانی چندزبانه'}
              {language === 'tr' && 'Çok Dilli Destek'}
            </h3>
          </div>
          <p className="text-sm text-purple-700">
            {language === 'en' && 'If you need multiple languages later, we can implement that. Start with your primary language for now.'}
            {language === 'de' && 'Wenn Sie später mehrere Sprachen benötigen, können wir das implementieren. Beginnen Sie vorerst mit Ihrer Hauptsprache.'}
            {language === 'fa' && 'اگر بعداً به زبان‌های متعدد نیاز داشتید، ما می‌توانیم آن را پیاده‌سازی کنیم. فعلاً با زبان اصلی خود شروع کنید.'}
            {language === 'tr' && 'Daha sonra birden fazla dile ihtiyacınız olursa, bunu uygulayabiliriz. Şimdilik ana dilinizle başlayın.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 3 of 10 - Content & Structure'}
          {language === 'de' && 'Schritt 3 von 10 - Inhalt & Struktur'}
          {language === 'fa' && 'مرحله ۳ از ۱۰ - محتوا و ساختار'}
          {language === 'tr' && 'Adım 3 / 10 - İçerik ve Yapı'}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;