/* eslint-disable @next/next/no-img-element */
import React from "react";

export const About = () => {
  return (
    <div
      id="about"
      className="bg-white min-h-screen justify-center items-center flex"
    >
      <div className="container m-auto px-6 text-base text-gray-500 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 m-auto md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="/assets/coding3.gif"
              alt="image"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <h1 className="text-indigo-600 text-xl font-semibold mt-6">
              About
            </h1>
            <p className="text-base text-gray-500">
              I started with reactjs and until today I only prefer him and yet I
              tried so many others such as Vuejs, Angular etc... What I like
              about react is its development philosophy as well as its
              architecture and its community.
            </p>
            <p className="mt-4 text-base text-gray-500">
              {" "}
              Recently I became interested in mobile application development
              with react native and I like it but we will see in the future
              which branch I will specialize in mobile or web? Right now I do
              both.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
