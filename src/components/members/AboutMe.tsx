'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { CustomCSSProperties } from 'src/types/common';
import renderDescription from 'src/utils/common';
import Greeting from '../3D/Greeting';
import Laying from '../3D/Laying';
import WorldMap from '../3D/WorldMap';

type AboutMeProps = {
  modelUrl: string;
  description: string[];
  expectations: string[];
  keyTechnologies: { name: string; icon: string }[];
  keyTechnologiesDescription: string;
  futureTechnologies: { name: string; icon: string }[];
  futureTechnologiesDescription: string;
  linkProps: Record<string, { href: string }>;
};

const AboutMe = ({
  modelUrl,
  description,
  expectations,
  keyTechnologies,
  keyTechnologiesDescription,
  futureTechnologies,
  futureTechnologiesDescription,
  linkProps,
}: AboutMeProps) => {
  const containerRef = useRef(null);
  const containerControls = useAnimation();
  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (containerInView) {
      containerControls.start('visible');
    } else {
      containerControls.start('hidden');
    }
  }, [containerControls, containerInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      ref={containerRef}
      initial="hidden"
      animate={containerControls}
      variants={containerVariants}
      className="about"
      id="about">
      <h2
        className="numbered-heading"
        style={{ '--section-number': 1 } as CustomCSSProperties}>
        About Me
      </h2>
      <section className="about_container">
        <motion.section
          className="about_world-map"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible">
          <WorldMap />
        </motion.section>

        <section className="about_technologies">
          <motion.section className="key-technologies" variants={itemVariants}>
            {keyTechnologies.map((tech, index) => (
              <div key={index} className="key-technologies_icon">
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <span className="key-technologies_icon-name">{tech.name}</span>
              </div>
            ))}
          </motion.section>
          <motion.p className="p-6" key={0} variants={itemVariants}>
            {renderDescription(keyTechnologiesDescription, linkProps)}
          </motion.p>
        </section>

        <section className="about_technologies">
          <motion.section
            className="future-technologies"
            variants={itemVariants}>
            {futureTechnologies.map((tech, index) => (
              <div key={index} className="future-technologies_icon">
                <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                <span className="future-technologies_icon-name">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.section>
          <motion.p className="p-6" key={0} variants={itemVariants}>
            {renderDescription(futureTechnologiesDescription, linkProps)}
          </motion.p>
        </section>

        <section className="about_greeting">
          <section className="about_greeting_model">
            {<Greeting position={[0, 0, 0]} modelUrl={modelUrl} />}
          </section>
          {description.map((paragraph, index) => (
            <motion.p className="p-6" key={index} variants={itemVariants}>
              {renderDescription(paragraph, linkProps)}
            </motion.p>
          ))}
        </section>

        <section className="about_expectations">
          <section className="about_expectations_model">
            {
              <Laying
                position={[-0.8, 2, 0.2]}
                scale={2.5}
                modelUrl={modelUrl}
              />
            }
          </section>
          {expectations.map((paragraph, index) => (
            <motion.p className="p-6" key={index} variants={itemVariants}>
              {renderDescription(paragraph, linkProps)}
            </motion.p>
          ))}
        </section>
      </section>
    </motion.section>
  );
};

export default AboutMe;
