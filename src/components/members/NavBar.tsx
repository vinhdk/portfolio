import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY === 0 || e.clientY <= 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <nav className="navbar">
        <section className="navbar_logo">
          <h1>Aeiforge</h1>
        </section>
        <section className="navbar_menu desktop important">
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
        <section className="navbar_resume desktop important">
          <button className="shaded-button">
            Download CV
          </button>
        </section>
        <section className="navbar_hamburger">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src={isMenuOpen ? '/icons/close.svg' : '/icons/hamburger.svg'}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
        </section>
      </nav>
      {isMenuOpen && (
        <>
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
            <button className="shaded-button">Download CV</button>
          </section>
        </>
      )}
    </header>
  );
};

export default Navbar;
