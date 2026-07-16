import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onCatalogClick: () => void;
  onWhatsAppClick: (text?: string) => void;
}

export default function Hero({ onCatalogClick, onWhatsAppClick }: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY * 0.35;
      parallaxRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0C0A09]">
      {/* Parallax background image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: '-10%', height: '120%' }}
      >
        <picture>
          {/* WebP — modern browsers: Safari 14+, Chrome, Firefox, Edge */}
          <source
            type="image/webp"
            srcSet="/images/hero-bag-sm.webp 480w, /images/hero-bag-md.webp 768w, /images/hero-bag-lg.webp 1280w, /images/hero-bag-xl.webp 1920w"
            sizes="100vw"
          />
          {/* JPEG fallback — older browsers */}
          <source
            type="image/jpeg"
            srcSet="/images/hero-bag-sm.jpg 480w, /images/hero-bag-md.jpg 768w, /images/hero-bag-lg.jpg 1280w, /images/hero-bag-xl.jpg 1920w"
            sizes="100vw"
          />
          <img
            src="/images/hero-bag-lg.jpg"
            alt="Премиальная кожаная коллекция KARYA"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.38)' }}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>



      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#A16207] to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#A16207]" />
            <span
              className="text-[#A16207]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}
            >
              Официальный бутик · Атырау · с 2018
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 0.68, 0, 1.1] }}
            className="text-white mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.01em'
            }}
          >
            KARYA<br />
            <span
              className="text-[#C89B2E]"
              style={{ fontStyle: 'italic', fontWeight: 300 }}
            >
              Atyrau
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-stone-300 mb-12 max-w-xl"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              lineHeight: 1.7,
              fontWeight: 300
            }}
          >
            Премиальная кожгалантерея от турецкой фабрики KARYA.
            100% натуральная кожа, оригинальные изделия, доставка в день заказа.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <button
              onClick={onCatalogClick}
              className="group inline-flex items-center gap-3 bg-[#A16207] hover:bg-[#C89B2E] text-white px-8 py-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Смотреть каталог
              <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onWhatsAppClick('Здравствуйте! Хочу подобрать изделие из натуральной кожи KARYA.')}
              className="inline-flex items-center gap-3 border border-white/30 hover:border-[#A16207] text-white hover:text-[#C89B2E] px-8 py-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.012 2c-5.506 0-9.975 4.47-9.975 9.974 0 1.76.459 3.475 1.33 4.99L2 22l5.176-1.357c1.465.8 3.11 1.22 4.825 1.22 5.507 0 9.976-4.47 9.976-9.973 0-2.653-1.032-5.148-2.91-7.025A9.897 9.897 0 0012.012 2zm5.786 14.126c-.247.697-1.21 1.272-1.683 1.353-.456.077-1.038.14-3.04-.693-2.556-1.062-4.18-3.666-4.305-3.834-.125-.167-.993-1.32-1.002-2.515-.01-1.196.61-1.79.84-2.03.22-.24.5-.3.674-.3.176 0 .352.002.507.01.163.007.382-.064.6.46.223.535.76 1.854.826 1.986.066.133.095.3.007.477s-.15.28-.295.45c-.145.17-.306.38-.435.5-.145.138-.297.288-.127.58.17.292.756 1.25 1.624 2.022.1.09.2.14.3.14.156 0 .285-.067.433-.234.148-.168.613-.715.776-.957.164-.24.32-.2.535-.117.215.083 1.366.643 1.603.762.237.118.393.178.452.28.058.1.058.58-.188 1.277z"/>
              </svg>
              Консультация
            </button>
          </motion.div>

          {/* Trust metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap gap-x-10 gap-y-4"
          >
            {[
              { value: '100%', label: 'Натуральная кожа' },
              { value: '45+', label: 'Лет фабрике KARYA' },
              { value: '0–0–12', label: 'Рассрочка Kaspi' },
              { value: '1 час', label: 'Доставка по Атырау' },
            ].map((m) => (
              <div key={m.value} className="text-left">
                <div
                  className="text-white"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 300, lineHeight: 1, color: '#C89B2E' }}
                >
                  {m.value}
                </div>
                <div
                  className="text-stone-400 mt-0.5"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase' }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onCatalogClick}
        aria-label="Прокрутить вниз"
      >
        <span className="text-stone-500" style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#A16207]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
