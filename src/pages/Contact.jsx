import React from 'react';
import HeaderNew from '../partials/HeaderNew';
import Banner from '../partials/Banner';
import FooterNew from '../partials/FooterNew';
import ContactSection from '../partials/contact/ContactSection';


export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <HeaderNew />      

      {/*  Page content */}
      <main className="flex-grow">
        <ContactSection />

        {/*  Page sections */}
        
      </main>

      <Banner />

      {/*  Site footer */}
      <FooterNew />
      </div>

  )
}
