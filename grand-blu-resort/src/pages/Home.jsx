import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';
import CTABooking from '../components/CTABooking';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Amenities />
      <Testimonials />
      <CTABooking />
    </>
  );
}

export default Home;
