import { useState, FormEvent } from 'react';
import { REVIEWS, Review } from '../data';
import { Star, CheckCircle, Send } from 'lucide-react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [productBought, setProductBought] = useState('Сумка-тоут KARYA');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim().slice(0, 50);
    const trimmedText = text.trim().slice(0, 1000);
    const trimmedDistrict = district.trim().slice(0, 100);
    if (!trimmedName || !trimmedText) return;
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: trimmedName,
      city: trimmedDistrict ? `${trimmedDistrict}, Атырау` : 'Атырау',
      date: 'Только что',
      rating,
      text: trimmedText,
      productBought,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    };
    setReviewsList([newReview, ...reviewsList]);
    setIsSubmitted(true);
    setName(''); setText(''); setDistrict(''); setRating(5);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="block mb-4 text-[#A16207]"
            style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}
          >
            Отзывы покупателей
          </span>
          <h2
            className="text-[#0C0A09] mb-5"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Нам доверяют в Атырау
          </h2>
          <span className="gold-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Reviews list */}
          <div className="lg:col-span-7 space-y-4">
            {reviewsList.map((review, i) => (
              <article
                key={review.id}
                className="bg-white p-6 border-l-2 border-[#A16207]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full overflow-hidden bg-[#E8E4DC] shrink-0 border border-[#E8E4DC]"
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p
                        className="text-[#0C0A09]"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500 }}
                      >
                        {review.name}
                      </p>
                      <p
                        className="text-[#78716C]"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em' }}
                      >
                        {review.city} · {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className={i < review.rating ? 'fill-[#A16207] text-[#A16207]' : 'text-[#E8E4DC]'}
                      />
                    ))}
                  </div>
                </div>

                <p
                  className="text-[#44403C] mb-4"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.7 }}
                >
                  {review.text}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-[#78716C] bg-[#F5F1EB] px-3 py-1.5"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  <CheckCircle size={10} className="text-[#A16207]" />
                  {review.productBought}
                </span>
              </article>
            ))}
          </div>

          {/* Review form */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C0A09] p-8 sticky top-24">
              <h3
                className="text-white mb-2"
                style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 300 }}
              >
                Оставить отзыв
              </h3>
              <p
                className="text-stone-500 mb-8"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.6 }}
              >
                Ваш опыт поможет другим покупателям.
              </p>

              {isSubmitted && (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 mb-6">
                  <CheckCircle size={14} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>
                    Отзыв опубликован. Спасибо!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {[
                  { id: 'review-name', label: 'Ваше имя', value: name, setter: setName, placeholder: 'Асель С.', required: true, type: 'text', maxLength: 50 },
                  { id: 'review-district', label: 'Район / город', value: district, setter: setDistrict, placeholder: 'мкр. Авангард', required: false, type: 'text', maxLength: 100 },
                ].map(({ id, label, value, setter, placeholder, required, type, maxLength }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-stone-500 mb-1.5"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                    >
                      {label}{required && ' *'}
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={value}
                      required={required}
                      maxLength={maxLength}
                      placeholder={placeholder}
                      onChange={(e) => setter(e.target.value.slice(0, maxLength))}
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-stone-600 py-3 px-4 focus:outline-none focus:border-[#A16207] focus-visible:ring-2 focus-visible:ring-[#A16207] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="review-product"
                    className="block text-stone-500 mb-1.5"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    Изделие
                  </label>
                  <select
                    id="review-product"
                    value={productBought}
                    onChange={(e) => setProductBought(e.target.value)}
                    className="w-full bg-[#0C0A09] border border-white/10 text-white py-3 px-4 focus:outline-none focus:border-[#A16207] transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                  >
                    {['Сумка-тоут KARYA', 'Кросс-боди KARYA Classic', 'Кошелек KARYA Luxury', 'Портфель KARYA Diplomat', 'Ремень KARYA', 'Подарочный Сет KARYA'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Star rating */}
                <div>
                  <span
                    id="rating-label"
                    className="block text-stone-500 mb-2"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                  >
                    Оценка *
                  </span>
                  <div className="flex gap-2" role="radiogroup" aria-labelledby="rating-label">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        role="radio"
                        aria-checked={star === rating}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A16207] rounded-sm"
                        aria-label={`Оценка ${star} из 5`}
                      >
                        <Star
                          size={22}
                          className={`transition-colors ${
                            star <= (hoveredStar || rating)
                              ? 'fill-[#A16207] text-[#A16207]'
                              : 'text-stone-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <label
                      htmlFor="review-text"
                      className="block text-stone-500"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                    >
                      Текст отзыва *
                    </label>
                    <span
                      id="review-text-char-count"
                      aria-live="polite"
                      className={text.length >= 950 ? 'text-red-400' : 'text-stone-600'}
                      style={{ fontFamily: 'var(--font-mono)', fontSize: 9 }}
                    >
                      {text.length} / 1000
                    </span>
                  </div>
                  <textarea
                    id="review-text"
                    required
                    rows={4}
                    maxLength={1000}
                    value={text}
                    onChange={(e) => setText(e.target.value.slice(0, 1000))}
                    aria-describedby="review-text-char-count"
                    placeholder="Расскажите о качестве изделия, сервисе, доставке..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-stone-600 py-3 px-4 focus:outline-none focus:border-[#A16207] focus-visible:ring-2 focus-visible:ring-[#A16207] transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 13 }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#A16207] hover:bg-[#C89B2E] text-white py-3.5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  <Send size={13} />
                  Опубликовать
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
