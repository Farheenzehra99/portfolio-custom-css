// "use client";
// import Link from "next/link";
// import React from "react";
// import { AiOutlineCloudDownload } from "react-icons/ai";
// import '@/styles/navbar.css'; // importing the CSS file

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <header className="navbar-header">
//         <div className="navbar-content">
//           <Link href="" className="logo-link">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="logo-image"
//             />
//           </Link>
//           <nav className="navbar-links">
//             <Link href="/" className="nav-item">Home</Link>
//             <Link href="/about" className="nav-item">About</Link>
//             <Link href="/contact" className="nav-item">Contact</Link>
//           </nav>
//           <a href="/cv/Farheen Zehra Resume.pdf">
//             <button className="cv-button">
//               Download CV
//               <AiOutlineCloudDownload className="download-icon" />
//             </button>
//           </a>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "@/styles/navbar.css"; // Importing the custom CSS

export const navbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  // {
  //   title: "Skills",
  //   path: "/skills",
  // },
  // {
  //   title: "Projects",
  //   path: "/projects",
  // },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="logo-container">
          <div className="logo-wrapper">
            <Image
              src="/images/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
              className="logo-image"
            />
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div className="menu-toggle">
          {!isNavbarOpen ? (
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="menu-button"
            >
              <Bars3Icon className="menu-icon" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="menu-button"
            >
              <XMarkIcon className="menu-icon" />
            </button>
          )}
        </div>

        {/* Desktop Links */}
        <div className="navbar-links-desktop">
          <ul className="navbar-links-list">
            {navbarLinks.map((link, index) => (
              <li key={index} className="navbar-link-item">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isNavbarOpen && <MenuOverlay links={navbarLinks} />}
    </nav>
  );
};

export default Navbar;
