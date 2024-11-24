import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedItems from '../components/FeaturedItems';
import HowItWorks from '../components/HowItWorks';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedItems />
      <HowItWorks />
    </main>
  );
}