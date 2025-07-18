import React from 'react';
import BookingBar from '../components/BookingBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';
import CTABooking from '../components/CTABooking';

function Home() {
  return (
    <>
      <BookingBar />
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
