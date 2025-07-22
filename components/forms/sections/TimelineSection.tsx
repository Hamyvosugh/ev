'use client';

import React from 'react';
import TextField from '@/components/forms/fields/TextField';
import SelectField from '@/components/forms/fields/SelectField';
import { Timeline, SupportedLanguage, BUDGET_OPTIONS } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Calendar, DollarSign, Target } from 'lucide-react';

interface TimelineSectionProps {
  data: Timeline;
  onChange: (data: Timeline) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof Timeline, value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const getPriorityOptions = () => {
    const priorities = {
      en: [
        { value: 'quality', label: 'Quality - Best possible result' },
        { value: 'speed', label: 'Speed - Launch as soon as possible' },
        { value: 'cost', label: 'Cost - Budget-friendly approach' },
        { value: 'seo', label: 'SEO - Search engine optimization focus' },
        { value: 'design', label: 'Design - Visual appeal priority' },
        { value: 'functionality', label: 'Functionality - Feature-rich website' }
      ],
      de: [
        { value: 'quality', label: 'Qualität - Bestmögliches Ergebnis' },
        { value: 'speed', label: 'Geschwindigkeit - So schnell wie möglich starten' },
        { value: 'cost', label: 'Kosten - Budgetfreundlicher Ansatz' },
        { value: 'seo', label: 'SEO - Suchmaschinenoptimierung im Fokus' },
        { value: 'design', label: 'Design - Visueller Appeal Priorität' },
        { value: 'functionality', label: 'Funktionalität - Funktionsreiche Website' }
      ],
      fa: [
        { value: 'quality', label: 'کیفیت - بهترین نتیجه ممکن' },
        { value: 'speed', label: 'سرعت - راه‌اندازی در اسرع وقت' },
        { value: 'cost', label: 'هزینه - رویکرد مقرون‌به‌صرفه' },
        { value: 'seo', label: 'سئو - تمرکز بر بهینه‌سازی موتور جستجو' },
        { value: 'design', label: 'طراحی - اولویت جذابیت بصری' },
        { value: 'functionality', label: 'عملکرد - وب‌سایت پرویژگی' }
      ],
      tr: [
        { value: 'quality', label: 'Kalite - Mümkün olan en iyi sonuç' },
        { value: 'speed', label: 'Hız - Mümkün olduğunca çabuk başlatma' },
        { value: 'cost', label: 'Maliyet - Bütçe dostu yaklaşım' },
        { value: 'seo', label: 'SEO - Arama motoru optimizasyonu odaklı' },
        { value: 'design', label: 'Tasarım - Görsel çekicilik önceliği' },
        { value: 'functionality', label: 'İşlevsellik - Zengin özellikli web sitesi' }
      ]
    };
    return priorities[language] || priorities.en;
  };

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-amber-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.timeline')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Help us plan your project timeline and understand your budget and priorities.'}
          {language === 'de' && 'Helfen Sie uns, Ihren Projektzeitplan zu planen und Ihr Budget und Ihre Prioritäten zu verstehen.'}
          {language === 'fa' && 'به ما کمک کنید زمان‌بندی پروژه شما را برنامه‌ریزی کنیم و بودجه و اولویت‌هایتان را درک کنیم.'}
          {language === 'tr' && 'Proje zaman çizelgenizi planlamamıza ve bütçenizi ve önceliklerinizi anlamamıza yardımcı olun.'}
        </p>
      </div>

      {/* Desired Completion Date */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Calendar className="w-5 h-5 text-blue-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'When would you like your website to be ready?'}
            {language === 'de' && 'Wann soll Ihre Website fertig sein?'}
            {language === 'fa' && 'چه زمانی می‌خواهید وب‌سایت شما آماده باشد؟'}
            {language === 'tr' && 'Web sitenizin ne zaman hazır olmasını istiyorsunuz?'}
          </h3>
        </div>

        <TextField
          label=""
          name="desiredCompletionDate"
          value={data.desiredCompletionDate}
          onChange={(e) => handleChange('desiredCompletionDate', e.target.value)}
          placeholder={
            language === 'en' ? 'e.g: End of next month, Before Christmas, ASAP, Flexible' :
            language === 'de' ? 'z.B: Ende nächsten Monats, Vor Weihnachten, ASAP, Flexibel' :
            language === 'fa' ? 'مثال: پایان ماه آینده، قبل از کریسمس، در اسرع وقت، انعطاف‌پذیر' :
            'örn: Gelecek ay sonu, Noel\'den önce, En kısa sürede, Esnek'
          }
          error={errors.desiredCompletionDate}
          required
          language={language}
          icon={<Calendar className="w-5 h-5" />}
          helperText={
            language === 'en' ? 'Be realistic about timelines. Quality work takes time.' :
            language === 'de' ? 'Seien Sie realistisch bei Zeitplänen. Qualitätsarbeit braucht Zeit.' :
            language === 'fa' ? 'در مورد زمان‌بندی واقع‌بین باشید. کار با کیفیت زمان می‌برد.' :
            'Zaman çizelgeleri konusunda gerçekçi olun. Kaliteli iş zaman alır.'
          }
        />
      </div>

      {/* Budget */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <DollarSign className="w-5 h-5 text-green-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'What is your approximate budget for this project?'}
            {language === 'de' && 'Wie hoch ist Ihr ungefähres Budget für dieses Projekt?'}
            {language === 'fa' && 'بودجه تقریبی شما برای این پروژه چقدر است؟'}
            {language === 'tr' && 'Bu proje için yaklaşık bütçeniz nedir?'}
          </h3>
        </div>

        <SelectField
          label=""
          options={BUDGET_OPTIONS}
          value={data.budget}
          onChange={(value) => handleChange('budget', value)}
          error={errors.budget}
          required
          language={language}
          placeholder={
            language === 'en' ? 'Select budget range' :
            language === 'de' ? 'Budget-Bereich auswählen' :
            language === 'fa' ? 'محدوده بودجه را انتخاب کنید' :
            'Bütçe aralığını seçin'
          }
          helperText={
            language === 'en' ? 'Optional but helps us provide accurate recommendations' :
            language === 'de' ? 'Optional, hilft uns aber bei genauen Empfehlungen' :
            language === 'fa' ? 'اختیاری اما به ما کمک می‌کند پیشنهادات دقیق ارائه دهیم' :
            'İsteğe bağlı ama doğru önerilerde bulunmamıza yardımcı olur'
          }
        />
      </div>

      {/* Main Priority */}
      <div className="space-y-4">
        <div className="flex items-center mb-3">
          <Target className="w-5 h-5 text-purple-600 mr-3" />
          <h3 className="font-medium text-gray-900">
            {language === 'en' && 'What is your main priority for this project?'}
            {language === 'de' && 'Was ist Ihre Hauptpriorität für dieses Projekt?'}
            {language === 'fa' && 'اولویت اصلی شما در این پروژه چیست؟'}
            {language === 'tr' && 'Bu proje için ana önceliğiniz nedir?'}
          </h3>
        </div>

        <SelectField
          label=""
          options={getPriorityOptions()}
          value={data.mainPriority}
          onChange={(value) => handleChange('mainPriority', value)}
          error={errors.mainPriority}
          required
          language={language}
          searchable
          placeholder={
            language === 'en' ? 'Select main priority' :
            language === 'de' ? 'Hauptpriorität auswählen' :
            language === 'fa' ? 'اولویت اصلی را انتخاب کنید' :
            'Ana önceliği seçin'
          }
          helperText={
            language === 'en' ? 'This helps us focus on what matters most to you' :
            language === 'de' ? 'Das hilft uns, uns auf das zu konzentrieren, was Ihnen am wichtigsten ist' :
            language === 'fa' ? 'این به ما کمک می‌کند روی آنچه برای شما مهم‌تر است تمرکز کنیم' :
            'Bu, sizin için en önemli olan şeye odaklanmamıza yardımcı olur'
          }
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-950 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-amber-600 mr-2" />
            <h3 className="font-medium text-amber-900">
              {language === 'en' && 'Typical Timeline'}
              {language === 'de' && 'Typischer Zeitplan'}
              {language === 'fa' && 'زمان‌بندی معمول'}
              {language === 'tr' && 'Tipik Zaman Çizelgesi'}
            </h3>
          </div>
          <p className="text-sm text-amber-700">
            {language === 'en' && 'Most websites take 2-6 weeks depending on complexity. Rush jobs may compromise quality.'}
            {language === 'de' && 'Die meisten Websites dauern 2-6 Wochen je nach Komplexität. Eilaufträge können die Qualität beeinträchtigen.'}
            {language === 'fa' && 'اکثر وب‌سایت‌ها بسته به پیچیدگی ۲ تا ۶ هفته طول می‌کشند. کارهای عجله‌ای ممکن است کیفیت را به خطر بیندازند.'}
            {language === 'tr' && 'Çoğu web sitesi karmaşıklığa bağlı olarak 2-6 hafta sürer. Acele işler kaliteyi tehlikeye atabilir.'}
          </p>
        </div>

        <div className="bg-blue-950 border border-green-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="font-medium text-green-900">
              {language === 'en' && 'Value Investment'}
              {language === 'de' && 'Wert-Investition'}
              {language === 'fa' && 'سرمایه‌گذاری ارزشمند'}
              {language === 'tr' && 'Değer Yatırımı'}
            </h3>
          </div>
          <p className="text-sm text-white">
            {language === 'en' && 'A professional website is an investment that pays for itself through increased business and credibility.'}
            {language === 'de' && 'Eine professionelle Website ist eine Investition, die sich durch mehr Geschäft und Glaubwürdigkeit amortisiert.'}
            {language === 'fa' && 'وب‌سایت حرفه‌ای سرمایه‌گذاری‌ست که از طریق افزایش کسب‌وکار و اعتبار خود را بازپرداخت می‌کند.'}
            {language === 'tr' && 'Profesyonel bir web sitesi, artan iş ve güvenilirlik yoluyla kendini geri ödeyen bir yatırımdır.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-black text-sm">
          <div className="w-2 h-2 bg-amber-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 9 of 10 - Timeline & Budget'}
          {language === 'de' && 'Schritt 9 von 10 - Zeitplan & Budget'}
          {language === 'fa' && 'مرحله ۹ از ۱۰ - زمان‌بندی و بودجه'}
          {language === 'tr' && 'Adım 9 / 10 - Zaman Çizelgesi ve Bütçe'}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;