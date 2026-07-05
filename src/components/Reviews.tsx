import { useState, FormEvent } from 'react';
import { REVIEWS, Review } from '../data';
import { Star, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('Атырау');
  const [rating, setRating] = useState<number>(5);
  const [text, setText] = useState('');
  const [productBought, setProductBought] = useState('Мужской кошелек KARYA');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Security: trim input to prevent empty or whitespace-only submissions
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    const trimmedDistrict = district.trim();

    if (!trimmedName || !trimmedText) return;

    const newReview: Review = {
      id: `rev-user-${Date.now()}`,
      name: trimmedName,
      city: trimmedDistrict ? `${trimmedDistrict}, Атырау` : 'Атырау',
      date: 'Сегодня',
      rating,
      text: trimmedText,
      productBought,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop' // default user avatar
    };

    setReviewsList([newReview, ...reviewsList]);
    setIsSubmitted(true);
    
    // Reset form fields
    setName('');
    setText('');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="reviews" className="py-16 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A059] font-mono text-xs uppercase tracking-widest mb-2 font-medium">Отзывы покупателей</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#121212] mb-3">
            Высокое доверие наших клиентов
          </h2>
          <div className="w-16 h-[2px] bg-[#A82025] mx-auto mb-4"></div>
          <p className="text-sm text-gray-500 font-sans">
            Мы гордимся тем, что сотни жителей Атырау выбирают KARYA для себя и в качестве ценного подарка близким. Ознакомьтесь с реальными отзывами покупателей нашего бутика.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reviews List */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-serif text-xl text-[#121212] mb-6 flex items-center gap-2 border-b border-[#F5EFEB] pb-3">
              <MessageSquare size={18} className="text-[#C5A059]" />
              Последние отзывы ({reviewsList.length})
            </h3>
            
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              {reviewsList.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-[#F5EFEB] p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#121212]">
                          {review.name}
                        </h4>
                        <p className="text-[10px] text-gray-400 font-mono">
                          {review.city} • {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < review.rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-3">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 bg-[#FBF9F6] px-2.5 py-1.5 inline-block">
                    <span className="text-[#C5A059] font-bold">✓</span> Куплено изделие: <span className="text-[#121212] font-semibold">{review.productBought}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submit Review Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#121212] text-white p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl">
              <h3 className="font-serif text-lg sm:text-xl font-normal text-white mb-2 text-left">
                Поделитесь вашим отзывом
              </h3>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed text-left mb-6">
                Ваше мнение очень важно для нас! Расскажите о качестве кожгалантереи KARYA и сервисе нашего магазина в Атырау.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Success message */}
                {isSubmitted && (
                  <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-200 p-3 flex items-center gap-2 mb-4 text-xs">
                    <CheckCircle size={16} className="shrink-0" />
                    <span>Благодарим за ваш отзыв! Он успешно добавлен в ленту отзывов.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Асель С."
                    className="w-full bg-white/5 border border-white/10 py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="district" className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Район проживания в Атырау / город
                  </label>
                  <input
                    id="district"
                    type="text"
                    maxLength={100}
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Например, мкр. Привокзальный"
                    className="w-full bg-white/5 border border-white/10 py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Какое изделие приобрели?
                  </label>
                  <select
                    value={productBought}
                    onChange={(e) => setProductBought(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans"
                  >
                    <option value="Сумка-тоут KARYA из зернистой кожи">Сумка-тоут KARYA (зернистая кожа)</option>
                    <option value="Кожаный кросс-боди KARYA Classic">Кожаный кросс-боди KARYA Classic</option>
                    <option value="Кошелек KARYA Luxury">Кошелек KARYA Luxury</option>
                    <option value="Деловой портфель KARYA Diplomat">Деловой портфель KARYA Diplomat</option>
                    <option value="Кожаный ремень KARYA">Кожаный ремень KARYA</option>
                    <option value="Подарочный Сет KARYA">Подарочный Сет KARYA</option>
                  </select>
                </div>

                {/* Stars Rating selection */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                    Ваша оценка *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                      >
                        <Star
                          size={24}
                          className={`${
                            star <= rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Текст отзыва *
                  </label>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Напишите, что вам понравилось больше всего (качество кожи, швы, работа застежек, скорость доставки курьера...)"
                    className="w-full bg-white/5 border border-white/10 py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#C5A059] font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A82025] hover:bg-white hover:text-[#121212] text-white py-3 px-4 text-xs font-mono tracking-wider uppercase transition-all duration-300 font-bold border-2 border-transparent hover:border-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  ОПУБЛИКОВАТЬ ОТЗЫВ
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
