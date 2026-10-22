import React, { useState } from 'react';
import { MessageCircle, Eye, Sparkles, AlertCircle, Images } from 'lucide-react';
import { BRAND, PRODUCTS, getWhatsAppLink } from '../data/products';
import ProductModal from './ProductModal';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="cardapio" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-caramel-100/70 text-caramel-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
            <span>Cardápio Artesanal Selecionado</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
            Doces Feitos para Despertar Desejos
          </h2>

          <p className="text-base sm:text-lg text-cocoa-600 leading-relaxed">
            Conheça as especialidades reais da <strong className="font-semibold text-cocoa-800">Doces do Guga</strong>. Clique em qualquer item para ver mais fotos reais e os sabores disponíveis.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {BRAND.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cocoa-900 text-cream-50 shadow-md scale-105'
                  : 'bg-cream-100 text-cocoa-700 hover:bg-cocoa-100 hover:text-cocoa-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Transparency Banner */}
        <div className="mt-8 max-w-2xl mx-auto bg-cream-100/80 border border-caramel-200/80 rounded-2xl p-4 flex items-center gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-caramel-600 shrink-0" />
          <p className="text-xs sm:text-sm text-cocoa-700">
            <strong>Transparência nos Preços:</strong> Como trabalhamos com produção sob encomenda e quantidades personalizadas, consulte valores atualizados e taxa de entrega com rapidez pelo nosso WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const photoCount = product.images ? product.images.length : 1;
            return (
              <div
                key={product.id}
                className="bg-cream-50 rounded-3xl overflow-hidden border border-cocoa-100 shadow-warm hover:shadow-warm-hover transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative aspect-[4/3] overflow-hidden bg-cocoa-100 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Badge Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cocoa-900 shadow-sm">
                    {product.tag}
                  </div>

                  <div className="absolute top-3 right-3 bg-cocoa-900/90 text-caramel-200 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <Images className="w-3 h-3" />
                    <span>{photoCount > 1 ? `${photoCount} Fotos Reais` : product.badge}</span>
                  </div>

                  {/* Quick View Button overlay */}
                  <div
                    className="absolute inset-0 bg-cocoa-950/35 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white text-xs font-bold transition-opacity backdrop-blur-[2px]"
                  >
                    <span className="px-3.5 py-2 rounded-full bg-white/95 text-cocoa-900 shadow-lg flex items-center gap-1.5 hover:bg-white">
                      <Eye className="w-4 h-4" />
                      <span>Ver Fotos & Sabores</span>
                    </span>
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-serif text-xl font-bold text-cocoa-900 group-hover:text-caramel-700 transition-colors leading-snug cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-cocoa-600 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Flavors preview pills */}
                  <div className="space-y-1.5 pt-2 border-t border-cocoa-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cocoa-500 block">
                      Sabores & Destaques:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.flavors.slice(0, 2).map((flavor, index) => (
                        <span
                          key={index}
                          className="text-[11px] bg-white text-cocoa-700 px-2.5 py-1 rounded-lg border border-cocoa-100 font-medium line-clamp-1"
                        >
                          {flavor}
                        </span>
                      ))}
                      {product.flavors.length > 2 && (
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          className="text-[11px] bg-caramel-50 hover:bg-caramel-100 text-caramel-800 px-2.5 py-1 rounded-lg font-bold transition-colors"
                        >
                          +{product.flavors.length - 2} opções (ver todas)
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Row: Price & WhatsApp Action */}
                  <div className="pt-3 border-t border-cocoa-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="text-left group/btn"
                    >
                      <span className="block text-[10px] uppercase font-bold text-cocoa-400">
                        Disponibilidade
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-caramel-800 group-hover/btn:underline">
                        {product.priceText}
                      </span>
                    </button>

                    <a
                      href={getWhatsAppLink(product.orderMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow-emerald-600/30 transition-all shrink-0"
                      title={`Pedir ${product.name} no WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Pedir Doce</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA bottom of Menu */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-cocoa-900 via-cocoa-800 to-cocoa-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-cocoa-700">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-cream-100">
              Deseja um sabor ou personalização diferente?
            </h3>
            <p className="text-sm text-cocoa-200">
              Fazemos caixas personalizadas para presentes, festas, eventos e revenda em São Paulo.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Olá! Gostaria de consultar sobre doces personalizados e sabores sob encomenda.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-caramel-500 hover:bg-caramel-600 text-white font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com a Doces do Guga</span>
          </a>
        </div>

      </div>

      {/* Modal Quick View */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
