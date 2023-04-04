import React from 'react'

export default function BlockInfo() {
  return (
    <section className="relative">

       
         <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-10 font-extrabold leading-tighter text-gray-700">What Service <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500">AgriAllX</span> Offers</h2>
            <p className="text-xl text-gray-600">We believe that transparency and integrity are key to building trust in the
marketplace. That's why we provide complete transparency in our pricing and trading
processes, ensuring that all parties have access to accurate information and can make informed
decisions.</p>
          </div>

         {/* Icon Blocks */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    {/* Card */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
</svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 dark:text-white">Trading Platform</h3>
          <p className="text-gray-600 dark:text-gray-400">Real-time trading for agricultural and vegetable oil commodities with advanced tools, analytics, and secure payments.</p>
        </div>
        
      </div>
    </a>
    {/* End Card */}
    {/* Card */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
    <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 dark:text-white">Vehicle Tracking</h3>
          <p className="text-gray-600 dark:text-gray-400">We provide live updates on the status of vehicles, allowing traders to
monitor the progress of their orders in real-time.</p>
        </div>
        
      </div>
    </a>
    {/* End Card */}
    {/* Card */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
    <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 dark:text-white">Delivery Insurance</h3>
          <p className="text-gray-600 dark:text-gray-400">We offer insurance services to protect goods against loss or damage during
transportation and storage.</p>
        </div>
       
      </div>
    </a>
    {/* End Card */}
  </div>
</div>
{/* End Icon Blocks */}


          </div>
          </div>
    </section>
  )
}
