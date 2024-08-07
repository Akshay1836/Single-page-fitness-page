import React from "react";
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.jpeg"
import logo3 from "../../assets/logo3.jpg"
import logo4 from "../../assets/logo4.jpg"
import logo5 from "../../assets/logo5.png"
const Customers = () => {
  return (
    <div class="mx-auto max-w-screen-lg px-8  pb-16 text-gray-700 md:pt-24 md:pb-20">
      <div class="flex flex-wrap">
        <div class="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
          <h2 class="mb-3 text-xs font-bold uppercase tracking-wide text-gray-300 xl:text-base">
            Our Clients
          </h2>
          <h3 class="mb-3 font-bold text-white sm:text-2xl xl:text-4xl">
            Trusted by over 300+ clients
          </h3>
          <p class="text-gray-300">
            We bring solutions to make life easier for our customers.
          </p>
        </div>
        <div class="w-full max-w-full py-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div class="w-32">
              <img src={logo1} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32 ">
              <img src={logo2} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo3} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo4} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo4} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo5} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo1} alt="" class="rounded-md h-full" />
            </div>
            <div class="w-32">
              <img src={logo3} alt="" class="rounded-md h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
