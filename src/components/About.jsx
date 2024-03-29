import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-gradient-to-t from-black to-orange-500 rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-[80px] h-[80px] object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I’m an adventure seeking, ultra marathon running, world travelling full-stack software engineer with 5 years of experience in incident management and agile leadership. I’m an expert in large scale operations and de-risking product launches, and I have a passion for fixing problems, looking at teams holistically and improving alignment and efficiency. I began software engineering whilst working at Spotify, and to my parent’s dismay left my role there to pursue a full-time career in development. 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");