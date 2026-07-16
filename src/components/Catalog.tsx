import { useState, useEffect, useRef } from 'react';
import { PRODUCTS, Product } from '../data';
import { ShoppingBag, Video } from 'lucide-react';

interface CatalogProps {
  onOrderClick: (product: Product) => void;
  onWhatsAppClick: (text: string) => void;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const filterTypes = [
  { label: 'Все', value: 'all' },
  { label: 'Сумки', value: 'bag' },
  { label: 'Кошельки', value: 'wallet' },
  { label: 'Ремни', value: 'belt' },
  { label: 'Аксессуары', value: 'accessory' },
];

const formatPrice = (p: number) => p.toLocaleString('ru-RU') + ' ₸';

export default function Catalog({ onOrderClick, onWhatsAppClick }: CatalogProps) {
  const [gender, setGender] = useState<'for_her' | 'for_him'>('for_her');
  const [type, setType] = useState('all');
  const { ref: sectionRef, inView } = useInView();

  const products = PRODUCTS.filter(
    (p) => p.category === gender && (type === 'all' || p.type === type)
  );

  const handleVideoRequest = (product: Product) => {
    onWhatsAppClick(`Здравствуйте! Отправьте, пожалуйста, видео с витрины: "${product.name}" (Арт. ${product.code}).`);
  };

  return (
    <section id="catalog" ref={sectionRef} className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className={`text-center mb-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-label block mb-4">Коллекции в наличии</span>
          <h2
            className="text-[#0C0A09] mb-5"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Каталог KARYA
          </h2>
          <span className="gold-line" />
        </div>

        {/* Gender tabs */}
        <div className={`flex justify-center gap-1 mb-10 ${inView ? 'animate-fade-up anim-delay-200' : 'opacity-0'}`}>
          {[
            { label: 'Для неё', value: 'for_her' as const },
            { label: 'Для него', value: 'for_him' as const },
          ].map((g) => (
            <button
              key={g.value}
              onClick={() => { setGender(g.value); setType('all'); }}
              className={`px-8 py-3 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207] ${
                gender === g.value
                  ? 'bg-[#0C0A09] text-[#FAFAF9]'
                  : 'bg-transparent text-[#78716C] border border-[#E8E4DC] hover:border-[#0C0A09] hover:text-[#0C0A09]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              aria-pressed={gender === g.value}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Type filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 ${inView ? 'animate-fade-up anim-delay-300' : 'opacity-0'}`}>
          {filterTypes.map((f) => (
            <button
              key={f.value}
              onClick={() => setType(f.value)}
              className={`px-4 py-2 transition-all duration-200 cursor-pointer text-xs focus:outline-none ${
                type === f.value
                  ? 'bg-[#A16207] text-white'
                  : 'bg-white border border-[#E8E4DC] text-[#78716C] hover:border-[#A16207] hover:text-[#A16207]'
              }`}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              aria-pressed={type === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E4DC]">
            {products.map((product, idx) => (
              <article
                key={product.id}
                className={`group bg-[#FAFAF9] flex flex-col cursor-pointer ${inView ? `animate-fade-up` : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E4DC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full img-zoom"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isBestseller && (
                      <span
                        className="bg-[#991B1E] text-white px-2 py-1"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                      >
                        Хит
                      </span>
                    )}
                    {product.originalPrice && (
                      <span
                        className="bg-[#A16207] text-white px-2 py-1"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                      >
                        Скидка
                      </span>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0C0A09]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={() => onOrderClick(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0C0A09] hover:bg-[#A16207] hover:text-white py-2.5 transition-colors cursor-pointer focus:outline-none"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                        aria-label={`Купить ${product.name}`}
                      >
                        <ShoppingBag size={13} />
                        Купить
                      </button>
                      <button
                        onClick={() => handleVideoRequest(product)}
                        className="flex items-center justify-center gap-1.5 border border-white text-white hover:bg-white hover:text-[#0C0A09] px-3 py-2.5 transition-colors cursor-pointer focus:outline-none"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                        aria-label="Запросить видео"
                        title="Видео с витрины"
                      >
                        <Video size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 border-t border-[#E8E4DC]">
                  <span
                    className="text-[#78716C] mb-1.5"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    {product.code}
                  </span>
                  <h3
                    className="text-[#0C0A09] group-hover:text-[#991B1E] transition-colors flex-1 mb-4"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-auto">
                    <span
                      className="text-[#0C0A09]"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 500 }}
                    >
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span
                        className="text-[#78716C] line-through"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}
                      >
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#78716C]" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Выберите другую категорию
          </div>
        )}

        {/* Kaspi banner */}
        <div className={`mt-12 bg-[#0C0A09] p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${inView ? 'animate-fade-up anim-delay-500' : 'opacity-0'}`}>
          <div>
            <span
              className="text-[#A16207] block mb-1"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
            >
              Kaspi Red
            </span>
            <p
              className="text-white"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 300 }}
            >
              Рассрочка 0–0–12 на все товары без переплаты
            </p>
          </div>
          <button
            onClick={() => onWhatsAppClick('Здравствуйте! Хочу узнать об условиях рассрочки Kaspi Red.')}
            className="shrink-0 border border-[#A16207] text-[#A16207] hover:bg-[#A16207] hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer focus:outline-none whitespace-nowrap"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Подробнее
          </button>
        </div>

      </div>
    </section>
  );
}
