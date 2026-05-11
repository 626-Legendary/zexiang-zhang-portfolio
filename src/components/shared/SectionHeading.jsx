import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const SectionHeading = ({ eyebrow, title, align = "left" }) => {
  const alignClassName = align === "center" ? "text-center" : "";

  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} ${alignClassName}`.trim()}>
        {eyebrow}
      </p>
      <h2 className={`${styles.sectionHeadText} ${alignClassName}`.trim()}>
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
