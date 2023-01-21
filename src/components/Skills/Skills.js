import React from "react";
import { icons } from "../../Data";

import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <div id="skills" className="pt-20">
      <div className="text-center mb-8">
        <SectionTitle title="skills" subTitle='what i expert' />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-center mx-auto">
        {
          icons.map((icon, inedx) => <div key={inedx} className='justify-self-center text-8xl rounded-full text-white '>{icon}</div>)
        }
      </div>
    </div>
  );
};

export default Skills;
