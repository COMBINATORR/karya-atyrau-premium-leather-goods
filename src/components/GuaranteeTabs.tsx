import { useState } from 'react';
import { GUARANTEES } from '../data';
import { ShieldCheck, Award, Droplets } from 'lucide-react';

const tabs = [
  { id: 'how_to_test', label: 'Как проверить натуральность', icon: Droplets },
  { id: 'about_factory', label: 'О фабрике KARYA', icon: Award },
  { id: 'authenticity', label: 'Защита от подделок', icon: ShieldCheck },
] as const;

type TabId = typeof tabs[number]['id'];

export default function GuaranteeTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('how_to_test');

  return (
    <section id="guarantee" className="py-24 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="block mb-4 text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}
          >
            Качество без компромиссов
          </span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            100% Натуральная кожа
          </h2>
          <span className="block w-12 h-px bg-[#A16207] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">
          {/* Image */}
          <div className="lg:col-span-5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?q=80&w=800&auto=format&fit=crop"
              alt="Производство KARYA — ручной контроль качества"
              className="w-full h-full object-cover img-zoom"
              style={{ minHeight: 420 }}
              loading="lazy"
            />
          </div>

          {/* Tabs */}
          <div className="lg:col-span-7 bg-[#161310] border border-[#A16207]/15 p-8 lg:p-12">
            {/* Tab buttons */}
            <div className="flex flex-col sm:flex-row gap-1 mb-8 border-b border-white/10 pb-6">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-2.5 transition-all duration-200 cursor-pointer text-left focus:outline-none ${
                    activeTab === id
                      ? 'text-[#C89B2E] border-b-2 border-[#A16207]'
                      : 'text-stone-500 hover:text-stone-300'
                  }`}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  <Icon size={12} />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[260px]">
              {activeTab === 'how_to_test' && (
                <div className="space-y-6">
                  <h3
                    className="text-white mb-6"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
                  >
                    Три способа проверить натуральность
                  </h3>
                  {[
                    {
                      n: '01',
                      title: 'Тест теплом руки',
                      text: 'Натуральная кожа нагревается от прикосновения за 10–15 секунд и остаётся сухой. Искусственная — остаётся холодной.'
                    },
                    {
                      n: '02',
                      title: 'Капля воды',
                      text: 'Натуральная кожа слегка впитывает влагу и темнеет, затем высыхает без следов. Эко-кожа — отталкивает воду.'
                    },
                    {
                      n: '03',
                      title: 'Структура среза',
                      text: 'На срезе видна хаотичная ворсистая мездра. Поры расположены беспорядочно — признак подлинной кожи.'
                    },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-5">
                      <span
                        className="shrink-0 text-[#A16207]"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', paddingTop: 2 }}
                      >
                        {item.n}
                      </span>
                      <div>
                        <strong
                          className="text-white block mb-1"
                          style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500 }}
                        >
                          {item.title}
                        </strong>
                        <p
                          className="text-stone-400"
                          style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.65 }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'about_factory' && (
                <div className="space-y-5">
                  <h3
                    className="text-white"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
                  >
                    KARYA Istanbul — с 1980 года
                  </h3>
                  <p
                    className="text-stone-400"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                  >
                    За 45 лет маленькое стамбульское ателье превратилось в современную фабрику, экспортирующую продукцию в более чем 30 стран — включая Францию, Италию, Германию и СНГ.
                  </p>
                  <p
                    className="text-stone-400"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                  >
                    Сырьё — только с кожевенных заводов Тосканы и Стамбула. Производство — на европейском оборудовании по итальянским технологиям.
                  </p>
                  <div className="border-l-2 border-[#A16207] pl-5 py-2">
                    <p
                      className="text-[#C89B2E]"
                      style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', fontWeight: 300 }}
                    >
                      Соответствие стандартам ISO 9001, подтверждается ежегодно.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'authenticity' && (
                <div className="space-y-5">
                  <h3
                    className="text-white"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
                  >
                    Как мы гарантируем подлинность
                  </h3>
                  <p
                    className="text-stone-400"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.7 }}
                  >
                    Бутик KARYA Атырау — авторизованный дилер. На рынке Казахстана распространены реплики. Вот как отличить оригинал:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Фирменная коробка с тиснением логотипа и мягкий пыльник в комплекте',
                      'Бумажный паспорт изделия с заводским штрих-кодом и артикулом',
                      'Подкладка из шёлкового жаккарда с микротекстом KARYA',
                      'Глубокая гравировка логотипа на всей металлической фурнитуре',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-4 h-4 rounded-full border border-[#A16207] flex items-center justify-center mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A16207]" />
                        </span>
                        <span
                          className="text-stone-400"
                          style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.6 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Guarantees grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#A16207]/20">
          {GUARANTEES.map((g, idx) => (
            <div
              key={idx}
              className="bg-[#111009] p-8 hover:bg-[#1A1612] transition-colors duration-300"
            >
              <span
                className="block text-[#A16207] mb-4"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h4
                className="text-white mb-3"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 300 }}
              >
                {g.title}
              </h4>
              <p
                className="text-stone-500"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.7 }}
              >
                {g.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
