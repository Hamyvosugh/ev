import { SupportedLanguage } from '../types/WebsiteRequestForm';

export interface Translations {
  // Form navigation
  navigation: {
    next: string;
    previous: string;
    submit: string;
    step: string;
    of: string;
  };
  
  // Contact information
  contact: {
    title: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
  };

  // Section titles
  sections: {
    basicInfo: string;
    targetAudience: string;
    contentStructure: string;
    designBranding: string;
    technicalFeatures: string;
    seoMarketing: string;
    databaseInfo: string;
    hostingDomain: string;
    timeline: string;
    additionalServices: string;
  };

  // Basic Info Section
  basicInfo: {
    businessName: string;
    businessNamePlaceholder: string;
    currentWebsite: string;
    currentWebsitePlaceholder: string;
    mainGoal: string;
    mainGoalPlaceholder: string;
    projectImportance: string;
    projectImportancePlaceholder: string;
  };

  // Target Audience Section
  targetAudience: {
    idealCustomer: string;
    idealCustomerPlaceholder: string;
    expectedAction: string;
    expectedActionPlaceholder: string;
    mainProblem: string;
    mainProblemPlaceholder: string;
  };

  // Common elements
  common: {
    yes: string;
    no: string;
    optional: string;
    required: string;
    selectOption: string;
    uploadFile: string;
    addMore: string;
    remove: string;
    loading: string;
    error: string;
    success: string;
  };

  // Validation messages
  validation: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    minLength: string;
    maxLength: string;
    fileTooBig: string;
    invalidFileType: string;
  };

  // Success/Error messages
  messages: {
    submitSuccess: string;
    submitError: string;
    autoSaved: string;
    dataRestored: string;
  };
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    navigation: {
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit Request',
      step: 'Step',
      of: 'of',
    },
    contact: {
      title: 'Contact Information',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company/Brand Name',
      namePlaceholder: 'Enter your full name',
      emailPlaceholder: 'your.email@example.com',
      phonePlaceholder: '+49 123 456789',
      companyPlaceholder: 'Your company name',
    },
    sections: {
      basicInfo: 'Basic Project Information',
      targetAudience: 'Target Audience',
      contentStructure: 'Content & Structure',
      designBranding: 'Design & Branding',
      technicalFeatures: 'Technical Features',
      seoMarketing: 'SEO & Marketing',
      databaseInfo: 'Database & Backend',
      hostingDomain: 'Hosting & Domain',
      timeline: 'Timeline & Budget',
      additionalServices: 'Additional Services',
    },
    basicInfo: {
      businessName: 'What is your business or brand name?',
      businessNamePlaceholder: 'Enter your business name',
      currentWebsite: 'Do you have an existing website? If yes, what is the URL?',
      currentWebsitePlaceholder: 'https://your-website.com',
      mainGoal: 'What is your main goal for launching or redesigning this website?',
      mainGoalPlaceholder: 'Describe your main objectives...',
      projectImportance: 'What makes this project important to you?',
      projectImportancePlaceholder: 'Explain why this project matters...',
    },
    targetAudience: {
      idealCustomer: 'Who is your ideal target audience or customer?',
      idealCustomerPlaceholder: 'Describe age, gender, location, needs, habits...',
      expectedAction: 'What do you expect users to do on their first visit?',
      expectedActionPlaceholder: 'Contact us, make a purchase, sign up...',
      mainProblem: 'What is the main problem your website should solve for visitors?',
      mainProblemPlaceholder: 'Describe the main problem to solve...',
    },
    common: {
      yes: 'Yes',
      no: 'No',
      optional: 'Optional',
      required: 'Required',
      selectOption: 'Select an option',
      uploadFile: 'Upload File',
      addMore: 'Add More',
      remove: 'Remove',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    validation: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number',
      minLength: 'Minimum length is {min} characters',
      maxLength: 'Maximum length is {max} characters',
      fileTooBig: 'File size is too large',
      invalidFileType: 'Invalid file type',
    },
    messages: {
      submitSuccess: 'Your request has been submitted successfully!',
      submitError: 'An error occurred while submitting your request.',
      autoSaved: 'Progress saved automatically',
      dataRestored: 'Previous progress restored',
    },
  },

  de: {
    navigation: {
      next: 'Weiter',
      previous: 'Zurück',
      submit: 'Anfrage senden',
      step: 'Schritt',
      of: 'von',
    },
    contact: {
      title: 'Kontaktinformationen',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      company: 'Firmen-/Markenname',
      namePlaceholder: 'Geben Sie Ihren vollständigen Namen ein',
      emailPlaceholder: 'ihre.email@beispiel.de',
      phonePlaceholder: '+49 123 456789',
      companyPlaceholder: 'Ihr Firmenname',
    },
    sections: {
      basicInfo: 'Grundlegende Projektinformationen',
      targetAudience: 'Zielgruppe',
      contentStructure: 'Inhalt & Struktur',
      designBranding: 'Design & Branding',
      technicalFeatures: 'Technische Funktionen',
      seoMarketing: 'SEO & Marketing',
      databaseInfo: 'Datenbank & Backend',
      hostingDomain: 'Hosting & Domain',
      timeline: 'Zeitplan & Budget',
      additionalServices: 'Zusätzliche Dienstleistungen',
    },
    basicInfo: {
      businessName: 'Wie lautet Ihr Geschäfts- oder Markenname?',
      businessNamePlaceholder: 'Geben Sie Ihren Geschäftsnamen ein',
      currentWebsite: 'Haben Sie eine bestehende Website? Falls ja, wie lautet die URL?',
      currentWebsitePlaceholder: 'https://ihre-website.de',
      mainGoal: 'Was ist Ihr Hauptziel beim Start oder Redesign dieser Website?',
      mainGoalPlaceholder: 'Beschreiben Sie Ihre Hauptziele...',
      projectImportance: 'Was macht dieses Projekt für Sie wichtig?',
      projectImportancePlaceholder: 'Erklären Sie, warum dieses Projekt wichtig ist...',
    },
    targetAudience: {
      idealCustomer: 'Wer ist Ihre ideale Zielgruppe oder Ihr idealer Kunde?',
      idealCustomerPlaceholder: 'Beschreiben Sie Alter, Geschlecht, Standort, Bedürfnisse, Gewohnheiten...',
      expectedAction: 'Was erwarten Sie, dass Nutzer bei ihrem ersten Besuch tun?',
      expectedActionPlaceholder: 'Kontakt aufnehmen, kaufen, anmelden...',
      mainProblem: 'Was ist das Hauptproblem, das Ihre Website für Besucher lösen soll?',
      mainProblemPlaceholder: 'Beschreiben Sie das zu lösende Hauptproblem...',
    },
    common: {
      yes: 'Ja',
      no: 'Nein',
      optional: 'Optional',
      required: 'Erforderlich',
      selectOption: 'Option auswählen',
      uploadFile: 'Datei hochladen',
      addMore: 'Mehr hinzufügen',
      remove: 'Entfernen',
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg',
    },
    validation: {
      required: 'Dieses Feld ist erforderlich',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein',
      minLength: 'Mindestlänge ist {min} Zeichen',
      maxLength: 'Maximale Länge ist {max} Zeichen',
      fileTooBig: 'Dateigröße ist zu groß',
      invalidFileType: 'Ungültiger Dateityp',
    },
    messages: {
      submitSuccess: 'Ihre Anfrage wurde erfolgreich übermittelt!',
      submitError: 'Beim Übermitteln Ihrer Anfrage ist ein Fehler aufgetreten.',
      autoSaved: 'Fortschritt automatisch gespeichert',
      dataRestored: 'Vorheriger Fortschritt wiederhergestellt',
    },
  },

  fa: {
    navigation: {
      next: 'بعدی',
      previous: 'قبلی',
      submit: 'ارسال درخواست',
      step: 'مرحله',
      of: 'از',
    },
    contact: {
      title: 'اطلاعات تماس',
      name: 'نام و نام خانوادگی',
      email: 'آدرس ایمیل',
      phone: 'شماره تلفن',
      company: 'نام شرکت/برند',
      namePlaceholder: 'نام کامل خود را وارد کنید',
      emailPlaceholder: 'ایمیل.شما@example.com',
      phonePlaceholder: '+98 912 345 6789',
      companyPlaceholder: 'نام شرکت شما',
    },
    sections: {
      basicInfo: 'اطلاعات کلی پروژه',
      targetAudience: 'مخاطبان هدف',
      contentStructure: 'محتوا و ساختار',
      designBranding: 'طراحی و برندینگ',
      technicalFeatures: 'ویژگی‌های فنی',
      seoMarketing: 'سئو و مارکتینگ',
      databaseInfo: 'دیتابیس و بک‌اند',
      hostingDomain: 'هاست و دامنه',
      timeline: 'زمان‌بندی و بودجه',
      additionalServices: 'خدمات اضافی',
    },
    basicInfo: {
      businessName: 'نام کسب‌وکار یا برند شما چیست؟',
      businessNamePlaceholder: 'نام کسب‌وکار خود را وارد کنید',
      currentWebsite: 'آیا وب‌سایت قبلی دارید؟ اگر بله، لینک آن چیست؟',
      currentWebsitePlaceholder: 'https://website-shoma.com',
      mainGoal: 'هدف اصلی شما از راه‌اندازی یا بازطراحی این وب‌سایت چیست؟',
      mainGoalPlaceholder: 'اهداف اصلی خود را شرح دهید...',
      projectImportance: 'چه چیزی باعث می‌شود این پروژه برای شما مهم باشد؟',
      projectImportancePlaceholder: 'توضیح دهید چرا این پروژه مهم است...',
    },
    targetAudience: {
      idealCustomer: 'مخاطب یا مشتری ایده‌آل شما چه کسی است؟',
      idealCustomerPlaceholder: 'سن، جنس، موقعیت جغرافیایی، نیازها، عادت‌ها را شرح دهید...',
      expectedAction: 'انتظار دارید کاربر در اولین بازدید چه کاری انجام دهد؟',
      expectedActionPlaceholder: 'تماس بگیرد، خرید کند، ثبت‌نام کند...',
      mainProblem: 'مهم‌ترین مشکلی که وب‌سایت شما باید حل کند چیست؟',
      mainProblemPlaceholder: 'مشکل اصلی قابل حل را شرح دهید...',
    },
    common: {
      yes: 'بله',
      no: 'خیر',
      optional: 'اختیاری',
      required: 'الزامی',
      selectOption: 'گزینه‌ای را انتخاب کنید',
      uploadFile: 'آپلود فایل',
      addMore: 'افزودن بیشتر',
      remove: 'حذف',
      loading: 'در حال بارگذاری...',
      error: 'خطا',
      success: 'موفق',
    },
    validation: {
      required: 'این فیلد الزامی است',
      invalidEmail: 'لطفاً یک آدرس ایمیل معتبر وارد کنید',
      invalidPhone: 'لطفاً یک شماره تلفن معتبر وارد کنید',
      minLength: 'حداقل طول {min} کاراکتر است',
      maxLength: 'حداکثر طول {max} کاراکتر است',
      fileTooBig: 'حجم فایل بیش از حد مجاز است',
      invalidFileType: 'نوع فایل نامعتبر است',
    },
    messages: {
      submitSuccess: 'درخواست شما با موفقیت ارسال شد!',
      submitError: 'خطایی در ارسال درخواست شما رخ داد.',
      autoSaved: 'پیشرفت به صورت خودکار ذخیره شد',
      dataRestored: 'پیشرفت قبلی بازیابی شد',
    },
  },

  tr: {
    navigation: {
      next: 'İleri',
      previous: 'Geri',
      submit: 'Talebi Gönder',
      step: 'Adım',
      of: '/',
    },
    contact: {
      title: 'İletişim Bilgileri',
      name: 'Ad Soyad',
      email: 'E-posta Adresi',
      phone: 'Telefon Numarası',
      company: 'Şirket/Marka Adı',
      namePlaceholder: 'Adınızı ve soyadınızı girin',
      emailPlaceholder: 'e-postaniz@ornek.com',
      phonePlaceholder: '+90 532 123 4567',
      companyPlaceholder: 'Şirket adınız',
    },
    sections: {
      basicInfo: 'Temel Proje Bilgileri',
      targetAudience: 'Hedef Kitle',
      contentStructure: 'İçerik ve Yapı',
      designBranding: 'Tasarım ve Marka',
      technicalFeatures: 'Teknik Özellikler',
      seoMarketing: 'SEO ve Pazarlama',
      databaseInfo: 'Veritabanı ve Backend',
      hostingDomain: 'Hosting ve Domain',
      timeline: 'Zaman Çizelgesi ve Bütçe',
      additionalServices: 'Ek Hizmetler',
    },
    basicInfo: {
      businessName: 'İşletmenizin veya markanızın adı nedir?',
      businessNamePlaceholder: 'İşletme adınızı girin',
      currentWebsite: 'Mevcut bir web siteniz var mı? Varsa URL nedir?',
      currentWebsitePlaceholder: 'https://web-siteniz.com',
      mainGoal: 'Bu web sitesini başlatma veya yeniden tasarlama konusundaki ana hedefiniz nedir?',
      mainGoalPlaceholder: 'Ana hedeflerinizi açıklayın...',
      projectImportance: 'Bu projeyi sizin için önemli kılan nedir?',
      projectImportancePlaceholder: 'Bu projenin neden önemli olduğunu açıklayın...',
    },
    targetAudience: {
      idealCustomer: 'İdeal hedef kitleniz veya müşteriniz kimdir?',
      idealCustomerPlaceholder: 'Yaş, cinsiyet, konum, ihtiyaçlar, alışkanlıkları açıklayın...',
      expectedAction: 'Kullanıcıların ilk ziyaretlerinde ne yapmalarını bekliyorsunuz?',
      expectedActionPlaceholder: 'İletişime geçsin, satın alsın, kaydolsun...',
      mainProblem: 'Web sitenizin ziyaretçiler için çözmesi gereken ana sorun nedir?',
      mainProblemPlaceholder: 'Çözülecek ana sorunu açıklayın...',
    },
    common: {
      yes: 'Evet',
      no: 'Hayır',
      optional: 'İsteğe Bağlı',
      required: 'Gerekli',
      selectOption: 'Bir seçenek seçin',
      uploadFile: 'Dosya Yükle',
      addMore: 'Daha Fazla Ekle',
      remove: 'Kaldır',
      loading: 'Yükleniyor...',
      error: 'Hata',
      success: 'Başarılı',
    },
    validation: {
      required: 'Bu alan gereklidir',
      invalidEmail: 'Lütfen geçerli bir e-posta adresi girin',
      invalidPhone: 'Lütfen geçerli bir telefon numarası girin',
      minLength: 'Minimum uzunluk {min} karakterdir',
      maxLength: 'Maksimum uzunluk {max} karakterdir',
      fileTooBig: 'Dosya boyutu çok büyük',
      invalidFileType: 'Geçersiz dosya türü',
    },
    messages: {
      submitSuccess: 'Talebiniz başarıyla gönderildi!',
      submitError: 'Talebinizi gönderirken bir hata oluştu.',
      autoSaved: 'İlerleme otomatik olarak kaydedildi',
      dataRestored: 'Önceki ilerleme geri yüklendi',
    },
  },
};

// Translation helper function
export function getTranslation(
  language: SupportedLanguage,
  key: string
): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Translation hook
export function useTranslations(language: SupportedLanguage) {
  return {
    t: (key: string) => getTranslation(language, key),
    language,
  };
}