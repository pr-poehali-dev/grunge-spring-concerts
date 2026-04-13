import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Concerts from '@/components/Concerts';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Cart from '@/components/Cart';

interface CartItem {
  id: number;
  title: string;
  venue: string;
  date: string;
  price: number;
  quantity: number;
}

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const changeQty = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-grunge-black">
      <Navbar cartCount={totalCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Concerts onAddToCart={addToCart} />
      <Gallery />
      <About />
      <Contacts />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onChangeQty={changeQty}
      />
    </div>
  );
};

export default Index;
