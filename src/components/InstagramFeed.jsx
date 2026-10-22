import React from 'react';
import { Heart, MessageCircle, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/products';
import { InstagramIcon } from './Icons';

export default function InstagramFeed() {
  const feedHighlights = [
    {
      image: "/assets/brigadeiros-box-4.jpg",
      tag: "Produção do Dia",
      caption: "Caixa degustação com nossos 4 brigadeiros gourmet. Ponto cremoso e confeitos split."
    },
    {
      image: "/assets/dupla-especial.jpg",
      tag: "Especiais da Semana",
      caption: "Dupla gourmet irresistível: Leite Ninho com cascata generosa de Nutella e Brigadeirão belga."
    },
    {
      image: "/assets/bolo-pote.jpg",
      tag: "Sobremesa no Pote",
      caption: "Bolo de pote artesanal de chocolate: camadas fofinhas e muito brigadeiro cremoso."
    },
    {
      image: "/assets/bio-instagram.png",
      tag: "Perfil Oficial",
      caption: "Doceria artesanal no bairro Cursino em São Paulo. Encomendas, festas e revenda."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
            <span>Acompanhe Nossas Fornadas no Instagram</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
            Faça Parte da Nossa Comunidade Doce
          </h2>

          <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed">
            Em respeito à transparência, não utilizamos avaliações fictícias. Convidamos você a conferir os comentários, bastidores e publicações em tempo real direto no nosso Instagram oficial <strong className="text-cocoa-800 font-semibold">@{BRAND.instagramUser}</strong>.
          </p>
        </div>

        {/* Profile Card Banner */}
        <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-r from-cocoa-900 to-cocoa-800 rounded-3xl p-6 sm:p-8 text-white shadow-warm flex flex-col sm:flex-row items-center justify-between gap-6 border border-cocoa-700">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-caramel-400 shrink-0 shadow-md">
              <img
                src="/assets/logo.jpg"
                alt="Doces do Guga Instagram"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <h3 className="font-bold text-lg text-white">@{BRAND.instagramUser}</h3>
                <CheckCircle2 className="w-4 h-4 text-caramel-400 fill-current" />
              </div>
              <p className="text-xs text-cocoa-200 mt-0.5">
                Doceria artesanal em São Paulo (Cursino)
              </p>
              <p className="text-[11px] text-caramel-300 font-medium">
                Encomendas, festas e revenda
              </p>
            </div>
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm shadow-md transition-all shrink-0 group"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Feed Preview Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedHighlights.map((item, index) => (
            <a
              key={index}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-2xl overflow-hidden border border-cocoa-100 shadow-sm hover:shadow-warm transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-cocoa-100">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-cocoa-900/80 backdrop-blur-sm text-caramel-200 text-[10px] font-bold">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-cocoa-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-1 text-xs font-bold">
                    <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                    <span>Ver</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold">
                    <MessageCircle className="w-4 h-4" />
                    <span>Post</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-cocoa-700 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 pt-2 border-t border-cocoa-100 flex items-center justify-between text-[11px] text-cocoa-500 font-medium">
                  <span>@{BRAND.instagramUser}</span>
                  <span className="text-caramel-600 font-bold group-hover:underline">Abrir post</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
