/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { data } from "../Data";
export const Project = () => {
  return (
    <section id="project" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-600 dark:text-white">
            Project
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the entire collection of my projects from my beginnings as a
            web developer until now
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="md:w-[40%]  md:h-full ">
                <a href="#">
                  <img
                    className="w-full  rounded-lg sm:rounded-none h-full sm:rounded-l-lg"
                    src={item.picture}
                    alt="Bonnie Avatar"
                  />
                </a>
              </div>
              <div className="p-5  md:w-[60%]">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{item.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400 md:text-sm">
                  {item.stack.join(" - ")}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {item.excerpt}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href={item?.demoUrl}
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <BiLinkExternal className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={item.githubUrl}
                      target={"_blank"}
                      rel="noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
