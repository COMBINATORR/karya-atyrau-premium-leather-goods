import { useState } from 'react';
import { GUARANTEES } from '../data';
import { ShieldCheck, Award, Eye, ThumbsUp, Sparkles, Droplet } from 'lucide-react';

export default function GuaranteeTabs() {
  const [activeTab, setActiveTab] = useState<'how_to_test' | 'about_factory' | 'authenticity'>('how_to_test');

  const tabs = [
    { id: 'how_to_test', label: 'Как проверить кожу на натуральность', icon: Droplet },
    { id: 'about_factory', label: 'О фабрике KARYA в Стамбуле', icon: Award },
    { id: 'authenticity', label: '100% Защита от подделок', icon: ShieldCheck },
  ];

  return (
    <section id="guarantee" className="py-16 bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-2 font-medium">Бескомпромиссное качество</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-3">
            100% Натуральная кожа и оригинал
          </h2>
          <div className="w-16 h-[2px] bg-[#A82025] mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 font-sans">
            Мы дорожим репутацией и нашими клиентами в Атырау. Узнайте, почему фирменные кожаные изделия KARYA считаются эталоном долговечности и статуса.
          </p>
        </div>

        {/* Dynamic Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Side: Images of crafting (similar to reference "Handmade in Spain") */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#C5A059]/30 p-2 bg-white shadow-xl">
              <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=600&auto=format&fit=crop"
                  alt="Мастерская Karya по обработке кожи"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white text-left">
                <p className="font-mono text-[9px] text-[#C5A059] uppercase tracking-widest font-bold mb-1">ФАБРИЧНЫЕ СТАНДАРТЫ</p>
                <h4 className="font-serif text-sm text-[#121212] font-semibold mb-2">Ручной контроль на каждом этапе</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans">
                  От раскроя цельных шкур до финальной полировки металлической фурнитуры. Каждое изделие проходит ручную проверку технологом ОТК перед упаковкой.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Tabs */}
          <div className="lg:col-span-7 bg-white border border-[#F5EFEB] p-6 sm:p-8 shadow-md">
            
            {/* Tab Headers */}
            <div className="flex flex-col sm:flex-row gap-2 border-b border-[#F5EFEB] pb-4 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center justify-center sm:justify-start gap-2 py-3 px-4 text-xs font-mono tracking-wider uppercase transition-all border cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#121212] border-[#121212] text-white font-semibold'
                        : 'bg-transparent border-[#F5EFEB] text-gray-500 hover:text-[#121212] hover:border-gray-300'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Body */}
            <div className="text-left font-sans min-h-[220px]">
              {activeTab === 'how_to_test' && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-[#121212] font-medium mb-2">
                    3 простых способа проверить кожу KARYA на натуральность:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="w-5 h-5 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] text-xs font-mono font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#121212] block">Тактильный тест (Тепло руки)</strong>
                        <p className="text-xs text-gray-500 mt-1">Приложите ладонь к изделию KARYA на 10-15 секунд. Натуральная кожа быстро нагреется и останется сухой. Искусственный заменитель останется холодным и может слегка увлажниться.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] text-xs font-mono font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#121212] block">Тест каплей воды (Абсорбция)</strong>
                        <p className="text-xs text-gray-500 mt-1">Капните маленькую каплю чистой воды на незаметный участок кожи. Наша натуральная кожа слегка впитает влагу в течение 1-2 минут и слегка потемнеет (после высыхания вернет цвет). На эко-коже капля просто скатится.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-5 h-5 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] text-xs font-mono font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#121212] block">Исследование срезов и структуры</strong>
                        <p className="text-xs text-gray-500 mt-1">Мы не скрываем изнанку. В наших кошельках и ремнях на срезах видна ворсистая структура натуральной мездры. Поры кожи KARYA расположены хаотично и создают неповторимый благородный рисунок.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'about_factory' && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-[#121212] font-medium mb-2">
                    KARYA — Турецкий бренд с мировым именем
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Кожгалантерейная фабрика <strong className="text-[#121212] font-semibold">KARYA</strong> была основана в Стамбуле в 1980 году. За более чем 45 лет упорной работы маленькое ателье превратилось в ультрасовременное предприятие, экспортирующее продукцию в 30+ стран мира, включая Францию, Италию, Германию и СНГ.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Вся продукция KARYA изготавливается на высокоточном европейском оборудовании по итальянским технологиям. Фабрика закупает только лучшее сырье на кожевенных заводах Тосканы и Стамбула, гарантируя долговечность каждого кошелька, сумки и ремня.
                  </p>
                  <div className="p-3 bg-[#FBF9F6] border border-dashed border-[#C5A059]/30 flex items-center gap-3">
                    <ThumbsUp size={16} className="text-[#C5A059] shrink-0" />
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      Высокое признание: Продукция Karya ежегодно подтверждает соответствие международным стандартам качества ISO 9001.
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'authenticity' && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-[#121212] font-medium mb-2">
                    Как мы гарантируем подлинность продукции KARYA:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    На рынке кожгалантереи Казахстана часто встречаются дешевые подделки и реплики низкого качества. Бутик KARYA Атырау является авторизованным дилером. Мы гарантируем защиту от контрафакта:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-600 pl-4 list-disc">
                    <li>Каждое изделие поставляется в фирменной коробке с тиснением логотипа KARYA и завернуто в мягкий пыльник.</li>
                    <li>Внутри каждого кошелька или сумки находится оригинальный бумажный паспорт изделия и пластиковый ярлык с штрих-кодом и артикулом фабрики.</li>
                    <li>Вся внутренняя подкладка брендирована шелковым жаккардом с микротекстом «KARYA».</li>
                    <li>Бегунки молний, металлические кнопки, замки и кольца ремней снабжены глубокой гравировкой логотипа бренда.</li>
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 4 Guarantees grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g, idx) => (
            <div key={idx} className="bg-white border border-[#F5EFEB] p-5 text-left hover:shadow-md transition-shadow">
              <span className="text-[#C5A059] text-xs font-mono font-bold block mb-2 uppercase tracking-widest">
                Гарантия {idx + 1}
              </span>
              <h4 className="font-sans font-semibold text-sm text-[#121212] mb-2 uppercase tracking-wide">
                {g.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
