// Hide All 官网主页主要交互脚本
// 详细注释，方便新手理解

// 用户评价模块数据 - 多语言支持
const testimonialsData = {
  en: [
    {
      avatar: 'EC',
      name: 'Emily Chen',
      stars: 5,
      content: 'This app has been a game-changer for managing my privacy concerns! The fingerprint unlock feature is incredibly convenient, and the interface is intuitive—perfect for when I need to hide apps and keep work and personal ones separate. Highly recommend for anyone serious about using an app to hide apps!'
    },
    {
      avatar: 'MW',
      name: 'Michael Wang',
      stars: 5,
      content: 'As a business executive, I need robust security for sensitive apps and data—and this app nails it when it comes to hide apps. The calculator disguise feature for hide apps is brilliant, and recent updates have added even more customization options for how I hide apps. Customer support is responsive and helpful. Five stars well deserved!'
    },
    {
      avatar: 'SZ',
      name: 'Sarah Zhang',
      stars: 4,
      content: 'Overall a solid app with great privacy features, especially when I want to hide apps. I mainly use it to hide apps like my social media ones. Took off one star due to occasional lag on my device, but it\'s still a top choice for anyone looking to hide apps. Would love to see more theme options for hide apps in future updates!'
    },
    {
      avatar: 'DL',
      name: 'David Li',
      stars: 5,
      content: 'Been using HideAll for over a year now, and it keeps getting better—especially for when I need to hide apps. The new cloud backup feature is fantastic! No more worrying about losing access to the apps I hide apps when changing phones. Would love to see face recognition added as an unlock option for the apps I hide apps.'
    },
    {
      avatar: 'RL',
      name: 'Rachel Liu',
      stars: 5,
      content: 'Best privacy app I\'ve tried— and it\'s not just about photos or videos, but also to hide apps! The photo and video vault feature adds an extra layer of security, and the new document safe is perfect, but what really stands out is how easy it is to hide apps. The clean interface makes it simple to hide apps, even for non-tech savvy users.'
    },
    {
      avatar: 'WJ',
      name: 'Wjacob',
      stars: 5,
      content: 'As a corporate executive, I have many sensitive information and apps on my phone. HideAll\'s security gives me great peace of mind, especially the clever calculator disguise feature. Recent updates have added more customization options, making the user experience better and better. Customer service is also very responsive. Five stars!'
    }
  ],
  ar: [
    {
      avatar: 'EC',
      name: 'إيميلي تشين',
      stars: 5,
      content: 'هذا التطبيق كان تغييراً جذرياً في إدارة مخاوفي بشأن الخصوصية! ميزة فتح البصمة مريحة للغاية، والواجهة بديهية - مثالية عندما أحتاج إلى إخفاء التطبيقات والحفاظ على التطبيقات الشخصية والعمل منفصلة. أوصي بشدة لأي شخص جاد في استخدام تطبيق لإخفاء التطبيقات!'
    },
    {
      avatar: 'MW',
      name: 'مايكل وانغ',
      stars: 5,
      content: 'كمدير تنفيذي في مجال الأعمال، أحتاج إلى أمان قوي للتطبيقات والبيانات الحساسة - وهذا التطبيق ينجح في ذلك عندما يتعلق الأمر بإخفاء التطبيقات. ميزة التمويه الحاسبة لإخفاء التطبيقات رائعة، والتحديثات الأخيرة أضافت المزيد من خيارات التخصيص لكيفية إخفاء التطبيقات. دعم العملاء متجاوب ومفيد. خمس نجوم تستحقها!'
    },
    {
      avatar: 'SZ',
      name: 'سارة تشانغ',
      stars: 4,
      content: 'بشكل عام تطبيق متين بميزات خصوصية رائعة، خاصة عندما أريد إخفاء التطبيقات. أستخدمه بشكل أساسي لإخفاء التطبيقات مثل وسائل التواصل الاجتماعي. خصمت نجمة واحدة بسبب التأخير العرضي على جهازي، لكنه لا يزال خياراً رائعاً لأي شخص يبحث عن إخفاء التطبيقات. أود رؤية المزيد من خيارات السمات لإخفاء التطبيقات في التحديثات المستقبلية!'
    },
    {
      avatar: 'DL',
      name: 'ديفيد لي',
      stars: 5,
      content: 'أستخدم HideAll منذ أكثر من عام، وهو يتحسن باستمرار - خاصة عندما أحتاج إلى إخفاء التطبيقات. ميزة النسخ الاحتياطي السحابي الجديدة رائعة! لا مزيد من القلق بشأن فقدان الوصول إلى التطبيقات التي أخفيها عند تغيير الهواتف. أود رؤية التعرف على الوجه مضافاً كخيار فتح للتطبيقات التي أخفيها.'
    },
    {
      avatar: 'RL',
      name: 'راشيل ليو',
      stars: 5,
      content: 'أفضل تطبيق خصوصية جربته - وليس فقط للصور أو الفيديوهات، ولكن أيضاً لإخفاء التطبيقات! ميزة خزنة الصور والفيديو تضيف طبقة إضافية من الأمان، وخزنة المستندات الجديدة مثالية، لكن ما يميز حقاً هو مدى سهولة إخفاء التطبيقات. الواجهة النظيفة تجعل إخفاء التطبيقات بسيطاً، حتى للمستخدمين غير التقنيين.'
    },
    {
      avatar: 'WJ',
      name: 'وجاكوب',
      stars: 5,
      content: 'كمدير تنفيذي في الشركة، لدي الكثير من المعلومات والتطبيقات الحساسة على هاتفي. أمان HideAll يعطيني راحة بال كبيرة، خاصة ميزة التمويه الحاسبة الذكية. التحديثات الأخيرة أضافت المزيد من خيارات التخصيص، مما يجعل تجربة المستخدم أفضل وأفضل. خدمة العملاء متجاوبة أيضاً. خمس نجوم!'
    }
  ],
  hi: [
    {
      avatar: 'EC',
      name: 'एमिली चेन',
      stars: 5,
      content: 'यह ऐप मेरी गोपनीयता चिंताओं को प्रबंधित करने में एक गेम-चेंजर रहा है! फिंगरप्रिंट अनलॉक सुविधा अविश्वसनीय रूप से सुविधाजनक है, और इंटरफेस सहज है - जब मुझे ऐप्स छिपाने और काम और व्यक्तिगत ऐप्स को अलग रखने की आवश्यकता होती है तो यह बिल्कुल सही है। किसी भी व्यक्ति के लिए जो ऐप्स छिपाने के लिए ऐप का उपयोग करने के बारे में गंभीर है, उनके लिए अत्यधिक अनुशंसित!'
    },
    {
      avatar: 'MW',
      name: 'माइकल वांग',
      stars: 5,
      content: 'एक व्यवसाय कार्यकारी के रूप में, मुझे संवेदनशील ऐप्स और डेटा के लिए मजबूत सुरक्षा की आवश्यकता है - और यह ऐप ऐप्स छिपाने के मामले में इसे पूरी तरह से करता है। ऐप्स छिपाने के लिए कैलकुलेटर छद्म सुविधा शानदार है, और हाल के अपडेट ने ऐप्स छिपाने के तरीके के लिए और भी अधिक अनुकूलन विकल्प जोड़े हैं। ग्राहक सहायता उत्तरदायी और सहायक है। पांच सितारे अच्छी तरह से योग्य हैं!'
    },
    {
      avatar: 'SZ',
      name: 'सारा झांग',
      stars: 4,
      content: 'कुल मिलाकर एक ठोस ऐप जिसमें महान गोपनीयता सुविधाएं हैं, विशेष रूप से जब मैं ऐप्स छिपाना चाहती हूं। मैं मुख्य रूप से इसका उपयोग अपने सोशल मीडिया जैसे ऐप्स छिपाने के लिए करती हूं। अपने डिवाइस पर कभी-कभी लैग के कारण एक सितारा कम किया, लेकिन यह अभी भी किसी भी व्यक्ति के लिए एक शीर्ष विकल्प है जो ऐप्स छिपाने की तलाश में है। भविष्य के अपडेट में ऐप्स छिपाने के लिए अधिक थीम विकल्प देखना चाहूंगी!'
    },
    {
      avatar: 'DL',
      name: 'डेविड ली',
      stars: 5,
      content: 'एक साल से अधिक समय से HideAll का उपयोग कर रहा हूं, और यह बेहतर होता जा रहा है - विशेष रूप से जब मुझे ऐप्स छिपाने की आवश्यकता होती है। नई क्लाउड बैकअप सुविधा शानदार है! फोन बदलते समय जिन ऐप्स को मैं छिपाता हूं उन तक पहुंच खोने की चिंता नहीं। मैं चेहरे की पहचान को ऐप्स के लिए एक अनलॉक विकल्प के रूप में जोड़ना चाहूंगा जिन्हें मैं छिपाता हूं।'
    },
    {
      avatar: 'RL',
      name: 'राहेल लिउ',
      stars: 5,
      content: 'मैंने जो सबसे अच्छा गोपनीयता ऐप आजमाया है - और यह सिर्फ फोटो या वीडियो के बारे में नहीं है, बल्कि ऐप्स छिपाने के बारे में भी है! फोटो और वीडियो वॉल्ट सुविधा एक अतिरिक्त सुरक्षा परत जोड़ती है, और नया दस्तावेज़ सेफ बिल्कुल सही है, लेकिन जो वास्तव में बाहर खड़ा है वह है ऐप्स छिपाना कितना आसान है। साफ इंटरफेस गैर-तकनीकी उपयोगकर्ताओं के लिए भी ऐप्स छिपाना सरल बनाता है।'
    },
    {
      avatar: 'WJ',
      name: 'वजाकोब',
      stars: 5,
      content: 'एक कॉर्पोरेट कार्यकारी के रूप में, मेरे फोन पर बहुत सारी संवेदनशील जानकारी और ऐप्स हैं। HideAll की सुरक्षा मुझे बहुत शांति देती है, विशेष रूप से चतुर कैलकुलेटर छद्म सुविधा। हाल के अपडेट ने अधिक अनुकूलन विकल्प जोड़े हैं, जिससे उपयोगकर्ता अनुभव बेहतर और बेहतर हो रहा है। ग्राहक सेवा भी बहुत उत्तरदायी है। पांच सितारे!'
    }
  ],
  id: [
    {
      avatar: 'EC',
      name: 'Emily Chen',
      stars: 5,
      content: 'Aplikasi ini telah menjadi game-changer untuk mengelola kekhawatiran privasi saya! Fitur buka kunci sidik jari sangat nyaman, dan antarmukanya intuitif - sempurna untuk saat saya perlu menyembunyikan aplikasi dan menjaga aplikasi kerja dan pribadi terpisah. Sangat direkomendasikan untuk siapa saja yang serius tentang menggunakan aplikasi untuk menyembunyikan aplikasi!'
    },
    {
      avatar: 'MW',
      name: 'Michael Wang',
      stars: 5,
      content: 'Sebagai eksekutif bisnis, saya membutuhkan keamanan yang kuat untuk aplikasi dan data sensitif - dan aplikasi ini berhasil dalam hal menyembunyikan aplikasi. Fitur penyamaran kalkulator untuk menyembunyikan aplikasi brilian, dan pembaruan terbaru telah menambahkan lebih banyak opsi kustomisasi untuk cara saya menyembunyikan aplikasi. Dukungan pelanggan responsif dan membantu. Lima bintang layak didapat!'
    },
    {
      avatar: 'SZ',
      name: 'Sarah Zhang',
      stars: 4,
      content: 'Secara keseluruhan aplikasi yang solid dengan fitur privasi yang hebat, terutama ketika saya ingin menyembunyikan aplikasi. Saya terutama menggunakannya untuk menyembunyikan aplikasi seperti media sosial saya. Mengurangi satu bintang karena lag sesekali di perangkat saya, tetapi masih pilihan terbaik untuk siapa saja yang mencari cara menyembunyikan aplikasi. Ingin melihat lebih banyak opsi tema untuk menyembunyikan aplikasi di pembaruan mendatang!'
    },
    {
      avatar: 'DL',
      name: 'David Li',
      stars: 5,
      content: 'Sudah menggunakan HideAll selama lebih dari setahun, dan terus menjadi lebih baik - terutama untuk saat saya perlu menyembunyikan aplikasi. Fitur cadangan cloud baru fantastis! Tidak perlu khawatir kehilangan akses ke aplikasi yang saya sembunyikan saat mengganti ponsel. Ingin melihat pengenalan wajah ditambahkan sebagai opsi buka kunci untuk aplikasi yang saya sembunyikan.'
    },
    {
      avatar: 'RL',
      name: 'Rachel Liu',
      stars: 5,
      content: 'Aplikasi privasi terbaik yang pernah saya coba - dan bukan hanya tentang foto atau video, tetapi juga untuk menyembunyikan aplikasi! Fitur vault foto dan video menambahkan lapisan keamanan ekstra, dan safe dokumen baru sempurna, tetapi yang benar-benar menonjol adalah betapa mudahnya menyembunyikan aplikasi. Antarmuka yang bersih membuat menyembunyikan aplikasi sederhana, bahkan untuk pengguna non-teknis.'
    },
    {
      avatar: 'WJ',
      name: 'Wjacob',
      stars: 5,
      content: 'Sebagai eksekutif perusahaan, saya memiliki banyak informasi dan aplikasi sensitif di ponsel saya. Keamanan HideAll memberi saya ketenangan pikiran yang besar, terutama fitur penyamaran kalkulator yang cerdas. Pembaruan terbaru telah menambahkan lebih banyak opsi kustomisasi, membuat pengalaman pengguna lebih baik dan lebih baik. Layanan pelanggan juga sangat responsif. Lima bintang!'
    }
  ]
};

// 全局变量用于管理testimonials滚动
let testimonialsScrollTimer = null;
let testimonialsScrollPosition = 0;
let testimonialsScrollSpeed = 0.8;
let testimonialsScrollInterval = 30;

// 初始化用户评价模块
function initTestimonials() {
  const scrollContainer = document.getElementById('testimonials-scroll');
  if (!scrollContainer) return;

  // 清理之前的滚动定时器
  if (testimonialsScrollTimer) {
    clearInterval(testimonialsScrollTimer);
    testimonialsScrollTimer = null;
  }

  // 重置滚动位置
  testimonialsScrollPosition = 0;
  scrollContainer.style.transform = 'translateX(0)';

  // 生成评价卡片HTML
  function generateTestimonialCard(testimonial) {
    const starsHTML = Array.from({ length: 5 }, (_, i) => {
      if (i < testimonial.stars) {
        return '<i class="fa-solid fa-star"></i>';
      } else {
        return '<i class="fa-regular fa-star"></i>';
      }
    }).join('');

    return `
      <div class="testimonial-card">
        <div class="testimonial-avatar">${testimonial.avatar}</div>
        <div class="testimonial-name">${testimonial.name}</div>
        <div class="testimonial-stars">${starsHTML}</div>
        <div class="testimonial-content">${testimonial.content}</div>
      </div>
    `;
  }

  // 获取当前语言，默认为英文
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  const currentTestimonials = testimonialsData[currentLang] || testimonialsData.en;
  
  // 复制数组以实现无缝循环
  const duplicatedTestimonials = [...currentTestimonials, ...currentTestimonials];
  
  // 生成所有卡片HTML
  const cardsHTML = duplicatedTestimonials.map(generateTestimonialCard).join('');
  scrollContainer.innerHTML = cardsHTML;

  // 自动滚动功能
  function autoScroll() {
    testimonialsScrollPosition += testimonialsScrollSpeed;
    
    // 当滚动到第一组卡片的末尾时，重置到开始位置
    const firstSetWidth = currentTestimonials.length * (320 + 24); // 卡片宽度 + gap
    if (testimonialsScrollPosition >= firstSetWidth) {
      testimonialsScrollPosition = 0;
    }
    
    scrollContainer.style.transform = `translateX(-${testimonialsScrollPosition}px)`;
  }

  function startScroll() {
    if (testimonialsScrollTimer) {
      clearInterval(testimonialsScrollTimer);
    }
    testimonialsScrollTimer = setInterval(autoScroll, testimonialsScrollInterval);
  }

  function stopScroll() {
    if (testimonialsScrollTimer) {
      clearInterval(testimonialsScrollTimer);
      testimonialsScrollTimer = null;
    }
  }

  // 移除之前的事件监听器（如果存在）
  scrollContainer.removeEventListener('mouseenter', stopScroll);
  scrollContainer.removeEventListener('mouseleave', startScroll);

  // 启动自动滚动
  startScroll();

  // 鼠标悬停时暂停滚动
  scrollContainer.addEventListener('mouseenter', stopScroll);

  // 鼠标离开时恢复滚动
  scrollContainer.addEventListener('mouseleave', startScroll);
}

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
    why_card1_desc: "Hide All stands out with its unique ability to hide apps discreetly, keeping your sensitive information away from prying eyes. Unlike other hide apps tools, our advanced technology ensures your apps and data are completely invisible. With our app hider feature, selected apps will vanish from your phone's home screen, leaving no trace of their existence. Accessible only through a secret PIN or pattern, your sensitive apps are fully protected inside a secure calculator vault.",
    why_card2_title: "Manage Multiple Accounts Simultaneously",
    why_card2_desc: "With Hide All, you can run multiple accounts of hide apps for almost any app at the same time, without worrying about data interference. Hide apps in different accounts for social media, games, or business apps, and switch between them easily without logging in and out. This feature supports popular platforms like Facebook, Instagram, Snapchat, Telegram, and gaming apps such as Roblox, Call of Duty, Free Fire and MONOPOLY GO.",
    why_card3_title: "Private Photos & Videos: Securely Stored and Easily Browsed",
    why_card3_desc: "Hide All not only allows you to hide apps, but it also helps you protect your personal media. You can securely store private photos, videos, and files in the vault, and access them anytime you want. The sleek interface offers a refined browsing experience, utilize a private vault or hide apps for encrypted storage, accessed discreetly via a secret calculator masquerading as a standard app, ensuring your media is hidden yet easily accessible when needed.",
    why_card4_title: "Stealth Installation: No One Will Ever Know",
    why_card4_desc: "One of the most sought-after features of Hide All is the stealth installation. When you hide apps, you can ensure they leave no trace in the phone system, no recent tasks, and no installation records. This discreet operation guarantees that even someone with advanced technical knowledge won't be able to uncover your hide apps. Shield private apps with app hider and safeguard layers. A secret app vault disguises itself as a simple calculator app, providing an extra layer of security through the \"fake calculator\" facade to hide apps.",
    why_card5_title: "Robust Security Features for Ultimate Privacy",
    why_card5_desc: "Hide apps securely with features like password protection, pattern locks, or even fingerprint authentication. Only you can access the hide apps and content, ensuring that no one else can break into your vault. This multi-layered protection keeps your data private, giving you peace of mind in a digital world where privacy threats are ever-present.",
    why_card6_title: "Customizable User Interface for Seamless Operation",
    why_card6_desc: "Hide All's hide apps solution is designed with ease of use in mind. Customize your device's interface to match your personal preferences, including organizing hide apps into smart categories (Work, Health, Social) and creating hidden pages for even more privacy. With options for dark/light themes, pixel-perfect icon packs, and even animated transitions, you can make hide apps efficient and fits your workflow and aesthetic preferences.",
    why_card7_title: "Switch Accounts with Ease",
    why_card7_desc: "Quickly toggle between different accounts with just one tap. Whether you're managing social media profiles, running dual accounts for gaming, or working with multiple hide apps, Hide All lets you navigate between different accounts effortlessly. This ensures you never miss important messages or notifications, regardless of which account you're using.",
    why_card8_title: "Enhanced Productivity and Flexibility",
    why_card8_desc: "People are always troubled by how to hide apps on android or iPhones? Thanks to the app's powerful features, you can boost productivity by creating quick access to storage stats, notes, or shortcuts to your encrypted vault. Organize your personal apps in a way that works best for you, whether through sorting by frequency, color, or alphabetically. With one-tap split-screen pairing, you can maximize your device's screen real estate for multitasking.",
    
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
    feature8_title: "Enhanced Productivity and Flexibility",
    feature8_desc: "Boost productivity with quick access to storage stats, notes, and shortcuts to your encrypted vault. Organize apps your way for maximum efficiency.",
    
    // Footer
    footer_slogan: "The Most Powerful App Hiding and Privacy Protection Tool",
    footer_feature1: "Protected Privacy for 200,000+ Users",
    footer_feature2: "SSL Secure, Zero Data Collection",
    footer_feature3: "Official Certified by Global Privacy Standards",
    footer_title_product: "Product Information",
    footer_title_support: "Support Center",
    footer_title_community: "Community",
    footer_link_reviews: "User Reviews",
    footer_link_changelog: "Changelog",
    footer_link_blog: "Blog",
    footer_link_faq: "FAQ",
    footer_link_guide: "User Guide",
    footer_link_feedback: "Feedback",
    footer_link_contact: "Contact Support",
    footer_copyright: "© 2025 Hide All. All Rights Reserved",
    footer_privacy_policy: "Privacy Policy",
    footer_terms_of_service: "Terms of Service",
    
    // User Reviews页面
    reviews_back: "Back",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "Based on 2,548 reviews",
    reviews_title: "All Reviews",
    
    // User Reviews模块（首页）
    testimonials_badge: "User Reviews",
    testimonials_title: "What Our Users Say",
    testimonials_subtitle: "Join thousands of satisfied users who have transformed their digital privacy and focus with Hide All",
    testimonials_rating: "4.8/5",
    testimonials_reviews_count: "Based on 2,847 reviews",
    
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
    why_card1_desc: "يتميز إخفاء الكل بقدرته الفريدة على إخفاء التطبيقات بسرية، مما يحافظ على معلوماتك الحساسة بعيداً عن الأعين المتطفلة. على عكس أدوات إخفاء التطبيقات الأخرى، تضمن تقنيتنا المتقدمة أن تطبيقاتك وبياناتك غير مرئية تماماً. مع ميزة إخفاء التطبيقات لدينا، ستختفي التطبيقات المحددة من الشاشة الرئيسية لهاتفك، دون ترك أي أثر لوجودها. يمكن الوصول إليها فقط من خلال رمز PIN سري أو نمط، وتكون تطبيقاتك الحساسة محمية بالكامل داخل خزنة حاسبة آمنة.",
    why_card2_title: "إدارة حسابات متعددة في وقت واحد",
    why_card2_desc: "مع إخفاء الكل، يمكنك تشغيل حسابات متعددة لإخفاء التطبيقات لأي تطبيق تقريباً في نفس الوقت، دون القلق بشأن تداخل البيانات. أخفِ التطبيقات في حسابات مختلفة لوسائل التواصل الاجتماعي أو الألعاب أو تطبيقات الأعمال، وانتقل بينها بسهولة دون تسجيل الدخول والخروج. تدعم هذه الميزة منصات شائعة مثل فيسبوك وإنستغرام وسناب شات وتيليجرام وتطبيقات الألعاب مثل روبلوكس وكول أوف ديوتي وفري فاير ومونوبولي جو.",
    why_card3_title: "الصور والفيديوهات الخاصة: مخزنة بأمان ومتصفحة بسهولة",
    why_card3_desc: "لا يسمح إخفاء الكل بإخفاء التطبيقات فحسب، بل يساعدك أيضاً في حماية وسائطك الشخصية. يمكنك تخزين الصور والفيديوهات والملفات الخاصة بأمان في الخزنة، والوصول إليها في أي وقت تريده. توفر الواجهة الأنيقة تجربة تصفح محسنة، واستخدم خزنة خاصة أو أخفِ التطبيقات للتخزين المشفر، مع الوصول بسرية عبر حاسبة سرية تتظاهر كتطبيق عادي، مما يضمن أن وسائطك مخفية ولكن يسهل الوصول إليها عند الحاجة.",
    why_card4_title: "التثبيت المتخفي: لن يعرف أحد أبداً",
    why_card4_desc: "إحدى أكثر الميزات المطلوبة في إخفاء الكل هي التثبيت المتخفي. عندما تخفي التطبيقات، يمكنك التأكد من أنها لا تترك أي أثر في نظام الهاتف، ولا مهام حديثة، ولا سجلات تثبيت. تضمن هذه العملية السرية أنه حتى شخص لديه معرفة تقنية متقدمة لن يتمكن من اكتشاف تطبيقاتك المخفية. احمِ التطبيقات الخاصة مع إخفاء التطبيقات وطبقات الحماية. تتظاهر خزنة التطبيقات السرية كتطبيق حاسبة بسيط، مما يوفر طبقة إضافية من الأمان من خلال واجهة \"الحاسبة المزيفة\" لإخفاء التطبيقات.",
    why_card5_title: "ميزات أمان قوية للخصوصية القصوى",
    why_card5_desc: "أخفِ التطبيقات بأمان مع ميزات مثل حماية كلمة المرور وأقفال النمط أو حتى مصادقة البصمة. فقط أنت يمكنك الوصول إلى التطبيقات المخفية والمحتوى، مما يضمن أن لا أحد آخر يمكنه اختراق خزنتك. تحافظ هذه الحماية متعددة الطبقات على خصوصية بياناتك، مما يمنحك راحة البال في عالم رقمي حيث تهديدات الخصوصية موجودة دائماً.",
    why_card6_title: "واجهة مستخدم قابلة للتخصيص للتشغيل السلس",
    why_card6_desc: "تم تصميم حل إخفاء التطبيقات من إخفاء الكل مع مراعاة سهولة الاستخدام. خصص واجهة جهازك لتتطابق مع تفضيلاتك الشخصية، بما في ذلك تنظيم التطبيقات المخفية في فئات ذكية (العمل، الصحة، الاجتماعي) وإنشاء صفحات مخفية لمزيد من الخصوصية. مع خيارات السمات الداكنة/الفاتحة وحزم الأيقونات المثالية والانتقالات المتحركة، يمكنك جعل إخفاء التطبيقات فعالاً ويتناسب مع سير عملك وتفضيلاتك الجمالية.",
    why_card7_title: "تبديل الحسابات بسهولة",
    why_card7_desc: "انتقل بسرعة بين الحسابات المختلفة بنقرة واحدة فقط. سواء كنت تدير ملفات وسائل التواصل الاجتماعي، أو تشغل حسابات مزدوجة للألعاب، أو تعمل مع تطبيقات إخفاء متعددة، يتيح لك إخفاء الكل التنقل بين الحسابات المختلفة بسهولة. هذا يضمن أنك لن تفوت أبداً الرسائل أو الإشعارات المهمة، بغض النظر عن الحساب الذي تستخدمه.",
    why_card8_title: "إنتاجية ومرونة محسنة",
    why_card8_desc: "الناس دائماً منزعجون من كيفية إخفاء التطبيقات على أندرويد أو آيفون؟ بفضل الميزات القوية للتطبيق، يمكنك تعزيز الإنتاجية من خلال إنشاء وصول سريع لإحصائيات التخزين والملاحظات أو اختصارات لخزنتك المشفرة. نظم تطبيقاتك الشخصية بالطريقة التي تناسبك بشكل أفضل، سواء من خلال الفرز حسب التكرار أو اللون أو الأبجدية. مع إقران الشاشة المقسمة بنقرة واحدة، يمكنك تعظيم مساحة شاشة جهازك للعمل متعدد المهام.",
    
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
    feature8_title: "إنتاجية ومرونة محسنة",
    feature8_desc: "تعزيز الإنتاجية من خلال الوصول السريع لإحصائيات التخزين والملاحظات والاختصارات لخزنتك المشفرة. نظم التطبيقات بطريقتك لأقصى كفاءة.",
    
    // Footer
    footer_slogan: "أقوى أداة لإخفاء التطبيقات وحماية الخصوصية",
    footer_feature1: "خصوصية محمية لأكثر من 200,000 مستخدم",
    footer_feature2: "أمان SSL، عدم جمع البيانات",
    footer_feature3: "معتمد رسمياً من معايير الخصوصية العالمية",
    footer_title_product: "معلومات المنتج",
    footer_title_support: "مركز الدعم",
    footer_title_community: "المجتمع",
    footer_link_reviews: "تقييمات المستخدمين",
    footer_link_changelog: "سجل التغييرات",
    footer_link_blog: "المدونة",
    footer_link_faq: "الأسئلة الشائعة",
    footer_link_guide: "دليل المستخدم",
    footer_link_feedback: "التعليقات",
    footer_link_contact: "اتصل بالدعم",
    footer_copyright: "© 2025 إخفاء الكل. جميع الحقوق محفوظة",
    footer_privacy_policy: "سياسة الخصوصية",
    footer_terms_of_service: "شروط الخدمة",
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
    
    // User Reviews模块（首页）
    testimonials_badge: "تقييمات المستخدمين",
    testimonials_title: "ماذا يقول مستخدمونا",
    testimonials_subtitle: "انضم إلى آلاف المستخدمين الراضين الذين حولوا خصوصيتهم الرقمية وتركيزهم مع إخفاء الكل",
    testimonials_rating: "4.8/5",
    testimonials_reviews_count: "بناءً على 2,847 تقييم",
    
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
    why_card1_desc: "हाइड ऑल अपनी अनूठी क्षमता के साथ बाहर निकलता है जो ऐप्स को सावधानीपूर्वक छिपाता है, आपकी संवेदनशील जानकारी को जासूसी आंखों से दूर रखता है। अन्य ऐप छिपाने वाले टूल्स के विपरीत, हमारी उन्नत तकनीक सुनिश्चित करती है कि आपके ऐप्स और डेटा पूरी तरह से अदृश्य हों। हमारी ऐप हाइडर सुविधा के साथ, चयनित ऐप्स आपके फोन की होम स्क्रीन से गायब हो जाएंगे, उनके अस्तित्व का कोई निशान नहीं छोड़ेंगे। केवल एक गुप्त PIN या पैटर्न के माध्यम से सुलभ, आपके संवेदनशील ऐप्स एक सुरक्षित कैलकुलेटर वॉल्ट के अंदर पूरी तरह से संरक्षित हैं।",
    why_card2_title: "एक साथ कई खातों का प्रबंधन करें",
    why_card2_desc: "हाइड ऑल के साथ, आप लगभग किसी भी ऐप के लिए एक साथ कई खातों को चला सकते हैं, डेटा हस्तक्षेप की चिंता किए बिना। सोशल मीडिया, गेम्स, या बिजनेस ऐप्स के लिए अलग-अलग खातों में ऐप्स छिपाएं, और लॉगिन और लॉगआउट के बिना आसानी से उनके बीच स्विच करें। यह सुविधा फेसबुक, इंस्टाग्राम, स्नैपचैट, टेलीग्राम जैसे लोकप्रिय प्लेटफॉर्म और रोब्लॉक्स, कॉल ऑफ ड्यूटी, फ्री फायर और मोनोपॉली गो जैसे गेमिंग ऐप्स का समर्थन करती है।",
    why_card3_title: "निजी फोटो और वीडियो: सुरक्षित रूप से संग्रहित और आसानी से ब्राउज़ किए गए",
    why_card3_desc: "हाइड ऑल न केवल आपको ऐप्स छिपाने की अनुमति देता है, बल्कि यह आपकी व्यक्तिगत मीडिया की रक्षा करने में भी मदद करता है। आप निजी फोटो, वीडियो और फाइलों को वॉल्ट में सुरक्षित रूप से संग्रहित कर सकते हैं, और जब भी चाहें उन तक पहुंच सकते हैं। स्टाइलिश इंटरफेस एक परिष्कृत ब्राउज़िंग अनुभव प्रदान करता है, एन्क्रिप्टेड स्टोरेज के लिए निजी वॉल्ट या ऐप्स छिपाने का उपयोग करें, एक गुप्त कैलकुलेटर के माध्यम से सावधानीपूर्वक एक्सेस किया जाता है जो एक मानक ऐप के रूप में प्रच्छन्न होता है, यह सुनिश्चित करता है कि आपकी मीडिया छिपी हुई है लेकिन जरूरत पड़ने पर आसानी से सुलभ है।",
    why_card4_title: "स्टील्थ इंस्टॉलेशन: कोई कभी नहीं जानेगा",
    why_card4_desc: "हाइड ऑल की सबसे मांग वाली सुविधाओं में से एक स्टील्थ इंस्टॉलेशन है। जब आप ऐप्स छिपाते हैं, तो आप सुनिश्चित कर सकते हैं कि वे फोन सिस्टम में कोई निशान नहीं छोड़ते, कोई हाल के कार्य नहीं, और कोई इंस्टॉलेशन रिकॉर्ड नहीं। यह सावधानीपूर्वक संचालन गारंटी देता है कि यहां तक कि उन्नत तकनीकी ज्ञान वाला कोई व्यक्ति आपके छिपे हुए ऐप्स को उजागर नहीं कर पाएगा। ऐप हाइडर और सुरक्षा परतों के साथ निजी ऐप्स को ढालें। एक गुप्त ऐप वॉल्ट खुद को एक सरल कैलकुलेटर ऐप के रूप में प्रच्छन्न करता है, ऐप्स छिपाने के लिए \"फेक कैलकुलेटर\" फैकेड के माध्यम से सुरक्षा की एक अतिरिक्त परत प्रदान करता है।",
    why_card5_title: "अंतिम गोपनीयता के लिए मजबूत सुरक्षा सुविधाएं",
    why_card5_desc: "पासवर्ड सुरक्षा, पैटर्न लॉक, या यहां तक कि फिंगरप्रिंट प्रमाणीकरण जैसी सुविधाओं के साथ ऐप्स को सुरक्षित रूप से छिपाएं। केवल आप छिपे हुए ऐप्स और सामग्री तक पहुंच सकते हैं, यह सुनिश्चित करते हुए कि कोई और आपके वॉल्ट में नहीं घुस सकता। यह बहु-स्तरीय सुरक्षा आपके डेटा को निजी रखती है, आपको एक डिजिटल दुनिया में मन की शांति देती है जहां गोपनीयता के खतरे हमेशा मौजूद हैं।",
    why_card6_title: "निर्बाध संचालन के लिए अनुकूलन योग्य उपयोगकर्ता इंटरफेस",
    why_card6_desc: "हाइड ऑल का ऐप छिपाने का समाधान उपयोग में आसानी को ध्यान में रखकर डिज़ाइन किया गया है। अपने व्यक्तिगत वरीयताओं के अनुरूप अपने डिवाइस के इंटरफेस को अनुकूलित करें, जिसमें स्मार्ट श्रेणियों (कार्य, स्वास्थ्य, सामाजिक) में ऐप्स छिपाने का आयोजन और और भी अधिक गोपनीयता के लिए छिपे हुए पेज बनाना शामिल है। डार्क/लाइट थीम, पिक्सेल-परफेक्ट आइकन पैक, और यहां तक कि एनिमेटेड ट्रांजिशन के विकल्पों के साथ, आप ऐप्स छिपाने को कुशल बना सकते हैं और यह आपके वर्कफ्लो और सौंदर्य वरीयताओं के अनुरूप होता है।",
    why_card7_title: "आसानी से खाते बदलें",
    why_card7_desc: "केवल एक टैप के साथ विभिन्न खातों के बीच तुरंत टॉगल करें। चाहे आप सोशल मीडिया प्रोफाइल प्रबंधित कर रहे हों, गेमिंग के लिए दोहरे खाते चला रहे हों, या कई ऐप्स छिपाने के साथ काम कर रहे हों, हाइड ऑल आपको विभिन्न खातों के बीच आसानी से नेविगेट करने देता है। यह सुनिश्चित करता है कि आप कभी भी महत्वपूर्ण संदेशों या सूचनाओं को न चूकें, भले ही आप किस खाते का उपयोग कर रहे हों।",
    why_card8_title: "बेहतर उत्पादकता और लचीलापन",
    why_card8_desc: "लोग हमेशा परेशान रहते हैं कि एंड्रॉइड या आईफोन पर ऐप्स कैसे छिपाएं? ऐप की शक्तिशाली सुविधाओं के लिए धन्यवाद, आप अपने एन्क्रिप्टेड वॉल्ट के स्टोरेज स्टैट्स, नोट्स, या शॉर्टकट के त्वरित एक्सेस बनाकर उत्पादकता बढ़ा सकते हैं। अपने व्यक्तिगत ऐप्स को उस तरीके से व्यवस्थित करें जो आपके लिए सबसे अच्छा काम करता है, चाहे वह आवृत्ति, रंग, या वर्णानुक्रम के अनुसार छंटाई के माध्यम से हो। एक-टैप स्प्लिट-स्क्रीन पेयरिंग के साथ, आप मल्टीटास्किंग के लिए अपने डिवाइस की स्क्रीन रियल एस्टेट को अधिकतम कर सकते हैं।",
    
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
    feature8_title: "बेहतर उत्पादकता और लचीलापन",
    feature8_desc: "स्टोरेज स्टैट्स, नोट्स और आपके एन्क्रिप्टेड वॉल्ट के शॉर्टकट के त्वरित एक्सेस के साथ उत्पादकता बढ़ाएं। अधिकतम दक्षता के लिए अपने तरीके से ऐप्स को व्यवस्थित करें।",
    
    // Footer
    footer_slogan: "सबसे शक्तिशाली ऐप छिपाने और गोपनीयता सुरक्षा उपकरण",
    footer_feature1: "200,000+ उपयोगकर्ताओं के लिए संरक्षित गोपनीयता",
    footer_feature2: "SSL सुरक्षित, शून्य डेटा संग्रह",
    footer_feature3: "वैश्विक गोपनीयता मानकों द्वारा आधिकारिक प्रमाणित",
    footer_title_product: "उत्पाद जानकारी",
    footer_title_support: "सहायता केंद्र",
    footer_title_community: "समुदाय",
    footer_link_reviews: "उपयोगकर्ता समीक्षाएं",
    footer_link_changelog: "परिवर्तन लॉग",
    footer_link_blog: "ब्लॉग",
    footer_link_faq: "अक्सर पूछे जाने वाले प्रश्न",
    footer_link_guide: "उपयोगकर्ता गाइड",
    footer_link_feedback: "प्रतिक्रिया",
    footer_link_contact: "संपर्क सहायता",
    footer_copyright: "© 2025 हाइड ऑल। सर्वाधिकार सुरक्षित",
    footer_privacy_policy: "गोपनीयता नीति",
    footer_terms_of_service: "सेवा की शर्तें",
    
    // User Reviews页面
    reviews_back: "वापस",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "2,548 समीक्षाओं के आधार पर",
    reviews_title: "सभी समीक्षाएं",
    
    // User Reviews模块（首页）
    testimonials_badge: "उपयोगकर्ता समीक्षाएं",
    testimonials_title: "हमारे उपयोगकर्ता क्या कहते हैं",
    testimonials_subtitle: "हजारों संतुष्ट उपयोगकर्ताओं में शामिल हों जिन्होंने हाइड ऑल के साथ अपनी डिजिटल गोपनीयता और फोकस को बदल दिया है",
    testimonials_rating: "4.8/5",
    testimonials_reviews_count: "2,847 समीक्षाओं के आधार पर",
    
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
    why_card1_desc: "Hide All menonjol dengan kemampuan uniknya untuk menyembunyikan aplikasi dengan hati-hati, menjaga informasi sensitif Anda jauh dari mata yang mengintip. Tidak seperti alat menyembunyikan aplikasi lainnya, teknologi canggih kami memastikan aplikasi dan data Anda benar-benar tidak terlihat. Dengan fitur app hider kami, aplikasi yang dipilih akan menghilang dari layar utama ponsel Anda, tidak meninggalkan jejak keberadaan mereka. Hanya dapat diakses melalui PIN rahasia atau pola, aplikasi sensitif Anda sepenuhnya dilindungi di dalam brankas kalkulator yang aman.",
    why_card2_title: "Kelola Beberapa Akun Secara Bersamaan",
    why_card2_desc: "Dengan Hide All, Anda dapat menjalankan beberapa akun untuk menyembunyikan aplikasi untuk hampir semua aplikasi pada saat yang sama, tanpa khawatir tentang interferensi data. Sembunyikan aplikasi di akun berbeda untuk media sosial, game, atau aplikasi bisnis, dan beralih di antara mereka dengan mudah tanpa masuk dan keluar. Fitur ini mendukung platform populer seperti Facebook, Instagram, Snapchat, Telegram, dan aplikasi game seperti Roblox, Call of Duty, Free Fire dan MONOPOLY GO.",
    why_card3_title: "Foto & Video Pribadi: Disimpan dengan Aman dan Mudah Diperiksa",
    why_card3_desc: "Hide All tidak hanya memungkinkan Anda menyembunyikan aplikasi, tetapi juga membantu Anda melindungi media pribadi Anda. Anda dapat menyimpan foto, video, dan file pribadi dengan aman di brankas, dan mengaksesnya kapan saja Anda inginkan. Antarmuka yang elegan menawarkan pengalaman browsing yang halus, gunakan brankas pribadi atau sembunyikan aplikasi untuk penyimpanan terenkripsi, diakses dengan hati-hati melalui kalkulator rahasia yang menyamar sebagai aplikasi standar, memastikan media Anda tersembunyi namun mudah diakses saat dibutuhkan.",
    why_card4_title: "Instalasi Stealth: Tidak Ada yang Akan Tahu",
    why_card4_desc: "Salah satu fitur paling dicari dari Hide All adalah instalasi stealth. Ketika Anda menyembunyikan aplikasi, Anda dapat memastikan mereka tidak meninggalkan jejak di sistem ponsel, tidak ada tugas terbaru, dan tidak ada catatan instalasi. Operasi rahasia ini menjamin bahwa bahkan seseorang dengan pengetahuan teknis lanjutan tidak akan dapat mengungkap aplikasi tersembunyi Anda. Lindungi aplikasi pribadi dengan app hider dan lapisan pengaman. Brankas aplikasi rahasia menyamar sebagai aplikasi kalkulator sederhana, memberikan lapisan keamanan tambahan melalui fasad \"kalkulator palsu\" untuk menyembunyikan aplikasi.",
    why_card5_title: "Fitur Keamanan Kuat untuk Privasi Maksimal",
    why_card5_desc: "Sembunyikan aplikasi dengan aman dengan fitur seperti perlindungan kata sandi, kunci pola, atau bahkan autentikasi sidik jari. Hanya Anda yang dapat mengakses aplikasi tersembunyi dan konten, memastikan bahwa tidak ada orang lain yang dapat masuk ke brankas Anda. Perlindungan berlapis ini menjaga data Anda tetap pribadi, memberi Anda ketenangan pikiran di dunia digital di mana ancaman privasi selalu ada.",
    why_card6_title: "Antarmuka Pengguna yang Dapat Disesuaikan untuk Operasi Lancar",
    why_card6_desc: "Solusi menyembunyikan aplikasi Hide All dirancang dengan kemudahan penggunaan dalam pikiran. Sesuaikan antarmuka perangkat Anda agar sesuai dengan preferensi pribadi Anda, termasuk mengorganisir aplikasi tersembunyi ke dalam kategori pintar (Kerja, Kesehatan, Sosial) dan membuat halaman tersembunyi untuk privasi yang lebih besar. Dengan opsi tema gelap/terang, paket ikon pixel-perfect, dan bahkan transisi beranimasi, Anda dapat membuat menyembunyikan aplikasi efisien dan sesuai dengan alur kerja dan preferensi estetika Anda.",
    why_card7_title: "Beralih Akun dengan Mudah",
    why_card7_desc: "Cepat beralih antara akun berbeda dengan hanya satu ketukan. Baik Anda mengelola profil media sosial, menjalankan akun ganda untuk game, atau bekerja dengan beberapa aplikasi tersembunyi, Hide All memungkinkan Anda menavigasi antara akun berbeda dengan mudah. Ini memastikan Anda tidak pernah melewatkan pesan atau notifikasi penting, terlepas dari akun mana yang Anda gunakan.",
    why_card8_title: "Produktivitas dan Fleksibilitas yang Ditingkatkan",
    why_card8_desc: "Orang selalu bingung tentang cara menyembunyikan aplikasi di android atau iPhone? Berkat fitur kuat aplikasi, Anda dapat meningkatkan produktivitas dengan membuat akses cepat ke statistik penyimpanan, catatan, atau pintasan ke brankas terenkripsi Anda. Atur aplikasi pribadi Anda dengan cara yang paling sesuai untuk Anda, baik melalui pengurutan berdasarkan frekuensi, warna, atau alfabet. Dengan pemasangan layar terbagi satu ketukan, Anda dapat memaksimalkan real estate layar perangkat Anda untuk multitasking.",
    
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
    feature8_title: "Produktivitas dan Fleksibilitas yang Ditingkatkan",
    feature8_desc: "Tingkatkan produktivitas dengan akses cepat ke statistik penyimpanan, catatan, dan pintasan ke brankas terenkripsi Anda. Atur aplikasi sesuai cara Anda untuk efisiensi maksimal.",
    
    // Footer
    footer_slogan: "Alat Menyembunyikan Aplikasi dan Perlindungan Privasi Paling Kuat",
    footer_feature1: "Privasi Terlindungi untuk 200,000+ Pengguna",
    footer_feature2: "SSL Aman, Tanpa Pengumpulan Data",
    footer_feature3: "Resmi Disertifikasi oleh Standar Privasi Global",
    footer_title_product: "Informasi Produk",
    footer_title_support: "Pusat Dukungan",
    footer_title_community: "Komunitas",
    footer_link_reviews: "Ulasan Pengguna",
    footer_link_changelog: "Log Perubahan",
    footer_link_blog: "Blog",
    footer_link_faq: "FAQ",
    footer_link_guide: "Panduan Pengguna",
    footer_link_feedback: "Umpan Balik",
    footer_link_contact: "Hubungi Dukungan",
    footer_copyright: "© 2025 Hide All. Semua Hak Dilindungi",
    footer_privacy_policy: "Kebijakan Privasi",
    footer_terms_of_service: "Ketentuan Layanan",
    
    // User Reviews页面
    reviews_back: "Kembali",
    reviews_rating_score: "4.8",
    reviews_rating_stars: "4.5",
    reviews_rating_text: "Berdasarkan 2,548 ulasan",
    reviews_title: "Semua Ulasan",
    
    // User Reviews模块（首页）
    testimonials_badge: "Ulasan Pengguna",
    testimonials_title: "Apa Kata Pengguna Kami",
    testimonials_subtitle: "Bergabunglah dengan ribuan pengguna yang puas yang telah mengubah privasi digital dan fokus mereka dengan Hide All",
    testimonials_rating: "4.8/5",
    testimonials_reviews_count: "Berdasarkan 2,847 ulasan",
    
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
  
  // 更新Features卡片 - 修复选择器
  const featureRows = document.querySelectorAll('.feature-row');
  if (featureRows.length >= 8) {
    featureRows[0].querySelector('.feature-title').textContent = t.feature1_title;
    featureRows[0].querySelector('.feature-desc').textContent = t.feature1_desc;
    featureRows[1].querySelector('.feature-title').textContent = t.feature2_title;
    featureRows[1].querySelector('.feature-desc').textContent = t.feature2_desc;
    featureRows[2].querySelector('.feature-title').textContent = t.feature3_title;
    featureRows[2].querySelector('.feature-desc').textContent = t.feature3_desc;
    featureRows[3].querySelector('.feature-title').textContent = t.feature4_title;
    featureRows[3].querySelector('.feature-desc').textContent = t.feature4_desc;
    featureRows[4].querySelector('.feature-title').textContent = t.feature5_title;
    featureRows[4].querySelector('.feature-desc').textContent = t.feature5_desc;
    featureRows[5].querySelector('.feature-title').textContent = t.feature6_title;
    featureRows[5].querySelector('.feature-desc').textContent = t.feature6_desc;
    featureRows[6].querySelector('.feature-title').textContent = t.feature7_title;
    featureRows[6].querySelector('.feature-desc').textContent = t.feature7_desc;
    featureRows[7].querySelector('.feature-title').textContent = t.feature8_title;
    featureRows[7].querySelector('.feature-desc').textContent = t.feature8_desc;
  }
  
  // 更新User Reviews模块（首页）
  const testimonialsBadge = document.querySelector('.testimonials-badge');
  const testimonialsTitle = document.querySelector('.testimonials-title');
  const testimonialsSubtitle = document.querySelector('.testimonials-subtitle');
  const testimonialsStats = document.querySelector('.testimonials-stats');
  
  if (testimonialsBadge) testimonialsBadge.textContent = t.testimonials_badge;
  if (testimonialsTitle) testimonialsTitle.textContent = t.testimonials_title;
  if (testimonialsSubtitle) testimonialsSubtitle.textContent = t.testimonials_subtitle;
  if (testimonialsStats) {
    testimonialsStats.innerHTML = `
      <i class="fa-solid fa-star"></i>
      <span>5.0</span>
      <span class="testimonials-separator">•</span>
      <span>${t.testimonials_rating}</span>
      <span class="testimonials-separator">•</span>
      <span>${t.testimonials_reviews_count}</span>
    `;
  }
  
  // 重新初始化testimonials模块以更新用户评价内容
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    initTestimonials();
  }
  
  // 更新Footer
  const footerSlogan = document.querySelector('.footer-slogan');
  const footerFeature1 = document.querySelector('.footer-features li:nth-child(1)');
  const footerFeature2 = document.querySelector('.footer-features li:nth-child(2)');
  const footerFeature3 = document.querySelector('.footer-features li:nth-child(3)');
  const footerTitleProduct = document.querySelector('.footer-col:nth-child(2) .footer-title');
  const footerTitleSupport = document.querySelector('.footer-col:nth-child(3) .footer-title');
  const footerTitleCommunity = document.querySelector('.footer-col:nth-child(4) .footer-title');
  const footerLinkReviews = document.querySelector('.footer-col:nth-child(2) .footer-links-list li:nth-child(1) a');
  const footerLinkChangelog = document.querySelector('.footer-col:nth-child(2) .footer-links-list li:nth-child(2) a');
  const footerLinkBlog = document.querySelector('.footer-col:nth-child(2) .footer-links-list li:nth-child(3) a');
  const footerLinkFaq = document.querySelector('.footer-col:nth-child(3) .footer-links-list li:nth-child(1) a');
  const footerLinkGuide = document.querySelector('.footer-col:nth-child(3) .footer-links-list li:nth-child(2) a');
  const footerLinkFeedback = document.querySelector('.footer-col:nth-child(3) .footer-links-list li:nth-child(3) a');
  const footerLinkContact = document.querySelector('.footer-col:nth-child(3) .footer-links-list li:nth-child(4) a');
  const footerCopyright = document.querySelector('.footer-copyright');
  
  if (footerSlogan) footerSlogan.textContent = t.footer_slogan;
  if (footerFeature1) footerFeature1.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${t.footer_feature1}`;
  if (footerFeature2) footerFeature2.innerHTML = `<i class="fa-solid fa-lock"></i> ${t.footer_feature2}`;
  if (footerFeature3) footerFeature3.innerHTML = `<i class="fa-solid fa-certificate"></i> ${t.footer_feature3}`;
  if (footerTitleProduct) footerTitleProduct.textContent = t.footer_title_product;
  if (footerTitleSupport) footerTitleSupport.textContent = t.footer_title_support;
  if (footerTitleCommunity) footerTitleCommunity.textContent = t.footer_title_community;
  if (footerLinkReviews) footerLinkReviews.innerHTML = `<i class="fa fa-star"></i> ${t.footer_link_reviews}`;
  if (footerLinkChangelog) footerLinkChangelog.innerHTML = `<i class="fa fa-rotate"></i> ${t.footer_link_changelog}`;
  if (footerLinkBlog) footerLinkBlog.innerHTML = `<i class="fa fa-file-lines"></i> ${t.footer_link_blog}`;
  if (footerLinkFaq) footerLinkFaq.innerHTML = `<i class="fa fa-question"></i> ${t.footer_link_faq}`;
  if (footerLinkGuide) footerLinkGuide.innerHTML = `<i class="fa fa-book"></i> ${t.footer_link_guide}`;
  if (footerLinkFeedback) footerLinkFeedback.innerHTML = `<i class="fa fa-comment-dots"></i> ${t.footer_link_feedback}`;
  if (footerLinkContact) footerLinkContact.innerHTML = `<i class="fa fa-headset"></i> ${t.footer_link_contact}`;
  if (footerCopyright) {
    footerCopyright.innerHTML = `${t.footer_copyright} &nbsp;|&nbsp; <a href="#">${t.footer_privacy_policy}</a> &nbsp;|&nbsp; <a href="#">${t.footer_terms_of_service}</a>`;
  }
  
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

// 语言切换初始化已移至initLanguageSwitch函数

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

// 移动端汉堡菜单功能
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      
      // 切换图标
      const icon = mobileMenuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-times';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });
    
    // 点击菜单项时关闭菜单
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.className = 'fa-solid fa-bars';
      });
    });
    
    // 点击外部区域关闭菜单
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.className = 'fa-solid fa-bars';
      }
    });
  }
}

// 页面加载时初始化语言切换
document.addEventListener('DOMContentLoaded', function() {
  // 初始化用户评价模块（仅在主页）
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    initTestimonials();
  }
  
  // 初始化语言切换（在testimonials之后）
  initLanguageSwitch();
  
  // 初始化移动端菜单
  initMobileMenu();
}); 