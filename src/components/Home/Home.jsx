import React from 'react'
import bg from "../../assets/bg1.jpg"
const Home = () => {
  return (
        <div class="flex min-h-screen w-screen  flex-col bg-gradient-to-l from-slate-800 to-violet-900">
        <div class="sm:my-2 mx-auto px-4  sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
          <div class="flex flex-col  items-center justify-between lg:flex-row">
            <div class="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div class="mb-6 max-w-xl">
                <div>
                  <p class="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 text-xs font-semibold uppercase tracking-wider text-gray-50">New and improved</p>
                </div>
                <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                  Streaming platform for{" "}
                  <span class="my-1 inline-block rounded bg-white px-2 text-violet-600"> fitness </span>
                  {" "}instructors
                </h2>
                <p class="text-base text-gray-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.</p>
              </div>
              <div class="flex flex-col items-center md:flex-row">
                <a href="/" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-violet-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-violet-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">Stream Now </a>
                <a href="/" aria-label="" class="inline-flex items-center font-semibold text-gray-50 underline-offset-2 transition-colors duration-200 hover:underline">Watch how it works</a>
              </div>
            </div>
            <div class="relative shadow-lg shadow-violet-700 lg:w-1/2">
            <img class="h-56 w-full rounded-lg object-cover shadow-lg sm:h-96" src={bg} alt="Gym Weights Background" />
              <a href="/" aria-label="Play Video" class="group absolute inset-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-30 transition-colors duration-300 hover:bg-opacity-10">
               
              </a>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Home