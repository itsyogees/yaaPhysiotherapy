"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false); // Ensures menu is closed when resizing to a larger screen
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check screen size on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(false); // Close the menu on link click only if it's in mobile mode
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navLogo}>
          <h2>
            <Link href="/">
              <Image src={"/image/Component 3.png"} width={60} height={60} />{" "}
              YAA Physiotherapy
            </Link>
          </h2>
          <div className={styles.navTime}>
            <p>Opening Hours: 9 AM - 6 PM</p>
          </div>
        </div>

        <div className={styles.navToggle} onClick={toggleMenu}>
          {isOpen ? <GrClose /> : <SlMenu />}
        </div>
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/AboutPage" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/ServicePage" onClick={closeMenu}>
                Our Service
              </Link>
            </li>
            <li>
              <Link href="/ContactUs" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/CareerPage" onClick={closeMenu}>
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
