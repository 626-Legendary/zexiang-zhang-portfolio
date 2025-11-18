import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        <p>A versatile full-stack developer and current Computer Science graduate student at Georgia Institute of Technology, with five years of hands-on experience building scalable, high-performance, and user-friendly web applications. Proficient in designing and implementing both front-end and back-end solutions, with expertise in Python, Java, and JavaScript, across tightly integrated and decoupled architectures.</p>
        <br />
        <p>On the front end, delivers responsive and intuitive interfaces using modern frameworks such as React, Vue, and Angular. On the back end, develops robust APIs with Python and Java, working seamlessly with SQL and NoSQL databases. Holds Oracle Certified MySQL 8.0 Database Administrator credentials, with strong skills in relational database design, performance optimization, and high-availability replication.</p>
        <br />
        <p>Experienced in managing cloud and server infrastructure, including deploying applications on Linux (Ubuntu), configuring NGINX, and orchestrating environments through AWS (EC2, Lambda, Amplify) or on-premises systems.</p>
        <br />
        <p>Dedicated to continuous learning and improving code quality, performance, and user experience. Highly effective working independently or within agile teams, with a focus on delivering maintainable solutions that drive measurable business impact.</p>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
