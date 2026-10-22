import React, { useState, useEffect } from 'react';
import { ZoomIn, X, Camera, Sparkles, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { GALLERY_ITEMS, BRAND } from '../data/products';

const GALLERY_CATEGORIES = [
  'Todas',
  'Festas & Centos',
  'Morangos',
  'Cones & Trufados',
  'Potes & Sobremesas',
  'Bolos & Fatias',
  'Brigadeiros'
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredItems = selectedCategory === 'Todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 9);
  const activeImage = activeIndex !== null ? filteredItems[activeIndex] : null;

  useEffect(() => {
    setActiveIndex(null);
  }, [selectedCategory]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, filteredItems.length]);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100/70 text-rose-900 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-rose-600" />
            <span>Galeria de Dar Água na Boca</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
            Veja de Perto Nossas Criações Reais
          </h2>

          <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed">
            Nada de imagens genéricas da internet: confira {GALLERY_ITEMS.length} fotografias autênticas dos doces preparados artesanalmente pela <strong className="font-semibold text-cocoa-800">Doces do Guga</strong>.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-caramel-600 text-white shadow-md scale-105'
                  : 'bg-cream-100 text-cocoa-700 hover:bg-cocoa-100 hover:text-cocoa-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-cocoa-100 shadow-warm hover:shadow-warm-hover cursor-pointer border border-cocoa-100 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/85 via-cocoa-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/25 backdrop-blur-md hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-cream-50 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cream-200 mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-[11px] text-caramel-300 font-semibold mt-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Clique para ampliar</span>
                  </p>
                </div>
              </div>

              {/* Bottom bar visible on mobile without hover */}
              <div className="p-4 bg-cream-50 sm:hidden border-t border-cocoa-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-caramel-700">{item.category}</span>
                <h4 className="font-bold text-sm text-cocoa-900 mt-0.5">{item.title}</h4>
                <p className="text-xs text-cocoa-500 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredItems.length > 9 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream-100 hover:bg-cocoa-900 text-cocoa-900 hover:text-white font-bold text-sm border border-cocoa-200 transition-all shadow-sm"
            >
              <span>
                {showAll
                  ? 'Mostrar menos fotos'
                  : `Ver todas as ${filteredItems.length} fotos reais`}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Instagram Invitation Banner under gallery */}
        <div className="mt-12 text-center">
          <p className="text-sm text-cocoa-600 mb-3">
            Quer conferir mais fotos e vídeos diários da nossa produção?
          </p>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-caramel-700 hover:text-caramel-800 underline underline-offset-4 decoration-caramel-400 hover:decoration-caramel-600 transition-all"
          >
            <span>Ver todas as publicações no Instagram @{BRAND.instagramUser}</span>
            <Sparkles className="w-4 h-4 text-caramel-600" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-cocoa-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % filteredItems.length);
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="max-w-4xl w-full bg-cocoa-900 rounded-3xl overflow-hidden border border-cocoa-700 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[72vh] w-full flex items-center justify-center bg-black/50 overflow-hidden">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-5 sm:p-6 text-center w-full bg-cocoa-900 border-t border-cocoa-800">
              <span className="text-xs font-semibold text-caramel-300 uppercase tracking-wider block mb-1">
                {activeImage.category} • Foto {activeIndex + 1} de {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="text-sm text-cocoa-200 mt-1 max-w-lg mx-auto">
                {activeImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
