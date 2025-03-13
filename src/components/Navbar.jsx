import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[10vh] bg-transparent text-yellow-300  w-screen flex justify-between fixed z-20 items-center px-5 rounded-b-2xl">
      <div className="flex items-center gap-10">
        <a href="/" className="font-extrabold font-ethnocentric">SLUGNPLUG</a>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>


      </div>

      <div
  className={`flex-col md:flex-row md:flex md:gap-0 items-center ${
    isOpen ? "flex backdrop-blur-md bg-black/50" : "hidden"
  } absolute md:static top-[10vh] font-bold left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none z-50`}
  >
  <a href="/gallery"  className="px-4 font-sarpanch  uppercase py-2 md:py-0">
    Events
  </a>
  <a href="/update"  className="px-4 font-sarpanch uppercase py-2 md:py-0">
    Registrations
  </a>
  <a href="/team"  className="px-4 font-sarpanch uppercase py-2 md:py-0">
    Our Team
  </a>
  <a href="/about"  className="px-4 font-sarpanch uppercase py-2 md:py-0">
    About Us
  </a>
</div>
    </div>
  );
};

export default Navbar;
