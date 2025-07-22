'use client';

import React from 'react';
import TextField from '@/components/forms/fields/TextField';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import SelectField from '@/components/forms/fields/SelectField';
import RadioGroupField from '@/components/forms/fields/RadioGroupField';
import FileUploadField from '@/components/forms/fields/FileUploadField';
import { DesignBranding, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Palette, Upload, Heart, Eye, Sparkles, Brush } from 'lucide-react';

interface DesignSectionProps {
  data: DesignBranding;
  onChange: (data: DesignBranding) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const DesignSection: React.FC<DesignSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof DesignBranding, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleFileChange = (files: File[]) => {
    if (files.length > 0) {
      handleChange('logo', files[0]);
    }
  };

  // Design style options
  const getDesignStyleOptions = () => {
    const styles = {
      en: [
        { value: 'modern', label: 'Modern & Clean' },
        { value: 'minimal', label: 'Minimalist' },
        { value: 'classic', label: 'Classic & Traditional' },
        { value: 'creative', label: 'Creative & Artistic' },
        { value: 'corporate', label: 'Corporate & Professional' },
        { value: 'playful', label: 'Playful & Fun' },
        { value: 'luxury', label: 'Luxury & Premium' },
        { value: 'tech', label: 'Tech & Futuristic' },
        { value: 'vintage', label: 'Vintage & Retro' },
        { value: 'dark', label: 'Dark & Bold' },
        { value: 'colorful', label: 'Bright & Colorful' },
        { value: 'other', label: 'Other (please specify)' }
      ],
      de: [
        { value: 'modern', label: 'Modern & Sauber' },
        { value: 'minimal', label: 'Minimalistisch' },
        { value: 'classic', label: 'Klassisch & Traditionell' },
        { value: 'creative', label: 'Kreativ & Künstlerisch' },
        { value: 'corporate', label: 'Corporate & Professionell' },
        { value: 'playful', label: 'Verspielt & Spaßig' },
        { value: 'luxury', label: 'Luxus & Premium' },
        { value: 'tech', label: 'Tech & Futuristisch' },
        { value: 'vintage', label: 'Vintage & Retro' },
        { value: 'dark', label: 'Dunkel & Mutig' },
        { value: 'colorful', label: 'Hell & Farbenfroh' },
        { value: 'other', label: 'Andere (bitte angeben)' }
      ],
      fa: [
        { value: 'modern', label: 'مدرن و تمیز' },
        { value: 'minimal', label: 'مینیمال' },
        { value: 'classic', label: 'کلاسیک و سنتی' },
        { value: 'creative', label: 'خلاقانه و هنری' },
        { value: 'corporate', label: 'شرکتی و حرفه‌ای' },
        { value: 'playful', label: 'بازیگوشانه و سرگرم‌کننده' },
        { value: 'luxury', label: 'لوکس و پریمیوم' },
        { value: 'tech', label: 'تکنولوژیک و آینده‌نگر' },
        { value: 'vintage', label: 'وینتیج و رترو' },
        { value: 'dark', label: 'تیره و جسورانه' },
        { value: 'colorful', label: 'روشن و رنگارنگ' },
        { value: 'other', label: 'سایر (لطفاً مشخص کنید)' }
      ],
      tr: [
        { value: 'modern', label: 'Modern ve Temiz' },
        { value: 'minimal', label: 'Minimalist' },
        { value: 'classic', label: 'Klasik ve Geleneksel' },
        { value: 'creative', label: 'Yaratıcı ve Sanatsal' },
        { value: 'corporate', label: 'Kurumsal ve Profesyonel' },
        { value: 'playful', label: 'Eğlenceli ve Neşeli' },
        { value: 'luxury', label: 'Lüks ve Premium' },
        { value: 'tech', label: 'Teknolojik ve Fütürist' },
        { value: 'vintage', label: 'Vintage ve Retro' },
        { value: 'dark', label: 'Koyu ve Cesur' },
        { value: 'colorful', label: 'Parlak ve Renkli' },
        { value: 'other', label: 'Diğer (lütfen belirtin)' }
      ]
    };
    return styles[language] || styles.en;
  };

  // Visual identity options
  const getVisualIdentityOptions = () => {
    const options = {
      en: [
        { value: 'true', label: 'Yes, I have a logo, brand colors, and visual guidelines' },
        { value: 'false', label: 'No, I need help creating a visual identity' }
      ],
      de: [
        { value: 'true', label: 'Ja, ich habe ein Logo, Markenfarben und visuelle Richtlinien' },
        { value: 'false', label: 'Nein, ich brauche Hilfe bei der Erstellung einer visuellen Identität' }
      ],
      fa: [
        { value: 'true', label: 'بله، لوگو، رنگ‌های برند و راهنمای بصری دارم' },
        { value: 'false', label: 'خیر، برای ایجاد هویت بصری به کمک نیاز دارم' }
      ],
      tr: [
        { value: 'true', label: 'Evet, logom, marka renklerim ve görsel kılavuzlarım var' },
        { value: 'false', label: 'Hayır, görsel kimlik oluşturmada yardıma ihtiyacım var' }
      ]
    };
    return options[language] || options.en;
  };

  // Desired feeling options
  const getDesiredFeelingOptions = () => {
    const feelings = {
      en: [
        { value: 'trust', label: 'Trust & Reliability' },
        { value: 'innovation', label: 'Innovation & Creativity' },
        { value: 'warmth', label: 'Warmth & Friendliness' },
        { value: 'authority', label: 'Authority & Expertise' },
        { value: 'excitement', label: 'Excitement & Energy' },
        { value: 'calm', label: 'Calm & Peaceful' },
        { value: 'luxury', label: 'Luxury & Exclusivity' },
        { value: 'approachable', label: 'Approachable & Accessible' },
        { value: 'sophisticated', label: 'Sophisticated & Elegant' },
        { value: 'dynamic', label: 'Dynamic & Progressive' }
      ],
      de: [
        { value: 'trust', label: 'Vertrauen & Zuverlässigkeit' },
        { value: 'innovation', label: 'Innovation & Kreativität' },
        { value: 'warmth', label: 'Wärme & Freundlichkeit' },
        { value: 'authority', label: 'Autorität & Expertise' },
        { value: 'excitement', label: 'Aufregung & Energie' },
        { value: 'calm', label: 'Ruhe & Frieden' },
        { value: 'luxury', label: 'Luxus & Exklusivität' },
        { value: 'approachable', label: 'Zugänglich & Erreichbar' },
        { value: 'sophisticated', label: 'Anspruchsvoll & Elegant' },
        { value: 'dynamic', label: 'Dynamisch & Progressiv' }
      ],
      fa: [
        { value: 'trust', label: 'اعتماد و قابلیت اطمینان' },
        { value: 'innovation', label: 'نوآوری و خلاقیت' },
        { value: 'warmth', label: 'گرمی و صمیمیت' },
        { value: 'authority', label: 'اقتدار و تخصص' },
        { value: 'excitement', label: 'هیجان و انرژی' },
        { value: 'calm', label: 'آرامش و صلح' },
        { value: 'luxury', label: 'لوکس و انحصاری' },
        { value: 'approachable', label: 'قابل دسترس و دوستانه' },
        { value: 'sophisticated', label: 'پیچیده و شیک' },
        { value: 'dynamic', label: 'پویا و پیشرو' }
      ],
      tr: [
        { value: 'trust', label: 'Güven ve Güvenilirlik' },
        { value: 'innovation', label: 'Yenilik ve Yaratıcılık' },
        { value: 'warmth', label: 'Sıcaklık ve Dostluk' },
        { value: 'authority', label: 'Otorite ve Uzmanlık' },
        { value: 'excitement', label: 'Heyecan ve Enerji' },
        { value: 'calm', label: 'Sakinlik ve Huzur' },
        { value: 'luxury', label: 'Lüks ve Özel' },
        { value: 'approachable', label: 'Yaklaşılabilir ve Erişilebilir' },
        { value: 'sophisticated', label: 'Sofistike ve Zarif' },
        { value: 'dynamic', label: 'Dinamik ve İlerici' }
      ]
    };
    return feelings[language] || feelings.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <Palette className="w-6 h-6 text-pink-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.designBranding')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Help us understand your visual preferences and brand identity to create a design that perfectly represents your business.'}
          {language === 'de' && 'Helfen Sie uns, Ihre visuellen Vorlieben und Markenidentität zu verstehen, um ein Design zu erstellen, das Ihr Unternehmen perfekt repräsentiert.'}
          {language === 'fa' && 'به ما کمک کنید ترجیحات بصری و هویت برند شما را درک کنیم تا طراحی‌ای بسازیم که کسب‌وکار شما را به طور کامل نمایندگی کند.'}
          {language === 'tr' && 'İşletmenizi mükemmel şekilde temsil eden bir tasarım oluşturmak için görsel tercihlerinizi ve marka kimliğinizi anlamamıza yardımcı olun.'}
        </p>
      </div>

      {/* Visual Identity */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Upload className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Do you have an existing visual identity?'}
              {language === 'de' && 'Haben Sie bereits eine visuelle Identität?'}
              {language === 'fa' && 'آیا هویت بصری موجود دارید؟'}
              {language === 'tr' && 'Mevcut bir görsel kimliğiniz var mı?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'This includes logo, brand colors, fonts, and style guidelines'}
              {language === 'de' && 'Dazu gehören Logo, Markenfarben, Schriftarten und Stil-Richtlinien'}
              {language === 'fa' && 'شامل لوگو، رنگ‌های برند، فونت‌ها و راهنمای سبک'}
              {language === 'tr' && 'Bu logo, marka renkleri, yazı tipleri ve stil kılavuzlarını içerir'}
            </p>
          </div>
        </div>

        <RadioGroupField
          label=""
          name="hasVisualIdentity"
          options={getVisualIdentityOptions()}
          value={data.hasVisualIdentity ? 'true' : 'false'}
          onChange={(value) => handleChange('hasVisualIdentity', value === 'true')}
          error={errors.hasVisualIdentity}
          language={language}
          layout="vertical"
        />
      </div>

      {/* Logo Upload */}
      {data.hasVisualIdentity && (
        <div className="space-y-4">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Upload className="w-4 h-4 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {language === 'en' && 'Upload your logo'}
                {language === 'de' && 'Laden Sie Ihr Logo hoch'}
                {language === 'fa' && 'لوگوی خود را آپلود کنید'}
                {language === 'tr' && 'Logonuzu yükleyin'}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Upload your logo in high quality (PNG, SVG, or JPG format preferred)'}
                {language === 'de' && 'Laden Sie Ihr Logo in hoher Qualität hoch (PNG-, SVG- oder JPG-Format bevorzugt)'}
                {language === 'fa' && 'لوگوی خود را با کیفیت بالا آپلود کنید (فرمت PNG، SVG یا JPG ترجیح داده می‌شود)'}
                {language === 'tr' && 'Logonuzu yüksek kalitede yükleyin (PNG, SVG veya JPG formatı tercih edilir)'}
              </p>
            </div>
          </div>

          <FileUploadField
            label=""
            name="logo"
            onChange={handleFileChange}
            error={errors.logo}
            language={language}
            accept="image/*"
            maxSize={10}
            uploadType="image"
            showPreview={true}
            helperText={
              language === 'en' ? 'Maximum file size: 10MB. Supported formats: PNG, SVG, JPG' :
              language === 'de' ? 'Maximale Dateigröße: 10MB. Unterstützte Formate: PNG, SVG, JPG' :
              language === 'fa' ? 'حداکثر حجم فایل: ۱۰ مگابایت. فرمت‌های پشتیبانی شده: PNG، SVG، JPG' :
              language === 'tr' ? 'Maksimum dosya boyutu: 10MB. Desteklenen formatlar: PNG, SVG, JPG' : ''
            }
          />
        </div>
      )}

      {/* Design Style */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Brush className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What design style do you prefer?'}
              {language === 'de' && 'Welchen Designstil bevorzugen Sie?'}
              {language === 'fa' && 'چه سبک طراحی را ترجیح می‌دهید؟'}
              {language === 'tr' && 'Hangi tasarım stilini tercih ediyorsunuz?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Choose the style that best represents your brand personality'}
              {language === 'de' && 'Wählen Sie den Stil, der Ihre Markenpersönlichkeit am besten repräsentiert'}
              {language === 'fa' && 'سبکی را انتخاب کنید که شخصیت برند شما را بهترین شکل نمایندگی کند'}
              {language === 'tr' && 'Marka kişiliğinizi en iyi temsil eden stili seçin'}
            </p>
          </div>
        </div>

        <SelectField
          label=""
          options={getDesignStyleOptions()}
          value={data.designStyle}
          onChange={(value) => handleChange('designStyle', value)}
          error={errors.designStyle}
          required
          language={language}
          searchable
          placeholder={
            language === 'en' ? 'Select design style' :
            language === 'de' ? 'Designstil auswählen' :
            language === 'fa' ? 'سبک طراحی را انتخاب کنید' :
            language === 'tr' ? 'Tasarım stilini seçin' : ''
          }
        />
      </div>

      {/* Inspiration Website */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Eye className="w-4 h-4 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'Any websites you admire or want to use as inspiration?'}
              {language === 'de' && 'Gibt es Websites, die Sie bewundern oder als Inspiration nutzen möchten?'}
              {language === 'fa' && 'آیا وب‌سایتی هست که تحسین می‌کنید یا می‌خواهید به عنوان الهام استفاده کنید؟'}
              {language === 'tr' && 'Beğendiğiniz veya ilham kaynağı olarak kullanmak istediğiniz web siteleri var mı?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Share URLs of websites you like (design, layout, functionality, etc.)'}
              {language === 'de' && 'Teilen Sie URLs von Websites, die Ihnen gefallen (Design, Layout, Funktionalität usw.)'}
              {language === 'fa' ? 'URL وب‌سایت‌هایی که دوست دارید را به اشتراک بگذارید (طراحی، چیدمان، عملکرد و غیره)' : ''}
              {language === 'tr' && 'Beğendiğiniz web sitelerinin URL\'lerini paylaşın (tasarım, düzen, işlevsellik vb.)'}
            </p>
          </div>
        </div>

        <TextAreaField
          label=""
          name="inspirationWebsite"
          value={data.inspirationWebsite}
          onChange={(e) => handleChange('inspirationWebsite', e.target.value)}
          placeholder={
            language === 'en' ? 'https://example1.com - I love their clean layout\nhttps://example2.com - Great color scheme\nhttps://example3.com - Nice navigation style' :
            language === 'de' ? 'https://beispiel1.com - Ich liebe ihr sauberes Layout\nhttps://beispiel2.com - Tolles Farbschema\nhttps://beispiel3.com - Schöner Navigationsstil' :
            language === 'fa' ? 'https://example1.com - چیدمان تمیز آن‌ها را دوست دارم\nhttps://example2.com - طرح رنگی عالی\nhttps://example3.com - سبک ناوبری زیبا' :
            language === 'tr' ? 'https://ornek1.com - Temiz düzenlerini seviyorum\nhttps://ornek2.com - Harika renk şeması\nhttps://ornek3.com - Güzel navigasyon stili' : ''
          }
          error={errors.inspirationWebsite}
          language={language}
          minRows={3}
          maxLength={1000}
          showCharCount
        />
      </div>

      {/* Brand Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label={
            language === 'en' ? 'Preferred brand colors' :
            language === 'de' ? 'Bevorzugte Markenfarben' :
            language === 'fa' ? 'رنگ‌های ترجیحی برند' :
            language === 'tr' ? 'Tercih edilen marka renkleri' : ''
          }
          name="brandColors"
          value={data.brandColors}
          onChange={(e) => handleChange('brandColors', e.target.value)}
          placeholder={
            language === 'en' ? 'Blue, white, silver...' :
            language === 'de' ? 'Blau, weiß, silber...' :
            language === 'fa' ? 'آبی، سفید، نقره‌ای...' :
            language === 'tr' ? 'Mavi, beyaz, gümüş...' : ''
          }
          error={errors.brandColors}
          language={language}
          icon={<Palette className="w-5 h-5" />}
          helperText={
            language === 'en' ? 'Colors that represent your brand' :
            language === 'de' ? 'Farben, die Ihre Marke repräsentieren' :
            language === 'fa' ? 'رنگ‌هایی که برند شما را نمایندگی می‌کنند' :
            language === 'tr' ? 'Markanızı temsil eden renkler' : ''
          }
        />

        <TextField
          label={
            language === 'en' ? 'Colors to avoid' :
            language === 'de' ? 'Zu vermeidende Farben' :
            language === 'fa' ? 'رنگ‌های اجتناب' :
            language === 'tr' ? 'Kaçınılacak renkler' : ''
          }
          name="avoidColors"
          value={data.avoidColors}
          onChange={(e) => handleChange('avoidColors', e.target.value)}
          placeholder={
            language === 'en' ? 'Red, orange, neon colors...' :
            language === 'de' ? 'Rot, orange, Neonfarben...' :
            language === 'fa' ? 'قرمز، نارنجی، رنگ‌های نئون...' :
            language === 'tr' ? 'Kırmızı, turuncu, neon renkler...' : ''
          }
          error={errors.avoidColors}
          language={language}
          helperText={
            language === 'en' ? 'Colors that don\'t fit your brand' :
            language === 'de' ? 'Farben, die nicht zu Ihrer Marke passen' :
            language === 'fa' ? 'رنگ‌هایی که با برند شما سازگار نیستند' :
            language === 'tr' ? 'Markanıza uymayan renkler' : ''
          }
        />
      </div>

      {/* Desired Feeling */}
      <div className="space-y-4">
        <div className="flex items-start mb-3">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <Heart className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-1">
              {language === 'en' && 'What feeling should users get from your design?'}
              {language === 'de' && 'Welches Gefühl sollen Benutzer von Ihrem Design bekommen?'}
              {language === 'fa' && 'کاربران باید چه احساسی از طراحی شما بگیرند؟'}
              {language === 'tr' && 'Kullanıcılar tasarımınızdan hangi duyguyu almalı?'}
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              {language === 'en' && 'Choose the primary emotion you want to evoke'}
              {language === 'de' && 'Wählen Sie die primäre Emotion, die Sie hervorrufen möchten'}
              {language === 'fa' && 'احساس اصلی که می‌خواهید برانگیزانید را انتخاب کنید'}
              {language === 'tr' && 'Uyandırmak istediğiniz birincil duyguyu seçin'}
            </p>
          </div>
        </div>

        <SelectField
          label=""
          options={getDesiredFeelingOptions()}
          value={data.desiredFeeling}
          onChange={(value) => handleChange('desiredFeeling', value)}
          error={errors.desiredFeeling}
          required
          language={language}
          searchable
          placeholder={
            language === 'en' ? 'Select desired feeling' :
            language === 'de' ? 'Gewünschtes Gefühl auswählen' :
            language === 'fa' ? 'احساس مورد نظر را انتخاب کنید' :
            language === 'tr' ? 'İstenen duyguyu seçin' : ''
          }
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-950 border border-pink-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Sparkles className="w-5 h-5 text-pink-600 mr-2" />
            <h3 className="font-medium text-pink-900">
              {language === 'en' && 'Design Psychology'}
              {language === 'de' && 'Design-Psychologie'}
              {language === 'fa' && 'روانشناسی طراحی'}
              {language === 'tr' && 'Tasarım Psikolojisi'}
            </h3>
          </div>
          <p className="text-sm text-pink-700">
            {language === 'en' && 'Colors and design elements psychologically influence user behavior. We\'ll use this to guide your visitors toward your goals.'}
            {language === 'de' && 'Farben und Designelemente beeinflussen das Nutzerverhalten psychologisch. Wir nutzen dies, um Ihre Besucher zu Ihren Zielen zu führen.'}
            {language === 'fa' && 'رنگ‌ها و عناصر طراحی از نظر روانشناختی بر رفتار کاربر تأثیر می‌گذارند. ما از این موضوع برای هدایت بازدیدکنندگان به سمت اهدافتان استفاده می‌کنیم.'}
            {language === 'tr' && 'Renkler ve tasarım öğeleri kullanıcı davranışını psikolojik olarak etkiler. Bunu ziyaretçilerinizi hedeflerinize yönlendirmek için kullanacağız.'}
          </p>
        </div>

        <div className="bg-blue-950 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Eye className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="font-medium text-white">
              {language === 'en' && 'Visual Consistency'}
              {language === 'de' && 'Visuelle Konsistenz'}
              {language === 'fa' && 'یکپارچگی بصری'}
              {language === 'tr' && 'Görsel Tutarlılık'}
            </h3>
          </div>
          <p className="text-sm text-white">
            {language === 'en' && 'A consistent visual identity across all touchpoints builds trust and brand recognition. Every element will work together harmoniously.'}
            {language === 'de' && 'Eine konsistente visuelle Identität über alle Berührungspunkte hinweg schafft Vertrauen und Markenerkennung. Jedes Element wird harmonisch zusammenarbeiten.'}
            {language === 'fa' && 'هویت بصری یکپارچه در تمام نقاط تماس اعتماد و شناخت برند را ایجاد می‌کند. هر عنصر به صورت هماهنگ کار خواهد کرد.'}
            {language === 'tr' && 'Tüm temas noktalarında tutarlı bir görsel kimlik güven ve marka tanınırlığı oluşturur. Her öğe uyum içinde çalışacaktır.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-black text-sm">
          <div className="w-2 h-2 bg-pink-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 4 of 10 - Design & Branding'}
          {language === 'de' && 'Schritt 4 von 10 - Design & Branding'}
          {language === 'fa' && 'مرحله ۴ از ۱۰ - طراحی و برندینگ'}
          {language === 'tr' && 'Adım 4 / 10 - Tasarım ve Marka'}
        </div>
      </div>
    </div>
  );
};

export default DesignSection;