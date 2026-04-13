import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  title: string;
  venue: string;
  date: string;
  price: number;
  quantity: number;
}

interface ConcertsProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const concerts = [
  {
    id: 1,
    date: '12 МАЯ',
    year: '2025',
    day: 'ВТ',
    title: 'АНЕСТЕТИК · ЖИВОЙ КОНЦЕРТ',
    venue: 'Клуб «Зал Ожидания»',
    city: 'Санкт-Петербург',
    address: 'наб. Обводного канала, 118',
    price: 800,
    tickets: 43,
    tag: 'СКОРО',
  },
  {
    id: 2,
    date: '31 МАЯ',
    year: '2025',
    day: 'СБ',
    title: 'АНЕСТЕТИК · ГРЯЗЬ И ВЕСНА',
    venue: 'Космонавт',
    city: 'Санкт-Петербург',
    address: 'Бронницкая ул., 24',
    price: 1200,
    tickets: 120,
    tag: null,
  },
  {
    id: 3,
    date: '14 ИЮНЯ',
    year: '2025',
    day: 'СБ',
    title: 'АНЕСТЕТИК · OPEN AIR',
    venue: 'Парк 300-летия',
    city: 'Санкт-Петербург',
    address: 'Приморский проспект, 72',
    price: 1500,
    tickets: 300,
    tag: 'НОВЫЙ',
  },
  {
    id: 4,
    date: '5 ИЮЛЯ',
    year: '2025',
    day: 'СБ',
    title: 'АНЕСТЕТИК · МОСКВА',
    venue: 'Клуб «16 тонн»',
    city: 'Москва',
    address: 'ул. Тверская-Ямская 1-я, 16',
    price: 1000,
    tickets: 80,
    tag: null,
  },
];

const Concerts = ({ onAddToCart }: ConcertsProps) => {
  return (
    <section id="concerts" className="py-24 bg-grunge-dark noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="section-title">Концерты</h2>
          <div className="mb-3 h-px flex-1 bg-grunge-rust opacity-30" />
        </div>

        <div className="space-y-2">
          {concerts.map((concert, i) => (
            <div
              key={concert.id}
              className="concert-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 min-w-[140px]">
                  <div className="text-center">
                    <div className="font-oswald text-2xl text-grunge-rust-light leading-none">
                      {concert.date}
                    </div>
                    <div className="font-mono text-grunge-ash text-xs mt-1">
                      {concert.day} · {concert.year}
                    </div>
                  </div>
                  {concert.tag && (
                    <span className="font-mono text-[10px] tracking-widest bg-grunge-rust text-white px-2 py-1">
                      {concert.tag}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-oswald text-lg md:text-xl text-grunge-cream tracking-wide mb-1">
                    {concert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-grunge-cream-dark">
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={13} />
                      {concert.venue}, {concert.city}
                    </span>
                    <span className="text-grunge-ash text-xs">{concert.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-8">
                  <div className="text-right">
                    <div className="font-oswald text-2xl text-grunge-cream">
                      {concert.price.toLocaleString()} ₽
                    </div>
                    <div className="font-mono text-grunge-ash text-xs">
                      осталось {concert.tickets} мест
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: concert.id,
                        title: concert.title,
                        venue: concert.venue,
                        date: concert.date,
                        price: concert.price,
                      })
                    }
                    className="grunge-btn text-sm whitespace-nowrap flex items-center gap-2"
                  >
                    <Icon name="Plus" size={16} />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
