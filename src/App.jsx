import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import About from './components/About';
import HowToOrder from './components/HowToOrder';
import InstagramFeed from './components/InstagramFeed';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-cocoa-900 selection:bg-caramel-200 selection:text-cocoa-900 font-sans">
      {/* Seção 1: Cabeçalho & Navegação */}
      <Header />

      <main className="flex-grow">
        {/* Seção 2: Hero Principal */}
        <Hero />

        {/* Seção 3: Cardápio de Produtos Real */}
        <Menu />

        {/* Seção 4: Diferenciais da Marca */}
        <Features />

        {/* Seção 5: Galeria de Dar Água na Boca */}
        <Gallery />

        {/* Seção 6: Sobre a Doces do Guga */}
        <About />

        {/* Seção 8: Como Fazer seu Pedido (Passo a Passo) */}
        <HowToOrder />

        {/* Seções 7 & 9: Instagram, Bastidores, Confiança & Comunidade */}
        <InstagramFeed />

        {/* Seção 10: Perguntas Frequentes (FAQ) */}
        <FAQ />
      </main>

      {/* Seção 11: Contato Oficial, Rodapé e WhatsApp Flutuante */}
      <ContactFooter />
    </div>
  );
}
