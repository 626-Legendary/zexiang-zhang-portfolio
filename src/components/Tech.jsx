import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologiesOther } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 rounded-2xl p-12' style={{ backgroundColor: "#1d1836" }}>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <span className="text-[14px] text-center mt-1">{technology.name}</span>
        </div>
      ))}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologiesOther.map((technology) => (
          <div className="w-10 h-30 flex flex-col items-center justify-end" key={technology.name}>
            <img src={technology.icon} alt="" className="max-w-full max-h-full object-contain" />
            <span className="text-[12px] text-center mt-1">{technology.name}</span>
          </div>
        ))}
      </div>




    </div>
  );
};

export default SectionWrapper(Tech, "");
