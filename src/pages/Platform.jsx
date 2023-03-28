import React from 'react';
import HeaderNew from '../partials/HeaderNew';
import HeroSection from '../partials/HeroSection';
import FooterNew from '../partials/FooterNew';
import PlatformHome from '../partials/platform/PlatformHome';
import Banner from '../partials/Banner';
import PlatformSection from '../partials/platform/PlatformSection';

export default function Platform() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

    {/*  Site header */}
      <HeaderNew />  

      {/*  Page content */}
      <PlatformHome />
      <PlatformSection />

      <Banner/>

    {/*  Site footer */}
    <FooterNew />
    </div>
  );
}
