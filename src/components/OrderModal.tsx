import { useState, FormEvent } from 'react';
import { Product } from '../data';
import { X, CheckCircle, Truck, CreditCard, ShoppingBag, Send } from 'lucide-react';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
  onWhatsAppClick: (text: string) => void;
}

export default function OrderModal({ product, onClose, onWhatsAppClick }: OrderModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'express' | 'pickup'>('express');
  const [paymentType, setPaymentType] = useState<'kaspi_red' | 'kaspi_qr' | 'cash'>('kaspi_red');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!product) return null;

  const handlePhoneInput = (val: string) => {
    // Basic formatting helper for KZ numbers (+7 7xx xxx xx xx)
    setPhone(val);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Security: trim input and validate phone format to prevent malformed/malicious input
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const phoneRegex = /^\+?[0-9\s\-\(\)]+$/;

    if (!trimmedName || !trimmedPhone || !phoneRegex.test(trimmedPhone)) {
      return;
    }

    // Trigger WhatsApp notification for the boutique backend
    const deliveryLabel = deliveryType === 'express' ? 'Экспресс-доставка курьером (1 час)' : 'Самовывоз из ТД Пассаж Насиха';
    const paymentLabel = 
      paymentType === 'kaspi_red' ? 'Kaspi Red / Рассрочка' : 
      paymentType === 'kaspi_qr' ? 'Kaspi QR' : 'Наличные при получении';

    const text = `Здравствуйте! Я оформил быстрый заказ на сайте KARYA Атырау.\n\n` +
                 `📦 Товар: ${product.name} (Артикул: ${product.code})\n` +
                 `💰 Цена: ${product.price.toLocaleString('ru-RU')} ₸\n` +
                 `👤 Клиент: ${trimmedName}\n` +
                 `📞 Телефон: ${trimmedPhone}\n` +
                 `🚚 Доставка: ${deliveryLabel}\n` +
                 `💳 Оплата: ${paymentLabel}\n\n` +
                 `Пожалуйста, отправьте мне живое видео изделия и подтвердите доставку.`;

    // Simulate database record save and show success view
    setIsSuccess(true);
    
    // Automatically trigger WhatsApp callback after a brief delay
    setTimeout(() => {
      onWhatsAppClick(text);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      {/* Modal Card */}
      <div className="bg-[#FBF9F6] border border-[#C5A059]/30 shadow-2xl w-full max-w-lg relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-[#121212] transition-colors cursor-pointer z-10 focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          aria-label="Закрыть модальное окно"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="bg-[#121212] text-white p-5 text-left flex items-center gap-3">
          <ShoppingBag className="text-[#C5A059] shrink-0" size={20} />
          <div>
            <h3 className="font-serif text-base uppercase tracking-widest text-[#C5A059] font-bold">
              Быстрый заказ в 1 клик
            </h3>
            <p className="text-[10px] text-gray-400 font-mono">ФИРМЕННЫЙ БУТИК KARYA АТЫРАУ</p>
          </div>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 mx-auto animate-pulse">
              <CheckCircle size={36} />
            </div>
            <h4 className="font-serif text-xl text-[#121212]">Ваш заказ успешно принят!</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-sm mx-auto">
              Уважаемый(ая) <strong className="text-[#121212]">{name}</strong>, мы уже получили вашу заявку. Сейчас вы будете перенаправлены в мессенджер WhatsApp для подтверждения заказа. Менеджер отправит вам живое видео изделия с витрины и скоординирует экспресс-доставку.
            </p>
            <div className="p-4 bg-white border border-gray-100 font-mono text-left text-xs max-w-sm mx-auto divide-y divide-gray-100">
              <div className="flex justify-between py-1.5">
                <span className="text-gray-400">Изделие:</span>
                <span className="text-gray-800 font-medium font-sans text-right">{product.name}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-400">Сумма заказа:</span>
                <span className="text-[#A82025] font-bold">{product.price.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-gray-400">Способ оплаты:</span>
                <span className="text-gray-800 font-sans">{paymentType === 'kaspi_red' ? 'Kaspi Red / Рассрочка' : 'Kaspi QR / Оплата'}</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-mono">Идет перенаправление в WhatsApp за 5 секунд...</p>
            <button
              onClick={onClose}
              className="bg-[#121212] hover:bg-[#A82025] text-white py-2.5 px-6 text-xs font-mono tracking-wider uppercase transition-colors rounded-none cursor-pointer"
            >
              Вернуться на сайт
            </button>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-6 text-left space-y-5">
            
            {/* Product Brief Summary */}
            <div className="flex items-center gap-4 bg-white p-3 border border-gray-100">
              <div className="w-16 h-16 bg-gray-50 overflow-hidden shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">
                  Артикул: {product.code}
                </span>
                <h4 className="font-sans font-medium text-xs sm:text-sm text-[#121212] line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-sm font-mono font-bold text-[#A82025] mt-1">
                  {product.price.toLocaleString('ru-RU')} ₸
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3.5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1 font-semibold">
                  Ваше имя *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={50}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например, Марат И."
                  className="w-full bg-white border border-gray-200 py-2.5 px-3 text-xs text-[#121212] focus:outline-none focus:border-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] font-sans"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1 font-semibold">
                  Номер телефона (WhatsApp) *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  value={phone}
                  onChange={(e) => handlePhoneInput(e.target.value)}
                  placeholder="+7 (701) 555-55-55"
                  className="w-full bg-white border border-gray-200 py-2.5 px-3 text-xs text-[#121212] focus:outline-none focus:border-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] font-mono"
                />
              </div>
            </div>

            {/* Delivery Toggle */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2 font-semibold flex items-center gap-1">
                <Truck size={12} className="text-[#C5A059]" /> Способ доставки:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('express')}
                  className={`py-3 text-center border text-[10px] sm:text-xs font-sans font-medium transition-all cursor-pointer ${
                    deliveryType === 'express'
                      ? 'bg-[#121212] text-white border-[#121212] font-semibold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Экспресс курьер (1 час)
                  <span className="block text-[8px] text-gray-400 font-mono mt-0.5">Бесплатно по Атырау</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-3 text-center border text-[10px] sm:text-xs font-sans font-medium transition-all cursor-pointer ${
                    deliveryType === 'pickup'
                      ? 'bg-[#121212] text-white border-[#121212] font-semibold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Заберу сам (Самовывоз)
                  <span className="block text-[8px] text-gray-400 font-mono mt-0.5">ТД Пассаж Насиха, 2 этаж</span>
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2 font-semibold flex items-center gap-1">
                <CreditCard size={12} className="text-[#C5A059]" /> Способ оплаты:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentType('kaspi_red')}
                  className={`py-3 text-center border text-[9px] sm:text-xs font-sans font-medium transition-all cursor-pointer ${
                    paymentType === 'kaspi_red'
                      ? 'bg-[#A82025] text-white border-[#A82025] font-bold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Kaspi Red
                  <span className="block text-[7px] text-gray-300 font-mono mt-0.5">Рассрочка 0-0-12</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('kaspi_qr')}
                  className={`py-3 text-center border text-[9px] sm:text-xs font-sans font-medium transition-all cursor-pointer ${
                    paymentType === 'kaspi_qr'
                      ? 'bg-[#121212] text-white border-[#121212] font-bold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Kaspi QR
                  <span className="block text-[7px] text-gray-400 font-mono mt-0.5">Быстрая оплата</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType('cash')}
                  className={`py-3 text-center border text-[9px] sm:text-xs font-sans font-medium transition-all cursor-pointer ${
                    paymentType === 'cash'
                      ? 'bg-[#121212] text-white border-[#121212] font-bold'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Наличными
                  <span className="block text-[7px] text-gray-400 font-mono mt-0.5">Курьеру / в кассе</span>
                </button>
              </div>
            </div>

            {/* Price Note (Installment display) */}
            {paymentType === 'kaspi_red' && (
              <div className="p-3 bg-[#A82025]/5 border border-dashed border-[#A82025]/20 text-center">
                <p className="text-[10px] text-gray-600 font-sans">
                  В рассрочку на 12 месяцев платеж составит всего:{' '}
                  <strong className="text-[#A82025] font-mono">
                    {Math.round(product.price / 12).toLocaleString('ru-RU')} ₸ / мес.
                  </strong>
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#121212] hover:bg-[#A82025] text-white py-4 text-xs font-mono tracking-wider uppercase transition-colors duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={14} /> Подтвердить заказ в WhatsApp
            </button>

            {/* Safety Disclaimer */}
            <p className="text-[9px] text-gray-400 text-center">
              * Мы не передаем ваши данные третьим лицам. Отправка формы абсолютно бесплатна и не обязывает к покупке до оценки живого видео товара.
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
