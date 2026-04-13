import { useState } from 'react';
import Icon from '@/components/ui/icon';

const photos = [
  {
    id: 1,
    src: 'https://cdn.poehali.dev/projects/0a34777b-fe9b-40a9-afb5-e21c6fb5dd15/files/8730e36d-3715-445d-9ce2-f2dc5480d083.jpg',
    label: 'Концерт в Зале Ожидания, 2024',
    type: 'concert',
  },
  {
    id: 2,
    src: 'https://cdn.poehali.dev/projects/0a34777b-fe9b-40a9-afb5-e21c6fb5dd15/files/b6dd4851-d4e8-4eb4-ae57-c9cb8a490e1a.jpg',
    label: 'Репетиция в студии, 2023',
    type: 'studio',
  },
  {
    id: 3,
    src: 'https://cdn.poehali.dev/projects/0a34777b-fe9b-40a9-afb5-e21c6fb5dd15/files/7c43d0d5-6a8e-4be7-a671-09dfe6496695.jpg',
    label: 'Open Air, лето 2024',
    type: 'concert',
  },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'concert' | 'studio'>('all');

  const filtered = filter === 'all' ? photos : photos.filter((p) => p.type === filter);

  return (
    <section id="gallery" className="py-24 bg-grunge-black noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-10">
          <h2 className="section-title">Фото</h2>
          <div className="mb-3 h-px flex-1 bg-grunge-rust opacity-30" />
        </div>

        <div className="flex gap-4 mb-10">
          {(['all', 'concert', 'studio'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 ${
                filter === f
                  ? 'bg-grunge-rust text-grunge-cream'
                  : 'text-grunge-ash border border-grunge-ash hover:text-grunge-cream hover:border-grunge-cream-dark'
              }`}
            >
              {f === 'all' ? 'Все' : f === 'concert' ? 'Концерты' : 'Студия'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filtered.map((photo, i) => (
            <div
              key={photo.id}
              className="photo-card aspect-video md:aspect-square cursor-pointer"
              style={{ animationDelay: `${i * 0.15}s` }}
              onClick={() => setActive(photo.id)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-grunge-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-grunge-black to-transparent">
                <p className="font-mono text-xs text-grunge-cream-dark tracking-wide">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {active !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-grunge-cream-dark hover:text-grunge-cream"
              onClick={() => setActive(null)}
            >
              <Icon name="X" size={32} />
            </button>
            {photos.find((p) => p.id === active) && (
              <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={photos.find((p) => p.id === active)!.src}
                  alt=""
                  className="w-full max-h-[80vh] object-contain"
                />
                <p className="font-mono text-grunge-ash text-sm mt-3 text-center tracking-wide">
                  {photos.find((p) => p.id === active)!.label}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
