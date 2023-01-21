import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import sufian from "../../assets/about/sufian.jpg";
import { bios } from "../../Data";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="about" className="pt-16">
      <div className="text-center mb-8">
        <SectionTitle title="about" subTitle="who am i" />
      </div>
      <div className="grid lg:grid-cols-2 place-items-center justify-self-center">
        <div className="shadow-md bg-black max-w-sm h-96 rounded mb-4 lg:mb-0">
          <img
            src={sufian}
            alt="sufian-img"
            className="w-full h-full rounded object-cover"
          />
        </div>
        <div>
          <div className="mb-8">
            <p className="mb-4">
              I am self-motivated Front-End Web Developer, seeking to achieve confidence and fame using my potential in the sector of Web Development. My innovative creative skills, dedication and hard work is always for self and company growth.
            </p>
            {bios.map((bio) => (
              <div key={bio.id} className="">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white p-3 rounded-full text-black">
                    {bio.icon}
                  </span>
                  <span className="font-semibold">{bio.key} :</span>
                  <span>{bio.value}</span>
                </div>
              </div>
            ))}
          </div>
          <a
            href="Abu_Sufian_Resume.pdf" download='Abu_Sufian_Resume.pdf'
            className="flex items-center gap-2 capitalize bg-white w-52 justify-center py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-500 hover:scale-110"
          >
            <AiOutlineFilePdf className="text-lg" /> download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
