import { motion } from "framer-motion";
import React from "react";
import { FiEye, FiGithub } from "react-icons/fi";
import { workImages } from "../../Data";
import SectionTitle from "../SectionTitle/SectionTitle";

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-16">
      <div className="text-center">
        <SectionTitle title="portfolio" subTitle="my awesome works" />
      </div>
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {workImages.map((workImage) => (
          <div
            key={workImage.id}
            className="max-w-xs lg:max-w-sm h-64 relative mx-auto"
          >
            <img
              className="w-full h-full object-cover"
              src={workImage.img}
              alt="work-img"
            />
            <motion.div className="hoverLayer"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.a
                href="#"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.3 }}
                className='w-10 h-10 bg-black/10 flex items-center justify-center rounded-full'
              >
                <FiGithub className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="google.com"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.3 }}
                className='w-10 h-10 bg-black/10 flex items-center justify-center rounded-full'
              >
                <FiEye className="text-white text-xl" />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
