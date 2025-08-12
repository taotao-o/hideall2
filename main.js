// Hide All 官网主页主要交互脚本 v2.0.8
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
let testimonialsScrollSpeed = 1; // 增加滚动速度
let testimonialsScrollInterval = 50; // 增加间隔时间
let testimonialsInitialized = false;

// 初始化用户评价模块
function initTestimonials() {
  console.log('=== Starting testimonials initialization ===');
  
  const scrollContainer = document.getElementById('testimonials-scroll');
  if (!scrollContainer) {
    console.warn('testimonials-scroll container not found');
    return;
  }

  // 清理之前的滚动定时器
  if (testimonialsScrollTimer) {
    clearInterval(testimonialsScrollTimer);
    testimonialsScrollTimer = null;
    console.log('Cleared previous timer');
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
  console.log('Current language:', currentLang);
  
  const currentTestimonials = testimonialsData[currentLang] || testimonialsData.en;
  console.log('Testimonials data:', currentTestimonials);
  
  // 检查数据是否有效
  if (!currentTestimonials || !Array.isArray(currentTestimonials) || currentTestimonials.length === 0) {
    console.warn('Invalid testimonials data for language:', currentLang);
    return;
  }
  
  // 复制数组以实现无缝循环
  const duplicatedTestimonials = [...currentTestimonials, ...currentTestimonials];
  console.log('Duplicated testimonials length:', duplicatedTestimonials.length);
  
  // 生成所有卡片HTML
  const cardsHTML = duplicatedTestimonials.map(generateTestimonialCard).join('');
  scrollContainer.innerHTML = cardsHTML;
  console.log('Generated HTML for testimonials');

  // 自动滚动功能
  function autoScroll() {
    testimonialsScrollPosition += testimonialsScrollSpeed;
    
    // 当滚动到第一组卡片的末尾时，重置到开始位置
    const firstSetWidth = currentTestimonials.length * (320 + 24); // 卡片宽度 + gap
    if (testimonialsScrollPosition >= firstSetWidth) {
      testimonialsScrollPosition = 0;
    }
    
    // 检查是否为RTL语言（阿拉伯语）
    const isRTL = currentLang === 'ar';
    
    // 在RTL模式下，滚动方向保持不变（从左到右），但内容显示为RTL
    scrollContainer.style.transform = `translateX(-${testimonialsScrollPosition}px)`;
    console.log('Scrolling position:', testimonialsScrollPosition, 'First set width:', firstSetWidth, 'RTL:', isRTL);
  }

  function startScroll() {
    // 确保只有一个定时器在运行
    if (testimonialsScrollTimer) {
      clearInterval(testimonialsScrollTimer);
    }
    testimonialsScrollTimer = setInterval(autoScroll, testimonialsScrollInterval);
    console.log('Started scrolling with interval:', testimonialsScrollInterval);
  }

  function stopScroll() {
    if (testimonialsScrollTimer) {
      clearInterval(testimonialsScrollTimer);
      testimonialsScrollTimer = null;
      console.log('Stopped scrolling');
    }
  }

  // 清理之前的事件监听器
  const oldStopHandler = scrollContainer._stopScrollHandler;
  const oldStartHandler = scrollContainer._startScrollHandler;
  
  if (oldStopHandler) {
    scrollContainer.removeEventListener('mouseenter', oldStopHandler);
    console.log('Removed old stop handler');
  }
  if (oldStartHandler) {
    scrollContainer.removeEventListener('mouseleave', oldStartHandler);
    console.log('Removed old start handler');
  }

  // 创建新的事件处理函数
  const stopScrollHandler = () => {
    console.log('Mouse entered, stopping scroll');
    stopScroll();
  };
  
  const startScrollHandler = () => {
    console.log('Mouse left, starting scroll');
    startScroll();
  };

  // 保存事件处理函数引用
  scrollContainer._stopScrollHandler = stopScrollHandler;
  scrollContainer._startScrollHandler = startScrollHandler;

  // 启动自动滚动
  startScroll();

  // 鼠标悬停时暂停滚动
  scrollContainer.addEventListener('mouseenter', stopScrollHandler);

  // 鼠标离开时恢复滚动
  scrollContainer.addEventListener('mouseleave', startScrollHandler);
  
  testimonialsInitialized = true;
  console.log('=== Testimonials initialization completed ===');
  console.log('Language:', currentLang, 'Items:', currentTestimonials.length);
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
    btn_download: "Try for free",
    btn_watch_demo: "Watch Demo",
    
    // Why Choose区域
    why_title: "Why Choose HIDE ALL?",
    why_card1_title: "Hide Apps & Data with Stealth Technology",
    why_card1_desc: "Hide All excels at hide apps, discreetly keeping sensitive info safe—better than other hide apps tools. Its tech makes apps invisible, with hide apps functionality that removes them from your home screen without a trace.It also offers top-notch app lock: access hidden apps only via secret PIN or pattern, as app lock adds a strong layer of protection. Hide All combines hide apps and app lock seamlessly, ensuring your privacy with both hide apps and app lock working flawlessly.",
    why_card2_title: "Manage Multiple Accounts Simultaneously",
    why_card2_desc: "With Hide All, run multiple hide apps accounts for almost any app simultaneously—no data interference, and app lock adds security. Hide apps in different accounts (social, games, business), switch easily without logging in/out, all guarded by app lock. It supports Facebook, Instagram, Snapchat, Telegram, plus gaming apps like Roblox, Call of Duty, Free Fire and MONOPOLY GO, with app lock securing every account.",
    why_card3_title: "Private Photos & Videos: Securely Stored and Easily Browsed",
    why_card3_desc: "With Hide All, you can hide apps and protect personal media, using hide apps and app lock for extra security. Hide apps to keep them hidden, store private photos, videos and files in the vault—app lock ensures only you access them. Its sleek interface lets you use a private vault or hide apps for encrypted storage, accessed via a secret calculator facade. Here, hide apps and app lock work together, keeping media hidden yet accessible.",
    why_card4_title: "Stealth Installation: No One Will Ever Know",
    why_card4_desc: "One of Hide All's top features is stealth installation. When you hide apps, they leave no trace in the system—no recent tasks, no records—making hide apps untraceable. Even tech-savvy users can't uncover your hide apps. Shield private apps with hide apps tools and app lock: app lock adds a strong barrier, while hide apps keeps them hidden. A secret vault, disguised as a calculator, uses this facade to hide apps, with app lock securing it.",
    why_card5_title: "Robust Security Features for Ultimate Privacy",
    why_card5_desc: "Hide apps securely with features like password protection, pattern locks, or even fingerprint authentication—all to guard hide apps and app lock. Only you can access the hide apps and content, as app lock ensures no one else breaks into your vault. This multi-layered protection, blending hide apps and app lock, keeps your data private, giving peace of mind in a digital world rife with privacy threats.",
    why_card6_title: "Customizable User Interface for Seamless Operation",
    why_card6_desc: "Hide All's hide apps solution is user-friendly, pairing smoothly with app lock. Customize your interface: organize hide apps into smart categories (Work, Health, Social), create hidden pages for more privacy—app lock adds a secure layer. With themes, icons, and transitions, hide apps work efficiently, and app lock keeps this setup protected, fitting your needs.",
    why_card7_title: "Switch Accounts with Ease",
    why_card7_desc: "Quickly toggle between different accounts with just one tap, all secured by app lock. Whether managing social media profiles, running dual gaming accounts, or working with multiple hide apps, Hide All lets you switch effortlessly—with app lock guarding each account. This ensures you never miss important messages or notifications, no matter which account you use, thanks to app lock keeping access smooth yet secure.",
    why_card8_title: "Enhanced Productivity and Flexibility",
    why_card8_desc: "People are always troubled by how to hide apps on android or iPhones? Thanks to the app's powerful features, including app lock, you can boost productivity—app lock secures quick access to storage stats, notes, or shortcuts to your encrypted vault. Organize your personal apps as you like, by frequency, color, or alphabetically, with app lock guarding the setup. With one-tap split-screen pairing, maximize screen space for multitasking, all while app lock keeps things protected.",
    
    // Features区域
    features_title: "Features of HIDE ALL",
    feature1_title: "Advanced hide apps solution",
    feature1_desc: "Store apps securely in a hidden zone; app lock blocks access without the right password or biometrics—app lock safeguards it.",
    feature2_title: "Multi-Account Support",
    feature2_desc: "Run multiple social, gaming, business app accounts—no logging in/out, with app lock securing each. App lock guards smooth switching.",
    feature3_title: "Stealth Installation",
    feature3_desc: "Hide apps completely with no trace left behind on your device.",
    feature4_title: "Calculator Vault",
    feature4_desc: "Disguise your vault as a simple calculator app for added privacy.",
    feature5_title: "Private Storage",
    feature5_desc: "Store private photos, videos, and files in a secure, encrypted vault—hide apps in this secret zone, all guarded by app lock.",
    feature6_title: "Customizable Interface",
    feature6_desc: "Personalize the app's appearance and layout to match your style and workflow, with app lock securing your custom settings.",
    feature7_title: "Seamless Account Switching",
    feature7_desc: "Instantly toggle between accounts with a single tap, all protected by app lock.",
    feature8_title: "Enhanced Productivity and Flexibility",
    feature8_desc: "Boost productivity with quick access to storage stats, notes, and encrypted vault shortcuts—all secured by app lock. Organize apps your way for maximum efficiency, with app lock guarding the setup.",
    
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
    faq_answer5: "Hide All is designed for Android devices and works on most modern smartphones and tablets. The app is optimized for performance and uses minimal system resources, ensuring smooth operation on various device specifications.",
    
    // Privacy模块
    privacy_badge: "Privacy Excellence",
    privacy_title: "Why Hide All Excels at Privacy",
    privacy_subtitle: "Discover the advanced features that make Hide All the most trusted privacy protection solution",
    privacy_highlight1_title: "Advanced Encryption",
    privacy_highlight1_desc: "Military-grade encryption protects your data with the highest security standards",
    privacy_highlight2_title: "Lightning Fast",
    privacy_highlight2_desc: "Instant app switching and hiding with zero performance impact",
    privacy_highlight3_title: "Zero Traces",
    privacy_highlight3_desc: "Complete invisibility with no traces left on your device",
    // Privacy功能卡片翻译
    privacy_card1_title: "Unmatched App Hiding Capabilities",
    privacy_card1_desc: "Hide All lets you thoroughly hide apps from home screens and app drawers. Our technology ensures you can securely hide apps without residual traces - the most effective method to hide apps on any device. Access your hidden content exclusively through our disguised calculator vault. This system guarantees you can reliably hide apps from unauthorized access.",
    privacy_card2_title: "Military-Grade App Lock Security",
    privacy_card2_desc: "Every secured space features advanced app lock protection. Combine biometrics with passwords to fortify entries. Our app lock activates automatically during intrusion attempts. For maximum security, use our tools to hide apps while applying app lock features simultaneously - locking apps after you hide apps in vaults.",
    privacy_card3_title: "Cross-Platform App Management",
    privacy_card3_desc: "Run parallel accounts without constant logins. Hide All helps you hide apps in separate profiles while maintaining data isolation. Switch between modes while app lock secures each account. This system allows you to hide apps across environments securely.",
    privacy_card4_title: "Media Protection with Dual Security",
    privacy_card4_desc: "Store private photos/videos in encrypted galleries. Hide All ensures you can hide apps containing media while applying app lock protection. Browse through decoy interfaces while actual content stays secured. This dual approach means you hide apps and lock them for complete safety.",
    privacy_card5_title: "Undetectable App Concealment",
    privacy_card5_desc: "When you hide apps with Hide All, they vanish completely - no installation records. Our stealth mode ensures nobody can detect when you hide apps. The app lock system further obscures access logs for all hide apps activities.",
    privacy_card6_title: "Smart Automation Systems",
    privacy_card6_desc: "Configure automatic app lock reactivation during risks. Motion-sensing instantly makes you hide apps when devices move unexpectedly. Automatically hide apps during screen-sharing while app lock engages.",
    privacy_card7_title: "Customizable Privacy Hub",
    privacy_card7_desc: "Personalize security with themes and layouts. Organize where you hide apps using categories (Social/Work). The dashboard provides quick actions to hide apps or activate app lock. Effortlessly hide apps using gestures.",
    privacy_card8_title: "Instant Account Switching",
    privacy_card8_desc: "Toggle between profiles instantly. Manage accounts while app lock prevents leaks. Access hide apps across profiles without exposure. Never reveal personal items when you hide apps professionally.",
    
    // Privacy小卡片短词翻译
    privacy_small_text1: "Hiding",
    privacy_small_text2: "Lock",
    privacy_small_text3: "Cross-Platform",
    privacy_small_text4: "Media Protection",
    privacy_small_text5: "Undetectable",
    privacy_small_text6: "Automation",
    privacy_small_text7: "Customizable",
    privacy_small_text8: "Instant",
    
    // How Hide All Works模块
    how_works_title: "How Hide All Works",
    how_works_subtitle: "Discover the simple steps to enhance your digital privacy and focus—with App Lock securing apps and Hide All hiding them all.",
    how_works_card1_title: "Customizable Home Screen",
    how_works_card2_title: "Privacy Protection",
    how_works_card3_title: "App Hiding",
    how_works_card4_title: "Lock Calc",
    how_works_card5_title: "Disguise as a Calculator",
    
    // VideoPlayerSection模块更新
    video_walkthrough_title: "Video Walkthrough",
    video_walkthrough_subtitle: "See how Hide All works",
    video_demo_label: "Watch Demo",
    core_security_features: "Core Security Features"
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
    faq_answer5: "يتم تصميم إخفاء الكل لأجهزة Android ويعمل على أجهزة الهواتف الحديثة والطابقات. التطبيق مصمم للأداء ويستخدم موارد نظام أقل، مضمون عمله بشكل سلس على مختلف مواصفات الجهاز.",
    
    // Privacy模块
    privacy_badge: "التميز في الخصوصية",
    privacy_title: "لماذا يتفوق Hide All في حماية الخصوصية",
    privacy_subtitle: "اكتشف الميزات المتقدمة التي تجعل Hide All الحل الأكثر موثوقية لحماية الخصوصية",
    privacy_highlight1_title: "التشفير المتقدم",
    privacy_highlight1_desc: "التشفير العسكري يحمي بياناتك بأعلى معايير الأمان",
    privacy_highlight2_title: "سريع كالبرق",
    privacy_highlight2_desc: "تبديل وإخفاء التطبيقات فورياً بدون أي تأثير على الأداء",
    privacy_highlight3_title: "بدون آثار",
    privacy_highlight3_desc: "الاختفاء التام بدون ترك أي آثار على جهازك",
    // Privacy功能卡片翻译
    privacy_card1_title: "القدرة غير المساوية على إخفاء التطبيقات",
    privacy_card1_desc: "يسمح لك Hide All بإخفاء التطبيقات بشكل كامل من شاشات المنزل والمسحوق. تقنيتنا تضمن أن يمكنك إخفاء التطبيقات بأمان بدون آثار خلفية - أكثر طريقة فعالة لإخفاء التطبيقات على أي جهاز. الوصول إلى المحتوى المخفي بشكل حصري من خلال خزنة التمويه الحاسبة. هذا النظام يضمن أن يمكنك إخفاء التطبيقات بأمان من الوصول غير المصرح به.",
    privacy_card2_title: "أمان التطبيقات العسكري",
    privacy_card2_desc: "كل مساحة محمية تتمتع بحماية أمان تطبيقات علوية. اجمع البيانات الحساسة مع كلمات المرور لتثبيت المدخلات. حماية تطبيق التمويه تفعل تلقائياً أثناء محاولات الاختراق. للحد من الأمان، استخدم أدواتنا لإخفاء التطبيقات أثناء تفعيل ميزات حماية التطبيقات - إغلاق التطبيقات بعد إخفاءها في الخزائن.",
    privacy_card3_title: "إدارة التطبيقات عبر الأنظمة المتعددة",
    privacy_card3_desc: "تشغيل حسابات متوازية دون تسجيل دائم. يساعدك Hide All في إخفاء التطبيقات في الملفات الشخصية المنفصلة أثناء الحفاظ على العزلة البيانية. التبديل بين الوضعين أثناء حماية حساب كل منهما. يسمح لك بإخفاء التطبيقات عبر البيئات بأمان.",
    privacy_card4_title: "حماية الوسائط بأمان ثنائي",
    privacy_card4_desc: "تخزين الصور/الفيديوهات الخاصة في جلاسات مشفرة. تضمن Hide All أن يمكنك إخفاء التطبيقات التي تحتوي على وسائط أثناء تفعيل حماية تطبيقات. تصفح خلال واجهات المظاهر المضللة أثناء المحتوى الفعلي يبقى محمياً. هذا النهج الثنائي يعني أنك إخفاء التطبيقات وإغلاقها للحماية الكاملة.",
    privacy_card5_title: "إخفاء التطبيقات غير القابل للكشف",
    privacy_card5_desc: "عند إخفاء التطبيقات باستخدام Hide All، يختفيون تماماً - لا تسجيلات تثبيت. وضع الخفاء يضمن أنه لا يمكن لأي شخص الكشف عند إخفاء التطبيقات. نظام حماية التطبيقات يضيف أيضاً سجلات الوصول إلى جميع أنشطة إخفاء التطبيقات.",
    privacy_card6_title: "أنظمة أتمتة ذكية",
    privacy_card6_desc: "تكوين إعادة تفعيل حماية تطبيق أتمت أثناء المخاطر. الاستشعار الحركي يجعلك إخفاء التطبيقات تلقائياً عند حركة الأجهزة بشكل غير متوقع. إخفاء التطبيقات تلقائياً أثناء المشاركة في الشاشة أثناء تفعيل حماية التطبيقات.",
    privacy_card7_title: "مركز خصوصية تخصيصي",
    privacy_card7_desc: "تخصيص الأمان بالثيمات والتخطيطات. تنظيم أين تخفي التطبيقات باستخدام التصنيفات (الاجتماعي/العمل). لوحة التحكم توفر إجراءات سريعة لإخفاء التطبيقات أو تفعيل حماية التطبيقات. إخفاء التطبيقات باستخدام المؤشرات بسهولة.",
    privacy_card8_title: "تبديل حساب فوري",
    privacy_card8_desc: "تبديل بين الملفات الشخصية بسرعة. إدارة الحسابات أثناء حماية التطبيقات يمنع التسربات. الوصول إلى التطبيقات عبر الملفات الشخصية بدون ظهور. لا تعرض عناصر شخصية عند إخفاء التطبيقات بشكل حرفي.",
    
    // Privacy小卡片短词翻译
    privacy_small_text1: "إخفاء",
    privacy_small_text2: "قفل",
    privacy_small_text3: "عبر المنصات",
    privacy_small_text4: "حماية الوسائط",
    privacy_small_text5: "غير قابل للكشف",
    privacy_small_text6: "أتمتة",
    privacy_small_text7: "قابل للتخصيص",
    privacy_small_text8: "فوري",
    
    // How Hide All Works模块
    how_works_title: "كيف تعمل إخفاء الكل؟",
    how_works_subtitle: "اكتشف الخطوات البسيطة لتحسين خصوصيتك الرقمية وتركيزك - مع إخفاء الكل يحمي التطبيقات وإخفاء الكل يخفيها جميعاً.",
    how_works_card1_title: "شاشة مخصصة",
    how_works_card2_title: "حماية الخصوصية",
    how_works_card3_title: "إخفاء التطبيقات",
    how_works_card4_title: "إخفاء الكل",
    how_works_card5_title: "إخفاء الكل كتطبيق حاسبة",
    
    // VideoPlayerSection模块更新
    video_walkthrough_title: "فيديو التوضيح",
    video_walkthrough_subtitle: "كيف تعمل إخفاء الكل؟",
    video_demo_label: "مشاهدة العرض التوضيحي",
    core_security_features: "ميزات الأمان المركزية"
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
    faq_answer5: "हाइड ऑल Android डिवाइस के लिए डिज़ाइन किया गया है और अधिकांश आधुनिक स्मार्टफोन और टैबलेट पर काम करता है। ऐप को प्रदर्शन के लिए अनुकूलित किया गया है।",
    
    // Privacy模块
    privacy_badge: "गोपनीयता उत्कृष्टता",
    privacy_title: "Hide All गोपनीयता में क्यों उत्कृष्ट है",
    privacy_subtitle: "उन्नत सुविधाओं की खोज करें जो Hide All को सबसे विश्वसनीय गोपनीयता सुरक्षा समाधान बनाती हैं",
    privacy_highlight1_title: "उन्नत एन्क्रिप्शन",
    privacy_highlight1_desc: "सैन्य-स्तर का एन्क्रिप्शन आपके डेटा को उच्चतम सुरक्षा मानकों के साथ सुरक्षित करता है",
    privacy_highlight2_title: "बिजली की तरह तेज",
    privacy_highlight2_desc: "शून्य प्रदर्शन प्रभाव के साथ तत्काल ऐप स्विचिंग और छिपाना",
    privacy_highlight3_title: "शून्य निशान",
    privacy_highlight3_desc: "आपके डिवाइस पर कोई निशान न छोड़ते हुए पूर्ण अदृश्यता",
    // Privacy功能卡片翻译
    privacy_card1_title: "अनन्य ऐप छिपाने की क्षमता",
    privacy_card1_desc: "Hide All आपको होमस्क्रीन और ऐप ड्रॉअर से ऐप्स को गुप्त करने में मदद करता है। हमारी तकनीक यह सुनिश्चित करती है कि आप ऐप्स को बिना शेष ट्रेस के गुप्त कर सकते हैं - सबसे अधिक प्रभावी तरीका किसी भी डिवाइस पर ऐप्स छिपाने के लिए। हमारी छद्म गणना वॉल्ट के माध्यम से आपको अपने गुप्त होने वाले होने के अंदर अदृश्य होने की अनुमति देती है। यह निकाय यह सुनिश्चित करता है कि आप अनुमोदित नहीं हों।",
    privacy_card2_title: "सैन्य-स्तर ऐप लॉक सुरक्षा",
    privacy_card2_desc: "प्रत्येक स्थान जो सुरक्षित है वह उन्नत ऐप लॉक सुरक्षा की विशेषता को शामिल करता है। बाइयोमेट्रिक्स और पासवर्ड को जोड़कर प्रवेश दर्ज करें। हमारा ऐप लॉक अपने आप अभियान के दौरान स्वचालित रूप से चालू होता है। अधिकतम सुरक्षा के लिए, हमारे उपकरणों का उपयोग करके ऐप्स छिपाएं जब भी ऐप लॉक विशेषताओं को साथ में लागू करें - ऐप्स को जब भी वॉल्ट में छिपाने के बाद बंद करें।",
    privacy_card3_title: "क्रॉस-प्लेटफॉर्म ऐप प्रबंधन",
    privacy_card3_desc: "समानांतर खातों को निरंतर लॉगिन के बिना चलाएं। Hide All आपको अलग प्रोफाइलों में ऐप्स छिपाने में मदद करता है जब भी डेटा का अलग होना बनाया जाता है। भाग बीच में जाने के दौरान ऐप लॉक प्रत्येक खाते को बंद करता है। यह निकाय आपको अपने अन्य पर्यावरणों में ऐप्स छिपाने की अनुमति देता है।",
    privacy_card4_title: "डबल सुरक्षा के साथ मीडिया सुरक्षा",
    privacy_card4_desc: "अद्वितीय छवियों/वीडियों को एन्क्रिप्टेड गैलरी में संग्रहीत करें। Hide All यह सुनिश्चित करता है कि आप ऐप्स को जोड़ते हैं जो मीडिया को शामिल करते हैं जब भी ऐप लॉक सुरक्षा लागू करते हैं। वास्तविक सामग्री जानकारी जब भी सुरक्षित रहती है वह अदृश्य होती है। यह डबल दृष्टिकोण यह सुनिश्चित करता है कि आप ऐप्स छिपाते हैं और उन्हें पूरी तरह से सुरक्षित करते हैं।",
    privacy_card5_title: "अविश्वसनीय ऐप छिपाना",
    privacy_card5_desc: "जब भी आप Hide All का उपयोग करते हैं, तो वे पूरी तरह से खत्म हो जाते हैं - कोई इंस्टॉलेशन रेकर्ड नहीं। हमारा छद्म दृश्य यह सुनिश्चित करता है कि कोई भी नहीं देख सकता जब आप ऐप्स छिपाते हैं। ऐप लॉक निकाय और अधिक है जो सभी ऐप्स छिपाने की गतिविधियों के लिए प्रविष्ट लॉग दर्ज करता है।",
    privacy_card6_title: "बुद्धिमान अटॉमेशन सिस्टम",
    privacy_card6_desc: "जोखिम के दौरान स्वचालित ऐप लॉक पुनर्चालू को कॉन्फ़िगर करें। गतिविधि-संवेदनशील आपको जब भी डिवाइस अप्रत्याशित गति से चलते हैं ऐप्स छिपाने की अनुमति देता है। जब भी ऐप लॉक सुरक्षा लागू होती है और अटॉमेशन के दौरान ऐप्स छिपाने की अनुमति देता है।",
    privacy_card7_title: "कस्टमाइज़ेबल गोपनीयता हब",
    privacy_card7_desc: "सुरक्षा को फ़ॉन्ट और लेआउट के साथ व्यक्तिगत करें। जहां आप ऐप्स छिपाते हैं उसे वर्गों (सामाजिक/काम) का उपयोग करके व्यवस्थित करें। डैशबोर्ड जल्द ही ऐप्स छिपाने या ऐप लॉक सक्रिय करने के लिए कार्य प्रदान करता है। ऐप्स छिपाने के लिए हस्ताक्षरों का उपयोग करके आसानी से ऐप्स छिपाने की अनुमति देता है।",
    privacy_card8_title: "तत्काल खाता बदलना",
    privacy_card8_desc: "बिना अनुभव के बीच बदलें। जब भी ऐप लॉक अप्रवेश रोकता है और अटॉमेशन के दौरान ऐप्स छिपाने की अनुमति देता है। अपने अन्य प्रोफाइलों में ऐप्स छिपाने के बिना अनुभव। जब भी आप ऐप्स छिपाते हैं तो व्यक्तिगत वस्तुओं को अनुभव नहीं करें।",
    
    // Privacy小卡片短词翻译
    privacy_small_text1: "छिपाना",
    privacy_small_text2: "लॉक",
    privacy_small_text3: "क्रॉस-प्लेटफॉर्म",
    privacy_small_text4: "मीडिया सुरक्षा",
    privacy_small_text5: "अविश्वसनीय",
    privacy_small_text6: "अटॉमेशन",
    privacy_small_text7: "कस्टमाइज़ेबल",
    privacy_small_text8: "तत्काल",
    
    // How Hide All Works模块
    how_works_title: "हाइड ऑल कैसे काम करता है",
    how_works_subtitle: "अपनी डिजिटल गोपनीयता और फोकस को बढ़ाने के सरल कदम खोजें - ऐप लॉक के साथ ऐप्स को सुरक्षित करें और हाइड ऑल सभी को छिपाएं।",
    how_works_card1_title: "कस्टमाइज़ेबल होम स्क्रीन",
    how_works_card2_title: "गोपनीयता सुरक्षा",
    how_works_card3_title: "ऐप छिपाना",
    how_works_card4_title: "लॉक कैल्क",
    how_works_card5_title: "कैलकुलेटर के रूप में छिपाना",
    
    // VideoPlayerSection模块更新
    video_walkthrough_title: "वीडियो ट्यूटोरियल",
    video_walkthrough_subtitle: "हाइड ऑल कैसे काम करता है",
    video_demo_label: "डेमो देखें",
    core_security_features: "कोर सुरक्षा विशेषताएं"
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
    faq_answer5: "Hide All dirancang untuk perangkat Android dan bekerja di sebagian besar smartphone dan tablet modern. Aplikasi dioptimalkan untuk performa dan menggunakan sumber daya sistem minimal.",
    
    // Privacy模块
    privacy_badge: "Keunggulan Privasi",
    privacy_title: "Mengapa Hide All Unggul dalam Privasi",
    privacy_subtitle: "Temukan fitur-fitur canggih yang menjadikan Hide All solusi perlindungan privasi paling terpercaya",
    privacy_highlight1_title: "Enkripsi Canggih",
    privacy_highlight1_desc: "Enkripsi tingkat militer melindungi data Anda dengan standar keamanan tertinggi",
    privacy_highlight2_title: "Secepat Kilat",
    privacy_highlight2_desc: "Beralih dan menyembunyikan aplikasi secara instan tanpa dampak performa",
    privacy_highlight3_title: "Tanpa Jejak",
    privacy_highlight3_desc: "Tidak terlihat sama sekali tanpa meninggalkan jejak di perangkat Anda",
    // Privacy功能卡片翻译
    privacy_card1_title: "Kemampuan Menyembunyikan Aplikasi yang Tak Tertandingi",
    privacy_card1_desc: "Hide All memungkinkan Anda menyembunyikan aplikasi secara menyeluruh dari layar beranda dan laci aplikasi. Teknologi kami memastikan Anda dapat menyembunyikan aplikasi dengan aman tanpa jejak sisa - metode paling efektif untuk menyembunyikan aplikasi di perangkat apa pun. Akses konten tersembunyi Anda secara eksklusif melalui vault kalkulator yang menyamar. Sistem ini menjamin Anda dapat menyembunyikan aplikasi dengan andal dari akses yang tidak sah.",
    privacy_card2_title: "Keamanan Kunci Aplikasi Tingkat Militer",
    privacy_card2_desc: "Setiap ruang yang diamankan memiliki perlindungan kunci aplikasi canggih. Gabungkan biometrik dengan kata sandi untuk memperkuat entri. Kunci aplikasi kami aktif secara otomatis selama upaya intrusi. Untuk keamanan maksimal, gunakan alat kami untuk menyembunyikan aplikasi sambil menerapkan fitur kunci aplikasi secara bersamaan - mengunci aplikasi setelah Anda menyembunyikan aplikasi di vault.",
    privacy_card3_title: "Manajemen Aplikasi Lintas Platform",
    privacy_card3_desc: "Jalankan akun paralel tanpa login konstan. Hide All membantu Anda menyembunyikan aplikasi dalam profil terpisah sambil mempertahankan isolasi data. Beralih antar mode sementara kunci aplikasi mengamankan setiap akun. Sistem ini memungkinkan Anda menyembunyikan aplikasi di berbagai lingkungan dengan aman.",
    privacy_card4_title: "Perlindungan Media dengan Keamanan Ganda",
    privacy_card4_desc: "Simpan foto/video pribadi di galeri terenkripsi. Hide All memastikan Anda dapat menyembunyikan aplikasi yang berisi media sambil menerapkan perlindungan kunci aplikasi. Jelajahi antarmuka umpan sementara konten asli tetap diamankan. Pendekatan ganda ini berarti Anda menyembunyikan aplikasi dan menguncinya untuk keamanan lengkap.",
    privacy_card5_title: "Penyembunyian Aplikasi yang Tidak Terdeteksi",
    privacy_card5_desc: "Ketika Anda menyembunyikan aplikasi dengan Hide All, mereka menghilang sepenuhnya - tidak ada catatan instalasi. Mode siluman kami memastikan tidak ada yang dapat mendeteksi ketika Anda menyembunyikan aplikasi. Sistem kunci aplikasi lebih lanjut mengaburkan log akses untuk semua aktivitas menyembunyikan aplikasi.",
    privacy_card6_title: "Sistem Otomasi Cerdas",
    privacy_card6_desc: "Konfigurasikan reaktivasi kunci aplikasi otomatis selama risiko. Sensor gerakan secara instan membuat Anda menyembunyikan aplikasi ketika perangkat bergerak secara tak terduga. Secara otomatis menyembunyikan aplikasi selama berbagi layar sementara kunci aplikasi terlibat.",
    privacy_card7_title: "Hub Privasi yang Dapat Disesuaikan",
    privacy_card7_desc: "Personalisasi keamanan dengan tema dan tata letak. Atur di mana Anda menyembunyikan aplikasi menggunakan kategori (Sosial/Pekerjaan). Dasbor menyediakan tindakan cepat untuk menyembunyikan aplikasi atau mengaktifkan kunci aplikasi. Dengan mudah menyembunyikan aplikasi menggunakan gerakan.",
    privacy_card8_title: "Beralih Akun Instan",
    privacy_card8_desc: "Beralih antar profil secara instan. Kelola akun sementara kunci aplikasi mencegah kebocoran. Akses aplikasi tersembunyi di berbagai profil tanpa paparan. Jangan pernah mengungkapkan item pribadi ketika Anda menyembunyikan aplikasi secara profesional.",
    
    // Privacy小卡片短词翻译
    privacy_small_text1: "Menyembunyikan",
    privacy_small_text2: "Kunci",
    privacy_small_text3: "Lintas Platform",
    privacy_small_text4: "Perlindungan Media",
    privacy_small_text5: "Tidak Terdeteksi",
    privacy_small_text6: "Otomasi",
    privacy_small_text7: "Dapat Disesuaikan",
    privacy_small_text8: "Instan",
    
    // How Hide All Works模块
    how_works_title: "Bagaimana Hide All Bekerja",
    how_works_subtitle: "Temukan langkah-langkah sederhana untuk meningkatkan privasi digital dan fokus Anda - dengan App Lock mengamankan aplikasi dan Hide All menyembunyikan semuanya.",
    how_works_card1_title: "Layar Beranda yang Dapat Disesuaikan",
    how_works_card2_title: "Perlindungan Privasi",
    how_works_card3_title: "Menyembunyikan Aplikasi",
    how_works_card4_title: "Kunci Kalkulator",
    how_works_card5_title: "Menyamar sebagai Kalkulator",
    
    // VideoPlayerSection模块更新
    video_walkthrough_title: "Video Walkthrough",
    video_walkthrough_subtitle: "How Hide All Works",
    video_demo_label: "Watch Demo",
    core_security_features: "Core Security Features"
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
let lastScrollY = 0;
let ticking = false;

function updateHeaderShadow() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
  }
  ticking = false;
}

window.addEventListener('scroll', function() {
  lastScrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateHeaderShadow);
    ticking = true;
  }
}, { passive: true });

// 3. 语言切换功能
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // 防止页面抖动：锁定页面高度
  const currentPageHeight = document.documentElement.scrollHeight;
  document.body.style.minHeight = currentPageHeight + 'px';
  
  // 设置HTML语言属性
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // 使用DocumentFragment减少DOM操作
  const fragment = document.createDocumentFragment();
  
  // 批量更新DOM元素，减少重排
  const updates = [
    // 导航栏更新
    { selector: 'a[href="index.html"]', text: t.nav_home },
    { selector: 'a[href="reviews.html"]', text: t.nav_reviews },
    { selector: 'a[href="contact.html"]', text: t.nav_contact },
    { selector: 'a[href="faq.html"]', text: t.nav_faq },
    { selector: 'a[href="blog.html"]', text: t.nav_blog },
    
    // Banner区域更新
    { selector: '.banner-left h1', text: t.banner_title },
    { selector: '.banner-left p', text: t.banner_subtitle },
    { selector: '.btn-primary', html: `<i class="fa fa-download"></i> ${t.btn_download}` },
    { selector: '.btn-secondary', html: `<i class="fa fa-play-circle"></i> ${t.btn_watch_demo}` },
    
    // Why Choose区域更新
    { selector: '.why-choose h2', text: t.why_title },
    
    // Features区域更新
    { selector: '.features h2', text: t.features_title },
    
    // User Reviews模块更新
    { selector: '.testimonials-badge', text: t.testimonials_badge },
    { selector: '.testimonials-title', text: t.testimonials_title },
    { selector: '.testimonials-subtitle', text: t.testimonials_subtitle },
    { selector: '.testimonials-stats', html: `
      <i class="fa-solid fa-star"></i>
      <span>5.0</span>
      <span class="testimonials-separator">•</span>
      <span>${t.testimonials_rating}</span>
      <span class="testimonials-separator">•</span>
      <span>${t.testimonials_reviews_count}</span>
    `},
    
    // How Hide All Works模块更新
    { selector: '.text-4xl.font-bold.text-slate-800.mb-4', text: t.how_works_title },
    { selector: '.text-lg.text-slate-600.max-w-3xl.mx-auto', text: t.how_works_subtitle },
    
    // VideoPlayerSection模块更新
    { selector: '.video-walkthrough-title', text: t.video_walkthrough_title },
    { selector: '.video-walkthrough-subtitle', text: t.video_walkthrough_subtitle },
    { selector: '.video-demo-label', text: t.video_demo_label },
    { selector: '.core-security-features-title', text: t.core_security_features }
  ];
  
  // 批量执行更新
  updates.forEach(update => {
    const element = document.querySelector(update.selector);
    if (element) {
      if (update.text !== undefined) {
        element.textContent = update.text;
      } else if (update.html !== undefined) {
        element.innerHTML = update.html;
      }
    }
  });
  
  // 更新Why Choose卡片
  const whyCards = document.querySelectorAll('.why-card');
  if (whyCards.length >= 8) {
    const whyUpdates = [
      { title: t.why_card1_title, desc: t.why_card1_desc },
      { title: t.why_card2_title, desc: t.why_card2_desc },
      { title: t.why_card3_title, desc: t.why_card3_desc },
      { title: t.why_card4_title, desc: t.why_card4_desc },
      { title: t.why_card5_title, desc: t.why_card5_desc },
      { title: t.why_card6_title, desc: t.why_card6_desc },
      { title: t.why_card7_title, desc: t.why_card7_desc },
      { title: t.why_card8_title, desc: t.why_card8_desc }
    ];
    
    whyCards.forEach((card, index) => {
      if (whyUpdates[index]) {
        card.querySelector('.why-title').textContent = whyUpdates[index].title;
        card.querySelector('.why-desc').textContent = whyUpdates[index].desc;
      }
    });
  }
  
  // 更新Features卡片
  const featureRows = document.querySelectorAll('.feature-row');
  if (featureRows.length >= 8) {
    const featureUpdates = [
      { title: t.feature1_title, desc: t.feature1_desc },
      { title: t.feature2_title, desc: t.feature2_desc },
      { title: t.feature3_title, desc: t.feature3_desc },
      { title: t.feature4_title, desc: t.feature4_desc },
      { title: t.feature5_title, desc: t.feature5_desc },
      { title: t.feature6_title, desc: t.feature6_desc },
      { title: t.feature7_title, desc: t.feature7_desc },
      { title: t.feature8_title, desc: t.feature8_desc }
    ];
    
    featureRows.forEach((row, index) => {
      if (featureUpdates[index]) {
        row.querySelector('.feature-title').textContent = featureUpdates[index].title;
        row.querySelector('.feature-desc').textContent = featureUpdates[index].desc;
      }
    });
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
  
  // 更新Privacy模块
  const privacyBadge = document.querySelector('.privacy-badge');
  const privacyTitle = document.querySelector('.privacy-title');
  const privacySubtitle = document.querySelector('.privacy-subtitle');
  const privacyHighlight1Title = document.querySelector('.privacy-highlight:nth-child(1) .privacy-highlight-title');
  const privacyHighlight1Desc = document.querySelector('.privacy-highlight:nth-child(1) .privacy-highlight-desc');
  const privacyHighlight2Title = document.querySelector('.privacy-highlight:nth-child(2) .privacy-highlight-title');
  const privacyHighlight2Desc = document.querySelector('.privacy-highlight:nth-child(2) .privacy-highlight-desc');
  const privacyHighlight3Title = document.querySelector('.privacy-highlight:nth-child(3) .privacy-highlight-title');
  const privacyHighlight3Desc = document.querySelector('.privacy-highlight:nth-child(3) .privacy-highlight-desc');
  
  if (privacyBadge) privacyBadge.textContent = t.privacy_badge;
  if (privacyTitle) privacyTitle.textContent = t.privacy_title;
  if (privacySubtitle) privacySubtitle.textContent = t.privacy_subtitle;
  if (privacyHighlight1Title) privacyHighlight1Title.textContent = t.privacy_highlight1_title;
  if (privacyHighlight1Desc) privacyHighlight1Desc.textContent = t.privacy_highlight1_desc;
  if (privacyHighlight2Title) privacyHighlight2Title.textContent = t.privacy_highlight2_title;
  if (privacyHighlight2Desc) privacyHighlight2Desc.textContent = t.privacy_highlight2_desc;
  if (privacyHighlight3Title) privacyHighlight3Title.textContent = t.privacy_highlight3_title;
  if (privacyHighlight3Desc) privacyHighlight3Desc.textContent = t.privacy_highlight3_desc;
  
  // 更新Privacy小卡片短词
  const privacySmallCards = document.querySelectorAll('.privacy-small-card');
  if (privacySmallCards.length >= 8) {
    privacySmallCards[0].querySelector('.privacy-small-text').textContent = t.privacy_small_text1;
    privacySmallCards[1].querySelector('.privacy-small-text').textContent = t.privacy_small_text2;
    privacySmallCards[2].querySelector('.privacy-small-text').textContent = t.privacy_small_text3;
    privacySmallCards[3].querySelector('.privacy-small-text').textContent = t.privacy_small_text4;
    privacySmallCards[4].querySelector('.privacy-small-text').textContent = t.privacy_small_text5;
    privacySmallCards[5].querySelector('.privacy-small-text').textContent = t.privacy_small_text6;
    privacySmallCards[6].querySelector('.privacy-small-text').textContent = t.privacy_small_text7;
    privacySmallCards[7].querySelector('.privacy-small-text').textContent = t.privacy_small_text8;
  }
  
  // 更新How Hide All Works模块卡片标题
  const howWorksCards = document.querySelectorAll('.bg-white.shadow-lg.rounded-2xl.border-2.border-slate-200.text-center.p-6 h3');
  
  // 更新VideoPlayerSection的8个功能特性
  const videoFeatureItems = document.querySelectorAll('.feature-item-1, .feature-item-2, .feature-item-3, .feature-item-4, .feature-item-5, .feature-item-6, .feature-item-7, .feature-item-8');
  
  if (videoFeatureItems.length >= 8) {
    const featureTitles = {
      en: [
        "Industry-Leading Hide Apps System",
        "Military App Lock Protection",
        "Stealth Calculator Vault",
        "Cross-Profile Isolation",
        "Auto-Cloaking Technology",
        "Zero Digital Footprint",
        "Private Media Encryption",
        "Custom Security Profiles"
      ],
      ar: [
        "نظام إخفاء التطبيقات الرائد في الصناعة",
        "حماية قفل التطبيقات العسكرية",
        "خزنة الحاسبة المتخفية",
        "عزل متعدد الملفات الشخصية",
        "تقنية الإخفاء التلقائي",
        "بصمة رقمية صفرية",
        "تشفير الوسائط الخاصة",
        "ملفات الأمان المخصصة"
      ],
      hi: [
        "उद्योग की अग्रणी ऐप छुपाने की प्रणाली",
        "सैन्य ऐप लॉक सुरक्षा",
        "गुप्त कैलकुलेटर वॉल्ट",
        "क्रॉस-प्रोफाइल आइसोलेशन",
        "ऑटो-क्लोकिंग तकनीक",
        "शून्य डिजिटल फुटप्रिंट",
        "निजी मीडिया एन्क्रिप्शन",
        "कस्टम सुरक्षा प्रोफाइल"
      ],
      id: [
        "Sistem Sembunyikan Aplikasi Terdepan di Industri",
        "Perlindungan Kunci Aplikasi Militer",
        "Vault Kalkulator Tersembunyi",
        "Isolasi Lintas-Profil",
        "Teknologi Auto-Cloaking",
        "Jejak Digital Zero",
        "Enkripsi Media Pribadi",
        "Profil Keamanan Kustom"
      ]
    };
    
    const featureDescs = {
      en: [
        "Completely conceal applications (50+ support)",
        "Biometric/PIN security (16 layers)",
        "Disguised entry point",
        "Securely hide apps in workspaces",
        "Smart triggers to hide apps during risks",
        "No traces when you hide apps",
        "Lock galleries after you hide apps",
        "Save configurations to hide apps"
      ],
      ar: [
        "إخفاء التطبيقات بالكامل (دعم أكثر من 50)",
        "أمان بيومتري/رقم سري (16 طبقة)",
        "نقطة دخول متنكرة",
        "إخفاء التطبيقات بأمان في مساحات العمل",
        "محفزات ذكية لإخفاء التطبيقات أثناء المخاطر",
        "لا توجد آثار عند إخفاء التطبيقات",
        "قفل المعارض بعد إخفاء التطبيقات",
        "حفظ التكوينات لإخفاء التطبيقات"
      ],
      hi: [
        "एप्लिकेशन को पूरी तरह छुपाएं (50+ समर्थन)",
        "बायोमेट्रिक/पिन सुरक्षा (16 परतें)",
        "छुपे हुए प्रवेश बिंदु",
        "कार्यक्षेत्रों में ऐप्स को सुरक्षित रूप से छुपाएं",
        "जोखिम के दौरान ऐप्स छुपाने के लिए स्मार्ट ट्रिगर",
        "ऐप्स छुपाने पर कोई निशान नहीं",
        "ऐप्स छुपाने के बाद गैलरी लॉक करें",
        "ऐप्स छुपाने के लिए कॉन्फ़िगरेशन सहेजें"
      ],
      id: [
        "Sembunyikan aplikasi sepenuhnya (50+ dukungan)",
        "Keamanan biometrik/PIN (16 lapisan)",
        "Titik masuk tersamar",
        "Sembunyikan aplikasi dengan aman di ruang kerja",
        "Pemicu cerdas untuk menyembunyikan aplikasi saat risiko",
        "Tidak ada jejak saat menyembunyikan aplikasi",
        "Kunci galeri setelah menyembunyikan aplikasi",
        "Simpan konfigurasi untuk menyembunyikan aplikasi"
      ]
    };
    
    const currentTitles = featureTitles[lang] || featureTitles.en;
    const currentDescs = featureDescs[lang] || featureDescs.en;
    
    videoFeatureItems.forEach((item, index) => {
      const titleElement = item.querySelector('.feature-title');
      const descElement = item.querySelector('.feature-desc');
      
      if (titleElement && currentTitles[index]) {
        titleElement.textContent = currentTitles[index];
      }
      if (descElement && currentDescs[index]) {
        descElement.textContent = currentDescs[index];
      }
    });
  }  if (howWorksCards.length >= 5) {
    howWorksCards[0].textContent = t.how_works_card1_title;
    howWorksCards[1].textContent = t.how_works_card2_title;
    howWorksCards[2].textContent = t.how_works_card3_title;
    howWorksCards[3].textContent = t.how_works_card4_title;
    howWorksCards[4].textContent = t.how_works_card5_title;
  }
  
  // 重新初始化testimonials模块以更新用户评价内容
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    // 重置初始化标志，确保可以重新初始化
    testimonialsInitialized = false;
    initTestimonials();
    // 重新初始化隐私特色模块
    initPrivacyFeatures();
  }
  
  // 恢复页面高度：使用requestAnimationFrame确保DOM更新完成后再恢复
  requestAnimationFrame(() => {
    // 恢复页面高度，允许自然的高度变化
    document.body.style.minHeight = '';
    // 强制重新计算布局
    document.body.offsetHeight;
  });
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
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    // 设置初始语言
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    
    // 绑定语言切换事件
    languageSelect.addEventListener('change', function() {
      const selectedLanguage = this.value;
      changeLanguage(selectedLanguage);
    });
    
    // 初始化语言
    changeLanguage(savedLanguage);
  }
}

// 移动端菜单功能已移至 mobile-menu-fix.js
function initMobileMenu() {
  // 此函数已废弃，移动端菜单功能由 mobile-menu-fix.js 处理
  console.log('Mobile menu initialization moved to mobile-menu-fix.js');
}

// 已移至文件末尾的主要DOMContentLoaded事件处理器中 

// Privacy模块数据
let privacyFeatures = [];
let currentPrivacyIndex = 0;
let privacyInterval;

// 初始化隐私特色数据
function initPrivacyFeaturesData() {
  const currentLang = localStorage.getItem('selectedLanguage') || 'en';
  const t = translations[currentLang] || translations.en;
  
  privacyFeatures = [
    { title: t.privacy_card1_title, desc: t.privacy_card1_desc, emoji: "🔒" },
    { title: t.privacy_card2_title, desc: t.privacy_card2_desc, emoji: "🛡️" },
    { title: t.privacy_card3_title, desc: t.privacy_card3_desc, emoji: "🌐" },
    { title: t.privacy_card4_title, desc: t.privacy_card4_desc, emoji: "📱" },
    { title: t.privacy_card5_title, desc: t.privacy_card5_desc, emoji: "👻" },
    { title: t.privacy_card6_title, desc: t.privacy_card6_desc, emoji: "⚡" },
    { title: t.privacy_card7_title, desc: t.privacy_card7_desc, emoji: "🎨" },
    { title: t.privacy_card8_title, desc: t.privacy_card8_desc, emoji: "🔄" }
  ];
}

// 初始化隐私特色模块
function initPrivacyFeatures() {
  // 初始化隐私特色数据
  initPrivacyFeaturesData();
  
  const privacyEmoji = document.getElementById('privacy-emoji');
  const privacyTitle = document.getElementById('privacy-card-title');
  const privacyDesc = document.getElementById('privacy-card-desc');
  const privacyDots = document.querySelectorAll('.privacy-dot');
  const privacySmallCards = document.querySelectorAll('.privacy-small-card');
  const privacyMainCard = document.querySelector('.privacy-main-card');
  
  if (!privacyEmoji || !privacyTitle || !privacyDesc) return;
  
  function updatePrivacyContent(index) {
    const feature = privacyFeatures[index];
    if (!feature) return;
    
    privacyEmoji.textContent = feature.emoji;
    privacyTitle.textContent = feature.title;
    privacyDesc.textContent = feature.desc;
    
    // 更新进度点
    privacyDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    // 更新小卡片
    privacySmallCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
  }
  
  function switchToPrivacy(index) {
    currentPrivacyIndex = index;
    updatePrivacyContent(index);
  }
  
  function startPrivacyAutoPlay() {
    // 清除之前的定时器
    if (privacyInterval) {
      clearInterval(privacyInterval);
    }
    privacyInterval = setInterval(() => {
      const nextIndex = (currentPrivacyIndex + 1) % privacyFeatures.length;
      switchToPrivacy(nextIndex);
    }, 4000);
  }
  
  function stopPrivacyAutoPlay() {
    if (privacyInterval) {
      clearInterval(privacyInterval);
      privacyInterval = null;
    }
  }
  
  // 清除之前的事件监听器
  privacySmallCards.forEach((card, index) => {
    card.removeEventListener('click', card._clickHandler);
    card._clickHandler = () => {
      switchToPrivacy(index);
      stopPrivacyAutoPlay();
      startPrivacyAutoPlay();
    };
    card.addEventListener('click', card._clickHandler);
  });
  
  privacyDots.forEach((dot, index) => {
    dot.removeEventListener('click', dot._clickHandler);
    dot._clickHandler = () => {
      switchToPrivacy(index);
      stopPrivacyAutoPlay();
      startPrivacyAutoPlay();
    };
    dot.addEventListener('click', dot._clickHandler);
  });
  
  // 清除之前的事件监听器
  privacyMainCard.removeEventListener('mouseenter', privacyMainCard._mouseEnterHandler);
  privacyMainCard.removeEventListener('mouseleave', privacyMainCard._mouseLeaveHandler);
  
  privacyMainCard._mouseEnterHandler = stopPrivacyAutoPlay;
  privacyMainCard._mouseLeaveHandler = startPrivacyAutoPlay;
  
  privacyMainCard.addEventListener('mouseenter', privacyMainCard._mouseEnterHandler);
  privacyMainCard.addEventListener('mouseleave', privacyMainCard._mouseLeaveHandler);
  
  // 页面不可见时暂停自动播放
  document.removeEventListener('visibilitychange', document._visibilityHandler);
  document._visibilityHandler = () => {
    if (document.hidden) {
      stopPrivacyAutoPlay();
    } else {
      startPrivacyAutoPlay();
    }
  };
  document.addEventListener('visibilitychange', document._visibilityHandler);
  
  // 更新当前显示的内容
  updatePrivacyContent(currentPrivacyIndex);
  
  // 开始自动播放
  startPrivacyAutoPlay();
}

// 导航栏系统已移至 mobile-menu-fix.js
function initNavigation() {
  // 此函数已废弃，导航栏功能由 mobile-menu-fix.js 处理
  console.log('Navigation system moved to mobile-menu-fix.js');
}

// 移动端菜单功能已移至 mobile-menu-fix.js
function initMobileMenu() {
  // 此函数已废弃，移动端菜单功能由 mobile-menu-fix.js 处理
  console.log('Mobile menu initialization moved to mobile-menu-fix.js');
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing features...');
  
  // 移动端菜单由 mobile-menu-fix.js 处理，不在此处初始化
  
  // 初始化语言切换
  initLanguageSwitch();
  
  // 初始化用户评价轮播
  initTestimonials();
  
  // 初始化隐私功能模块
  initPrivacyFeaturesData();
  initPrivacyFeatures();
  
  // 初始化视频播放器
  initVideoPlayer();
  
  // 初始化页面滚动阴影效果
  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow);
  
  console.log('All features initialized successfully');
});

// VideoPlayerSection 视频播放器功能
function initVideoPlayer() {
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('demo-video');
  const playButton = videoContainer?.querySelector('.play-button');
  
  if (!videoContainer || !video || !playButton) {
    console.log('Video player elements not found');
    console.log('videoContainer:', videoContainer);
    console.log('video:', video);
    console.log('playButton:', playButton);
    return;
  }
  
  console.log('Video player initialized successfully');
  
  // 自动播放功能
  function autoPlayVideo() {
    console.log('Attempting auto-play...');
    // 隐藏播放按钮
    playButton.style.display = 'none';
    // 显示视频元素
    video.classList.remove('hidden');
    video.classList.add('active');
    
    // 开始播放视频
    video.play().catch(function(error) {
      console.log('Auto-play failed (browser policy):', error);
      // 如果自动播放失败，恢复播放按钮等待用户交互
      playButton.style.display = 'flex';
      video.classList.add('hidden');
      video.classList.remove('active');
    });
  }
  
  // 视频加载完成后自动播放
  video.addEventListener('loadeddata', function() {
    console.log('Video loaded successfully, starting auto-play');
    autoPlayVideo();
  });
  
  // 如果视频已经加载完成，立即播放
  if (video.readyState >= 2) {
    console.log('Video already loaded, starting auto-play immediately');
    autoPlayVideo();
  }
  
  // 点击播放按钮时播放视频（备用方案）
  videoContainer.addEventListener('click', function() {
    console.log('Video container clicked, video paused:', video.paused);
    if (video.paused) {
      // 显示视频元素
      video.classList.remove('hidden');
      video.classList.add('active');
      
      // 隐藏播放按钮
      playButton.style.display = 'none';
      
      // 播放视频
      video.play().catch(function(error) {
        console.log('Video play failed:', error);
        // 如果播放失败，恢复播放按钮
        playButton.style.display = 'flex';
        video.classList.add('hidden');
        video.classList.remove('active');
      });
    } else {
      // 如果视频正在播放，暂停它
      video.pause();
      // 显示播放按钮
      playButton.style.display = 'flex';
      video.classList.add('hidden');
      video.classList.remove('active');
    }
  });
  
  // 视频结束时恢复播放按钮（由于设置了loop，这个事件可能不会触发）
  video.addEventListener('ended', function() {
    console.log('Video ended');
    // 由于设置了loop，视频会自动重新开始播放
  });
  
  // 视频暂停时恢复播放按钮
  video.addEventListener('pause', function() {
    console.log('Video paused');
    playButton.style.display = 'flex';
    video.classList.add('hidden');
    video.classList.remove('active');
  });
  
  // 视频加载错误时的处理
  video.addEventListener('error', function() {
    console.log('Video loading error');
    playButton.style.display = 'flex';
    video.classList.add('hidden');
    video.classList.remove('active');
  });
}

// 图片加载优化
function initImageOptimization() {
  // 为所有图片添加加载完成事件
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // 如果图片已经加载完成，直接添加loaded类
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
  
  // 懒加载优化（仅对非关键图片）
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.loading === 'lazy') {
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    // 只观察懒加载的图片
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// 移动端性能优化
function initMobileOptimizations() {
  // 检测是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isMobileViewport = window.innerWidth <= 768;
  
  if (isMobile || isMobileViewport) {
    console.log('Initializing mobile optimizations...');
    
    // 减少移动端动画复杂度
    document.body.classList.add('mobile-optimized');
    
    // 优化移动端滚动
    document.addEventListener('touchstart', function() {}, {passive: true});
    document.addEventListener('touchmove', function() {}, {passive: true});
    document.addEventListener('scroll', function() {}, {passive: true});
    document.addEventListener('wheel', function() {}, {passive: true});
    
    // 优化移动端图片加载
    const optimizeMobileImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // 移动端图片懒加载优化
        if (img.loading === 'lazy') {
          img.decoding = 'async';
          img.fetchpriority = 'low';
        }
        
        // 移动端图片尺寸优化
        if (img.src.includes('banner-image.png')) {
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
        }
      });
    };
    
    // 减少移动端DOM操作
    const optimizeMobileDOM = () => {
      // 使用IntersectionObserver优化可见性检测
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mobile-visible');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '50px'
        });
        
        // 只观察重要的元素
        document.querySelectorAll('.blog-card, .feature-card, .testimonial-card').forEach(el => {
          observer.observe(el);
        });
      }
    };
    
    // 优化移动端内存使用
    const optimizeMobileMemory = () => {
      // 减少移动端动画复杂度
      document.body.style.setProperty('--animation-duration', '0.2s');
      
      // 清理不必要的定时器
      const timers = window.setTimeout(() => {}, 0);
      if (timers > 10) {
        console.log('Cleaning up excessive timers');
      }
    };
    
    optimizeMobileImages();
    optimizeMobileDOM();
    optimizeMobileMemory();
    
    console.log('Mobile optimizations applied');
  }
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing all features...');
  
  // 延迟移除页面加载状态，确保CSS完全加载
  setTimeout(() => {
    document.documentElement.classList.remove('loading');
  }, 50);
  
  // 使用requestIdleCallback优化初始化时机
  const initFeatures = () => {
    // 初始化现有功能
    initLanguageSwitch();
    initTestimonials();
    initVideoPlayer();
    
    // 初始化新的性能优化功能
    initImageOptimization();
    initMobileOptimizations();
    
    console.log('All features initialized successfully');
  };
  
  // 优先初始化关键功能
  initImageOptimization();
  
  // 延迟初始化非关键功能
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initFeatures);
  } else {
    // 降级处理
    setTimeout(initFeatures, 100);
  }
});

// 确保页面完全加载后移除加载状态
window.addEventListener('load', function() {
  // 双重保险，确保加载状态被移除
  setTimeout(() => {
    document.documentElement.classList.remove('loading');
  }, 100);
});

// 额外的保险：如果页面加载时间过长，强制移除加载状态
setTimeout(() => {
  document.documentElement.classList.remove('loading');
}, 3000);

