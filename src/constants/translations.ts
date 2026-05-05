
export type Language = 
  | 'en' | 'hi' | 'hinglish' | 'ja' | 'es' | 'fr' | 'it' | 'ru' | 'zh' | 'ko' 
  | 'ta' | 'te' | 'gu' | 'ml' | 'ne' | 'mr' | 'kn' | 'mai';

export interface TranslationSchema {
  nav: {
    manage: string;
    vault: string;
    strategy: string;
    profile: string;
    logout: string;
    signIn: string;
    startFree: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    trustedBy: string;
  };
  features: {
    title: string;
    subtitle: string;
    autoReplyTitle: string;
    autoReplyDesc: string;
    strategyTitle: string;
    strategyDesc: string;
    googleTitle: string;
    googleDesc: string;
  };
  howItWorks: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  dashboard: {
    statusActive: string;
    deploymentTitle: string;
    deploymentDesc: string;
    integrityTest: string;
    integrityToast: string;
    manualTitle: string;
    manualLabel: string;
    ratingLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    executeCta: string;
    totalProcessed: string;
    awaitingInput: string;
    awaitingDesc: string;
    analyzing: string;
    sentimentLabel: string;
    suggestedReply: string;
    actionSteps: string;
    copyCta: string;
  };
  insights: {
    title: string;
    subtitle: string;
    batchTab: string;
    weeklyTab: string;
    monthlyTab: string;
    lockedTitle: string;
    lockedDesc: string;
    collectReviews: string;
    generating: string;
    blueprint: string;
    synthesis: string;
    findings: string;
    roadmap: string;
    performanceScore: string;
    outOf100: string;
    sentimentMood: string;
    gaps: string;
    actionPlan: string;
    generateFresh: string;
    noReport: string;
    noReportDesc: string;
    initializeSync: string;
  };
  footer: {
    tagline: string;
    platform: string;
    about: string;
    status: string;
    legal: string;
    privacy: string;
    terms: string;
    security: string;
    contact: string;
    rights: string;
    globalNode: string;
  };
  settings: {
    title: string;
    subtitle: string;
    bizName: string;
    bizCat: string;
    address: string;
    phone: string;
    website: string;
    updateCta: string;
    googleSync: string;
    verified: string;
    securityLevel: string;
    encrypted: string;
    zeroKnowledge: string;
  };
  setup: {
    title: string;
    desc: string;
    finish: string;
  };
  legal: {
    aboutTitle: string;
    aboutDesc: string;
    privacyTitle: string;
    privacyDesc: string;
    termsTitle: string;
    termsDesc: string;
  };
  categories: {
    gym: string;
    restaurant: string;
    salon: string;
    beauty: string;
    retail: string;
    cafe: string;
    hotel: string;
    medical: string;
    auto: string;
    edu: string;
    other: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: { manage: "Manage", vault: "Vault", strategy: "Strategy", profile: "Profile", logout: "Logout", signIn: "Sign In", startFree: "Start for FREE Now" },
    hero: { badge: "AI Reputation Protection", title: "Your Business, Your Pride.", subtitle: "Auto-reply to Google reviews. Turn negative feedback into positive insights and grow your business.", cta: "Start for FREE Now", trustedBy: "Trusted by 500+ Local Businesses" },
    features: { title: "Why Choose ReviewGuard?", subtitle: "Professional AI tools for shopkeepers in one place.", autoReplyTitle: "Auto-Reply 24/7", autoReplyDesc: "AI writes instant replies to every review. You get notified while AI handles it.", strategyTitle: "Strategy Hub", strategyDesc: "Analyze last 30 days. AI identifies what people are saying about your shop.", googleTitle: "Google Connected", googleDesc: "Link directly to your Google Business Profile. Auto-sync without any hassle." },
    howItWorks: { title: "Protect your Business in 3 Steps", step1Title: "Login & Setup", step1Desc: "Login with Google and provide your shop name.", step2Title: "Enable AI Automation", step2Desc: "Start AI Auto-Reply with one click. Every review is now our responsibility.", step3Title: "Grow your Sales", step3Desc: "Read monthly AI reports and turn weaknesses into power." },
    dashboard: { statusActive: "Automation Active", deploymentTitle: "AI Deployment Center", deploymentDesc: "Your digital representative is online. We protect your rating 24/7.", integrityTest: "Run System Integrity Test", integrityToast: "Manual override for stress testing AI nodes", manualTitle: "Manual Analysis", manualLabel: "Manual Sentiment Extraction", ratingLabel: "Sentiment Rating", inputLabel: "Raw Input", inputPlaceholder: "Paste customers words here...", executeCta: "Execute Synthesis", totalProcessed: "Total Reviews Processed", awaitingInput: "Awaiting Input", awaitingDesc: "Strategic response and analysis will appear here.", analyzing: "AI Strategy Consulting...", sentimentLabel: "Sentiment", suggestedReply: "Suggested Professional Reply", actionSteps: "IMMEDIATE ACTION STEPS", copyCta: "Copy Response" },
    settings: { title: "Identity Hub", subtitle: "Coordinate your shop appearance across the global grid.", bizName: "Business Name", bizCat: "Business Category", address: "Public Address", phone: "Support Phone", website: "Official Website", updateCta: "Save Profile Changes", googleSync: "Sync with GMB", verified: "Identity Verified", securityLevel: "Security Level", encrypted: "Encrypted Connection", zeroKnowledge: "Data managed via Zero-Knowledge architecture." },
    setup: { title: "Setup Your Shop", desc: "Tell us about your business to get tailored AI responses.", finish: "Finish Setup" },
    insights: {
      title: "Strategy Node",
      subtitle: "Cross-Batch Sentiment Intelligence",
      batchTab: "Batch-10",
      weeklyTab: "Weekly Delta",
      monthlyTab: "Monthly Delta",
      lockedTitle: "Batch Strategy Locked",
      lockedDesc: "Collect 10 critical data points to generate a trend analysis and tactical fix roadmap.",
      collectReviews: "CRITICAL REVIEWS",
      generating: "Synthesizing Macro Trends...",
      blueprint: "Strategy Blueprint",
      synthesis: "Post-Critical Synthesis",
      findings: "Macro Core Findings",
      roadmap: "Tactical Roadmap",
      performanceScore: "Performance Score",
      outOf100: "out of 100",
      sentimentMood: "Sentiment Mood",
      gaps: "Key Performance Gaps",
      actionPlan: "AI Action Plan",
      generateFresh: "Generate Fresh Analysis",
      noReport: "No report found",
      noReportDesc: "Generate your first AI-driven deep dive analysis.",
      initializeSync: "Initialize Sync"
    },
    footer: {
      tagline: "Empowering local enterprise through cutting-edge AI sentiment synthesis.",
      platform: "Platform",
      about: "About Us",
      status: "System Status",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms",
      security: "Security",
      contact: "Contact",
      rights: "© 2026 REVIEWGUARD AI • ALL RIGHTS RESERVED",
      globalNode: "Global Node: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "The Mission",
      aboutDesc: "ReviewGuard AI was built to level the playing field for local enterprises. We provide small business owners with the same high-level sentiment intelligence used by global corporations, ensuring that every customer review is handled with professional precision.",
      privacyTitle: "Privacy Shield",
      privacyDesc: "We prioritize your data sovereignty. ReviewGuard AI operates on a zero-knowledge architecture, meaning we never store your personal Google passwords. We only access GMB data necessary to generate sentiment analysis and automated responses.",
      termsTitle: "Terms of Governance",
      termsDesc: "By using ReviewGuard AI, you acknowledge that AI-generated responses are suggestions. While our models are highly accurate, total verification remains the user's responsibility. Abuse of the system for spam is strictly prohibited."
    },
    categories: {
      gym: "Gym / Fitness Center",
      restaurant: "Restaurant / Cafe",
      salon: "Salon / Barbershop",
      beauty: "Beauty Parlour",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "Other Service Industry"
    }
  },
  hi: {
    nav: { manage: "प्रबंधन", vault: "संग्रह", strategy: "रणनीति", profile: "प्रोफ़ाइल", logout: "लॉगआउट", signIn: "साइन इन", startFree: "अभी फ्री शुरू करें" },
    hero: { badge: "AI प्रतिष्ठा सुरक्षा", title: "आपका बिजनेस, आपकी इज़्ज़त।", subtitle: "Google रिव्यु का ऑटो-जवाब दें। नेगेटिव फीडबैक को बेहतर इनसाइट्स में बदलें और बिजनेस बढ़ाएं।", cta: "अभी फ्री शुरू करें", trustedBy: "500+ लोकल बिजनेस का भरोसा" },
    features: { title: "रिव्युगार्ड क्यों चुनें?", subtitle: "दुकानदारों के लिए प्रोफेशनल AI टूल्स अब एक ही जगह।", autoReplyTitle: "24/7 ऑटो-जवाब", autoReplyDesc: "AI हर रिव्यु का तुरंत जवाब लिखता है। AI काम संभालता है और आपको सूचना मिलती है।", strategyTitle: "रणनीति हब", strategyDesc: "पिछले 30 दिनों का विश्लेषण। AI बताता है कि लोग आपकी दुकान के बारे में क्या कह रहे हैं।", googleTitle: "गूगल कनेक्टेड", googleDesc: "सीधे अपने गूगल बिजनेस प्रोफाइल से जोड़ें। बिना किसी झंझट के ऑटो-सिंक।" },
    howItWorks: { title: "3 आसान स्टेप्स में बिजनेस सुरक्षित करें", step1Title: "लॉगिन और सेटअप", step1Desc: "गूगल से लॉगिन करें और अपनी दुकान का नाम बताएं।", step2Title: "AI ऑटोमेशन सक्षम करें", step2Desc: "एक क्लिक में AI ऑटो-जवाब शुरू करें। अब हर रिव्यु हमारी जिम्मेदारी।", step3Title: "बिक्री बढ़ाएं", step3Desc: "मंथली AI रिपोर्ट पढ़ें और कमजोरियों को ताकत में बदलें।" },
    dashboard: { statusActive: "ऑटोमेशन सक्रिय", deploymentTitle: "AI डिप्लॉयमेंट सेंटर", deploymentDesc: "आपका डिजिटल प्रतिनिधि ऑनलाइन है। हम 24/7 आपकी रेटिंग की रक्षा करते हैं।", integrityTest: "सिस्टम इंटीग्रिटी टेस्ट करें", integrityToast: "AI नोड्स के परीक्षण के लिए मैनुअल ओवरराइड", manualTitle: "मैनुअल विश्लेषण", manualLabel: "मैनुअल भावना निष्कर्ष", ratingLabel: "रिव्यु रेटिंग", inputLabel: "इनपुट", inputPlaceholder: "ग्राहक के शब्द यहाँ पेस्ट करें...", executeCta: "विश्लेषण करें", totalProcessed: "कुल प्रोसेस्ड रिव्यु", awaitingInput: "इनपुट का इंतजार", awaitingDesc: "रणनीति और जवाब यहाँ दिखाई देंगे।", analyzing: "AI रणनीति परामर्श जारी...", sentimentLabel: "भावना", suggestedReply: "सुझाया गया प्रोफेशनल जवाब", actionSteps: "तुरंत उठाए जाने वाले कदम", copyCta: "जवाब कॉपी करें" },
    settings: { title: "पहचान हब", subtitle: "ग्लोबल ग्रिड पर अपनी दुकान की उपस्थिति का प्रबंधन करें।", bizName: "बिजनेस का नाम", bizCat: "बिजनेस श्रेणी", address: "पता", phone: "सपोर्ट फोन", website: "आधिकारिक वेबसाइट", updateCta: "प्रोफ़ाइल सुरक्षित करें", googleSync: "GMB से सिंक करें", verified: "पहचान सत्यापित", securityLevel: "सुरक्षा स्तर", encrypted: "एन्क्रिप्टेड कनेक्शन", zeroKnowledge: "डेटा जीरो-नॉलेज आर्किटेक्चर के जरिए प्रबंधित।" },
    setup: { title: "सेटअप करें", desc: "बेहतर AI जवाबों के लिए अपने बिजनेस की जानकारी दें।", finish: "सेटअप पूरा करें" },
    insights: {
      title: "रणनीति केंद्र",
      subtitle: "क्रॉस-बैच सेंटीमेंट इंटेलिजेंस",
      batchTab: "बैच-10",
      weeklyTab: "साप्ताहिक डेटा",
      monthlyTab: "मासिक डेटा",
      lockedTitle: "बैच रणनीति लॉक है",
      lockedDesc: "ट्रेंड एनालिसिस और रोडमैप के लिए 10 क्रिटिकल डेटा पॉइंट्स जमा करें।",
      collectReviews: "क्रिटिकल रिव्यु",
      generating: "मैक्रो ट्रेंड्स का विश्लेषण...",
      blueprint: "रणनीति ब्लूप्रिंट",
      synthesis: "पोस्ट-क्रिटिकल विश्लेषण",
      findings: "मुख्य निष्कर्ष",
      roadmap: "एक्शन रोडमैप",
      performanceScore: "प्रदर्शन स्कोर",
      outOf100: "100 में से",
      sentimentMood: "सेंटीमेंट मूड",
      gaps: "मुख्य कमियां",
      actionPlan: "AI एक्शन प्लान",
      generateFresh: "नया विश्लेषण तैयार करें",
      noReport: "कोई रिपोर्ट नहीं मिली",
      noReportDesc: "अपना पहला AI-संचालित विश्लेषण शुरू करें।",
      initializeSync: "सिंक शुरू करें"
    },
    footer: {
      tagline: "AI सेंटीमेंट एनालिसिस के जरिए स्थानीय व्यवसायों को सशक्त बनाना।",
      platform: "प्लेटफ़ॉर्म",
      about: "हमारे बारे में",
      status: "सिस्टम स्टेटस",
      legal: "कानूनी",
      privacy: "प्राइवेसी पॉलिसी",
      terms: "शर्तें",
      security: "सुरक्षा",
      contact: "संपर्क",
      rights: "© 2026 REVIEWGUARD AI • सर्वाधिकार सुरक्षित",
      globalNode: "ग्लोबल नोड: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "हमारा मिशन",
      aboutDesc: "ReviewGuard AI स्थानीय व्यवसायों के लिए बनाया गया है। हम छोटे व्यवसाय मालिकों को वही उच्च-स्तरीय सेंटीमेंट इंटेलिजेंस प्रदान करते हैं जो वैश्विक निगमों द्वारा उपयोग किया जाता है, यह सुनिश्चित करते हुए कि हर ग्राहक समीक्षा को पेशेवर सटीकता के साथ संभाला जाए।",
      privacyTitle: "प्राइवेसी शील्ड",
      privacyDesc: "हम आपकी डेटा संप्रभुता को प्राथमिकता देते हैं। ReviewGuard AI जीरो-नॉलेज आर्किटेक्चर पर काम करता है, जिसका अर्थ है कि हम आपके व्यक्तिगत Google पासवर्ड कभी स्टोर नहीं करते हैं। हम केवल सेंटीमेंट विश्लेषण के लिए आवश्यक GMB डेटा का उपयोग करते हैं।",
      termsTitle: "शासन की शर्तें",
      termsDesc: "ReviewGuard AI का उपयोग करके, आप स्वीकार करते हैं कि AI-जनरेटेड जवाब सुझाव हैं। जबकि हमारे मॉडल अत्यधिक सटीक हैं, सत्यापन उपयोगकर्ता की जिम्मेदारी बनी रहती है। सिस्टम का दुरुपयोग सख्त वर्जित है।"
    },
    categories: {
      gym: "जिम / फिटनेस सेंटर",
      restaurant: "रेस्टोरेंट / कैफे",
      salon: "सैलून / नाई की दुकान",
      beauty: "ब्यूटी पार्लर",
      retail: "रिटेल / दुकान",
      cafe: "कैफे / बेकरी",
      hotel: "होटल / लॉजिंग",
      medical: "मेडिकल / क्लिनिक",
      auto: "ऑटोमोटिव / गैरेज",
      edu: "शिक्षा / संस्थान",
      other: "अन्य सेवा उद्योग"
    }
  },
  hinglish: {
    nav: { manage: "Manage", vault: "Vault", strategy: "Strategy", profile: "Profile", logout: "Logout", signIn: "Sign In", startFree: "Free Start Karein" },
    hero: { badge: "AI Reputation Protect", title: "Aapka Business, Aapki Izzat.", subtitle: "Google reviews ka automatic jawab dein. Negative feedback ko business growth mein badlein.", cta: "Free Start Karein", trustedBy: "500+ Local Businesses ka bharosa" },
    features: { title: "ReviewGuard Kyun Chunein?", subtitle: "Shopkeepers ke liye professional AI tools ab ek hi jagah par.", autoReplyTitle: "Auto-Reply 24/7", autoReplyDesc: "Har review ka AI turant jawab likhega. App busy rahein, AI sambhal lega.", strategyTitle: "Strategy Hub", strategyDesc: "Monthly analysis karein aur shop ki image improve karein.", googleTitle: "Google Connected", googleDesc: "Apne Google profile se seedha link karein." },
    howItWorks: { title: "3 Steps mein Business secure karein", step1Title: "Login & Setup", step1Desc: "Google se login karein aur shop ka naam bataein.", step2Title: "AI Automation Enable", step2Desc: "AI Auto-Reply shuru karein, har review hamari zimmedari.", step3Title: "Sales Badhao", step3Desc: "AI report padhein aur apni kamiyon ko door karein." },
    dashboard: { statusActive: "Automation Chalu Hai", deploymentTitle: "AI Deployment Center", deploymentDesc: "Aapka digital rep online hai. Hum 24/7 rating protect karte hain.", integrityTest: "System Check Karein", integrityToast: "Manual testing mode active", manualTitle: "Manual Analysis", manualLabel: "Review check karein", ratingLabel: "Star Rating", inputLabel: "Customer ki baat", inputPlaceholder: "Yahan likhein...", executeCta: "Analyze Karein", totalProcessed: "Total Reviews Check huye", awaitingInput: "Likhne ka intezar", awaitingDesc: "AI response yahan dikhega.", analyzing: "AI kaam kar raha hai...", sentimentLabel: "Bhavna", suggestedReply: "Professional Jawab", actionSteps: "Zaroori Steps", copyCta: "Copy Karein" },
    settings: { title: "Identity Hub", subtitle: "Shop ki profile manage karein.", bizName: "Dukan ka Naam", bizCat: "Category", address: "Address", phone: "Phone No", website: "Website Link", updateCta: "Save Karein", googleSync: "Sync Karein", verified: "Verified Identity", securityLevel: "Security Level", encrypted: "Safe Connection", zeroKnowledge: "Aapka data safe hai." },
    setup: { title: "Shop Setup Karein", desc: "Profile details bharein.", finish: "Finish Setup" },
    insights: {
      title: "Strategy Node",
      subtitle: "Cross-Batch Sentiment Intelligence",
      batchTab: "Batch-10",
      weeklyTab: "Weekly Delta",
      monthlyTab: "Monthly Delta",
      lockedTitle: "Batch Strategy Locked",
      lockedDesc: "Trend analysis ke liye 10 critical data points collect karein.",
      collectReviews: "CRITICAL REVIEWS",
      generating: "Macro Trends analyze ho rahe hain...",
      blueprint: "Strategy Blueprint",
      synthesis: "Post-Critical Synthesis",
      findings: "Main Findings",
      roadmap: "Action Roadmap",
      performanceScore: "Performance Score",
      outOf100: "100 mein se",
      sentimentMood: "Sentiment Mood",
      gaps: "Key Gaps",
      actionPlan: "AI Action Plan",
      generateFresh: "Naya Analysis Generate Karein",
      noReport: "Report nahi mili",
      noReportDesc: "Apna pehla AI deep-dive analysis shuru karein.",
      initializeSync: "Sync Start Karein"
    },
    footer: {
      tagline: "AI technology se local business ka naam badao.",
      platform: "Platform",
      about: "About Us",
      status: "System Status",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms",
      security: "Security",
      contact: "Contact",
      rights: "© 2026 REVIEWGUARD AI • ALL RIGHTS RESERVED",
      globalNode: "Global Node: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "The Mission",
      aboutDesc: "ReviewGuard AI local businesses ko empower karne ke liye banaya gaya hai. Hum small business owners ko vahi high-level AI intelligence dete hain jo badi companies use karti hain, taaki har review professional lage.",
      privacyTitle: "Privacy Shield",
      privacyDesc: "Aapka data aapka hai. ReviewGuard AI zero-knowledge architecture use karta hai, matlab hum aapke Google password kabhi store nahi karte. Hum sirf zaroori data access karte hain analysis ke liye.",
      termsTitle: "Terms of Governance",
      termsDesc: "ReviewGuard AI use karte waqt aap mante hain ki AI responses sirf suggestions hain. Final verification aapki responsibility hai. System ka galat use mana hai."
    },
    categories: {
      gym: "Gym / Fitness Center",
      restaurant: "Restaurant / Cafe",
      salon: "Salon / Barbershop",
      beauty: "Beauty Parlour",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "Other Service Industry"
    }
  },
  es: {
    nav: { manage: "Gestionar", vault: "Bóveda", strategy: "Estrategia", profile: "Perfil", logout: "Cerrar sesión", signIn: "Iniciar sesión", startFree: "Empezar GRATIS" },
    hero: { badge: "Protección de Reputación AI", title: "Su Negocio, Su Orgullo.", subtitle: "Responda automáticamente a las reseñas de Google. Convierta las quejas en oportunidades.", cta: "Empezar GRATIS ahora", trustedBy: "Confiado por más de 500 negocios" },
    features: { title: "¿Por qué elegir ReviewGuard?", subtitle: "Herramientas profesionales de IA para comerciantes.", autoReplyTitle: "Auto-Respuesta 24/7", autoReplyDesc: "La IA escribe respuestas instantáneas. Usted recibe notificaciones mientras la IA se encarga.", strategyTitle: "Centro Estratégico", strategyDesc: "Analice los últimos 30 días. La IA identifica lo que dicen de su tienda.", googleTitle: "Google Conectado", googleDesc: "Vincule directamente su perfil de Google Business sin complicaciones." },
    howItWorks: { title: "Proteja su negocio en 3 pasos", step1Title: "Login y Configuración", step1Desc: "Inicie sesión con Google y dé el nombre de su tienda.", step2Title: "Active la IA", step2Desc: "Inicie la respuesta automática con un clic.", step3Title: "Aumente sus ventas", step3Desc: "Lea informes mensuales y mejore su negocio." },
    dashboard: { statusActive: "Automatización Activa", deploymentTitle: "Centro de Despliegue IA", deploymentDesc: "Su representante digital está en línea. Protegemos su calificación 24/7.", integrityTest: "Prueba de Integridad", integrityToast: "Anulación manual para pruebas", manualTitle: "Análisis Manual", manualLabel: "Extracción de sentimiento", ratingLabel: "Calificación", inputLabel: "Entrada", inputPlaceholder: "Pegue las palabras del cliente...", executeCta: "Ejecutar Síntesis", totalProcessed: "Reseñas procesadas", awaitingInput: "Esperando entrada", awaitingDesc: "La respuesta estratégica aparecerá aquí.", analyzing: "Consultoría de Estrategia IA...", sentimentLabel: "Sentimiento", suggestedReply: "Respuesta Profesional Sugerida", actionSteps: "PASOS DE ACCIÓN INMEDIATA", copyCta: "Copiar Respuesta" },
    settings: { title: "Hub de Identidad", subtitle: "Coordine la apariencia de su tienda.", bizName: "Nombre del Negocio", bizCat: "Categoría", address: "Dirección", phone: "Teléfono", website: "Sitio Web", updateCta: "Guardar Cambios", googleSync: "Sincronizar GMB", verified: "Identidad Verificada", securityLevel: "Nivel de Seguridad", encrypted: "Conexión Encriptada", zeroKnowledge: "Datos gestionados bajo arquitectura Zero-Knowledge." },
    setup: { title: "Configure su Tienda", desc: "Díganos sobre su negocio.", finish: "Finalizar Configuración" },
    insights: {
      title: "Nodo de Estrategia",
      subtitle: "Inteligencia de Sentimiento Cross-Batch",
      batchTab: "Batch-10",
      weeklyTab: "Delta Semanal",
      monthlyTab: "Delta Mensual",
      lockedTitle: "Estrategia de Batch Bloqueada",
      lockedDesc: "Recopile 10 puntos de datos críticos para generar un análisis de tendencias y una hoja de ruta táctica.",
      collectReviews: "RESEÑAS CRÍTICAS",
      generating: "Sintetizando Macro Tendencias...",
      blueprint: "Plano Estratégico",
      synthesis: "Síntesis Post-Crítica",
      findings: "Principales Hallazgos Macro",
      roadmap: "Hoja de Ruta Táctica",
      performanceScore: "Puntuación de Rendimiento",
      outOf100: "de 100",
      sentimentMood: "Estado de Ánimo del Sentimiento",
      gaps: "Brechas de Rendimiento Clave",
      actionPlan: "Plan de Acción IA",
      generateFresh: "Generar Análisis Nuevo",
      noReport: "No se encontró informe",
      noReportDesc: "Genere su primer análisis profundo impulsado por IA.",
      initializeSync: "Iniciar Sincronización"
    },
    footer: {
      tagline: "Empoderando a la empresa local mediante síntesis de sentimiento por IA de vanguardia.",
      platform: "Plataforma",
      about: "Nosotros",
      status: "Estado del Sistema",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      security: "Seguridad",
      contact: "Contacto",
      rights: "© 2026 REVIEWGUARD AI • TODOS LOS DERECHOS RESERVADOS",
      globalNode: "Nodo Global: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "La Misión",
      aboutDesc: "ReviewGuard AI fue creado para nivelar el campo de juego para las empresas locales. Proporcionamos a los propietarios de pequeñas empresas la misma inteligencia de sentimiento de alto nivel utilizada por las corporaciones globales, asegurando que cada reseña de cliente se maneje con precisión profesional.",
      privacyTitle: "Escudo de Privacidad",
      privacyDesc: "Priorizamos la soberanía de sus datos. ReviewGuard AI opera bajo una arquitectura Zero-Knowledge, lo que significa que nunca almacenamos sus contraseñas personales de Google. Solo accedemos a los datos de GMB necesarios para generar análisis de sentimiento.",
      termsTitle: "Términos de Gobernanza",
      termsDesc: "Al usar ReviewGuard AI, reconoce que las respuestas generadas por IA son sugerencias. Si bien nuestros modelos son altamente precisos, la verificación total sigue siendo responsabilidad del usuario. Está estrictamente prohibido el uso indebido para spam."
    },
    categories: {
      gym: "Gimnasio / Fitness",
      restaurant: "Restaurante / Cafetería",
      salon: "Salón / Barbería",
      beauty: "Salón de belleza",
      retail: "Venta al por menor",
      cafe: "Cafetería / Panadería",
      hotel: "Hotel / Alojamiento",
      medical: "Médico / Clínica",
      auto: "Automotriz / Garaje",
      edu: "Educación / Instituto",
      other: "Otros"
    }
  },
  ja: {
    nav: { manage: "管理", vault: "金庫", strategy: "戦略", profile: "プロフィール", logout: "ログアウト", signIn: "サインイン", startFree: "無料で始める" },
    hero: { badge: "AI評判保護", title: "あなたのビジネス、あなたの誇り。", subtitle: "Googleのクチコミに自動返信。ネガティブなフィードバックを成長のヒントに変えましょう。", cta: "今すぐ無料で始める", trustedBy: "500以上の地元企業に信頼されています" },
    features: { title: "なぜReviewGuardなのか？", subtitle: "店主のためのプロ仕様AIツールが一堂に。", autoReplyTitle: "24時間365日の自動返信", autoReplyDesc: "AIがすべてのクチコミに即座に返信を作成します。AIが処理する間、通知を受け取れます。", strategyTitle: "戦略ハブ", strategyDesc: "過去30日間を分析。AIがあなたのお店について語られている内容を特定します。", googleTitle: "Google連携", googleDesc: "Googleビジネスプロフィールに直接リンク。手間なく自動同期。" },
    howItWorks: { title: "3ステップでビジネスを保護", step1Title: "ログインと設定", step1Desc: "Googleでログインし、店名を登録します。", step2Title: "AI自動化を有効化", step2Desc: "ワンクリックで自動返信を開始。すべてのクチコミを我々が責任を持って管理します。", step3Title: "売上を伸ばす", step3Desc: "毎月のAIレポートを読み、弱点を強みに変えましょう。" },
    dashboard: { statusActive: "自動化有効", deploymentTitle: "AI展開センター", deploymentDesc: "デジタル担当者がオンラインです。24時間体制で評価を守ります。", integrityTest: "システム整合性テストを実行", integrityToast: "手動テストモード", manualTitle: "手動分析", manualLabel: "感情抽出", ratingLabel: "評価", inputLabel: "入力", inputPlaceholder: "顧客の言葉を貼り付けてください...", executeCta: "統合を実行", totalProcessed: "処理済みクチコミ数", awaitingInput: "入力待ち", awaitingDesc: "戦略的回答と分析がここに表示されます。", analyzing: "AI戦略コンサルティング中...", sentimentLabel: "感情", suggestedReply: "提案された返信", actionSteps: "即時のアクションステップ", copyCta: "回答をコピー" },
    settings: { title: "アイデンティティハブ", subtitle: "お店の情報を管理します。", bizName: "ビジネス名", bizCat: "ビジネスカテゴリ", address: "住所", phone: "電話番号", website: "公式サイト", updateCta: "変更を保存", googleSync: "GMBと同期", verified: "本人確認済み", securityLevel: "セキュリティレベル", encrypted: "暗号化接続", zeroKnowledge: "ゼロ知識証明アーキテクチャによるデータ管理。" },
    setup: { title: "お店の設定", desc: "ビジネスについて教えてください。", finish: "設定完了" },
    insights: {
      title: "戦略ノード",
      subtitle: "クロスバッチ感情インテリジェンス",
      batchTab: "バッチ-10",
      weeklyTab: "週次デルタ",
      monthlyTab: "月次デルタ",
      lockedTitle: "バッチ戦略ロック中",
      lockedDesc: "トレンド分析と戦術ロードマップを生成するために、10個の重要なデータポイントを収集してください。",
      collectReviews: "重要なレビュー",
      generating: "マクロトレンドを合成中...",
      blueprint: "戦略ブループリント",
      synthesis: "ポストクリティカル合成",
      findings: "主要なマクロ調査結果",
      roadmap: "戦術的ロードマップ",
      performanceScore: "パフォーマンススコア",
      outOf100: "/ 100",
      sentimentMood: "感情ムード",
      gaps: "主要なパフォーマンスギャップ",
      actionPlan: "AIアクションプラン",
      generateFresh: "新しい分析を生成",
      noReport: "レポートが見つかりません",
      noReportDesc: "最初のAI駆動ディープダイブ分析を生成してください。",
      initializeSync: "同期を初期化"
    },
    footer: {
      tagline: "最先端のAI感情合成を通じて、地元企業の活性化を支援します。",
      platform: "プラットフォーム",
      about: "会社概要",
      status: "システムステータス",
      legal: "法務",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      security: "セキュリティ",
      contact: "お問い合わせ",
      rights: "© 2026 REVIEWGUARD AI • ALL RIGHTS RESERVED",
      globalNode: "グローバルノード: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "ミッション",
      aboutDesc: "ReviewGuard AIは、地元企業の競争力を高めるために構築されました。グローバル企業が使用するのと同じ高レベルの感情インテリジェンスを中小企業のオーナーに提供し、すべてのカスタマーレビューがプロフェッショナルな精度で処理されるようにします。",
      privacyTitle: "プライバシーシールド",
      privacyDesc: "私たちはあなたのデータの主権を優先します。ReviewGuard AIはゼロナレッジアーキテクチャで動作するため、個人のGoogleパスワードを保存することはありません。感情分析と自動応答の生成に必要なGMBデータにのみアクセスします。",
      termsTitle: "規約",
      termsDesc: "ReviewGuard AIを使用することにより、AIが生成した応答は提案であることを認めるものとします。私たちのモデルは非常に正確ですが、最終的な検証はユーザーの責任となります。スパム目的のシステムの乱用は固く禁じられています。"
    },
    categories: {
      gym: "ジム / フィットネスセンター",
      restaurant: "レストラン / カフェ",
      salon: "サロン / 理髪店",
      beauty: "ビューティーパーラー",
      retail: "小売 / ショップ",
      cafe: "カフェ / ベーカリー",
      hotel: "ホテル / 宿泊施設",
      medical: "医療 / クリニック",
      auto: "自動車 / ガレージ",
      edu: "教育 / 機関",
      other: "その他"
    }
  },
  fr: {
    nav: { manage: "Gérer", vault: "Coffre", strategy: "Stratégie", profile: "Profil", logout: "Déconnexion", signIn: "Connexion", startFree: "Commencer GRATUITEMENT" },
    hero: { badge: "Protection de Réputation IA", title: "Votre Entreprise, Votre Fierté.", subtitle: "Répondez automatiquement aux avis Google. Transformez les critiques en opportunités.", cta: "Commencer GRATUITEMENT maintenant", trustedBy: "Approuvé par 500+ commerces" },
    features: { title: "Pourquoi choisir ReviewGuard ?", subtitle: "Des outils IA professionnels pour les commerçants.", autoReplyTitle: "Réponse Auto 24/7", autoReplyDesc: "L'IA rédige des réponses instantanées. Vous êtes notifié pendant que l'IA s'en occupe.", strategyTitle: "Centre Stratégique", strategyDesc: "Analysez les 30 derniers jours. L'IA identifie ce que l'on dit de votre boutique.", googleTitle: "Connecté à Google", googleDesc: "Liez directement votre profil Google Business sans tracas." },
    howItWorks: { title: "Protégez votre entreprise en 3 étapes", step1Title: "Connexion & Setup", step1Desc: "Connectez-vous avec Google et donnez le nom de votre boutique.", step2Title: "Activer l'IA", step2Desc: "Lancez la réponse auto d'un clic. Chaque avis est notre responsabilité.", step3Title: "Booster vos ventes", step3Desc: "Lisez les rapports IA et transformez vos faiblesses en force." },
    dashboard: { statusActive: "Automatisation Active", deploymentTitle: "Centre de Déploiement IA", deploymentDesc: "Votre représentant digital est en ligne. Nous protégeons votre note 24/7.", integrityTest: "Test d'Intégrité", integrityToast: "Contrôle manuel pour tests", manualTitle: "Analyse Manuelle", manualLabel: "Extraction de sentiment", ratingLabel: "Note", inputLabel: "Entrée", inputPlaceholder: "Collez les mots du client...", executeCta: "Exécuter la Synthèse", totalProcessed: "Avis traités", awaitingInput: "En attente", awaitingDesc: "La réponse stratégique apparaîtra ici.", analyzing: "Consultation Stratégique IA...", sentimentLabel: "Sentiment", suggestedReply: "Réponse Professionnelle Suggérée", actionSteps: "ACTIONS IMMÉDIATES", copyCta: "Copier la Réponse" },
    settings: { title: "Hub d'Identité", subtitle: "Coordonnez l'apparence de votre boutique.", bizName: "Nom de l'entreprise", bizCat: "Catégorie", address: "Adresse", phone: "Téléphone", website: "Site Web", updateCta: "Sauvegarder", googleSync: "Sync GMB", verified: "Identité Vérifiée", securityLevel: "Niveau de Sécurité", encrypted: "Connexion Chiffrée", zeroKnowledge: "Données gérées via architecture Zero-Knowledge." },
    setup: { title: "Configurez votre boutique", desc: "Parlez-nous de votre business.", finish: "Terminer" },
    insights: {
      title: "Nœud de Stratégie",
      subtitle: "Intelligence de Sentiment Multi-Batch",
      batchTab: "Batch-10",
      weeklyTab: "Delta Hebdo",
      monthlyTab: "Delta Mensuel",
      lockedTitle: "Stratégie de Batch Verrouillée",
      lockedDesc: "Collectez 10 points de données critiques pour générer une analyse de tendance et une feuille de route tactique.",
      collectReviews: "AVIS CRITIQUES",
      generating: "Synthèse des Tendances Macro...",
      blueprint: "Plan Stratégique",
      synthesis: "Synthèse Post-Critique",
      findings: "Principales Conclusions Macro",
      roadmap: "Feuille de Route Tactique",
      performanceScore: "Score de Performance",
      outOf100: "sur 100",
      sentimentMood: "Humeur du Sentiment",
      gaps: "Écarts de Performance Clés",
      actionPlan: "Plan d'Action IA",
      generateFresh: "Générer une Nouvelle Analyse",
      noReport: "Aucun rapport trouvé",
      noReportDesc: "Générez votre première analyse approfondie par IA.",
      initializeSync: "Initialiser la Sync"
    },
    footer: {
      tagline: "Soutien aux entreprises locales via une synthèse de sentiment par IA de pointe.",
      platform: "Plateforme",
      about: "À Propos",
      status: "État du Système",
      legal: "Légal",
      privacy: "Confidentialité",
      terms: "Conditions",
      security: "Sécurité",
      contact: "Contact",
      rights: "© 2026 REVIEWGUARD AI • TOUS DROITS RÉSERVÉS",
      globalNode: "Nœud Global : ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "La Mission",
      aboutDesc: "ReviewGuard AI a été conçu pour uniformiser les règles du jeu pour les entreprises locales. Nous offrons aux propriétaires de petites entreprises la même intelligence de sentiment de haut niveau que celle utilisée par les multinationales, garantissant que chaque avis client est traité avec une précision professionnelle.",
      privacyTitle: "Bouclier de Confidentialité",
      privacyDesc: "Nous accordons la priorité à la souveraineté de vos données. ReviewGuard AI fonctionne sur une architecture Zero-Knowledge, ce qui signifie que nous ne stockons jamais vos mots de passe personnels Google. Nous n'accédons qu'aux données GMB nécessaires à l'analyse.",
      termsTitle: "Conditions de Gouvernance",
      termsDesc: "En utilisant ReviewGuard AI, vous reconnaissez que les réponses générées par l'IA sont des suggestions. Bien que nos modèles soient précis, la vérification finale incombe à l'utilisateur. Toute utilisation abusive du système pour le spam est strictement interdite."
    },
    categories: {
      gym: "Salle de sport / Fitness",
      restaurant: "Restaurant / Café",
      salon: "Salon / Barbier",
      beauty: "Institut de beauté",
      retail: "Vente au détail",
      cafe: "Café / Boulangerie",
      hotel: "Hôtel / Hébergement",
      medical: "Médical / Clinique",
      auto: "Automobile / Garage",
      edu: "Éducation / Institut",
      other: "Autre industrie de services"
    }
  },
  it: {
    nav: { manage: "Gestisci", vault: "Caveau", strategy: "Strategia", profile: "Profilo", logout: "Esci", signIn: "Accedi", startFree: "Inizia GRATIS" },
    hero: { badge: "Protezione Reputazione AI", title: "Il Tuo Business, Il Tuo Orgoglio.", subtitle: "Rispondi automaticamente alle recensioni Google. Trasforma i feedback negativi in crescita.", cta: "Inizia GRATIS ora", trustedBy: "Scelto da oltre 500 attività" },
    features: { title: "Perché scegliere ReviewGuard?", subtitle: "Strumenti IA professionali per i commercianti.", autoReplyTitle: "Auto-Risposta 24/7", autoReplyDesc: "L'IA scrive risposte istantanee. Ricevi notifiche mentre l'IA gestisce tutto.", strategyTitle: "Hub Strategico", strategyDesc: "Analizza gli ultimi 30 giorni. L'IA identifica cosa dicono del tuo negozio.", googleTitle: "Google Connected", googleDesc: "Collega direttamente il tuo profilo Google Business senza stress." },
    howItWorks: { title: "Proteggi il tuo business in 3 passaggi", step1Title: "Login e Setup", step1Desc: "Accedi con Google e inserisci il nome del negozio.", step2Title: "Attiva l'IA", step2Desc: "Avvia le risposte automatiche con un clic.", step3Title: "Aumenta le vendite", step3Desc: "Leggi i report IA e trasforma i punti deboli in forza." },
    dashboard: { statusActive: "Automazione Attiva", deploymentTitle: "Centro Implementazione IA", deploymentDesc: "Il tuo rappresentante digitale è online. Proteggiamo il tuo rating 24/7.", integrityTest: "Test di Integrità", integrityToast: "Controllo manuale per test", manualTitle: "Analisi Manuale", manualLabel: "Estrazione sentiment", ratingLabel: "Valutazione", inputLabel: "Input", inputPlaceholder: "Incolla qui le parole del cliente...", executeCta: "Esegui Sintesi", totalProcessed: "Recensioni elaborate", awaitingInput: "In attesa di input", awaitingDesc: "La risposta strategica apparirà qui.", analyzing: "Consulenza Strategica IA...", sentimentLabel: "Sentiment", suggestedReply: "Risposta Professionale Suggerita", actionSteps: "AZIONI IMMEDIATE", copyCta: "Copia Risposta" },
    settings: { title: "Hub Identità", subtitle: "Gestisci l'immagine del tuo negozio.", bizName: "Nome Attività", bizCat: "Categoria", address: "Indirizzo", phone: "Telefono", website: "Sito Web", updateCta: "Salva Modifiche", googleSync: "Sincronizza GMB", verified: "Identità Verificata", securityLevel: "Livello Sicurezza", encrypted: "Connessione Criptata", zeroKnowledge: "Dati gestiti tramite architettura Zero-Knowledge." },
    setup: { title: "Configura il Negozio", desc: "Parlaci della tua attività.", finish: "Fine" },
    insights: {
      title: "Nodo Strategico",
      subtitle: "Intelligenza del Sentiment Cross-Batch",
      batchTab: "Batch-10",
      weeklyTab: "Delta Settimale",
      monthlyTab: "Delta Mensile",
      lockedTitle: "Strategia Batch Bloccata",
      lockedDesc: "Raccogli 10 dati critici per generare un'analisi dei trend e una roadmap tattica.",
      collectReviews: "RECENSIONI CRITICHE",
      generating: "Sintesi dei Macro Trend...",
      blueprint: "Blueprint Strategico",
      synthesis: "Sintesi Post-Critica",
      findings: "Principali Risultati Macro",
      roadmap: "Roadmap Tattica",
      performanceScore: "Punteggio Performance",
      outOf100: "su 100",
      sentimentMood: "Mood del Sentiment",
      gaps: "Gap di Performance Chiave",
      actionPlan: "Piano d'Azione IA",
      generateFresh: "Genera Nuova Analisi",
      noReport: "Nessun report trovato",
      noReportDesc: "Genera la tua prima analisi approfondita guidata dall'IA.",
      initializeSync: "Inizializza Sync"
    },
    footer: {
      tagline: "Potenziare le imprese locali tramite una sintesi del sentiment IA all'avanguardia.",
      platform: "Piattaforma",
      about: "Chi Siamo",
      status: "Stato del Sistema",
      legal: "Legale",
      privacy: "Privacy Policy",
      terms: "Termini",
      security: "Sicurezza",
      contact: "Contatti",
      rights: "© 2026 REVIEWGUARD AI • TUTTI I DIRITTI RISERVATI",
      globalNode: "Nodo Globale: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "La Missione",
      aboutDesc: "ReviewGuard AI è stato creato per livellare il campo di gioco per le imprese locali. Forniamo ai proprietari di piccole imprese la stessa intelligenza di alto livello utilizzata dalle grandi corporazioni, garantendo che ogni recensione sia gestita con precisione professionale.",
      privacyTitle: "Scudo della Privacy",
      privacyDesc: "Diamo priorità alla sovranità dei tuoi dati. ReviewGuard AI opera su un'architettura Zero-Knowledge, il che significa che non memorizziamo mai le tue password personali di Google. Accediamo solo ai dati GMB necessari per l'analisi.",
      termsTitle: "Termini di Governance",
      termsDesc: "Utilizzando ReviewGuard AI, riconosci che le risposte generate dall'intelligenza artificiale sono suggerimenti. Sebbene i nostri modelli siano accurati, la verifica finale rimane responsabilità dell'utente."
    },
    categories: {
      gym: "Palestra / Fitness",
      restaurant: "Ristorante / Caffè",
      salon: "Salone / Barbiere",
      beauty: "Centro estetico",
      other: "Altro settore dei servizi"
    }
  },
  ru: {
    nav: { manage: "Управление", vault: "Хранилище", strategy: "Стратегия", profile: "Профиль", logout: "Выйти", signIn: "Войти", startFree: "Начать БЕСПЛАТНО" },
    hero: { badge: "AI Защита Репутации", title: "Ваш Бизнес, Ваша Гордость.", subtitle: "Автоответы на отзывы Google. Превращайте негатив в точки роста бизнеса.", cta: "Начать БЕСПЛАТНО сейчас", trustedBy: "Доверяют более 500 компаний" },
    features: { title: "Почему ReviewGuard?", subtitle: "Профессиональные AI инструменты для бизнеса в одном месте.", autoReplyTitle: "Автоответы 24/7", autoReplyDesc: "AI мгновенно пишет ответы. Вы получаете уведомление, пока AI работает за вас.", strategyTitle: "Хаб Стратегий", strategyDesc: "Анализ за последние 30 дней. AI выявляет основные темы отзывов.", googleTitle: "Связь с Google", googleDesc: "Прямая связь с вашим Google Business Profile без хлопот." },
    howItWorks: { title: "Защитите бизнес за 3 шага", step1Title: "Вход и Настройка", step1Desc: "Войдите через Google и укажите название магазина.", step2Title: "Включите AI", step2Desc: "Запустите автоответы одним кликом.", step3Title: "Рост Продаж", step3Desc: "Читайте отчеты AI и делайте бизнес сильнее." },
    dashboard: { statusActive: "Автоматизация Активна", deploymentTitle: "Центр AI Развертывания", deploymentDesc: "Ваш цифровой представитель онлайн. Защищаем рейтинг 24/7.", integrityTest: "Проверка Целостности", integrityToast: "Ручное управление для тестов", manualTitle: "Ручной Анализ", manualLabel: "Анализ тональности", ratingLabel: "Рейтинг", inputLabel: "Ввод", inputPlaceholder: "Вставьте текст отзыва здесь...", executeCta: "Выполнить Синтез", totalProcessed: "Отзывов обработано", awaitingInput: "Ожидание ввода", awaitingDesc: "Здесь появится анализ и ответ.", analyzing: "AI Консалтинг...", sentimentLabel: "Тональность", suggestedReply: "Предложенный ответ", actionSteps: "СРОЧНЫЕ МЕРЫ", copyCta: "Копировать ответ" },
    settings: { title: "Центр Идентификации", subtitle: "Управляйте обликом вашего бизнеса.", bizName: "Название Бизнеса", bizCat: "Категория", address: "Адрес", phone: "Телефон", website: "Веб-сайт", updateCta: "Сохранить", googleSync: "Синхронизация GMB", verified: "Личность подтверждена", securityLevel: "Уровень Безопасности", encrypted: "Шифрованное Соединение", zeroKnowledge: "Данные под защитой Zero-Knowledge." },
    setup: { title: "Настройка Магазина", desc: "Расскажите нам о вашем бизнесе.", finish: "Завершить" },
    insights: {
      title: "Стратегический Узел",
      subtitle: "Межпакетная Аналитика Тональности",
      batchTab: "Пакет-10",
      weeklyTab: "Недельная дельта",
      monthlyTab: "Месячная дельта",
      lockedTitle: "Стратегия пакета заблокирована",
      lockedDesc: "Соберите 10 критических отзывов, чтобы построить анализ трендов и тактическую дорожную карту.",
      collectReviews: "КРИТИЧЕСКИЕ ОТЗЫВЫ",
      generating: "Синтез макротрендов...",
      blueprint: "Стратегический план",
      synthesis: "Посткритический синтез",
      findings: "Основные макровыводы",
      roadmap: "Тактическая дорожная карта",
      performanceScore: "Оценка эффективности",
      outOf100: "из 100",
      sentimentMood: "Настроение аудитории",
      gaps: "Ключевые пробелы в работе",
      actionPlan: "План действий AI",
      generateFresh: "Обновить анализ",
      noReport: "Отчет не найден",
      noReportDesc: "Запустите свой первый глубокий анализ с помощью AI.",
      initializeSync: "Начать синхронизацию"
    },
    footer: {
      tagline: "Расширение возможностей местного бизнеса с помощью передового анализа тональности на базе AI.",
      platform: "Платформа",
      about: "О нас",
      status: "Статус системы",
      legal: "Юридическая информация",
      privacy: "Конфиденциальность",
      terms: "Условия",
      security: "Безопасность",
      contact: "Контакты",
      rights: "© 2026 REVIEWGUARD AI • ВСЕ ПРАВА ЗАЩИЩЕНЫ",
      globalNode: "Глобальный узел: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "Наша миссия",
      aboutDesc: "ReviewGuard AI был создан, чтобы уравнять возможности для местного бизнеса. Мы предоставляем владельцам малого бизнеса ту же высокоуровневую аналитику настроений, которую используют глобальные корпорации, гарантируя профессиональную обработку каждого отзыва.",
      privacyTitle: "Защита данных",
      privacyDesc: "Мы уделяем приоритетное внимание суверенитету ваших данных. ReviewGuard AI работает на архитектуре Zero-Knowledge, что означает, что мы никогда не храним ваши личные пароли Google.",
      termsTitle: "Условия использования",
      termsDesc: "Используя ReviewGuard AI, вы подтверждаете, что ответы, созданные ИИ, являются предложениями. Хотя наши модели высокоточны, полная проверка остается обязанностью пользователя."
    },
    categories: {
      gym: "Фитнес-клуб / Тренажерный зал",
      restaurant: "Ресторан / Кафе",
      salon: "Салон красоты / Парикмахерская",
      beauty: "Салон красоты",
      retail: "Розничная торговля",
      cafe: "Кафе / Пекарня",
      hotel: "Отель / Проживание",
      medical: "Медицина / Клиника",
      auto: "Автомобили / Гараж",
      edu: "Образование / Институт",
      other: "Другая сфера услуг"
    }
  },
  zh: {
    nav: { manage: "管理", vault: "保管库", strategy: "策略", profile: "个人资料", logout: "登出", signIn: "登录", startFree: "立即免费开始" },
    hero: { badge: "AI 名誉保护", title: "您的业务，您的骄傲。", subtitle: "自动回复 Google 评论。将负面反馈转化为积极的洞察，助力业务增长。", cta: "立即免费开始", trustedBy: "超过 500 家本地商户的信赖" },
    features: { title: "为什么选择 ReviewGuard?", subtitle: "为店主提供的一站式专业 AI 工具。", autoReplyTitle: "24/7 自动回复", autoReplyDesc: "AI 即时起草回复。AI 处理时您会收到通知。", strategyTitle: "策略中心", strategyDesc: "分析过去 30 天。AI 识别顾客对店铺的评价。", googleTitle: "Google 连接", googleDesc: "直接链接您的 Google 商家资料，无忧同步。" },
    howItWorks: { title: "3 步保护您的业务", step1Title: "登录与设置", step1Desc: "使用 Google 登录并提供店铺名称。", step2Title: "启用 AI 自动化", step2Desc: "一键开启 AI 自动回复。", step3Title: "提升销售额", step3Desc: "阅读每月 AI 报告，将弱点转化为优势。" },
    dashboard: { statusActive: "自动化已激活", deploymentTitle: "AI 部署中心", deploymentDesc: "您的数字代表已在线。我们全天候保护您的评分。", integrityTest: "运行系统完整性测试", integrityToast: "手动测试模式", manualTitle: "手动分析", manualLabel: "情感提取", ratingLabel: "评分", inputLabel: "输入", inputPlaceholder: "在此粘贴顾客评论...", executeCta: "执行合成", totalProcessed: "已处理评论总数", awaitingInput: "等待输入", awaitingDesc: "此处将显示策略性回复和分析。", analyzing: "AI 策略咨询中...", sentimentLabel: "情感", suggestedReply: "建议的专业回复", actionSteps: "立即行动步骤", copyCta: "复制回复" },
    settings: { title: "身份中心", subtitle: "管理您的店铺形象。", bizName: "业务名称", bizCat: "业务类别", address: "详细地址", phone: "联系电话", website: "官方网站", updateCta: "保存个人资料更改", googleSync: "同步 GMB", verified: "身份已验证", securityLevel: "安全级别", encrypted: "加密连接", zeroKnowledge: "通过零知识架构管理数据。" },
    setup: { title: "设置您的店铺", desc: "告诉我们您的业务情况。", finish: "完成设置" },
    insights: {
      title: "策略节点",
      subtitle: "跨批次情感智能系统",
      batchTab: "批次-10",
      weeklyTab: "周度增量",
      monthlyTab: "月度增量",
      lockedTitle: "批次策略已锁定",
      lockedDesc: "收集 10 个关键数据点以生成趋势分析和战术修复路线图。",
      collectReviews: "关键评论",
      generating: "正在合成宏观趋势...",
      blueprint: "策略蓝图",
      synthesis: "关键后合成",
      findings: "宏观核心发现",
      roadmap: "战术路线图",
      performanceScore: "绩效评分",
      outOf100: "满分 100",
      sentimentMood: "情感氛围",
      gaps: "关键绩效差距",
      actionPlan: "AI 行动计划",
      generateFresh: "生成全新分析",
      noReport: "未找到报告",
      noReportDesc: "生成您的第一个由 AI 驱动的深度潜水分析。",
      initializeSync: "初始化同步"
    },
    footer: {
      tagline: "通过尖端的 AI 情感合成赋能本地企业。",
      platform: "平台",
      about: "关于我们",
      status: "系统状态",
      legal: "法律",
      privacy: "隐私政策",
      terms: "条款",
      security: "安全",
      contact: "联系我们",
      rights: "© 2026 REVIEWGUARD AI • 保留所有权利",
      globalNode: "全球节点: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "我们的使命",
      aboutDesc: "ReviewGuard AI 旨在为本地企业提供公平的竞争环境。我们为小企业主提供与全球企业相同的高水平情感智能分析，确保每一个客户评价都能得到专业的精准处理。",
      privacyTitle: "隐私防护",
      privacyDesc: "我们优先考虑您的数据主权。ReviewGuard AI 基于零知识架构运行，这意味着我们绝不会存储您的个人 Google 密码。我们仅访问生成情感分析和自动回复所需的 GMB 数据。",
      termsTitle: "治理条款",
      termsDesc: "使用 ReviewGuard AI 即表示您确认 AI 生成的回复仅为建议处理。虽然我们的模型非常准确，但最终核实仍是用户的责任。严禁滥用系统发送垃圾信息。"
    },
    categories: {
      gym: "健身房 / 健身中心",
      restaurant: "餐厅 / 咖啡馆",
      salon: "沙龙 / 理发店",
      beauty: "美容院",
      retail: "零售 / 商店",
      cafe: "咖啡馆 / 面包店",
      hotel: "酒店 / 住宿",
      medical: "医疗 / 诊所",
      auto: "汽车 / 车库",
      edu: "教育 / 学院",
      other: "其他服务业"
    }
  },
  ko: {
    nav: { manage: "관리", vault: "보관함", strategy: "전략", profile: "프로필", logout: "로그아웃", signIn: "로그인", startFree: "지금 무료로 시작" },
    hero: { badge: "AI 평판 보호", title: "귀하의 비즈니스, 귀하의 자부심.", subtitle: "Google 리뷰에 자동 응답하세요. 부정적인 피드백을 성장 동력으로 바꾸세요.", cta: "지금 무료로 시작", trustedBy: "500개 이상의 지역 업체가 신뢰함" },
    features: { title: "왜 ReviewGuard인가?", subtitle: "상점 주인을 위한 전문 AI 툴을 한곳에서 만나보세요.", autoReplyTitle: "24/7 자동 응답", autoReplyDesc: "AI가 모든 리뷰에 즉각 응답합니다. AI가 처리하는 동안 알림을 받으세요.", strategyTitle: "전략 허브", strategyDesc: "지난 30일을 분석합니다. AI가 상점에 대한 고객의 의견을 분석합니다.", googleTitle: "Google 연결", googleDesc: "Google 비즈니스 프로필에 직접 연결하여 번거로움 없이 동기화하세요." },
    howItWorks: { title: "3단계 비즈니스 보호", step1Title: "로그인 및 설정", step1Desc: "Google로 로그인하고 상점 이름을 등록하세요.", step2Title: "AI 자동화 활성화", step2Desc: "클릭 한 번으로 자동 응답을 시작하세요.", step3Title: "매출 증대", step3Desc: "월간 AI 리포트를 읽고 약점을 강점으로 바꾸세요." },
    dashboard: { statusActive: "자동화 활성", deploymentTitle: "AI 배포 센터", deploymentDesc: "디지털 담당자가 온라인 상태입니다. 24시간 귀하의 평점을 보호합니다.", integrityTest: "시스템 무결성 테스트 실행", integrityToast: "테스트용 수동 모드", manualTitle: "수동 분석", manualLabel: "감성 추출", ratingLabel: "평점", inputLabel: "입력", inputPlaceholder: "고객의 리뷰를 여기에 붙여넣으세요...", executeCta: "분석 실행", totalProcessed: "처리된 총 리뷰 수", awaitingInput: "입력 대기 중", awaitingDesc: "여기에 분석 결과와 응답이 표시됩니다.", analyzing: "AI 전략 컨설팅 중...", sentimentLabel: "감성", suggestedReply: "제안된 전문 답변", actionSteps: "즉각적인 조치 단계", copyCta: "답변 복사" },
    settings: { title: "ID 허브", subtitle: "상점의 정보를 관리하세요.", bizName: "비즈니스 이름", bizCat: "비즈니스 카테고리", address: "주소", phone: "전화번호", website: "공식 웹사이트", updateCta: "프로필 저장", googleSync: "GMB 동기화", verified: "ID 인증됨", securityLevel: "보안 등급", encrypted: "암호화된 연결", zeroKnowledge: "영지식 증명 아키텍처로 관리되는 데이터." },
    setup: { title: "상점 설정", desc: "비즈니스에 대해 알려주세요.", finish: "설정 완료" },
    insights: {
      title: "전략 노드",
      subtitle: "크로스 배치 감성 인텔리전스",
      batchTab: "배치-10",
      weeklyTab: "주간 델타",
      monthlyTab: "월간 델타",
      lockedTitle: "배치 전략 잠김",
      lockedDesc: "트렌드 분석 및 전술적 수정 로드맵을 생성하려면 10개의 중요한 데이터 포인트를 수집하세요.",
      collectReviews: "중요 리뷰",
      generating: "거시적 트렌드 합성 중...",
      blueprint: "전략 블루프린트",
      synthesis: "포스트 크리티컬 합성",
      findings: "거시적 핵심 결과",
      roadmap: "전술적 로드맵",
      performanceScore: "성과 점수",
      outOf100: "100점 만점",
      sentimentMood: "감성 분위기",
      gaps: "주요 성과 격차",
      actionPlan: "AI 실행 계획",
      generateFresh: "새로운 분석 생성",
      noReport: "보고서를 찾을 수 없음",
      noReportDesc: "첫 번째 AI 기반 심층 분석을 생성하세요.",
      initializeSync: "동기화 초기화"
    },
    footer: {
      tagline: "최첨단 AI 감성 합성을 통해 지역 기업에 힘을 실어줍니다.",
      platform: "플랫폼",
      about: "정보",
      status: "시스템 상태",
      legal: "법률",
      privacy: "개인정보 보호정책",
      terms: "약관",
      security: "보안",
      contact: "문의",
      rights: "© 2026 REVIEWGUARD AI • ALL RIGHTS RESERVED",
      globalNode: "글로벌 노드: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "미션",
      aboutDesc: "ReviewGuard AI는 지역 기업의 경쟁력을 높이기 위해 구축되었습니다. 소상공인에게 대기업과 동일한 수준의 감성 지능 분석을 제공하여 모든 고객 리뷰가 전문적인 정밀도로 처리되도록 합니다.",
      privacyTitle: "개인정보 보호",
      privacyDesc: "데이터 주권을 최우선으로 생각합니다. ReviewGuard AI는 영지식 아키텍처에서 작동하므로 개인의 Google 비밀번호를 저장하지 않습니다. 분석에 필요한 GMB 데이터에만 액세스합니다.",
      termsTitle: "이용 약관",
      termsDesc: "ReviewGuard AI를 사용함으로써 귀하는 AI가 생성한 응답이 제안임을 인정합니다. 모델은 정확하지만 최종 확인 책임은 사용자에게 있습니다. 스팸 목적의 시스템 오용은 엄격히 금지됩니다."
    },
    categories: {
      gym: "체육관 / 피트니스 센터",
      restaurant: "레스토랑 / 카페",
      salon: "미용실 / 이발소",
      beauty: "뷰티 살롱",
      retail: "소매 / 상점",
      cafe: "카페 / 베이커리",
      hotel: "호텔 / 숙박",
      medical: "의료 / 클리닉",
      auto: "자동차 / 차고",
      edu: "교육 / 기관",
      other: "기타 서비스업"
    }
  },
  ta: {
    nav: { manage: "மேலாண்மை", vault: "பெட்டகம்", strategy: "வியூகம்", profile: "சுயவிவரம்", logout: "வெளியேறு", signIn: "உள்நுழை", startFree: "இலவசமாகத் தொடங்கு" },
    hero: { badge: "AI நற்பெயர் பாதுகாப்பு", title: "உங்கள் தொழில், உங்கள் பெருமை.", subtitle: "Google மதிப்புரைகளுக்குத் தானாகப் பதிலளிக்கவும். எதிர்மறையான கருத்துக்களை நேர்மறையானதாக மாற்றவும்.", cta: "இலவசமாகத் தொடங்கு", trustedBy: "500+ உள்ளூர் தொழில்களின் நம்பிக்கை" },
    features: { title: "ஏன் ReviewGuard-ஐத் தேர்ந்தெடுக்க வேண்டும்?", subtitle: "கடைக்காரர்களுக்கான தொழில்முறை AI கருவிகள் ஒரே இடத்தில்.", autoReplyTitle: "24/7 தானியங்கி பதில்", autoReplyDesc: "AI ஒவ்வொரு மதிப்பாய்விற்கும் உடனடி பதில்களை எழுதும்.", strategyTitle: "வியூகம் மையம்", strategyDesc: "கடந்த 30 நாட்களை பகுப்பாய்வு செய்யுங்கள்.", googleTitle: "கூகுள் இணைப்பு", googleDesc: "உங்கள் கூகுள் பிசினஸ் புரொஃபைலுடன் நேரடியாக இணைக்கவும்." },
    howItWorks: { title: "3 படிகளில் உங்கள் தொழிலைப் பாதுகாக்கவும்", step1Title: "உள்நுழைவு", step1Desc: "கூகுள் மூலம் உள்நுழைந்து கடையின் பெயரைச் சொல்லுங்கள்.", step2Title: "AI-ஐ இயக்கவும்", step2Desc: "ஒரே கிளிக்கில் தானியங்கி பதிலைத் தொடங்குங்கள்.", step3Title: "விற்பனையை அதிகரிக்கவும்", step3Desc: "AI அறிக்கைகளைப் படித்து வளர்ச்சியை அடையுங்கள்." },
    dashboard: { statusActive: "தானியங்கி செயல்பாடு", deploymentTitle: "AI மைய மையம்", deploymentDesc: "உங்கள் டிஜிட்டல் பிரதிநிதி ஆன்லைனில் உள்ளார்.", integrityTest: "கணினி சோதனையை இயக்கவும்", integrityToast: "சோதனை முறை", manualTitle: "கையேடு பகுப்பாய்வு", manualLabel: "உணர்வு பகுப்பாய்வு", ratingLabel: "மதிப்பீடு", inputLabel: "உள்ளீடு", inputPlaceholder: "வாடிக்கையாளர் சொற்களை இங்கே ஒட்டவும்...", executeCta: "பகுப்பாய்வு செய்", totalProcessed: "மொத்த மதிப்புரைகள்", awaitingInput: "உள்ளீட்டிற்காக காத்திருக்கிறது", awaitingDesc: "பதில்கள் இங்கே தோன்றும்.", analyzing: "AI பகுப்பாய்வு செய்கிறது...", sentimentLabel: "உணர்வு", suggestedReply: "பரிந்துரைக்கப்பட்ட பதில்", actionSteps: "உடனடி நடவடிக்கைகள்", copyCta: "பதிலை நகலெடு" },
    settings: { title: "அடையாள மையம்", subtitle: "உங்கள் கடையின் விபரங்களை நிர்வகிக்கவும்.", bizName: "தொழில் பெயர்", bizCat: "தொழில் வகை", address: "முகவரி", phone: "தொலைபேசி", website: "இணையதளம்", updateCta: "மாற்றங்களைச் சேமி", googleSync: "GMB உடன் இணைக்கவும்", verified: "அடையாளம் சரிபார்க்கப்பட்டது", securityLevel: "பாதுகாப்பு நிலை", encrypted: "மறையாக்கப்பட்ட இணைப்பு", zeroKnowledge: "பாதுகாப்பான தரவு மேலாண்மை." },
    setup: { title: "அமைப்புகளை முடிக்கவும்", desc: "உங்கள் தொழில் பற்றி சொல்லுங்கள்.", finish: "முடிக்கவும்" },
    insights: {
      title: "உத்தி மையம்",
      subtitle: "ஒட்டுமொத்த உணர்வு நுண்ணறிவு",
      batchTab: "தொகுப்பு-10",
      weeklyTab: "வாராந்திர மாற்றம்",
      monthlyTab: "மாதாந்திர மாற்றம்",
      lockedTitle: "தொகுப்பு உத்தி பூட்டப்பட்டது",
      lockedDesc: "போக்கு பகுப்பாய்வு மற்றும் தந்திரோபாய வரைபடத்தை உருவாக்க 10 முக்கியமான தரவு புள்ளிகளைச் சேகரிக்கவும்.",
      collectReviews: "முக்கியமான மதிப்புரைகள்",
      generating: "போக்கு பகுப்பாய்வு செய்யப்படுகிறது...",
      blueprint: "உத்தி வரைபடம்",
      synthesis: "பகுப்பாய்வு தொகுப்பு",
      findings: "முக்கிய கண்டுபிடிப்புகள்",
      roadmap: "நடவடிக்கை வரைபடம்",
      performanceScore: "செயல்திறன் மதிப்பெண்",
      outOf100: "100க்கு",
      sentimentMood: "உணர்வு நிலை",
      gaps: "செயல்திறன் இடைவெளிகள்",
      actionPlan: "AI செயல் திட்டம்",
      generateFresh: "புதிய பகுப்பாய்வை உருவாக்கு",
      noReport: "அறிக்கை கிடைக்கவில்லை",
      noReportDesc: "உங்கள் முதல் AI பகுப்பாய்வைத் தொடங்குங்கள்.",
      initializeSync: "ஒத்திசைவைத் தொடங்கு"
    },
    footer: {
      tagline: "நவீன AI மூலம் உள்ளூர் வணிகங்களை மேம்படுத்துதல்.",
      platform: "தளம்",
      about: "எங்களைப் பற்றி",
      status: "முறைமை நிலை",
      legal: "சட்டம்",
      privacy: "தனியுரிமை",
      terms: "விதிமுறைகள்",
      security: "பாதுகாப்பு",
      contact: "தொடர்பு",
      rights: "© 2026 REVIEWGUARD AI • அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
      globalNode: "உலகளாவிய முனை: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "அறப்பணி",
      aboutDesc: "ReviewGuard AI உள்ளூர் வணிகங்களுக்குச் சமமான வாய்ப்புகளை வழங்க உருவாக்கப்பட்டது. உலகளாவிய நிறுவனங்கள் பயன்படுத்தும் அதே உயர்நிலை உணர்வு நுண்ணறிவை நாங்கள் சிறு வணிக உரிமையாளர்களுக்கு வழங்குகிறோம்.",
      privacyTitle: "தனியுரிமைக் கேடயம்",
      privacyDesc: "உங்கள் தரவு இறையாண்மைக்கு நாங்கள் முன்னுரிமை அளிக்கிறோம். ReviewGuard AI ஜீரோ-நாলেட்ஜ் கட்டமைப்பில் செயல்படுகிறது, அதாவது உங்கள் தனிப்பட்ட கூகுள் கடவுச்சொற்களை நாங்கள் ஒருபோதும் சேமிப்பதில்லை.",
      termsTitle: "நிர்வாக விதிமுறைகள்",
      termsDesc: "ReviewGuard AI-யைப் பயன்படுத்துவதன் மூலம், AI உருவாக்கும் பதில்கள் வெறும் பரிந்துரைகள் என்பதை ஒப்புக்கொள்கிறீர்கள். இறுதி உறுதிப்படுத்தல் பயனரின் பொறுப்பாகும்."
    },
    categories: {
      gym: "ஜிம் / உடற்பயிற்சி மையம்",
      restaurant: "உணவகம் / கஃபே",
      salon: "சலூன் / முடிதிருத்தும் கடை",
      beauty: "பியூட்டி பார்லர்",
      other: "இதர சேவைத் தொழில்"
    }
  },
  te: {
    nav: { manage: "నిర్వహణ", vault: "వాల్ట్", strategy: "వ్యూహం", profile: "ప్రొఫైల్", logout: "లాగ్అవుట్", signIn: "సైన్ ఇన్", startFree: "ఉచితంగా ప్రారంభించండి" },
    hero: { badge: "AI ప్రతిష్ఠా రక్షణ", title: "మీ వ్యాపారం, మీ గర్వం.", subtitle: "Google రివ్యూలకు ఆటోమేటిక్‌గా సమాధానం ఇవ్వండి. నెగటివ్ ఫీడ్‌బ్యాక్‌ను పాజిటివ్ మార్పులుగా మార్చుకోండి.", cta: "ఉచితంగా ప్రారంభించండి", trustedBy: "500+ స్థానిక వ్యాపారాల నమ్మకం" },
    features: { title: "ReviewGuard ఎందుకు ఎంచుకోవాలి?", subtitle: "దుకాణదారుల కోసం ప్రొఫెషనల్ AI టూల్స్ ఒకే చోట.", autoReplyTitle: "24/7 ఆటో-రిప్లై", autoReplyDesc: "AI ప్రతి రివ్యూకి తక్షణ సమాధానం రాస్తుంది.", strategyTitle: "వ్యూహ కేంద్రం", strategyDesc: "గత 30 రోజుల విశ్లేషణ చేయండి.", googleTitle: "Google కనెక్షన్", googleDesc: "నేరుగా మీ Google బిజినెస్ ప్రొఫైల్‌కు లింక్ చేయండి." },
    howItWorks: { title: "3 దశల్లో మీ వ్యాపారాన్ని రక్షించుకోండి", step1Title: "లాగిన్ & సెటప్", step1Desc: "Google తో లాగిన్ అయ్యి మీ దుకాణం పేరు చెప్పండి.", step2Title: "AI ప్రారంభించండి", step2Desc: "ఒక్క క్లిక్‌తో ఆటోమేటిక్ రిప్లై ప్రారంభించండి.", step3Title: "అమ్మకాలు పెంచుకోండి", step3Desc: "AI రిపోర్ట్‌లను చదివి అభివృద్ధి చెందండి." },
    dashboard: { statusActive: "ఆటోమేషన్ యాక్టివ్", deploymentTitle: "AI సెంటరల్", deploymentDesc: "మీ డిజిటల్ ప్రతినిధి ఆన్‌లైన్‌లో ఉన్నారు.", integrityTest: "సిస్టమ్ టెస్ట్ చేయండి", integrityToast: "టెస్టింగ్ మోడ్", manualTitle: "మాన్యువల్ విశ్లేషణ", manualLabel: "భావోద్వేగ విశ్లేషణ", ratingLabel: "రేటింగ్", inputLabel: "ఇన్‌పుట్", inputPlaceholder: "కస్టమర్ మాటలను ఇక్కడ పేస్ట్ చేయండి...", executeCta: "విశ్లేషించు", totalProcessed: "మొత్తం రివ్యూలు", awaitingInput: "ఇన్‌పుట్ కోసం వేచి ఉంది", awaitingDesc: "సమాధానం ఇక్కడ కనిపిస్తుంది.", analyzing: "AI విశ్లేషిస్తోంది...", sentimentLabel: "భావం", suggestedReply: "సూచించిన సమాధానం", actionSteps: "తక్షణ చర్యలు", copyCta: "కాపీ చేయండి" },
    settings: { title: "గుర్తింపు కేంద్రం", subtitle: "మీ దుకాణం వివరాలను నిర్వహించండి.", bizName: "వ్యాపార పేరు", bizCat: "వ్యాపార విభాగం", address: "చిరునామా", phone: "ఫోన్", website: "వెబ్‌సైట్", updateCta: "సేవ్ చేయండి", googleSync: "GMB తో సింక్ చేయండి", verified: "గుర్తింపు ధృవీకరించబడింది", securityLevel: "భద్రతా స్థాయి", encrypted: "సురక్షిత కనెక్షన్", zeroKnowledge: "సురక్షిత డేటా నిర్వహణ." },
    setup: { title: "సెటప్ చేయండి", desc: "మీ వ్యాపారం గురించి చెప్పండి.", finish: "పూర్తి చేయండి" },
    insights: {
      title: "వ్యూహ కేంద్రం",
      subtitle: "సెంటిమెంట్ ఇంటెలిజెన్స్",
      batchTab: "బ్యాచ్-10",
      weeklyTab: "వారపు మార్పు",
      monthlyTab: "మొత్తం విశ్లేషణ",
      lockedTitle: "వ్యూహం లాక్ చేయబడింది",
      lockedDesc: "వ్యూహాన్ని రూపొందించడానికి 10 ముఖ్యమైన సమీక్షలను సేకరించండి.",
      collectReviews: "ముఖ్యమైన సమీక్షలు",
      generating: "విశ్లేషణ చేయబడుతోంది...",
      blueprint: "వ్యూహ పటం",
      synthesis: "విశ్లేషణ సారాంశం",
      findings: "ముఖ్య కనుగొనడాలు",
      roadmap: "చర్య ప్రణాళిక",
      performanceScore: "పనితీరు స్కోరు",
      outOf100: "100 కి",
      sentimentMood: "సెంటిమెంట్ మూడ్",
      gaps: "ముఖ్య లోపాలు",
      actionPlan: "AI చర్య ప్రణాళిక",
      generateFresh: "కొత్త విశ్లేషణను రూపొందించు",
      noReport: "నివేదిక కనుగొనబడలేదు",
      noReportDesc: "మీ మొదటి AI విశ్లేషణను ప్రారంభించండి.",
      initializeSync: "సింక్ ప్రారంభించు"
    },
    footer: {
      tagline: "AI సాంకేతికతతో స్థానిక వ్యాపారాలను బలోపేతం చేయడం.",
      platform: "ప్లాట్‌ఫారమ్",
      about: "మా గురించి",
      status: "సిస్టమ్ స్థితి",
      legal: "చట్టపరమైన",
      privacy: "గోప్యతా విధానం",
      terms: "షరతులు",
      security: "భద్రత",
      contact: "సంప్రదించండి",
      rights: "© 2026 REVIEWGUARD AI • సర్వ హక్కులు రిజల్వ్ చేయబడ్డాయి",
      globalNode: "గ్లోబల్ నోడ్: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "మా లక్ష్యం",
      aboutDesc: "స్థానిక వ్యాపారాలకు సమాన అవకాశాలను కల్పించడానికి ReviewGuard AI నిర్మించబడింది. గ్లోబల్ కార్పొరేషన్లు ఉపయోగించే అదే ఉన్నత స్థాయి సెంటిమెంట్ ఇంటెలిజెన్స్‌ను మేము చిన్న వ్యాపార యజమానులకు అందిస్తాము.",
      privacyTitle: "గోప్యతా రక్షణ",
      privacyDesc: "మేము మీ డేటా భద్రతకు ప్రాధాన్యత ఇస్తాము. ReviewGuard AI జీరో-నాలెడ్జ్ ఆర్కిటెక్చర్‌పై పనిచేస్తుంది, అంటే మేము మీ వ్యక్తిగత Google పాస్‌వర్డ్‌లను ఎప్పుడూ నిల్వ చేయము.",
      termsTitle: "పాలనా నిబంధనలు",
      termsDesc: "ReviewGuard AIని ఉపయోగించడం ద్వారా, AI రూపొందించిన సమాధానాలు కేవలం సూచనలు మాత్రమేనని మీరు అంగీకరిస్తున్నారు. తుది ధృవీకరణ వినియోగదారు బాధ్యత."
    },
    categories: {
      gym: "జిమ్ / ఫిట్‌నెస్ సెంటర్",
      restaurant: "రెస్టారెంట్ / కాఫీ షాప్",
      salon: "సెలూన్ / బార్బర్ షాప్",
      beauty: "బ్యూటీ పార్లర్",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "ఇతర సేవా పరిశ్రమ"
    }
  },
  gu: {
    nav: { manage: "મેનેજમેન્ટ", vault: "વોલ્ટ", strategy: "વ્યૂહરચના", profile: "પ્રોફાઇલ", logout: "લોગઆઉટ", signIn: "સાઇન ઇન", startFree: "ફ્રીમાં શરૂ કરો" },
    hero: { badge: "AI પ્રતિષ્ઠા સુરક્ષા", title: "તમારો વ્યવસાય, તમારો ગર્વ.", subtitle: "Google રિવ્યુનો ઓટો-જવાબ આપો. નેગેટિવ ફીડબેકને પોઝિટિવ ઇનસાઇટ્સમાં બદલો.", cta: "ફ્રીમાં શરૂ કરો", trustedBy: "500+ સ્થાનિક વેપારીઓનો વિશ્વાસ" },
    features: { title: "રિવ્યુગાર્ડ કેમ પસંદ કરવું?", subtitle: "દુકાનદારો માટે પ્રોફેશનલ AI ટૂલ્સ હવે એક જ જગ્યાએ.", autoReplyTitle: "24/7 ઓટો-રિપ્લાય", autoReplyDesc: "AI દરેક રિવ્યુનો તુરંત જવાબ લખશે.", strategyTitle: "વ્યૂહરચના હબ", strategyDesc: "છેલ્લા 30 દિવસનું વિશ્લેષણ કરો.", googleTitle: "ગુગલ કનેક્ટેડ", googleDesc: "સીધા તમારા ગુગલ બિઝનેસ પ્રોફાઇલ સાથે લિંક કરો." },
    howItWorks: { title: "3 સ્ટેપ્સમાં વ્યવસાય સુરક્ષિત કરો", step1Title: "લોગિન અને સેટઅપ", step1Desc: "ગુગલથી લોગિન કરો અને દુકાનનું નામ આપો.", step2Title: "AI સક્ષમ કરો", step2Desc: "એક ક્લિકમાં ઓટો-જવાબ શરૂ કરો.", step3Title: "વેચાણ વધારો", step3Desc: "AI રિપોર્ટ્સ વાંચો અને પ્રગતિ કરો." },
    dashboard: { statusActive: "ઓટોમેશન ચાલુ છે", deploymentTitle: "AI ડિપ્લોયમેન્ટ સેન્ટર", deploymentDesc: "તમારો ડિજિટલ પ્રતિનિધિ ઓનલાઈન છે.", integrityTest: "સિસ્ટમ ટેસ્ટ કરો", integrityToast: "ટેસ્ટિંગ મોડ", manualTitle: "મેન્યુઅલ વિશ્લેષણ", manualLabel: "ભાવના લિખિત", ratingLabel: "રેટિંગ", inputLabel: "ઇનપુટ", inputPlaceholder: "ગ્રાહકના શબ્દો અહીં પેસ્ટ કરો...", executeCta: "વિશ્લેષણ કરો", totalProcessed: "કુલ રિવ્યુ પ્રોસેસ્ડ", awaitingInput: "ઇનપુટની રાહ છે", awaitingDesc: "જવાબ અહીં દેખાશે.", analyzing: "AI વિશ્લેષણ કરી રહ્યું છે...", sentimentLabel: "ભાવના", suggestedReply: "સૂચવેલ જવાબ", actionSteps: "તાત્કાલિક પગલાં", copyCta: "જવાબ કોપી કરો" },
    settings: { title: "ઓળખ હબ", subtitle: "તમારી દુકાનની પ્રોફાઇલ મેનેજ કરો.", bizName: "વ્યવસાયનું નામ", bizCat: "શ્રેણી", address: "સરનામું", phone: "ફોન", website: "વેબસાઇટ", updateCta: "માહિતી સેવ કરો", googleSync: "GMB સાથે સિંક કરો", verified: "ઓળખ ચકાસાઈ ગઈ", securityLevel: "સુરક્ષા સ્તર", encrypted: "સુરક્ષિત કનેક્શન", zeroKnowledge: "ઝીરો-નોલેજ આર્કિટેક્ચર હેઠળ ડેટા સુરક્ષિત." },
    setup: { title: "સેટઅપ કરો", desc: "તમારા બિઝનેસ વિશે જણાવો.", finish: "સેટઅપ પૂર્ણ કરો" },
    insights: {
      title: "વ્યૂહરચના એકમ",
      subtitle: "ભાવના બુદ્ધિ વિશ્લેષણ",
      batchTab: "બેચ-10",
      weeklyTab: "સાપ્તાહિક ફેરફાર",
      monthlyTab: "માસિક ફેરફાર",
      lockedTitle: "વ્યૂહરચના લૉક છે",
      lockedDesc: "ટ્રેન્ડ વિશ્લેષણ અને રોડમેપ બનાવવા માટે 10 મહત્વપૂર્ણ ડેટા પોઈન્ટ્સ એકત્રિત કરો.",
      collectReviews: "મહત્વપૂર્ણ સમીક્ષાઓ",
      generating: "ટ્રેન્ડ વિશ્લેષણ થઈ રહ્યું છે...",
      blueprint: "વ્યૂહરચના બ્લુપ્રિન્ટ",
      synthesis: "ભાવના વિશ્લેષણ સંશ્લેષણ",
      findings: "મુખ્ય તારણો",
      roadmap: "એક્શન રોડમેપ",
      performanceScore: "પ્રદર્શન સ્કોર",
      outOf100: "100 માંથી",
      sentimentMood: "ભાવનાનો મૂડ",
      gaps: "મુખ્ય ખામીઓ",
      actionPlan: "AI એક્શન પ્લાન",
      generateFresh: "નવું વિશ્લેષણ બનાવો",
      noReport: "કોઈ રિપોર્ટ મળ્યો નથી",
      noReportDesc: "તમારો પ્રથમ AI વિશ્લેષણ શરૂ કરો.",
      initializeSync: "સિંક્રનાઇઝેશન શરૂ કરો"
    },
    footer: {
      tagline: "અદ્યતન AI દ્વારા સ્થાનિક વ્યવસાયોને સશક્ત બનાવવું.",
      platform: "પ્લેટફોર્મ",
      about: "અમારા વિશે",
      status: "સિસ્ટમ સ્ટેટસ",
      legal: "કાનૂની",
      privacy: "ગોપનીયતા નીતિ",
      terms: "શરતો",
      security: "સુરક્ષા",
      contact: "સંપર્ક",
      rights: "© 2026 REVIEWGUARD AI • સર્વાધિકાર સુરક્ષિત",
      globalNode: "ગ્લોબલ નોડ: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "અમારું લક્ષ્ય",
      aboutDesc: "ReviewGuard AI સ્થાનિક વ્યવસાયોને સમાન તકો આપવા માટે બનાવવામાં આવ્યું છે। અમે નાના વ્યવસાય માલિકોને તે જ ઉચ્ચ સ્તરીય સેન્ટિમેન્ટ ઇન્ટેલિજન્સ પ્રદાન કરીએ છીએ જે વૈશ્વિક કોર્પોરેશનો દ્વારા ઉપયોગમાં લેવાય છે।",
      privacyTitle: "ગોપનીયતા રક્ષણ",
      privacyDesc: "અમે તમારી ડેટા સાર્વભૌમત્વને પ્રાથમિકતા આપીએ છીએ। ReviewGuard AI ઝીરો-નોલેજ આર્કિટેક્ચર પર કાર્ય કરે છે, એટલે કે અમે તમારા વ્યક્તિગત Google પાસવર્ડ ક્યારેય સ્ટોર કરતા નથી।",
      termsTitle: "શાસનની શરતો",
      termsDesc: "ReviewGuard AI નો ઉપયોગ કરીને, તમે સ્વીકારો છો કે AI-નિર્મિત જવાબો સૂચનો છે। અંતિમ ચકાસણી વપરાશકર્તાની જવાબદારી છે।"
    },
    categories: {
      gym: "જીમ / ફિટનેસ સેન્ટર",
      restaurant: "રેસ્ટોરન્ટ / કાફે",
      salon: "સલૂન / હેર કટીંગ દુકાન",
      beauty: "બ્યુટી પાર્લર",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "અન્ય સેવા ઉદ્યોગ"
    }
  },
  ml: {
    nav: { manage: "മാനേജ്മെന്റ്", vault: "വോൾട്ട്", strategy: "തന്ത്രം", profile: "പ്രൊഫൈൽ", logout: "ലോഗൗട്ട്", signIn: "സൈൻ ഇൻ", startFree: "സൗജന്യമായി തുടങ്ങൂ" },
    hero: { badge: "AI സൽപ്പേര് സംരക്ഷണം", title: "നിങ്ങളുടെ ബിസിനസ്സ്, നിങ്ങളുടെ അഭിമാനം.", subtitle: "Google റിവ്യൂകൾക്ക് സ്വയമേവ മറുപടി നൽകുക. പോസിറ്റീവ് മാറ്റങ്ങൾ കൊണ്ടുവരിക.", cta: "സൗജന്യമായി തുടങ്ങൂ", trustedBy: "500+ പ്രാദേശിക ബിസിനസുകളുടെ വിശ്വാസം" },
    features: { title: "എന്തുകൊണ്ട് ReviewGuard?", subtitle: "കടക്കാർക്കായി പ്രൊഫഷണൽ AI ടൂളുകൾ ഒരിടത്ത്.", autoReplyTitle: "24/7 ഓട്ടോ റിപ്ലൈ", autoReplyDesc: "AI എല്ലാ റിവ്യൂവിനും ഉടൻ മറുപടി നൽകുന്നു.", strategyTitle: "സ്ട്രാറ്റജി ഹബ്", strategyDesc: "കഴിഞ്ഞ 30 ദിവസത്തെ വിശകലനം ചെയ്യുക.", googleTitle: "ഗൂഗിൾ കണക്റ്റഡ്", googleDesc: "നിങ്ങളുടെ ഗൂഗിൾ ബിസിനസ് പ്രൊഫൈലുമായി നേരിട്ട് ബന്ധിപ്പിക്കുക." },
    howItWorks: { title: "3 ഘട്ടങ്ങളിലൂടെ ബിസിനസ്സ് സംരക്ഷിക്കുക", step1Title: "ലോഗിൻ & സജ്ജീകരണം", step1Desc: "ഗൂഗിൾ ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.", step2Title: "AI സജ്ജമാക്കുക", step2Desc: "മറുപടികൾ സ്വയമേവ നൽകാൻ തുടങ്ങുക.", step3Title: "വിൽപന വർദ്ധിപ്പിക്കുക", step3Desc: "AI റിപ്പോർട്ടുകൾ വായിച്ച് വളർച്ച നേടുക." },
    dashboard: { statusActive: "ഓട്ടോമേഷൻ സജീവം", deploymentTitle: "AI സെന്റർ", deploymentDesc: "നിങ്ങളുടെ ഡിജിറ്റൽ പ്രതിനിധി ഓൺലൈനിലാണ്.", integrityTest: "സിസ്റ്റം പരിശോധിക്കുക", integrityToast: "ടെസ്റ്റിംഗ് മോഡ്", manualTitle: "മാനുവൽ വിശകലനം", manualLabel: "വികാര വിശകലനം", ratingLabel: "റേറ്റിംഗ്", inputLabel: "ഇൻപുട്ട്", inputPlaceholder: "ഉപഭോക്താവിന്റെ വാക്കുകൾ ഇവിടെ പെയ്സ്റ്റ് ചെയ്യുക...", executeCta: "വിശകലനം ചെയ്യുക", totalProcessed: "ആകെ റിവ്യൂകൾ", awaitingInput: "കാത്തിരിക്കുന്നു", awaitingDesc: "മറുപടി ഇവിടെ കാണാം.", analyzing: "AI വിശകലനം ചെയ്യുന്നു...", sentimentLabel: "വികാരം", suggestedReply: "നിർദ്ദേശിച്ച മറുപടി", actionSteps: "ഉടനടി ചെയ്യേണ്ട കാര്യങ്ങൾ", copyCta: "കോപ്പി ചെയ്യുക" },
    settings: { title: "ഐഡന്റിറ്റി ഹബ്", subtitle: "നിങ്ങളുടെ പ്രൊഫൈൽ നിയന്ത്രിക്കുക.", bizName: "സ്ഥാപനത്തിന്റെ പേര്", bizCat: "വിഭാഗം", address: "വിലാസം", phone: "ഫോൺ", website: "വെബ്സൈറ്റ്", updateCta: "സേവ് ചെയ്യുക", googleSync: "GMB-യുമായി ബന്ധിപ്പിക്കുക", verified: "തിരിച്ചറിയൽ പൂർത്തിയായി", securityLevel: "സുരക്ഷാ നില", encrypted: "സുരക്ഷിതമായ കണക്ഷൻ", zeroKnowledge: "സുരക്ഷിതമായ ഡാറ്റാ മാനേജ്മെന്റ്." },
    setup: { title: "തുടങ്ങാം", desc: "നിങ്ങളുടെ ബിസിനസ്സിനെക്കുറിച്ച് പറയൂ.", finish: "പൂർത്തിയാക്കുക" },
    insights: {
      title: "സ്ട്രാറ്റജി നോഡ്",
      subtitle: "സെന്റിമെന്റ് ഇന്റലിജൻസ്",
      batchTab: "ബാച്ച്-10",
      weeklyTab: "പ്രതിവാര മാറ്റം",
      monthlyTab: "പ്രതിമാസ മാറ്റം",
      lockedTitle: "സ്ട്രാറ്റജി ലോക്ക് ചെയ്തിരിക്കുന്നു",
      lockedDesc: "വിശകലനത്തിനായി 10 പ്രധാന റിവ്യൂകൾ ശേഖരിക്കുക.",
      collectReviews: "പ്രധാന റിവ്യൂകൾ",
      generating: "വിശകലനം ചെയ്യുന്നു...",
      blueprint: "സ്ട്രാറ്റജി ബ്ലൂപ്രിന്റ്",
      synthesis: "വിശകലന സംഗ്രഹം",
      findings: "പ്രധാന കണ്ടെത്തലുകൾ",
      roadmap: "നടപടിക്രമങ്ങൾ",
      performanceScore: "പ്രകടനം സ്കോർ",
      outOf100: "100-ൽ",
      sentimentMood: "സെന്റിമെന്റ് മൂഡ്",
      gaps: "പ്രധാന പോരായ്മകൾ",
      actionPlan: "AI ആക്ഷൻ പ്ലാൻ",
      generateFresh: "പുതിയ വിശകലനം നടത്തുക",
      noReport: "റിപ്പോർട്ട് ലഭ്യമല്ല",
      noReportDesc: "നിങ്ങളുടെ ആദ്യത്തെ AI വിശകലനം ആരംഭിക്കുക.",
      initializeSync: "സമന്വയം തുടങ്ങുക"
    },
    footer: {
      tagline: "അത്യാധുനിക AI വഴി പ്രാദേശിക ബിസിനസ്സുകളെ ശാക്തീകരിക്കുന്നു.",
      platform: "പ്ലാറ്റ്‌ഫോം",
      about: "ഞങ്ങളെക്കുറിച്ച്",
      status: "സിസ്റ്റം സ്റ്റാറ്റസ്",
      legal: "നിയമപരം",
      privacy: "സ്വകാര്യതാ നയം",
      terms: "നിബന്ധനകൾ",
      security: "സുരക്ഷ",
      contact: "ബന്ധപ്പെടുക",
      rights: "© 2026 REVIEWGUARD AI • എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം",
      globalNode: "ഗ്ലോബൽ നോഡ്: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "ഞങ്ങളുടെ ദൗത്യം",
      aboutDesc: "പ്രാദേശിക ബിസിനസ്സുകൾക്ക് തുല്യ അവസരങ്ങൾ നൽകുന്നതിനായാണ് ReviewGuard AI നിർമ്മിച്ചിരിക്കുന്നത്. ആഗോള കോർപ്പറേഷനുകൾ ഉപയോഗിക്കുന്ന അതേ ഉയർന്ന തലത്തിലുള്ള സെന്റിമെന്റ് ഇന്റലിജൻസ് ഞങ്ങൾ ചെറുകിട ബിസിനസ്സ് ഉടമകൾക്ക് നൽകുന്നു.",
      privacyTitle: "സ്വകാര്യതാ സംരക്ഷണം",
      privacyDesc: "നിങ്ങളുടെ ഡാറ്റാ സ്വകാര്യതയ്ക്ക് ഞങ്ങൾ മുൻഗണന നൽകുന്നു. ReviewGuard AI സീറോ-നോളജ് ആർക്കിടെക്ചറിലാണ് പ്രവർത്തിക്കുന്നത്, അതായത് നിങ്ങളുടെ സ്വകാര്യ ഗൂഗിൾ പാസ്‌വേഡുകൾ ഞങ്ങൾ ഒരിക്കലും ശേഖരിക്കില്ല.",
      termsTitle: "ഭരണ നിബന്ധനകൾ",
      termsDesc: "ReviewGuard AI ഉപയോഗിക്കുന്നതിലൂടെ, AI സൃഷ്ടിക്കുന്ന മറുപടികൾ നിർദ്ദേശങ്ങൾ മാത്രമാണെന്ന് നിങ്ങൾ അംഗീകരിക്കുന്നു. അന്തിമ പരിശോധന ഉപയോക്താവിന്റെ ഉത്തരവാദിത്തമാണ്."
    },
    categories: {
      gym: "ജിം / ഫിറ്റ്നസ് സെന്റർ",
      restaurant: "റെസ്റ്റോറന്റ് / കഫേ",
      salon: "സലൂൺ / ബാർബർ ഷോപ്പ്",
      beauty: "ബ്യൂട്ടി പാർലർ",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "മറ്റ് സേവന മേഖലകൾ"
    }
  },
  ne: {
    nav: { manage: "व्यवस्थापन", vault: "भण्डार", strategy: "रणनीति", profile: "प्रोफाइल", logout: "लगआउट", signIn: "साइन इन", startFree: "निशुल्क सुरु गर्नुहोस्" },
    hero: { badge: "AI प्रतिष्ठा सुरक्षा", title: "तपाईंको व्यवसाय, तपाईंको गर्व।", subtitle: "Google समीक्षाको स्वचालित जवाफ दिनुहोस्। नकारात्मक प्रतिक्रियालाई सुधारमा बदल्नुहोस्।", cta: "निशुल्क सुरु गर्नुहोस्", trustedBy: "५००+ स्थानीय व्यवसायीको विश्वास" },
    features: { title: "ReviewGuard किन रोज्ने?", subtitle: "पसलहरूको लागि व्यावसायिक AI उपकरणहरू अब एकै ठाउँमा।", autoReplyTitle: "24/7 स्वचालित जवाफ", autoReplyDesc: "AI ले प्रत्येक समीक्षाको लागि तुरुन्तै जवाफ लेख्छ।", strategyTitle: "रणनीति हब", strategyDesc: "विगत ३० दिनको विश्लेषण गर्नुहोस्।", googleTitle: "गुगल कनेक्टेड", googleDesc: "तपाईंको गुगल बिजनेस प्रोफाइलसँग प्रत्यक्ष जोड्नुहोस्।" },
    howItWorks: { title: "३ चरणमा व्यवसाय सुरक्षित गर्नुहोस्", step1Title: "लगइन र सेटअप", step1Desc: "गुगलबाट लगइन गर्नुहोस् र पसलको नाम दिनुहोस्.", step2Title: "AI सक्षम गर्नुहोस्", step2Desc: "एक क्लिकमा स्वचालित जवाफ सुरु गर्नुहोस्।", step3Title: "बिक्री बढाउनुहोस्", step3Desc: "AI रिपोर्टहरू पढ्नुहोस् र प्रगति गर्नुहोस्।" },
    dashboard: { statusActive: "स्वचालन सक्रिय", deploymentTitle: "AI परिचालन केन्द्र", deploymentDesc: "तपाईंको डिजिटल प्रतिनिधि अनलाइन छ।", integrityTest: "प्रणाली परीक्षण गर्नुहोस्", integrityToast: "परीक्षण मोड", manualTitle: "म्यानुअल विश्लेषण", manualLabel: "भावना विश्लेषण", ratingLabel: "रेटिङ", inputLabel: "इनपुट", inputPlaceholder: "ग्राहकका शब्दहरू यहाँ टाँस्नुहोस्...", executeCta: "विश्लेषण गर्नुहोस्", totalProcessed: "कुल समीक्षा विश्लेषण", awaitingInput: "प्रतीक्षा गर्दै", awaitingDesc: "जवाफ यहाँ देखिनेछ।", analyzing: "AI विश्लेषण गर्दैछ...", sentimentLabel: "भावना", suggestedReply: "सुझाव दिइएको जवाफ", actionSteps: "तुरुन्तै चाल्नु पर्ने कदम", copyCta: "जवाफ कपी गर्नुहोस्" },
    settings: { title: "पहिचान हब", subtitle: "आफ्नो पसलको प्रोफाइल व्यवस्थापन गर्नुहोस्।", bizName: "व्यवसायको नाम", bizCat: "कोटि", address: "ठेगाना", phone: "फोन", website: "वेबसाइट", updateCta: "बचत गर्नुहोस्", googleSync: "GMB सँग सिंक गर्नुहोस्", verified: "पहिचान प्रमाणित", securityLevel: "सुरक्षा स्तर", encrypted: "सुरक्षित जडान", zeroKnowledge: "डाटा सुरक्षित व्यवस्थापन।" },
    setup: { title: "सेटअप गर्नुहोस्", desc: "आफ्नो व्यवसाय बारे बताउनुहोस्।", finish: "पूरा गर्नुहोस्" },
    insights: {
      title: "रणनीति हब",
      subtitle: "सेंटीमेन्ट इन्टेलिजेन्स",
      batchTab: "ब्याच-१०",
      weeklyTab: "साप्ताहिक परिवर्तन",
      monthlyTab: "मासिक परिवर्तन",
      lockedTitle: "रणनीति लक गरिएको छ",
      lockedDesc: "ट्रेंड विश्लेषणको लागि १० महत्वपूर्ण डाटा पोइन्टहरू संकलन गर्नुहोस्।",
      collectReviews: "महत्वपूर्ण समीक्षाहरू",
      generating: "तथ्यांक विश्लेषण हुँदैछ...",
      blueprint: "रणनीति ब्लुप्रिन्ट",
      synthesis: "विशेष विश्लेषण",
      findings: "प्रमुख निष्कर्षहरू",
      roadmap: "कार्य योजना",
      performanceScore: "प्रदर्शन स्कोर",
      outOf100: "१०० मध्ये",
      sentimentMood: "भावनाको अवस्था",
      gaps: "प्रमुख कमजोरीहरू",
      actionPlan: "AI कार्य योजना",
      generateFresh: "नयाँ विश्लेषण तयार गर्नुहोस्",
      noReport: "रिपोर्ट भेटिएन",
      noReportDesc: "आफ्नो पहिलो AI विश्लेषण सुरु गर्नुहोस्।",
      initializeSync: "सिंक सुरु गर्नुहोस्"
    },
    footer: {
      tagline: "आधुनिक AI मार्फत स्थानीय व्यवसायहरूलाई सशक्त बनाउँदै।",
      platform: "प्ल्याटफर्म",
      about: "हाम्रो बारेमा",
      status: "प्रणाली अवस्था",
      legal: "कानूनी",
      privacy: "गोपनीयता नीति",
      terms: "सर्तहरू",
      security: "सुरक्षा",
      contact: "सम्पर्क",
      rights: "© २०२६ REVIEWGUARD AI • सर्वाधिकार सुरक्षित",
      globalNode: "ग्लोबल नोड: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "हाम्रो मिशन",
      aboutDesc: "स्थानीय व्यवसायहरूलाई सशक्त बनाउन ReviewGuard AI निर्माण गरिएको हो। हामी साना व्यवसायीहरूलाई त्यही उच्च-स्तरीय सेंटीमेन्ट इन्टेलिजेन्स प्रदान गर्दछौं जुन विश्वव्यापी निगमहरूले प्रयोग गर्छन्।",
      privacyTitle: "गोपनीयता सुरक्षा",
      privacyDesc: "हामी तपाईंको डाटा सार्वभौमिकतालाई प्राथमिकता दिन्छौं। ReviewGuard AI जिरो-नलेज आर्किटेक्चरमा चल्छ, जसको अर्थ हामी तपाईंको व्यक्तिगत Google पासवर्डहरू कहिल्यै भण्डार गर्दैनौं।",
      termsTitle: "शासन सर्तहरू",
      termsDesc: "ReviewGuard AI प्रयोग गरेर, तपाईं स्वीकार गर्नुहुन्छ कि AI-निर्मित प्रतिक्रियाहरू सुझावहरू हुन्। अन्तिम प्रमाणीकरण प्रयोगकर्ताको जिम्मेवारी हो।"
    },
    categories: {
      gym: "जिम / फिटनेस सेंटर",
      restaurant: "रेस्टोरेंट / कैफे",
      salon: "सैलून / नाई की दुकान",
      beauty: "ब्यूटी पार्लर",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "अन्य सेवा उद्योग"
    }
  },
  mr: {
    nav: { manage: "व्यवस्थापन", vault: "संग्रह", strategy: "रणनीति", profile: "प्रोफाइल", logout: "लॉगआउट", signIn: "साइन इन", startFree: "मोफत सुरू करा" },
    hero: { badge: "AI प्रतिष्ठा सुरक्षा", title: "तुमचा व्यवसाय, तुमचा अभिमान.", subtitle: "Google रिव्ह्यूला स्वयंचलित उत्तर द्या. व्यवसाय वाढवण्यासाठी AI चा वापर करा.", cta: "मोफत सुरू करा", trustedBy: "५००+ स्थानिक व्यावसायिकांचा विश्वास" },
    features: { title: "ReviewGuard का निवडावे?", subtitle: "दुकानदारांसाठी प्रोफेशनल AI टूल्स आता एकाच ठिकाणी.", autoReplyTitle: "24/7 ऑटो-रिप्लाय", autoReplyDesc: "AI प्रत्येक रिव्ह्यूचे त्वरित उत्तर लिहितो.", strategyTitle: "रणनीति हब", strategyDesc: "गेल्या ३० दिवसांचे विश्लेषण करा.", googleTitle: "गुगल कनेक्टेड", googleDesc: "तुमच्या गुगल बिझनेस प्रोफाइलशी थेट लिंक करा." },
    howItWorks: { title: "३ सोप्या स्टेप्समध्ये व्यवसाय सुरक्षित करा", step1Title: "लॉगिन आणि सेटअप", step1Desc: "गुगलने लॉगिन करा आणि दुकानाचे नाव सांगा.", step2Title: "AI सक्षम करा", step2Desc: "एका क्लिकमध्ये ऑटो-रिप्लाय सुरू करा.", step3Title: "विक्री वाढवा", step3Desc: "AI रिपोर्ट वाचा आणि सुधारणा करा।" },
    dashboard: { statusActive: "ऑटोमेशन सक्रिय", deploymentTitle: "AI डिप्लॉयमेंट सेंटर", deploymentDesc: "तुमचा डिजिटल प्रतिनिधी ऑनलाइन आहे.", integrityTest: "प्रणाली तपासणी करा", integrityToast: "टेस्टिंग मोड", manualTitle: "मॅन्युअल विश्लेषण", manualLabel: "भावना विश्लेषण", ratingLabel: "रेटिंग", inputLabel: "इनपुट", inputPlaceholder: "ग्राहकाचे शब्द येथे पेस्ट करा...", executeCta: "विश्लेषण करा", totalProcessed: "एकूण विश्लेषण", awaitingInput: "प्रतीक्षा करत आहे", awaitingDesc: "उत्तर येथे दिसेल.", analyzing: "AI विश्लेषण करत आहे...", sentimentLabel: "भावना", suggestedReply: "सुचवलेले उत्तर", actionSteps: "त्वरीत पावले", copyCta: "उत्तर कॉपी करा" },
    settings: { title: "ओळख हब", subtitle: "दुकानाची प्रोफाइल व्यवस्थापित करा.", bizName: "व्यवसायाचे नाव", bizCat: "श्रेणी", address: "पत्ता", phone: "फोन", website: "वेबसाइट", updateCta: "सेव्ह करा", googleSync: "GMB सह सिंक करा", verified: "ओळख सत्यापित", securityLevel: "सुरक्षा स्तर", encrypted: "सुरक्षित कनेक्शन", zeroKnowledge: "डेटा सुरक्षित व्यवस्थापन।" },
    setup: { title: "सेटअप करा", desc: "तुमच्या व्यवसायाबद्दल सांगा.", finish: "पूर्ण करा" },
    insights: {
      title: "रणनीति केंद्र",
      subtitle: "सेंटीमेंट इंटेलिजेंस",
      batchTab: "बॅच-१०",
      weeklyTab: "साप्ताहिक बदल",
      monthlyTab: "मासिक बदल",
      lockedTitle: "रणनीति लॉक आहे",
      lockedDesc: "ट्रेंड विश्लेषणासाठी १० महत्वाचे डेटा पॉइंट्स गोळा करा।",
      collectReviews: "महत्वाचे रिव्ह्यू",
      generating: "विश्लेषण सुरू आहे...",
      blueprint: "रणनीति ब्लुप्रिंट",
      synthesis: "विशेष विश्लेषण",
      findings: "प्रमुख निष्कर्ष",
      roadmap: "ऍक्शन रोडमॅप",
      performanceScore: "कामगिरी स्कोअर",
      outOf100: "१०० पैकी",
      sentimentMood: "भावनेचा मूड",
      gaps: "मुख्य त्रुटी",
      actionPlan: "AI ऍक्शन प्लॅन",
      generateFresh: "नवीन विश्लेषण तयार करा",
      noReport: "रिपोर्ट सापडला नाही",
      noReportDesc: "तुमचे पहिले AI विश्लेषण सुरू करा।",
      initializeSync: "सिंक सुरू करा"
    },
    footer: {
      tagline: "अत्याधुनिक AI द्वारे स्थानिक व्यवसायांना सक्षम करणे.",
      platform: "प्लॅटफॉर्म",
      about: "आमच्याबद्दल",
      status: "सिस्टम स्थिती",
      legal: "कायदेशीर",
      privacy: "गोपनीयता धोरण",
      terms: "अटी",
      security: "सुरक्षा",
      contact: "संपर्क",
      rights: "© २०२६ REVIEWGUARD AI • सर्व हक्क सुरक्षित",
      globalNode: "ग्लोबल नोड: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "आमचे ध्येय",
      aboutDesc: "ReviewGuard AI स्थानिक व्यवसायांना सक्षम करण्यासाठी तयार करण्यात आले आहे. आम्ही छोट्या व्यवसाय मालकांना तीच उच्च-स्तरीय सेंटीमेंट इंटेलिजेंस प्रदान करतो जी जागतिक कंपन्या वापरतात।",
      privacyTitle: "गोपनीयता कवच",
      privacyDesc: "आम्ही तुमच्या डेटाच्या स्वायत्ततेला प्राधान्य देतो. ReviewGuard AI झिरो-नॉलेज आर्किटेक्चरवर कार्य करते, याचा अर्थ आम्ही तुमचे वैयक्तिक Google पासवर्ड कधीही सेव्ह करत नाही।",
      termsTitle: "प्रशासकीय अटी",
      termsDesc: "ReviewGuard AI वापरून, तुम्ही मान्य करता की AI-व्युत्पन्न उत्तरे केवळ सूचना आहेत। अंतिम पडताळणी करणे ही वापरकर्त्याची जबाबदारी आहे।"
    },
    categories: {
      gym: "जिम / फिटनेस सेंटर",
      restaurant: "रेस्टॉरंट / कॅफे",
      salon: "सॅलून / न्हाव्याचे दुकान",
      beauty: "ब्युटी पार्लर",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "इतर सेवा उद्योग"
    }
  },
  kn: {
    nav: { manage: "ನಿರ್ವಹಣೆ", vault: "ತಿಜೋರಿ", strategy: "ತಂತ್ರ", profile: "ಪ್ರೊಫೈಲ್", logout: "ಲಾಗ್ ಔಟ್", signIn: "ಸೈನ್ ಇನ್", startFree: "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ" },
    hero: { badge: "AI ಪ್ರತಿಷ್ಠೆ ರಕ್ಷಣೆ", title: "ನಿಮ್ಮ ವ್ಯವಹಾರ, ನಿಮ್ಮ ಹೆಮ್ಮೆ.", subtitle: "Google ವಿಮರ್ಶೆಗಳಿಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಿ. ವ್ಯವಹಾರವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ.", cta: "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ", trustedBy: "500+ ಸ್ಥಳೀಯ ಉದ್ಯಮಿಗಳ ನಂಬಿಕೆ" },
    features: { title: "ReviewGuard ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?", subtitle: "ದುಕಾನ್ದಾರರಿಗಾಗಿ ವೃತ್ತಿಪರ AI ಉಪಕರಣಗಳು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.", autoReplyTitle: "24/7 ಆಟೋ-ರಿಪ್ಲೈ", autoReplyDesc: "AI ಪ್ರತಿಯೊಂದು ವಿಮರ್ಶೆಗೂ ತಕ್ಷಣದ ಉತ್ತರವನ್ನು ಬರೆಯುತ್ತದೆ.", strategyTitle: "ತಂತ್ರ ಕೇಂದ್ರ", strategyDesc: "ಕಳೆದ 30 ದಿನಗಳ ವಿಶ್ಲೇಷಣೆ ಮಾಡಿ.", googleTitle: "ಗೂಗಲ್ ಸಂಪರ್ಕ", googleDesc: "ಸೀದಾ ನಿಮ್ಮ ಗೂಗಲ್ ಬಿಸಿನೆಸ್ ಪ್ರೊಫೈಲ್‌ಗೆ ಲಿಂಕ್ ಮಾಡಿ." },
    howItWorks: { title: "3 ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ರಕ್ಷಿಸಿ", step1Title: "ಲಾಗಿನ್ ಮತ್ತು ಸೆಟಪ್", step1Desc: "ಗೂಗಲ್ ಬಳಸಿ ಲಾಗಿನ್ ಆಗಿ ಅಂಗಡಿಯ ಹೆಸರು ನೀಡಿ.", step2Title: "AI ಸಕ್ರಿಯಗೊಳಿಸಿ", step2Desc: "ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ ಉತ್ತರವನ್ನು ಪ್ರಾರಂಭಿಸಿ.", step3Title: "ಮಾರಾಟ ಹೆಚ್ಚಿಸಿ", step3Desc: "AI ವರದಿಗಳನ್ನು ಓದಿ ಮತ್ತು ಪ್ರಗತಿ ಸಾಧಿಸಿ." },
    dashboard: { statusActive: "ಆಟೋಮೇಷನ್ ಸಕ್ರಿಯ", deploymentTitle: "AI ನಿಯೋಜನಾ ಕೇಂದ್ರ", deploymentDesc: "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಪ್ರತಿನಿಧಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿದ್ದಾರೆ.", integrityTest: "ಸಿಸ್ಟಮ್ ಪರೀಕ್ಷೆ ಮಾಡಿ", integrityToast: "ಪರೀಕ್ಷಾ ಮೋಡ್", manualTitle: "ಮ್ಯಾನುಯಲ್ ವಿಶ್ಲೇಷಣೆ", manualLabel: "ಭಾವನೆ ವಿಶ್ಲೇಷಣೆ", ratingLabel: "ರೇಟಿಂಗ್", inputLabel: "ಇನ್ಪುಟ್", inputPlaceholder: "ಗ್ರಾಹಕರ ಮಾತುಗಳನ್ನು ಇಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ...", executeCta: "ವಿಶ್ಲೇಷಿಸು", totalProcessed: "ಒಟ್ಟು ವಿಮರ್ಶೆಗಳು", awaitingInput: "ಕಾಯಲಾಗುತ್ತಿದೆ", awaitingDesc: "ಉತ್ತರವು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ.", analyzing: "AI ವಿಶ್ಲೇಷಣೆ ಮಾಡುತ್ತಿದೆ...", sentimentLabel: "ಭಾವನೆ", suggestedReply: "ಸೂಚಿಸಿದ ಉತ್ತರ", actionSteps: "ತಕ್ಷಣದ ಕ್ರಮಗಳು", copyCta: "ನಕಲಿಸಿ" },
    settings: { title: "ಗುರುತಿನ ಕೇಂದ್ರ", subtitle: "ನಿಮ್ಮ ಅಂಗಡಿಯ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಿಸಿ.", bizName: "ವ್ಯವಹಾರದ ಹೆಸರು", bizCat: "ವರ್ಗ", address: "ವಿಳಾಸ", phone: "ಫೋನ್", website: "ವೆಬ್ ಸೈಟ್", updateCta: "ಉಳಿಸಿ", googleSync: "GMB ಗೆ ಸಂಪರ್ಕಿಸಿ", verified: "ಗುರುತು ದೃಢೀಕರಿಸಲಾಗಿದೆ", securityLevel: "ಭದ್ರತಾ ಮಟ್ಟ", encrypted: "ಸುರಕ್ಷಿತ ಸಂಪರ್ಕ", zeroKnowledge: "ಸುರಕ್ಷಿತ ಡೇಟಾ ನಿರ್ವಹಣೆ." },
    setup: { title: "ಸಿದ್ಧತೆ ಪೂರ್ಣಗೊಳಿಸಿ", desc: "ನಿಮ್ಮ ವ್ಯವಹಾರದ ಬಗ್ಗೆ ತಿಳಿಸಿ.", finish: "ಪೂರ್ಣಗೊಳಿಸಿ" },
    insights: {
      title: "ತಂತ್ರ ಕೇಂದ್ರ",
      subtitle: "ಸೆಂಟಿಮೆಂಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್",
      batchTab: "ಬ್ಯಾಚ್-10",
      weeklyTab: "ಸಾಪ್ತಾಹಿಕ ಬದಲಾವಣೆ",
      monthlyTab: "ಮಾಸಿಕ ಬದಲಾವಣೆ",
      lockedTitle: "ತಂತ್ರ ಲಾಕ್ ಆಗಿದೆ",
      lockedDesc: "ವಿಶ್ಲೇಷಣೆಗಾಗಿ 10 ಪ್ರಮುಖ ವಿಮರ್ಶೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ.",
      collectReviews: "ಪ್ರಮುಖ ವಿಮರ್ಶೆಗಳು",
      generating: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      blueprint: "ತಂತ್ರದ ನೀಲಿನಕ್ಷೆ",
      synthesis: "ವಿಶ್ಲೇಷಣಾ ಸಾರಾಂಶ",
      findings: "ಪ್ರಮುಖ ಆವಿಷ್ಕಾರಗಳು",
      roadmap: "ಕಾರ್ಯ ಯೋಜನೆ",
      performanceScore: "ಕಾರ್ಯಕ್ಷಮತೆಯ ಸ್ಕೋರ್",
      outOf100: "100 ರಲ್ಲಿ",
      sentimentMood: "ಭಾವನೆಯ ಮೂಡ್",
      gaps: "ಪ್ರಮುಖ ನ್ಯೂನತೆಗಳು",
      actionPlan: "AI ಕ್ರಿಯಾ ಯೋಜನೆ",
      generateFresh: "ಹೊಸ ವಿಶ್ಲೇಷಣೆಯನ್ನು ರಚಿಸಿ",
      noReport: "ವರದಿ ಕಂಡುಬಂದಿಲ್ಲ",
      noReportDesc: "ನಿಮ್ಮ ಮೊದಲ AI ವಿಶ್ಲೇಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ.",
      initializeSync: "ಸಿಂಕ್ ಪ್ರಾರಂಭಿಸಿ"
    },
    footer: {
      tagline: "ಅತ್ಯಾಧುನಿಕ AI ಮೂಲಕ ಸ್ಥಳೀಯ ಉದ್ಯಮಗಳಿಗೆ ಶಕ್ತಿ ತುಂಬುವುದು.",
      platform: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
      about: "ನಮ್ಮ ಬಗ್ಗೆ",
      status: "ಸಿಸ್ಟಮ್ ಸ್ಥಿತಿ",
      legal: "ಕಾನೂನು",
      privacy: "ಗೌಪ್ಯತಾ ನೀತಿ",
      terms: "ನಿಯಮಗಳು",
      security: "ಭದ್ರತೆ",
      contact: "ಸಂಪರ್ಕ",
      rights: "© 2026 REVIEWGUARD AI • ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
      globalNode: "ಗ್ಲೋಬಲ್ ನೋಡ್: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "ನಮ್ಮ ಗುರಿ",
      aboutDesc: "ಸ್ಥಳೀಯ ವ್ಯವಹಾರಗಳಿಗೆ ಸಮಾನ ಅವಕಾಶಗಳನ್ನು ನೀಡಲು ReviewGuard AI ಅನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ. ಜಾಗತಿಕ ಕಂಪನಿಗಳು ಬಳಸುವ ಅದೇ ಉನ್ನತ ಮಟ್ಟದ ಸೆಂಟಿಮೆಂಟ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಅನ್ನು ನಾವು ಸಣ್ಣ ವ್ಯಾಪಾರ ಮಾಲೀಕರಿಗೆ ನೀಡುತ್ತೇವೆ।",
      privacyTitle: "ಗೌಪ್ಯತೆ ರಕ್ಷಣೆ",
      privacyDesc: "ನಿಮ್ಮ ಭದ್ರತೆಗೆ ನಾವು ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ. ReviewGuard AI ಝೀರೋ-ನಾಲೆಡ್ಜ್ ಆರ್ಕಿಟೆಕ್ಚರ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ಅಂದರೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಗೂಗಲ್ ಪಾಸ್‌ವರ್ಡ್್ಗಳನ್ನು ನಾವು ಎಂದಿಗೂ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ।",
      termsTitle: "ಆಡಳಿತದ ನಿಯಮಗಳು",
      termsDesc: "ReviewGuard AI ಅನ್ನು ಬಳಸುವ ಮೂಲಕ, AI ರಚಿಸಿದ ಪ್ರತಿಕ್ರಿಯೆಗಳು ಕೇವಲ ಸಲಹೆಗಳಾಗಿವೆ ಎಂದು ನೀವು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೀರಿ. ಅಂತಿಮ ಪರಿಶೀಲನೆಯು ಬಳಕೆದಾರರ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ।"
    },
    categories: {
      gym: "ಜಿಮ್ / ಫಿಟ್ನೆಸ್ ಸೆಂಟರ್",
      restaurant: "ರೆಸ್ಟೋರೆಂಟ್ / ಕೆಫೆ",
      salon: "ಸಲೂನ್ / ಕ್ಷೌರದ ಅಂಗಡಿ",
      beauty: "ಬ್ಯೂಟಿ ಪಾರ್ಲರ್",
      other: "ಇತರ ಸೇವಾ ಉದ್ಯಮ"
    }
  },
  mai: {
    nav: { manage: "प्रबंधन", vault: "संग्रह", strategy: "रणनीति", profile: "प्रोफाइल", logout: "लॉगआउट", signIn: "साइन इन", startFree: "निःशुल्क शुरू करू" },
    hero: { badge: "AI प्रतिष्ठा सुरक्षा", title: "अहाँक बिजनेस, अहाँक इज्जत।", subtitle: "Google रिव्यु कें स्वतः जवाब दियौक। बिजनेस बढ़ावय कें लेल AI कें उपयोग करू।", cta: "निःशुल्क शुरू करू", trustedBy: "५००+ स्थानीय व्यवसायी कें भरोसा" },
    features: { title: "ReviewGuard किया चुनब?", subtitle: "दुकानदार सभ कें लेल प्रोफेशनल AI टूल्स आब एकहि ठां।", autoReplyTitle: "24/7 ऑटो-जवाब", autoReplyDesc: "AI हर रिव्यु कें तुरंत जवाब लिखैत अछि।", strategyTitle: "रणनीति केंद्र", strategyDesc: "पिछला ३० दिनक विश्लेषण करू।", googleTitle: "गूगल सं जुड़ू", googleDesc: "अपन गूगल बिजनेस प्रोफाइल सं सीधे लिंक करू।" },
    howItWorks: { title: "३ आसान चरण में बिजनेस सुरक्षित करू", step1Title: "लॉगिन आ सेटअप", step1Desc: "गूगल सं लॉगिन करू आ अपन दुकान कें नाम बताउ।", step2Title: "AI सक्षम करू", step2Desc: "एक क्लिक में ऑटो-जवाब शुरू करू।", step3Title: "बिक्री बढ़ाउ", step3Desc: "AI रिपोर्ट पढ़ू आ सुधार करू।" },
    dashboard: { statusActive: "ऑटोमेशन सक्रिय", deploymentTitle: "AI परिचालन केंद्र", deploymentDesc: "अहाँक डिजिटल प्रतिनिधि ऑनलाइन अछि।", integrityTest: "प्रणाली जाँच करू", integrityToast: "जाँच मोड", manualTitle: "मैनुअल विश्लेषण", manualLabel: "भावना विश्लेषण", ratingLabel: "रेटिंग", inputLabel: "इनपुट", inputPlaceholder: "ग्राहक कें शब्द एतय पेस्ट करू...", executeCta: "विश्लेषण करू", totalProcessed: "कुल विश्लेषण", awaitingInput: "इंतजार कऽ रहल अछि", awaitingDesc: "जवाब एतय देखाय पड़त।", analyzing: "AI विश्लेषण कऽ रहल अछि...", sentimentLabel: "भावना", suggestedReply: "सुझाओल जवाब", actionSteps: "तुरंत उठाओल जाय वाला कदम", copyCta: "कॉपी करू" },
    settings: { title: "पहचान केंद्र", subtitle: "दुकानक प्रोफाइल प्रबंधित करू।", bizName: "बिजनेसक नाम", bizCat: "श्रेणी", address: "पता", phone: "फोन", website: "वेबसाइट", updateCta: "सुरक्षित करू", googleSync: "GMB सं सिंक करू", verified: "पहचान सत्यापित", securityLevel: "सुरक्षा स्तर", encrypted: "सुरक्षित कनेक्शन", zeroKnowledge: "डाटा सुरक्षित प्रबंधन।" },
    setup: { title: "सेटअप करू", desc: "अपन बिजनेसक बारे में बताउ।", finish: "पूरा करू" },
    insights: {
      title: "रणनीति केंद्र",
      subtitle: "सेंटीमेंट इंटेलिजेंस",
      batchTab: "बैच-१०",
      weeklyTab: "साप्ताहिक बदलाव",
      monthlyTab: "मासिक बदलाव",
      lockedTitle: "रणनीति लॉक अछि",
      lockedDesc: "ट्रेंड विश्लेषणक लेल १० महत्वपूर्ण डाटा पॉइंट जमा करू।",
      collectReviews: "महत्वपूर्ण रिव्यु",
      generating: "विश्लेषण भऽ रहल अछि...",
      blueprint: "रणनीति ब्लुप्रिंट",
      synthesis: "विशेष विश्लेषण",
      findings: "प्रमुख निष्कर्ष",
      roadmap: "ऍक्शन रोडमैप",
      performanceScore: "प्रदर्शन स्कोर",
      outOf100: "१०० में सं",
      sentimentMood: "भावना",
      gaps: "प्रमुख कमजोरी",
      actionPlan: "AI ऍक्शन प्लान",
      generateFresh: "नब विश्लेषण तैयार करू",
      noReport: "रिपोर्ट नै मिलल",
      noReportDesc: "अपन पहिल AI विश्लेषण शुरू करू।",
      initializeSync: "सिंक शुरू करू"
    },
    footer: {
      tagline: "आधुनिक AI कें माध्यम सं स्थानीय बिजनेस कें सशक्त बनाबय वाला।",
      platform: "प्लैटफर्म",
      about: "हमरा बारे में",
      status: "प्रणाली स्थिति",
      legal: "कानूनी",
      privacy: "गोपनीयता नीति",
      terms: "शर्त सभ",
      security: "सुरक्षा",
      contact: "संपर्क",
      rights: "© २०२६ REVIEWGUARD AI • सर्वाधिकार सुरक्षित",
      globalNode: "ग्लोबल नोड: ASIA-SOUTH-1"
    },
    legal: {
      aboutTitle: "हमर मिशन",
      aboutDesc: "ReviewGuard AI स्थानीय व्यवसायक लेल बनाओल गेल अछि। हम छोट व्यवसाय मालिकक ओहि उच्च-स्तरीय सेंटीमेंट इंटेलिजेंस प्रदान करैत छी जे वैश्विक निगम द्वारा उपयोग कयल जाइत अछि।",
      privacyTitle: "प्राइवेसी शील्ड",
      privacyDesc: "हम अहाँक डेटाक प्राथमिकता दइत छी। ReviewGuard AI जीरो-नॉलेज आर्किटेक्चर पर काज करैत अछि, जेकर अर्थ अछि जे हम अहाँक व्यक्तिगत Google पासवर्ड कखनो स्टोर नै करैत छी।",
      termsTitle: "हमर सेवाक शर्त",
      termsDesc: "ReviewGuard AI क उपयोग कऽ कऽ, अहाँ स्वीकार करैत छी जे AI-जनरेटेड जवाब सुझाव अछि। अहाँक जिम्मेदारी अछि जे एकर अंतिम सत्यापन करू।"
    },
    categories: {
      gym: "जिम / फिटनेस सेंटर",
      restaurant: "रेस्टोरेंट / कैफे",
      salon: "सैलून / नाई की दुकान",
      beauty: "ब्यूटी पार्लर",
      retail: "Retail / Shop",
      cafe: "Cafe / Bakery",
      hotel: "Hotel / Lodging",
      medical: "Medical / Clinic",
      auto: "Automotive / Garage",
      edu: "Education / Institute",
      other: "आन्य सेवा उद्योग"
    }
  }
};

export const languageList: { id: Language; label: string; flag: string }[] = [
  { id: 'en', label: 'English', flag: '🇺🇸' },
  { id: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { id: 'hinglish', label: 'Hinglish', flag: '🇮🇳' },
  { id: 'ja', label: '日本語', flag: '🇯🇵' },
  { id: 'es', label: 'Español', flag: '🇪🇸' },
  { id: 'fr', label: 'Français', flag: '🇫🇷' },
  { id: 'it', label: 'Italiano', flag: '🇮🇹' },
  { id: 'ru', label: 'Русский', flag: '🇷🇺' },
  { id: 'zh', label: '中文', flag: '🇨🇳' },
  { id: 'ko', label: '한국어', flag: '🇰🇷' },
  { id: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  { id: 'te', label: 'తెలుగు', flag: '🇮🇳' },
  { id: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
  { id: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
  { id: 'mr', label: 'मराठी', flag: '🇮🇳' },
  { id: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { id: 'ne', label: 'नेपाली', flag: '🇳🇵' },
  { id: 'mai', label: 'मैथिली', flag: '🇮🇳' },
];
