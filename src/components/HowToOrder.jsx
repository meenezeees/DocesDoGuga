import React from 'react';
import { Eye, MessageCircle, CalendarCheck, Bike, ArrowRight } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/products';

export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      icon: Eye,
      title: "Escolha seus doces favoritos",
      description: "Navegue pelo nosso cardápio online e escolha suas delícias: brigadeiros gourmet, duplas especiais, bolos de pote ou centos para festas."
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Chame no WhatsApp oficial",
      description: "Clique no botão e fale direto com a nossa equipe pelo (11) 96977-5104. Se você clicou em um doce específico, a mensagem já vai pronta!"
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Consulte valores e disponibilidade",
      description: "Informamos os sabores frescos do dia para pronta-entrega ou montamos o orçamento sob medida para o seu evento ou revenda."
    },
    {
      number: "04",
      icon: Bike,
      title: "Combine a entrega ou retirada",
      description: "Retire no nosso endereço no Cursino (Rua Eugênio Falk, 530) ou combine o envio para o seu endereço em São Paulo."
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-cream-50 relative border-t border-cocoa-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
            Simples, Rápido e Sem Burocracia
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
            Como Fazer o Seu Pedido
          </h2>
          <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed">
            Em apenas 4 passos simples você garante doces frescos e artesanais para o seu dia ou para o seu evento.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-7 border border-cocoa-100 shadow-warm flex flex-col justify-between group hover:-translate-y-1 transition-transform"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-5 font-serif text-3xl font-extrabold text-cocoa-100 group-hover:text-caramel-200 transition-colors">
                  {step.number}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-caramel-100 text-caramel-700 flex items-center justify-center mb-6 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-cocoa-900 mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cocoa-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-cocoa-50 text-[11px] font-semibold text-caramel-700 flex items-center gap-1">
                  <span>Etapa {index + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppLink("Olá! Gostaria de consultar os produtos disponíveis para pedido hoje.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Fazer meu pedido pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-cocoa-500 mt-3 font-medium">
            Atendimento rápido no WhatsApp comercial: <strong className="text-cocoa-800">{BRAND.whatsapp}</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
