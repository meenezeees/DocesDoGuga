import React, { useState } from 'react';
import { ZoomIn, X, Camera, Sparkles, Heart } from 'lucide-react';
import { GALLERY_ITEMS, BRAND } from '../data/products';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

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
            Nada de imagens genéricas da internet: aqui você vê as fotos autênticas dos doces preparados com amor pela equipe <strong className="font-semibold text-cocoa-800">Doces do Guga</strong>.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
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
                    <span>Clique para ampliar e ver detalhes</span>
                  </p>
                </div>
              </div>

              {/* Bottom bar visible on mobile without hover */}
              <div className="p-4 bg-cream-50 sm:hidden border-t border-cocoa-100">
                <h4 className="font-bold text-sm text-cocoa-900">{item.title}</h4>
                <p className="text-xs text-cocoa-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

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
          className="fixed inset-0 z-50 bg-cocoa-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-cocoa-900 rounded-3xl overflow-hidden border border-cocoa-700 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black/40 overflow-hidden">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-6 text-center w-full bg-cocoa-900 border-t border-cocoa-800">
              <span className="text-xs font-semibold text-caramel-300 uppercase tracking-wider block mb-1">
                {activeImage.category} • Foto Real
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
