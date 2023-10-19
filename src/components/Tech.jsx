import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (

    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}
      className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
    </motion.div>
    )
}

export default SectionWrapper(Tech, "");