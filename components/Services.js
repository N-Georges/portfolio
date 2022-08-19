/* eslint-disable react/no-unknown-property */
import React from "react";
import { AiFillApi, AiOutlineApi } from "react-icons/ai";
import {
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiMaterialui,
  SiStyledcomponents,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiDocker,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
export const Services = () => {
  return (
    <section id="services" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-600 dark:text-white">
            Services
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2  md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Front-end
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              In web development, the notion of &quot;front end&quot; refers to
              all the elements visible and accessible directly on a site or an
              application.{" "}
              <a
                href="https://linkweb.fr/creation-site-internet-toulouse/front-end/#:~:text=Qu'est%2Dce%20que%20le,ou%20une%20application%20web%20mobile)."
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-700 cursor-pointer"
              >
                source
              </a>
            </p>
            <ul className="my-5 space-y-3">
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiReact className="w-5 h-5 text-[#61DAFB] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://fr.reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Reactjs
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <TbBrandNextjs className="w-5 h-5 text-[#202020] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Nextjs
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiLaravel className="w-5 h-5 text-[#FF2D20] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://laravel.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Laravel
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiTailwindcss className="w-5 h-5 text-[#38BDF8] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  TailwindCSS
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiMaterialui className="w-5 h-5 text-[#007FFF] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://mui.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Materialui
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiStyledcomponents className="w-5 h-5 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://styled-components.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Styledcomponents
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <AiFillApi className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Back-end</h3>
            <p className="text-gray-500 dark:text-gray-400">
              In summary, the backend is all the part that the user does not
              see, but which allows him to perform actions on a site or an
              application.{" "}
              <a
                href="https://linkweb.fr/creation-site-internet-toulouse/front-end/#:~:text=Qu'est%2Dce%20que%20le,ou%20une%20application%20web%20mobile)."
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-700 cursor-pointer"
              >
                source
              </a>
            </p>
            <ul className="my-5 space-y-3">
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiMysql className="w-5 h-5 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://www.mysql.com/fr/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Mysql
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiMongodb className="w-5 h-5 text-[#116149] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Mongodb
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiGraphql className="w-5 h-5 text-[#E00097] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://graphql.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Graphql
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <AiOutlineApi className="w-5 h-5 text-blue-500 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  API
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <FcLinux className="w-5 h-5 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://www.linux.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Linux
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <div className="rounded-lg bg-primary-100 p-1">
                  <SiDocker className="w-5 h-5 text-[#228EE1] lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-lg hover:underline"
                >
                  Docker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
