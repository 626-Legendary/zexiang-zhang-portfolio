import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { sectionAccentThemes } from "../constants/sectionThemes";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./shared/SectionHeading";
import SectionPanel, { sectionBadgeClassName } from "./shared/SectionPanel";

const ExperienceCard = ({ experience, index }) => {
  const theme = sectionAccentThemes[index % 2];

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        borderRadius: "24px",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme.glow}`,
        filter: "drop-shadow(0 0 10px rgba(0, 206, 168, 0.18))",
      }}
      date={experience.date}
      dateClassName='text-secondary font-semibold'
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.12), 0 0 24px ${theme.glow}`,
      }}
      icon={
        <div className='flex h-full w-full items-center justify-center'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='h-[60%] w-[60%] object-contain'
          />
        </div>
      }
    >
      <SectionPanel
        glow={theme.glow}
        secondaryGlow={theme.secondaryGlow}
        glowPosition='top left'
        secondaryPosition='bottom right'
        glowStop='30%'
        secondaryStop='34%'
        gridSize={22}
        innerClassName='px-6 py-6 sm:px-7 sm:py-7'
      >
        <div>
          <div className='flex flex-wrap items-center gap-3'>
            <span className={sectionBadgeClassName}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className='rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-medium'
              style={{
                color: theme.accent,
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${theme.glow}`,
              }}
            >
              Career Track
            </span>
          </div>

          <h3 className='mt-4 text-white text-[24px] font-black leading-[1.15]'>
            {experience.title}
          </h3>
          <p className='mt-2 text-secondary text-[16px] font-semibold'>
            {experience.company_name}
          </p>

          <ul className='mt-5 space-y-3'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='rounded-[16px] border border-white/10 bg-black/20 px-4 py-3 text-white-100 text-[14px] leading-[24px] tracking-[0.01em] backdrop-blur-sm'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </SectionPanel>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <SectionHeading
        eyebrow='Professional Journey'
        title='Experience.'
        align='center'
      />

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='rgba(255, 255, 255, 0.12)'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
