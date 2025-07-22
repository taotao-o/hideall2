// Hide All 官网主页主要交互脚本
// 详细注释，方便新手理解

// 多语言配置
const translations = {
  en: {
    // 导航栏
    nav_home: "Home",
    nav_reviews: "User reviews",
    nav_contact: "Contact us",
    nav_faq: "FAQ",
    nav_blog: "Blog",
    
    // Banner区域
    banner_title: "Hide All: The Ultimate Solution to Hide Apps & Protect Your Privacy",
    banner_subtitle: "Take control of your digital privacy with Hide All. Our cutting-edge technology ensures your personal apps, photos, and data remain completely invisible and secure from prying eyes.",
    btn_download: "Download Now",
    btn_watch_demo: "Watch Demo",
    
    // Why Choose区域
    why_title: "Why Choose HIDE ALL?",
    why_card1_title: "Hide Apps & Data with Stealth Technology",
    why_card1_desc: "Utilize military-grade encryption and advanced stealth technology to completely hide your sensitive apps and personal data. Our innovative solution ensures your privacy remains uncompromised, making your private content invisible to others.",
    why_card2_title: "Manage Multiple Accounts Simultaneously",
    why_card2_desc: "Seamlessly switch between multiple social media and messaging accounts. Perfect for maintaining separate personal and professional profiles while ensuring complete privacy and organization.",
    why_card3_title: "Private Photos & Videos: Securely Stored and Easily Browsed",
    why_card3_desc: "Create a secure vault for your private photos and videos with intuitive organization and instant access. Advanced encryption ensures your memories stay private while maintaining quick and easy browsing capabilities.",
    why_card4_title: "Stealth Installation: No One Will Ever Know",
    why_card4_desc: "Our unique stealth installation process ensures the app remains completely hidden from the device's app list. With customizable disguise options, Hide All maintains perfect camouflage while providing full functionality.",
    why_card5_title: "Robust Security Features for Ultimate Privacy",
    why_card5_desc: "Benefit from password protection, pattern locks, and fingerprint authentication. Only you can access your hidden apps and content, ensuring your data is always safe.",
    why_card6_title: "Customizable User Interface for Seamless Operation",
    why_card6_desc: "Personalize your experience with customizable themes, layouts, and organization options. Create a seamless workflow that matches your preferences and enhances your productivity.",
    why_card7_title: "Switch Accounts with Ease",
    why_card7_desc: "Quickly toggle between different accounts with just one tap. Whether you're managing social media profiles, running dual accounts for gaming, or working with multiple hide apps, Hide All lets you navigate between different accounts effortlessly.",
    why_card8_title: "Enhanced Productivity and Flexibility",
    why_card8_desc: "People are always troubled by how to hide apps on android or iPhones? Thanks to the app's powerful features, you can boost productivity by creating quick access to storage stats, notes, or shortcuts to your encrypted vault.",
    
    // Features区域
    features_title: "Features of HIDE ALL",
    feature1_title: "Advanced hide apps solution",
    feature1_desc: "Securely store apps in a hidden zone that's completely inaccessible without the correct password or biometric authentication.",
    feature2_title: "Multi-Account Support",
    feature2_desc: "Run multiple accounts for social media, gaming, and business apps without logging in and out.",
    feature3_title: "Stealth Installation",
    feature3_desc: "Hide apps completely with no trace left behind on your device.",
    feature4_title: "Calculator Vault",
    feature4_desc: "Disguise your vault as a simple calculator app for added privacy.",
    feature5_title: "Private Storage",
    feature5_desc: "Store private photos, videos, and files in a secure, hide apps in secret zone, encrypted vault.",
    feature6_title: "Customizable Interface",
    feature6_desc: "Personalize the app's appearance and layout to match your style and workflow.",
    feature7_title: "Seamless Account Switching",
    feature7_desc: "Instantly toggle between accounts with a single tap.",
    
    // Footer
    footer_description: "Hide All is your ultimate privacy companion, offering advanced app hiding and data protection features. Keep your personal information secure with our innovative stealth technology.",
    footer_links_title1: "Product",
    footer_links_title2: "Support",
    footer_links_title3: "Company",
    footer_links_title4: "Social",
    footer_copyright: "© 2025 Hide All. All rights reserved.",
    footer_download_text: "Download on Google Play",
    
    // User Reviews页面
    reviews_back: "Back",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "Based on 2,548 reviews",
    reviews_title: "All Reviews",
    
    // FAQ页面
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Find answers to common questions about Hide All",
    faq_question1: "How does Hide All protect my privacy?",
    faq_answer1: "Hide All uses advanced encryption and stealth technology to completely hide your apps and data. Your sensitive information is stored in a secure vault that's disguised as a calculator app, making it invisible to others while remaining easily accessible to you.",
    faq_question2: "Can I use multiple accounts with Hide All?",
    faq_answer2: "Yes! Hide All supports multiple accounts for social media, gaming, and business apps. You can switch between different accounts seamlessly without logging in and out, keeping your personal and professional profiles completely separate.",
    faq_question3: "Is Hide All safe to use?",
    faq_answer3: "Absolutely. Hide All employs military-grade encryption and follows strict privacy standards. We never collect or share your personal data, and all your information is stored locally on your device with zero cloud storage.",
    faq_question4: "What happens if I forget my password?",
    faq_answer4: "Hide All provides multiple recovery options including backup codes and security questions. However, for maximum security, we recommend keeping your password in a secure location. Our support team can help you regain access if needed.",
    faq_question5: "Does Hide All work on all devices?",
    faq_answer5: "Hide All is designed for Android devices and works on most modern smartphones and tablets. The app is optimized for performance and uses minimal system resources, ensuring smooth operation on various device specifications."
  },
  
  ar: {
    // 导航栏
    nav_home: "الرئيسية",
    nav_reviews: "تقييمات المستخدمين",
    nav_contact: "اتصل بنا",
    nav_faq: "الأسئلة الشائعة",
    nav_blog: "المدونة",
    
    // Banner区域
    banner_title: "إخفاء الكل: الحل الأمثل لإخفاء التطبيقات وحماية خصوصيتك",
    banner_subtitle: "تحكم في خصوصيتك الرقمية مع إخفاء الكل. تضمن تقنيتنا المتطورة أن تبقى تطبيقاتك الشخصية وصورك وبياناتك غير مرئية تماماً وآمنة من الأعين المتطفلة.",
    btn_download: "تحميل الآن",
    btn_watch_demo: "مشاهدة العرض التوضيحي",
    
    // Why Choose区域
    why_title: "لماذا تختار إخفاء الكل؟",
    why_card1_title: "إخفاء التطبيقات والبيانات بتقنية التخفي",
    why_card1_desc: "استخدم التشفير العسكري وتقنية التخفي المتقدمة لإخفاء تطبيقاتك الحساسة وبياناتك الشخصية تماماً. يضمن حلنا المبتكر عدم المساس بخصوصيتك، مما يجعل محتواك الخاص غير مرئي للآخرين.",
    why_card2_title: "إدارة حسابات متعددة في وقت واحد",
    why_card2_desc: "انتقل بسلاسة بين حسابات وسائل التواصل الاجتماعي والرسائل المتعددة. مثالي للحفاظ على ملفات شخصية ومهنية منفصلة مع ضمان الخصوصية الكاملة والتنظيم.",
    why_card3_title: "الصور والفيديوهات الخاصة: مخزنة بأمان ومتصفحة بسهولة",
    why_card3_desc: "أنشئ خزنة آمنة لصورك وفيديوهاتك الخاصة مع التنظيم البديهي والوصول الفوري. يضمن التشفير المتقدم أن تبقى ذكرياتك خاصة مع الحفاظ على إمكانيات التصفح السريع والسهل.",
    why_card4_title: "التثبيت المتخفي: لن يعرف أحد أبداً",
    why_card4_desc: "تضمن عملية التثبيت المتخفي الفريدة لدينا أن يبقى التطبيق مخفياً تماماً من قائمة تطبيقات الجهاز. مع خيارات التمويه القابلة للتخصيص، يحافظ إخفاء الكل على التمويه المثالي مع توفير الوظائف الكاملة.",
    why_card5_title: "ميزات أمان قوية للخصوصية القصوى",
    why_card5_desc: "استفد من حماية كلمة المرور، أقفال النمط، ومصادقة البصمة. فقط أنت يمكنك الوصول إلى تطبيقاتك المخفية ومحتواك، مما يضمن أن بياناتك آمنة دائماً.",
    why_card6_title: "واجهة مستخدم قابلة للتخصيص للتشغيل السلس",
    why_card6_desc: "خصص تجربتك مع السمات والتخطيطات وخيارات التنظيم القابلة للتخصيص. أنشئ سير عمل سلس يتطابق مع تفضيلاتك ويعزز إنتاجيتك.",
    why_card7_title: "تبديل الحسابات بسهولة",
    why_card7_desc: "انتقل بسرعة بين الحسابات المختلفة بنقرة واحدة فقط. سواء كنت تدير ملفات وسائل التواصل الاجتماعي، أو تشغل حسابات مزدوجة للألعاب، أو تعمل مع تطبيقات إخفاء متعددة، يتيح لك إخفاء الكل التنقل بين الحسابات المختلفة بسهولة.",
    why_card8_title: "إنتاجية ومرونة محسنة",
    why_card8_desc: "الناس دائماً منزعجون من كيفية إخفاء التطبيقات على أندرويد أو آيفون؟ بفضل الميزات القوية للتطبيق، يمكنك تعزيز الإنتاجية من خلال إنشاء وصول سريع لإحصائيات التخزين والملاحظات أو اختصارات لخزنتك المشفرة.",
    
    // Features区域
    features_title: "ميزات إخفاء الكل",
    feature1_title: "حل إخفاء التطبيقات المتقدم",
    feature1_desc: "تخزين التطبيقات بأمان في منطقة مخفية لا يمكن الوصول إليها تماماً بدون كلمة المرور الصحيحة أو المصادقة البيومترية.",
    feature2_title: "دعم الحسابات المتعددة",
    feature2_desc: "تشغيل حسابات متعددة لوسائل التواصل الاجتماعي والألعاب وتطبيقات الأعمال بدون تسجيل الدخول والخروج.",
    feature3_title: "التثبيت المتخفي",
    feature3_desc: "إخفاء التطبيقات تماماً بدون ترك أي أثر على جهازك.",
    feature4_title: "خزنة الآلة الحاسبة",
    feature4_desc: "تمويه خزنتك كتطبيق آلة حاسبة بسيط لمزيد من الخصوصية.",
    feature5_title: "التخزين الخاص",
    feature5_desc: "تخزين الصور والفيديوهات والملفات الخاصة في خزنة مشفرة آمنة، إخفاء التطبيقات في منطقة سرية.",
    feature6_title: "واجهة قابلة للتخصيص",
    feature6_desc: "تخصيص مظهر التطبيق وتخطيطه ليتطابق مع أسلوبك وسير عملك.",
    feature7_title: "تبديل الحسابات السلس",
    feature7_desc: "التبديل الفوري بين الحسابات بنقرة واحدة.",
    
    // Footer
    footer_description: "إخفاء الكل هو رفيقك النهائي للخصوصية، يقدم ميزات إخفاء التطبيقات المتقدمة وحماية البيانات. حافظ على أمان معلوماتك الشخصية مع تقنية التخفي المبتكرة لدينا.",
    footer_links_title1: "المنتج",
    footer_links_title2: "الدعم",
    footer_links_title3: "الشركة",
    footer_links_title4: "التواصل الاجتماعي",
    footer_copyright: "© 2025 إخفاء الكل. جميع الحقوق محفوظة.",
    footer_download_text: "تحميل من جوجل بلاي",
    
    // User Reviews页面
    reviews_back: "رجوع",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "بناءً على 2,548 تقييم",
    reviews_title: "جميع التقييمات",
    
    // FAQ页面
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "البحث عن الإجابات على الأسئلة الشائعة حول إخفاء الكل",
    faq_question1: "كيف يحمي إخفاء الكل خصوصيتي؟",
    faq_answer1: "يستخدم إخفاء الكل تشفيراً عالي المستوى وتقنية ستيلث. يتم تخزين معلوماتك الحساسة في خزنة آمنة تظهر كتطبيق حاسبة بسيط، مما يجعلها غير مرئية للآخرين بينما تبقى سهلة الوصول إليها لك.",
    faq_question2: "هل يمكنني استخدام حسابات متعددة مع إخفاء الكل؟",
    faq_answer2: "نعم! يدعم إخفاء الكل حسابات متعددة لوسائل التواصل الاجتماعي والألعاب وتطبيقات الأعمال. يمكنك التبديل بين الحسابات بسلاسة دون تسجيل الدخول والخروج، مع الحفاظ على ملفات شخصية ومهنية منفصلة تماماً.",
    faq_question3: "هل آمن إستخدام إخفاء الكل؟",
    faq_answer3: "بالتأكيد. يستخدم إخفاء الكل تشفيراً عالي المستوى ويتبع معايير عالية للخصوصية. لا نجمع أو نشارك معلوماتك الشخصية، وجميع معلوماتك مخزنة على جهازك بشكل محلي بدون تخزين في السحابة.",
    faq_question4: "ماذا يحدث إذا نسيت كلمة المرور؟",
    faq_answer4: "يوفر إخفاء الكل خيارات استعادة متعددة مثل الكودات الاحتياطية والأسئلة الأمان. ومع ذلك، لأقصى أمان، نوصي بالاحتفاظ بكلمة المرور في مكان آمن. يمكن لفريق الدعم مساعدتك في استعادة الوصول إذا كان ذلك ضرورياً.",
    faq_question5: "هل يعمل إخفاء الكل على جميع الأجهزة؟",
    faq_answer5: "يتم تصميم إخفاء الكل لأجهزة Android ويعمل على أجهزة الهواتف الحديثة والطابقات. التطبيق مصمم للأداء ويستخدم موارد نظام أقل، مضمون عمله بشكل سلس على مختلف مواصفات الجهاز."
  },
  
  hi: {
    // 导航栏
    nav_home: "होम",
    nav_reviews: "उपयोगकर्ता समीक्षाएं",
    nav_contact: "संपर्क करें",
    nav_faq: "सामान्य प्रश्न",
    nav_blog: "ब्लॉग",
    
    // Banner区域
    banner_title: "हाइड ऑल: ऐप्स छिपाने और आपकी गोपनीयता की रक्षा करने का अंतिम समाधान",
    banner_subtitle: "हाइड ऑल के साथ अपनी डिजिटल गोपनीयता पर नियंत्रण रखें। हमारी अत्याधुनिक तकनीक सुनिश्चित करती है कि आपके व्यक्तिगत ऐप्स, फोटो और डेटा पूरी तरह से अदृश्य और सुरक्षित रहें।",
    btn_download: "अभी डाउनलोड करें",
    btn_watch_demo: "डेमो देखें",
    
    // Why Choose区域
    why_title: "हाइड ऑल क्यों चुनें?",
    why_card1_title: "स्टील्थ तकनीक के साथ ऐप्स और डेटा छिपाएं",
    why_card1_desc: "अपने संवेदनशील ऐप्स और व्यक्तिगत डेटा को पूरी तरह से छिपाने के लिए सैन्य-स्तरीय एन्क्रिप्शन और उन्नत स्टील्थ तकनीक का उपयोग करें। हमारा नवीन समाधान सुनिश्चित करता है कि आपकी गोपनीयता बरकरार रहे।",
    why_card2_title: "एक साथ कई खातों का प्रबंधन करें",
    why_card2_desc: "कई सोशल मीडिया और मैसेजिंग खातों के बीच निर्बाध रूप से स्विच करें। अलग-अलग व्यक्तिगत और पेशेवर प्रोफाइल बनाए रखने के लिए परफेक्ट।",
    why_card3_title: "निजी फोटो और वीडियो: सुरक्षित रूप से संग्रहित और आसानी से ब्राउज़ किए गए",
    why_card3_desc: "अंतर्ज्ञानी संगठन और तत्काल पहुंच के साथ अपने निजी फोटो और वीडियो के लिए एक सुरक्षित वॉल्ट बनाएं।",
    why_card4_title: "स्टील्थ इंस्टॉलेशन: कोई कभी नहीं जानेगा",
    why_card4_desc: "हमारी अनूठी स्टील्थ इंस्टॉलेशन प्रक्रिया सुनिश्चित करती है कि ऐप डिवाइस की ऐप सूची से पूरी तरह से छिपा रहे।",
    why_card5_title: "अंतिम गोपनीयता के लिए मजबूत सुरक्षा सुविधाएं",
    why_card5_desc: "पासवर्ड सुरक्षा, पैटर्न लॉक और फिंगरप्रिंट प्रमाणीकरण से लाभ उठाएं। केवल आप अपने छिपे हुए ऐप्स और सामग्री तक पहुंच सकते हैं।",
    why_card6_title: "निर्बाध संचालन के लिए अनुकूलन योग्य उपयोगकर्ता इंटरफेस",
    why_card6_desc: "अनुकूलन योग्य थीम, लेआउट और संगठन विकल्पों के साथ अपने अनुभव को व्यक्तिगत बनाएं।",
    why_card7_title: "आसानी से खाते बदलें",
    why_card7_desc: "केवल एक टैप के साथ विभिन्न खातों के बीच तुरंत टॉगल करें। चाहे आप सोशल मीडिया प्रोफाइल प्रबंधित कर रहे हों।",
    why_card8_title: "बेहतर उत्पादकता और लचीलापन",
    why_card8_desc: "लोग हमेशा परेशान रहते हैं कि एंड्रॉइड या आईफोन पर ऐप्स कैसे छिपाएं? ऐप की शक्तिशाली सुविधाओं के लिए धन्यवाद।",
    
    // Features区域
    features_title: "हाइड ऑल की विशेषताएं",
    feature1_title: "उन्नत ऐप छिपाने का समाधान",
    feature1_desc: "सही पासवर्ड या बायोमेट्रिक प्रमाणीकरण के बिना पूरी तरह से दुर्गम छिपे हुए क्षेत्र में ऐप्स को सुरक्षित रूप से संग्रहित करें।",
    feature2_title: "मल्टी-अकाउंट सपोर्ट",
    feature2_desc: "लॉगिन और लॉगआउट के बिना सोशल मीडिया, गेमिंग और बिजनेस ऐप्स के लिए कई खाते चलाएं।",
    feature3_title: "स्टील्थ इंस्टॉलेशन",
    feature3_desc: "अपने डिवाइस पर कोई निशान छोड़े बिना ऐप्स को पूरी तरह से छिपाएं।",
    feature4_title: "कैलकुलेटर वॉल्ट",
    feature4_desc: "अतिरिक्त गोपनीयता के लिए अपने वॉल्ट को एक सरल कैलकुलेटर ऐप के रूप में छिपाएं।",
    feature5_title: "निजी संग्रहण",
    feature5_desc: "एक सुरक्षित, गुप्त क्षेत्र में निजी फोटो, वीडियो और फाइलें संग्रहित करें, एन्क्रिप्टेड वॉल्ट में ऐप्स छिपाएं।",
    feature6_title: "अनुकूलन योग्य इंटरफेस",
    feature6_desc: "अपनी शैली और कार्यप्रवाह के अनुरूप ऐप की उपस्थिति और लेआउट को व्यक्तिगत बनाएं।",
    feature7_title: "निर्बाध खाता स्विचिंग",
    feature7_desc: "एक ही टैप के साथ खातों के बीच तुरंत टॉगल करें।",
    
    // Footer
    footer_description: "हाइड ऑल आपका अंतिम गोपनीयता साथी है, जो उन्नत ऐप छिपाने और डेटा सुरक्षा सुविधाएं प्रदान करता है। हमारी नवीन स्टील्थ तकनीक के साथ अपनी व्यक्तिगत जानकारी को सुरक्षित रखें।",
    footer_links_title1: "उत्पाद",
    footer_links_title2: "सहायता",
    footer_links_title3: "कंपनी",
    footer_links_title4: "सोशल",
    footer_copyright: "© 2025 हाइड ऑल। सर्वाधिकार सुरक्षित।",
    footer_download_text: "Google Play पर डाउनलोड करें",
    
    // User Reviews页面
    reviews_back: "वापस",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "2,548 समीक्षाओं के आधार पर",
    reviews_title: "सभी समीक्षाएं",
    
    // FAQ页面
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_subtitle: "हाइड ऑल के बारे में सामान्य प्रश्नों के उत्तर खोजें",
    faq_question1: "हाइड ऑल मेरी गोपनीयता की रक्षा कैसे करता है?",
    faq_answer1: "हाइड ऑल उन्नत एन्क्रिप्शन और स्टील्थ तकनीक का उपयोग करके आपके ऐप्स और डेटा को पूरी तरह से छिपाता है। आपकी संवेदनशील जानकारी एक सुरक्षित वॉल्ट में संग्रहित की जाती है जो एक कैलकुलेटर ऐप के रूप में छिपी होती है।",
    faq_question2: "क्या मैं हाइड ऑल के साथ कई खाते उपयोग कर सकता हूं?",
    faq_answer2: "हाँ! हाइड ऑल सोशल मीडिया, गेमिंग और बिजनेस ऐप्स के लिए कई खातों का समर्थन करता है। आप लॉगिन और लॉगआउट के बिना विभिन्न खातों के बीच निर्बाध रूप से स्विच कर सकते हैं।",
    faq_question3: "क्या हाइड ऑल का उपयोग करना सुरक्षित है?",
    faq_answer3: "बिल्कुल। हाइड ऑल सैन्य-स्तरीय एन्क्रिप्शन का उपयोग करता है और सख्त गोपनीयता मानकों का पालन करता है। हम कभी भी आपका व्यक्तिगत डेटा एकत्र या साझा नहीं करते।",
    faq_question4: "अगर मैं अपना पासवर्ड भूल जाऊं तो क्या होगा?",
    faq_answer4: "हाइड ऑल बैकअप कोड और सुरक्षा प्रश्न सहित कई पुनर्प्राप्ति विकल्प प्रदान करता है। हालांकि, अधिकतम सुरक्षा के लिए, हम अनुशंसा करते हैं कि आप अपना पासवर्ड सुरक्षित स्थान पर रखें।",
    faq_question5: "क्या हाइड ऑल सभी डिवाइस पर काम करता है?",
    faq_answer5: "हाइड ऑल Android डिवाइस के लिए डिज़ाइन किया गया है और अधिकांश आधुनिक स्मार्टफोन और टैबलेट पर काम करता है। ऐप को प्रदर्शन के लिए अनुकूलित किया गया है।"
  },
  
  id: {
    // 导航栏
    nav_home: "Beranda",
    nav_reviews: "Ulasan Pengguna",
    nav_contact: "Hubungi Kami",
    nav_faq: "FAQ",
    nav_blog: "Blog",
    
    // Banner区域
    banner_title: "Hide All: Solusi Utama untuk Menyembunyikan Aplikasi & Melindungi Privasi Anda",
    banner_subtitle: "Kendalikan privasi digital Anda dengan Hide All. Teknologi canggih kami memastikan aplikasi pribadi, foto, dan data Anda tetap benar-benar tidak terlihat dan aman dari mata yang mengintip.",
    btn_download: "Unduh Sekarang",
    btn_watch_demo: "Tonton Demo",
    
    // Why Choose区域
    why_title: "Mengapa Memilih HIDE ALL?",
    why_card1_title: "Sembunyikan Aplikasi & Data dengan Teknologi Stealth",
    why_card1_desc: "Manfaatkan enkripsi tingkat militer dan teknologi stealth canggih untuk benar-benar menyembunyikan aplikasi sensitif dan data pribadi Anda. Solusi inovatif kami memastikan privasi Anda tetap tidak terganggu.",
    why_card2_title: "Kelola Beberapa Akun Secara Bersamaan",
    why_card2_desc: "Beralih dengan lancar antara beberapa akun media sosial dan pesan. Sempurna untuk mempertahankan profil pribadi dan profesional terpisah sambil memastikan privasi dan organisasi lengkap.",
    why_card3_title: "Foto & Video Pribadi: Disimpan dengan Aman dan Mudah Diperiksa",
    why_card3_desc: "Buat brankas aman untuk foto dan video pribadi Anda dengan organisasi intuitif dan akses instan. Enkripsi canggih memastikan kenangan Anda tetap pribadi.",
    why_card4_title: "Instalasi Stealth: Tidak Ada yang Akan Tahu",
    why_card4_desc: "Proses instalasi stealth unik kami memastikan aplikasi tetap benar-benar tersembunyi dari daftar aplikasi perangkat. Dengan opsi penyamaran yang dapat disesuaikan.",
    why_card5_title: "Fitur Keamanan Kuat untuk Privasi Maksimal",
    why_card5_desc: "Manfaatkan perlindungan kata sandi, kunci pola, dan autentikasi sidik jari. Hanya Anda yang dapat mengakses aplikasi dan konten tersembunyi Anda.",
    why_card6_title: "Antarmuka Pengguna yang Dapat Disesuaikan untuk Operasi Lancar",
    why_card6_desc: "Personalisasi pengalaman Anda dengan tema, tata letak, dan opsi organisasi yang dapat disesuaikan. Buat alur kerja yang lancar yang sesuai dengan preferensi Anda.",
    why_card7_title: "Beralih Akun dengan Mudah",
    why_card7_desc: "Cepat beralih antara akun berbeda dengan hanya satu ketukan. Baik Anda mengelola profil media sosial, menjalankan akun ganda untuk game.",
    why_card8_title: "Produktivitas dan Fleksibilitas yang Ditingkatkan",
    why_card8_desc: "Orang selalu bingung tentang cara menyembunyikan aplikasi di android atau iPhone? Berkat fitur kuat aplikasi, Anda dapat meningkatkan produktivitas.",
    
    // Features区域
    features_title: "Fitur HIDE ALL",
    feature1_title: "Solusi menyembunyikan aplikasi canggih",
    feature1_desc: "Simpan aplikasi dengan aman di zona tersembunyi yang benar-benar tidak dapat diakses tanpa kata sandi yang benar atau autentikasi biometrik.",
    feature2_title: "Dukungan Multi-Akun",
    feature2_desc: "Jalankan beberapa akun untuk media sosial, game, dan aplikasi bisnis tanpa masuk dan keluar.",
    feature3_title: "Instalasi Stealth",
    feature3_desc: "Sembunyikan aplikasi sepenuhnya tanpa meninggalkan jejak di perangkat Anda.",
    feature4_title: "Brankas Kalkulator",
    feature4_desc: "Samarkan brankas Anda sebagai aplikasi kalkulator sederhana untuk privasi tambahan.",
    feature5_title: "Penyimpanan Pribadi",
    feature5_desc: "Simpan foto, video, dan file pribadi di brankas terenkripsi yang aman, sembunyikan aplikasi di zona rahasia.",
    feature6_title: "Antarmuka yang Dapat Disesuaikan",
    feature6_desc: "Personalisasi tampilan dan tata letak aplikasi agar sesuai dengan gaya dan alur kerja Anda.",
    feature7_title: "Beralih Akun Lancar",
    feature7_desc: "Segera beralih antara akun dengan satu ketukan.",
    
    // Footer
    footer_description: "Hide All adalah teman privasi utama Anda, menawarkan fitur menyembunyikan aplikasi canggih dan perlindungan data. Jaga keamanan informasi pribadi Anda dengan teknologi stealth inovatif kami.",
    footer_links_title1: "Produk",
    footer_links_title2: "Dukungan",
    footer_links_title3: "Perusahaan",
    footer_links_title4: "Sosial",
    footer_copyright: "© 2025 Hide All. Semua hak dilindungi.",
    footer_download_text: "Unduh di Google Play",
    
    // User Reviews页面
    reviews_back: "Kembali",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "Berdasarkan 2,548 ulasan",
    reviews_title: "Semua Ulasan",
    
    // FAQ页面
    faq_title: "Pertanyaan yang Sering Diajukan",
    faq_subtitle: "Temukan jawaban untuk pertanyaan umum tentang Hide All",
    faq_question1: "Bagaimana Hide All melindungi privasi saya?",
    faq_answer1: "Hide All menggunakan enkripsi canggih dan teknologi stealth untuk benar-benar menyembunyikan aplikasi dan data Anda. Informasi sensitif Anda disimpan dalam brankas aman yang disamarkan sebagai aplikasi kalkulator.",
    faq_question2: "Bisakah saya menggunakan beberapa akun dengan Hide All?",
    faq_answer2: "Ya! Hide All mendukung beberapa akun untuk media sosial, game, dan aplikasi bisnis. Anda dapat beralih antara akun berbeda dengan lancar tanpa masuk dan keluar.",
    faq_question3: "Apakah Hide All aman digunakan?",
    faq_answer3: "Tentu saja. Hide All menggunakan enkripsi tingkat militer dan mengikuti standar privasi yang ketat. Kami tidak pernah mengumpulkan atau membagikan data pribadi Anda.",
    faq_question4: "Apa yang terjadi jika saya lupa kata sandi?",
    faq_answer4: "Hide All menyediakan beberapa opsi pemulihan termasuk kode cadangan dan pertanyaan keamanan. Namun, untuk keamanan maksimal, kami merekomendasikan menyimpan kata sandi di lokasi yang aman.",
    faq_question5: "Apakah Hide All bekerja di semua perangkat?",
    faq_answer5: "Hide All dirancang untuk perangkat Android dan bekerja di sebagian besar smartphone dan tablet modern. Aplikasi dioptimalkan untuk performa dan menggunakan sumber daya sistem minimal."
  }
};

// 当前语言
let currentLang = 'en';

// 1. 导航栏菜单点击后高亮显示
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // 如果是锚点跳转，平滑滚动到对应区域
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // 留出导航栏高度
          behavior: 'smooth'
        });
      }
    }
  });
});

// 2. 滚动时导航栏阴影变化（提升层次感）
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
  }
});

// 3. 语言切换功能
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // 设置HTML语言属性
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // 更新导航栏
  document.querySelector('a[href="index.html"]').textContent = t.nav_home;
  document.querySelector('a[href="reviews.html"]').textContent = t.nav_reviews;
  document.querySelector('a[href="contact.html"]').textContent = t.nav_contact;
  document.querySelector('a[href="faq.html"]').textContent = t.nav_faq;
  document.querySelector('a[href="blog.html"]').textContent = t.nav_blog;
  
  // 更新Banner区域
  const bannerTitle = document.querySelector('.banner-left h1');
  const bannerSubtitle = document.querySelector('.banner-left p');
  const btnDownload = document.querySelector('.btn-primary');
  const btnWatchDemo = document.querySelector('.btn-secondary');
  
  if (bannerTitle) bannerTitle.textContent = t.banner_title;
  if (bannerSubtitle) bannerSubtitle.textContent = t.banner_subtitle;
  if (btnDownload) btnDownload.innerHTML = `<i class="fa fa-download"></i> ${t.btn_download}`;
  if (btnWatchDemo) btnWatchDemo.innerHTML = `<i class="fa fa-play-circle"></i> ${t.btn_watch_demo}`;
  
  // 更新Why Choose区域
  const whyTitle = document.querySelector('.why-choose h2');
  if (whyTitle) whyTitle.textContent = t.why_title;
  
  // 更新Why Choose卡片
  const whyCards = document.querySelectorAll('.why-card');
  if (whyCards.length >= 8) {
    whyCards[0].querySelector('.why-title').textContent = t.why_card1_title;
    whyCards[0].querySelector('.why-desc').textContent = t.why_card1_desc;
    whyCards[1].querySelector('.why-title').textContent = t.why_card2_title;
    whyCards[1].querySelector('.why-desc').textContent = t.why_card2_desc;
    whyCards[2].querySelector('.why-title').textContent = t.why_card3_title;
    whyCards[2].querySelector('.why-desc').textContent = t.why_card3_desc;
    whyCards[3].querySelector('.why-title').textContent = t.why_card4_title;
    whyCards[3].querySelector('.why-desc').textContent = t.why_card4_desc;
    whyCards[4].querySelector('.why-title').textContent = t.why_card5_title;
    whyCards[4].querySelector('.why-desc').textContent = t.why_card5_desc;
    whyCards[5].querySelector('.why-title').textContent = t.why_card6_title;
    whyCards[5].querySelector('.why-desc').textContent = t.why_card6_desc;
    whyCards[6].querySelector('.why-title').textContent = t.why_card7_title;
    whyCards[6].querySelector('.why-desc').textContent = t.why_card7_desc;
    whyCards[7].querySelector('.why-title').textContent = t.why_card8_title;
    whyCards[7].querySelector('.why-desc').textContent = t.why_card8_desc;
  }
  
  // 更新Features区域
  const featuresTitle = document.querySelector('.features h2');
  if (featuresTitle) featuresTitle.textContent = t.features_title;
  
  // 更新Features卡片
  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length >= 7) {
    featureCards[0].querySelector('.feature-title').textContent = t.feature1_title;
    featureCards[0].querySelector('.feature-desc').textContent = t.feature1_desc;
    featureCards[1].querySelector('.feature-title').textContent = t.feature2_title;
    featureCards[1].querySelector('.feature-desc').textContent = t.feature2_desc;
    featureCards[2].querySelector('.feature-title').textContent = t.feature3_title;
    featureCards[2].querySelector('.feature-desc').textContent = t.feature3_desc;
    featureCards[3].querySelector('.feature-title').textContent = t.feature4_title;
    featureCards[3].querySelector('.feature-desc').textContent = t.feature4_desc;
    featureCards[4].querySelector('.feature-title').textContent = t.feature5_title;
    featureCards[4].querySelector('.feature-desc').textContent = t.feature5_desc;
    featureCards[5].querySelector('.feature-title').textContent = t.feature6_title;
    featureCards[5].querySelector('.feature-desc').textContent = t.feature6_desc;
    featureCards[6].querySelector('.feature-title').textContent = t.feature7_title;
    featureCards[6].querySelector('.feature-desc').textContent = t.feature7_desc;
  }
  
  // 更新Footer
  const footerDesc = document.querySelector('.footer-description');
  if (footerDesc) footerDesc.textContent = t.footer_description;
  
  // 更新User Reviews页面内容
  const reviewsBack = document.querySelector('.back-link');
  const reviewsRatingScore = document.querySelector('.overall-rating');
  const reviewsRatingText = document.querySelector('.reviews-count');
  const reviewsTitle = document.querySelector('.reviews-main-title');
  
  if (reviewsBack) reviewsBack.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${t.reviews_back}`;
  if (reviewsRatingScore) reviewsRatingScore.textContent = t.reviews_rating_score;
  if (reviewsRatingText) reviewsRatingText.textContent = t.reviews_rating_text;
  if (reviewsTitle) reviewsTitle.textContent = t.reviews_title;
  
  // 更新FAQ页面内容
  const faqTitle = document.querySelector('.faq-main-title');
  const faqQuestions = document.querySelectorAll('.faq-question span');
  const faqAnswers = document.querySelectorAll('.faq-answer');
  
  if (faqTitle) faqTitle.textContent = t.faq_title;
  
  // 更新FAQ问题和答案
  if (faqQuestions.length >= 5 && faqAnswers.length >= 5) {
    faqQuestions[0].textContent = `01. ${t.faq_question1}`;
    faqAnswers[0].innerHTML = `<p>${t.faq_answer1}</p>`;
    faqQuestions[1].textContent = `02. ${t.faq_question2}`;
    faqAnswers[1].innerHTML = `<p>${t.faq_answer2}</p>`;
    faqQuestions[2].textContent = `03. ${t.faq_question3}`;
    faqAnswers[2].innerHTML = `<p>${t.faq_answer3}</p>`;
    faqQuestions[3].textContent = `04. ${t.faq_question4}`;
    faqAnswers[3].innerHTML = `<p>${t.faq_answer4}</p>`;
    faqQuestions[4].textContent = `05. ${t.faq_question5}`;
    faqAnswers[4].innerHTML = `<p>${t.faq_answer5}</p>`;
  }
  
  // 保存语言选择到本地存储
  localStorage.setItem('selectedLanguage', lang);
}

// 初始化语言切换
const langSelect = document.getElementById('language-select');
if (langSelect) {
  // 从本地存储恢复语言选择
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    langSelect.value = savedLang;
    changeLanguage(savedLang);
  }
  
  langSelect.addEventListener('change', function() {
    changeLanguage(this.value);
  });
}

// 4. FAQ "手风琴" 效果
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    // 可选：关闭其他已打开的faq-item
    // faqItems.forEach(i => i.classList.remove('active'));
    if (isActive) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
}); 

// 5. Feedback 页面表单交互
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  const description = document.getElementById('description');
  const charCounter = document.querySelector('.char-counter');
  
  description.addEventListener('input', () => {
    const currentLength = description.value.length;
    charCounter.textContent = `${currentLength}/200`;
  });

  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    feedbackForm.reset();
    charCounter.textContent = '0/200';
  });
}

// 6. 通用语言切换功能（用于其他页面）
function initLanguageSwitch() {
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    // 从本地存储恢复语言选择
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) {
      langSelect.value = savedLang;
      // 设置页面语言属性
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      // 如果是主页、User Reviews页面或FAQ页面，应用完整的语言切换
      if (window.location.pathname.includes('index.html') || 
          window.location.pathname === '/' ||
          window.location.pathname.includes('reviews.html') ||
          window.location.pathname.includes('faq.html')) {
        changeLanguage(savedLang);
      }
    }
    
    langSelect.addEventListener('change', function() {
      const lang = this.value;
      // 设置页面语言属性
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      // 保存语言选择
      localStorage.setItem('selectedLanguage', lang);
      // 如果是主页、User Reviews页面或FAQ页面，调用完整的语言切换
      if (window.location.pathname.includes('index.html') || 
          window.location.pathname === '/' ||
          window.location.pathname.includes('reviews.html') ||
          window.location.pathname.includes('faq.html')) {
        changeLanguage(lang);
      }
    });
  }
}

// 页面加载时初始化语言切换
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitch();
}); 