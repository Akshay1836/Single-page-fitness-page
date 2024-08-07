import React from "react";
import banner from "../../assets/banner.jpg"
const Booking = () => {
  return (
    <div class="flex ml-2 flex-wrap text-slate-800">
      <div class="relative  hidden h-screen rounded-md select-none flex-col justify-center bg-violet-800 text-center md:flex md:w-1/3">
        <img
          class="mx-auto w-56 max-w-lg rounded-lg object-cover"
          src={banner}
        />
        <div class="mx-auto  px-8 text-white">
          <p class="my-6 text-4xl font-bold leading-10">
            We'll do the{" "}
            <span class="truncate border-b-4 pb-1 border-white font-bold text-violet-300">
              heavy lifting
            </span>
          </p>
          <p class="mb-4 text-lg font-medium">Moving has never been easier</p>
        </div>
      </div>
      <div class="flex w-full flex-col md:w-2/3">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12">
          <a
            href="#"
            class="text-2xl font-extrabold text-violet-600 bg-white px-2 py-1"
          >
            {" "}
            heavylifting.com{" "}
          </a>
        </div>
        <div class="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
          <p class="text-center text-white text-3xl font-bold md:text-left">
            Hire us to do the moving
          </p>

          <form class="flex flex-col items-stretch pt-3 pb-8 md:pt-8">
            <div class="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <label class="block" for="name">
                <p class="mb-1 mt-2 text-sm text-gray-200">Name</p>
                <input
                  class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              <label class="block" for="phone">
                <p class="mb-1 mt-2 text-sm text-gray-200">Phone Number</p>
                <input
                  class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="phone"
                  placeholder="Enter your name"
                />
              </label>
              <label class="block" for="men">
                <p class="mb-1 mt-2 text-sm text-gray-200">Man Power</p>
                <select
                  class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your name"
                >
                  <option value="2">2 Men</option>
                  <option value="5" selected>
                    5 Men
                  </option>
                  <option value="10">10 Men</option>
                </select>
              </label>
              <label class="block" for="address">
                <p class="mb-1 mt-2 text-sm text-gray-200">Street Address</p>
                <input
                  class="w-full rounded-md border bg-white py-2 px-2 outline-none ring-violet-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>
              <label class="block sm:col-span-2" for="message">
                <p class="mb-1 mt-2 text-sm text-gray-200">Message</p>
                <textarea
                  class="h-32 w-full rounded-md border bg-white py-2 px-2 outline-none ring-violet-500 focus:ring-2"
                  type="text"
                  placeholder="Write your special requirements here"
                ></textarea>
              </label>
            </div>
            <div class="block">
              <label class="inline-block text-sm text-gray-200" for="">
                {" "}
                By clicking submit you agree to the{" "}
                <a class="underline" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              class="mt-6 rounded-full bg-violet-400 px-4 py-2 text-center text-base font-semibold font- shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-400 focus:ring-2 md:w-40"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
