"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Camera,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  FileText,
  Globe,
  Layers,
  LineChart,
  MailCheck,
  Megaphone,
  MessageSquare,
  Monitor,
  MousePointerClick,
  Package,
  Palette,
  PenTool,
  Search,
  Shield,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { Vazirmatn } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ═══════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════ */
type Lang = "de" | "fa";

const t = {
  heroBadge: {
    de: "Digitale Exzellenz für Kashmar",
    fa: "تعالی دیجیتال برای کاشمر",
  },
  heroSub: { de: "trifft digitale Innovation", fa: "و نوآوری دیجیتال" },
  heroDesc: {
    de: "Strategische Partnerschaft für maximale Sichtbarkeit, höchste Konversionsraten und nachhaltiges Wachstum im deutschen und europäischen Markt.",
    fa: "همکاری استراتژیک برای حداکثر دیده‌شدن، بالاترین نرخ تبدیل و رشد پایدار در بازار آلمان و اروپا.",
  },
  heroBtn1: { de: "Unsere Leistungen", fa: "خدمات ما" },
  heroBtn2: { de: "Preisübersicht", fa: "لیست قیمت‌ها" },
  heroBy: { de: "Präsentiert von", fa: "ارائه‌شده توسط" },

  aboutLabel: { de: "Ihr Partner", fa: "شریک شما" },
  aboutTitle: { de: "Über emoviral", fa: "درباره emoviral" },
  aboutSub: {
    de: "Wir sind eine Full-Service-Digitalagentur mit Fokus auf E-Commerce, SEO und datengetriebenes Marketing.",
    fa: "ما یک آژانس دیجیتال تمام‌خدمات با تمرکز بر تجارت الکترونیک، سئو و بازاریابی داده‌محور هستیم.",
  },
  aboutCards: {
    de: [
      {
        title: "Globale Expertise",
        desc: "Internationale Erfahrung in digitaler Strategie und E-Commerce für anspruchsvolle Marken.",
      },
      {
        title: "Datengetrieben",
        desc: "Jede Entscheidung basiert auf Daten, Analysen und messbaren KPIs für maximalen ROI.",
      },
      {
        title: "Premium-Qualität",
        desc: "Höchste Standards in Design, Technik und Content für nachhaltige Markenpositionierung.",
      },
    ],
    fa: [
      {
        title: "تخصص جهانی",
        desc: "تجربه بین‌المللی در استراتژی دیجیتال و تجارت الکترونیک برای برندهای سطح بالا.",
      },
      {
        title: "داده‌محور",
        desc: "هر تصمیم بر اساس داده‌ها، تحلیل‌ها و شاخص‌های قابل اندازه‌گیری برای حداکثر بازگشت سرمایه.",
      },
      {
        title: "کیفیت پریمیوم",
        desc: "بالاترین استانداردها در طراحی، فناوری و محتوا برای جایگاه‌سازی پایدار برند.",
      },
    ],
  },
  statLabels: {
    de: [
      "Projekte abgeschlossen",
      "Kundenzufriedenheit",
      "E-Commerce-Kunden",
      "Jahre Erfahrung",
    ],
    fa: ["پروژه تکمیل‌شده", "رضایت مشتریان", "مشتری ایکامرس", "سال تجربه"],
  },

  servLabel: { de: "Was wir bieten", fa: "آنچه ارائه می‌دهیم" },
  servTitle: {
    de: "Umfassende Digital-Lösungen",
    fa: "راه‌حل‌های جامع دیجیتال",
  },
  servSub: {
    de: "Von der Website bis zur Amazon-Optimierung — alles aus einer Hand für Kashmar.",
    fa: "از وب‌سایت تا بهینه‌سازی آمازون — همه چیز از یک منبع برای کاشمر.",
  },
  servCards: {
    de: [
      {
        title: "SEO & AEO",
        desc: "Suchmaschinen- und Answer-Engine-Optimierung für maximale organische Sichtbarkeit.",
      },
      {
        title: "Website-Entwicklung",
        desc: "Von Basic bis interaktive 3D-Narrative — Websites die Geschichten erzählen.",
      },
      {
        title: "Amazon & E-Commerce",
        desc: "Vollständige Amazon-Optimierung inkl. SEO, PPC und A+ Content.",
      },
      {
        title: "Kampagnen-Management",
        desc: "Google Ads, Social Media und Amazon Advertising strategisch gesteuert.",
      },
      {
        title: "Content-Erstellung",
        desc: "Bis zu 12 professionelle Blog-Beiträge pro Monat plus Multimedia-Content.",
      },
      {
        title: "Analytics & Reporting",
        desc: "Transparente monatliche Reports mit allen KPIs und Handlungsempfehlungen.",
      },
    ],
    fa: [
      {
        title: "سئو و AEO",
        desc: "بهینه‌سازی موتورهای جستجو و پاسخ‌دهی برای حداکثر دیده‌شدن ارگانیک.",
      },
      {
        title: "توسعه وب‌سایت",
        desc: "از سایت ساده تا تجربه سه‌بعدی تعاملی — وب‌سایت‌هایی که داستان می‌گویند.",
      },
      {
        title: "آمازون و ایکامرس",
        desc: "بهینه‌سازی کامل آمازون شامل سئو، تبلیغات کلیکی و محتوای A+.",
      },
      {
        title: "مدیریت کمپین",
        desc: "تبلیغات گوگل، شبکه‌های اجتماعی و آمازون به صورت استراتژیک.",
      },
      {
        title: "تولید محتوا",
        desc: "تا ۱۲ مقاله وبلاگ حرفه‌ای در ماه به همراه محتوای چندرسانه‌ای.",
      },
      {
        title: "تحلیل و گزارش‌دهی",
        desc: "گزارش‌های ماهانه شفاف با تمام شاخص‌ها و پیشنهادات اجرایی.",
      },
    ],
  },

  seoLabel: { de: "Sichtbarkeit", fa: "دیده‌شدن" },
  seoTitle: { de: "SEO & AEO Strategie", fa: "استراتژی سئو و AEO" },
  seoSub: {
    de: "Organisches Wachstum durch modernste Suchmaschinen- und Answer-Engine-Optimierung.",
    fa: "رشد ارگانیک از طریق پیشرفته‌ترین بهینه‌سازی موتورهای جستجو و پاسخ‌دهی.",
  },
  seoDesc: {
    de: "Suchmaschinenoptimierung ist das Fundament Ihrer digitalen Präsenz. Wir sorgen dafür, dass Kashmar bei relevanten Suchanfragen ganz oben steht.",
    fa: "بهینه‌سازی موتور جستجو پایه حضور دیجیتال شماست. ما تضمین می‌کنیم که کاشمر در جستجوهای مرتبط در رتبه اول قرار گیرد.",
  },
  seoItems: {
    de: [
      "Umfassende Keyword-Recherche & Analyse",
      "On-Page-Optimierung (Meta, Struktur, Schema)",
      "Technisches SEO (Core Web Vitals, Speed)",
      "Off-Page SEO & Backlink-Strategie",
      "Lokales SEO für den deutschen Markt",
      "Content-SEO & semantische Optimierung",
      "Monatliche SEO-Audits & Reporting",
      "Wettbewerberanalyse & Marktbeobachtung",
    ],
    fa: [
      "تحقیق جامع کلمات کلیدی و تحلیل",
      "بهینه‌سازی درون‌صفحه‌ای (متا، ساختار، اسکیما)",
      "سئو تکنیکال (Core Web Vitals، سرعت)",
      "سئو خارجی و استراتژی بک‌لینک",
      "سئو محلی برای بازار آلمان",
      "سئو محتوا و بهینه‌سازی معنایی",
      "آدیت ماهانه سئو و گزارش‌دهی",
      "تحلیل رقبا و رصد بازار",
    ],
  },
  aeoDesc: {
    de: "Answer Engine Optimization — die Zukunft der Suche. Wir optimieren Kashmar für KI-gestützte Suchmaschinen, Sprachassistenten und Featured Snippets.",
    fa: "بهینه‌سازی موتور پاسخ — آینده جستجو. ما کاشمر را برای موتورهای جستجوی مبتنی بر هوش مصنوعی، دستیارهای صوتی و Featured Snippets بهینه می‌کنیم.",
  },
  aeoItems: {
    de: [
      "Optimierung für Google AI Overviews",
      "Featured Snippet & Rich Result Strategie",
      "Strukturierte Daten (Schema.org / JSON-LD)",
      "Voice Search Optimierung",
      "FAQ- und Knowledge-Graph-Optimierung",
      "Optimierung für ChatGPT, Perplexity & Gemini",
      "Conversational Content Strategie",
      "Monitoring der AI-Sichtbarkeit",
    ],
    fa: [
      "بهینه‌سازی برای Google AI Overviews",
      "استراتژی Featured Snippet و Rich Result",
      "داده‌های ساختاریافته (Schema.org / JSON-LD)",
      "بهینه‌سازی جستجوی صوتی",
      "بهینه‌سازی FAQ و Knowledge Graph",
      "بهینه‌سازی برای ChatGPT، Perplexity و Gemini",
      "استراتژی محتوای مکالمه‌ای",
      "مانیتورینگ دیده‌شدن در AI",
    ],
  },
  seoProcessTitle: { de: "Unser SEO & AEO Prozess", fa: "فرایند سئو و AEO ما" },
  seoProcess: {
    de: [
      {
        step: "01",
        title: "Audit & Analyse",
        desc: "Umfassende Analyse Ihrer aktuellen Sichtbarkeit und Wettbewerber.",
      },
      {
        step: "02",
        title: "Strategie",
        desc: "Maßgeschneiderte SEO- und AEO-Strategie basierend auf Daten.",
      },
      {
        step: "03",
        title: "Umsetzung",
        desc: "Technische und inhaltliche Optimierung aller relevanten Bereiche.",
      },
      {
        step: "04",
        title: "Monitoring",
        desc: "Kontinuierliche Überwachung, Reporting und Optimierung.",
      },
    ],
    fa: [
      {
        step: "۰۱",
        title: "آدیت و تحلیل",
        desc: "تحلیل جامع دیده‌شدن فعلی و رقبای شما.",
      },
      {
        step: "۰۲",
        title: "استراتژی",
        desc: "استراتژی سئو و AEO سفارشی بر اساس داده‌ها.",
      },
      {
        step: "۰۳",
        title: "اجرا",
        desc: "بهینه‌سازی فنی و محتوایی تمام بخش‌های مرتبط.",
      },
      {
        step: "۰۴",
        title: "مانیتورینگ",
        desc: "نظارت مداوم، گزارش‌دهی و بهینه‌سازی.",
      },
    ],
  },

  webLabel: { de: "Webentwicklung", fa: "توسعه وب" },
  webTitle: { de: "Website-Pakete", fa: "پکیج‌های وب‌سایت" },
  webSub: {
    de: "Drei maßgeschneiderte Lösungen — von der professionellen Webpräsenz bis zur immersiven 3D-Erfahrung.",
    fa: "سه راه‌حل سفارشی — از حضور حرفه‌ای وب تا تجربه سه‌بعدی غوطه‌ور.",
  },
  webPaket: { de: "Paket", fa: "پکیج" },
  webOnce: { de: "Einmalige Einrichtung", fa: "هزینه یکباره" },
  webRecommended: { de: "EMPFOHLEN", fa: "پیشنهادی" },
  webVideoLabel: { de: "Paket-Preview", fa: "پیش‌نمایش پکیج" },
  webBasicDesc: {
    de: "Professionelle Webpräsenz mit modernem Design",
    fa: "حضور حرفه‌ای وب با طراحی مدرن",
  },
  webBasicItems: {
    de: [
      "Responsives Design (Mobile-First)",
      "Bis zu 8 Seiten",
      "Kontaktformular & Google Maps",
      "Grundlegende SEO-Optimierung",
      "SSL-Zertifikat & Hosting-Setup",
      "CMS-Integration (WordPress/Next.js)",
      "Ladezeit-Optimierung",
      "DSGVO-konform",
      "Google Analytics Integration",
    ],
    fa: [
      "طراحی واکنش‌گرا (اول موبایل)",
      "تا ۸ صفحه",
      "فرم تماس و Google Maps",
      "بهینه‌سازی پایه سئو",
      "گواهی SSL و راه‌اندازی هاست",
      "یکپارچه‌سازی CMS (WordPress/Next.js)",
      "بهینه‌سازی سرعت بارگذاری",
      "مطابق با DSGVO",
      "یکپارچه‌سازی Google Analytics",
    ],
  },
  webPremDesc: {
    de: "E-Commerce-fähig mit erweiterten Funktionen",
    fa: "قابلیت فروشگاه آنلاین با امکانات پیشرفته",
  },
  webPremItems: {
    de: [
      "Alles aus Basic +",
      "Bis zu 20 Seiten",
      "Online-Shop-Integration",
      "Produktkatalog & Warenkorb",
      "Zahlungsgateway-Anbindung",
      "Erweiterte SEO-Optimierung",
      "Blog-System & Content Hub",
      "Newsletter-Integration",
      "Mehrsprachig (DE/EN/FA)",
      "Animationen & Micro-Interactions",
      "Performance-Monitoring",
      "A/B-Testing Setup",
    ],
    fa: [
      "تمام امکانات Basic +",
      "تا ۲۰ صفحه",
      "یکپارچه‌سازی فروشگاه آنلاین",
      "کاتالوگ محصول و سبد خرید",
      "اتصال درگاه پرداخت",
      "بهینه‌سازی پیشرفته سئو",
      "سیستم وبلاگ و مرکز محتوا",
      "یکپارچه‌سازی خبرنامه",
      "چندزبانه (DE/EN/FA)",
      "انیمیشن‌ها و Micro-Interactions",
      "مانیتورینگ عملکرد",
      "راه‌اندازی A/B Testing",
    ],
  },
  webNarrDesc: {
    de: "Immersive 3D-Erfahrung mit Produkt-Storytelling",
    fa: "تجربه سه‌بعدی غوطه‌ور با روایت محصول",
  },
  webNarrItems: {
    de: [
      "Alles aus Premium +",
      "Interaktive 3D-Produktwelt",
      "WebGL /Three.js Animationen",
      "Scroll-basiertes Storytelling",
      "Virtuelle Produkttouren",
      "Interaktive Marken-Timeline",
      "Immersive Produktpräsentation",
      "Parallax & Cinematic Effects",
      "Sound-Design Integration",
      "Custom Cursor & Interactions",
      "AR-Produktvorschau (optional)",
      "Personalisierte User-Journeys",
    ],
    fa: [
      "تمام امکانات Premium +",
      "دنیای سه‌بعدی تعاملی محصول",
      "انیمیشن‌های WebGL / Three.js",
      "داستان‌گویی مبتنی بر اسکرول",
      "تورهای مجازی محصول",
      "تایم‌لاین تعاملی برند",
      "ارائه غوطه‌ور محصول",
      "افکت‌های پارالکس و سینمایی",
      "یکپارچه‌سازی طراحی صدا",
      "کرسر و تعاملات سفارشی",
      "پیش‌نمایش AR محصول (اختیاری)",
      "سفرهای شخصی‌سازی کاربر",
    ],
  },

  amzLabel: { de: "E-Commerce", fa: "تجارت الکترونیک" },
  amzTitle: { de: "Amazon & Online-Shop", fa: "آمازون و فروشگاه آنلاین" },
  amzSub: {
    de: "Vollständige E-Commerce-Optimierung — von Amazon SEO bis zur eigenen Shop-Strategie.",
    fa: "بهینه‌سازی کامل تجارت الکترونیک — از سئو آمازون تا استراتژی فروشگاه اختصاصی.",
  },
  amzOptTitle: { de: "Amazon Optimierung", fa: "بهینه‌سازی آمازون" },
  amzCats: {
    de: [
      {
        title: "Amazon SEO",
        items: [
          "Keyword-Recherche",
          "Listing-Optimierung",
          "Backend Keywords",
          "Indexierung",
        ],
      },
      {
        title: "Amazon PPC",
        items: [
          "Sponsored Products",
          "Sponsored Brands",
          "Display Ads",
          "Bid-Optimierung",
        ],
      },
      {
        title: "Content & Design",
        items: [
          "A+ Content / EBC",
          "Banner Design",
          "Infografiken",
          "Brand Story",
        ],
      },
      {
        title: "Management",
        items: [
          "Review-Strategie",
          "Preisoptimierung",
          "Bestandsmanagement",
          "Reporting",
        ],
      },
    ],
    fa: [
      {
        title: "سئو آمازون",
        items: [
          "تحقیق کلمات کلیدی",
          "بهینه‌سازی لیستینگ",
          "Backend Keywords",
          "ایندکس‌سازی",
        ],
      },
      {
        title: "تبلیغات آمازون PPC",
        items: [
          "Sponsored Products",
          "Sponsored Brands",
          "Display Ads",
          "بهینه‌سازی بید",
        ],
      },
      {
        title: "محتوا و طراحی",
        items: ["محتوای A+ / EBC", "طراحی بنر", "اینفوگرافیک", "داستان برند"],
      },
      {
        title: "مدیریت",
        items: [
          "استراتژی نظرات",
          "بهینه‌سازی قیمت",
          "مدیریت موجودی",
          "گزارش‌دهی",
        ],
      },
    ],
  },
  shopOptTitle: {
    de: "Online-Shop Optimierung",
    fa: "بهینه‌سازی فروشگاه آنلاین",
  },
  shopCats: {
    de: [
      {
        title: "Shop SEO",
        items: [
          "Produktseiten-SEO",
          "Kategorie-Optimierung",
          "Technisches SEO",
          "Schema Markup",
        ],
      },
      {
        title: "Conversion",
        items: [
          "UX-Optimierung",
          "Checkout-Optimierung",
          "A/B-Testing",
          "Heatmap-Analyse",
        ],
      },
      {
        title: "Shop-Technik",
        items: [
          "Shopify / WooCommerce",
          "Payment Setup",
          "Versand-Integration",
          "ERP-Anbindung",
        ],
      },
      {
        title: "Wachstum",
        items: [
          "E-Mail-Marketing",
          "Retargeting",
          "Loyalty-Programme",
          "Cross-Selling",
        ],
      },
    ],
    fa: [
      {
        title: "سئو فروشگاه",
        items: [
          "سئو صفحات محصول",
          "بهینه‌سازی دسته‌بندی",
          "سئو تکنیکال",
          "Schema Markup",
        ],
      },
      {
        title: "تبدیل",
        items: [
          "بهینه‌سازی UX",
          "بهینه‌سازی چک‌اوت",
          "A/B Testing",
          "تحلیل Heatmap",
        ],
      },
      {
        title: "فناوری فروشگاه",
        items: [
          "Shopify / WooCommerce",
          "راه‌اندازی پرداخت",
          "یکپارچه‌سازی ارسال",
          "اتصال ERP",
        ],
      },
      {
        title: "رشد",
        items: [
          "ایمیل مارکتینگ",
          "ریتارگتینگ",
          "برنامه‌های وفاداری",
          "فروش متقابل",
        ],
      },
    ],
  },

  campLabel: { de: "Werbung", fa: "تبلیغات" },
  campTitle: { de: "Kampagnen-Management", fa: "مدیریت کمپین‌ها" },
  campSub: {
    de: "Zielgerichtete Werbekampagnen auf allen relevanten Plattformen für maximale Reichweite und Konversion.",
    fa: "کمپین‌های تبلیغاتی هدفمند در تمام پلتفرم‌های مرتبط برای حداکثر دسترسی و تبدیل.",
  },
  campGoogle: { de: "Google Ads", fa: "تبلیغات گوگل" },
  campGoogleDesc: {
    de: "Performance-Marketing mit Google Search, Display, Shopping & YouTube.",
    fa: "بازاریابی عملکردی با Google Search، Display، Shopping و YouTube.",
  },
  campGoogleItems: {
    de: [
      "Google Search Ads",
      "Google Shopping Ads",
      "Display-Netzwerk Kampagnen",
      "YouTube Video Ads",
      "Remarketing & Retargeting",
      "Keyword-Bidding Strategie",
      "Conversion-Tracking",
      "Monatliche Optimierung & Reporting",
    ],
    fa: [
      "تبلیغات جستجوی گوگل",
      "Google Shopping Ads",
      "کمپین‌های Display",
      "تبلیغات ویدیویی YouTube",
      "ریمارکتینگ و ریتارگتینگ",
      "استراتژی بیدینگ کلمات کلیدی",
      "ردیابی تبدیل",
      "بهینه‌سازی و گزارش ماهانه",
    ],
  },
  campSocial: { de: "Social Media Ads", fa: "تبلیغات شبکه‌های اجتماعی" },
  campSocialDesc: {
    de: "Zielgruppenspezifische Kampagnen auf Instagram, Facebook, TikTok & LinkedIn.",
    fa: "کمپین‌های هدفمند در اینستاگرام، فیسبوک، تیک‌تاک و لینکدین.",
  },
  campSocialItems: {
    de: [
      "Instagram & Facebook Ads",
      "TikTok Advertising",
      "LinkedIn B2B-Kampagnen",
      "Influencer-Kooperationen",
      "Creative-Produktion (Bild/Video)",
      "Zielgruppen-Targeting",
      "Community Management",
      "Social Commerce Integration",
    ],
    fa: [
      "تبلیغات اینستاگرام و فیسبوک",
      "تبلیغات تیک‌تاک",
      "کمپین‌های B2B لینکدین",
      "همکاری با اینفلوئنسرها",
      "تولید کریتیو (عکس/ویدیو)",
      "هدف‌گیری مخاطب",
      "مدیریت کامیونیتی",
      "یکپارچه‌سازی Social Commerce",
    ],
  },
  campAmz: { de: "Amazon Advertising", fa: "تبلیغات آمازون" },
  campAmzDesc: {
    de: "Gezielte Amazon-Werbung für maximale Produkt-Sichtbarkeit und Verkäufe.",
    fa: "تبلیغات هدفمند آمازون برای حداکثر دیده‌شدن محصول و فروش.",
  },
  campAmzItems: {
    de: [
      "Sponsored Products Kampagnen",
      "Sponsored Brands Kampagnen",
      "Sponsored Display Ads",
      "Amazon DSP (Demand-Side Platform)",
      "ACoS/TACoS Optimierung",
      "Keyword-Harvesting",
      "Negative Keyword Management",
      "Kampagnen-Skalierung",
    ],
    fa: [
      "کمپین‌های Sponsored Products",
      "کمپین‌های Sponsored Brands",
      "Sponsored Display Ads",
      "Amazon DSP",
      "بهینه‌سازی ACoS/TACoS",
      "Keyword Harvesting",
      "مدیریت Negative Keywords",
      "مقیاس‌پذیری کمپین‌ها",
    ],
  },
  campNote: {
    de: "Werbebudget (Ad Spend) wird separat berechnet — volle Transparenz bei allen Ausgaben.",
    fa: "بودجه تبلیغاتی (Ad Spend) جداگانه محاسبه می‌شود — شفافیت کامل در تمام هزینه‌ها.",
  },

  contentLabel: { de: "Content", fa: "محتوا" },
  contentTitle: {
    de: "Professionelle Content-Erstellung",
    fa: "تولید محتوای حرفه‌ای",
  },
  contentSub: {
    de: "Hochwertige Inhalte, die Ihre Marke stärken und organischen Traffic generieren.",
    fa: "محتوای باکیفیت که برند شما را تقویت کرده و ترافیک ارگانیک ایجاد می‌کند.",
  },
  contentCards: {
    de: [
      {
        title: "Blog-Beiträge",
        desc: "Bis zu 12 SEO-optimierte Artikel pro Monat",
      },
      {
        title: "Banner Design",
        desc: "Professionelle Produkt- und Lifestyle-Fotos",
      },
      {
        title: "Video-Content",
        desc: "Social Media Reels, Ads & Produktvideos",
      },
      {
        title: "Grafik-Design",
        desc: "Infografiken, Banner & Social Media Assets",
      },
    ],
    fa: [
      { title: "مقالات وبلاگ", desc: "تا ۱۲ مقاله بهینه‌شده سئو در ماه" },
      { title: "طراحی بنر", desc: "عکس‌های حرفه‌ای محصول و لایف‌استایل" },
      {
        title: "محتوای ویدیویی",
        desc: "ریلز شبکه‌های اجتماعی، تبلیغات و ویدیوی محصول",
      },
      {
        title: "طراحی گرافیک",
        desc: "اینفوگرافیک، بنر و اَسِت‌های شبکه‌های اجتماعی",
      },
    ],
  },

  priceLabel: { de: "Investition", fa: "سرمایه‌گذاری" },
  priceTitle: { de: "Preisübersicht", fa: "لیست قیمت‌ها" },
  priceSub: {
    de: "Transparente Preise mit einmaligen Setup-Kosten und monatlicher Betreuung.",
    fa: "قیمت‌های شفاف با هزینه راه‌اندازی یکباره و پشتیبانی ماهانه.",
  },
  priceSetupTitle: {
    de: "Einmalige Einrichtung & Infrastruktur",
    fa: "راه‌اندازی یکباره و زیرساخت",
  },
  priceMonthTitle: {
    de: "Monatliche Betreuung & Wartung",
    fa: "پشتیبانی و نگهداری ماهانه",
  },
  priceSetup: { de: "Einrichtung", fa: "راه‌اندازی" },
  priceOnce: { de: "einmalig", fa: "یکباره" },
  priceMonth: { de: "pro Monat", fa: "ماهانه" },
  priceMonthly: { de: "Monatlich", fa: "ماهانه" },
  pricePop: { de: "BELIEBT", fa: "محبوب" },
  priceBase: { de: "Basis", fa: "پایه" },
  pricePro: { de: "Professional", fa: "حرفه‌ای" },
  pricePrem: { de: "Premium", fa: "پریمیوم" },

  setupBaseWeb: {
    de: [
      "Basic Website (bis 8 Seiten)",
      "Responsives Design",
      "CMS-Setup",
      "SSL & Hosting-Konfiguration",
    ],
    fa: [
      "وب‌سایت پایه (تا ۸ صفحه)",
      "طراحی واکنش‌گرا",
      "راه‌اندازی CMS",
      "SSL و پیکربندی هاست",
    ],
  },
  setupBaseSeo: {
    de: [
      "Technisches SEO Audit",
      "Grundlegende On-Page Optimierung",
      "Google Search Console Setup",
      "Analytics-Einrichtung",
    ],
    fa: [
      "آدیت سئوی تکنیکال",
      "بهینه‌سازی پایه درون‌صفحه‌ای",
      "راه‌اندازی Google Search Console",
      "راه‌اندازی آنالیتیکس",
    ],
  },
  setupBaseAmz: {
    de: [
      "Seller-Account Optimierung",
      "Basis-Listing-Erstellung (bis 10 Produkte)",
      "Keyword-Recherche",
    ],
    fa: [
      "بهینه‌سازی اکانت فروشنده",
      "ایجاد لیستینگ پایه (تا ۱۰ محصول)",
      "تحقیق کلمات کلیدی",
    ],
  },
  setupProWeb: {
    de: [
      "Premium Website (bis 20 Seiten)",
      "Online-Shop-Integration",
      "Blog & Content Hub",
      "Mehrsprachig (DE/EN)",
      "Zahlungsgateway",
      "Newsletter-System",
    ],
    fa: [
      "وب‌سایت پریمیوم (تا ۲۰ صفحه)",
      "یکپارچه‌سازی فروشگاه آنلاین",
      "وبلاگ و مرکز محتوا",
      "چندزبانه (DE/EN)",
      "درگاه پرداخت",
      "سیستم خبرنامه",
    ],
  },
  setupProSeo: {
    de: [
      "Umfassendes SEO-Setup",
      "AEO-Grundstruktur",
      "Schema.org Integration",
      "Speed-Optimierung",
      "Tracking & Conversion Setup",
    ],
    fa: [
      "راه‌اندازی جامع سئو",
      "ساختار پایه AEO",
      "یکپارچه‌سازی Schema.org",
      "بهینه‌سازی سرعت",
      "راه‌اندازی ردیابی و تبدیل",
    ],
  },
  setupProAmz: {
    de: [
      "Vollständige Listing-Optimierung (bis 30 Produkte)",
      "A+ Content Erstellung",
      "PPC-Kampagnen-Setup",
      "Brand Registry Unterstützung",
      "Banner Design-Konzept",
    ],
    fa: [
      "بهینه‌سازی کامل لیستینگ (تا ۳۰ محصول)",
      "ایجاد محتوای A+",
      "راه‌اندازی کمپین‌های PPC",
      "پشتیبانی Brand Registry",
      "مفهوم طراحی بنر",
    ],
  },
  setupProCamp: {
    de: [
      "Google Ads Account-Setup",
      "Social Media Werbekonten",
      "Tracking-Pixel Installation",
      "Zielgruppen-Definition",
    ],
    fa: [
      "راه‌اندازی اکانت Google Ads",
      "اکانت‌های تبلیغاتی شبکه‌های اجتماعی",
      "نصب پیکسل ردیابی",
      "تعریف مخاطبان هدف",
    ],
  },
  setupPremWeb: {
    de: [
      "Narrative 3D-Website",
      "Interaktive Produktwelt",
      "Scroll-Storytelling",
      "WebGL / Three.js",
      "AR-Integration",
      "Sound-Design",
      "Personalisierte Journeys",
      "Mehrsprachig (DE/EN/FA)",
    ],
    fa: [
      "وب‌سایت سه‌بعدی روایتی",
      "دنیای تعاملی محصول",
      "داستان‌گویی با اسکرول",
      "WebGL / Three.js",
      "یکپارچه‌سازی AR",
      "طراحی صدا",
      "سفرهای شخصی‌سازی",
      "چندزبانه (DE/EN/FA)",
    ],
  },
  setupPremSeo: {
    de: [
      "Enterprise SEO-Setup",
      "Vollständige AEO-Optimierung",
      "AI-Suchmaschinen-Strategie",
      "Internationales SEO",
    ],
    fa: [
      "راه‌اندازی سئو سازمانی",
      "بهینه‌سازی کامل AEO",
      "استراتژی موتورهای جستجوی AI",
      "سئو بین‌المللی",
    ],
  },
  setupPremAmz: {
    de: [
      "Premium Listing (unbegrenzt)",
      "A+ Premium Content",
      "Amazon Brand Store",
      "DSP-Kampagnen Setup",
      "Produktvideo-Produktion",
    ],
    fa: [
      "لیستینگ پریمیوم (نامحدود)",
      "محتوای A+ پریمیوم",
      "Amazon Brand Store",
      "راه‌اندازی کمپین DSP",
      "تولید ویدیوی محصول",
    ],
  },
  setupPremCamp: {
    de: [
      "Full-Stack Kampagnen-Setup",
      "Omnichannel-Strategie",
      "Influencer-Netzwerk",
      "Marketing-Automation",
    ],
    fa: [
      "راه‌اندازی کمپین تمام‌عیار",
      "استراتژی Omnichannel",
      "شبکه اینفلوئنسرها",
      "اتوماسیون مارکتینگ",
    ],
  },

  monthBaseItems: {
    de: [
      "4 SEO-optimierte Blog-Beiträge",
      "Basis-SEO Monitoring & Optimierung",
      "5 Fokus-Keywords Tracking",
      "Monatlicher SEO-Report",
      "Website-Wartung & Updates",
      "Amazon Listing-Pflege",
      "Google Ads Basis-Management",
      "E-Mail-Support",
      "Monatliches Strategy-Call (30 Min.)",
    ],
    fa: [
      "۴ مقاله وبلاگ بهینه‌شده سئو",
      "مانیتورینگ و بهینه‌سازی پایه سئو",
      "ردیابی ۵ کلمه کلیدی تمرکزی",
      "گزارش ماهانه سئو",
      "نگهداری و به‌روزرسانی وب‌سایت",
      "نگهداری لیستینگ آمازون",
      "مدیریت پایه Google Ads",
      "پشتیبانی ایمیلی",
      "تماس استراتژی ماهانه (۳۰ دقیقه)",
    ],
  },
  monthProItems: {
    de: [
      "8 SEO-optimierte Blog-Beiträge",
      "Umfassende SEO & AEO Optimierung",
      "15 Fokus-Keywords Tracking",
      "Wöchentliche Performance-Updates",
      "Website-Wartung & Feature-Updates",
      "Amazon SEO & PPC Management",
      "A+ Content Updates & Optimierung",
      "Google Ads & Social Media Ads Management",
      "Conversion-Rate-Optimierung",
      "E-Mail Support",
    ],
    fa: [
      "۸ مقاله وبلاگ بهینه‌شده سئو",
      "بهینه‌سازی جامع سئو و AEO",
      "ردیابی ۱۵ کلمه کلیدی تمرکزی",
      "به‌روزرسانی هفتگی عملکرد",
      "نگهداری و بهینه‌سازی وب‌سایت",
      "مدیریت سئو و PPC آمازون",
      "به‌روزرسانی و بهینه‌سازی A+ Content",
      "مدیریت Google Ads و تبلیغات شبکه‌های اجتماعی",
      "بهینه‌سازی نرخ تبدیل",
      "پشتیبانی ایمیل",
    ],
  },
  monthPremItems: {
    de: [
      "12 SEO-optimierte Blog-Beiträge",
      "Enterprise SEO & vollständige AEO",
      "30+ Fokus-Keywords Tracking",
      "AI-Suchmaschinen Monitoring",
      "Tägliche Performance-Überwachung",
      "Website-Wartung & Weiterentwicklung",
      "Amazon Full-Service Management",
      "Amazon DSP & Advanced PPC",
      "Google Ads Premium Management",
      "Social Media Ads (alle Plattformen)",
      "Social Content (16 Posts/Monat)",
      "Video-Content-Produktion (2/Monat)",
      "Influencer-Kampagnen Koordination",
      "Conversion & UX-Optimierung",
      "Dedizierter Account-Manager",
      "Wöchentliche Strategy-Calls",
      "Prioritäts-Support 24/7",
    ],
    fa: [
      "۱۲ مقاله وبلاگ بهینه‌شده سئو",
      "سئو سازمانی و AEO کامل",
      "ردیابی ۳۰+ کلمه کلیدی تمرکزی",
      "مانیتورینگ موتورهای جستجوی AI",
      "نظارت روزانه عملکرد",
      "نگهداری و توسعه وب‌سایت",
      "مدیریت تمام‌خدمات آمازون",
      "Amazon DSP و PPC پیشرفته",
      "مدیریت پریمیوم Google Ads",
      "تبلیغات شبکه‌های اجتماعی (تمام پلتفرم‌ها)",
      "محتوای اجتماعی (۱۶ پست/ماه)",
      "تولید محتوای ویدیویی (۲/ماه)",
      "هماهنگی کمپین‌های اینفلوئنسر",
      "بهینه‌سازی تبدیل و UX",
      "مدیر اکانت اختصاصی",
      "تماس‌های استراتژی هفتگی",
      "پشتیبانی اولویت‌دار ۲۴/۷",
    ],
  },

  priceNotes: {
    de: [
      "Alle Preise verstehen sich zzgl. MwSt.",
      "Werbebudget (Ad Spend) wird separat berechnet.",
      "Mindestlaufzeit der monatlichen Pakete: 6 Monate.",
      "Individuelle Pakete auf Anfrage möglich.",
      "10% Rabatt bei jährlicher Vorauszahlung.",
      "Hosting-Kosten sind in der monatlichen Gebühr enthalten.",
    ],
    fa: [
      "همه قیمت‌ها بدون مالیات بر ارزش افزوده هستند.",
      "بودجه تبلیغاتی (Ad Spend) جداگانه محاسبه می‌شود.",
      "حداقل مدت قراردادهای ماهانه: ۶ ماه.",
      "پکیج‌های سفارشی بر اساس درخواست.",
      "۱۰٪ تخفیف برای پرداخت سالانه.",
      "هزینه هاست در هزینه ماهانه شامل شده.",
    ],
  },
  priceNotesTitle: {
    de: "Hinweise zur Preisgestaltung",
    fa: "نکات قیمت‌گذاری",
  },
  catWebsite: { de: "Website", fa: "وب‌سایت" },
  catSeoTech: { de: "SEO & Technik", fa: "سئو و فناوری" },
  catSeoAeoTech: { de: "SEO, AEO & Technik", fa: "سئو، AEO و فناوری" },
  catAmazon: { de: "Amazon", fa: "آمازون" },
  catAmzEcom: { de: "Amazon & E-Commerce", fa: "آمازون و ایکامرس" },
  catCamp: { de: "Kampagnen", fa: "کمپین‌ها" },

  whyLabel: { de: "Vorteile", fa: "مزایا" },
  whyTitle: { de: "Warum emoviral?", fa: "چرا emoviral؟" },
  whySub: {
    de: "Was uns von anderen Agenturen unterscheidet.",
    fa: "آنچه ما را از سایر آژانس‌ها متمایز می‌کند.",
  },
  whyCards: {
    de: [
      {
        title: "Branchenfokus",
        desc: "Spezialisiert auf Premium-Marken und Getränkeindustrie im deutschen Markt.",
      },
      {
        title: "ROI-Fokus",
        desc: "Jede Maßnahme wird an messbaren Ergebnissen und Return-on-Investment ausgerichtet.",
      },
      {
        title: "Full-Service",
        desc: "Alles aus einer Hand — keine Fragmentierung zwischen verschiedenen Dienstleistern.",
      },
      {
        title: "AI-First Ansatz",
        desc: "Modernste KI-Tools und Technologien für maximale Effizienz und Innovation.",
      },
      {
        title: "Transparenz",
        desc: "Klare Kommunikation, detaillierte Reports und vollständige Kostentransparenz.",
      },
      {
        title: "Kulturelle Brücke",
        desc: "Verständnis für iranische Markenidentität im europäischen Marktumfeld.",
      },
    ],
    fa: [
      {
        title: "تمرکز صنعتی",
        desc: "تخصص در برندهای پریمیوم و صنعت نوشیدنی در بازار آلمان.",
      },
      {
        title: "تمرکز بر ROI",
        desc: "هر اقدام بر اساس نتایج قابل اندازه‌گیری و بازگشت سرمایه تنظیم می‌شود.",
      },
      {
        title: "خدمات جامع",
        desc: "همه چیز از یک منبع — بدون تقسیم کار بین ارائه‌دهندگان مختلف.",
      },
      {
        title: "رویکرد AI-First",
        desc: "پیشرفته‌ترین ابزارها و فناوری‌های هوش مصنوعی برای حداکثر کارایی.",
      },
      {
        title: "شفافیت",
        desc: "ارتباط شفاف، گزارش‌های دقیق و شفافیت کامل در هزینه‌ها.",
      },
      { title: "پل فرهنگی", desc: "درک هویت برند ایرانی در محیط بازار اروپا." },
    ],
  },

  roadLabel: { de: "Zeitplan", fa: "برنامه زمانی" },
  roadTitle: { de: "Zusammenarbeit-Roadmap", fa: "نقشه راه همکاری" },
  roadSub: {
    de: "Strukturierter Ablauf von der Strategie bis zur nachhaltigen Skalierung.",
    fa: "فرایند ساختاریافته از استراتژی تا مقیاس‌پذیری پایدار.",
  },
  roadPhases: {
    de: [
      {
        phase: "Phase 1",
        weeks: "Woche 1–2",
        title: "Audit & Strategieentwicklung",
        items: [
          "Marktanalyse & Wettbewerber-Audit",
          "Keyword-Strategie & Zielgruppen-Definition",
          "Technischer Website-Audit",
          "Amazon Account-Analyse",
          "Detaillierter Maßnahmenplan",
        ],
      },
      {
        phase: "Phase 2",
        weeks: "Woche 3–6",
        title: "Infrastruktur & Setup",
        items: [
          "Website-Entwicklung & Launch",
          "SEO & AEO technische Implementierung",
          "Amazon Listing-Optimierung",
          "Kampagnen-Konten einrichten",
          "Tracking & Analytics Setup",
        ],
      },
      {
        phase: "Phase 3",
        weeks: "Woche 7–10",
        title: "Content & Kampagnen-Start",
        items: [
          "Content-Produktion starten",
          "Blog-Beiträge veröffentlichen",
          "Google Ads Kampagnen launchen",
          "Social Media Ads starten",
          "Amazon PPC aktivieren",
        ],
      },
      {
        phase: "Phase 4",
        weeks: "Ab Woche 11",
        title: "Skalierung & Optimierung",
        items: [
          "Laufende SEO & AEO Optimierung",
          "Kampagnen-Skalierung",
          "A/B-Testing & Conversion-Optimierung",
          "Monatliches Reporting & Strategy-Calls",
          "Kontinuierliches Wachstum",
        ],
      },
    ],
    fa: [
      {
        phase: "فاز ۱",
        weeks: "هفته ۱–۲",
        title: "آدیت و توسعه استراتژی",
        items: [
          "تحلیل بازار و آدیت رقبا",
          "استراتژی کلمات کلیدی و تعریف مخاطبان",
          "آدیت تکنیکال وب‌سایت",
          "تحلیل اکانت آمازون",
          "برنامه اقدام دقیق",
        ],
      },
      {
        phase: "فاز ۲",
        weeks: "هفته ۳–۶",
        title: "زیرساخت و راه‌اندازی",
        items: [
          "توسعه و لانچ وب‌سایت",
          "پیاده‌سازی فنی سئو و AEO",
          "بهینه‌سازی لیستینگ آمازون",
          "راه‌اندازی اکانت‌های کمپین",
          "راه‌اندازی ردیابی و آنالیتیکس",
        ],
      },
      {
        phase: "فاز ۳",
        weeks: "هفته ۷–۱۰",
        title: "محتوا و شروع کمپین‌ها",
        items: [
          "شروع تولید محتوا",
          "انتشار مقالات وبلاگ",
          "لانچ کمپین‌های Google Ads",
          "شروع تبلیغات شبکه‌های اجتماعی",
          "فعال‌سازی Amazon PPC",
        ],
      },
      {
        phase: "فاز ۴",
        weeks: "از هفته ۱۱",
        title: "مقیاس‌پذیری و بهینه‌سازی",
        items: [
          "بهینه‌سازی مداوم سئو و AEO",
          "مقیاس‌پذیری کمپین‌ها",
          "A/B Testing و بهینه‌سازی تبدیل",
          "گزارش‌دهی ماهانه و تماس‌های استراتژی",
          "رشد مداوم",
        ],
      },
    ],
  },

  ctaLabel: { de: "Nächste Schritte", fa: "مراحل بعدی" },
  ctaTitle1: { de: "Bereit für den nächsten", fa: "آماده‌اید برای" },
  ctaTitle2: { de: "Wachstumsschritt?", fa: "گام بعدی رشد؟" },
  ctaDesc: {
    de: "Lassen Sie uns in einem unverbindlichen Gespräch besprechen, wie wir Kashmar zur führenden iranischen Spirituosen-Marke in Deutschland machen können.",
    fa: "بیایید در یک جلسه بدون تعهد بررسی کنیم که چگونه می‌توانیم کاشمر را به برند پیشرو مشروبات ایرانی در آلمان تبدیل کنیم.",
  },
  ctaBtn1: { de: "Kontakt aufnehmen", fa: "تماس با ما" },
  ctaBtn2: { de: "WhatsApp", fa: "واتس‌اپ" },
  ctaSteps: {
    de: ["Erstgespräch", "Strategievorschlag", "Umsetzung"],
    fa: ["جلسه اول", "پیشنهاد استراتژی", "اجرا"],
  },

  footerTag: {
    de: "Digitale Exzellenz für anspruchsvolle Marken",
    fa: "تعالی دیجیتال برای برندهای سطح بالا",
  },
  footerConf: {
    de: "Vertrauliches Dokument — erstellt für Kashmar",
    fa: "سند محرمانه — تهیه شده برای کاشمر",
  },
  footerRights: { de: "Alle Rechte vorbehalten.", fa: "تمامی حقوق محفوظ است." },
};

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

import { cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

function SectionTitle({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="text-center mb-16 md:mb-20">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-amber-400 font-medium mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const step = end / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-amber-400">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm mt-2">{label}</div>
    </div>
  );
}

function L(obj: Record<Lang, string>, lang: Lang) {
  return obj[lang];
}

function PackageVideo({ src, lang }: { src: string; lang: Lang }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-black mb-6">
      <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gray-400 ">
          <Video className="h-4 w-4" />
          <span>{L(t.webVideoLabel, lang)}</span>
        </div>
      </div>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-[16/10] w-full bg-black object-cover "
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════ */

import Head from "next/head";

export default function KashmarPresentation() {
  const [lang, setLang] = useState<Lang>("de");
  const isRtl = lang === "fa";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const pageFontClass = isRtl
    ? `${vazirmatn.className} persian-text`
    : "font-sans";

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const servIcons = [
    <Search key="s" />,
    <Monitor key="m" />,
    <Store key="st" />,
    <Megaphone key="mg" />,
    <FileText key="ft" />,
    <BarChart3 key="b" />,
  ];
  const whyIcons = [
    <Target key="t" />,
    <BarChart3 key="b" />,
    <Layers key="l" />,
    <Bot key="bo" />,
    <MessageSquare key="ms" />,
    <Globe key="g" />,
  ];
  const contentIcons = [
    <FileText className="w-6 h-6" key="f" />,
    <Camera className="w-6 h-6" key="c" />,
    <Video className="w-6 h-6" key="v" />,
    <Palette className="w-6 h-6" key="p" />,
  ];
  const contentColors = ["amber", "blue", "pink", "emerald"];
  const colorMap: Record<string, string> = {
    amber: "bg-amber-500/10 text-amber-400",
    blue: "bg-blue-500/10 text-blue-400",
    pink: "bg-pink-500/10 text-pink-400",
    emerald: "bg-emerald-500/10 text-emerald-400",
  };
  const amzIcons = [
    <Search className="w-4 h-4" key="s" />,
    <Megaphone className="w-4 h-4" key="m" />,
    <PenTool className="w-4 h-4" key="p" />,
    <BarChart3 className="w-4 h-4" key="b" />,
  ];
  const shopIcons = [
    <Search className="w-4 h-4" key="s" />,
    <MousePointerClick className="w-4 h-4" key="m" />,
    <CreditCard className="w-4 h-4" key="c" />,
    <LineChart className="w-4 h-4" key="l" />,
  ];

  /* ─── Checklist item helper ─── */
  const CI = ({
    children,
    color = "amber",
  }: {
    children: React.ReactNode;
    color?: string;
  }) => {
    const cls: Record<string, string> = {
      amber: "text-amber-400",
      amber70: "text-amber-400/70",
      gray: "text-gray-500",
      purple: "text-purple-400",
      blue: "text-blue-400",
      pink: "text-pink-400",
      orange: "text-orange-400",
    };
    return (
      <li className="flex items-start gap-2 text-gray-300 text-sm">
        <CheckCircle2
          className={`w-3.5 h-3.5 ${cls[color] || cls.amber} mt-0.5 shrink-0`}
        />
        {children}
      </li>
    );
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <div
        dir={isRtl ? "rtl" : "ltr"}
        className={`bg-[#07070D] text-white min-h-screen overflow-x-hidden selection:bg-amber-400/30 ${pageFontClass}`}
      >
        {/* ─── LANGUAGE TOGGLE ─── */}
        <div className="fixed top-6 right-6 z-50 flex gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full p-1">
          <button
            onClick={() => setLang("de")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === "de" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
          >
            DE
          </button>
          <button
            onClick={() => setLang("fa")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${lang === "fa" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
          >
            فا
          </button>
        </div>

        {/* ═══════════ HERO ═══════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <video
              src="/videos/mobilehero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-30 md:hidden"
            />
            <video
              src="/videos/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 hidden h-full w-full object-cover opacity-30 md:block"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e05]/70 via-[#07070D]/55 to-[#0c0820]/75" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[100px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 border border-amber-500/30 rounded-full px-6 py-2 mb-8 bg-amber-500/5 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm tracking-wide">
                  {L(t.heroBadge, lang)}
                </span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Kashmar
              </span>
              <br />
              <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                {L(t.heroSub, lang)}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {L(t.heroDesc, lang)}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#leistungen"
                className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all"
              >
                {L(t.heroBtn1, lang)}
                <Arrow className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#preise"
                className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all"
              >
                {L(t.heroBtn2, lang)}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-16 flex items-center justify-center gap-2 text-gray-500 text-sm"
            >
              <span>{L(t.heroBy, lang)}</span>
              <span className="text-amber-400 font-bold text-lg tracking-wider">
                emoviral
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <ChevronDown className="w-6 h-6 text-amber-400/60" />
          </motion.div>
        </section>

        {/* ═══════════ ABOUT ═══════════ */}
        <section className="py-24 md:py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              label={L(t.aboutLabel, lang)}
              title={L(t.aboutTitle, lang)}
              subtitle={L(t.aboutSub, lang)}
            />
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                <Globe className="w-6 h-6" key="g" />,
                <TrendingUp className="w-6 h-6" key="t" />,
                <Shield className="w-6 h-6" key="s" />,
              ].map((icon, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-8 hover:border-amber-500/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t.aboutCards[lang][i].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t.aboutCards[lang][i].desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-12">
              <StatCounter
                value={150}
                suffix="+"
                label={t.statLabels[lang][0]}
              />
              <StatCounter
                value={98}
                suffix="%"
                label={t.statLabels[lang][1]}
              />
              <StatCounter
                value={45}
                suffix="+"
                label={t.statLabels[lang][2]}
              />
              <StatCounter
                value={12}
                suffix="+"
                label={t.statLabels[lang][3]}
              />
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section id="leistungen" className="py-24 md:py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionTitle
              label={L(t.servLabel, lang)}
              title={L(t.servTitle, lang)}
              subtitle={L(t.servSub, lang)}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.servCards[lang].map((card, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  className="group relative overflow-hidden bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-7 hover:border-amber-500/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-all" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 [&>svg]:w-5 [&>svg]:h-5">
                      {servIcons[i]}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SEO & AEO ═══════════ */}
        <section className="py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              label={L(t.seoLabel, lang)}
              title={L(t.seoTitle, lang)}
              subtitle={L(t.seoSub, lang)}
            />
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#12111a] to-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">SEO</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {L(t.seoDesc, lang)}
                </p>
                <ul className="space-y-3">
                  {t.seoItems[lang].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-gradient-to-br from-[#12111a] to-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AEO</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {L(t.aeoDesc, lang)}
                </p>
                <ul className="space-y-3">
                  {t.aeoItems[lang].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-xl font-bold text-white mb-8 text-center">
                {L(t.seoProcessTitle, lang)}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.seoProcess[lang].map((p, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-amber-400/30 mb-3">
                      {p.step}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{p.title}</h4>
                    <p className="text-gray-400 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WEBSITE PACKAGES ═══════════ */}
        <section className="py-24 md:py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionTitle
              label={L(t.webLabel, lang)}
              title={L(t.webTitle, lang)}
              subtitle={L(t.webSub, lang)}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Basic */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-5 h-5 text-gray-400" />
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      {L(t.webPaket, lang)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {L(t.webBasicDesc, lang)}
                  </p>
                  <div className="text-3xl font-bold text-white mb-1">
                    ab 5000 <span className="text-lg text-gray-400">€</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-8">
                    {L(t.webOnce, lang)}
                  </p>
                  <PackageVideo src="/videos/Basic.mp4" lang={lang} />
                  <ul className="space-y-3">
                    {t.webBasicItems[lang].map((x, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-gray-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              {/* Premium */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-[#0d0d15] border border-amber-500/30 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                <div
                  className={`absolute top-4 ${isRtl ? "left-4" : "right-4"}`}
                >
                  <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {L(t.webRecommended, lang)}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    <span className="text-xs uppercase tracking-widest text-amber-400/70">
                      {L(t.webPaket, lang)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Premium
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {L(t.webPremDesc, lang)}
                  </p>
                  <div className="text-3xl font-bold text-amber-400 mb-1">
                    ab 10.000{" "}
                    <span className="text-lg text-amber-400/60">€</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-8">
                    {L(t.webOnce, lang)}
                  </p>
                  <PackageVideo src="/videos/Premium.mp4" lang={lang} />
                  <ul className="space-y-3">
                    {t.webPremItems[lang].map((x, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-gray-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              {/* Narrative */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="bg-gradient-to-b from-[#14101e] to-[#0d0d15] border border-purple-500/20 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-amber-400" />
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-xs uppercase tracking-widest text-purple-400/70">
                      {L(t.webPaket, lang)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Narrative
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {L(t.webNarrDesc, lang)}
                  </p>
                  <div className="text-3xl font-bold text-purple-300 mb-1">
                    ab 15.000{" "}
                    <span className="text-lg text-purple-300/60">€</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-8">
                    {L(t.webOnce, lang)}
                  </p>
                  <PackageVideo src="/videos/Narrative.mp4" lang={lang} />
                  <ul className="space-y-3">
                    {t.webNarrItems[lang].map((x, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-gray-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ AMAZON & E-COMMERCE ═══════════ */}
        <section className="py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              label={L(t.amzLabel, lang)}
              title={L(t.amzTitle, lang)}
              subtitle={L(t.amzSub, lang)}
            />
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {L(t.amzOptTitle, lang)}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.amzCats[lang].map((cat, i) => (
                    <div key={i} className="bg-white/[0.02] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-orange-400 mb-3">
                        {amzIcons[i]}
                        <span className="text-sm font-semibold">
                          {cat.title}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {cat.items.map((x, j) => (
                          <li
                            key={j}
                            className="text-gray-400 text-xs flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-orange-400/50" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {L(t.shopOptTitle, lang)}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.shopCats[lang].map((cat, i) => (
                    <div key={i} className="bg-white/[0.02] rounded-xl p-4">
                      <div className="flex items-center gap-2 text-emerald-400 mb-3">
                        {shopIcons[i]}
                        <span className="text-sm font-semibold">
                          {cat.title}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {cat.items.map((x, j) => (
                          <li
                            key={j}
                            className="text-gray-400 text-xs flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════ CAMPAIGNS ═══════════ */}
        <section className="py-24 md:py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <SectionTitle
              label={L(t.campLabel, lang)}
              title={L(t.campTitle, lang)}
              subtitle={L(t.campSub, lang)}
            />
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 hover:border-blue-500/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {L(t.campGoogle, lang)}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {L(t.campGoogleDesc, lang)}
                </p>
                <ul className="space-y-2.5">
                  {t.campGoogleItems[lang].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 hover:border-pink-500/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {L(t.campSocial, lang)}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {L(t.campSocialDesc, lang)}
                </p>
                <ul className="space-y-2.5">
                  {t.campSocialItems[lang].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-8 hover:border-orange-500/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <ShoppingCart className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {L(t.campAmz, lang)}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {L(t.campAmzDesc, lang)}
                </p>
                <ul className="space-y-2.5">
                  {t.campAmzItems[lang].map((x, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-3">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-gray-400 text-sm">
                  {L(t.campNote, lang)}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ CONTENT ═══════════ */}
        <section className="py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              label={L(t.contentLabel, lang)}
              title={L(t.contentTitle, lang)}
              subtitle={L(t.contentSub, lang)}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.contentCards[lang].map((card, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-white/[0.12] transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${colorMap[contentColors[i]]} flex items-center justify-center mx-auto mb-4`}
                  >
                    {contentIcons[i]}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <section id="preise" className="py-24 md:py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionTitle
              label={L(t.priceLabel, lang)}
              title={L(t.priceTitle, lang)}
              subtitle={L(t.priceSub, lang)}
            />

            {/* Monthly header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400" />
                {L(t.priceMonthTitle, lang)}
              </h3>
            </motion.div>

            {/* Monthly cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="bg-[#0d0d15] border border-white/[0.06] rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                    {L(t.priceBase, lang)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                    {L(t.priceMonthly, lang)}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    1.490<span className="text-lg text-gray-400"> €</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8">
                    {L(t.priceMonth, lang)}
                  </p>
                  <ul className="space-y-2.5">
                    {t.monthBaseItems[lang].map((x, i) => (
                      <CI key={i} color="gray">
                        {x}
                      </CI>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-[#0d0d15] border border-amber-500/30 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                <div
                  className={`absolute top-4 ${isRtl ? "left-4" : "right-4"}`}
                >
                  <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {L(t.pricePop, lang)}
                  </span>
                </div>
                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-amber-400/70 font-medium">
                    {L(t.pricePro, lang)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                    {L(t.priceMonthly, lang)}
                  </h3>
                  <div className="text-4xl font-bold text-amber-400 mb-1">
                    2000<span className="text-lg text-amber-400/60"> €</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8">
                    {L(t.priceMonth, lang)}
                  </p>
                  <ul className="space-y-2.5">
                    {t.monthProItems[lang].map((x, i) => (
                      <CI key={i} color="amber">
                        {x}
                      </CI>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="bg-gradient-to-b from-[#14101e] to-[#0d0d15] border border-purple-500/20 rounded-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-amber-400" />
                <div className="p-8">
                  <span className="text-xs uppercase tracking-widest text-purple-400/70 font-medium">
                    {L(t.pricePrem, lang)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                    {L(t.priceMonthly, lang)}
                  </h3>
                  <div className="text-4xl font-bold text-purple-300 mb-1">
                    4.990<span className="text-lg text-purple-300/60"> €</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-8">
                    {L(t.priceMonth, lang)}
                  </p>
                  <ul className="space-y-2.5">
                    {t.monthPremItems[lang].map((x, i) => (
                      <CI key={i} color="purple">
                        {x}
                      </CI>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Notes */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8"
            >
              <h4 className="text-white font-semibold mb-4">
                {L(t.priceNotesTitle, lang)}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.priceNotes[lang].map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-400 text-sm"
                  >
                    <span className="text-amber-400 mt-0.5">•</span>
                    {n}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ WHY EMOVIRAL ═══════════ */}
        <section className="py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              label={L(t.whyLabel, lang)}
              title={L(t.whyTitle, lang)}
              subtitle={L(t.whySub, lang)}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.whyCards[lang].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-amber-500/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    {whyIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ROADMAP ═══════════ */}
        <section className="py-24 md:py-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10">
            <SectionTitle
              label={L(t.roadLabel, lang)}
              title={L(t.roadTitle, lang)}
              subtitle={L(t.roadSub, lang)}
            />
            <div className="space-y-6">
              {t.roadPhases[lang].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      {item.phase.split(" ")[1]}
                    </div>
                    {i < 3 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-amber-500/30 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 flex-1 mb-2">
                    <span className="text-amber-400 text-xs font-medium">
                      {item.weeks}
                    </span>
                    <h4 className="text-white font-bold text-lg mt-1 mb-3">
                      {item.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {item.items.map((x, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <Arrow className="w-3 h-3 text-amber-400/50 mt-1 shrink-0" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-24 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-amber-500/10 via-[#0d0d15] to-purple-500/10 border border-amber-500/20 rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-amber-400 font-medium mb-4">
                  {L(t.ctaLabel, lang)}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {L(t.ctaTitle1, lang)}
                  <br />
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    {L(t.ctaTitle2, lang)}
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  {L(t.ctaDesc, lang)}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:Swallper@gmail.com"
                    className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all"
                  >
                    <MailCheck className="w-5 h-5" />
                    {L(t.ctaBtn1, lang)}
                    <Arrow className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/905528375079"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all"
                  >
                    {L(t.ctaBtn2, lang)}
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
                  {t.ctaSteps[lang].map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-2 text-amber-400 font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-400 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="border-t border-white/[0.06] py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-amber-400 font-bold text-xl tracking-wider">
                emoviral
              </span>
              <p className="text-gray-500 text-sm mt-1">
                {L(t.footerTag, lang)}
              </p>
            </div>
            <div
              className={`text-gray-500 text-sm ${isRtl ? "text-center md:text-left" : "text-center md:text-right"}`}
            >
              <p>{L(t.footerConf, lang)}</p>
              <p className="mt-1">
                © {new Date().getFullYear()} emoviral.{" "}
                {L(t.footerRights, lang)}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
