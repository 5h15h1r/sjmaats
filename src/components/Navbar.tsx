"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/members", label: "Members" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 mb-2 w-full bg-blue-900 shadow-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 -960 960 960"
            fill="#ffffff"
          >
            <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" />
          </svg>
          <p className="ml-1 text-xs font-bold text-white md:text-lg">SJMAA</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <button className="text-sm text-white hover:text-gray-300">
            Log-in
          </button>
          <button className="rounded-md bg-white px-4 py-2 text-sm text-blue-900 hover:bg-gray-100">
            Sign-Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-11 z-50 w-full transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 bg-blue-900 px-2 pb-3 pt-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="block transform rounded-md px-3 py-2 text-base text-white opacity-0 transition-all duration-300 ease-in-out hover:bg-blue-800"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col space-y-2 px-3">
            <button
              className="w-full transform rounded-md px-3 py-2 text-left text-base text-white opacity-0 transition-all duration-300 ease-in-out hover:bg-blue-800"
              style={{
                transitionDelay: `${navLinks.length * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              Log-in
            </button>
            <button
              className="w-full transform rounded-md bg-white px-3 py-2 text-left text-base text-blue-900 opacity-0 transition-all duration-300 ease-in-out hover:bg-gray-100"
              style={{
                transitionDelay: `${(navLinks.length + 1) * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
