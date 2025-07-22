'use client';

import React, { useState, useEffect } from 'react';
import FormProgress from './FormProgress';
import TextField from './fields/TextField';
import BasicInfoSection from './sections/BasicInfoSection';
import AudienceSection from './sections/AudienceSection';
import ContentSection from './sections/ContentSection';
import DesignSection from './sections/DesignSection';
import TechnicalSection from './sections/TechnicalSection';
import SEOSection from './sections/SEOSection';
import DatabaseSection from './sections/DatabaseSection';
import HostingSection from './sections/HostingSection';
import TimelineSection from './sections/TimelineSection';
import ServicesSection from './sections/ServicesSection';
import { 
  WebsiteRequestFormData, 
  SupportedLanguage, 
  FormStep,
  FORM_LANGUAGE_OPTIONS 
} from '@/types/WebsiteRequestForm';
import { useTranslations } from '@/utils/translations';
import { ChevronLeft, ChevronRight, Send, User, Mail, Phone, Building } from 'lucide-react';

interface WebsiteRequestFormProps {
  onSubmit?: (data: WebsiteRequestFormData) => void;
  language?: SupportedLanguage;
  onLanguageChange?: (language: SupportedLanguage) => void;
}

const WebsiteRequestForm: React.FC<WebsiteRequestFormProps> = ({
  onSubmit,
  language = 'en',
  onLanguageChange,
}) => {
  const { t } = useTranslations(language);
  const isRTL = language === 'fa';

  // Form state
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Form data
  const [formData, setFormData] = useState<WebsiteRequestFormData>({
    // Contact Info
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Sections
    basicInfo: {
      businessName: '',
      currentWebsite: '',
      mainGoal: '',
      projectImportance: '',
    },
    targetAudience: {
      idealCustomer: '',
      expectedAction: '',
      mainProblem: '',
    },
    contentStructure: {
      requiredPages: [],
      language: 'en',
      userRegistration: false,
    },
    designBranding: {
      hasVisualIdentity: false,
      designStyle: '',
      inspirationWebsite: '',
      brandColors: '',
      avoidColors: '',
      desiredFeeling: '',
    },
    technicalFeatures: {
      needsCMS: false,
      customForms: [],
      paymentGateway: false,
      multiLanguage: false,
      additionalLanguages: [],
      userContent: false,
      userContentTypes: [],
      integrations: [],
    },
    seoMarketing: {
      knowsKeywords: false,
      hasSEOStrategy: false,
      needsBlog: false,
      socialMediaLinks: '',
    },
    databaseInfo: {
      dataToStore: [],
      managementSystem: '',
      hasInitialData: false,
    },
    hostingDomain: {
      hasDomain: false,
      hasHosting: false,
      audienceRegion: '',
    },
    timeline: {
      desiredCompletionDate: '',
      budget: '',
      mainPriority: '',
    },
    additionalServices: {
      needsSupport: false,
      needsContentManagement: false,
      interestedInLongTerm: false,
    },
  });

  // Form steps
  const steps: FormStep[] = [
    { id: 0, title: 'Contact', subtitle: 'Your Information', icon: 'user', isCompleted: false, isActive: false },
    { id: 1, title: 'Basic Info', subtitle: 'Project Overview', icon: 'info', isCompleted: false, isActive: false },
    { id: 2, title: 'Audience', subtitle: 'Target Market', icon: 'users', isCompleted: false, isActive: false },
    { id: 3, title: 'Content', subtitle: 'Structure & Pages', icon: 'file', isCompleted: false, isActive: false },
    { id: 4, title: 'Design', subtitle: 'Visual Identity', icon: 'palette', isCompleted: false, isActive: false },
    { id: 5, title: 'Technical', subtitle: 'Features & Functions', icon: 'settings', isCompleted: false, isActive: false },
    { id: 6, title: 'SEO', subtitle: 'Search & Marketing', icon: 'search', isCompleted: false, isActive: false },
    { id: 7, title: 'Database', subtitle: 'Data Management', icon: 'database', isCompleted: false, isActive: false },
    { id: 8, title: 'Hosting', subtitle: 'Domain & Server', icon: 'server', isCompleted: false, isActive: false },
    { id: 9, title: 'Timeline', subtitle: 'Schedule & Budget', icon: 'calendar', isCompleted: false, isActive: false },
    { id: 10, title: 'Services', subtitle: 'Additional Support', icon: 'headphones', isCompleted: false, isActive: false },
  ];

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('website-request-form');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('website-request-form', JSON.stringify(formData));
  }, [formData]);

  // Navigation
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step <= currentStep + 1 && step < steps.length) {
      setCurrentStep(step);
    }
  };

  // Form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Clear saved data on successful submission
      localStorage.removeItem('website-request-form');
      
      alert(t('messages.submitSuccess'));
    } catch (error) {
      console.error('Submission error:', error);
      alert(t('messages.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section data handlers
  const handleContactChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSectionChange = (section: keyof Omit<WebsiteRequestFormData, 'name' | 'email' | 'phone' | 'company'>, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.title')}</h2>
              <p className="text-gray-600">Tell us about yourself and your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                label={t('contact.name')}
                name="name"
                value={formData.name}
                onChange={(e) => handleContactChange('name', e.target.value)}
                placeholder={t('contact.namePlaceholder')}
                required
                language={language}
                icon={<User className="w-5 h-5" />}
              />
              
              <TextField
                label={t('contact.email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                placeholder={t('contact.emailPlaceholder')}
                required
                language={language}
                icon={<Mail className="w-5 h-5" />}
              />
              
              <TextField
                label={t('contact.phone')}
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                placeholder={t('contact.phonePlaceholder')}
                language={language}
                icon={<Phone className="w-5 h-5" />}
              />
              
              <TextField
                label={t('contact.company')}
                name="company"
                value={formData.company}
                onChange={(e) => handleContactChange('company', e.target.value)}
                placeholder={t('contact.companyPlaceholder')}
                required
                language={language}
                icon={<Building className="w-5 h-5" />}
              />
            </div>
          </div>
        );
        
      case 1:
        return (
          <BasicInfoSection
            data={formData.basicInfo}
            onChange={(data) => handleSectionChange('basicInfo', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 2:
        return (
          <AudienceSection
            data={formData.targetAudience}
            onChange={(data) => handleSectionChange('targetAudience', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 3:
        return (
          <ContentSection
            data={formData.contentStructure}
            onChange={(data) => handleSectionChange('contentStructure', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 4:
        return (
          <DesignSection
            data={formData.designBranding}
            onChange={(data) => handleSectionChange('designBranding', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 5:
        return (
          <TechnicalSection
            data={formData.technicalFeatures}
            onChange={(data) => handleSectionChange('technicalFeatures', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 6:
        return (
          <SEOSection
            data={formData.seoMarketing}
            onChange={(data) => handleSectionChange('seoMarketing', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 7:
        return (
          <DatabaseSection
            data={formData.databaseInfo}
            onChange={(data) => handleSectionChange('databaseInfo', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 8:
        return (
          <HostingSection
            data={formData.hostingDomain}
            onChange={(data) => handleSectionChange('hostingDomain', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 9:
        return (
          <TimelineSection
            data={formData.timeline}
            onChange={(data) => handleSectionChange('timeline', data)}
            errors={errors}
            language={language}
          />
        );
        
      case 10:
        return (
          <ServicesSection
            data={formData.additionalServices}
            onChange={(data) => handleSectionChange('additionalServices', data)}
            errors={errors}
            language={language}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Selector */}
      <div className="flex justify-end mb-6 text-black">
        <select
          value={language}
          onChange={(e) => onLanguageChange?.(e.target.value as SupportedLanguage)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {FORM_LANGUAGE_OPTIONS.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Progress */}
      <FormProgress
        steps={steps}
        currentStep={currentStep}
        language={language}
        onStepClick={goToStep}
        variant="default"
        className="mb-8"
      />

      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`
            inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white 
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
            ${isRTL ? 'flex-row-reverse' : 'flex-row'}
          `}
        >
          <ChevronLeft className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {t('navigation.previous')}
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`
              inline-flex items-center px-6 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-900 
              hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
              ${isRTL ? 'flex-row-reverse' : 'flex-row'}
            `}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                {t('common.loading')}
              </>
            ) : (
              <>
                <Send className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('navigation.submit')}
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={nextStep}
            className={`
              inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-900 
              hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${isRTL ? 'flex-row-reverse' : 'flex-row'}
            `}
          >
            {t('navigation.next')}
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebsiteRequestForm;