import React from 'react'

export default function WhyUS() {
    return (

        < div className = "max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" >

            < div className = "grid md:grid-cols-2 gap-12" >
                <div className="lg:w-3/4">
                    <h2 className="text-3xl mb-8 text-gray-800 font-bold lg:text-4xl dark:text-white">
                    Revolutionizing Agro-Commodity Transactions with a User-Friendly Platform
                    </h2>
                    <p className="text-xl mt-3 text-gray-800 dark:text-gray-400" >
                    Our comprehensive platform is designed to simplify and streamline the buying and selling of edible oils for all parties involved. With a focus on meeting our clients' needs, we are committed to providing a seamless experience that improves efficiency and convenience.
                    </p>
                    
                </div>
    {/* End Col */ }
    <div className="space-y-6 lg:space-y-10">
        {/* Icon Block */}
        <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" />
                </svg>
            </span>
            <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Comprehensive Solution for Efficient Delivery of Product
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">   
                Our platform will allocate drivers and vehicles based on the needs of the buyer, while buyers can track the delivery in real-time. The portal offers a comprehensive solution for efficient and effective management of the delivery process.
                </p>
            </div>
        </div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            </span>
            <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Financing Credit Limit
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                Offering financial assistance to buyers who cannot pay upfront. With this module, buyers can apply for credit and use it while placing orders, enhancing their ordering experience.
                </p>
            </div>
        </div>
        {/* End Icon Block */}
        {/* Icon Block */}
        <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
            </span>
            <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Simplified & Easy Order Management
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                Simplify the process of ordering edible oil with the Order Placement module, offering two modes of ordering: Normal Purchase and Bulk Booking, and generating necessary documents based on order and payment status.
                </p>
            </div>
        </div>
        {/* End Icon Block */}
    </div>

  </div >
  
</div >


  );
}
