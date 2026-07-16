/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import KaspiCalculator from './components/KaspiCalculator';
import GuaranteeTabs from './components/GuaranteeTabs';
import GiftAssistant from './components/GiftAssistant';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { Product } from './data';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/77015555279?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF9' }}>

      <Header
        onNavClick={handleNavClick}
        onWhatsAppClick={handleWhatsAppClick}
      />

      <main className="flex-grow">
        <Hero
          onCatalogClick={() => handleNavClick('catalog')}
          onWhatsAppClick={handleWhatsAppClick}
        />

        <Catalog
          onOrderClick={(product) => setSelectedProduct(product)}
          onWhatsAppClick={handleWhatsAppClick}
        />

        <GuaranteeTabs />

        <GiftAssistant
          onOrderClick={(product) => setSelectedProduct(product)}
          onWhatsAppClick={handleWhatsAppClick}
        />

        <KaspiCalculator
          onWhatsAppClick={handleWhatsAppClick}
        />

        <Reviews />

        <Contacts
          onWhatsAppClick={handleWhatsAppClick}
        />
      </main>

      <Footer
        onNavClick={handleNavClick}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onWhatsAppClick={handleWhatsAppClick}
        />
      )}
    </div>
  );
}
