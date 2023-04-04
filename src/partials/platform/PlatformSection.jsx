import React from "react";

import HeroImage from "../../images/herosection.png";

export default function PlatformSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
            Reach goals that matter
          </div>
          <h1 className="h2 mb-4">One product, unlimited solutions</h1>
          <p className="text-xl text-gray-400">
            At AgriAllX, we understand the challenges of the agriculture and
            vegetable oil industry, which is why we have developed a platform
            that streamlines the buying and selling process, reduces costs, and
            ensures fair and equitable transactions for all parties involved.
          </p>
        </div>
        {/* start 1st Items */}
        <div className="grid gap-5 mb-10">
          {/* 1st item */}

          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Real-time pricing and market data</h3>
                <p className="text-xl text-gray-700 mb-8">
                  The platform provides real-time pricing and market data for a
                  range of commodities. Access to timely and accurate
                  information is crucial for informed trading decisions, and the
                  platform caters to this need by providing real-time pricing
                  and market data to all participants.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Real-time pricing and market data provided</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Access to accurate pricing information critical for
                      informed trading decisions
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Platform built to provide data to all participants
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Market data</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Our platform offers real-time pricing and comprehensive market
                  data to participants, including historical prices, supply and
                  demand trends, and market news. The market data is sourced
                  from reputable sources to provide a complete view of the
                  commodities markets.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Pricing and comprehensive market data available</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Sourced from reputable sources for a complete view of the
                      commodities markets
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Historical prices, supply and demand trends, and market
                      news included
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* end 1st item */}

        {/* start 2nd Items */}
        <div className="grid gap-5 mb-10">
          {/* 1st item */}

          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Customizable dashboards</h3>
                <p className="text-xl text-gray-700 mb-10">
                  We offer customizable dashboards to our participants. They can
                  personalize their dashboard to view the data that is most
                  relevant to their trading activities. This feature enables
                  users to select the commodities they are interested in
                  trading, view real-time pricing, and monitor market trends
                  from a single dashboard.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Customizable dashboards tailored to participants users
                      need.
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Select commodities to monitor and view real-time pricing
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Keep an eye on market trends all in one place.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Mobile access</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Allowing users to stay connected to real-time pricing and
                  market data on-the-go. This feature enables participants to
                  make informed trading decisions and manage their positions
                  conveniently from anywhere and at any time.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      Participants can access real-time pricing and market data
                      from their mobile devices.
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      The mobile access feature allows users to monitor the
                      market and manage their positions on-the-go.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      With mobile access, participants can make informed trading
                      decisions anytime and from anywhere.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* end 2nd item */}


        {/* start 3rd Items */}
        <div className="grid gap-5 mb-10">
          {/* 1st item */}

          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Risk management tools</h3>
                <p className="text-xl text-gray-700 mb-4">
                  Our platform offers a range of risk management tools to help
                  participants manage their exposure to price fluctuations and
                  mitigate risk in commodities trading. Our tools are designed
                  to be user-friendly, intuitive and effective, enabling
                  participants to take control of their risk management
                  strategies with confidence. 
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Hedging & options trading to manage exposure to price fluctuations
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    User-friendly interface to make risk management easy and intuitive
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Customizable risk management strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Hedging Tools</h3>
                <p className="text-xl text-gray-700 mb-4">
                Hedging tools for managing commodity market exposure. Participants can use futures, options, and swaps to mitigate risk and protect profits. Hedging tools help participants manage price fluctuations in commodity markets.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      
                    </span>Our platform provides hedging tools for managing commodity market exposure
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Participants can use futures, options, and swaps to mitigate risk and protect profits
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Hedging tools help participants manage price fluctuations in commodity markets
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* end 3rd item */}


        {/* start 4th Items */}
        <div className="grid gap-5 mb-10">
          {/* 1st item */}

          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Options trading</h3>
                <p className="text-xl text-gray-700 mb-4">
                Our platform offers options trading, allowing participants to buy or sell commodities at a predetermined price in the future. This serves as an effective risk management tool to manage exposure to market price fluctuations.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Providing flexibility to buy or sell commodities at a specific price at a future date.
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Options trading as a risk management tool
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span> Effective way to manage exposure to price fluctuations in the market.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-7">Seamless integration</h3>
                <p className="text-xl text-gray-700 mb-4">
                The platform offers seamless integration for quick and efficient access to financing facilities. Participants can apply, submit trade documents, and receive funding through the platform, allowing them to manage their supply chain and grow their business effectively.
                </p>
                <ul className="text-lg text-gray-500 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      
                    </span>Enables quick and efficient access to financing facilities
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Provides a comprehensive financing solution for managing supply chain.

                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                    Allows participants to grow their business effectively.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* end 4th item */}



      </div>
    </section>
  );
}
