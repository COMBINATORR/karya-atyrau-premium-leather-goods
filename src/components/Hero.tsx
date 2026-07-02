import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';

interface HeroProps {
  onCatalogClick: () => void;
  onWhatsAppClick: (text?: string) => void;
}

export default function Hero({ onCatalogClick, onWhatsAppClick }: HeroProps) {
  return (
    <section id="hero" className="relative bg-[#FBF9F6] pt-8 pb-16 md:py-24 overflow-hidden border-b border-[#F5EFEB]">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#A82025]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#F5EFEB] border border-[#C5A059]/20 px-3 py-1.5 self-start mb-6 rounded-none">
              <Sparkles size={14} className="text-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider text-[#121212]">
                Фирменный бутик в Атырау • Kaspi Red & Рассрочка 0-0-12
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#121212] mb-6 tracking-tight">
              KARYA ATYRAU — <br />
              <span className="italic text-[#C5A059]">премиальная кожгалантерея</span> <br />
              от легендарной фабрики
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed mb-8 max-w-xl">
              Исключительное фабричное качество и 100% натуральная итальянская кожа. 
              Никаких подделок и эко-кожи — только оригинальные изделия бренда <strong className="text-[#121212] font-semibold">KARYA</strong> напрямую с производства. 
              Закажите онлайн сегодня и получите заказ в день покупки с бесплатной примеркой!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={onCatalogClick}
                className="flex items-center justify-center gap-2 bg-[#A82025] hover:bg-[#121212] text-white px-8 py-4 text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 shadow-md hover:shadow-lg rounded-none w-full sm:w-auto uppercase"
              >
                ОТКРЫТЬ КАТАЛОГ В НАЛИЧИИ <span className="font-sans">→</span>
              </button>
              
              <button
                onClick={() => onWhatsAppClick('Здравствуйте! Хочу подобрать подарок из натуральной кожи KARYA в Атырау.')}
                className="flex items-center justify-center gap-3 bg-transparent hover:bg-[#F5EFEB] text-[#121212] border-2 border-[#121212] hover:border-[#A82025] hover:text-[#A82025] px-8 py-4 text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 rounded-none w-full sm:w-auto uppercase"
              >
                {/* Custom WhatsApp Icon for designer annotation */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.975 4.47-9.975 9.974 0 1.76.459 3.475 1.33 4.99L2 22l5.176-1.357c1.465.8 3.11 1.22 4.825 1.22 5.507 0 9.976-4.47 9.976-9.973 0-2.653-1.032-5.148-2.91-7.025A9.897 9.897 0 0012.012 2zm5.786 14.126c-.247.697-1.21 1.272-1.683 1.353-.456.077-1.038.14-3.04-.693-2.556-1.062-4.18-3.666-4.305-3.834-.125-.167-.993-1.32-1.002-2.515-.01-1.196.61-1.79.84-2.03.22-.24.5-.3.674-.3.176 0 .352.002.507.01.163.007.382-.064.6.46.223.535.76 1.854.826 1.986.066.133.095.3.007.477s-.15.28-.295.45c-.145.17-.306.38-.435.5-.145.138-.297.288-.127.58.17.292.756 1.25 1.624 2.022.1.09.2.14.3.14.156 0 .285-.067.433-.234.148-.168.613-.715.776-.957.164-.24.32-.2.535-.117.215.083 1.366.643 1.603.762.237.118.393.178.452.28.058.1.058.58-.188 1.277z"/>
                </svg>
                ПОДОБРАТЬ В WHATSAPP
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#F5EFEB] text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <ShieldCheck size={20} className="text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">100% Оригинал</h4>
                  <p className="text-[10px] text-gray-500">Турецкая фабрика</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 border-l border-[#F5EFEB] pl-4">
                <CreditCard size={20} className="text-[#C5A059] shrink-0" />
                <div>
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">Kaspi Red / Рассрочка</h4>
                  <p className="text-[10px] text-gray-500">До 12 месяцев</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 border-l border-[#F5EFEB] pl-4">
                <div className="relative text-[#C5A059] shrink-0">
                  <span className="text-[10px] font-mono border border-[#C5A059] px-1 rounded-sm">1H</span>
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#121212] font-semibold">Экспресс Доставка</h4>
                  <p className="text-[10px] text-gray-500">По Атырау в день заказа</p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury visual block */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#C5A059]/30 p-2 bg-white shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F5EFEB]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
                  alt="Премиальная кожгалантерея KARYA Атырау"
                  className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative gold text label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 border-l-4 border-[#A82025]">
                  <p className="font-serif text-[#121212] text-xs italic">
                    «Роскошь, проверенная временем. Натуральная фактура кожи в каждом стежке».
                  </p>
                  <p className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase mt-1">
                    KARYA Итальянские Традиции
                  </p>
                </div>
              </div>
              
              {/* Floating gold coin badge */}
              <div className="absolute -top-4 -right-4 bg-[#121212] text-white p-3 rounded-none border border-[#C5A059] text-center hidden sm:block shadow-lg">
                <p className="text-[8px] font-mono tracking-widest text-[#C5A059] uppercase">Kaspi Red</p>
                <p className="text-sm font-semibold font-mono text-white">0-0-12</p>
                <p className="text-[7px] text-gray-400">рассрочка</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
