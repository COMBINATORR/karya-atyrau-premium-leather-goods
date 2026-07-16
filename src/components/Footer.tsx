import { ShieldCheck, Instagram } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onWhatsAppClick: (text: string) => void;
}

const navLinks = [
  { label: 'О бренде', target: 'guarantee' },
  { label: 'Каталог', target: 'catalog' },
  { label: 'Доставка и Kaspi', target: 'delivery' },
  { label: 'Подарки', target: 'gifts' },
  { label: 'Контакты', target: 'contacts' },
];

const categories = [
  'Женские сумки и тоуты',
  'Мужские деловые портфели',
  'Кошельки и портмоне',
  'Кожаные ремни',
  'Картхолдеры и аксессуары',
  'Подарочные сеты',
];

export default function Footer({ onNavClick, onWhatsAppClick }: FooterProps) {
  return (
    <footer className="bg-[#0C0A09] text-[#FAFAF9] border-t border-[#A16207]/20">

      {/* Final CTA block */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3
              className="text-white mb-3"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300 }}
            >
              Не определились с моделью или цветом?
            </h3>
            <p
              className="text-stone-500"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.65 }}
            >
              Наш менеджер ответит за 5 минут и отправит живое видео любого изделия прямо с витрины.
            </p>
          </div>
          <button
            onClick={() => onWhatsAppClick('Здравствуйте! Я с сайта KARYA — хочу проконсультироваться и посмотреть видео изделий.')}
            className="shrink-0 flex items-center gap-3 bg-[#A16207] hover:bg-[#C89B2E] text-white px-8 py-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.012 2c-5.506 0-9.975 4.47-9.975 9.974 0 1.76.459 3.475 1.33 4.99L2 22l5.176-1.357c1.465.8 3.11 1.22 4.825 1.22 5.507 0 9.976-4.47 9.976-9.973 0-2.653-1.032-5.148-2.91-7.025A9.897 9.897 0 0012.012 2zm5.786 14.126c-.247.697-1.21 1.272-1.683 1.353-.456.077-1.038.14-3.04-.693-2.556-1.062-4.18-3.666-4.305-3.834-.125-.167-.993-1.32-1.002-2.515-.01-1.196.61-1.79.84-2.03.22-.24.5-.3.674-.3.176 0 .352.002.507.01.163.007.382-.064.6.46.223.535.76 1.854.826 1.986.066.133.095.3.007.477s-.15.28-.295.45c-.145.17-.306.38-.435.5-.145.138-.297.288-.127.58.17.292.756 1.25 1.624 2.022.1.09.2.14.3.14.156 0 .285-.067.433-.234.148-.168.613-.715.776-.957.164-.24.32-.2.535-.117.215.083 1.366.643 1.603.762.237.118.393.178.452.28.058.1.058.58-.188 1.277z"/>
            </svg>
            Связаться в WhatsApp
          </button>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-5">
          <div>
            <span
              className="text-white tracking-[0.28em]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
            >
              KARYA
            </span>
            <p
              className="text-[#A16207] mt-0.5"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.45em', textTransform: 'uppercase' }}
            >
              Atyrau Boutique
            </p>
          </div>
          <p
            className="text-stone-600"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.7 }}
          >
            Премиальная кожгалантерея от турецкой фабрики KARYA. Оригинальное качество в Атырау.
          </p>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-[#A16207]" />
            <span
              className="text-stone-600"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em' }}
            >
              Авторизованный партнер KARYA Istanbul
            </span>
          </div>
          <a
            href="https://instagram.com/karya_atyrau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-white transition-colors focus:outline-none"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}
            aria-label="Instagram KARYA Atyrau"
          >
            <Instagram size={13} />
            @karya_atyrau
          </a>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4
            className="text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
          >
            Разделы
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => onNavClick(item.target)}
                  className="text-stone-500 hover:text-white transition-colors cursor-pointer focus:outline-none text-left"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h4
            className="text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
          >
            Каталог
          </h4>
          <ul className="space-y-2.5">
            {categories.map((cat) => (
              <li
                key={cat}
                className="text-stone-500"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Boutique */}
        <div className="space-y-4">
          <h4
            className="text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
          >
            Бутик
          </h4>
          <div
            className="text-stone-500 space-y-2"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.6 }}
          >
            <p>ТД «Пассаж Насиха», 2 этаж</p>
            <p>г. Атырау</p>
            <p>Ежедневно 10:00–20:00</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Kaspi Red', '0–0–12'].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#A16207]/40 text-[#A16207] px-2 py-1"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/6">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-stone-700"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em' }}
        >
          <p>© 2026 KARYA ATYRAU. Все права защищены.</p>
          <p>Официальный магазин оригинальной продукции KARYA</p>
        </div>
      </div>

    </footer>
  );
}
