import React from 'react';
import { Heart, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/products';
import { InstagramIcon } from './Icons';
import { getAssetUrl } from '../utils/asset';

export default function InstagramFeed() {
  const feedHighlights = [
    {
      image: getAssetUrl("assets/790512626_18069302783740234_6695528223466475880_n.jpg"),
      tag: "Morango Cravejado",
      caption: "Morangos selecionados envolvidos em brigadeiro cremoso e cristais crocantes. Uma explosão a cada mordida!"
    },
    {
      image: getAssetUrl("assets/517974445_18016526873740234_1194488664687342246_n.jpg"),
      tag: "Cones Trufados",
      caption: "Casquinha crocante banhada em chocolate e recheada até o topo: Paçoca, Brigadeiro, Ninho, Ao Leite e Castanha."
    },
    {
      image: getAssetUrl("assets/567330691_18029035319740234_2912624652265857453_n.webp"),
      tag: "Centos para Festas",
      caption: "Caixas com docinhos gourmet padronizados: Bicho de Pé carimbado, Amendoim com Nutella, Belga e Beijinho."
    },
    {
      image: getAssetUrl("assets/496479939_18009542243740234_1999382976708726864_n.jpg"),
      tag: "Bombom Aberto",
      caption: "Surpresa de Uva no Pote: uvas verdes crocantes, creme aveludado de Leite Ninho e ganache de chocolate."
    },
    {
      image: getAssetUrl("assets/756858129_18063250409740234_3171982933394442438_n.webp"),
      tag: "Bolos Festivos",
      caption: "Bolo no acetato super recheado, finalizado com brigadeiros gourmet no topo e laço especial para comemorar."
    },
    {
      image: getAssetUrl("assets/825269877_18073031888740234_6133581483071309080_n.jpg"),
      tag: "Mini Brownies",
      caption: "Bandeja de mini brownies artesanais decorados com rosetas de brigadeiro branco e chocolate ao leite."
    },
    {
      image: getAssetUrl("assets/503444415_18017858681740234_6786135216542445181_n.jpg"),
      tag: "Morango do Amor",
      caption: "Por dentro do nosso Morango do Amor: fruta fresca, camada generosa de brigadeiro e casquinha crocante!"
    },
    {
      image: getAssetUrl("assets/545198545_18023698964740234_772588665020894520_n.jpg"),
      tag: "Bolo no Pote",
      caption: "Bolo de cenoura bem fofinho intercalado com camadas fartas de brigadeiro gourmet artesanal."
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
                src={getAssetUrl('assets/logo.jpg')}
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
                  <span className="text-caramel-600 font-bold group-hover:underline">Abrir no Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
