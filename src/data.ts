export interface Product {
  id: string;
  name: string;
  category: 'for_her' | 'for_him';
  type: 'bag' | 'wallet' | 'belt' | 'accessory';
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  image: string;
  isBestseller?: boolean;
  code: string;
}

export interface GiftSet {
  id: string;
  name: string;
  target: 'her' | 'him' | 'boss';
  style: 'classic' | 'casual' | 'premium';
  price: number;
  originalPrice: number;
  items: string[];
  packaging: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: number;
  text: string;
  productBought: string;
  avatar: string;
}

export const PRODUCTS: Product[] = [
  // For Her
  {
    id: 'her-1',
    name: 'Премиальная сумка-тоут KARYA из зернистой кожи',
    category: 'for_her',
    type: 'bag',
    price: 89000,
    originalPrice: 105000,
    description: 'Изысканная и вместительная сумка-тоут из мягкой зернистой телячьей кожи. Идеально держит форму, оснащена оригинальной фурнитурой с гальваническим золотым покрытием, защищающим от царапин.',
    features: ['100% натуральная итальянская кожа', 'Золотая фурнитура повышенной прочности', '3 внутренних отделения на молнии', 'Размеры: 32 х 24 х 14 см'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop',
    isBestseller: true,
    code: 'KY-8042-W'
  },
  {
    id: 'her-2',
    name: 'Элегантный кожаный кросс-боди KARYA Classic',
    category: 'for_her',
    type: 'bag',
    price: 58000,
    description: 'Вечерняя и повседневная сумочка на изящном плечевом ремешке с элементами цепочки. Изготовлена из натуральной кожи тончайшей выделки Nappa.',
    features: ['Натуральная кожа Nappa', 'Элегантная цепь-ремешок', 'Магнитный замок-клапан', 'Размеры: 22 х 15 х 7 см'],
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop',
    isBestseller: true,
    code: 'KY-4512-W'
  },
  {
    id: 'her-3',
    name: 'Женский кошелек KARYA Luxury на круговой молнии',
    category: 'for_her',
    type: 'wallet',
    price: 29500,
    originalPrice: 35000,
    description: 'Премиальное портмоне с защитой от бесконтактного считывания RFID-карт. Натуральная лаковая кожа с тиснением под рептилию.',
    features: ['Лаковая кожа премиум класса', 'RFID-защита от кражи данных', '12 слотов для карт, монетница на молнии', 'Размеры: 19 х 10 х 2.5 см'],
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
    code: 'KY-1075-W'
  },
  {
    id: 'her-4',
    name: 'Кожаная визитница-картхолдер KARYA Gold',
    category: 'for_her',
    type: 'accessory',
    price: 14500,
    description: 'Компактный и утонченный аксессуар для деловой леди. Помещается в любую миниатюрную сумочку или карман.',
    features: ['Натуральная матовая кожа', 'Металлический золотой логотип KARYA', '6 карманов для карт + центральный карман', 'Размеры: 10 х 7.5 см'],
    image: 'https://images.unsplash.com/photo-1598532187856-3c224032675d?q=80&w=600&auto=format&fit=crop',
    code: 'KY-3021-W'
  },

  // For Him
  {
    id: 'him-1',
    name: 'Мужской деловой портфель KARYA Diplomat',
    category: 'for_him',
    type: 'bag',
    price: 95000,
    originalPrice: 115000,
    description: 'Солидный классический портфель для документов формата А4 и ноутбука до 15.6 дюймов. Выполнен из плотной шорно-седельной кожи премиального качества.',
    features: ['Плотная премиальная кожа', 'Фирменный металлический замок с ключом', 'Плечевой кожаный ремень в комплекте', 'Размеры: 39 х 29 х 9 см'],
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=600&auto=format&fit=crop',
    isBestseller: true,
    code: 'KY-9024-M'
  },
  {
    id: 'him-2',
    name: 'Портмоне KARYA из кожи Saffiano',
    category: 'for_him',
    type: 'wallet',
    price: 32000,
    description: 'Классическое мужское портмоне двойного сложения (bifold). Кожа Saffiano устойчива к царапинам, влаге и истиранию.',
    features: ['Сверхпрочная кожа Saffiano', 'Отделение для купюр с перегородкой', '8 слотов для карт, прозрачное окно', 'Размеры: 11.5 х 9.5 см'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    isBestseller: true,
    code: 'KY-5012-M'
  },
  {
    id: 'him-3',
    name: 'Кожаный ремень KARYA с автоматической пряжкой',
    category: 'for_him',
    type: 'belt',
    price: 24000,
    originalPrice: 28000,
    description: 'Цельнокроеный брючный ремень из отборной чепрачной кожи. Надежная автоматическая пряжка из темного хрома с лаконичной вставкой.',
    features: ['100% цельная чепрачная кожа', 'Надежный автоматический механизм', 'Возможность легкого укорачивания', 'Ширина: 3.5 см, длина: до 130 см'],
    image: 'https://images.unsplash.com/photo-1624222247344-550fb8ecf78d?q=80&w=600&auto=format&fit=crop',
    code: 'KY-7721-M'
  },
  {
    id: 'him-4',
    name: 'Мужской зажим для купюр KARYA Slim',
    category: 'for_him',
    type: 'accessory',
    price: 19000,
    description: 'Тончайший зажим с мощной стальной пружиной для денег и наружными карманами для самых важных банковских карт.',
    features: ['Мягкая телячья кожа шевро', 'Стальная пружина высокой упругости', '6 наружных слотов для карт', 'Размеры: 11 х 8 х 0.8 см'],
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop',
    code: 'KY-2041-M'
  }
];

export const GIFT_SETS: GiftSet[] = [
  {
    id: 'gift-1',
    name: 'Сет «Для нее: Превосходство»',
    target: 'her',
    style: 'premium',
    price: 69000,
    originalPrice: 72500,
    items: ['Сумка кросс-боди KARYA Classic', 'Кожаная визитница-картхолдер KARYA Gold'],
    packaging: 'Деревянный премиум-бокс из сибирского кедра с гравировкой золотом, мягкий бархатный ложемент, шелковая лента, сургучная печать.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop',
    description: 'Безупречное сочетание элегантности и практичности. Такой подарок продемонстрирует высочайшее уважение и изысканный вкус дарителя.'
  },
  {
    id: 'gift-2',
    name: 'Сет «Для него: Статус»',
    target: 'him',
    style: 'classic',
    price: 52000,
    originalPrice: 56000,
    items: ['Портмоне KARYA Saffiano', 'Кожаный ремень KARYA с авто-пряжкой'],
    packaging: 'Фирменная матовая коробка глубокого графитового цвета, атласный шелковый ложемент, поздравительная дизайнерская открытка.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    description: 'Джентльменский набор первой необходимости. Идеально подходит для мужчины, который ценит строгость линий, надежность и качество в каждой детали.'
  },
  {
    id: 'gift-3',
    name: 'Сет «Для руководителя: Premium»',
    target: 'boss',
    style: 'premium',
    price: 139000,
    originalPrice: 146000,
    items: ['Деловой портфель KARYA Diplomat', 'Портмоне KARYA Saffiano', 'Зажим для купюр KARYA Slim'],
    packaging: 'Премиальный кофр ручной работы, обтянутый натуральной замшей, золоченое тиснение бренда KARYA, латунная фурнитура.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop',
    description: 'Эксклюзивный подарочный набор представительского класса. Идеальное решение для поздравления ключевого партнера по бизнесу или руководителя.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Айгерим К.',
    city: 'Атырау, мкр. Авангард',
    date: '14 июня 2026 г.',
    rating: 5,
    text: 'Купила сумку-тоут мужу на юбилей и себе кросс-боди. Качество кожи просто невероятное! По моей просьбе менеджер в WhatsApp отправил живое видео с витрины, помог определиться с цветом. Доставили до двери за 30 минут через Яндекс.Очень удобно, что есть Kaspi Red, оформила прямо на сайте за секунду. Настоящий оригинальный турецкий Karya!',
    productBought: 'Сумка-тоут KARYA и кросс-боди Classic',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    name: 'Руслан Т.',
    city: 'Атырау, ТРЦ Тамаша',
    date: '28 мая 2026 г.',
    rating: 5,
    text: 'Искал подарок директору на день рождения. Менеджеры Karya Атырау предложили Сет Premium с портфелем и кошельком в бархатной коробке. Все упаковано солидно, привезли вовремя прямо в ресторан. Директор был в восторге. Кожа пахнет дорого, швы идеальные. Спасибо за сервис и оперативность!',
    productBought: 'Сет «Для руководителя: Premium»',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    name: 'Динара С.',
    city: 'Атырау, мкр. Алмагуль',
    date: '3 мая 2026 г.',
    rating: 5,
    text: 'Самый лучший бутик кожгалантереи в Атырау. Покупаю уже третий кошелек Karya (себе и маме на подарки). Кожа износостойкая, лаковое покрытие не царапается и не блекнет уже больше года. Рассрочка на 12 месяцев через Kaspi - вообще сказка. Рекомендую всем ценителям качества.',
    productBought: 'Женский кошелек KARYA Luxury',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
  }
];

export const GUARANTEES = [
  {
    title: 'Оригинальный бренд KARYA',
    description: 'Мы являемся официальным авторизованным партнером турецкой фабрики KARYA в Атырау. Каждое изделие имеет оригинальное тиснение бренда, серийный номер и поставляется в фирменной упаковке.'
  },
  {
    title: '100% Натуральная кожа',
    description: 'Только высококачественное сырье: телячья кожа, наппа, сафьяно и замша. Никаких прессованных суррогатов или эко-кожи. Изделия дышат, приятно пахнут и служат десятилетиями.'
  },
  {
    title: 'Качество фабричных швов',
    description: 'Фабричное производство на высокотехнологичном европейском оборудовании. Немецкие вощеные нити Guetermann, идеально ровная строчка 5 стежков на сантиметр и долговечная обработка срезов.'
  },
  {
    title: 'Премиальная фурнитура',
    description: 'Молнии и карабины из высокопрочных сплавов латуни и стали с гальваническим покрытием. Фурнитура не тускнеет, сохраняет благородный блеск и работает исключительно плавно.'
  }
];
