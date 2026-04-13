import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  title: string;
  venue: string;
  date: string;
  price: number;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onChangeQty: (id: number, delta: number) => void;
}

const Cart = ({ isOpen, onClose, items, onRemove, onChangeQty }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="w-full max-w-md bg-grunge-dark border-l border-grunge-ash flex flex-col"
        style={{ animation: 'slideIn 0.3s ease-out' }}
      >
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}</style>

        <div className="flex items-center justify-between px-6 py-5 border-b border-grunge-ash">
          <h2 className="font-oswald text-2xl uppercase tracking-widest text-grunge-cream">
            Корзина
          </h2>
          <button
            onClick={onClose}
            className="text-grunge-ash hover:text-grunge-cream transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <Icon name="ShoppingCart" size={48} className="text-grunge-ash opacity-40" />
              <p className="font-oswald text-xl text-grunge-ash tracking-wide">
                Корзина пуста
              </p>
              <p className="font-mono text-grunge-ash text-xs opacity-60">
                Добавьте билеты на концерты
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-grunge-mud border border-grunge-ash"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-oswald text-grunge-cream text-sm tracking-wide leading-tight">
                        {item.title}
                      </div>
                      <div className="font-mono text-grunge-ash text-xs mt-1">
                        {item.date} · {item.venue}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-grunge-ash hover:text-grunge-rust transition-colors ml-2"
                    >
                      <Icon name="Trash2" size={15} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onChangeQty(item.id, -1)}
                        className="w-7 h-7 border border-grunge-ash text-grunge-cream-dark hover:border-grunge-rust hover:text-grunge-cream transition-all flex items-center justify-center"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="font-mono text-grunge-cream w-4 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onChangeQty(item.id, 1)}
                        className="w-7 h-7 border border-grunge-ash text-grunge-cream-dark hover:border-grunge-rust hover:text-grunge-cream transition-all flex items-center justify-center"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                    <div className="font-oswald text-lg text-grunge-cream">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-grunge-ash space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-oswald text-xl text-grunge-cream-dark uppercase tracking-wide">
                Итого
              </span>
              <span className="font-oswald text-3xl text-grunge-cream">
                {total.toLocaleString()} ₽
              </span>
            </div>

            <button className="grunge-btn w-full text-base font-bold py-4 flex items-center justify-center gap-2">
              <Icon name="CreditCard" size={18} />
              Оформить заказ
            </button>

            <p className="font-mono text-grunge-ash text-xs text-center opacity-60">
              Билеты придут на вашу почту после оплаты
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
