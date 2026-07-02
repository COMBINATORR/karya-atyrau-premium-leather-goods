import { Phone, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onWhatsAppClick: (text: string) => void;
}

export default function Footer({ onNavClick, onWhatsAppClick }: FooterProps) {
  
  const handleFinalCTA = () => {
    onWhatsAppClick('Здравствуйте! Я нахожусь на сайте KARYA Атырау и хочу связаться с менеджером для консультации и просмотра живого видео изделий с витрины.');
  };

  return (
    <footer className="bg-[#121212] text-[#FBF9F6] pt-16 pb-8 border-t border-[#C5A059]/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER BLOCK: FINAL CALL TO ACTION (From Copyright Brief Section 4) */}
        <div className="bg-white/5 border border-white/10 p-6 sm:p-10 mb-16 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
          {/* Decorative faint glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A82025]/20 rounded-full blur-2xl"></div>
          
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-3">
              Не определились с моделью или цветом?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              Отвечаем в WhatsApp за 5 минут. По вашему запросу отправим живое видео любого изделия прямо с витрины нашего магазина.
            </p>
          </div>

          <button
            onClick={handleFinalCTA}
            className="flex items-center justify-center gap-3 bg-[#A82025] hover:bg-white hover:text-[#121212] text-white py-4 px-8 text-xs sm:text-sm font-mono tracking-widest transition-all duration-300 rounded-none uppercase font-bold shrink-0 w-full sm:w-auto border border-transparent hover:border-[#121212] cursor-pointer"
          >
            <Phone size={16} />
            Связаться с менеджером бутика
          </button>
        </div>

        {/* MID BLOCK: BRAND DETAILS & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white">
                KARYA
              </span>
              <p className="text-[9px] font-mono tracking-[0.4em] text-[#C5A059] uppercase -mt-1">
                Atyrau Boutique
              </p>
            </div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Премиальная кожгалантерея от легендарной турецкой фабрики KARYA. Оригинальное качество, 100% натуральная кожа и безукоризненный сервис в городе Атырау.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={14} className="text-[#C5A059]" />
              <span className="font-sans">Авторизованный партнер KARYA Istanbul</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">Навигация:</h4>
            <ul className="space-y-2 text-xs font-sans text-gray-300">
              <li>
                <button onClick={() => onNavClick('guarantee')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  О бренде KARYA
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('catalog')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Каталог в наличии
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('delivery')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Доставка и Kaspi Red
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('gifts')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Идеи для подарков
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contacts')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Как нас найти (Контакты)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Catalog Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">Категории в наличии:</h4>
            <ul className="space-y-2 text-xs font-sans text-gray-300">
              <li>Женские сумки и тоуты</li>
              <li>Мужские деловые портфели</li>
              <li>Женские и мужские кошельки</li>
              <li>Кожаные ремни ручной работы</li>
              <li>Картхолдеры и визитницы</li>
              <li>Подарочные представительские сеты</li>
            </ul>
          </div>

          {/* Col 4: Shop details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">Фирменный бутик:</h4>
            <div className="space-y-2.5 text-xs text-gray-300 font-sans">
              <p>📍 г. Атырау, ТД «Пассаж Насиха», 2 этаж</p>
              <p>🕒 Ежедневно с 10:00 до 20:00</p>
              <p className="flex items-center gap-1">
                💳 Kaspi Red, Рассрочка, Kaspi QR, Visa/Mastercard
              </p>
              <div className="flex gap-2 pt-1">
                <span className="bg-[#A82025] text-white text-[8px] font-mono font-bold tracking-wider px-2 py-1 rounded-xs uppercase">
                  Kaspi Red
                </span>
                <span className="bg-white/10 text-white text-[8px] font-mono font-bold tracking-wider px-2 py-1 rounded-xs uppercase">
                  Рассрочка 0-0-12
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-mono">
          <p>© 2026 KARYA ATYRAU. Все права защищены. Фирменный магазин оригинальной продукции.</p>
          <p className="flex items-center gap-1 font-sans">
            Сделано с <Heart size={10} className="text-[#A82025] fill-[#A82025]" /> для ценителей качества в Атырау
          </p>
        </div>

      </div>
    </footer>
  );
}
