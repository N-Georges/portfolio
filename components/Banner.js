/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Header } from "./Header";
export const Banner = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 -z-10 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Header />
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block xl:inline">
                  I enjoy <span className="text-indigo-600">building</span> and
                </span>{" "}
                <span className="text-indigo-600">designing</span>{" "}
                <span className="">for the</span> web{" "}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Hello, I am a junior react developer and I like to create mobile
                applications with native react, I am self-taught and motivate to
                learn new things.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Project
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:inline">
        {/* Decorative image grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full"
        >
          <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                  <img
                    src="/assets/coding.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/reactjs.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/coding3.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/js.gif"
                    alt="javascript gif"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/coding4.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/mobile.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <img
                    src="/assets/coding2.gif"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
