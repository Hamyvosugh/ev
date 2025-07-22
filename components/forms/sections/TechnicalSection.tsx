'use client';

import React from 'react';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import SelectField from '@/components/forms/fields/SelectField';
import { MultiCheckboxField } from '@/components/forms/fields/CheckboxField';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import { TechnicalFeatures, SupportedLanguage, CONTENT_LANGUAGE_OPTIONS } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Settings, Database, CreditCard, Globe, Users, Link, Code, Shield, Languages } from 'lucide-react';

interface TechnicalSectionProps {
  data: TechnicalFeatures;
  onChange: (data: TechnicalFeatures) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const TechnicalSection: React.FC<TechnicalSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof TechnicalFeatures, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  // CMS options
  const getCMSOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I need a content management system' },
        { value: 'false', label: 'No, static website is fine' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich brauche ein Content-Management-System' },
        { value: 'false', label: 'Nein, eine statische Website ist in Ordnung' }
      ],
      fa: [
        { value: 'true', label: 'بله، به سیستم مدیریت محتوا نیاز دارم' },
        { value: 'false', label: 'خیر، وب‌سایت استاتیک مناسب است' }
      ],
      tr: [
        { value: 'true', label: 'Evet, içerik yönetim sistemine ihtiyacım var' },
        { value: 'false', label: 'Hayır, statik web sitesi uygun' }
      ]
    };
    return options[language] || options.en;
  };

  // CMS Type options
  const getCMSTypeOptions = () => {
    const types = {
      en: [
        { value: 'wordpress', label: 'WordPress (Popular & User-friendly)' },
        { value: 'headless', label: 'Headless CMS (Modern & Fast)' },
        { value: 'custom', label: 'Custom Admin Panel' },
        { value: 'recommend', label: 'Let you recommend the best option' }
      ],
      de: [
        { value: 'wordpress', label: 'WordPress (Beliebt & Benutzerfreundlich)' },
        { value: 'headless', label: 'Headless CMS (Modern & Schnell)' },
        { value: 'custom', label: 'Benutzerdefiniertes Admin-Panel' },
        { value: 'recommend', label: 'Lassen Sie uns die beste Option empfehlen' }
      ],
      fa: [
        { value: 'wordpress', label: 'وردپرس (محبوب و کاربرپسند)' },
        { value: 'headless', label: 'CMS هدلس (مدرن و سریع)' },
        { value: 'custom', label: 'پنل مدیریت اختصاصی' },
        { value: 'recommend', label: 'بهترین گزینه را پیشنهاد دهید' }
      ],
      tr: [
        { value: 'wordpress', label: 'WordPress (Popüler ve Kullanıcı Dostu)' },
        { value: 'headless', label: 'Headless CMS (Modern ve Hızlı)' },
        { value: 'custom', label: 'Özel Yönetim Paneli' },
        { value: 'recommend', label: 'En iyi seçeneği önermenizi istiyorum' }
      ]
    };
    return types[language] || types.en;
  };

  // Custom Forms options
  const getCustomFormsOptions = () => {
    const forms = {
      en: [
        { value: 'contact', label: 'Contact Form', helperText: 'Basic contact and inquiry form' },
        { value: 'booking', label: 'Booking/Reservation', helperText: 'Appointment or service booking' },
        { value: 'quote', label: 'Quote Request', helperText: 'Price estimation requests' },
        { value: 'newsletter', label: 'Newsletter Signup', helperText: 'Email subscription form' },
        { value: 'application', label: 'Application Form', helperText: 'Job or service applications' },
        { value: 'survey', label: 'Survey/Feedback', helperText: 'Customer feedback collection' },
        { value: 'upload', label: 'File Upload', helperText: 'Document or image uploads' },
        { value: 'registration', label: 'User Registration', helperText: 'Account creation forms' },
        { value: 'custom', label: 'Custom Forms', helperText: 'Specific business needs' }
      ],
      de: [
        { value: 'contact', label: 'Kontaktformular', helperText: 'Grundlegendes Kontakt- und Anfrageformular' },
        { value: 'booking', label: 'Buchung/Reservierung', helperText: 'Termin- oder Servicebuchung' },
        { value: 'quote', label: 'Angebot anfordern', helperText: 'Preisschätzungsanfragen' },
        { value: 'newsletter', label: 'Newsletter-Anmeldung', helperText: 'E-Mail-Abonnement-Formular' },
        { value: 'application', label: 'Bewerbungsformular', helperText: 'Job- oder Servicebewerbungen' },
        { value: 'survey', label: 'Umfrage/Feedback', helperText: 'Kundenfeedback-Sammlung' },
        { value: 'upload', label: 'Datei-Upload', helperText: 'Dokument- oder Bild-Uploads' },
        { value: 'registration', label: 'Benutzerregistrierung', helperText: 'Kontoerstellungsformulare' },
        { value: 'custom', label: 'Benutzerdefinierte Formulare', helperText: 'Spezifische Geschäftsanforderungen' }
      ],
      fa: [
        { value: 'contact', label: 'فرم تماس', helperText: 'فرم تماس و استعلام پایه' },
        { value: 'booking', label: 'رزرو/نوبت‌دهی', helperText: 'رزرو نوبت یا خدمات' },
        { value: 'quote', label: 'درخواست قیمت', helperText: 'درخواست برآورد قیمت' },
        { value: 'newsletter', label: 'عضویت خبرنامه', helperText: 'فرم اشتراک ایمیل' },
        { value: 'application', label: 'فرم درخواست', helperText: 'درخواست‌های شغلی یا خدماتی' },
        { value: 'survey', label: 'نظرسنجی/بازخورد', helperText: 'جمع‌آوری بازخورد مشتری' },
        { value: 'upload', label: 'آپلود فایل', helperText: 'آپلود اسناد یا تصاویر' },
        { value: 'registration', label: 'ثبت‌نام کاربری', helperText: 'فرم‌های ایجاد حساب' },
        { value: 'custom', label: 'فرم‌های سفارشی', helperText: 'نیازهای خاص کسب‌وکار' }
      ],
      tr: [
        { value: 'contact', label: 'İletişim Formu', helperText: 'Temel iletişim ve sorgulama formu' },
        { value: 'booking', label: 'Rezervasyon', helperText: 'Randevu veya hizmet rezervasyonu' },
        { value: 'quote', label: 'Fiyat Talebi', helperText: 'Fiyat tahmini talepleri' },
        { value: 'newsletter', label: 'Haber Bülteni Kaydı', helperText: 'E-posta abonelik formu' },
        { value: 'application', label: 'Başvuru Formu', helperText: 'İş veya hizmet başvuruları' },
        { value: 'survey', label: 'Anket/Geri Bildirim', helperText: 'Müşteri geri bildirim toplama' },
        { value: 'upload', label: 'Dosya Yükleme', helperText: 'Belge veya resim yüklemeleri' },
        { value: 'registration', label: 'Kullanıcı Kaydı', helperText: 'Hesap oluşturma formları' },
        { value: 'custom', label: 'Özel Formlar', helperText: 'Özel iş ihtiyaçları' }
      ]
    };
    return forms[language] || forms.en;
  };

  // Payment Gateway options
  const getPaymentOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I need payment processing' },
        { value: 'false', label: 'No, no payments needed' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich brauche Zahlungsverarbeitung' },
        { value: 'false', label: 'Nein, keine Zahlungen erforderlich' }
      ],
      fa: [
        { value: 'true', label: 'بله، به پردازش پرداخت نیاز دارم' },
        { value: 'false', label: 'خیر، نیازی به پرداخت نیست' }
      ],
      tr: [
        { value: 'true', label: 'Evet, ödeme işleme ihtiyacım var' },
        { value: 'false', label: 'Hayır, ödeme gerekmiyor' }
      ]
    };
    return options[language] || options.en;
  };

  // Payment Country options
  const getPaymentCountryOptions = () => {
    const countries = {
      en: [
        { value: 'germany', label: 'Germany' },
        { value: 'usa', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'france', label: 'France' },
        { value: 'turkey', label: 'Turkey' },
        { value: 'iran', label: 'Iran' },
        { value: 'other', label: 'Other Country' }
      ],
      de: [
        { value: 'germany', label: 'Deutschland' },
        { value: 'usa', label: 'Vereinigte Staaten' },
        { value: 'uk', label: 'Vereinigtes Königreich' },
        { value: 'france', label: 'Frankreich' },
        { value: 'turkey', label: 'Türkei' },
        { value: 'iran', label: 'Iran' },
        { value: 'other', label: 'Anderes Land' }
      ],
      fa: [
        { value: 'germany', label: 'آلمان' },
        { value: 'usa', label: 'ایالات متحده' },
        { value: 'uk', label: 'انگلستان' },
        { value: 'france', label: 'فرانسه' },
        { value: 'turkey', label: 'ترکیه' },
        { value: 'iran', label: 'ایران' },
        { value: 'other', label: 'کشور دیگر' }
      ],
      tr: [
        { value: 'germany', label: 'Almanya' },
        { value: 'usa', label: 'Amerika Birleşik Devletleri' },
        { value: 'uk', label: 'Birleşik Krallık' },
        { value: 'france', label: 'Fransa' },
        { value: 'turkey', label: 'Türkiye' },
        { value: 'iran', label: 'İran' },
        { value: 'other', label: 'Diğer Ülke' }
      ]
    };
    return countries[language] || countries.en;
  };

  // Multi-language options
  const getMultiLanguageOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, website should support multiple languages' },
        { value: 'false', label: 'No, single language is sufficient' }
      ],
      de: [
        { value: 'true', label: 'Ja, die Website sollte mehrere Sprachen unterstützen' },
        { value: 'false', label: 'Nein, eine Sprache ist ausreichend' }
      ],
      fa: [
        { value: 'true', label: 'بله، وب‌سایت باید از چندین زبان پشتیبانی کند' },
        { value: 'false', label: 'خیر، یک زبان کافی است' }
      ],
      tr: [
        { value: 'true', label: 'Evet, web sitesi birden fazla dili desteklemeli' },
        { value: 'false', label: 'Hayır, tek dil yeterli' }
      ]
    };
    return options[language] || options.en;
  };

  // User Content options
  const getUserContentOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, users should be able to create content' },
        { value: 'false', label: 'No, only admins create content' }
      ],
      de: [
        { value: 'true', label: 'Ja, Benutzer sollten Inhalte erstellen können' },
        { value: 'false', label: 'Nein, nur Administratoren erstellen Inhalte' }
      ],
      fa: [
        { value: 'true', label: 'بله، کاربران باید بتوانند محتوا ایجاد کنند' },
        { value: 'false', label: 'خیر، فقط ادمین‌ها محتوا ایجاد می‌کنند' }
      ],
      tr: [
        { value: 'true', label: 'Evet, kullanıcılar içerik oluşturabilmeli' },
        { value: 'false', label: 'Hayır, sadece yöneticiler içerik oluşturur' }
      ]
    };
    return options[language] || options.en;
  };

  // User Content Types
  const getUserContentTypeOptions = () => {
    const types = {
      en: [
        { value: 'listings', label: 'Listings/Ads', helperText: 'Users can post classified ads or listings' },
        { value: 'comments', label: 'Comments', helperText: 'Comment system on posts/products' },
        { value: 'reviews', label: 'Reviews/Ratings', helperText: 'User reviews and ratings' },
        { value: 'messages', label: 'Private Messages', helperText: 'User-to-user messaging' },
        { value: 'posts', label: 'Blog Posts', helperText: 'Users can write blog posts' },
        { value: 'reports', label: 'Reports/Submissions', helperText: 'User-generated reports' },
        { value: 'media', label: 'Media Upload', helperText: 'Users can upload images/videos' }
      ],
      de: [
        { value: 'listings', label: 'Anzeigen/Inserate', helperText: 'Benutzer können Kleinanzeigen oder Inserate veröffentlichen' },
        { value: 'comments', label: 'Kommentare', helperText: 'Kommentarsystem für Beiträge/Produkte' },
        { value: 'reviews', label: 'Bewertungen', helperText: 'Benutzerbewertungen und -bewertungen' },
        { value: 'messages', label: 'Private Nachrichten', helperText: 'Benutzer-zu-Benutzer-Nachrichten' },
        { value: 'posts', label: 'Blog-Beiträge', helperText: 'Benutzer können Blog-Beiträge schreiben' },
        { value: 'reports', label: 'Berichte/Einreichungen', helperText: 'Benutzer-generierte Berichte' },
        { value: 'media', label: 'Medien-Upload', helperText: 'Benutzer können Bilder/Videos hochladen' }
      ],
      fa: [
        { value: 'listings', label: 'آگهی‌ها/فهرست', helperText: 'کاربران می‌توانند آگهی طبقه‌بندی شده ارسال کنند' },
        { value: 'comments', label: 'نظرات', helperText: 'سیستم نظرات روی پست‌ها/محصولات' },
        { value: 'reviews', label: 'بررسی‌ها/امتیازها', helperText: 'بررسی و امتیازدهی کاربران' },
        { value: 'messages', label: 'پیام‌های خصوصی', helperText: 'پیام‌رسانی کاربر به کاربر' },
        { value: 'posts', label: 'پست‌های بلاگ', helperText: 'کاربران می‌توانند پست بلاگ بنویسند' },
        { value: 'reports', label: 'گزارش‌ها/ارسال‌ها', helperText: 'گزارش‌های تولید شده توسط کاربر' },
        { value: 'media', label: 'آپلود رسانه', helperText: 'کاربران می‌توانند تصویر/ویدیو آپلود کنند' }
      ],
      tr: [
        { value: 'listings', label: 'İlanlar/Listeler', helperText: 'Kullanıcılar sınıflandırılmış ilan veya liste yayınlayabilir' },
        { value: 'comments', label: 'Yorumlar', helperText: 'Gönderiler/ürünler için yorum sistemi' },
        { value: 'reviews', label: 'İncelemeler/Puanlar', helperText: 'Kullanıcı incelemeleri ve puanları' },
        { value: 'messages', label: 'Özel Mesajlar', helperText: 'Kullanıcıdan kullanıcıya mesajlaşma' },
        { value: 'posts', label: 'Blog Gönderileri', helperText: 'Kullanıcılar blog gönderileri yazabilir' },
        { value: 'reports', label: 'Raporlar/Gönderimler', helperText: 'Kullanıcı tarafından oluşturulan raporlar' },
        { value: 'media', label: 'Medya Yükleme', helperText: 'Kullanıcılar resim/video yükleyebilir' }
      ]
    };
    return types[language] || types.en;
  };

  // Integration options
  const getIntegrationOptions = () => {
    const integrations = {
      en: [
        { value: 'google_analytics', label: 'Google Analytics', helperText: 'Website traffic and user behavior tracking' },
        { value: 'google_ads', label: 'Google Ads', helperText: 'Advertising campaign tracking' },
        { value: 'facebook_pixel', label: 'Facebook Pixel', helperText: 'Social media advertising tracking' },
        { value: 'email_marketing', label: 'Email Marketing', helperText: 'MailChimp, Constant Contact, etc.' },
        { value: 'crm', label: 'CRM System', helperText: 'Customer relationship management' },
        { value: 'accounting', label: 'Accounting Software', helperText: 'QuickBooks, Xero, etc.' },
        { value: 'inventory', label: 'Inventory Management', helperText: 'Stock and product management' },
        { value: 'shipping', label: 'Shipping APIs', helperText: 'DHL, UPS, FedEx integration' },
        { value: 'social_media', label: 'Social Media', helperText: 'Auto-posting to social platforms' },
        { value: 'chat', label: 'Live Chat', helperText: 'Customer support chat systems' }
      ],
      de: [
        { value: 'google_analytics', label: 'Google Analytics', helperText: 'Website-Traffic und Nutzerverhalten-Tracking' },
        { value: 'google_ads', label: 'Google Ads', helperText: 'Werbekampagnen-Tracking' },
        { value: 'facebook_pixel', label: 'Facebook Pixel', helperText: 'Social Media Werbung-Tracking' },
        { value: 'email_marketing', label: 'E-Mail-Marketing', helperText: 'MailChimp, Constant Contact, etc.' },
        { value: 'crm', label: 'CRM-System', helperText: 'Kundenbeziehungsmanagement' },
        { value: 'accounting', label: 'Buchhaltungssoftware', helperText: 'QuickBooks, Xero, etc.' },
        { value: 'inventory', label: 'Lagerverwaltung', helperText: 'Lager- und Produktmanagement' },
        { value: 'shipping', label: 'Versand-APIs', helperText: 'DHL, UPS, FedEx Integration' },
        { value: 'social_media', label: 'Social Media', helperText: 'Auto-Posting auf Social Plattformen' },
        { value: 'chat', label: 'Live-Chat', helperText: 'Kundensupport-Chat-Systeme' }
      ],
      fa: [
        { value: 'google_analytics', label: 'گوگل آنالیتیکس', helperText: 'ردیابی ترافیک وب‌سایت و رفتار کاربر' },
        { value: 'google_ads', label: 'تبلیغات گوگل', helperText: 'ردیابی کمپین‌های تبلیغاتی' },
        { value: 'facebook_pixel', label: 'پیکسل فیسبوک', helperText: 'ردیابی تبلیغات شبکه‌های اجتماعی' },
        { value: 'email_marketing', label: 'ایمیل مارکتینگ', helperText: 'MailChimp، Constant Contact و غیره' },
        { value: 'crm', label: 'سیستم CRM', helperText: 'مدیریت روابط مشتری' },
        { value: 'accounting', label: 'نرم‌افزار حسابداری', helperText: 'QuickBooks، Xero و غیره' },
        { value: 'inventory', label: 'مدیریت موجودی', helperText: 'مدیریت انبار و محصول' },
        { value: 'shipping', label: 'API های حمل و نقل', helperText: 'یکپارچگی DHL، UPS، FedEx' },
        { value: 'social_media', label: 'شبکه‌های اجتماعی', helperText: 'پست خودکار در پلتفرم‌های اجتماعی' },
        { value: 'chat', label: 'چت زنده', helperText: 'سیستم‌های چت پشتیبانی مشتری' }
      ],
      tr: [
        { value: 'google_analytics', label: 'Google Analytics', helperText: 'Web sitesi trafiği ve kullanıcı davranışı takibi' },
        { value: 'google_ads', label: 'Google Ads', helperText: 'Reklam kampanyası takibi' },
        { value: 'facebook_pixel', label: 'Facebook Pixel', helperText: 'Sosyal medya reklam takibi' },
        { value: 'email_marketing', label: 'E-posta Pazarlama', helperText: 'MailChimp, Constant Contact, vb.' },
        { value: 'crm', label: 'CRM Sistemi', helperText: 'Müşteri ilişkileri yönetimi' },
        { value: 'accounting', label: 'Muhasebe Yazılımı', helperText: 'QuickBooks, Xero, vb.' },
        { value: 'inventory', label: 'Envanter Yönetimi', helperText: 'Stok ve ürün yönetimi' },
        { value: 'shipping', label: 'Kargo API\'leri', helperText: 'DHL, UPS, FedEx entegrasyonu' },
        { value: 'social_media', label: 'Sosyal Medya', helperText: 'Sosyal platformlara otomatik gönderim' },
        { value: 'chat', label: 'Canlı Sohbet', helperText: 'Müşteri destek sohbet sistemleri' }
      ]
    };
    return integrations[language] || integrations.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <Settings className="w-6 h-6 text-indigo-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.technicalFeatures')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Define the technical requirements and functionality needed for your website to operate effectively.'}
          {language === 'de' && 'Definieren Sie die technischen Anforderungen und Funktionalitäten, die Ihre Website für einen effektiven Betrieb benötigt.'}
          {language === 'fa' && 'نیازهای فنی و عملکردی مورد نیاز برای عملکرد مؤثر وب‌سایت خود را تعریف کنید.'}
          {language === 'tr' && 'Web sitenizin etkili bir şekilde çalışması için gereken teknik gereksinimleri ve işlevselliği tanımlayın.'}
        </p>
      </div>

      {/* CMS Requirement */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Database className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Do you need a Content Management System (CMS)?'}
              {language === 'de' && 'Benötigen Sie ein Content-Management-System (CMS)?'}
              {language === 'fa' && 'آیا به سیستم مدیریت محتوا (CMS) نیاز دارید؟'}
              {language === 'tr' && 'İçerik Yönetim Sistemi (CMS) ihtiyacınız var mı?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'CMS allows you to easily update content, add pages, and manage your website without technical knowledge'}
              {language === 'de' && 'CMS ermöglicht es Ihnen, Inhalte einfach zu aktualisieren, Seiten hinzuzufügen und Ihre Website ohne technische Kenntnisse zu verwalten'}
              {language === 'fa' && 'CMS به شما امکان به‌روزرسانی آسان محتوا، اضافه کردن صفحات و مدیریت وب‌سایت بدون دانش فنی را می‌دهد'}
              {language === 'tr' && 'CMS, teknik bilgi olmadan içeriği kolayca güncellemenize, sayfa eklemenize ve web sitenizi yönetmenize olanak tanır'}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="needsCMS"
          options={getCMSOptions()}
          value={data.needsCMS ? 'true' : 'false'}
          onChange={(value) => handleChange('needsCMS', value === 'true')}
          error={errors.needsCMS}
          language={language}
          layout="vertical"
        />
      </div>

      {/* CMS Type Selection */}
      {data.needsCMS && (
        <div className="space-y-4">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Code className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {language === 'en' && 'What type of CMS do you prefer?'}
                {language === 'de' && 'Welche Art von CMS bevorzugen Sie?'}
                {language === 'fa' && 'چه نوع CMS را ترجیح می‌دهید؟'}
                {language === 'tr' && 'Hangi tür CMS\'i tercih ediyorsunuz?'}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Each option has different benefits in terms of ease of use, performance, and customization'}
                {language === 'de' && 'Jede Option hat unterschiedliche Vorteile in Bezug auf Benutzerfreundlichkeit, Leistung und Anpassung'}
                {language === 'fa' && 'هر گزینه مزایای متفاوتی از نظر سهولت استفاده، عملکرد و سفارشی‌سازی دارد'}
                {language === 'tr' && 'Her seçeneğin kullanım kolaylığı, performans ve özelleştirme açısından farklı faydaları vardır'}
              </p>
            </div>
          </div>

          <SelectField
            label=""
            options={getCMSTypeOptions()}
            value={data.cmsType || ''}
            onChange={(value) => handleChange('cmsType', value)}
            error={errors.cmsType}
            language={language}
            placeholder={
              language === 'en' ? 'Select CMS type' :
              language === 'de' ? 'CMS-Typ auswählen' :
              language === 'fa' ? 'نوع CMS را انتخاب کنید' :
              language === 'tr' ? 'CMS türünü seçin' : ''
            }
          />
        </div>
      )}

      {/* Custom Forms */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Settings className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What types of forms or interactive features do you need?'}
              {language === 'de' && 'Welche Arten von Formularen oder interaktiven Funktionen benötigen Sie?'}
              {language === 'fa' && 'چه نوع فرم‌ها یا ویژگی‌های تعاملی نیاز دارید؟'}
              {language === 'tr' && 'Hangi tür formlara veya etkileşimli özelliklere ihtiyacınız var?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Select all forms and interactive elements you want on your website'}
              {language === 'de' && 'Wählen Sie alle Formulare und interaktiven Elemente aus, die Sie auf Ihrer Website wünschen'}
              {language === 'fa' && 'تمام فرم‌ها و عناصر تعاملی که در وب‌سایت خود می‌خواهید را انتخاب کنید'}
              {language === 'tr' && 'Web sitenizde istediğiniz tüm formları ve etkileşimli öğeleri seçin'}
            </p>
          </div>
        </div>

        <MultiCheckboxField
          label=""
          name="customForms"
          options={getCustomFormsOptions()}
          values={data.customForms}
          onChange={(values) => handleChange('customForms', values)}
          error={errors.customForms}
          language={language}
          layout="grid"
          size="md"
        />
      </div>

      {/* Payment Gateway */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <CreditCard className="w-4 h-4 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Do you need payment processing?'}
              {language === 'de' && 'Benötigen Sie Zahlungsverarbeitung?'}
              {language === 'fa' && 'آیا به پردازش پرداخت نیاز دارید؟'}
              {language === 'tr' && 'Ödeme işleme ihtiyacınız var mı?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'For e-commerce, booking systems, or any paid services'}
              {language === 'de' && 'Für E-Commerce, Buchungssysteme oder bezahlte Dienstleistungen'}
              {language === 'fa' && 'برای فروشگاه اینترنتی، سیستم رزرو یا هر خدمات پولی'}
              {language === 'tr' && 'E-ticaret, rezervasyon sistemleri veya ücretli hizmetler için'}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="paymentGateway"
          options={getPaymentOptions()}
          value={data.paymentGateway ? 'true' : 'false'}
          onChange={(value) => handleChange('paymentGateway', value === 'true')}
          error={errors.paymentGateway}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Payment Country */}
      {data.paymentGateway && (
        <div className="space-y-4">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Globe className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {language === 'en' && 'Which country will process payments?'}
                {language === 'de' && 'Welches Land wird Zahlungen verarbeiten?'}
                {language === 'fa' && 'کدام کشور پرداخت‌ها را پردازش خواهد کرد؟'}
                {language === 'tr' && 'Hangi ülke ödemeleri işleyecek?'}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'This determines which payment gateways and regulations apply'}
                {language === 'de' && 'Dies bestimmt, welche Zahlungsgateways und Vorschriften gelten'}
                {language === 'fa' && 'این تعیین می‌کند که کدام درگاه‌های پرداخت و مقررات اعمال می‌شود'}
                {language === 'tr' && 'Bu hangi ödeme geçitlerinin ve düzenlemelerin geçerli olduğunu belirler'}
              </p>
            </div>
          </div>

          <SelectField
            label=""
            options={getPaymentCountryOptions()}
            value={data.paymentCountry || ''}
            onChange={(value) => handleChange('paymentCountry', value)}
            error={errors.paymentCountry}
            language={language}
            placeholder={
              language === 'en' ? 'Select country' :
              language === 'de' ? 'Land auswählen' :
              language === 'fa' ? 'کشور را انتخاب کنید' :
              language === 'tr' ? 'Ülke seçin' : ''
            }
          />
        </div>
      )}

      {/* Multi-language Support */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Globe className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Should the website support multiple languages?'}
              {language === 'de' && 'Soll die Website mehrere Sprachen unterstützen?'}
              {language === 'fa' && 'آیا وب‌سایت باید از چندین زبان پشتیبانی کند؟'}
              {language === 'tr' && 'Web sitesi birden fazla dili desteklemeli mi?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Multi-language support allows you to reach a broader audience'}
              {language === 'de' && 'Mehrsprachige Unterstützung ermöglicht es Ihnen, ein breiteres Publikum zu erreichen'}
              {language === 'fa' && 'پشتیبانی چندزبانه به شما امکان دسترسی به مخاطبان گسترده‌تری را می‌دهد'}
              {language === 'tr' && 'Çok dilli destek daha geniş bir kitleye ulaşmanızı sağlar'}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="multiLanguage"
          options={getMultiLanguageOptions()}
          value={data.multiLanguage ? 'true' : 'false'}
          onChange={(value) => handleChange('multiLanguage', value === 'true')}
          error={errors.multiLanguage}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Additional Languages */}
      {data.multiLanguage && (
        <div className="space-y-4">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Languages className="w-4 h-4 text-cyan-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {language === 'en' && 'Which additional languages do you need?'}
                {language === 'de' && 'Welche zusätzlichen Sprachen benötigen Sie?'}
                {language === 'fa' && 'به چه زبان‌های اضافی نیاز دارید؟'}
                {language === 'tr' && 'Hangi ek dillere ihtiyacınız var?'}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Select all languages you want to support (besides your primary language)'}
                {language === 'de' && 'Wählen Sie alle Sprachen aus, die Sie unterstützen möchten (neben Ihrer Hauptsprache)'}
                {language === 'fa' && 'تمام زبان‌هایی که می‌خواهید پشتیبانی کنید را انتخاب کنید (به جز زبان اصلی)'}
                {language === 'tr' && 'Desteklemek istediğiniz tüm dilleri seçin (ana diliniz dışında)'}
              </p>
            </div>
          </div>

          <MultiCheckboxField
            label=""
            name="additionalLanguages"
            options={CONTENT_LANGUAGE_OPTIONS}
            values={data.additionalLanguages}
            onChange={(values) => handleChange('additionalLanguages', values)}
            error={errors.additionalLanguages}
            language={language}
            layout="grid"
            size="md"
          />
        </div>
      )}

      {/* User Content Creation */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Users className="w-4 h-4 text-orange-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Should users be able to create content?'}
              {language === 'de' && 'Sollen Benutzer Inhalte erstellen können?'}
              {language === 'fa' && 'آیا کاربران باید بتوانند محتوا ایجاد کنند؟'}
              {language === 'tr' && 'Kullanıcılar içerik oluşturabilmeli mi?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'This includes features like user-generated posts, comments, reviews, etc.'}
              {language === 'de' && 'Dazu gehören Funktionen wie benutzergenerierte Beiträge, Kommentare, Bewertungen usw.'}
              {language === 'fa' && 'شامل ویژگی‌هایی مانند پست‌های تولید شده توسط کاربر، نظرات، بررسی‌ها و غیره'}
              {language === 'tr' && 'Bu kullanıcı tarafından oluşturulan gönderiler, yorumlar, incelemeler vb. özellikler içerir'}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="userContent"
          options={getUserContentOptions()}
          value={data.userContent ? 'true' : 'false'}
          onChange={(value) => handleChange('userContent', value === 'true')}
          error={errors.userContent}
          language={language}
          layout="vertical"
        />
      </div>

      {/* User Content Types */}
      {data.userContent && (
        <div className="space-y-4">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Users className="w-4 h-4 text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {language === 'en' && 'What types of user-generated content?'}
                {language === 'de' && 'Welche Arten von benutzergeneriertem Inhalt?'}
                {language === 'fa' && 'چه نوع محتوای تولید شده توسط کاربر؟'}
                {language === 'tr' && 'Hangi tür kullanıcı tarafından oluşturulan içerik?'}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Select the specific types of content users should be able to create'}
                {language === 'de' && 'Wählen Sie die spezifischen Arten von Inhalten aus, die Benutzer erstellen können sollen'}
                {language === 'fa' && 'انواع خاص محتوایی که کاربران باید بتوانند ایجاد کنند را انتخاب کنید'}
                {language === 'tr' && 'Kullanıcıların oluşturabilmesi gereken belirli içerik türlerini seçin'}
              </p>
            </div>
          </div>

          <MultiCheckboxField
            label=""
            name="userContentTypes"
            options={getUserContentTypeOptions()}
            values={data.userContentTypes}
            onChange={(values) => handleChange('userContentTypes', values)}
            error={errors.userContentTypes}
            language={language}
            layout="grid"
            size="md"
          />
        </div>
      )}

      {/* Integrations */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Link className="w-4 h-4 text-teal-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What third-party integrations do you need?'}
              {language === 'de' && 'Welche Drittanbieter-Integrationen benötigen Sie?'}
              {language === 'fa' && 'به چه یکپارچگی‌های شخص ثالث نیاز دارید؟'}
              {language === 'tr' && 'Hangi üçüncü taraf entegrasyonlarına ihtiyacınız var?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Select services and tools you want to connect with your website'}
              {language === 'de' && 'Wählen Sie Dienste und Tools aus, die Sie mit Ihrer Website verbinden möchten'}
              {language === 'fa' && 'خدمات و ابزارهایی که می‌خواهید با وب‌سایت خود متصل کنید را انتخاب کنید'}
              {language === 'tr' && 'Web sitenizle bağlamak istediğiniz hizmetleri ve araçları seçin'}
            </p>
          </div>
        </div>

        <MultiCheckboxField
          label=""
          name="integrations"
          options={getIntegrationOptions()}
          values={data.integrations}
          onChange={(values) => handleChange('integrations', values)}
          error={errors.integrations}
          language={language}
          layout="grid"
          size="md"
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-950 border border-indigo-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Shield className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="font-medium text-indigo-900">
              {language === 'en' && 'Security & Performance'}
              {language === 'de' && 'Sicherheit & Leistung'}
              {language === 'fa' && 'امنیت و عملکرد'}
              {language === 'tr' && 'Güvenlik ve Performans'}
            </h3>
          </div>
          <p className="text-sm text-indigo-700">
            {language === 'en' && 'All technical features will be implemented with security best practices and optimized for fast loading times.'}
            {language === 'de' && 'Alle technischen Funktionen werden mit Sicherheits-Best-Practices implementiert und für schnelle Ladezeiten optimiert.'}
            {language === 'fa' && 'تمام ویژگی‌های فنی با بهترین روش‌های امنیتی پیاده‌سازی و برای زمان بارگذاری سریع بهینه‌سازی خواهد شد.'}
            {language === 'tr' && 'Tüm teknik özellikler güvenlik en iyi uygulamalarıyla implement edilecek ve hızlı yükleme süreleri için optimize edilecektir.'}
          </p>
        </div>

        <div className="bg-blue-950 border border-teal-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Settings className="w-5 h-5 text-teal-600 mr-2" />
            <h3 className="font-medium text-teal-900">
              {language === 'en' && 'Scalability'}
              {language === 'de' && 'Skalierbarkeit'}
              {language === 'fa' && 'مقیاس‌پذیری'}
              {language === 'tr' && 'Ölçeklenebilirlik'}
            </h3>
          </div>
          <p className="text-sm text-teal-700">
            {language === 'en' && 'The technical architecture will be designed to grow with your business and handle increased traffic and functionality.'}
            {language === 'de' && 'Die technische Architektur wird so konzipiert, dass sie mit Ihrem Unternehmen wächst und erhöhten Traffic und Funktionalität bewältigt.'}
            {language === 'fa' && 'معماری فنی به گونه‌ای طراحی خواهد شد که با کسب‌وکار شما رشد کند و ترافیک و عملکرد افزایش یافته را مدیریت کند.'}
            {language === 'tr' && 'Teknik mimari, işletmenizle birlikte büyüyecek ve artan trafiği ve işlevselliği yönetecek şekilde tasarlanacaktır.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-black text-sm">
          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 5 of 10 - Technical Features'}
          {language === 'de' && 'Schritt 5 von 10 - Technische Funktionen'}
          {language === 'fa' && 'مرحله ۵ از ۱۰ - ویژگی‌های فنی'}
          {language === 'tr' && 'Adım 5 / 10 - Teknik Özellikler'}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;