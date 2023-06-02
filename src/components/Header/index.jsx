import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";


function smoothScrollTo(target) {
  const offsetTop = target.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
}

export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      className="w-full top-0 py-10 text-white text-xs z-30 lg:tracking-widest items-center  flex justify-between px-8 fixed"
      style={{background:"linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"}}
    >
      
      <div className="flex items-center md:m-auto sm:gap-10 gap-8 md:w-9/12 sm:m-auto sm:flex justify-between">
        <a href="/#home">
          <img
            src={Logo}
            widht={75}
            height={80}
            alt="logo"
            onClick={() => {}}
            className="w-24 sm:w-32"
          />
        </a>

        <nav className="hidden sm:items-center sm:justify-between justify-between md:flex w-96 sm:gap-4 sm:w-2/3 ">
          <a href="/#sobre">
            <p className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              QUEM SOMOS
            </p>
          </a>
          <a href="/#cases">
            <p className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              CASES
            </p>
          </a>
          <a href="/#produtos">
            <p className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              PRODUTOS
            </p>
          </a>
          <a href="/#portifolio">
            <p className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              PORTIFÓLIO
            </p>
          </a>
          <a href="/#depoimentos">
            <p className="hover:text-blue-500 hover:underline hover:underline-offset-4 transition ease-in delay-75 ">
              DEPOIMENTOS
            </p>
          </a>
        </nav>
      </div>

      <section className="MOBILE-MENU flex text-right md:hidden">
      <div
        className="space-y-2"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <p className="block h-0.5 w-8 animate-pulse bg-blue-500 hover:bg-blue-400"></p>
        <p className="block h-0.5 w-8 animate-pulse bg-blue-500 hover:bg-blue-400"></p>
        <p className="block h-0.5 w-8 animate-pulse bg-blue-500 hover:bg-blue-400"></p>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
        </div>
        <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <a onClick={() => setIsNavOpen(false)} href="/#home">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              HOME
            </p>
          </a>
          <a onClick={() => setIsNavOpen(false)} href="/#sobre">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              QUEM SOMOS
            </p>
          </a>
          <a onClick={() => setIsNavOpen(false)} href="/#cases">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              CASES
            </p>
          </a>
          <a onClick={() => setIsNavOpen(false)} href="/#produtos">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              PRODUTOS
            </p>
          </a>
          <a onClick={() => setIsNavOpen(false)} href="/#portifolio">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              PORTIFÓLIO
            </p>
          </a>
          <a onClick={() => setIsNavOpen(false)} href="/#depoimentos">
            <p className="hover:underline hover:underline-offset-4 transition ease-in delay-75">
              DEPOIMENTOS
            </p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hideMenuNav {
          display: none;
        }

        .showMenuNav {
          display: flex;
          align-items: center;
          position: absolute;
          top: 5rem;
          right: 0rem;
          border-radius:5%;
          color: white;
          background: blue;
          z-index: 99;
          padding: 1.5rem;
          animation: fadeInDown 0.5s ease-in-out;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotateX(-90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `}</style>
    </section>
    </header>
  );
}
