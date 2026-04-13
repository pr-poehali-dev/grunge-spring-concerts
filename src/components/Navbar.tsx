import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const Navbar = ({ cartCount, onCartOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'О группе', href: '#about' },
    { label: 'Концерты', href: '#concerts' },
    { label: 'Фото', href: '#gallery' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 8, 0.97)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(139, 58, 26, 0.3)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-oswald text-2xl tracking-[0.3em] uppercase text-grunge-cream hover:text-grunge-rust-light transition-colors duration-200"
        >
          АНЕСТЕТИК
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartOpen}
            className="relative grunge-btn-outline text-sm px-5 py-2 flex items-center gap-2"
          >
            <Icon name="ShoppingCart" size={16} />
            <span>Корзина</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-grunge-rust text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-grunge-cream"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-grunge-dark border-t border-grunge-ash px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link text-sm text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
