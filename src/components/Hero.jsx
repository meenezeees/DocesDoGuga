import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Sparkles, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/products';
import { getAssetUrl } from '../utils/asset';

const HERO_SLIDES = [
  {
    image: getAssetUrl('assets/567330691_18029035319740234_2912624652265857453_n.webp'),
    label: 'Brigadeiros & Centos Gourmet',
    title: 'Belga • Bicho de Pé • Ninho c/ Nutella • Beijinho',
    subtitle: 'Boleados à mão para festas, presentes e pronta-entrega'
  },
  {
    image: getAssetUrl('assets/790512626_18069302783740234_6695528223466475880_n.jpg'),
    label: 'Sucesso Absoluto',
    title: 'Morango do Amor & Morango Cravejado',
    subtitle: 'Fruta fresca envolvida em brigadeiro cremoso e casquinha crocante'
  },
  {
    image: getAssetUrl('assets/517974445_18016526873740234_1194488664687342246_n.jpg'),
    label: 'Recheio do Início ao Fim',
    title: 'Cones Trufados em Diversos Sabores',
    subtitle: 'Paçoca, Brigadeiro, Ninho, Maracujá e Chocolate ao Leite'
  },
  {
    image: getAssetUrl('assets/496479939_18009542243740234_1999382976708726864_n.jpg'),
    label: 'Para Comer de Colherada',
    title: 'Bolos de Pote & Sobremesas Artesanais',
    subtitle: 'Surpresa de Uva, Ninho com Morango, Cenoura e Chocolate'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const current = HERO_SLIDES[activeSlide];

  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-caramel-100/40 via-gourmetPink-100/30 to-cream-200/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-caramel-100/80 border border-caramel-300 text-caramel-900 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-caramel-600" />
              <span>Confeitaria Artesanal em São Paulo • Bairro Cursino</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cocoa-900 leading-[1.15] tracking-tight">
              O verdadeiro prazer de saborear um doce <span className="text-caramel-600 relative inline-block">
                feito à mão
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-caramel-300/80 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> com afeto.
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-cocoa-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Na <strong className="font-semibold text-cocoa-900">Doces do Guga</strong>, cada brigadeiro gourmet, morango do amor, cone trufado, bolo festivo e sobremesa no pote é preparado artesanalmente com ingredientes selecionados. O sabor caseiro autêntico que transforma qualquer dia em comemoração.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={getWhatsAppLink("Olá! Gostaria de fazer meu pedido na Doces do Guga e conhecer as opções disponíveis hoje.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero fazer meu pedido</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#cardapio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-cocoa-50 text-cocoa-800 font-bold text-base border-2 border-cocoa-200 hover:border-cocoa-300 shadow-sm transition-all"
              >
                <span>Conheça nosso cardápio</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-cocoa-100 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-caramel-50 text-caramel-700 shrink-0">
                  <Heart className="w-4 h-4 fill-caramel-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-900">100% Artesanal</h4>
                  <p className="text-[11px] text-cocoa-500 hidden sm:block">Receitas caseiras frescas</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-900">São Paulo - SP</h4>
                  <p className="text-[11px] text-cocoa-500 hidden sm:block">Retirada & Delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-purple-50 text-purple-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-900">Festas & Revenda</h4>
                  <p className="text-[11px] text-cocoa-500 hidden sm:block">Encomendas garantidas</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Showcase with Real Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-caramel-400/20 via-pink-300/20 to-cocoa-600/10 transform -rotate-2 blur-sm" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-warm border border-cocoa-100 p-3 sm:p-4">
                <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-cocoa-100">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/80 via-cocoa-950/20 to-transparent" />
                  
                  {/* Badge over photo */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-cocoa-900 uppercase tracking-wide">
                      Foto Real • Doces do Guga
                    </span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-caramel-200 uppercase tracking-wider">
                      {current.label}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
                      {current.title}
                    </h3>
                    <p className="text-xs text-cream-200 mt-1">
                      {current.subtitle}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Switcher */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        activeSlide === idx
                          ? 'border-caramel-500 ring-2 ring-caramel-300/60 scale-[1.02]'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Ver foto: ${slide.title}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.label}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
