import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
