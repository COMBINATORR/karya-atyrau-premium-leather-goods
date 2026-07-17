import { useState } from 'react';
import { GIFT_SETS, GiftSet } from '../data';
import { Gift, Sparkles, ChevronRight, RotateCcw, CheckCircle, Smartphone } from 'lucide-react';

interface GiftAssistantProps {
  onOrderClick: (fakeProduct: any) => void;
  onWhatsAppClick: (text: string) => void;
}

export default function GiftAssistant({ onOrderClick, onWhatsAppClick }: GiftAssistantProps) {
  const [step, setStep] = useState<number>(1);
  const [target, setTarget] = useState<'her' | 'him' | 'boss' | null>(null);
  const [budget, setBudget] = useState<'low' | 'mid' | 'high' | null>(null);
  const [style, setStyle] = useState<'classic' | 'casual' | 'premium' | null>(null);
  const [resultSet, setResultSet] = useState<GiftSet | null>(null);

  const startQuiz = () => {
    setStep(1);
    setTarget(null);
    setBudget(null);
    setStyle(null);
    setResultSet(null);
  };

  const handleTargetSelect = (value: 'her' | 'him' | 'boss') => {
    setTarget(value);
    setStep(2);
  };

  const handleBudgetSelect = (value: 'low' | 'mid' | 'high') => {
    setBudget(value);
    setStep(3);
  };

  const handleStyleSelect = (value: 'classic' | 'casual' | 'premium') => {
    setStyle(value);
    
    // Find matching gift set
    let matched: GiftSet | undefined;
    
    if (target === 'boss') {
      matched = GIFT_SETS.find(s => s.target === 'boss');
    } else if (target === 'her') {
      matched = GIFT_SETS.find(s => s.target === 'her');
    } else {
      matched = GIFT_SETS.find(s => s.target === 'him');
    }

    // Fallback if not found
    if (!matched) {
      matched = GIFT_SETS[1]; // default status set
    }

    setResultSet(matched);
    setStep(4);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₸';
  };

  const handleOrderSet = () => {
    if (resultSet) {
      onOrderClick({
        id: resultSet.id,
        name: `Подарочный ${resultSet.name}`,
        price: resultSet.price,
        code: `GIFT-${resultSet.id.toUpperCase()}`,
        image: resultSet.image
      });
    }
  };

  const handleWhatsAppConsult = () => {
    if (resultSet) {
      const text = `Здравствуйте! Я прошел подбор подарков на сайте KARYA Атырау. Мне понравился "${resultSet.name}" за ${formatPrice(resultSet.price)}. Расскажите подробнее о наличии и упаковке!`;
      onWhatsAppClick(text);
    } else {
      onWhatsAppClick('Здравствуйте! Помогите мне подобрать индивидуальный подарок из кожи KARYA в Атырау под мой бюджет.');
    }
  };

  return (
    <section id="gifts" className="py-16 bg-[#F5EFEB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-2 font-medium">Подарочный сервис</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-3">
            Идеальное решение для статусного подарка
          </h2>
          <div className="w-16 h-[2px] bg-[#A82025] mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Больше не нужно думать, что подарить. Мы собрали изысканные сеты изделий KARYA в роскошной премиум-упаковке ручной работы.
          </p>
        </div>

        {/* Dynamic Card Container */}
        <div className="bg-white border border-gray-200 shadow-xl p-6 sm:p-10 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
          
          {/* Decorative Corner Badge */}
          <div className="absolute top-0 right-0 bg-[#A82025] text-[#FBF9F6] text-[9px] font-mono tracking-widest uppercase py-1 px-4 rotate-45 translate-x-3 translate-y-2 hidden sm:block">
            KARYA GIFT
          </div>

          {/* Steps Progress Indicator */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono border transition-all ${
                      step >= s
                        ? 'bg-[#121212] text-white border-[#121212]'
                        : 'bg-gray-100 text-gray-400 border-gray-200'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-[1px] ${step > s ? 'bg-[#121212]' : 'bg-gray-200'}`}></div>}
                </div>
              ))}
            </div>
          )}

          {/* STEP 1: TARGET SELECTION */}
          {step === 1 && (
            <div className="text-center py-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#121212] mb-6">
                Шаг 1: Для кого подбираем подарок?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <button
                  onClick={() => handleTargetSelect('her')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] p-6 transition-all text-center flex flex-col items-center gap-3 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#F5EFEB] group-hover:bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059]">
                    <Sparkles size={20} />
                  </div>
                  <span className="font-sans font-medium text-[#121212] text-sm">Для прекрасной дамы</span>
                  <span className="text-[10px] text-gray-500 font-mono">Супруге, маме, коллеге</span>
                </button>
                <button
                  onClick={() => handleTargetSelect('him')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] p-6 transition-all text-center flex flex-col items-center gap-3 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#F5EFEB] group-hover:bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059]">
                    <Gift size={20} />
                  </div>
                  <span className="font-sans font-medium text-[#121212] text-sm">Для джентльмена</span>
                  <span className="text-[10px] text-gray-500 font-mono">Мужу, отцу, другу</span>
                </button>
                <button
                  onClick={() => handleTargetSelect('boss')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] p-6 transition-all text-center flex flex-col items-center gap-3 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-[#F5EFEB] group-hover:bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059]">
                    <span className="font-mono text-sm font-bold">★</span>
                  </div>
                  <span className="font-sans font-medium text-[#121212] text-sm">Для руководителя</span>
                  <span className="text-[10px] text-gray-500 font-mono">Статусный VIP подарок</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BUDGET SELECTION */}
          {step === 2 && (
            <div className="text-center py-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#121212] mb-6">
                Шаг 2: В каком бюджете планируете подарок?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                <button
                  onClick={() => handleBudgetSelect('low')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  До 30 000 ₸
                </button>
                <button
                  onClick={() => handleBudgetSelect('mid')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  До 70 000 ₸
                </button>
                <button
                  onClick={() => handleBudgetSelect('high')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  Премиум (70 000+ ₸)
                </button>
              </div>
              <button
                onClick={() => setStep(1)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] mt-8 text-xs font-mono text-gray-400 hover:text-[#121212] flex items-center gap-1 mx-auto cursor-pointer"
              >
                <RotateCcw size={12} /> Вернуться на шаг назад
              </button>
            </div>
          )}

          {/* STEP 3: STYLE SELECTION */}
          {step === 3 && (
            <div className="text-center py-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#121212] mb-6">
                Шаг 3: Какой стиль предпочитает человек?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
                <button
                  onClick={() => handleStyleSelect('classic')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  Строгая классика
                </button>
                <button
                  onClick={() => handleStyleSelect('casual')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  Повседневный кэжуал
                </button>
                <button
                  onClick={() => handleStyleSelect('premium')}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] border border-[#F5EFEB] hover:border-[#C5A059] hover:bg-[#FBF9F6] py-5 px-4 transition-all text-center font-sans text-sm font-medium text-[#121212] cursor-pointer"
                >
                  Эксклюзивный люкс
                </button>
              </div>
              <button
                onClick={() => setStep(2)}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] mt-8 text-xs font-mono text-gray-400 hover:text-[#121212] flex items-center gap-1 mx-auto cursor-pointer"
              >
                <RotateCcw size={12} /> Вернуться на шаг назад
              </button>
            </div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && resultSet && (
            <div className="py-2">
              <div className="flex items-center gap-2 text-emerald-600 mb-4 justify-center sm:justify-start">
                <CheckCircle size={18} />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Идеальный подарок подобран!
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Result Image */}
                <div className="md:col-span-5 relative border border-gray-100 p-1.5 bg-white">
                  <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={resultSet.image}
                      alt={resultSet.name}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Result Info */}
                <div className="md:col-span-7 text-left">
                  <h4 className="font-serif text-xl sm:text-2xl text-[#121212] mb-2">
                    {resultSet.name}
                  </h4>
                  
                  {/* Prices */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg sm:text-xl font-mono font-bold text-[#A82025]">
                      {formatPrice(resultSet.price)}
                    </span>
                    <span className="text-xs font-mono text-gray-400 line-through">
                      {formatPrice(resultSet.originalPrice)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    {resultSet.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">Состав сета:</p>
                    <ul className="text-xs text-gray-700 space-y-1 pl-4 list-disc">
                      {resultSet.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-[#FBF9F6] border-l-2 border-[#C5A059] mb-6">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-semibold">Упаковка:</p>
                    <p className="text-xs text-gray-600 mt-0.5">{resultSet.packaging}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleOrderSet}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] bg-[#A82025] hover:bg-[#121212] text-white py-3 px-6 text-xs font-mono tracking-wider transition-colors duration-300 rounded-none uppercase flex-1"
                    >
                      Заказать готовый сет
                    </button>
                    <button
                      onClick={handleWhatsAppConsult}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] bg-transparent border border-gray-300 hover:border-[#25D366] text-gray-600 hover:text-[#25D366] py-3 px-6 text-xs font-mono tracking-wider transition-colors duration-300 rounded-none uppercase flex items-center justify-center gap-1.5"
                    >
                      <Smartphone size={14} /> Консультация
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-center sm:justify-start">
                <button
                  onClick={startQuiz}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5EFEB] text-xs font-mono text-gray-400 hover:text-[#121212] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={12} /> Начать подбор заново
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
