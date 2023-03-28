import React from 'react'
import HeroAbout from '../partials/about/HeroAbout';
import HeaderNew from '../partials/HeaderNew';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import FeatureAbout from '../partials/about/FeatureAbout';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <HeaderNew />      

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroAbout />
        <FeatureAbout />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />


    </div>
  )
}
