import { Tilt } from "react-tilt";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, webglobe } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import VimeoEmbed from './VimeoEmbed';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link, videoId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = () => window.innerWidth > 1024;


  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="w-full sm:w-100 lg:w-[calc(50%-0.875rem)]"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 250,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)", 
        }}
        className="bg-gradient-to-t from-black to-orange-500 p-5 rounded-3xl w-full lg:w-full"
        >
        <div 
          className="relative w-full lg:h-[42vmin] md:h-auto bg-white rounded-2xl md:p-1 sm:p-1"
          onMouseEnter={() => isDesktop() && setIsHovered(true)}
          onMouseLeave={() => isDesktop() && setIsHovered(false)}
        >

        {
          videoId && isHovered ? 
            <div className="bg-white rounded-2xl">
            <VimeoEmbed videoId={videoId} />
            </div>
          :
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
        }

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(live_site_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={webglobe} alt="webglobe" className="w-1/2 h-1/2 object-contain"/>

            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>

            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
      
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects act as examples to showcase my skills in software engineering, both front and back end, spanning multiple languages and frameworks. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(Works, "projects");