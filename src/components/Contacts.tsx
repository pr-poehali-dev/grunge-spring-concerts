import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-grunge-dark noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-16">
          <h2 className="section-title">Контакты</h2>
          <div className="mb-3 h-px flex-1 bg-grunge-rust opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="concert-card">
            <div className="mb-4 text-grunge-rust">
              <Icon name="Mail" size={28} />
            </div>
            <h3 className="font-oswald text-xl text-grunge-cream tracking-wide mb-2">
              По вопросам гастролей
            </h3>
            <p className="font-mono text-grunge-ash text-sm mb-4">
              Буккинг и организация концертов
            </p>
            <a
              href="mailto:booking@anesthetic.band"
              className="font-mono text-grunge-rust-light text-sm hover:text-grunge-cream transition-colors duration-200"
            >
              booking@anesthetic.band
            </a>
          </div>

          <div className="concert-card">
            <div className="mb-4 text-grunge-rust">
              <Icon name="Phone" size={28} />
            </div>
            <h3 className="font-oswald text-xl text-grunge-cream tracking-wide mb-2">
              Пресс-служба
            </h3>
            <p className="font-mono text-grunge-ash text-sm mb-4">
              Интервью, публикации, коллаборации
            </p>
            <a
              href="tel:+79211234567"
              className="font-mono text-grunge-rust-light text-sm hover:text-grunge-cream transition-colors duration-200"
            >
              +7 (921) 123-45-67
            </a>
          </div>

          <div className="concert-card">
            <div className="mb-4 text-grunge-rust">
              <Icon name="MessageCircle" size={28} />
            </div>
            <h3 className="font-oswald text-xl text-grunge-cream tracking-wide mb-2">
              Мы в соцсетях
            </h3>
            <p className="font-mono text-grunge-ash text-sm mb-4">
              Новости, видео, анонсы
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="font-mono text-grunge-rust-light text-sm hover:text-grunge-cream transition-colors duration-200 flex items-center gap-1"
              >
                <Icon name="Send" size={14} />
                Telegram
              </a>
              <a
                href="#"
                className="font-mono text-grunge-rust-light text-sm hover:text-grunge-cream transition-colors duration-200"
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-grunge-ash flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-2xl tracking-[0.3em] uppercase text-grunge-cream opacity-40">
            АНЕСТЕТИК
          </div>
          <div className="font-mono text-grunge-ash text-xs tracking-widest text-center">
            © 2018–2025 · Санкт-Петербург · Все права защищены
          </div>
          <div className="font-mono text-grunge-ash text-xs opacity-40">
            ANESTHETIC BAND
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
