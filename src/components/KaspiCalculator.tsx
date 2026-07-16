import { useState, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { Calculator } from 'lucide-react';

interface KaspiCalculatorProps {
  onWhatsAppClick: (text: string) => void;
}

const formatPrice = (p: number) => p.toLocaleString('ru-RU') + ' ₸';

export default function KaspiCalculator({ onWhatsAppClick }: KaspiCalculatorProps) {
  const [amount, setAmount] = useState(58000);
  const [term, setTerm] = useState<3 | 6 | 12>(12);
  const [selectedProductId, setSelectedProductId] = useState('');
  const monthly = Math.round(amount / term);

  useEffect(() => {
    if (selectedProductId) {
      const p = PRODUCTS.find((x) => x.id === selectedProductId);
      if (p) setAmount(p.price);
    }
  }, [selectedProductId]);

  const handleApply = () => {
    onWhatsAppClick(
      `Здравствуйте! Рассчитал рассрочку на сайте KARYA. Сумма: ${formatPrice(amount)}, срок: ${term} мес., платёж: ${formatPrice(monthly)}/мес. Хочу оформить!`
    );
  };

  return (
    <section id="delivery" className="py-24 bg-[#FAFAF9] border-y border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left — conditions */}
          <div className="bg-[#F5F1EB] p-10 lg:p-14">
            <span
              className="block mb-4 text-[#A16207]"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}
            >
              Оплата и доставка
            </span>
            <h2
              className="text-[#0C0A09] mb-10"
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, lineHeight: 1.2 }}
            >
              Удобно и без переплат
            </h2>

            <div className="space-y-8">
              {[
                {
                  num: '01',
                  title: 'Kaspi Red · 0–0–12',
                  text: 'Рассрочка без процентов и скрытых комиссий. Оформляется мгновенно через Kaspi.kz при получении товара.',
                },
                {
                  num: '02',
                  title: 'Доставка за 1 час',
                  text: 'Бесплатная курьерская доставка по Атырау в день заказа. Курьер привезёт 2 модели на выбор.',
                },
                {
                  num: '03',
                  title: 'Примерка перед оплатой',
                  text: 'Вы осматриваете изделие, оцениваете фактуру кожи — и только потом оплачиваете.',
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6">
                  <span
                    className="shrink-0 text-[#A16207] mt-0.5"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.05em' }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h4
                      className="text-[#0C0A09] mb-1"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 400 }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-[#78716C]"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — calculator */}
          <div className="bg-[#0C0A09] p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-8">
              <Calculator size={16} className="text-[#A16207]" />
              <span
                className="text-[#A16207]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' }}
              >
                Калькулятор рассрочки
              </span>
            </div>

            {/* Product select */}
            <div className="mb-7">
              <label
                className="block text-stone-500 mb-2"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Изделие
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white py-3 px-4 focus:outline-none focus:border-[#A16207] transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 12 }}
              >
                <option value="" className="bg-[#0C0A09]">Ввести сумму вручную</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#0C0A09]">
                    {p.name} — {formatPrice(p.price)}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount slider */}
            <div className="mb-7">
              <div className="flex justify-between items-baseline mb-3">
                <label
                  className="text-stone-500"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Сумма
                </label>
                <span
                  className="text-[#C89B2E]"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 500 }}
                >
                  {formatPrice(amount)}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="300000"
                step="5000"
                value={amount}
                onChange={(e) => { setSelectedProductId(''); setAmount(Number(e.target.value)); }}
                className="w-full h-0.5 bg-white/10 cursor-pointer accent-[#A16207]"
                aria-label="Сумма рассрочки"
              />
              <div className="flex justify-between text-stone-600 mt-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: 9 }}>
                <span>5 000 ₸</span><span>300 000 ₸</span>
              </div>
            </div>

            {/* Term */}
            <div className="mb-8">
              <label
                className="block text-stone-500 mb-3"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Срок
              </label>
              <div className="grid grid-cols-3 gap-2">
                {([3, 6, 12] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`py-3 transition-all duration-200 cursor-pointer focus:outline-none ${
                      term === t
                        ? 'bg-[#A16207] text-white'
                        : 'border border-white/10 text-stone-400 hover:border-[#A16207] hover:text-[#C89B2E]'
                    }`}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}
                    aria-pressed={term === t}
                  >
                    {t} мес.{t === 3 ? '\nKaspi Red' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="border border-[#A16207]/30 p-6 mb-7 text-center">
              <p
                className="text-stone-500 mb-2"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Ежемесячный платёж
              </p>
              <p
                className="text-[#C89B2E]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 500 }}
              >
                {formatPrice(monthly)}
              </p>
              <p
                className="text-emerald-500 mt-1"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                0% переплаты · 0% первый взнос
              </p>
            </div>

            <button
              onClick={handleApply}
              className="w-full bg-[#A16207] hover:bg-[#C89B2E] text-white py-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Оформить в рассрочку
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
