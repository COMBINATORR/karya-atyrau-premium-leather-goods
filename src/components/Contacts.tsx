import { MapPin, Clock, Instagram } from 'lucide-react';

interface ContactsProps {
  onWhatsAppClick: (text: string) => void;
}

export default function Contacts({ onWhatsAppClick }: ContactsProps) {
  return (
    <section id="contacts" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="block mb-4 text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}
          >
            Ждём вас
          </span>
          <h2
            className="text-[#0C0A09] mb-5"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Приходите в бутик
          </h2>
          <span className="gold-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Contact info */}
          <div className="lg:col-span-4 bg-[#0C0A09] p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span
                  className="text-white tracking-[0.3em]"
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

              <div className="w-12 h-px bg-[#A16207]/40" />

              {[
                {
                  icon: MapPin,
                  label: 'Адрес',
                  value: 'г. Атырау, ул. Махамбета Утемисова, 118\nТД «Пассаж Насиха», 2 этаж, бутик №245',
                },
                {
                  icon: Clock,
                  label: 'График',
                  value: 'Ежедневно: 10:00–20:00\nБез выходных и обеда',
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <Icon size={14} className="text-[#A16207] shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="text-stone-600 mb-1"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-stone-300 whitespace-pre-line"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.65 }}
                    >
                      {value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Phone */}
              <div>
                <p
                  className="text-stone-600 mb-2"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Телефон
                </p>
                <p
                  className="text-white mb-1"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}
                >
                  +7 (7122) 75-50-22
                </p>
                <button
                  onClick={() => onWhatsAppClick('Здравствуйте! Хочу связаться с менеджером KARYA Атырау.')}
                  className="text-[#A16207] hover:text-[#C89B2E] transition-colors cursor-pointer focus:outline-none"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
                >
                  +7 (701) 555-52-79 WhatsApp →
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <a
                href="https://instagram.com/karya_atyrau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A16207]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}
                aria-label="Перейти в Instagram"
              >
                <Instagram size={14} />
                @karya_atyrau
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-8 overflow-hidden" style={{ minHeight: 420 }}>
            <iframe
              title="KARYA Atyrau на карте"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.867!2d51.88!3d47.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA2JzM2LjAiTiA1McKwNTInNDguMCJF!5e0!3m2!1sru!2skz!4v1688000000000"
              className="w-full h-full border-0"
              style={{ minHeight: 420, filter: 'grayscale(0.3) contrast(1.05)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Bottom CTA strip */}
        <div className="mt-0 bg-[#F5F1EB] border border-[#E8E4DC] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-[#0C0A09]"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 300 }}
          >
            Не можете приехать? Пришлём живое видео с витрины за 5 минут.
          </p>
          <button
            onClick={() => onWhatsAppClick('Здравствуйте! Отправьте, пожалуйста, видео с витрины бутика KARYA.')}
            className="shrink-0 bg-[#0C0A09] hover:bg-[#991B1E] text-white px-8 py-4 transition-all duration-300 cursor-pointer focus:outline-none whitespace-nowrap"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Написать в WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
