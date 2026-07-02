import { MapPin, Clock, Phone, Mail, Instagram, Compass, Info } from 'lucide-react';

interface ContactsProps {
  onWhatsAppClick: (text: string) => void;
}

export default function Contacts({ onWhatsAppClick }: ContactsProps) {
  
  const handleMapAction = (landmark: string) => {
    onWhatsAppClick(`Здравствуйте! Подскажите, как лучше проехать к вашему бутику KARYA в ТД «Пассаж Насиха» со стороны ${landmark}?`);
  };

  return (
    <section id="contacts" className="py-16 bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-2 font-medium">Ждем вас в гости</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-3">
            Приезжайте в наш бутик в Атырау
          </h2>
          <div className="w-16 h-[2px] bg-[#A82025] mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 font-sans">
            Оцените непревзойденное турецкое качество Karya лично. Наш бутик расположен в самом центре Атырау с удобными подъездными путями и бесплатной охраняемой парковкой.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Contact Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#F5EFEB] p-6 sm:p-8 shadow-md">
            <div className="space-y-6 text-left">
              
              {/* Boutique Brand */}
              <div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#121212]">KARYA ATYRAU</span>
                <p className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase mt-0.5">ФИРМЕННЫЙ ШОУРУМ</p>
              </div>

              <div className="w-full h-[1px] bg-[#F5EFEB]"></div>

              {/* Address */}
              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Наш адрес:</h4>
                  <p className="text-sm text-[#121212] font-semibold mt-1 font-sans">
                    Казахстан, г. Атырау, <br />
                    ул. Махамбета Утемисова, 118 (ТД «Пассаж Насиха»), 2 этаж
                  </p>
                  <p className="text-xs text-[#A82025] font-sans mt-1">
                    * Бутик №245
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">График работы:</h4>
                  <p className="text-sm text-[#121212] font-semibold mt-1 font-sans">
                    Ежедневно: с 10:00 до 20:00
                  </p>
                  <p className="text-xs text-gray-500 font-sans mt-1">
                    Без выходных и перерывов на обед
                  </p>
                </div>
              </div>

              {/* Phone & Contacts */}
              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Телефоны бутика:</h4>
                  <p className="text-sm text-[#121212] font-semibold mt-1 font-mono">
                    +7 (7122) 75-50-22
                  </p>
                  <p className="text-sm text-[#A82025] font-semibold mt-0.5 font-mono cursor-pointer hover:underline" onClick={() => onWhatsAppClick('Здравствуйте! Я хочу связаться с менеджером бутика KARYA в Атырау.')}>
                    +7 (701) 555-KARYA (WhatsApp)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">Электронная почта:</h4>
                  <p className="text-sm text-[#121212] mt-1 font-mono">
                    atyrau@karya-leather.kz
                  </p>
                </div>
              </div>

            </div>

            {/* Social icons */}
            <div className="mt-8 pt-6 border-t border-[#F5EFEB] flex flex-col sm:flex-row gap-4 justify-between items-center">
              <span className="text-xs text-gray-400 font-sans">Мы в социальных сетях:</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/karya_atyrau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F5EFEB] hover:bg-[#A82025] hover:text-white text-[#121212] rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <button
                  onClick={() => onWhatsAppClick('Здравствуйте! Хочу посмотреть Инстаграм-каталог и заказать живое видео сумки.')}
                  className="w-10 h-10 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white text-[#25D366] rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.975 4.47-9.975 9.974 0 1.76.459 3.475 1.33 4.99L2 22l5.176-1.357c1.465.8 3.11 1.22 4.825 1.22 5.507 0 9.976-4.47 9.976-9.973 0-2.653-1.032-5.148-2.91-7.025A9.897 9.897 0 0012.012 2zm5.786 14.126c-.247.697-1.21 1.272-1.683 1.353-.456.077-1.038.14-3.04-.693-2.556-1.062-4.18-3.666-4.305-3.834-.125-.167-.993-1.32-1.002-2.515-.01-1.196.61-1.79.84-2.03.22-.24.5-.3.674-.3.176 0 .352.002.507.01.163.007.382-.064.6.46.223.535.76 1.854.826 1.986.066.133.095.3.007.477s-.15.28-.295.45c-.145.17-.306.38-.435.5-.145.138-.297.288-.127.58.17.292.756 1.25 1.624 2.022.1.09.2.14.3.14.156 0 .285-.067.433-.234.148-.168.613-.715.776-.957.164-.24.32-.2.535-.117.215.083 1.366.643 1.603.762.237.118.393.178.452.28.058.1.058.58-.188 1.277z"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Right Block: Interactive Custom Map of Atyrau (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#F5EFEB] p-6 shadow-md flex flex-col justify-between">
            <div className="text-left mb-4">
              <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest font-bold flex items-center gap-1">
                <Compass size={12} /> ИНТЕРАКТИВНАЯ КАРТА АТЫРАУ
              </span>
              <h4 className="font-serif text-base text-[#121212] font-semibold mt-1">
                Ориентиры и схема проезда в ТД «Пассаж Насиха»
              </h4>
              <p className="text-xs text-gray-500 font-sans mt-0.5">
                Атырау делится рекой Урал на две части: Азиатскую и Европейскую. Наш бутик находится на <strong className="text-[#121212]">Европейской стороне</strong> в ТД «Пассаж Насиха». Кликните по карте для построения маршрута.
              </p>
            </div>

            {/* Styled Vector Map Representation */}
            <div className="relative aspect-[16/10] bg-[#F9F7F3] border border-[#F5EFEB] overflow-hidden flex items-center justify-center p-4">
              
              {/* Ural River Curve (Dividing Europe and Asia) */}
              <svg className="absolute inset-0 w-full h-full text-blue-100 fill-current opacity-70 pointer-events-none" viewBox="0 0 400 250">
                <path d="M -10,120 Q 150,80 200,140 T 410,130 L 410,260 L -10,260 Z" />
                <path d="M -10,120 Q 150,80 200,140 T 410,130" fill="none" stroke="#93C5FD" strokeWidth="12" />
                
                {/* Europe/Asia text labels */}
                <text x="30" y="50" fill="#9CA3AF" fontSize="10" fontFamily="monospace" letterSpacing="2">ЕВРОПА (Европейский берег)</text>
                <text x="210" y="210" fill="#9CA3AF" fontSize="10" fontFamily="monospace" letterSpacing="2">АЗИЯ (Азиатский берег)</text>
              </svg>

              {/* Central Bridge */}
              <div className="absolute top-[110px] left-[180px] w-2 h-10 bg-gray-400 rotate-[45deg] z-10 border border-white" title="Центральный мост"></div>

              {/* Landmark 1: Hotel Renaissance Atyrau */}
              <button
                onClick={() => handleMapAction('отеля Renaissance')}
                className="absolute top-[50px] left-[60px] bg-white border border-gray-300 hover:border-[#C5A059] px-2 py-1.5 rounded-none text-[9px] font-mono shadow-sm hover:shadow-md transition-all z-20 cursor-pointer"
              >
                🏨 Отель Renaissance
              </button>

              {/* Landmark 2: Hotel Marriott */}
              <button
                onClick={() => handleMapAction('отеля Marriott')}
                className="absolute top-[30px] left-[250px] bg-white border border-gray-300 hover:border-[#C5A059] px-2 py-1.5 rounded-none text-[9px] font-mono shadow-sm hover:shadow-md transition-all z-20 cursor-pointer"
              >
                🏨 Hotel Marriott
              </button>

              {/* Landmark 3: Атырауский Университет нефти и газа */}
              <button
                onClick={() => handleMapAction('университета Нефти и Газа')}
                className="absolute bottom-[40px] left-[240px] bg-white border border-gray-300 hover:border-[#C5A059] px-2 py-1.5 rounded-none text-[9px] font-mono shadow-sm hover:shadow-md transition-all z-20 cursor-pointer"
              >
                🎓 Ун-т Нефти и Газа
              </button>

              {/* TARGET: BOUTIQUE KARYA in BAIZAAR MALL */}
              <div className="absolute top-[80px] left-[150px] z-30 animate-bounce">
                <div className="bg-[#A82025] text-white p-2.5 shadow-2xl border-2 border-white relative flex flex-col items-center">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#C5A059]">KARYA</span>
                  <span className="text-[7px] font-sans font-semibold uppercase text-white">ПАССАЖ НАСИХА</span>
                  {/* Small red triangle below */}
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#A82025] absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>

              {/* Legend overlay */}
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs border border-gray-200 p-2 text-[8px] font-mono text-gray-500 space-y-0.5">
                <p className="flex items-center gap-1"><span className="w-2 h-2 bg-[#A82025]"></span> Наш Бутик (2 этаж)</p>
                <p className="flex items-center gap-1"><span className="w-2 h-1.5 bg-blue-300"></span> Река Урал</p>
                <p className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-400"></span> Центральные автодороги</p>
              </div>

            </div>

            {/* Parking and Entrance details */}
            <div className="mt-4 p-4 bg-[#FBF9F6] border border-dashed border-[#C5A059]/30 text-left flex gap-3">
              <Info size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-sans font-semibold text-xs text-[#121212] uppercase tracking-wider mb-0.5">Совет для покупателей:</h5>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Удобная парковка расположена по всему периметру торгового дома со стороны улицы Махамбета Утемисова. Поднимитесь по центральной лестнице или эскалатору на 2 этаж — наш фирменный бутик KARYA (№245) ждет вас!
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
