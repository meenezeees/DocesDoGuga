import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink, BRAND } from '../data/products';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-caramel-100 text-caramel-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-caramel-600" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-cocoa-600 leading-relaxed max-w-xl mx-auto">
            Informações verificadas e transparentes sobre pedidos, entregas e atendimento da <strong className="font-semibold text-cocoa-800">Doces do Guga</strong>.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-cream-50 border-caramel-300 shadow-sm'
                    : 'bg-white border-cocoa-100 hover:border-cocoa-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-cocoa-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-caramel-200 text-cocoa-900' : 'bg-cocoa-50 text-cocoa-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-cocoa-700 leading-relaxed border-t border-cocoa-100/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-100 border border-caramel-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-sm text-cocoa-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-cocoa-600">Nossa equipe está pronta para te atender diretamente no WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre os doces e gostaria de falar com a equipe.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com a Doces do Guga</span>
          </a>
        </div>

      </div>
    </section>
  );
}
