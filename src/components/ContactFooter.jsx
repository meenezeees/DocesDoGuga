import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Heart, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/products';
import { InstagramIcon } from './Icons';
import { getAssetUrl } from '../utils/asset';

export default function ContactFooter() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-cream-100 to-cream-200/80 border-t border-cocoa-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-caramel-800 bg-caramel-100 px-3.5 py-1.5 rounded-full inline-block">
              Fale Conosco
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 tracking-tight">
              Pronto para Adoçar o Seu Dia?
            </h2>
            <p className="text-sm sm:text-base text-cocoa-600">
              Entre em contato pelo nosso canal oficial de atendimento. Respondemos com carinho para orçamentos, encomendas e pronta-entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Direct Contact Info */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-cocoa-100 shadow-warm flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-caramel-400 bg-cocoa-900 shrink-0 shadow-sm">
                    <img
                      src={getAssetUrl('assets/logo.jpg')}
                      alt="Logo Doces do Guga"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-cocoa-900">
                      Doces do Guga
                    </h3>
                    <p className="text-xs font-medium text-caramel-700 uppercase tracking-wider">
                      Doceria Artesanal em São Paulo
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream-50 border border-cocoa-100/70">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cocoa-500 block">
                        WhatsApp Oficial para Pedidos & Orçamentos
                      </span>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-bold text-cocoa-900 hover:text-emerald-700 transition-colors inline-block mt-0.5"
                      >
                        {BRAND.whatsapp}
                      </a>
                      <p className="text-xs text-cocoa-600 mt-0.5">
                        Clique para iniciar conversa imediata com a nossa equipe
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream-50 border border-cocoa-100/70">
                    <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cocoa-500 block">
                        Endereço & Ponto de Atendimento
                      </span>
                      <p className="text-sm sm:text-base font-bold text-cocoa-900 mt-0.5">
                        {BRAND.address}
                      </p>
                      <p className="text-xs text-cocoa-600">
                        Bairro Cursino (Jardim da Saúde / Saúde) — São Paulo / SP
                      </p>
                      <a
                        href={BRAND.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel-700 hover:text-caramel-800 mt-2 hover:underline"
                      >
                        <span>Abrir localização no Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream-50 border border-cocoa-100/70">
                    <div className="p-2.5 rounded-xl bg-pink-100 text-pink-700 shrink-0">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cocoa-500 block">
                        Instagram Oficial
                      </span>
                      <a
                        href={BRAND.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-bold text-cocoa-900 hover:text-pink-600 transition-colors inline-block mt-0.5"
                      >
                        @{BRAND.instagramUser}
                      </a>
                      <p className="text-xs text-cocoa-600">
                        Acompanhe stories diários, bastidores e novidades
                      </p>
                    </div>
                  </div>

                  {/* Modalidades Confirmadas */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream-50 border border-cocoa-100/70">
                    <div className="p-2.5 rounded-xl bg-caramel-100 text-caramel-700 shrink-0">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cocoa-500 block">
                        Modalidades de Atendimento Confirmadas
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-cocoa-800 mt-0.5">
                        Doces individuais • Encomendas para Festas • Revenda & Parcerias Comerciais
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Action */}
              <div className="pt-4 border-t border-cocoa-100">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de fazer meu pedido na Doces do Guga.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chamar no WhatsApp Agora</span>
                </a>
              </div>
            </div>

            {/* Right Card: Transparency and Location Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Map & Neighborhood Card */}
              <div className="bg-cocoa-900 text-white rounded-3xl p-8 border border-cocoa-800 shadow-warm flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-500/20 text-caramel-300 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>São Paulo - SP</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-cream-100">
                    Venha Retirar ou Receba em Casa
                  </h3>

                  <p className="text-xs sm:text-sm text-cocoa-200 leading-relaxed">
                    Estamos na <strong>Rua Eugênio Falk, 530</strong>, no tradicional bairro <strong>Cursino</strong>. Atendemos a região do Cursino, Jardim da Saúde, Saúde e bairros próximos da Zona Sul e de São Paulo.
                  </p>

                  <div className="p-4 rounded-2xl bg-cocoa-800/80 border border-cocoa-700 text-xs space-y-2 text-cocoa-200">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Retirada pré-combinada com horário flexível</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Entregas locais combinadas via WhatsApp</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Embalagens seguras para transporte sem amassar</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-cocoa-800">
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-caramel-600 hover:bg-caramel-500 text-white font-bold text-sm transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Como Chegar (Google Maps)</span>
                  </a>
                </div>
              </div>

              {/* Verified Badge Guarantee */}
              <div className="bg-white rounded-3xl p-6 border border-cocoa-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-caramel-100 text-caramel-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cocoa-900">Garantia de Fidelidade</h4>
                  <p className="text-xs text-cocoa-600">
                    Todas as informações comerciais e fotos exibidas são comprovadas e fiéis ao perfil oficial.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer Bar */}
      <footer className="bg-cocoa-950 text-cocoa-400 py-10 border-t border-cocoa-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cocoa-700">
                <img src={getAssetUrl('assets/logo.jpg')} alt="Logo Doces do Guga" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-white block">
                  Doces do Guga
                </span>
                <span className="text-[11px] text-cocoa-400">
                  Confeitaria Artesanal • Rua Eugênio Falk, 530, Cursino - São Paulo/SP
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-cocoa-300">
              <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              <a href="#cardapio" className="hover:text-white transition-colors">Cardápio</a>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
              <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                Instagram
              </a>
            </div>

            <p className="text-[11px] text-cocoa-500">
              © {new Date().getFullYear()} Doces do Guga. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-white text-cocoa-900 px-4 py-2 rounded-2xl shadow-xl border border-cocoa-100 text-xs font-bold animate-in fade-in slide-in-from-right-4 duration-300">
            <span>Fazer Pedido no WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-cocoa-400 hover:text-cocoa-700 text-sm ml-1"
              aria-label="Fechar aviso"
            >
              ×
            </button>
          </div>
        )}

        <a
          href={getWhatsAppLink("Olá! Vim pelo site da Doces do Guga e gostaria de fazer meu pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
          aria-label="Abrir conversa no WhatsApp"
        >
          {/* Pulsing beacon */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
          
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>
    </>
  );
}
