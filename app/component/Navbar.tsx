
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/dadsLogo.png";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src={logo}
            alt="Logo"
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full sm:text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
