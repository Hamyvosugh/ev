'use client';

import React from 'react';
import TextField from '@/components/forms/fields/TextField';
import TextAreaField from '@/components/forms/fields/TextAreaField';
import { BasicInfo, SupportedLanguage } from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { Building, Globe, Target, Star } from 'lucide-react';

interface BasicInfoSectionProps {
  data: BasicInfo;
  onChange: (data: BasicInfo) => void;
  errors?: { [key: string]: string };
  language?: SupportedLanguage;
  className?: string;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  data,
  onChange,
  errors = {},
  language = 'en',
  className = '',
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  const handleChange = (field: keyof BasicInfo, value: string) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className={`w-full space-y-6 ${className}`}>
      {/* Section Header */}
      <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Building className="w-6 h-6 text-blue-900" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('sections.basicInfo')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' && 'Tell us about your business and project goals to help us understand your needs better.'}
          {language === 'de' && 'Erzählen Sie uns von Ihrem Unternehmen und Ihren Projektzielen, damit wir Ihre Bedürfnisse besser verstehen können.'}
          {language === 'fa' && 'درباره کسب‌وکار و اهداف پروژه‌تان بگویید تا بتوانیم نیازهایتان را بهتر درک کنیم.'}
          {language === 'tr' && 'İşletmeniz ve proje hedefleriniz hakkında bize bilgi verin, böylece ihtiyaçlarınızı daha iyi anlayabiliriz.'}
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-6">
        {/* Business Name */}
        <div className="relative">
          <TextField
            label={t('basicInfo.businessName')}
            name="businessName"
            value={data.businessName}
            onChange={(e) => handleChange('businessName', e.target.value)}
            placeholder={t('basicInfo.businessNamePlaceholder')}
            error={errors.businessName}
            required
            language={language}
            icon={<Building className="w-5 h-5" />}
            maxLength={100}
          />
        </div>

        {/* Current Website */}
        <div className="relative">
          <TextField
            label={t('basicInfo.currentWebsite')}
            name="currentWebsite"
            type="url"
            value={data.currentWebsite}
            onChange={(e) => handleChange('currentWebsite', e.target.value)}
            placeholder={t('basicInfo.currentWebsitePlaceholder')}
            error={errors.currentWebsite}
            language={language}
            icon={<Globe className="w-5 h-5" />}
            helperText={
              language === 'en' ? 'Leave empty if you don\'t have a website yet' :
              language === 'de' ? 'Lassen Sie dieses Feld leer, wenn Sie noch keine Website haben' :
              language === 'fa' ? 'اگر هنوز وب‌سایت ندارید خالی بگذارید' :
              language === 'tr' ? 'Henüz bir web siteniz yoksa boş bırakın' : ''
            }
          />
        </div>

        {/* Main Goal */}
        <div className="relative">
          <TextAreaField
            label={t('basicInfo.mainGoal')}
            name="mainGoal"
            value={data.mainGoal}
            onChange={(e) => handleChange('mainGoal', e.target.value)}
            placeholder={t('basicInfo.mainGoalPlaceholder')}
            error={errors.mainGoal}
            required
            language={language}
            minRows={3}
            maxLength={500}
            showCharCount
            autoResize
            helperText={
              language === 'en' ? 'Describe your primary objectives for this website project' :
              language === 'de' ? 'Beschreiben Sie Ihre Hauptziele für dieses Website-Projekt' :
              language === 'fa' ? 'اهداف اصلی خود برای این پروژه وب‌سایت را شرح دهید' :
              language === 'tr' ? 'Bu web sitesi projesi için temel hedeflerinizi açıklayın' : ''
            }
          />
        </div>

        {/* Project Importance */}
        <div className="relative">
          <TextAreaField
            label={t('basicInfo.projectImportance')}
            name="projectImportance"
            value={data.projectImportance}
            onChange={(e) => handleChange('projectImportance', e.target.value)}
            placeholder={t('basicInfo.projectImportancePlaceholder')}
            error={errors.projectImportance}
            required
            language={language}
            minRows={3}
            maxLength={500}
            showCharCount
            autoResize
            helperText={
              language === 'en' ? 'Help us understand the value and urgency of this project for your business' :
              language === 'de' ? 'Helfen Sie uns, den Wert und die Dringlichkeit dieses Projekts für Ihr Unternehmen zu verstehen' :
              language === 'fa' ? 'به ما کمک کنید ارزش و اهمیت این پروژه برای کسب‌وکارتان را درک کنیم' :
              language === 'tr' ? 'Bu projenin işletmeniz için değerini ve aciliyetini anlamamıza yardımcı olun' : ''
            }
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="font-medium text-blue-900">
              {language === 'en' && 'Pro Tip'}
              {language === 'de' && 'Profi-Tipp'}
              {language === 'fa' && 'نکته مهم'}
              {language === 'tr' && 'Profesyonel İpucu'}
            </h3>
          </div>
          <p className="text-sm text-blue-700">
            {language === 'en' && 'Be specific about your goals. The more details you provide, the better we can tailor our solution to your needs.'}
            {language === 'de' && 'Seien Sie spezifisch bei Ihren Zielen. Je mehr Details Sie angeben, desto besser können wir unsere Lösung an Ihre Bedürfnisse anpassen.'}
            {language === 'fa' && 'در بیان اهدافتان دقیق باشید. هرچه جزئیات بیشتری ارائه دهید، بهتر می‌توانیم راه‌حل را متناسب با نیازهایتان طراحی کنیم.'}
            {language === 'tr' && 'Hedeflerinizde spesifik olun. Ne kadar çok detay verirseniz, çözümümüzü ihtiyaçlarınıza o kadar iyi uyarlayabiliriz.'}
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Star className="w-5 h-5 text-amber-600 mr-2" />
            <h3 className="font-medium text-amber-900">
              {language === 'en' && 'Why This Matters'}
              {language === 'de' && 'Warum das wichtig ist'}
              {language === 'fa' && 'چرا این مهم است'}
              {language === 'tr' && 'Neden Önemli'}
            </h3>
          </div>
          <p className="text-sm text-amber-700">
            {language === 'en' && 'Understanding your business context helps us recommend the right features, design approach, and technical solutions.'}
            {language === 'de' && 'Das Verständnis Ihres Geschäftskontexts hilft uns, die richtigen Funktionen, den Designansatz und technische Lösungen zu empfehlen.'}
            {language === 'fa' && 'درک بافت کسب‌وکار شما به ما کمک می‌کند تا ویژگی‌ها، رویکرد طراحی و راه‌حل‌های فنی مناسب را پیشنهاد دهیم.'}
            {language === 'tr' && 'İş bağlamınızı anlamak, doğru özellikleri, tasarım yaklaşımını ve teknik çözümleri önerebilmemize yardımcı olur.'}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
          {language === 'en' && 'Step 1 of 10 - Basic Information'}
          {language === 'de' && 'Schritt 1 von 10 - Grundinformationen'}
          {language === 'fa' && 'مرحله ۱ از ۱۰ - اطلاعات پایه'}
          {language === 'tr' && 'Adım 1 / 10 - Temel Bilgiler'}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;