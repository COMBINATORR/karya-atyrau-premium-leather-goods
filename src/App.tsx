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

  // Smooth scroll to a section on the landing page
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Real WhatsApp integration: encodes pre-filled messages and opens WhatsApp
  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    // WhatsApp number for Karya Atyrau boutique (fictional premium number)
    const whatsappUrl = `https://wa.me/77015555279?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOrderClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F6] selection:bg-[#A82025]/10 selection:text-[#A82025]">
      
      {/* 1. HEADER (Navigation Menu & Logo) */}
      <Header 
        onNavClick={handleNavClick} 
        onWhatsAppClick={handleWhatsAppClick} 
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* 2. HERO SECTION */}
        <Hero 
          onCatalogClick={() => handleNavClick('catalog')} 
          onWhatsAppClick={handleWhatsAppClick} 
        />

        {/* 3. SECTION 1: CATALOG IN STOCK ("Для нее" & "Для него") */}
        <Catalog 
          onOrderClick={handleOrderClick} 
          onWhatsAppClick={handleWhatsAppClick} 
        />

        {/* 4. SECTION 3: GIFT SERVICE ASSISTANT */}
        <GiftAssistant 
          onOrderClick={handleOrderClick} 
          onWhatsAppClick={handleWhatsAppClick} 
        />

        {/* 5. SECTION 4: KASPI CALCULATOR & SHIPPING DETAILS */}
        <KaspiCalculator 
          onWhatsAppClick={handleWhatsAppClick} 
        />

        {/* 6. SECTION 2: GUARANTEES AND QUALITY TABS */}
        <GuaranteeTabs />

        {/* 7. SECTION 5: CUSTOMER REVIEWS & ADD REVIEW FORM */}
        <Reviews />

        {/* 8. SECTION 6: CONTACTS & INTERACTIVE VECTOR MAP */}
        <Contacts 
          onWhatsAppClick={handleWhatsAppClick} 
        />

      </main>

      {/* 9. FOOTER (Microcopy & final CTA) */}
      <Footer 
        onNavClick={handleNavClick} 
        onWhatsAppClick={handleWhatsAppClick} 
      />

      {/* 10. MODAL: 1-CLICK ORDER CHECKOUT */}
      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          onWhatsAppClick={handleWhatsAppClick} 
        />
      )}

    </div>
  );
}
