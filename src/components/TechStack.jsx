import React from "react";
import { motion } from "framer-motion";

import { techStackGroups } from "../constants/techStack";
import { sectionAccentThemes } from "../constants/sectionThemes";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./shared/SectionHeading";
import SectionPanel, { sectionBadgeClassName } from "./shared/SectionPanel";
import { fadeIn } from "../utils/motion";

const getSkillAbbr = ({ name, abbr }) => {
  if (abbr) {
    return abbr;
  }

  const words = name.split(/[\s/.-]+/).filter(Boolean);

  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  return name.replace(/[^A-Za-z0-9+#]/g, "").slice(0, 2).toUpperCase();
};

const StatCard = ({ value, label, detail }) => (
  <div className='rounded-[18px] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm'>
    <p className='text-white text-[30px] font-black leading-none'>{value}</p>
    <p className='mt-2 text-[11px] uppercase tracking-[0.24em] text-secondary'>
      {label}
    </p>
    <p className='mt-2 text-[13px] leading-[20px] text-secondary'>{detail}</p>
  </div>
);

const SkillChip = ({ skill, theme, index }) => {
  const Icon = skill.icon;

  return (
    <motion.li
      variants={fadeIn("up", "spring", index * 0.025, 0.45)}
      whileHover={{ y: -3 }}
      className='group relative overflow-hidden rounded-[16px] border border-white/10 bg-black/20 px-4 py-3 flex items-center gap-3 min-w-[155px] backdrop-blur-sm'
      style={{
        boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.02), 0 0 0 1px transparent`,
      }}
    >
      <div
        className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{
          background: `linear-gradient(135deg, ${theme.glow} 0%, transparent 70%)`,
        }}
      />
      <span
        className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10'
        style={{
          color: theme.accent,
          backgroundColor: theme.soft,
        }}
      >
        {Icon ? (
          <Icon className='h-5 w-5' aria-hidden='true' />
        ) : (
          <span className='text-[12px] font-bold tracking-[0.14em]'>
            {getSkillAbbr(skill)}
          </span>
        )}
      </span>

      <div className='relative min-w-0'>
        <p className='text-white text-[14px] font-medium leading-[18px]'>
          {skill.name}
        </p>
      </div>
    </motion.li>
  );
};

const CategoryCard = ({ section, index, theme }) => (
  <motion.article
    variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.12, 0.75)}
    className='mb-6 inline-block w-full break-inside-avoid align-top'
    style={{ breakInside: "avoid" }}
  >
    <SectionPanel
      glow={theme.glow}
      gridSize={20}
      backgroundClassName='bg-tertiary'
      innerClassName='h-full px-6 py-6 sm:px-7 sm:py-7'
    >
      <div className='flex items-start justify-between gap-4'>
        <div>
          <div className='flex flex-wrap items-center gap-3'>
            <span className={sectionBadgeClassName}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className='rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-medium'
              style={{
                color: theme.accent,
                backgroundColor: theme.soft,
                border: `1px solid ${theme.glow}`,
              }}
            >
              {section.items.length} skills
            </span>
          </div>

          <h3 className='mt-4 max-w-[15ch] text-white text-[26px] sm:text-[30px] font-black leading-[1.05]'>
            {section.title}
          </h3>
        </div>

        <span
          className='hidden sm:block text-[44px] font-black leading-none opacity-10'
          style={{ color: theme.accent }}
          aria-hidden='true'
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className='mt-4 max-w-[58ch] text-secondary text-[15px] leading-[26px]'>
        {section.description}
      </p>

      <ul className='mt-6 flex flex-wrap gap-3'>
        {section.items.map((skill, chipIndex) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            theme={theme}
            index={chipIndex}
          />
        ))}
      </ul>
    </SectionPanel>
  </motion.article>
);

const TechStack = () => {
  const totalSkills = techStackGroups.reduce(
    (sum, section) => sum + section.items.length,
    0
  );

  return (
    <>
      <SectionHeading eyebrow='Technical Stack' title='Skills & Tools.' />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        I work across product interfaces, backend systems, cloud
        infrastructure, and AI workflows. The stack is grouped by discipline so
        it stays easy to scan for visitors and easy to maintain as new skills
        are added over time.
      </motion.p>

      

      <div
        className='mt-10 columns-1 xl:columns-2'
        style={{ columnGap: "1.5rem" }}
      >
        {techStackGroups.map((section, index) => (
          <CategoryCard
            key={section.title}
            section={section}
            index={index}
            theme={sectionAccentThemes[index % sectionAccentThemes.length]}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, "tech");
