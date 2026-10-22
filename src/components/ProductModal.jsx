import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Check, Sparkles, MapPin, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { getWhatsAppLink } from '../data/products';

export default function ProductModal({ product, onClose }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const images = product?.images?.length ? product.images : (product ? [product.image] : []);

  useEffect(() => {
    setSelectedImageIdx(0);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        setSelectedImageIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        setSelectedImageIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, images.length, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cocoa-950/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-cocoa-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/95 text-cocoa-800 hover:bg-cocoa-100 transition-colors shadow-md"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Header Image & Gallery Switcher */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-cocoa-100">
              <img
                src={images[selectedImageIdx]}
                alt={`${product.name} - Foto ${selectedImageIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-cocoa-900 shadow flex items-center gap-1.5">
                <Images className="w-3.5 h-3.5 text-caramel-600" />
                <span>
                  {product.badge} {images.length > 1 ? `(${selectedImageIdx + 1}/${images.length})` : ''}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-cocoa-900/90 text-caramel-200 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {product.tag}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIdx((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-cocoa-900 shadow-md transition-transform hover:scale-105"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIdx((prev) => (prev + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white text-cocoa-900 shadow-md transition-transform hover:scale-105"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails row */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIdx === idx
                        ? 'border-caramel-600 ring-2 ring-caramel-300/60'
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                    aria-label={`Selecionar foto ${idx + 1}`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <h3 id="modal-product-title" className="font-serif text-2xl sm:text-3xl font-bold text-cocoa-900 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-cocoa-600 mt-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Flavors / Composition */}
          <div className="bg-cream-100/70 rounded-2xl p-4 border border-cocoa-100/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
              <span>Sabores & Opções Confirmadas</span>
            </h4>
            <ul className="space-y-2">
              {product.flavors.map((flavor, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-cocoa-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{flavor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cocoa-700 mb-2">
              Diferenciais deste Item
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cocoa-50 text-cocoa-800 rounded-full text-xs font-medium border border-cocoa-200/60"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Location note */}
          <div className="flex items-center gap-2 text-xs text-cocoa-600 pt-2 border-t border-cocoa-100">
            <MapPin className="w-3.5 h-3.5 text-caramel-600 shrink-0" />
            <span>Retirada no Cursino (Rua Eugênio Falk, 530) ou entrega em São Paulo combinada via WhatsApp.</span>
          </div>

          {/* Footer CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="block text-xs font-semibold text-cocoa-500 uppercase tracking-wide">
                Valor & Disponibilidade
              </span>
              <span className="text-base font-bold text-caramel-700">
                {product.priceText}
              </span>
            </div>

            <a
              href={getWhatsAppLink(product.orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedir ou Consultar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
