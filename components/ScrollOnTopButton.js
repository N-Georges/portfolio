import { useEffect, useState } from "react";
import { classNames } from "../utils/classNames";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 620) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed top-10 right-5 z-50">
      <div className={classNames(isVisible ? "opacity-100" : "opacity-0", "")}>
        <Dropdown label="Menu" placement="bottom">
          <Link href="/">
            <Dropdown.Item>Home</Dropdown.Item>
          </Link>
          <Link href="#about">
            <Dropdown.Item>About</Dropdown.Item>
          </Link>
          <Link href="#services">
            <Dropdown.Item>Services</Dropdown.Item>
          </Link>
          <Link href="#project">
            <Dropdown.Item>Project</Dropdown.Item>
          </Link>
          <Link href="#contact">
            <Dropdown.Item>Contact</Dropdown.Item>
          </Link>
        </Dropdown>
      </div>
      {/* <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-indigo-600 hover:bg-indigo-500 focus:ring-blue-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default ScrollToTop;
