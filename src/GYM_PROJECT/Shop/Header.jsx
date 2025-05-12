import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

export default function GenexHero() {
  const { setShowCart } = useCart();

  const handleBasketClick = () => {
    setShowCart(true);
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <head>
        <title>BORCELLE - Energize Your Workout</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Oswald:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="text-white font-[Oswald]">
        <header className="[box-shadow:inset_0px_0px_1000px_70px_#000000] bg-[#0e1c00] bg-[url('https://r4.wallpaperflare.com/wallpaper/735/263/743/muscle-muscle-training-dumbbells-wallpaper-d5a111a7241c463514cbb9a01b8fdf53.jpg')] bg-right bg-no-repeat bg-cover min-h-screen px-8 lg:px-20 py-8 flex flex-col justify-start items-start text-left relative">
          <div
            className={`${
              isFixed
                ? "fixed top-0 left-0 right-0 z-50 px-8 lg:px-20 py-4 shadow-[0px_10px_30px_black] backdrop-blur-md bg-[rgba(20,30,42,0.75)] rounded-b-[5px]"
                : ""
            } flex justify-between items-center w-full mb-12 font-[Anton] transition-all duration-300`}
          >
            <nav className="flex gap-6 text-sm items-center">
              <a href="#shopAll" className="hover:underline">
                Shop All
              </a>
              <Link to={'/'} className="hover:underline">
                Home
              </Link>
              <Link to={"/ai-trainer"} className="hover:underline">
                AI-Trainer
              </Link>
            </nav>
            <h1 className="text-2xl font-bold">BORCELLE</h1>
            <nav className="flex gap-6 text-sm items-center">
              <a href="#message" className="hover:underline">
                Message
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
              <div className="basket" onClick={handleBasketClick}>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </nav>
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 max-w-xl pl-8 lg:pl-20">
            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8 font-[Anton]">
              ENERGIZE YOUR
              <br />
              WORKOUT LIKE
              <br />
              NEVER BEFORE.
            </h2>
            <a href="#shopAll" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-300">
              ORDER NOW
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
