const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden noise-bg">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/0a34777b-fe9b-40a9-afb5-e21c6fb5dd15/files/8730e36d-3715-445d-9ce2-f2dc5480d083.jpg)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(10,10,8,1) 0%, rgba(10,10,8,0.75) 40%, rgba(10,10,8,0.3) 100%)',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="max-w-3xl">
          <p className="font-mono text-grunge-rust-light text-xs tracking-[0.4em] uppercase mb-4 opacity-80">
            Санкт-Петербург · с 2018 года
          </p>

          <h1
            className="font-oswald uppercase leading-none mb-6"
            style={{
              fontSize: 'clamp(4rem, 14vw, 10rem)',
              letterSpacing: '-0.02em',
              textShadow: '4px 4px 0px rgba(139, 58, 26, 0.6), 8px 8px 20px rgba(0,0,0,0.8)',
              color: '#d4c9a8',
            }}
          >
            АНЕСТЕ<br />
            <span style={{ color: '#8b3a1a', WebkitTextStroke: '1px #c4521f' }}>ТИК</span>
          </h1>

          <p className="font-rubik text-grunge-cream-dark text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Грязный звук. Честные слова. Питерский гранж для тех, кто устал от пустоты.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll('#concerts')}
              className="grunge-btn text-base font-bold"
            >
              Купить билеты
            </button>
            <button
              onClick={() => handleScroll('#about')}
              className="grunge-btn-outline text-base"
            >
              О группе
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 font-mono text-grunge-ash text-xs tracking-widest rotate-90 origin-bottom-right opacity-60">
          ANESTHETIC · SINCE 2018
        </div>
      </div>
    </section>
  );
};

export default Hero;
