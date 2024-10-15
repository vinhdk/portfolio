'use client';

import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

interface AboutProps {
  fullName: string;
  description: string[];
  image: string;
  technologies: string[];
}

const About: FC<AboutProps> = ({
  fullName,
  description,
  image,
  technologies,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll(
        '.animate-up, .animate-right'
      );
      animatedElements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleShowMore = () => {
    const stackSection = document.getElementById('stack');
    if (stackSection) {
      stackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderDescription = (text: string) => {
    const parts = text.split(/(\{highlight}.*?\{\/highlight})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{highlight}') && part.endsWith('{/highlight}')) {
        const highlightedText = part
          .replace('{highlight}', '')
          .replace('{/highlight}', '');
        return (
          <span key={index} className="highlight">
            {highlightedText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section ref={sectionRef} id="about" className="about overflow-hidden">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about_inner">
        <section className="about_content animate-up">
          {description.map((paragraph, index) => (
            <p key={index}>{renderDescription(paragraph)}</p>
          ))}
          <p>{'Here are a few technologies I\'ve been working with recently:'}</p>
          <ul className="about_skills">
            {technologies.map((tech, index) => (
              <li className="highlight" key={index}>
                {tech}
              </li>
            ))}
          </ul>
          <button onClick={handleShowMore} className="show-more-btn">
            Show more
          </button>
        </section>
        <section className="about_image animate-right">
          <div className="about_image_wrapper">
            <Image
              src={image}
              alt={`${fullName}'s profile picture`}
              width={300}
              height={300}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
