'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  HeartHandshake,
  LineChart,
} from "lucide-react";

export const Header = ({ hasScrolled }: { hasScrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About Company", icon: Info, href: "/about" },
    { name: "Major Business", icon: Briefcase, href: "/business" },
    { name: "Sustainability", icon: HeartHandshake, href: "/sustainability" },
    { name: "Investments", icon: LineChart, href: "/investment" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
        px-[16px] md:px-8 py-4 transition-all duration-300
        ${hasScrolled ? "!bg-white shadow-md" : "bg-transparent"}
      `}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            width={160}
            height={30}
            src={
              hasScrolled
                ? "/farmnegy-all-black.PNG"
                : "/farmnegy-all-white.PNG"
            }
            alt="Logo"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center">
          <ul className="flex flex-row items-center space-x-8 mr-8">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`font-light text-2xl transition-colors duration-300 ${
                    hasScrolled
                      ? "text-black hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      
        <div className="flex items-center gap-6">
          <select
            className={`text-2xl bg-transparent outline-none appearance-none ${
              hasScrolled ? "text-black" : "text-white"
            }`}
          >
            <option value="EN">EN</option>
            <option value="DE">DE</option>
            <option value="CN">CN</option>
          </select>

          <div
            onClick={toggleMobileMenu}
            className={`cursor-pointer ${
              hasScrolled ? "text-black" : "text-white"
            }`}
          >
            <Menu className="md:h-14 md:w-12 w-8 h-8" />
          </div>
        </div>
      </header>


      <aside
        className={`fixed top-0 right-0 h-screen z-[99] transition-transform duration-300 bg-white shadow-lg
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        w-full md:w-[40%]`}
      >
        <div className="flex justify-end p-4">
          <X
            className="h-8 w-8 text-gray-700 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <nav className="flex flex-col px-8 gap-6 mt-8">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 text-xl transition"
              >
                <Icon className="w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[98] md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};
