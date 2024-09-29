'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface Job {
  companyLogo: string;
  companyName: string;
  position: string;
  duration: string;
  description: string[];
  link: string;
}

interface WorkExperienceProps {
  jobs: Job[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ jobs }) => {
  const containerRef = useRef(null);

  return (
    <section 
      className="work-experience overflow-hidden"
      ref={containerRef}
    >
      <h2 className="numbered-heading">Experience</h2>
      <div className="work-experience__container">
        {jobs.map((job, index) => (
          <WorkExperienceItem key={index} job={job} index={index} />
        ))}
      </div>
    </section>
  );
};

const WorkExperienceItem: React.FC<{ job: Job; index: number }> = ({ job, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.section 
      id="experience"
      ref={itemRef}
      className="work-experience_item"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      <section className="work-experience_content">
        <section className="work-experience_left work-experience_no_logo">
          <h3 className="work-experience_company">{job.companyName}</h3>
          <p className="work-experience_duration">{job.duration}</p>
        </section>
        <section className="work-experience_left work-experience_logo">
          <Image src={job.companyLogo} alt={job.companyName} width={100} height={30} className="work-experience_logo" />
          <h3 className="work-experience_company">{job.companyName}</h3>
          <p className="work-experience_duration">{job.duration}</p>
        </section>
        <section className="work-experience_right">
          <h4 className="work-experience_position">{job.position}</h4>
          <ul className="work-experience_description">
            {job.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a href={job.link} className="work-experience_link">Link here</a>
        </section>
      </section>
    </motion.section>
  );
};

export default WorkExperience;