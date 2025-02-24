import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./contect";

const Footer = () => {
  return (
    <footer className="mt-5">
      <hr />
      <section className="container py-3 grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2   grid-cols-2 justify-between  ">
        <Link href="/" className="content-center  justify-center w-25">
          <Image
            src="/logo.png"
            alt=" logo.png"
            width="70"
            height="70"
            priority
            className="w-20 h-auto"
          />
        </Link>
        <div className=" flex flex-col ">
          <div className="font-bold mb-2 underline">Company</div>
          <Link href="/about" className="my-2 text-[.9rem]">
            About
          </Link>
          <Link href="/features" className="my-2 text-[.9rem]">
            Features
          </Link>
          <Link href="/techstack" className="my-2 text-[.9rem]">
            Tech Stack
          </Link>
          <Link href="/terms&condition" className="my-2 text-[.9rem]">
            Terms & Conditions
          </Link>
        </div>
        <div >
          <div className="font-bold mb-2 underline">Connect US</div>
          <div className="connect-us flex justify-start">
            <Link
              href="https://www.linkedin.com/in/suraj-jaiswal-1518a5275/"
              target="blenk"
              className="my-2 text-[.9rem] fs-5 ">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              href="https://github.com/surajjaiswal-cmd"
              target="blenk"
              className="my-2 text-[.9rem] mx-4 fs-5">
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-2 underline">Send Message</div>
          <div className="connect-us ">
            <ContactForm />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
