import { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onWhatsAppClick: (text?: string) => void;
}

export default function Header({ onNavClick, onWhatsAppClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'О бренде KARYA', target: 'guarantee' },
    { label: 'Каталог в наличии', target: 'catalog' },
    { label: 'Доставка и Kaspi Red', target: 'delivery' },
    { label: 'Идеи для подарков', target: 'gifts' },
    { label: 'Как нас найти', target: 'contacts' },
  ];

  const handleItemClick = (target: string) => {
    setIsOpen(false);
    onNavClick(target);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F6]/95 backdrop-blur-md border-b border-[#F5EFEB] shadow-sm">
      {/* Top bar for info */}
      <div className="bg-[#121212] text-[#FBF9F6] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-[10px] sm:text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#C5A059]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Фирменный бутик в Атырау
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-[#C5A059]" /> Ежедневно 10:00 - 20:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-300">
              <MapPin size={12} className="text-[#C5A059]" /> ТД «Пассаж Насиха», 2 этаж
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => handleItemClick('hero')}>
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#121212]">
            KARYA
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.4em] text-[#C5A059] uppercase -mt-1">
            Atyrau Boutique
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item.target)}
              className="text-xs lg:text-sm font-medium text-[#121212] hover:text-[#A82025] transition-colors duration-200 cursor-pointer py-1 border-b border-transparent hover:border-[#A82025]/30 font-sans"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onWhatsAppClick('Здравствуйте! Я с сайта KARYA. Хочу проконсультироваться по наличию изделий.')}
            className="flex items-center gap-2 bg-[#121212] hover:bg-[#A82025] text-white px-4 py-2 rounded-none text-xs font-mono tracking-wider transition-all duration-300 border border-[#121212] hover:border-[#A82025]"
          >
            <Phone size={14} className="text-[#C5A059]" />
            WHATSAPP КОНСУЛЬТАНТ
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#121212] hover:text-[#A82025] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FBF9F6] border-t border-[#F5EFEB] overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item.target)}
                  className="block w-full text-left py-2.5 px-3 text-sm font-medium text-[#121212] hover:bg-[#F5EFEB] rounded-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[#F5EFEB] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 px-3 py-1 font-mono">
                  <Clock size={12} /> Ежедневно с 10:00 до 20:00
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onWhatsAppClick('Здравствуйте! Хочу узнать о наличии кожаных изделий KARYA в Атырау.');
                  }}
                  className="flex items-center justify-center gap-2 bg-[#A82025] hover:bg-[#121212] text-white py-3 px-4 text-xs font-mono tracking-wider transition-colors duration-300 w-full"
                >
                  <Phone size={14} />
                  ПОДОБРАТЬ В WHATSAPP
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
