"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, User, Mail, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the slide-down animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "About", icon: Mail, href: "/about" },
    { name: "Services", icon: User, href: "/services" },
    { name: "Contact", icon: Mail, href: "/contact" },
    { name: "Portfolio", icon: Briefcase, href: "/portfolio" },
    { name: "blogs", icon: Briefcase, href: "/blogs" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`absolute top-0 left-0 right-0 py-[20px] z-50 bg-black/95 backdrop-blur-md border-b border-white/20 transition-all duration-700 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href={"/"}
              className="flex cursor-pointer items-center space-x-2"
            >
              <Image src={"/logo.svg"} alt="logo" width={160} height={50} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-white transition-colors duration-300 ease-in-out hover:scale-105 transform rounded-lg px-4 py-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #ffffff, #000000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: `${index * 100 + 300}ms`,
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Link href="/book-meetings">
              <button className="cursor-pointer bg-gradient-to-b hidden lg:flex from-[#521ED6] to-[#7E56E2] text-white px-6 py-2 rounded-[10px] border-1 border-[#8D6AE6] transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25">
                Get in Touch
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleDrawer}
                className="text-white hover:text-purple-400 transition-colors duration-300 p-2"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80  max-w-sm bg-black/95 backdrop-blur-md border-l border-gray-800 z-200 transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <Image src={"/logo.svg"} alt="logo" width={160} height={50} />
            </div>
            <button
              onClick={closeDrawer}
              className="text-white hover:text-purple-400 transition-colors duration-300 p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="flex-1 py-8">
            <nav className="space-y-2 px-6">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeDrawer}
                    className={`flex items-center space-x-3 hover:bg-gray-800/50 rounded-lg px-4 py-3 transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                      isOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ffffff, #000000)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transitionDelay: isOpen
                        ? `${index * 100 + 200}ms`
                        : "0ms",
                    }}
                  >
                    <IconComponent
                      className="h-5 w-5"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #ffffff, #000000)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    />
                    <span className="text-lg">{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-gray-800">
            <Link href="/book-meetings">
              <button
                onClick={closeDrawer}
                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 ease-in-out hover:scale-105 transform shadow-lg hover:shadow-purple-500/25 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isOpen ? "600ms" : "0ms",
                }}
              >
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
