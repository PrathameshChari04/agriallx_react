import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

import FeaturesBg from '../../images/features-bg.png';
import FeaturesElement from '../../images/features-element.png';
import Vision from '../../images/Vision.png';
import Mission from '../../images/Mission.png';


export default function FeatureAbout() {

  return (

    
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            
            <h1 className="h2 mb-4">Our Company & Team</h1>
            <p className="text-xl text-gray-700">At AgriAllX,we have a team of highly experienced professionals with a wealth of
            knowledge in the commodities trading industry. We have been able to grow our business over
            the past five years to an impressive annual revenue of USD 65 million. Our success can be
            attributed to our dedication to providing exceptional customer service and our commitment to
            integrity and transparency in all our business dealings.</p>
            <p className="text-xl text-gray-700"></p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Vision} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  
                  <h3 className="h3 mb-3">Vision Statement</h3>
                  <p className="text-xl text-gray-700 mb-4">To be the leading agriculture and vegetable oils commodity trading company, recognized for our
                    commitment to sustainable practices and innovation in AI-based trading technology.</p>
                  
                </div>
              </div>
            </div>
            

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Mission} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  
                  <h3 className="h3 mb-3">Mission Statement</h3>
                  <p className="text-xl text-gray-700 mb-4">Our mission is to provide exceptional customer service and transparent trading practices while
            supporting sustainable agriculture practices. We are committed to leveraging AI-based
            technology to develop a state-of-the-art commodity exchange platform that provides real-time
            pricing, market data, and risk management tools to all participants in the industry.</p>
                        
                     </div>
              </div>
            </div>

          </div>
        </div>
    </section>


    );

}
