import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer_tech-stack">
          Built with Nx, TypeScript, React.js, TailwindCSS, Framer Motion,
          Figma, and Vercel.
        </p>
        <Link
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_github-link">
          Star this project on Github{' '}
          <Image
            src="/icons/github.svg"
            alt="Github icon"
            width={20}
            height={20}
            className="footer_github-icon"
          />
        </Link>
        <p className="footer_copyright">© Quiet Node 2024</p>
        <p className="footer_language">
          <span className="footer_flag">🇻🇳</span> Vietnamese{' '}
          <span className="footer_flag">🇻🇳</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;