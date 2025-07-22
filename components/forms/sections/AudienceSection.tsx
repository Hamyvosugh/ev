'use client';

import React from 'react';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import { TargetAudience, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Users, MousePointer, Lightbulb, HelpCircle, Zap } from 'lucide-react';

interface AudienceSectionProps {
  data: TargetAudience;
  onChange: (data: TargetAudience) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const AudienceSection: React.FC<AudienceSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof TargetAudience, value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getPlaceholderText = (field: string) => {
    const placeholders = {
      en: {
        idealCustomer: 'Example: Young professionals aged 25-40, living in urban areas, interested in sustainable products, active on social media...',
        expectedAction: 'Example: Contact us for a consultation, download our brochure, sign up for newsletter, make a purchase...',
        mainProblem: 'Example: Finding reliable information about our services, comparing our products with competitors, understanding pricing...'
      },
      de: {
        idealCustomer: 'Beispiel: Junge Berufstätige im Alter von 25-40, wohnhaft in städtischen Gebieten, interessiert an nachhaltigen Produkten, aktiv in sozialen Medien...',
        expectedAction: 'Beispiel: Uns für eine Beratung kontaktieren, unsere Broschüre herunterladen, Newsletter abonnieren, einen Kauf tätigen...',
        mainProblem: 'Beispiel: Zuverlässige Informationen über unsere Dienstleistungen finden, unsere Produkte mit Konkurrenten vergleichen, Preise verstehen...'
      },
      fa: {
        idealCustomer: 'مثال: حرفه‌ای‌های جوان ۲۵ تا ۴۰ ساله، ساکن مناطق شهری، علاقه‌مند به محصولات پایدار، فعال در شبکه‌های اجتماعی...',
        expectedAction: 'مثال: برای مشاوره تماس بگیرند، بروشور ما را دانلود کنند، در خبرنامه ثبت‌نام کنند، خرید انجام دهند...',
        mainProblem: 'مثال: یافتن اطلاعات قابل اعتماد درباره خدمات ما، مقایسه محصولات ما با رقبا، درک قیمت‌گذاری...'
      },
      tr: {
        idealCustomer: 'Örnek: 25-40 yaş arası genç profesyoneller, şehirsel alanlarda yaşayan, sürdürülebilir ürünlerle ilgilenen, sosyal medyada aktif...',
        expectedAction: 'Örnek: Danışmanlık için bize ulaşmak, broşürümüzü indirmek, haber bültenine kaydolmak, satın alma yapmak...',
        mainProblem: 'Örnek: Hizmetlerimiz hakkında güvenilir bilgi bulmak, ürünlerimizi rakiplerle karşılaştırmak, fiyatlandırmayı anlamak...'
      }
    };
    return placeholders[language]?.[field as keyof typeof placeholders.en] || '';
  };

  const getFieldLabel = (field: string) => {
    const labels = {
      en: {
        idealCustomer: 'Who is your ideal target audience or customer?',
        expectedAction: 'What do you expect users to do on their first visit to your website?',
        mainProblem: 'What is the most important problem your website should solve for visitors?'
      },
      de: {
        idealCustomer: 'Wer ist Ihre ideale Zielgruppe oder Ihr idealer Kunde?',
        expectedAction: 'Was erwarten Sie, dass Nutzer bei ihrem ersten Besuch auf Ihrer Website tun?',
        mainProblem: 'Was ist das wichtigste Problem, das Ihre Website für Besucher lösen sollte?'
      },
      fa: {
        idealCustomer: 'مخاطب یا مشتری ایده‌آل شما چه کسی است؟',
        expectedAction: 'انتظار دارید کاربر در اولین بازدید از وب‌سایت شما چه کاری انجام دهد؟',
        mainProblem: 'مهم‌ترین مشکلی که وب‌سایت شما باید برای بازدیدکنندگان حل کند چیست؟'
      },
      tr: {
        idealCustomer: 'İdeal hedef kitleniz veya müşteriniz kimdir?',
        expectedAction: 'Kullanıcıların web sitenizi ilk ziyaret ettiklerinde ne yapmalarını bekliyorsunuz?',
        mainProblem: 'Web sitenizin ziyaretçiler için çözmesi gereken en önemli sorun nedir?'
      }
    };
    return labels[language]?.[field as keyof typeof labels.en] || '';
  };

  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Section Header */}
      <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-purple-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.targetAudience')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Understanding your target audience helps us design a website that resonates with your ideal customers and drives conversions.'}
          {language === 'de' && 'Das Verständnis Ihrer Zielgruppe hilft uns, eine Website zu gestalten, die bei Ihren idealen Kunden Anklang findet und Conversions fördert.'}
          {language === 'fa' && 'درک مخاطبان هدف شما به ما کمک می‌کند تا وب‌سایتی طراحی کنیم که با مشتریان ایده‌آل شما ارتباط برقرار کند و تبدیل‌ها را افزایش دهد.'}
          {language === 'tr' && 'Hedef kitlenizi anlamak, ideal müşterilerinizle rezonansa giren ve dönüşümleri artıran bir web sitesi tasarlamamıza yardımcı olur.'}
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-8">
        {/* Ideal Customer */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {getFieldLabel('idealCustomer')}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Include demographics, psychographics, pain points, and behavior patterns'}
                {language === 'de' && 'Einschließlich Demografie, Psychografie, Schmerzpunkte und Verhaltensmuster'}
                {language === 'fa' && 'شامل ویژگی‌های جمعیت‌شناختی، روانی، نقاط درد و الگوهای رفتاری'}
                {language === 'tr' && 'Demografik özellikler, psikografik özellikler, sorun noktaları ve davranış kalıpları dahil'}
              </p>
            </div>
          </div>
          
          <TextAreaField
            label=""
            name="idealCustomer"
            value={data.idealCustomer}
            onChange={(e) => handleChange('idealCustomer', e.target.value)}
            placeholder={getPlaceholderText('idealCustomer')}
            error={errors.idealCustomer}
            required
            language={language}
            minRows={4}
            maxLength={800}
            showCharCount
            autoResize
          />
        </div>

        {/* Expected Action */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <MousePointer className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {getFieldLabel('expectedAction')}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Define the primary call-to-action and user journey'}
                {language === 'de' && 'Definieren Sie den primären Call-to-Action und die User Journey'}
                {language === 'fa' && 'عمل اصلی مورد انتظار و مسیر کاربر را تعریف کنید'}
                {language === 'tr' && 'Birincil çağrı-to-action ve kullanıcı yolculuğunu tanımlayın'}
              </p>
            </div>
          </div>
          
          <TextAreaField
            label=""
            name="expectedAction"
            value={data.expectedAction}
            onChange={(e) => handleChange('expectedAction', e.target.value)}
            placeholder={getPlaceholderText('expectedAction')}
            error={errors.expectedAction}
            required
            language={language}
            minRows={3}
            maxLength={500}
            showCharCount
            autoResize
          />
        </div>

        {/* Main Problem */}
        <div className="relative">
          <div className="flex items-start mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
              <Lightbulb className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                {getFieldLabel('mainProblem')}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {language === 'en' && 'Identify the core problem your website will address'}
                {language === 'de' && 'Identifizieren Sie das Kernproblem, das Ihre Website lösen wird'}
                {language === 'fa' && 'مشکل اصلی که وب‌سایت شما حل خواهد کرد را شناسایی کنید'}
                {language === 'tr' && 'Web sitenizin çözeceği temel sorunu belirleyin'}
              </p>
            </div>
          </div>
          
          <TextAreaField
            label=""
            name="mainProblem"
            value={data.mainProblem}
            onChange={(e) => handleChange('mainProblem', e.target.value)}
            placeholder={getPlaceholderText('mainProblem')}
            error={errors.mainProblem}
            required
            language={language}
            minRows={3}
            maxLength={500}
            showCharCount
            autoResize
          />
        </div>
      </div>

      {/* Helper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-950 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <HelpCircle className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="font-medium text-purple-900">
              {language === 'en' && 'Research Tips'}
              {language === 'de' && 'Recherche-Tipps'}
              {language === 'fa' && 'نکات تحقیق'}
              {language === 'tr' && 'Araştırma İpuçları'}
            </h3>
          </div>
          <p className="text-sm text-purple-700">
            {language === 'en' && 'Consider creating user personas based on your current customers. Include age, location, interests, and online behavior.'}
            {language === 'de' && 'Erwägen Sie die Erstellung von Benutzer-Personas basierend auf Ihren aktuellen Kunden. Berücksichtigen Sie Alter, Standort, Interessen und Online-Verhalten.'}
            {language === 'fa' && 'در نظر بگیرید که بر اساس مشتریان فعلی، شخصیت‌های کاربری ایجاد کنید. سن، موقعیت، علایق و رفتار آنلاین را شامل کنید.'}
            {language === 'tr' && 'Mevcut müşterilerinize dayalı kullanıcı kişilikleri oluşturmayı düşünün. Yaş, konum, ilgi alanları ve çevrimiçi davranışları dahil edin.'}
          </p>
        </div>

        <div className="bg-blue-950 border border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Zap className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="font-medium text-white">
              {language === 'en' && 'Conversion Focus'}
              {language === 'de' && 'Conversion-Fokus'}
              {language === 'fa' && 'تمرکز بر تبدیل'}
              {language === 'tr' && 'Dönüşüm Odağı'}
            </h3>
          </div>
          <p className="text-sm text-white">
            {language === 'en' && 'Think about what success looks like. Is it more leads, sales, sign-ups, or something else? This drives design decisions.'}
            {language === 'de' && 'Denken Sie darüber nach, wie Erfolg aussieht. Sind es mehr Leads, Verkäufe, Anmeldungen oder etwas anderes? Das treibt Designentscheidungen an.'}
            {language === 'fa' && 'درباره اینکه موفقیت چگونه به نظر می‌رسد فکر کنید. آیا لید بیشتر، فروش، ثبت‌نام یا چیز دیگری است؟ این تصمیمات طراحی را هدایت می‌کند.'}
            {language === 'tr' && 'Başarının nasıl göründüğünü düşünün. Daha fazla potansiyel müşteri, satış, kayıt mı yoksa başka bir şey mi? Bu tasarım kararlarını yönlendirir.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-black text-sm">
          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 2 of 10 - Target Audience'}
          {language === 'de' && 'Schritt 2 von 10 - Zielgruppe'}
          {language === 'fa' && 'مرحله ۲ از ۱۰ - مخاطبان هدف'}
          {language === 'tr' && 'Adım 2 / 10 - Hedef Kitle'}
        </div>
      </div>
    </div>
  );
};

export default AudienceSection;