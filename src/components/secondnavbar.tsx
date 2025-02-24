"use client";
import React, { useState } from "react";
import HandelSingInOut from "./handelsinginout";
import Link from "next/link";
import ContactForm from "./contect";

interface Session {
  id: string;
  user?: {
    name?: string;
  };
}

const SecondNavbar = ({ session }: { session?: Session }) => {
  const [show, setShow] = useState(false);
  const [delayedShow, setDelayedShow] = useState(false);

  function handleShowClick() {
    if (!show) {
      setShow(!show);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setDelayedShow(!delayedShow);
      }, 20);
    } else {
      setDelayedShow(!delayedShow);
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setShow(!show);
      }, 200);
    }
  }

  return (
    <div className="">
      <button className={`me-3  ${show && "d-none"}`} onClick={handleShowClick}>
        <i className="fa-solid fa-bars fs-3"></i>
      </button>

      <div className={`second-navbar-nav ${show && "d-flex"}`}>
        <div
          className={`navbar-blank-part bg-praimary ${delayedShow ? "show" : ""} `}
          onClick={handleShowClick}></div>
        <div className={`navbar-cart-border ${delayedShow ? "show" : ""} `}>
          <div className={`navbar-cart-part ${delayedShow ? "show" : ""} `}>
            <button className="navbar-cart-close" onClick={handleShowClick}>
              ✕
            </button>
            <hr className="my-2" />
            <HandelSingInOut
              session={session}
              handleShowClick={handleShowClick}
            />

            <Link href={"/features"} onClick={handleShowClick}>
              <span className=" text-[1.50rem]">Features</span>
            </Link>
            <hr className="my-2" />
            <Link href={"/techstack"} onClick={handleShowClick}>
              <span className=" text-[1.50rem]">Tech Stack</span>
            </Link>
            <hr className="my-2" />
            <Link href={"/terms&condition"} onClick={handleShowClick}>
              <span className=" text-[1.50rem]">Terms & Conditions</span>
            </Link>
            <hr className="my-2" />
            <Link href={"/features"} onClick={handleShowClick}>
              <span className=" text-[1.50rem]">Features</span>
            </Link>
            <hr className="my-2" />

            <div>
              <span className=" text-[1.50rem]">Connect US</span>
              <span className="connect-us ">
                <Link
                  href="https://www.linkedin.com/in/suraj-jaiswal-1518a5275/"
                  target="blenk"
                  className=" text-[1.50rem] px-4 ">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link
                  href="https://github.com/surajjaiswal-cmd"
                  target="blenk"
                  className=" text-[1.50rem] px-4 ">
                  <i className="fa-brands fa-github"></i>
                </Link>
              </span>
            </div>
            <hr className="my-2" />
            <div>
              <div className=" text-[1.50rem] ">Send Message</div>
              <div className="connect-us mt-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
