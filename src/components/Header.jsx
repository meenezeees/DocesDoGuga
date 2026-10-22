import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MessageCircle, Phone } from 'lucide-react';
import { BRAND, getWhatsAppLink } from '../data/products';
import { InstagramIcon } from './Icons';
import { getAssetUrl } from '../utils/asset';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3 border-b border-cocoa-100'
          : 'bg-gradient-to-b from-cream-100/90 via-cream-50/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Marca */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-caramel-400 shadow-sm group-hover:scale-105 transition-transform bg-cocoa-800">
              <div className="absolute inset-0 flex items-center justify-center text-cream-100 text-xs font-bold">
                DG
              </div>
              <img
                src={getAssetUrl('assets/logo.jpg')}
                alt="Logo Doces do Guga"
                className="relative z-10 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-cocoa-900 group-hover:text-caramel-600 transition-colors">
                Doces do Guga
              </span>
              <span className="hidden sm:block text-[11px] font-medium uppercase tracking-wider text-cocoa-500">
                Doceria Artesanal • SP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-cocoa-700 hover:text-caramel-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-caramel-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Instagram */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do Instagram Doces do Guga"
              className="p-2.5 rounded-full text-cocoa-600 hover:text-pink-600 hover:bg-cocoa-100/60 transition-colors"
              title="Seguir no Instagram @doces_doguga"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-600 text-white shadow-sm"
              aria-label="Pedir no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cocoa-800 hover:bg-cocoa-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-cocoa-100 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-cocoa-800 hover:text-caramel-600 transition-colors py-1.5 border-b border-cocoa-100/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Fazer Pedido pelo WhatsApp</span>
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-cocoa-200 text-cocoa-700 font-medium hover:bg-cocoa-100/50"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>@{BRAND.instagramUser} no Instagram</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
