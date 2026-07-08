import { useState } from 'react';
import { PRODUCTS, Product } from '../data';
import { Eye, Smartphone, Check, Sparkles, AlertCircle } from 'lucide-react';

interface CatalogProps {
  onOrderClick: (product: Product) => void;
  onWhatsAppClick: (text: string) => void;
}

export default function Catalog({ onOrderClick, onWhatsAppClick }: CatalogProps) {
  const [selectedGender, setSelectedGender] = useState<'for_her' | 'for_him'>('for_her');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filterTypes = [
    { label: 'Все изделия', value: 'all' },
    { label: 'Сумки', value: 'bag' },
    { label: 'Кошельки', value: 'wallet' },
    { label: 'Ремни', value: 'belt' },
    { label: 'Картхолдеры & Аксессуары', value: 'accessory' },
  ];

  // Filter products based on active tab and type
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesGender = p.category === selectedGender;
    const matchesType = selectedType === 'all' || p.type === selectedType;
    return matchesGender && matchesType;
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₸';
  };

  const handleVideoRequest = (product: Product) => {
    const text = `Здравствуйте! Я нахожусь на сайте KARYA Атырау. Отправьте, пожалуйста, живое видео изделия с витрины: "${product.name}" (Артикул: ${product.code}).`;
    onWhatsAppClick(text);
  };

  return (
    <section id="catalog" className="py-16 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-2 font-medium">Фирменный бутик Атырау</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-4">
            Коллекции KARYA в наличии
          </h2>
          <div className="w-16 h-[2px] bg-[#A82025] mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 font-sans">
            Все изделия находятся в нашем магазине в Атырау. Вы можете заказать доставку прямо сейчас или приехать на примерку лично.
          </p>
        </div>

        {/* Gender Toggle Tabs */}
        <div className="flex justify-center mb-8 border-b border-[#F5EFEB]">
          <div className="flex gap-8">
            <button
              onClick={() => {
                setSelectedGender('for_her');
                setSelectedType('all');
              }}
              aria-pressed={selectedGender === 'for_her'}
              className={`pb-4 text-sm sm:text-base font-medium tracking-wider uppercase font-sans border-b-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 ${
                selectedGender === 'for_her'
                  ? 'border-[#A82025] text-[#A82025] font-semibold'
                  : 'border-transparent text-gray-400 hover:text-[#121212]'
              }`}
            >
              Коллекция «Для нее»
            </button>
            <button
              onClick={() => {
                setSelectedGender('for_him');
                setSelectedType('all');
              }}
              aria-pressed={selectedGender === 'for_him'}
              className={`pb-4 text-sm sm:text-base font-medium tracking-wider uppercase font-sans border-b-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 ${
                selectedGender === 'for_him'
                  ? 'border-[#A82025] text-[#A82025] font-semibold'
                  : 'border-transparent text-gray-400 hover:text-[#121212]'
              }`}
            >
              Коллекция «Для него»
            </button>
          </div>
        </div>

        {/* Type Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              aria-pressed={selectedType === type.value}
              className={`px-4 py-2 text-xs font-mono border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 ${
                selectedType === type.value
                  ? 'bg-[#121212] border-[#121212] text-white'
                  : 'bg-white border-[#F5EFEB] text-gray-600 hover:border-gray-400'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-[#F5EFEB] flex flex-col hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Product Badge */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  {product.isBestseller && (
                    <span className="bg-[#A82025] text-white text-[9px] font-mono tracking-widest uppercase px-2 py-1 flex items-center gap-1">
                      <Sparkles size={8} /> ХИТ
                    </span>
                  )}
                  <span className="bg-[#121212]/80 backdrop-blur-sm text-[#C5A059] text-[9px] font-mono tracking-widest uppercase px-2 py-1 flex items-center gap-1">
                    <Check size={8} /> В НАЛИЧИИ В АТЫРАУ
                  </span>
                </div>

                {/* Product Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay for actions on hover */}
                  <div className="absolute inset-0 bg-[#121212]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => onOrderClick(product)}
                      className="bg-white text-[#121212] hover:bg-[#A82025] hover:text-white p-3 shadow-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2"
                      title="Заказать в 1 клик"
                      aria-label="Быстрый просмотр и заказ"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleVideoRequest(product)}
                      className="bg-[#25D366] text-white hover:bg-[#128C7E] p-3 shadow-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2"
                      title="Запросить живое видео в WhatsApp"
                      aria-label="Запросить живое видео товара в WhatsApp"
                    >
                      <Smartphone size={18} />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Code / Article */}
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mb-1">
                    Артикул: {product.code}
                  </span>
                  
                  {/* Name */}
                  <h3 className="font-sans font-medium text-xs sm:text-sm text-[#121212] mb-2 line-clamp-2 h-10 group-hover:text-[#A82025] transition-colors">
                    {product.name}
                  </h3>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4 mt-auto">
                    <span className="text-base sm:text-lg font-mono font-semibold text-[#121212]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs font-mono text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Call to Actions (Standard mobile visible) */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#F5EFEB] mt-auto">
                    <button
                      onClick={() => onOrderClick(product)}
                      className="bg-[#121212] hover:bg-[#A82025] text-white py-2 text-[10px] font-mono tracking-wider transition-colors uppercase cursor-pointer"
                    >
                      Купить
                    </button>
                    <button
                      onClick={() => handleVideoRequest(product)}
                      className="bg-transparent border border-gray-300 hover:border-[#25D366] text-gray-600 hover:text-[#25D366] py-2 text-[10px] font-mono tracking-wider transition-colors uppercase flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Smartphone size={10} /> Видео
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white border border-[#F5EFEB] rounded-none max-w-lg mx-auto">
            <AlertCircle className="mx-auto text-gray-400 mb-3" size={32} />
            <p className="text-sm font-medium text-[#121212]">Временно нет в наличии</p>
            <p className="text-xs text-gray-500 mt-1">
              Попробуйте выбрать другую категорию или свяжитесь с менеджером в WhatsApp.
            </p>
          </div>
        )}

        {/* Kaspi note banner */}
        <div className="mt-12 bg-white border border-[#C5A059]/20 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#A82025] text-white font-mono font-bold text-xs px-3 py-1.5 rounded-sm">
              KASPI RED
            </span>
            <div>
              <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#121212]">
                Все товары доступны в рассрочку без переплаты до 12 месяцев!
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-500">
                Оформление через приложение Kaspi.kz при получении товара курьеру или в бутике.
              </p>
            </div>
          </div>
          <button
            onClick={() => onWhatsAppClick('Здравствуйте! Я хочу узнать подробнее об оплате через Kaspi Red и рассрочке в Атырау.')}
            className="bg-transparent border border-[#121212] hover:bg-[#121212] hover:text-white text-[#121212] px-5 py-2.5 text-xs font-mono tracking-wider transition-colors duration-300 whitespace-nowrap"
          >
            УСЛОВИЯ РАССРОЧКИ
          </button>
        </div>

      </div>
    </section>
  );
}
