import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const projectThemes = [
  {
    accent: "#00cea8",
    glow: "rgba(0, 206, 168, 0.2)",
    soft: "rgba(0, 206, 168, 0.12)",
  },
  {
    accent: "#56ccf2",
    glow: "rgba(86, 204, 242, 0.18)",
    soft: "rgba(86, 204, 242, 0.12)",
  },
  {
    accent: "#38ef7d",
    glow: "rgba(56, 239, 125, 0.18)",
    soft: "rgba(56, 239, 125, 0.12)",
  },
  {
    accent: "#f5af19",
    glow: "rgba(245, 175, 25, 0.18)",
    soft: "rgba(245, 175, 25, 0.12)",
  },
  {
    accent: "#bf61ff",
    glow: "rgba(191, 97, 255, 0.2)",
    soft: "rgba(191, 97, 255, 0.12)",
  },
];

const StatCard = ({ value, label, detail }) => (
  <div className='rounded-[18px] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm'>
    <p className='text-white text-[30px] font-black leading-none'>{value}</p>
    <p className='mt-2 text-[11px] uppercase tracking-[0.24em] text-secondary'>
      {label}
    </p>
    <p className='mt-2 text-[13px] leading-[20px] text-secondary'>{detail}</p>
  </div>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const theme = projectThemes[index % projectThemes.length];

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className='mb-6 inline-block w-full break-inside-avoid green-pink-gradient p-[1px] rounded-[24px] shadow-card align-top'
      style={{ breakInside: "avoid" }}
    >
      <div className='relative overflow-hidden rounded-[24px] bg-tertiary p-5 sm:p-6'>
        <div
          className='absolute inset-0 opacity-70'
          style={{
            background: `radial-gradient(circle at top right, ${theme.glow} 0%, transparent 36%)`,
          }}
        />
        <div className='absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:18px_18px]' />

        <div className='relative'>
          <div className='flex items-start justify-between gap-4'>
            <span className='rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-secondary'>
              {String(index + 1).padStart(2, "0")}
            </span>

            <button
              type='button'
              onClick={() => window.open(source_code_link, "_blank", "noopener,noreferrer")}
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[12px] font-medium text-white transition duration-300 hover:border-white/20 hover:bg-black/30'
            >
              Open
              <HiOutlineArrowTopRightOnSquare
                className='h-4 w-4'
                aria-hidden='true'
              />
            </button>
          </div>

          <div className='mt-5 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-black/30 p-3'>
            <img
              src={image}
              alt={name}
              className='h-full w-full object-contain transition duration-500 hover:scale-[1.02]'
            />
          </div>

          <div className='mt-6'>
            <p
              className='text-[11px] uppercase tracking-[0.24em] font-medium'
              style={{ color: theme.accent }}
            >
              Selected Build
            </p>
            <h3 className='mt-3 text-white text-[24px] font-black leading-[1.1]'>
              {name}
            </h3>
            <p className='mt-3 text-[14px] leading-[24px] text-secondary'>
              {description}
            </p>
          </div>

          <div className='mt-6 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[12px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Works = () => {
  const uniqueTags = new Set(
    projects.flatMap((project) => project.tags.map((tag) => tag.name))
  ).size;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary text-justify'
      >
        These projects reflect the range of work I enjoy most: product
        interfaces with clear user value, backend systems that hold up under
        pressure, and launches that balance engineering depth with business
        clarity.
      </motion.p>

      
      <div
        className='mt-10 columns-1 md:columns-2 2xl:columns-3'
        style={{ columnGap: "1.5rem" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
