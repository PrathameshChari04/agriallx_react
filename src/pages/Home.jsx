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
import WhyUS from '../partials/WhyUS';
import IconSet from '../partials/IconSet';
import BlockInfo from '../partials/BlockInfo';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
        <HeaderNew />      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <BlockInfo />
    
        <WhyUS />
       
       
        <IconSet />
        
      </main>

      <Banner />

      {/*  Site footer */}
      <FooterNew />

    </div>
  );
}

export default Home;