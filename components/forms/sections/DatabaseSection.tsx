'use client';

import React from 'react';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import { MultiCheckboxField } from '@/components/forms/fields/CheckboxField';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import SelectField from '@/components/forms/fields/SelectField';
import { DatabaseInfo, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Database, FileText, Settings } from 'lucide-react';

interface DatabaseSectionProps {
  data: DatabaseInfo;
  onChange: (data: DatabaseInfo) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const DatabaseSection: React.FC<DatabaseSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof DatabaseInfo, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getDataToStoreOptions = () => {
    const options = {
      en: [
        { value: 'customers', label: 'Customer Information' },
        { value: 'products', label: 'Products/Services' },
        { value: 'orders', label: 'Orders/Transactions' },
        { value: 'inventory', label: 'Inventory/Stock' },
        { value: 'content', label: 'Content/Articles' },
        { value: 'users', label: 'User Accounts' },
        { value: 'analytics', label: 'Analytics Data' },
        { value: 'none', label: 'No specific data storage needed' }
      ],
      de: [
        { value: 'customers', label: 'Kundeninformationen' },
        { value: 'products', label: 'Produkte/Dienstleistungen' },
        { value: 'orders', label: 'Bestellungen/Transaktionen' },
        { value: 'inventory', label: 'Inventar/Lager' },
        { value: 'content', label: 'Inhalte/Artikel' },
        { value: 'users', label: 'Benutzerkonten' },
        { value: 'analytics', label: 'Analytics-Daten' },
        { value: 'none', label: 'Keine spezielle Datenspeicherung erforderlich' }
      ],
      fa: [
        { value: 'customers', label: 'اطلاعات مشتری' },
        { value: 'products', label: 'محصولات/خدمات' },
        { value: 'orders', label: 'سفارشات/تراکنش‌ها' },
        { value: 'inventory', label: 'موجودی/انبار' },
        { value: 'content', label: 'محتوا/مقالات' },
        { value: 'users', label: 'حساب‌های کاربری' },
        { value: 'analytics', label: 'داده‌های تحلیلی' },
        { value: 'none', label: 'نیازی به ذخیره‌سازی داده خاص نیست' }
      ],
      tr: [
        { value: 'customers', label: 'Müşteri Bilgileri' },
        { value: 'products', label: 'Ürünler/Hizmetler' },
        { value: 'orders', label: 'Siparişler/İşlemler' },
        { value: 'inventory', label: 'Envanter/Stok' },
        { value: 'content', label: 'İçerik/Makaleler' },
        { value: 'users', label: 'Kullanıcı Hesapları' },
        { value: 'analytics', label: 'Analitik Verileri' },
        { value: 'none', label: 'Özel veri depolamaya gerek yok' }
      ]
    };
    return options[language] || options.en;
  };

  const getManagementSystemOptions = () => {
    const systems = {
      en: [
        { value: 'simple', label: 'Simple Admin Panel' },
        { value: 'advanced', label: 'Advanced Management System' },
        { value: 'external', label: 'Integration with External System' },
        { value: 'recommend', label: 'Recommend Best Option' }
      ],
      de: [
        { value: 'simple', label: 'Einfaches Admin-Panel' },
        { value: 'advanced', label: 'Erweiterte Verwaltung' },
        { value: 'external', label: 'Integration mit externem System' },
        { value: 'recommend', label: 'Beste Option empfehlen' }
      ],
      fa: [
        { value: 'simple', label: 'پنل ادمین ساده' },
        { value: 'advanced', label: 'سیستم مدیریت پیشرفته' },
        { value: 'external', label: 'یکپارچگی با سیستم خارجی' },
        { value: 'recommend', label: 'بهترین گزینه را پیشنهاد دهید' }
      ],
      tr: [
        { value: 'simple', label: 'Basit Yönetim Paneli' },
        { value: 'advanced', label: 'Gelişmiş Yönetim Sistemi' },
        { value: 'external', label: 'Harici Sistemle Entegrasyon' },
        { value: 'recommend', label: 'En İyi Seçeneği Önerin' }
      ]
    };
    return systems[language] || systems.en;
  };

  const getInitialDataOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I have existing data to import' },
        { value: 'false', label: 'No, start from scratch' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich habe vorhandene Daten zum Importieren' },
        { value: 'false', label: 'Nein, von vorne beginnen' }
      ],
      fa: [
        { value: 'true', label: 'بله، داده‌های موجود برای وارد کردن دارم' },
        { value: 'false', label: 'خیر، از صفر شروع کنیم' }
      ],
      tr: [
        { value: 'true', label: 'Evet, içe aktarılacak mevcut verilerim var' },
        { value: 'false', label: 'Hayır, sıfırdan başlayın' }
      ]
    };
    return options[language] || options.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
            <Database className="w-6 h-6 text-cyan-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.databaseInfo')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Define what data needs to be stored and managed on your website.'}
          {language === 'de' && 'Definieren Sie, welche Daten auf Ihrer Website gespeichert und verwaltet werden müssen.'}
          {language === 'fa' && 'تعریف کنید چه داده‌هایی باید در وب‌سایت شما ذخیره و مدیریت شوند.'}
          {language === 'tr' && 'Web sitenizde hangi verilerin saklanması ve yönetilmesi gerektiğini tanımlayın.'}
        </p>
      </div>

      {/* Data to Store */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <FileText className="w-5 h-5 text-blue-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'What data needs to be stored or managed?'}
            {language === 'de' && 'Welche Daten müssen gespeichert oder verwaltet werden?'}
            {language === 'fa' && 'چه داده‌هایی باید ذخیره یا مدیریت شوند؟'}
            {language === 'tr' && 'Hangi verilerin saklanması veya yönetilmesi gerekiyor?'}
          </h3>
        </div>

        <MultiCheckboxField
          label=""
          name="dataToStore"
          options={getDataToStoreOptions()}
          values={data.dataToStore}
          onChange={(values) => handleChange('dataToStore', values)}
          error={errors.dataToStore}
          language={language}
          layout="grid"
          size="md"
        />
      </div>

      {/* Management System */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Settings className="w-5 h-5 text-green-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'What type of data management system do you need?'}
            {language === 'de' && 'Welche Art von Datenverwaltungssystem benötigen Sie?'}
            {language === 'fa' && 'به چه نوع سیستم مدیریت داده نیاز دارید؟'}
            {language === 'tr' && 'Hangi tür veri yönetim sistemine ihtiyacınız var?'}
          </h3>
        </div>

        <SelectField
          label=""
          options={getManagementSystemOptions()}
          value={data.managementSystem}
          onChange={(value) => handleChange('managementSystem', value)}
          error={errors.managementSystem}
          required
          language={language}
          placeholder={
            language === 'en' ? 'Select management system type' :
            language === 'de' ? 'Verwaltungssystemtyp auswählen' :
            language === 'fa' ? 'نوع سیستم مدیریت را انتخاب کنید' :
            'Yönetim sistemi türünü seçin'
          }
        />
      </div>

      {/* Initial Data */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Database className="w-5 h-5 text-purple-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'Do you have existing data to import?'}
            {language === 'de' && 'Haben Sie vorhandene Daten zum Importieren?'}
            {language === 'fa' && 'آیا داده‌های موجود برای وارد کردن دارید؟'}
            {language === 'tr' && 'İçe aktarılacak mevcut verileriniz var mı?'}
          </h3>
        </div>

        <RadioGroupField
          label=""
          name="hasInitialData"
          options={getInitialDataOptions()}
          value={data.hasInitialData ? 'true' : 'false'}
          onChange={(value) => handleChange('hasInitialData', value === 'true')}
          error={errors.hasInitialData}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Initial Data Description */}
      {data.hasInitialData && (
        <TextAreaField
          label={
            language === 'en' ? 'Describe your existing data' :
            language === 'de' ? 'Beschreiben Sie Ihre vorhandenen Daten' :
            language === 'fa' ? 'داده‌های موجود خود را توصیف کنید' :
            'Mevcut verilerinizi açıklayın'
          }
          name="initialDataDescription"
          value={data.initialDataDescription || ''}
          onChange={(e) => handleChange('initialDataDescription', e.target.value)}
          placeholder={
            language === 'en' ? 'e.g: Excel file with 500 customer records, product catalog with images, existing blog posts...' :
            language === 'de' ? 'z.B: Excel-Datei mit 500 Kundendatensätzen, Produktkatalog mit Bildern, vorhandene Blog-Posts...' :
            language === 'fa' ? 'مثال: فایل اکسل با ۵۰۰ رکورد مشتری، کاتالوگ محصول با تصاویر، پست‌های بلاگ موجود...' :
            'örn: 500 müşteri kaydı olan Excel dosyası, resimli ürün kataloğu, mevcut blog yazıları...'
          }
          error={errors.initialDataDescription}
          language={language}
          minRows={3}
          maxLength={500}
          showCharCount
        />
      )}

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-black text-sm">
          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 7 of 10 - Database & Backend'}
          {language === 'de' && 'Schritt 7 von 10 - Datenbank & Backend'}
          {language === 'fa' && 'مرحله ۷ از ۱۰ - دیتابیس و بک‌اند'}
          {language === 'tr' && 'Adım 7 / 10 - Veritabanı ve Backend'}
        </div>
      </div>
    </div>
  );
};

export default DatabaseSection;