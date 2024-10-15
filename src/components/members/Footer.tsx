import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer_tech-stack">
          Built with Nx, TypeScript, NextJS, TailwindCSS, Framer Motion, Three Fiber,
          Figma, and Vercel.
        </p>
        <p className="footer_language">
          <span className="footer_flag">🇻🇳 </span> Vietnamese{' '}
          <span className="footer_flag">🇻🇳 </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
