import { useState, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { Calculator, Percent, Sparkles, AlertCircle } from 'lucide-react';

interface KaspiCalculatorProps {
  onWhatsAppClick: (text: string) => void;
}

export default function KaspiCalculator({ onWhatsAppClick }: KaspiCalculatorProps) {
  const [amount, setAmount] = useState<number>(58000);
  const [term, setTerm] = useState<3 | 6 | 12>(12);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  // Re-calculate when amount or term changes
  useEffect(() => {
    const payment = Math.round(amount / term);
    setMonthlyPayment(payment);
  }, [amount, term]);

  const handleProductSelect = (productId: string) => {
    setSelectedProductId(productId);
    if (productId === '') return;
    
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod) {
      setAmount(prod.price);
    }
  };

  const handleSliderChange = (val: number) => {
    setSelectedProductId(''); // reset product select if manually sliding
    setAmount(val);
  };

  const handleAmountInput = (val: string) => {
    setSelectedProductId('');
    const parsed = parseInt(val.replace(/\D/g, ''));
    if (!isNaN(parsed)) {
      setAmount(Math.min(Math.max(parsed, 5000), 500000));
    } else {
      setAmount(0);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₸';
  };

  const handleApply = () => {
    const text = `Здравствуйте! Я рассчитал рассрочку на сайте KARYA Атырау. Сумма покупки: ${formatPrice(amount)}, срок: ${term} мес., ежемесячный платеж: ${formatPrice(monthlyPayment)}. Хочу оформить покупку в рассрочку!`;
    onWhatsAppClick(text);
  };

  return (
    <section id="delivery" className="py-16 bg-[#FBF9F6] border-y border-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block: Conditions */}
          <div className="lg:col-span-5 text-left">
            <p className="text-[#A82025] font-mono text-xs uppercase tracking-widest mb-2 font-bold">Оплата и сервис</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-6">
              Условия рассрочки <br />и экспресс-доставки
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A82025]/10 flex items-center justify-center shrink-0 text-[#A82025]">
                  <Percent size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#121212] uppercase tracking-wider mb-1">
                    Kaspi Red и Рассрочка 0-0-12
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Платите частями без переплаты и скрытых процентов. Рассрочка оформляется моментально в приложении Kaspi.kz при получении товара. Доступны сроки на 3 месяца (Kaspi Red), а также 6 и 12 месяцев.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0 text-[#C5A059]">
                  <span className="font-mono text-sm font-bold">1H</span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#121212] uppercase tracking-wider mb-1">
                    Экспресс-доставка по Атырау в день заказа
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Доставим курьером в течение 1 часа в любой район города (Авангард, Алмагуль, Привокзальный, Лесхоз, Жилгородок и др.). 
                    Курьер может привезти <strong className="text-[#121212] font-semibold">2 модели на выбор</strong> для примерки и оценки текстуры кожи перед оплатой!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <span className="font-mono text-xs font-bold">OK</span>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-[#121212] uppercase tracking-wider mb-1">
                    Бесплатная доставка
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Доставка по городу Атырау абсолютно бесплатна при покупке любого изделия. Если вещь не подошла, вы оплачиваете только курьерские услуги (1000 ₸).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Block */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] text-white p-6 sm:p-8 shadow-2xl relative border border-[#C5A059]/30">
              
              {/* Header inside calc */}
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Calculator size={18} className="text-[#C5A059]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                    Калькулятор рассрочки
                  </span>
                </div>
                <span className="bg-[#A82025] text-white text-[9px] font-mono tracking-widest uppercase px-2 py-1">
                  0% переплаты • 0% первый взнос
                </span>
              </div>

              {/* Product selector to ease calculations */}
              <div className="mb-6">
                <label htmlFor="product" className="block text-left text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                  Выберите изделие для расчета:
                </label>
                <select
                  id="product"
                  value={selectedProductId}
                  onChange={(e) => handleProductSelect(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 text-white py-3 px-4 text-xs focus:outline-none focus:border-[#C5A059] font-sans"
                >
                  <option value="" className="bg-[#121212] text-gray-400">
                    -- Введите сумму вручную или выберите из каталога --
                  </option>
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id} className="bg-[#121212] text-white">
                      {p.name} ({formatPrice(p.price)})
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount slider */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="amount-input" className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                    Сумма покупки:
                  </label>
                  <input
                    id="amount-input"
                    type="text"
                    maxLength={20}
                    value={amount === 0 ? '' : amount.toLocaleString('ru-RU')}
                    onChange={(e) => handleAmountInput(e.target.value)}
                    className="bg-transparent text-right font-mono font-bold text-lg text-[#C5A059] focus:outline-none w-32 border-b border-white/10 pb-0.5"
                    placeholder="0"
                  />
                  <span className="text-[#C5A059] font-mono font-bold text-lg ml-1">₸</span>
                </div>
                
                <input
                  type="range"
                  min="5000"
                  max="300000"
                  step="5000"
                  value={amount}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full accent-[#A82025] h-1 bg-white/10 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-1">
                  <span>5 000 ₸</span>
                  <span>150 000 ₸</span>
                  <span>300 000 ₸</span>
                </div>
              </div>

              {/* Term selection */}
              <div className="mb-8" role="radiogroup" aria-labelledby="kaspi-term-label">
                <span id="kaspi-term-label" className="block text-left text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Срок рассрочки:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {[3, 6, 12].map((t) => (
                    <button
                      key={t}
                      role="radio"
                      aria-checked={term === t}
                      onClick={() => setTerm(t as any)}
                      className={`py-3.5 text-xs font-mono border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                        term === t
                          ? 'bg-[#A82025] border-[#A82025] text-white font-bold'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {t} месяцев
                      {t === 3 && <span className="block text-[8px] text-red-200 mt-0.5 font-normal">Kaspi Red</span>}
                      {t > 3 && <span className="block text-[8px] text-gray-400 mt-0.5 font-normal">Рассрочка</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly payment display block */}
              <div className="bg-white/5 border border-white/10 p-5 mb-6 text-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Ежемесячный платеж в рассрочку:
                </p>
                <p className="text-2xl sm:text-3xl font-mono font-bold text-[#C5A059] mt-2 tracking-tight">
                  {formatPrice(monthlyPayment)}
                </p>
                <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-emerald-400 mt-1.5 uppercase tracking-widest">
                  <Sparkles size={10} /> 0% Первоначальный взнос • Без комиссий
                </div>
              </div>

              {/* Apply button */}
              <button
                onClick={handleApply}
                className="w-full bg-[#A82025] hover:bg-white hover:text-[#121212] text-white py-4 text-xs font-mono tracking-wider uppercase transition-all duration-300 font-bold border-2 border-transparent hover:border-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
              >
                Оформить покупку в рассрочку
              </button>

              {/* Note */}
              <p className="text-[10px] text-gray-500 font-sans text-center mt-3">
                * Оформление происходит удаленно за 1 минуту через официальное приложение Kaspi Pay. Мы отправим вам счет на оплату в WhatsApp.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
