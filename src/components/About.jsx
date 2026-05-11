import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { sectionAccentThemes } from "../constants/sectionThemes";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./shared/SectionHeading";
import SectionPanel, { sectionBadgeClassName } from "./shared/SectionPanel";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const theme = sectionAccentThemes[index % 4];

  return (
    <Tilt
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.18, 0.75)}
        className='w-full'
      >
        <SectionPanel
          glow={theme.glow}
          gridSize={18}
          backgroundClassName='bg-tertiary'
          innerClassName='min-h-[280px] px-6 py-6'
        >
          <div className='flex h-full flex-col'>
            <div className='flex items-start justify-between gap-4'>
              <span className={sectionBadgeClassName}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className='flex h-14 w-14 items-center justify-center rounded-full border border-white/10'
                style={{
                  backgroundColor: theme.soft,
                  boxShadow: `0 0 0 1px ${theme.glow}`,
                }}
              >
                <img
                  src={icon}
                  alt={title}
                  className='w-7 h-7 object-contain'
                />
              </div>
            </div>

            <div className='mt-10'>
              <p className='text-[11px] uppercase tracking-[0.24em] text-secondary'>
                Core Focus
              </p>
              <h3 className='mt-3 max-w-[14ch] text-white text-[22px] font-black leading-[1.15]'>
                {title}
              </h3>
            </div>
          </div>
        </SectionPanel>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <SectionHeading eyebrow='Introduction' title='About Me.' />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        <p>My name is Zexiang Zhang. I started programming early with Pascal and Visual Basic, and over time that curiosity grew into about five years of professional experience as a developer. I mainly work across frontend and backend, and have also explored areas like AI, database design, and system architecture. I enjoy building clean, reliable systems and tend to focus on structured, specification-driven development, especially as AI tools continue to speed up the coding process. I’m always interested in learning new technologies and improving how systems are designed and scaled. Outside of tech, I like staying active through fitness and experimenting with cooking.</p>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
