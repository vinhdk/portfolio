'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CustomCSSProperties } from 'src/types/common';

type Stack = {
  name: string;
  icon: string;
  frequency: number;
};

interface Props {
  stacks: Stack[];
  otherStacks: string[];
}

const Stack: React.FC<Props> = ({ stacks, otherStacks }) => {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const techRef = useRef(null);

  const containerControls = useAnimation();
  const skillsControls = useAnimation();
  const techControls = useAnimation();

  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.1 });
  const techInView = useInView(techRef, { once: false, amount: 0.1 });

  const [percentages, setPercentages] = useState<number[]>(stacks.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (skillsInView && !hasAnimated) {
      setHasAnimated(true);
      setPercentages(stacks.map(() => 0)); // Reset to 0 before starting animation

      stacks.forEach((stack, index) => {
        const targetPercentage = getFrequencyPercentage(stack.frequency);
        const duration = 2000; // 2 seconds
        const steps = 60; // Update 60 times per second
        const increment = targetPercentage / steps;
        let currentPercentage = 0;

        const timer = setInterval(() => {
          currentPercentage += increment;
          if (currentPercentage >= targetPercentage) {
            clearInterval(timer);
            currentPercentage = targetPercentage;
          }
          setPercentages(prev => {
            const newPercentages = [...prev];
            newPercentages[index] = currentPercentage;
            return newPercentages;
          });
        }, duration / steps);
      });
    } else if (!skillsInView) {
      setHasAnimated(false); // Reset when out of view
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsInView, stacks]);

  useEffect(() => {
    if (containerInView) {
      containerControls.start('visible');
    } else {
      containerControls.start('hidden');
    }
  }, [containerControls, containerInView]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start('visible');
    } else {
      skillsControls.start('hidden');
    }
  }, [skillsControls, skillsInView]);

  useEffect(() => {
    if (techInView) {
      techControls.start('visible');
    } else {
      techControls.start('hidden');
    }
  }, [techControls, techInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const techContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const getFrequencyText = (frequency: number) => {
    switch (frequency) {
      case 1:
        return 'Rarely';
      case 2:
        return 'Occasionally';
      case 3:
        return 'Sometimes';
      case 4:
        return 'Often';
      case 5:
        return 'Very Often';
      default:
        return 'Unknown';
    }
  };

  const getFrequencyPercentage = (frequency: number) => {
    const maxFrequency = 5;
    return (frequency / maxFrequency) * 100;
  };

  return (
    <motion.section
      id="stack"
      ref={containerRef}
      initial="hidden"
      animate={containerControls}
      variants={containerVariants}
      className="skills">
      <h2
        className="numbered-heading"
        style={{ '--section-number': 2 } as CustomCSSProperties}>
        Stack
      </h2>
      <motion.section
        ref={skillsRef}
        variants={skillsVariants}
        initial="hidden"
        animate={skillsControls}
        className="skills_grid">
        {stacks.map((stack, index) => (
          <motion.section
            key={index}
            variants={itemVariants}
            className="skills_item">
            <div className="skills_header">
              <Image
                src={stack.icon}
                alt={stack.name}
                width={24}
                height={24}
                className="skills_icon"
              />
              <h3 className="skills_name">{stack.name}</h3>
            </div>
            <div className="skills_content">
              <div className="skills_frequency">
                <div>
                  <span className="skills_frequency-text">
                    {getFrequencyText(stack.frequency)}
                  </span>
                </div>
                <div>
                  <span className="skills_frequency-percentage">
                    {percentages[index].toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="skills_bar">
                <motion.section
                  initial={{ width: 0 }}
                  animate={{
                    width: `${percentages[index]}%`,
                  }}
                  transition={{ duration: 2 }}
                  className="skills_bar-fill"></motion.section>
              </div>
            </div>
          </motion.section>
        ))}
      </motion.section>
      <h3 className="skills_other-tech">Other Technologies</h3>
      <motion.section
        ref={techRef}
        variants={techContainerVariants}
        initial="hidden"
        animate={techControls}
        className="skills_other-tech-container">
        {otherStacks.map((tech, index) => (
          <motion.span
            key={index}
            variants={techVariants}
            className="skills_other-tech-item">
            {tech}
          </motion.span>
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Stack;
