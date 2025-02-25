"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export const GoTop = () => {
  const [gotop, setGotop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setGotop(false);
      } else {
        setGotop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="#"
      className={`btn btn-white border shadow-md ${gotop ? "d-none" : "d-block"}`}
      style={{
        position: "fixed",
        bottom: "4rem",
        right: "1rem",
        zIndex: "500",
        padding: ".5rem",
      }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
      <FaArrowUpLong />
    </Link>
  );
};
