const members = [
  { name: 'Алексей "Лёха" Ермолов', role: 'Вокал / Гитара', since: '2018' },
  { name: 'Денис Краев', role: 'Гитара', since: '2018' },
  { name: 'Мария Серых', role: 'Бас-гитара', since: '2019' },
  { name: 'Олег Путин', role: 'Барабаны', since: '2020' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-grunge-mud noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-end gap-6 mb-10">
              <h2 className="section-title">О группе</h2>
            </div>

            <div className="space-y-5 text-grunge-cream-dark text-base leading-relaxed font-rubik">
              <p>
                <span className="text-grunge-rust-light font-oswald text-lg">Анестетик</span> — питерская группа, рождённая в подвальных репетиционных
                точках Лиговского. Название выбрано без иронии: музыка как способ притупить
                боль от происходящего.
              </p>
              <p>
                С 2018 года группа играет грязный, плотный гранж с влиянием Nirvana,
                Soundgarden и раннего «Короля и Шута». Русские тексты о городе,
                усталости и той особой петербургской тоске, которую не лечат, а принимают.
              </p>
              <p>
                Три студийных альбома, сотни концертов по клубам Петербурга и Москвы,
                постоянно растущая аудитория людей, которым не нужно объяснять зачем.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: '7', label: 'лет на сцене' },
                { num: '3', label: 'студийных альбома' },
                { num: '200+', label: 'концертов' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-oswald text-4xl text-grunge-rust-light">{stat.num}</div>
                  <div className="font-mono text-grunge-ash text-xs mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-grunge-cream mb-1">
                Состав
              </h3>
              <div className="h-px bg-grunge-rust w-16 opacity-60" />
            </div>

            <div className="space-y-0">
              {members.map((member, i) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between py-5 border-b border-grunge-ash group hover:border-grunge-rust transition-colors duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div>
                    <div className="font-oswald text-lg text-grunge-cream group-hover:text-grunge-rust-light transition-colors duration-300">
                      {member.name}
                    </div>
                    <div className="font-mono text-grunge-ash text-xs tracking-wide mt-0.5">
                      {member.role}
                    </div>
                  </div>
                  <div className="font-mono text-grunge-ash text-xs opacity-50">
                    с {member.since}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-6 relative overflow-hidden"
              style={{
                background: 'rgba(139, 58, 26, 0.08)',
                border: '1px solid rgba(139, 58, 26, 0.25)',
              }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full bg-grunge-rust"
                style={{ opacity: 0.7 }}
              />
              <p className="font-oswald text-xl text-grunge-cream italic pl-4 leading-snug">
                "Мы не придумываем музыку. Мы вытаскиваем её из стен этого города."
              </p>
              <p className="font-mono text-grunge-ash text-xs mt-3 pl-4 tracking-widest">
                — ЛЁХА ЕРМОЛОВ, ВОКАЛИСТ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
