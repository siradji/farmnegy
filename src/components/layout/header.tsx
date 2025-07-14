'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

export const Header = ({
  hasScrolled,
  setHasScrolled,
}: {
  hasScrolled: boolean;
  setHasScrolled: (value: boolean) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setHasScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
        px-[16px] md:px-8 py-4 transition-all duration-300
        ${hasScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          width={160}
          height={30}
          src={hasScrolled ? "/farmnegy-all-black.PNG" : "/farmnegy-all-white.PNG"}
          alt="Logo"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center">
        <ul className="flex flex-row items-center space-x-8 mr-8">
          {["About Company", "Major Business", "Sustainable Management", "Investment Information"].map((text, i) => (
            <li key={i}>
              <Link
                href="/"
                className={`font-light text-2xl transition-colors duration-300 ${
                  hasScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                }`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Selector & Mobile Toggle */}
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

        {/* Mobile Menu Icon */}
        <div
          onClick={toggleMobileMenu}
          className={`cursor-pointer ${hasScrolled ? "text-black" : "text-white"}`}
        >
          <Menu className="h-8 w-8" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden z-50">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">About</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">Business</Link>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">Sustainability</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
