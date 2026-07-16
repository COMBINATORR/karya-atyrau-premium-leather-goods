import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data';
import { X, CheckCircle, Send } from 'lucide-react';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
  onWhatsAppClick: (text: string) => void;
}

export default function OrderModal({ product, onClose, onWhatsAppClick }: OrderModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [delivery, setDelivery] = useState<'express' | 'pickup'>('express');
  const [payment, setPayment] = useState<'kaspi_red' | 'kaspi_qr' | 'cash'>('kaspi_red');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!product) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 50);
    const trimmedPhone = phone.trim().slice(0, 20);
    if (!trimmedName || !trimmedPhone) return;
    const deliveryLabel = delivery === 'express' ? 'Экспресс-доставка (1 час)' : 'Самовывоз из ТД Пассаж Насиха';
    const paymentLabel = payment === 'kaspi_red' ? 'Kaspi Red / Рассрочка 0-0-12' : payment === 'kaspi_qr' ? 'Kaspi QR' : 'Наличные';
    const text = `Заказ с сайта KARYA Атырау\n\nТовар: ${product.name} (Арт. ${product.code})\nЦена: ${product.price.toLocaleString('ru-RU')} ₸\nКлиент: ${trimmedName}\nТелефон: ${trimmedPhone}\nДоставка: ${deliveryLabel}\nОплата: ${paymentLabel}\n\nПожалуйста, подтвердите заказ и пришлите видео изделия.`;
    setIsSuccess(true);
    setTimeout(() => onWhatsAppClick(text), 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(12,10,9,0.85)', backdropFilter: 'blur(6px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 0.68, 0, 1.1] }}
          className="bg-[#FAFAF9] w-full max-w-md relative shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Быстрый заказ"
        >
          {/* Header */}
          <div className="bg-[#0C0A09] px-6 py-5 flex items-center justify-between">
            <div>
              <span
                className="block text-[#A16207]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}
              >
                Быстрый заказ
              </span>
              <span
                className="text-white"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 300 }}
              >
                KARYA Atyrau Boutique
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-stone-500 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A16207] p-1"
              aria-label="Закрыть"
            >
              <X size={18} />
            </button>
          </div>

          {isSuccess ? (
            <div className="p-10 text-center">
              <div className="w-14 h-14 rounded-full border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={28} className="text-emerald-500" />
              </div>
              <h4
                className="text-[#0C0A09] mb-3"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
              >
                Заказ принят
              </h4>
              <p
                className="text-[#78716C] mb-6"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.65 }}
              >
                {name}, переадресуем вас в WhatsApp для подтверждения и получения видео изделия.
              </p>
              <button
                onClick={onClose}
                className="border border-[#0C0A09] text-[#0C0A09] hover:bg-[#0C0A09] hover:text-white px-6 py-2.5 transition-all duration-200 cursor-pointer focus:outline-none"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Вернуться на сайт
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-5" noValidate>

              {/* Product preview */}
              <div className="flex items-center gap-4 p-3 bg-white border border-[#E8E4DC]">
                <div className="w-14 h-14 overflow-hidden shrink-0 bg-[#E8E4DC]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <span
                    className="block text-[#78716C] mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    {product.code}
                  </span>
                  <p
                    className="text-[#0C0A09] truncate"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500 }}
                  >
                    {product.name}
                  </p>
                  <p
                    className="text-[#A16207]"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 500 }}
                  >
                    {product.price.toLocaleString('ru-RU')} ₸
                  </p>
                </div>
              </div>

              {/* Fields */}
              {[
                { id: 'order-name', label: 'Имя *', value: name, setter: setName, placeholder: 'Марат И.', type: 'text', required: true, maxLength: 50 },
                { id: 'order-phone', label: 'Телефон (WhatsApp) *', value: phone, setter: setPhone, placeholder: '+7 (701) 555-55-55', type: 'tel', required: true, maxLength: 20 },
              ].map(({ id, label, value, setter, placeholder, type, required, maxLength }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-[#78716C] mb-1.5"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required={required}
                    maxLength={maxLength}
                    value={value}
                    onChange={(e) => setter(e.target.value.slice(0, maxLength))}
                    placeholder={placeholder}
                    className="w-full border border-[#E8E4DC] bg-white text-[#0C0A09] placeholder-[#C4BEB8] py-3 px-4 focus:outline-none focus:border-[#A16207] focus-visible:ring-2 focus-visible:ring-[#A16207] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                  />
                </div>
              ))}

              {/* Delivery */}
              <div>
                <span
                  id="order-delivery-label"
                  className="block text-[#78716C] mb-2"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Доставка
                </span>
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-labelledby="order-delivery-label">
                  {[
                    { val: 'express' as const, title: 'Курьер (1 час)', sub: 'Бесплатно по Атырау' },
                    { val: 'pickup' as const, title: 'Самовывоз', sub: 'ТД Пассаж Насиха' },
                  ].map(({ val, title, sub }) => (
                    <button
                      key={val}
                      type="button"
                      role="radio"
                      aria-checked={delivery === val}
                      onClick={() => setDelivery(val)}
                      className={`py-3 px-3 text-left border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207] ${
                        delivery === val ? 'bg-[#0C0A09] border-[#0C0A09] text-white' : 'bg-white border-[#E8E4DC] hover:border-[#0C0A09]'
                      }`}
                    >
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, display: 'block' }}>{title}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.1em', display: 'block', opacity: 0.6 }}>{sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div>
                <span
                  id="order-payment-label"
                  className="block text-[#78716C] mb-2"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  Оплата
                </span>
                <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-labelledby="order-payment-label">
                  {[
                    { val: 'kaspi_red' as const, title: 'Kaspi Red', sub: '0–0–12' },
                    { val: 'kaspi_qr' as const, title: 'Kaspi QR', sub: 'Быстро' },
                    { val: 'cash' as const, title: 'Наличные', sub: 'При получении' },
                  ].map(({ val, title, sub }) => (
                    <button
                      key={val}
                      type="button"
                      role="radio"
                      aria-checked={payment === val}
                      onClick={() => setPayment(val)}
                      className={`py-3 px-2 text-center border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207] ${
                        payment === val ? 'bg-[#A16207] border-[#A16207] text-white' : 'bg-white border-[#E8E4DC] hover:border-[#A16207]'
                      }`}
                    >
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 500, display: 'block' }}>{title}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 7, letterSpacing: '0.08em', display: 'block', opacity: 0.7 }}>{sub}</span>
                    </button>
                  ))}
                </div>
                {payment === 'kaspi_red' && (
                  <p className="text-[#A16207] mt-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.08em' }}>
                    ≈ {Math.round(product.price / 12).toLocaleString('ru-RU')} ₸/мес. на 12 месяцев
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0C0A09] hover:bg-[#991B1E] text-white py-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                <Send size={13} />
                Подтвердить в WhatsApp
              </button>

              <p
                className="text-center text-[#78716C]"
                style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.08em' }}
              >
                Данные не передаются третьим лицам
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
