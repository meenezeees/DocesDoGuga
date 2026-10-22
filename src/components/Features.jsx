import React from 'react';
import { Sparkles, Package, UtensilsCrossed, PartyPopper, MessageSquareHeart, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const differentials = [
    {
      icon: UtensilsCrossed,
      title: "Preparo 100% Artesanal",
      description: "Doces feitos à mão com ponto aveludado impecável, ingredientes de qualidade e o sabor caseiro de verdade que conquista na primeira mordida.",
      color: "from-amber-500/10 to-caramel-500/20 text-caramel-700"
    },
    {
      icon: Package,
      title: "Cuidado na Apresentação",
      description: "Embalagens higienizadas e individuais (blisters e potes) que protegem a textura dos confeitos e valorizam o visual de cada doce.",
      color: "from-emerald-500/10 to-emerald-600/20 text-emerald-700"
    },
    {
      icon: Sparkles,
      title: "Variedade de Sabores",
      description: "Do brigadeiro tradicional com granulado split nobre, passando por Ninho com Nutella, beijinho de coco até delícias virais com morangos frescos.",
      color: "from-pink-500/10 to-rose-500/20 text-rose-700"
    },
    {
      icon: PartyPopper,
      title: "Festas, Eventos & Revenda",
      description: "Atendimento estruturado tanto para sobremesas individuais do dia quanto para centos de doces para aniversários, casamentos e comércios parceiros.",
      color: "from-purple-500/10 to-indigo-500/20 text-purple-700"
    },
    {
      icon: MessageSquareHeart,
      title: "Atendimento Próximo & Direto",
      description: "Conversa direta com quem produz pelo WhatsApp oficial. Esclarecimento de dúvidas sobre disponibilidade, prazos e personalizações sem burocracia.",
      color: "from-blue-500/10 to-cyan-500/20 text-blue-700"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-cream-100/60 relative border-y border-cocoa-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-caramel-700 bg-caramel-100 px-3.5 py-1.5 rounded-full inline-block">
            Por que escolher a Doces do Guga
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cocoa-900 tracking-tight">
            Qualidade Comprovada em Cada Detalhe
          </h2>
          <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed">
            Diferenciais reais confirmados nas publicações e no atendimento diário da nossa confeitaria no Cursino, São Paulo.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-cocoa-100/80 shadow-warm hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-sm`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cocoa-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-cocoa-50 flex items-center gap-1.5 text-[11px] font-semibold text-cocoa-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Garantia de frescor e carinho</span>
                </div>
              </div>
            );
          })}

          {/* Quick summary card */}
          <div className="bg-gradient-to-br from-cocoa-900 to-cocoa-800 text-cream-50 rounded-3xl p-7 shadow-warm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-caramel-300 uppercase tracking-wider block mb-2">
                Confeitaria de Verdade
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                Do brigadeiro avulso ao cento da sua festa.
              </h3>
              <p className="text-xs sm:text-sm text-cocoa-200 leading-relaxed">
                Cada pedido é tratado de forma única para garantir que você e seus convidados tenham a melhor experiência doce.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-cocoa-700/60 flex items-center justify-between">
              <span className="text-xs font-medium text-caramel-200">Rua Eugênio Falk, 530</span>
              <span className="text-xs font-bold text-white bg-caramel-600 px-3 py-1 rounded-full">São Paulo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
