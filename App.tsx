import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Send,
  Users,
  Utensils,
  Smile,
  Zap,
  Star,
  Clock,
  Bell,
  ChefHat,
  ShoppingBag,
  Minus,
  Plus,
  Check,
  ArrowRight,
  School,
  ChevronRight,
  ArrowLeft,
  Flame,
  Award,
  CircleDollarSign,
  Droplets,
  Globe,
  PartyPopper,
  Sparkles,
  BookOpen,
  Coffee,
  Heart,
  Frown,
  Laugh,
  Brain,
  Camera,
  Upload
} from 'lucide-react';

// --- Translations ---
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      contact: "Contact Us",
      menu: "Menu",
      order: "Order Now"
    },
    hero: {
      tag: "Campus Favorite Snack",
      title_prefix: "Craving Something",
      subtitle: "Hot, spicy, and crunchy Singara & Samucha delivered straight to your hunger pangs.",
      btn_order: "Grab a Bite",
      btn_menu: "View Menu"
    },
    stats: {
      title: "University Munching Stats",
      label: "Happy Students Fed everyday"
    },
    live: {
      title: "Live Kitchen Feed",
      tag: "Real-time"
    },
    join: {
      title: "Don't Miss the Hot Batches!",
      subtitle: "We announce fresh batches of Singara & Samucha instantly.",
      btn: "Join Our WhatsApp Group"
    },
    form: {
      title: "Subscribe for a Pyramid! 🔺",
      subtitle: "Get exclusive snack deals & updates.",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      btn: "Join the Squad",
      joining: "Joining..."
    },
    menu: {
      title: "Our Crunchy Menu",
      subtitle: "Golden fried goodness at student-friendly prices.",
      extras: "Free Extras",
      events: "Event Catering"
    },
    footer: {
      story: "Born from late-night cravings and skipped lunches, Campus Snax is a student-run revolution. We believe every Singara deserves to be eaten hot, and every student deserves a crunchy break.",
      quick: "Quick Bites",
      find: "Find Us"
    },
    preorder: {
      back: "Back to Home",
      title: "Choose Your Snack & Pick Your Time Slot!",
      subtitle: "Fresh snacks, ready before your class.",
      cart: "Your Cart",
      empty: "Your tummy is empty!",
      total: "Total Amount",
      confirm: "Confirm My Pre-order"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      contact: "اتصل بنا",
      menu: "القائمة",
      order: "اطلب الآن"
    },
    hero: {
      tag: "سناك الجامعة المفضل",
      title_prefix: "نفسك في حاجة",
      subtitle: "سنجارة وسمبوسة سخنة، مقرمشة وحراقة توصلك وقت الجوع.",
      btn_order: "اطلب أكلة",
      btn_menu: "شوف المنيو"
    },
    stats: {
      title: "إحصائيات الأكل في الجامعة",
      label: "طالب سعيد شبعان كل يوم"
    },
    live: {
      title: "بث مباشر من المطبخ",
      tag: "مباشر"
    },
    join: {
      title: "ماتفوتش الدفعات السخنة!",
      subtitle: "بنعرفك أول ما السنجارة والسمبوسة تطلع من الزيت.",
      btn: "انضم لجروب الواتساب"
    },
    form: {
      title: "اشترك في الهرم! 🔺",
      subtitle: "احصل على عروض حصرية وتحديثات.",
      name: "الاسم بالكامل",
      email: "الايميل الجامعي",
      phone: "رقم التليفون",
      btn: "انضم للشلة",
      joining: "جاري الانضمام..."
    },
    menu: {
      title: "منيو القرمشة",
      subtitle: "أكل ذهبي مقلي بأسعار على قد جيب الطالب.",
      extras: "إضافات مجانية",
      events: "حفلات ومناسبات"
    },
    footer: {
      story: "بدأت الفكرة من جوع نص الليل وتفويت الغدا. كامبس سناكس هي ثورة طلابية. إحنا مؤمنين إن كل سنجارة لازم تتاكل سخنة، وكل طالب يستحق بريك مقرمش.",
      quick: "روابط سريعة",
      find: "تلاقونا فين"
    },
    preorder: {
      back: "الرجوع للرئيسية",
      title: "اختار أكلك وحدد معادك!",
      subtitle: "سناك طازة، جاهز قبل محاضرتك.",
      cart: "سلتك",
      empty: "بطنك فاضية!",
      total: "الإجمالي",
      confirm: "أكد طلبي"
    }
  }
};

type Lang = 'en' | 'ar';

// --- Components ---

// 1. Cursor Effect
const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.closest('.interactive-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-overlay"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
      }}
    >
      <div className="w-12 h-12 rounded-full bg-yellow-400 opacity-80 blur-md shadow-[0_0_40px_rgba(250,204,21,0.8)]"></div>
    </div>
  );
};

// 2. Doodle Background
const DoodleBackground = () => (
  <div className="fixed inset-0 z-[-1] opacity-10 pointer-events-none overflow-hidden bg-[#fffdf5]">
    <div className="absolute top-0 left-0 w-full h-full" 
         style={{ 
           backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', 
           backgroundSize: '30px 30px' 
         }}>
    </div>
    {/* Random Doodles - Triangles for Samucha, Circles for Plates */}
    {Array.from({ length: 20 }).map((_, i) => (
      <div 
        key={i}
        className="absolute text-amber-600"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
          opacity: 0.2
        }}
      >
        {i % 2 === 0 ? (
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M50 10 L90 90 L10 90 Z" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        ) : (
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="50" cy="50" r="40" />
            <path d="M30 30 Q50 50 70 30" />
          </svg>
        )}
      </div>
    ))}
  </div>
);

// 3. Navigation
interface NavProps {
  currentPage: string;
  setPage: (page: string) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar: React.FC<NavProps> = ({ currentPage, setPage, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const t = translations[lang].nav;

  const navItems = [
    { name: t.home, id: 'home' },
    { name: t.menu, id: 'menu' },
    { name: t.about, id: 'about' },
    { name: t.contact, id: 'contact' },
  ];

  useEffect(() => {
    // Find the active index
    const activeIndex = navItems.findIndex(item => item.id === currentPage);
    const activeElement = itemRefs.current[activeIndex];
    
    if (activeElement && navRef.current) {
      // Calculate relative position within the container
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeElement.getBoundingClientRect();
      
      const left = itemRect.left - navRect.left;
      
      setIndicatorStyle({
        left,
        width: itemRect.width,
        opacity: 1
      });
    } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [currentPage, lang]); // Recalculate on language change too

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Apple Style Liquid Glass Island */}
        <div className="relative bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-2 py-2 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer pl-4 rtl:pr-4 rtl:pl-0" onClick={() => setPage('home')}>
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-1.5 rounded-full shadow-md">
              <Utensils className="h-4 w-4 text-white" />
            </div>
            <span className={`mx-3 font-display font-bold text-lg text-amber-950 hidden sm:block`}>
              Campus<span className="text-amber-600">Snax</span>
            </span>
          </div>

          {/* Desktop Menu - Sliding Pill Apple Style */}
          <div className="hidden md:flex items-center relative" ref={navRef}>
            {/* The Sliding Background Pill */}
            <div 
              className="absolute top-0 bottom-0 bg-white rounded-full shadow-sm border border-gray-100 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                height: '100%',
                opacity: indicatorStyle.opacity,
              }}
            />

            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                onClick={() => setPage(item.id)}
                className={`relative z-10 px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
                  currentPage === item.id 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-2 rtl:pl-2 rtl:pr-0">
             {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 text-gray-700 transition-colors"
              title="Switch Language"
            >
              <Globe className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setPage('preorder')}
              className="hidden sm:flex items-center bg-gray-900 hover:bg-black text-white font-semibold text-sm py-2 px-5 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              <span>{t.order}</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 text-gray-700 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Floating Glass) */}
      {isOpen && (
        <div 
          className="fixed top-24 left-4 right-4 z-40 md:hidden flex flex-col items-center animate-fade-in-up"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="w-full bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-center font-display font-bold text-lg py-3 rounded-2xl transition-all ${
                  currentPage === item.id 
                    ? 'bg-amber-100 text-amber-900' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
             <button
                onClick={() => {
                  setPage('preorder');
                  setIsOpen(false);
                }}
                className="block w-full text-center font-display font-bold text-lg py-3 rounded-2xl bg-gray-900 text-white shadow-lg mt-2"
              >
                {t.order}
              </button>
          </div>
        </div>
      )}
    </>
  );
};

// 4. Hero Section with 3D Images and Word Carousel
interface HeroProps {
  setPage: (page: string) => void;
  lang: Lang;
}
const Hero: React.FC<HeroProps> = ({ setPage, lang }) => {
  const t = translations[lang].hero;
  const words = ["Crispy", "Crunchy", "Cheesy", "Hot", "Spicy", "Trendy"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // File Upload Refs
  const fileInputSingaraRef = useRef<HTMLInputElement>(null);
  const fileInputSamuchaRef = useRef<HTMLInputElement>(null);

  // State for Images (to allow user uploads)
  const [samuchaImages, setSamuchaImages] = useState([
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1615569502947-3f3ae10d4869?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80"
  ]);

  const [singaraImages, setSingaraImages] = useState([
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1605333169728-6677de8848d7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541592106381-b31e9674c36d?auto=format&fit=crop&w=600&q=80"
  ]);

  // Handle manual file upload from desktop
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'singara' | 'samucha') => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      if (type === 'singara') {
        // Add new photos to the start of the array
        setSingaraImages(prev => [...newFiles, ...prev]);
        setCurrentImageIndex(0); // Reset to show the new photo immediately
      } else {
        setSamuchaImages(prev => [...newFiles, ...prev]);
        setCurrentImageIndex(0);
      }
    }
  };

  const handleImageTap = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 5); // Cycling through 5 as base, but list can be longer
    }, 4000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, [words.length]);

  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-visible" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center lg:text-left lg:rtl:text-right lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-semibold mb-6 animate-pulse-fast border border-amber-200">
              <Star className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 fill-current" />
              <span>{t.tag}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-950 leading-tight mb-6">
              {t.title_prefix} <br/>
              <span className="text-amber-600 inline-block min-w-[200px] text-left rtl:text-right transition-all duration-500 transform">
                {words[currentWordIndex]}?
              </span>
            </h1>
            <p className="font-sans text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-start">
              <button 
                onClick={() => setPage('preorder')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-amber-600/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                {t.btn_order} <Zap className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5" />
              </button>
              <button 
                onClick={() => setPage('menu')}
                className="bg-[#fffdf5] border-2 border-amber-200 text-amber-900 hover:border-amber-500 hover:text-amber-600 font-bold py-4 px-8 rounded-2xl shadow-sm transition-all duration-300"
              >
                {t.btn_menu}
              </button>
            </div>
          </div>

          {/* 3D Image Display with Carousel & Upload */}
          <div className="relative perspective-1000 group">
            <div className="relative w-full h-[400px] flex items-center justify-center transform-style-3d transition-transform duration-700 hover:rotate-y-12">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-orange-100 rounded-full blur-3xl transform scale-90 animate-pulse"></div>
              
              {/* Floating Carousel Images */}
              <div 
                className={`absolute w-64 h-64 transform -translate-x-12 -translate-y-12 rotate-[-10deg] animate-float z-20 transition-all duration-300 ease-in-out cursor-pointer ${isAnimating ? 'scale-90 rotate-[-15deg]' : ''}`}
                onClick={handleImageTap}
              >
                 <img 
                  src={samuchaImages[currentImageIndex % samuchaImages.length]} 
                  alt="Delicious Samucha" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 select-none"
                />
              </div>
              
              <div 
                className={`absolute w-64 h-64 transform translate-x-12 translate-y-12 rotate-[10deg] animate-[float_7s_ease-in-out_infinite] z-10 transition-all duration-300 ease-in-out cursor-pointer ${isAnimating ? 'scale-90 rotate-[5deg]' : ''}`}
                onClick={handleImageTap}
              >
                <img 
                  src={singaraImages[currentImageIndex % singaraImages.length]} 
                  alt="Hot Singara" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 select-none"
                />
              </div>

               {/* Manual Upload Controls (Visible on Hover) */}
               <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  <input 
                    type="file" 
                    ref={fileInputSamuchaRef} 
                    hidden 
                    accept="image/*" 
                    onChange={(e) => handleFileUpload(e, 'samucha')}
                  />
                   <button 
                    onClick={() => fileInputSamuchaRef.current?.click()}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur text-gray-700 px-4 py-2 rounded-full shadow-lg hover:bg-amber-100 text-xs font-bold transition-all"
                  >
                    <Camera size={14} /> Add Samucha
                  </button>

                  <input 
                    type="file" 
                    ref={fileInputSingaraRef} 
                    hidden 
                    accept="image/*" 
                    onChange={(e) => handleFileUpload(e, 'singara')}
                  />
                  <button 
                    onClick={() => fileInputSingaraRef.current?.click()}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur text-gray-700 px-4 py-2 rounded-full shadow-lg hover:bg-amber-100 text-xs font-bold transition-all"
                  >
                    <Upload size={14} /> Add Singara
                  </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// 5. Live Counter Section
const LiveCounter = ({ lang }: { lang: Lang }) => {
  const [count, setCount] = useState(0);
  const target = 500;
  const t = translations[lang].stats;

  useEffect(() => {
    // Only increment up to target
    if (count >= target) return;

    const interval = setInterval(() => {
      setCount(prev => {
        const remaining = target - prev;
        // Slow down as we get closer
        const increment = Math.max(1, Math.ceil(remaining / 20)); 
        const next = prev + increment;
        return next > target ? target : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [count, target]);

  return (
    <div className="bg-white py-12 border-y border-amber-100" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-8 font-display">{t.title}</h2>
        <div className="bg-gradient-to-r from-amber-300 to-amber-500 p-1 rounded-3xl shadow-lg inline-block">
          <div className="bg-white rounded-[20px] px-12 py-8 relative overflow-hidden">
            {/* Background Icon */}
            <Users className="absolute -right-6 -bottom-6 w-32 h-32 text-amber-100" />
            
            <div className="relative z-10">
              <div className="text-6xl font-display font-bold text-amber-950 mb-2 tabular-nums">
                {count}+
              </div>
              <p className="text-lg font-medium text-amber-600 uppercase tracking-wide">
                {t.label} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Snack Mood Explorer Feature
const SnackMoodExplorer = () => {
  const [mood, setMood] = useState<string | null>(null);
  
  const moods = [
    { id: 'stress', icon: <Brain className="w-6 h-6" />, label: "Exam Stress", result: "Spicy Samucha", quote: "Spice level matches your stress level!" },
    { id: 'broke', icon: <CircleDollarSign className="w-6 h-6" />, label: "Broke AF", result: "Single Singara", quote: "Cheap, tasty, and hugs your tummy." },
    { id: 'chill', icon: <Coffee className="w-6 h-6" />, label: "Just Chilling", result: "Double Combo", quote: "Life is good. Have two." },
    { id: 'love', icon: <Heart className="w-6 h-6" />, label: "In Love", result: "Sweet Sauce Dip", quote: "Sweet like you. Add extra dip." },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
       {/* Minimal 3D Background Element */}
       <Smile className="absolute -left-10 top-10 w-48 h-48 text-yellow-100 rotate-12" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-display font-bold text-amber-900 mb-4">Snack Mood Explorer</h2>
        <p className="text-gray-600 mb-8">How are you feeling today? Let the snack choose you.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {moods.map((m) => (
            <button
              key={m.id}
              onClick={() => setMood(m.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-3 shadow-sm hover:shadow-md ${mood === m.id ? 'border-amber-500 bg-amber-100 text-amber-900 scale-105' : 'border-white bg-white text-gray-500 hover:border-amber-200'}`}
            >
              <div className={`p-3 rounded-full ${mood === m.id ? 'bg-white' : 'bg-gray-100'}`}>
                {m.icon}
              </div>
              <span className="font-bold">{m.label}</span>
            </button>
          ))}
        </div>

        {mood && (
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-amber-200 max-w-md mx-auto animate-fade-in transform transition-all">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-amber-600 mb-2">Try the {moods.find(m => m.id === mood)?.result}!</h3>
            <p className="text-gray-500 italic">"{moods.find(m => m.id === mood)?.quote}"</p>
          </div>
        )}
      </div>
    </div>
  );
};


// 7. Live Status Feed (Expanded to 30 lines)
const LiveStatusFeed = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].live;
  // Initial visible activities
  const [activities, setActivities] = useState([
    { id: 1, text: "🔥 Batch #42 (Singara) is FRYING now!", time: "Just now", type: 'cooking' },
    { id: 2, text: "👥 3 new students joined the Squad", time: "2m ago", type: 'social' },
    { id: 3, text: "✅ Samucha Batch #41 is READY!", time: "5m ago", type: 'ready' },
  ]);

  // List of 30 unique events
  const allEvents = [
    { text: "🔥 New Singara batch hitting the hot oil!", type: 'cooking' },
    { text: "🥔 Peeling 10kg of fresh potatoes!", type: 'cooking' },
    { text: "👨‍🍳 Chef is seasoning the secret masala mix.", type: 'cooking' },
    { text: "🥣 Green Chutney refilled - it's spicy today!", type: 'cooking' },
    { text: "🛍️ Order #105 picked up by Ahmed.", type: 'order' },
    { text: "⏳ Samucha running low! Next batch in 5m.", type: 'alert' },
    { text: "👋 Welcome to the 5 new pyramid members!", type: 'social' },
    { text: "🏃‍♂️ A group of engineers just sprinted here!", type: 'social' },
    { text: "📦 Fresh flour delivery just arrived.", type: 'cooking' },
    { text: "🌡️ Oil temperature perfectly at 350°F.", type: 'cooking' },
    { text: "😋 Someone just bought 10 Singaras solo!", type: 'order' },
    { text: "🧼 Hygiene check completed: 100% Clean.", type: 'ready' },
    { text: "🔔 Pre-order for 11:30 AM class slot full.", type: 'alert' },
    { text: "🌶️ Chopping fresh green chilies... careful!", type: 'cooking' },
    { text: "🚮 Waste management bin cleared. Keep it clean!", type: 'ready' },
    { text: "💬 'Best Samucha ever' - Review from Sara.", type: 'social' },
    { text: "🎁 Special request: Extra crispy batch done.", type: 'ready' },
    { text: "🥤 Ketchup bottle squeaking - it's busy!", type: 'order' },
    { text: "🛒 Library zone delivery dispatching now.", type: 'order' },
    { text: "🚧 Queue forming at Gate 2 pickup point.", type: 'alert' },
    { text: "📸 Someone just Instagrammed their snack!", type: 'social' },
    { text: "🧂 Sprinkle of chaat masala added.", type: 'cooking' },
    { text: "🛑 Stop pushing! There's enough for everyone.", type: 'alert' },
    { text: "🚲 Delivery guy zooming to Canteen front.", type: 'order' },
    { text: "🥟 Folding Samuchas with ninja speed.", type: 'cooking' },
    { text: "🧡 Thank you for the 5-star rating!", type: 'social' },
    { text: "💰 Flash sale on Combo packs ending soon.", type: 'alert' },
    { text: "🕰️ Last call for 1:00 PM pre-orders.", type: 'alert' },
    { text: "🤤 The aroma is reaching the 3rd floor!", type: 'social' },
    { text: "✅ All staff sanitized and masked up.", type: 'ready' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random event from the 30 lines
      const randomEvent = allEvents[Math.floor(Math.random() * allEvents.length)];
      const newActivity = {
        id: Date.now(),
        text: randomEvent.text,
        time: 'Just now',
        type: randomEvent.type
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-50/50 py-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-amber-900 flex items-center font-display">
            <span className="relative flex h-3 w-3 mr-3 rtl:mr-0 rtl:ml-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            {t.title}
          </h3>
          <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">{t.tag}</span>
        </div>
        
        <div className="grid gap-3">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`bg-white p-4 rounded-xl shadow-sm border border-amber-100 flex items-center justify-between transition-all duration-500 ease-in-out transform ${index === 0 ? 'scale-[1.02] border-l-4 rtl:border-l-0 rtl:border-r-4 border-l-amber-500 rtl:border-r-amber-500' : 'opacity-80'}`}
            >
              <div className="flex items-center">
                <span className="mr-3 rtl:mr-0 rtl:ml-3 text-xl">
                  {activity.type === 'cooking' && '🍳'}
                  {activity.type === 'social' && '👋'}
                  {activity.type === 'ready' && '🥣'}
                  {activity.type === 'alert' && '⚠️'}
                  {activity.type === 'order' && '🛍️'}
                </span>
                <span className="font-medium text-gray-800 text-left rtl:text-right">{activity.text}</span>
              </div>
              <span className="text-xs font-bold text-amber-500 whitespace-nowrap ml-4 rtl:ml-0 rtl:mr-4">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 8. Call to Action (Group Join)
const JoinGroup = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].join;
  return (
    <div className="py-16 text-center" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-gray-800 mb-6">{t.title}</h2>
        <p className="text-xl text-gray-600 mb-10">{t.subtitle}</p>
        <a 
          href="https://chat.whatsapp.com/LQpMIIC8bHg942nE1DUEXj?mode=hqrt1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-[#25D366]/40 transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-8 h-8 mr-3 rtl:mr-0 rtl:ml-3" />
          {t.btn}
        </a>
      </div>
    </div>
  );
};

// 9. Subscription Form (Pyramid)
const SubscriptionForm = ({ lang }: { lang: Lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang].form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate submission
    setTimeout(() => {
      alert("Welcome to the Pyramid! 🔺");
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 1000);
  };

  return (
    <div className="py-20 relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
          <div className="bg-amber-500 p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
            <h2 className="text-3xl font-display font-bold text-white mb-2 relative z-10">{t.title}</h2>
            <p className="text-amber-50 font-medium relative z-10">{t.subtitle}</p>
          </div>
          
          <div className="p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Student Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="student@university.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="+880 1XXX XXXXXX"
                />
              </div>

              <button 
                type="submit"
                disabled={submitted}
                className="w-full bg-amber-900 hover:bg-amber-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                {submitted ? t.joining : (
                  <>
                    {t.btn} <Send className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// 10. Footer
const Footer = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].footer;
  return (
    <footer className="bg-[#451a03] text-amber-50 pt-16 pb-8" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-amber-900/50 pb-12">
          
          {/* Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-amber-500 p-1.5 rounded-lg rotate-3">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <span className="mx-3 font-display font-bold text-2xl">
                Campus<span className="text-amber-500">Snax</span>
              </span>
            </div>
            <p className="text-amber-200/80 leading-relaxed text-sm">
              {t.story}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-amber-500">{t.quick}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/70 hover:text-white transition-colors">Today's Menu</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-white transition-colors">Pre-order for Class</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-white transition-colors">Catering for Events</a></li>
              <li><a href="#" className="text-amber-200/70 hover:text-white transition-colors">Suggestion Box</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-amber-500">{t.find}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-amber-200/70">
                <MapPin className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 text-amber-500" />
                <span>Student Center D, Ground Floor</span>
              </li>
              <li className="flex items-center text-amber-200/70">
                <Phone className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 text-amber-500" />
                <span>+20 11 19095909</span>
              </li>
              <li className="flex items-center text-amber-200/70">
                <MessageCircle className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3 text-amber-500" />
                <a href="https://chat.whatsapp.com/LQpMIIC8bHg942nE1DUEXj?mode=hqrt1" className="hover:text-white underline">WhatsApp Group</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-amber-200/50 text-sm">
          <p>&copy; 2024 Campus Snax. The Crunchy Squad.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Menu Page ---

const MenuPage: React.FC<{ lang: Lang; setPage: (page: string) => void }> = ({ lang, setPage }) => {
  const t = translations[lang].menu;
  
  const products = [
    {
      title: "Single Singara",
      price: 12,
      priceWithKetchup: 15,
      description: "One golden, crispy potato-filled singara.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      variant: "Single",
      popular: false
    },
    {
      title: "Vegetable Singara",
      price: 12,
      priceWithKetchup: 15,
      description: "Packed with seasonal veggies and spices.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",
      variant: "Veg",
      popular: false
    },
    {
      title: "Cheese Singara",
      price: 15,
      priceWithKetchup: 18,
      description: "Melty cheese center with crispy shell.",
      image: "https://images.unsplash.com/photo-1605333169728-6677de8848d7?auto=format&fit=crop&w=600&q=80",
      variant: "Cheese",
      popular: true
    },
     {
      title: "Chicken Samucha",
      price: 18,
      priceWithKetchup: 21,
      description: "Spicy minced chicken filling.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
      variant: "Chicken",
      popular: true
    },
    {
      title: "Beef Samucha",
      price: 20,
      priceWithKetchup: 23,
      description: "Rich beef filling with onions.",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
      variant: "Beef",
      popular: false
    },
    {
      title: "Double Combo",
      price: 20,
      priceWithKetchup: 25,
      description: "Two hot singaras. Perfect for a quick snack.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
      variant: "Double",
      popular: true
    },
    {
      title: "Triple Treat",
      price: 35,
      priceWithKetchup: 40,
      description: "Three singaras. The ultimate hunger killer.",
      image: "https://images.unsplash.com/photo-1541592106381-b31e9674c36d?auto=format&fit=crop&w=600&q=80",
      variant: "Triple",
      popular: false
    },
    {
      title: "Samucha",
      price: 12,
      priceWithKetchup: 15,
      description: "Crispy triangular delight with savory filling.",
      image: "https://images.unsplash.com/photo-1628350868843-0937a44f971b?auto=format&fit=crop&w=600&q=80",
      variant: "Single",
      popular: false
    },
    {
      title: "Tomato Ketchup Dip",
      price: 3,
      priceWithKetchup: null,
      description: "Extra tangy tomato ketchup cup.",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
      variant: "Dip",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-20 animate-fade-in bg-[#fffdf5] min-h-screen overflow-hidden relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* 3D Background Icon */}
      <Utensils className="absolute -right-20 top-40 w-96 h-96 text-amber-50 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-amber-950 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Most Popular
                  </div>
                )}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-xl">
                    <span className="font-medium text-amber-900">Standard</span>
                    <span className="font-bold text-amber-600 text-lg">{item.price} LE</span>
                  </div>
                  {item.priceWithKetchup && (
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl border border-red-100">
                      <span className="font-medium text-red-900 flex items-center">
                        <Droplets className="w-4 h-4 mr-2 text-red-500" />
                         w/ Ketchup
                      </span>
                      <span className="font-bold text-red-600 text-lg">{item.priceWithKetchup} LE</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Event Catering Card */}
           <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl shadow-xl overflow-hidden text-white flex flex-col justify-center items-center p-8 text-center transform hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <PartyPopper className="w-16 h-16 mb-4 relative z-10 animate-bounce" />
              <h3 className="text-3xl font-display font-bold mb-2 relative z-10">{t.events}</h3>
              <div className="text-6xl font-black mb-4 relative z-10 tracking-tight">OFF%</div>
              <p className="text-amber-100 text-lg mb-6 relative z-10 font-medium">Special Pricing for Student Events</p>
              <button 
                onClick={() => setPage('contact')}
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-colors relative z-10"
              >
                Contact Us
              </button>
           </div>
        </div>

        {/* Free Extras Section */}
        <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-sm text-center">
           <h3 className="text-2xl font-bold text-amber-900 mb-8 flex justify-center items-center">
             <Star className="w-6 h-6 mr-2 text-amber-500" /> {t.extras}
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4">
                <div className="bg-red-100 p-4 rounded-full mb-3">
                   <Flame className="w-8 h-8 text-red-600" />
                </div>
                <span className="font-bold text-gray-800 text-lg">Extra Spicy</span>
                <span className="text-gray-500 text-sm">Chili flakes kick</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="bg-purple-100 p-4 rounded-full mb-3">
                   <div className="w-8 h-8 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-700 font-bold text-xs">ON</div>
                </div>
                <span className="font-bold text-gray-800 text-lg">Fresh Onion</span>
                <span className="text-gray-500 text-sm">Crunchy topping</span>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="bg-pink-100 p-4 rounded-full mb-3">
                   <Sparkles className="w-8 h-8 text-pink-500" />
                </div>
                <span className="font-bold text-gray-800 text-lg">Pink Salt</span>
                <span className="text-gray-500 text-sm">Mineral goodness</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};


// --- Page Content Wrappers ---

interface PageProps {
  setPage: (page: string) => void;
  lang: Lang;
}

const HomePage: React.FC<PageProps> = ({ setPage, lang }) => (
  <div className="animate-fade-in">
    <Hero setPage={setPage} lang={lang} />
    <LiveCounter lang={lang} />
    <SnackMoodExplorer />
    <LiveStatusFeed lang={lang} />
    <JoinGroup lang={lang} />
    <SubscriptionForm lang={lang} />
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-32 max-w-4xl mx-auto px-4 text-center animate-fade-in relative overflow-hidden">
     {/* 3D Background Icon */}
     <BookOpen className="absolute -left-20 top-20 w-80 h-80 text-amber-50 rotate-12 pointer-events-none" />

    <h1 className="text-5xl font-display font-bold text-amber-950 mb-8 relative z-10">The Story Behind the <span className="text-amber-600">Crunch</span></h1>
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100 relative z-10">
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        It started in a dorm room with a simple dream: why are the singaras always cold by the time we get them? 
        We decided to change that. 
      </p>
      <p className="text-xl text-gray-700 leading-relaxed">
        We are a team of students dedicated to bringing you the freshest, hottest, and most hygienic snacks right between your classes. 
        No more soggy samosas. Only pure, crispy perfection.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: "Fresh", icon: <Zap className="w-8 h-8 text-amber-500" /> },
          { title: "Hygenic", icon: <Star className="w-8 h-8 text-amber-500" /> },
          { title: "Fast", icon: <Smile className="w-8 h-8 text-amber-500" /> }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center p-4 bg-amber-50 rounded-xl">
            {item.icon}
            <span className="font-bold text-gray-800 mt-2">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-32 max-w-4xl mx-auto px-4 animate-fade-in relative overflow-hidden">
     {/* 3D Background Icon */}
     <Phone className="absolute -right-10 top-20 w-80 h-80 text-amber-50 -rotate-12 pointer-events-none" />

    <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
      <div>
        <h1 className="text-5xl font-display font-bold text-amber-950 mb-6">Say Hello! <span className="text-amber-500">👋</span></h1>
        <p className="text-lg text-gray-700 mb-8">
          Have a bulk order for a society event? Or just want to suggest a new chutney flavor? Drop us a line!
        </p>
        <div className="space-y-6">
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-amber-100">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Phone className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold">Call Us</p>
              <p className="text-lg text-gray-800 font-medium">+20 11 19095909</p>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-amber-100">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold">Visit Us</p>
              <p className="text-lg text-gray-800 font-medium">Cafeteria Block D, Counter 4</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
        <h3 className="text-2xl font-bold mb-6 text-amber-900">Send a Message</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Your Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amber-500 focus:bg-white outline-none transition-colors" placeholder="I need 50 singaras for..." />
          </div>
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- Pre-order Page ---

type CartItem = {
  id: string; // Changed to string to support unique variants
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'singara' | 'samucha' | 'ketchup';
};

// Menu Item Card Component
interface MenuCardProps {
  item: any;
  addToCart: (item: any, withKetchup: boolean) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, addToCart }) => {
  const [withKetchup, setWithKetchup] = useState(false);
  const displayPrice = withKetchup ? item.price + 3 : item.price;

  return (
    <div className="interactive-card bg-white rounded-3xl p-4 shadow-lg border border-amber-100 hover:shadow-2xl hover:border-amber-300 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-48 mb-4 overflow-hidden rounded-2xl bg-amber-50">
          <div className="absolute top-3 left-3 z-10">
            <span className={`${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm`}>
              {item.badge}
            </span>
          </div>
          <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-display font-bold text-xl text-gray-800">{item.name}</h3>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <span className="font-bold text-lg text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">EGP {displayPrice}</span>
      </div>
      
      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-gray-500 bg-gray-50 p-2 rounded-lg w-max">
        {item.stats.icon}
        <span>{item.stats.label}: {item.stats.value}</span>
      </div>

      {/* Optional Ketchup Toggle for Singara */}
      {item.allowKetchup && (
        <div className="mb-4">
          <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${withKetchup ? 'bg-red-500 border-red-500' : 'bg-white border-gray-300'}`}>
              {withKetchup && <Check className="w-3 h-3 text-white" />}
            </div>
            <input 
              type="checkbox" 
              checked={withKetchup}
              onChange={() => setWithKetchup(!withKetchup)}
              className="hidden"
            />
            <span className="text-sm font-medium text-gray-700">Add Ketchup (+3 EGP)</span>
          </label>
        </div>
      )}

      <button 
        onClick={() => addToCart(item, withKetchup)}
        className="mt-auto w-full bg-amber-100 text-amber-800 font-bold py-3 rounded-xl hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center"
      >
        <Plus className="w-5 h-5 mr-2" /> Add to Pre-order
      </button>
    </div>
  );
};

const PreorderPage: React.FC<{ setPage: (p: string) => void; lang: Lang }> = ({ setPage, lang }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [details, setDetails] = useState({ name: '', phone: '', kulliya: '' });
  const t = translations[lang].preorder;

  const menuItems = [
    {
      id: "singara_1",
      name: "Golden Singara",
      price: 12, // EGP
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", // Golden Singara specific
      description: "Crispy potato filled goodness.",
      badge: "Best Seller",
      badgeColor: "bg-red-500",
      stats: { label: "Heat", value: "High", icon: <Flame className="w-3 h-3 text-red-500" /> },
      type: 'singara',
      allowKetchup: true
    },
    {
      id: "samucha_1",
      name: "Spicy Samucha",
      price: 12, // EGP
      image: "https://images.unsplash.com/photo-1628350868843-0937a44f971b?auto=format&fit=crop&w=600&q=80",
      description: "Triangular parcels of joy.",
      badge: "Trending",
      badgeColor: "bg-amber-500",
      stats: { label: "Crunch", value: "Max", icon: <Zap className="w-3 h-3 text-amber-500" /> },
      type: 'samucha',
      allowKetchup: true // Changed to true
    },
    {
      id: "ketchup_1",
      name: "Extra Ketchup Dip",
      price: 5, // EGP
      image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80", // Tomato sauce image
      description: "Spicy red dipping sauce.",
      badge: "Essential",
      badgeColor: "bg-red-600",
      stats: { label: "Taste", value: "Tangy", icon: <Droplets className="w-3 h-3 text-red-500" /> },
      type: 'ketchup',
      allowKetchup: false
    }
  ];

  const addToCart = (item: any, withKetchup: boolean) => {
    // Generate unique ID based on options
    const itemId = withKetchup && item.allowKetchup ? `${item.id}_ketchup` : item.id;
    const itemName = withKetchup && item.allowKetchup ? `${item.name} w/ Ketchup` : item.name;
    const itemPrice = withKetchup && item.allowKetchup ? item.price + 3 : item.price;

    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, id: itemId, name: itemName, price: itemPrice, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(i => i.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center bg-[#fffdf5] animate-fade-in" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <Check className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-4xl font-display font-bold text-amber-950 mb-4 text-center">Order Confirmed!</h2>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
          Your snacks will be crispy and ready at <span className="font-bold text-amber-600">{selectedLocation}</span> by <span className="font-bold text-amber-600">{selectedTime}</span>.
        </p>
        <a 
          href="https://chat.whatsapp.com/LQpMIIC8bHg942nE1DUEXj?mode=hqrt1" 
          target="_blank"
          className="bg-[#25D366] text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center mb-4"
        >
          <MessageCircle className="mr-2 rtl:mr-0 rtl:ml-2" /> Join WhatsApp for Updates
        </a>
        <button onClick={() => { setIsSubmitted(false); setPage('home'); }} className="text-amber-700 font-semibold hover:underline">
          {t.back}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf5] pt-32 pb-24 relative overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Doodles specific to this page */}
       <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none">
          <Utensils className="absolute top-20 left-10 w-32 h-32 rotate-12" />
          <ShoppingBag className="absolute bottom-40 right-10 w-40 h-40 -rotate-12" />
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Main Content */}
        <div className="flex-1">
          <button onClick={() => setPage('home')} className="mb-6 flex items-center text-amber-700 font-medium hover:text-amber-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-1 rtl:mr-0 rtl:ml-1 rtl:rotate-180" /> {t.back}
          </button>
          
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-amber-950 mb-2">
             {t.title}
            </h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>

          {/* Checkout Section (Visible when cart has items) */}
          <div className={`transition-all duration-500 ${cart.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-50 grayscale pointer-events-none'}`}>
            
            {/* Time Slot Selection */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" /> Pick a Time Slot
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[ "Before 11:30 AM", "Before 1 PM", "After 2:30 PM"].map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border-2 ${selectedTime === slot ? 'border-amber-500 bg-amber-50 text-amber-800 shadow-md' : 'border-gray-200 text-gray-600 hover:border-amber-300 bg-white'}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Location */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" /> Select Pickup Point
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Gate 1", "Library Zone", "Canteen Front"].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`py-3 px-4 rounded-xl font-medium text-sm transition-all border-2 ${selectedLocation === loc ? 'border-amber-500 bg-amber-50 text-amber-800 shadow-md' : 'border-gray-200 text-gray-600 hover:border-amber-300 bg-white'}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mb-10 text-sm text-gray-600 bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
              <div className="flex items-center"><ChefHat className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-amber-500"/> Freshly Made</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-amber-500"/> No Waiting</div>
              <div className="flex items-center"><CircleDollarSign className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 text-amber-500"/> Pay on Pickup</div>
            </div>

            {/* User Details Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full z-0"></div>
              <h3 className="text-2xl font-display font-bold text-amber-900 mb-6 relative z-10">Final Steps</h3>
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                    <div className="relative">
                      <Users className="absolute left-3 rtl:right-3 top-3 text-gray-400 w-5 h-5" />
                      <input 
                        required
                        type="text" 
                        value={details.name} 
                        onChange={e => setDetails({...details, name: e.target.value})}
                        className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none transition-colors bg-gray-50 focus:bg-white" 
                        placeholder="Student Name" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Kulliya (Faculty)</label>
                     <div className="relative">
                      <School className="absolute left-3 rtl:right-3 top-3 text-gray-400 w-5 h-5" />
                      <input 
                        required
                        type="text" 
                        value={details.kulliya} 
                        onChange={e => setDetails({...details, kulliya: e.target.value})}
                        className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none transition-colors bg-gray-50 focus:bg-white" 
                        placeholder="e.g. Engineering" 
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 rtl:right-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                      required
                      type="tel" 
                      value={details.phone} 
                      onChange={e => setDetails({...details, phone: e.target.value})}
                      className="w-full pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none transition-colors bg-gray-50 focus:bg-white" 
                      placeholder="+20 XXX..." 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={!selectedTime || !selectedLocation || cart.length === 0}
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center group"
                >
                  <span className="group-active:scale-95 transition-transform flex items-center">
                    {t.confirm} <Check className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5" />
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Cart Drawer (Desktop: Right Sticky, Mobile: Slide over) */}
        <div className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full rtl:translate-x-full'} lg:relative lg:translate-x-0 lg:w-80 lg:shadow-none lg:bg-transparent lg:block lg:inset-auto`}>
           <div className="h-full flex flex-col lg:h-auto lg:bg-white lg:rounded-3xl lg:shadow-xl lg:border lg:border-amber-100 lg:sticky lg:top-24 overflow-hidden">
             
             <div className="p-6 bg-amber-500 text-white flex justify-between items-center lg:rounded-t-3xl">
               <div className="flex items-center">
                 <ShoppingBag className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2" />
                 <h2 className="text-xl font-bold font-display">{t.cart}</h2>
               </div>
               <button onClick={() => setIsDrawerOpen(false)} className="lg:hidden p-1 hover:bg-amber-600 rounded-full">
                 <X className="w-6 h-6" />
               </button>
             </div>

             <div className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-200px)]">
               {cart.length === 0 ? (
                 <div className="text-center text-gray-400 py-10">
                   <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-20" />
                   <p>{t.empty}</p>
                   <p className="text-sm">Add some snacks to start.</p>
                 </div>
               ) : (
                 <div className="space-y-4">
                   {cart.map((item) => (
                     <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                       <div className="flex items-center">
                         <img src={item.image} className="w-12 h-12 rounded-lg object-cover mr-3 rtl:mr-0 rtl:ml-3" alt="mini" />
                         <div>
                           <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                           <p className="text-amber-600 text-xs font-bold">EGP {item.price * item.quantity}</p>
                         </div>
                       </div>
                       <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm">
                         <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100 rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg"><Minus className="w-4 h-4 text-gray-600"/></button>
                         <span className="w-8 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg"><Plus className="w-4 h-4 text-gray-600"/></button>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>

             <div className="p-6 bg-gray-50 border-t border-gray-200 lg:rounded-b-3xl">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-gray-600">{t.total}</span>
                 <span className="text-2xl font-bold text-amber-900">EGP {total}</span>
               </div>
               <button 
                 onClick={() => { setIsDrawerOpen(false); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                 disabled={cart.length === 0}
                 className="w-full bg-amber-900 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed lg:hidden"
               >
                 Proceed to Checkout
               </button>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};


// --- Main App Component ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    // Basic Direction Handling
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#fffdf5] selection:bg-amber-500 selection:text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <CursorEffect />
      <DoodleBackground />
      <Navbar currentPage={currentPage} setPage={setCurrentPage} lang={lang} setLang={setLang} />
      
      <main className="min-h-[calc(100vh-300px)]">
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} lang={lang} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'menu' && <MenuPage lang={lang} setPage={setCurrentPage} />}
        {currentPage === 'preorder' && <PreorderPage setPage={setCurrentPage} lang={lang} />}
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;