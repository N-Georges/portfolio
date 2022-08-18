/* eslint-disable @next/next/no-img-element */
import { Navbar } from "flowbite-react";
import React from "react";

export const Header = () => {
  return (
    <div className="py-1 px-5">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/assets/logo1.png"
            className="mr-3 h-6 sm:h-9"
            alt="mon Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#about">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Project</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
