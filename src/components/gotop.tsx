"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
      className={`btn btn-dark ${gotop ? "d-none" : "d-block"}`}
      style={{
        position: "fixed",
        bottom: "5rem",
        right: "1rem",
        zIndex: "500",
      }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
      <i className="fa-solid fa-arrow-up"></i>
    </Link>
  );
};
