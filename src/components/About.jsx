import React from 'react';
import { Heart, MapPin, Sparkles, Award, ShieldCheck, MessageCircle } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/products';
import { getAssetUrl } from '../utils/asset';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-cream-100/70 relative border-t border-cocoa-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back Card: Logo / Adesivo Oficial */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-5 shadow-warm border border-cocoa-100">
                <div className="aspect-square rounded-2xl overflow-hidden bg-cocoa-800 flex items-center justify-center p-6 relative">
                  <img
                    src={getAssetUrl('assets/logo.jpg')}
                    alt="Selo oficial da marca Doces do Guga"
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Info Card Inside */}
                <div className="mt-4 p-4 rounded-2xl bg-cream-50 border border-cocoa-100/80 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-caramel-800 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-caramel-600" />
                    <span>São Paulo - SP</span>
                  </div>
                  <p className="text-xs text-cocoa-700 font-medium">
                    Rua Eugênio Falk, 530 • Bairro Cursino
                  </p>
                  <p className="text-[11px] text-cocoa-500 mt-1">
                    Atendimento, encomendas e revenda
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-cocoa-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-cocoa-900">Feito com Amor</span>
                  <span className="text-[11px] text-cocoa-500">Ponto aveludado único</span>
                </div>
              </div>

            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel-100 text-caramel-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
              <span>Nossa História e Compromisso</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight leading-tight">
              A Doçura Artesanal que Conecta Momentos e Pessoas
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-cocoa-700 leading-relaxed font-normal">
              <p>
                A <strong className="font-semibold text-cocoa-900">Doces do Guga</strong> nasceu em São Paulo com um propósito claro: resgatar a essência do doce caseiro, onde cada receita é preparada sem atalhos, com atenção meticulosa ao ponto e utilizando ingredientes que trazem aconchego.
              </p>
              <p>
                Localizada no bairro <strong className="font-semibold text-cocoa-900">Cursino</strong> (região da Saúde / Jardim da Saúde), nossa produção atende clientes que buscam tanto aquele doce especial para adoçar a rotina da tarde quanto organizadores de festas e comércios parceiros que precisam de brigadeiros gourmet e bolos de pote padronizados e deliciosos.
              </p>
              <p>
                Acreditamos na transparência e no atendimento humano: você conversa diretamente com a nossa equipe pelo WhatsApp, alinha os sabores que mais ama e recebe produtos frescos, preparados no capricho.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-cocoa-100 flex items-start gap-3 shadow-xs">
                <Award className="w-5 h-5 text-caramel-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-cocoa-900">Ingredientes Selecionados</h4>
                  <p className="text-xs text-cocoa-500 mt-0.5">Leite condensado no ponto correto e chocolates nobres.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cocoa-100 flex items-start gap-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-cocoa-900">Compromisso com o Cliente</h4>
                  <p className="text-xs text-cocoa-500 mt-0.5">Pontualidade nas encomendas e higiene rigorosa.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppLink("Olá! Gostaria de conhecer mais sobre os doces e fazer um pedido com vocês.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-cocoa-900 hover:bg-cocoa-800 text-cream-50 font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Conversar pelo WhatsApp</span>
              </a>

              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-cream-50 text-cocoa-800 font-semibold text-sm border border-cocoa-200 transition-all"
              >
                <span>Conhecer o Instagram @{BRAND.instagramUser}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
