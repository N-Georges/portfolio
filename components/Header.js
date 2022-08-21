/* eslint-disable @next/next/no-img-element */
import { Navbar } from "flowbite-react";
import React from "react";

export const Header = () => {
  return (
    <div className="py-1 px-5 bg-white bg-opacity-0 ">
      <Navbar className="bg-white bg-opacity-100" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/assets/logo1.png"
            className="mr-3 h-6 sm:h-9"
            alt="mon Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
          <Navbar.Link href="#project">Project</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
