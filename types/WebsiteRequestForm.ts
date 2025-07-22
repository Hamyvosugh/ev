// Form section interfaces
export interface BasicInfo {
  businessName: string;
  currentWebsite: string;
  mainGoal: string;
  projectImportance: string;
}

export interface TargetAudience {
  idealCustomer: string;
  expectedAction: string;
  mainProblem: string;
}

export interface ContentStructure {
  requiredPages: string[];
  language: string;
  userRegistration: boolean;
}

export interface DesignBranding {
  hasVisualIdentity: boolean;
  logo?: File;
  designStyle: string;
  inspirationWebsite: string;
  brandColors: string;
  avoidColors: string;
  desiredFeeling: string;
}

export interface TechnicalFeatures {
  needsCMS: boolean;
  cmsType?: string;
  customForms: string[];
  paymentGateway: boolean;
  paymentCountry?: string;
  multiLanguage: boolean;
  additionalLanguages: string[];
  userContent: boolean;
  userContentTypes: string[];
  integrations: string[];
}

export interface SEOMarketing {
  knowsKeywords: boolean;
  keywords?: string;
  hasSEOStrategy: boolean;
  needsBlog: boolean;
  socialMediaLinks: string;
}

export interface DatabaseInfo {
  dataToStore: string[];
  managementSystem: string;
  hasInitialData: boolean;
  initialDataDescription?: string;
}

export interface HostingDomain {
  hasDomain: boolean;
  domainProvider?: string;
  hasHosting: boolean;
  audienceRegion: string;
}

export interface Timeline {
  desiredCompletionDate: string;
  budget: string;
  mainPriority: string;
}

export interface AdditionalServices {
  needsSupport: boolean;
  needsContentManagement: boolean;
  interestedInLongTerm: boolean;
}

// Complete form data interface
export interface WebsiteRequestFormData {
  // Contact Info
  name: string;
  email: string;
  phone: string;
  company: string;
  
  // Form sections
  basicInfo: BasicInfo;
  targetAudience: TargetAudience;
  contentStructure: ContentStructure;
  designBranding: DesignBranding;
  technicalFeatures: TechnicalFeatures;
  seoMarketing: SEOMarketing;
  databaseInfo: DatabaseInfo;
  hostingDomain: HostingDomain;
  timeline: Timeline;
  additionalServices: AdditionalServices;
}

// Form step configuration
export interface FormStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  isCompleted: boolean;
  isActive: boolean;
}

// Validation error types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Form state management
export interface FormState {
  currentStep: number;
  totalSteps: number;
  isLoading: boolean;
  errors: FormErrors;
  isValid: boolean;
}

// Options for select fields
export interface SelectOption {
  value: string;
  label: string;
}

// File upload types
export interface FileUpload {
  file: File;
  preview?: string;
  type: 'logo' | 'inspiration' | 'other';
}

// API response types
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Form submission status
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Supported form languages
export type SupportedLanguage = 'en' | 'de' | 'fa' | 'tr';

// Language context
export interface LanguageContext {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

// Website content language options (for the website being built)
export const CONTENT_LANGUAGE_OPTIONS: SelectOption[] = [
  { value: 'fa', label: 'فارسی' },
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'العربية' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fr', label: 'Français' },
  { value: 'es', label: 'Español' },
  { value: 'tr', label: 'Türkçe' },
  { value: 'ru', label: 'Русский' },
];

// Form UI language options
export const FORM_LANGUAGE_OPTIONS: SelectOption[] = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fa', label: 'فارسی' },
  { value: 'tr', label: 'Türkçe' },
];

// Region options
export const REGION_OPTIONS: SelectOption[] = [
  { value: 'middle-east', label: 'خاورمیانه' },
  { value: 'eastern-europe', label: 'اروپای شرقی' },
  { value: 'western-europe', label: 'اروپای غربی' },
  { value: 'central-asia', label: 'آسیای میانه' },
  { value: 'north-america', label: 'آمریکای شمالی' },
  { value: 'south-america', label: 'آمریکای جنوبی' },
];

// Budget ranges
export const BUDGET_OPTIONS: SelectOption[] = [
    { value: 'under-1000', label: 'Under €1,000' },
    { value: '1000-3000', label: '€1,000 - €3,000' },
    { value: '3000-5000', label: '€3,000 - €5,000' },
    { value: '5000-10000', label: '€5,000 - €10,000' },
    { value: 'over-10000', label: 'Over €10,000' },
    { value: 'negotiable', label: 'Negotiable' },
];

export default WebsiteRequestFormData;