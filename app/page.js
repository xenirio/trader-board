import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
