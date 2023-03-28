import React from 'react';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import HeaderNew from '../partials/HeaderNew';
import HeroSection from '../partials/HeroSection';
import FooterNew from '../partials/FooterNew';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
        <HeaderNew />      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        
        <FeaturesHome />
        <FeaturesBlocks />
        
      </main>

      <Banner />

      {/*  Site footer */}
      <FooterNew />

    </div>
  );
}

export default Home;