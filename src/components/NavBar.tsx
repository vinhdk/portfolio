'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <section className="navbar_logo">
          <h1>Aeiforge</h1>
        </section>
        <section className="navbar_menu-desktop">
          <ul>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#work">Work</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section className="navbar_resume-desktop">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Download CV
          </button>
        </section>
        <section className="navbar_hamburger">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </section>
      </nav>
      {isMenuOpen && (
        <section className="navbar_shade">
          <section className="navbar_menu">
            <ul>
              <li>
                <Link href="#about">About</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#work">Work</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </section>
          <section className="navbar_resume">
            <button>Download CV</button>
          </section>
        </section>
      )}
    </>
  );
};

export default Navbar;
