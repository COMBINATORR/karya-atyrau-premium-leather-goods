import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onWhatsAppClick: (text?: string) => void;
}

const navItems = [
  { label: 'О бренде', target: 'guarantee' },
  { label: 'Каталог', target: 'catalog' },
  { label: 'Доставка', target: 'delivery' },
  { label: 'Подарки', target: 'gifts' },
  { label: 'Контакты', target: 'contacts' },
];

const WhatsAppIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.012 2c-5.506 0-9.975 4.47-9.975 9.974 0 1.76.459 3.475 1.33 4.99L2 22l5.176-1.357c1.465.8 3.11 1.22 4.825 1.22 5.507 0 9.976-4.47 9.976-9.973 0-2.653-1.032-5.148-2.91-7.025A9.897 9.897 0 0012.012 2zm5.786 14.126c-.247.697-1.21 1.272-1.683 1.353-.456.077-1.038.14-3.04-.693-2.556-1.062-4.18-3.666-4.305-3.834-.125-.167-.993-1.32-1.002-2.515-.01-1.196.61-1.79.84-2.03.22-.24.5-.3.674-.3.176 0 .352.002.507.01.163.007.382-.064.6.46.223.535.76 1.854.826 1.986.066.133.095.3.007.477s-.15.28-.295.45c-.145.17-.306.38-.435.5-.145.138-.297.288-.127.58.17.292.756 1.25 1.624 2.022.1.09.2.14.3.14.156 0 .285-.067.433-.234.148-.168.613-.715.776-.957.164-.24.32-.2.535-.117.215.083 1.366.643 1.603.762.237.118.393.178.452.28.058.1.058.58-.188 1.277z"/>
  </svg>
);

export default function Header({ onNavClick, onWhatsAppClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleItemClick = (target: string) => {
    setIsOpen(false);
    onNavClick(target);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md shadow-sm'
          : 'bg-[#FAFAF9]'
      } border-b border-[#E8E4DC]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-3 items-center">

          {/* Left — WhatsApp CTA (desktop) / Hamburger (mobile) */}
          <div className="flex items-center">
            {/* Desktop WhatsApp button */}
            <button
              onClick={() => onWhatsAppClick('Здравствуйте! Хочу проконсультироваться по изделиям KARYA.')}
              className="hidden md:flex items-center gap-2 border border-[#0C0A09] hover:bg-[#0C0A09] hover:text-white text-[#0C0A09] px-4 py-2 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              <WhatsAppIcon />
              WhatsApp
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#0C0A09] cursor-pointer focus:outline-none"
              aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center — Logo */}
          <div className="flex justify-center">
            <button
              onClick={() => handleItemClick('hero')}
              className="flex flex-col items-center cursor-pointer focus:outline-none"
              aria-label="На главную"
            >
              <span
                className="text-[#0C0A09] tracking-[0.3em]"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 400, lineHeight: 1 }}
              >
                KARYA
              </span>
              <span
                className="text-[#A16207] tracking-[0.5em] -mt-0.5"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 8, textTransform: 'uppercase' }}
              >
                Atyrau
              </span>
            </button>
          </div>

          {/* Right — Nav links (desktop) / WhatsApp icon (mobile) */}
          <div className="flex items-center justify-end">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Основная навигация">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleItemClick(item.target)}
                  className="text-[#78716C] hover:text-[#0C0A09] cursor-pointer transition-colors duration-200 focus:outline-none"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 400, letterSpacing: '0.02em' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile — WhatsApp icon only */}
            <button
              onClick={() => onWhatsAppClick('Здравствуйте! Хочу узнать о наличии изделий KARYA.')}
              className="md:hidden flex items-center justify-center w-9 h-9 text-[#0C0A09] hover:text-[#A16207] transition-colors cursor-pointer focus:outline-none"
              aria-label="Написать в WhatsApp"
            >
              <WhatsAppIcon />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#FAFAF9] border-t border-[#E8E4DC]"
            aria-label="Мобильная навигация"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleItemClick(item.target)}
                  className="block w-full text-left py-3 px-4 text-sm text-[#0C0A09] hover:bg-[#E8E4DC] transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.02em' }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[#E8E4DC]">
                <button
                  onClick={() => { setIsOpen(false); onWhatsAppClick('Здравствуйте! Хочу узнать о наличии изделий KARYA.'); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0C0A09] hover:bg-[#991B1E] text-white py-3 px-4 transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  <WhatsAppIcon />
                  Написать в WhatsApp
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
