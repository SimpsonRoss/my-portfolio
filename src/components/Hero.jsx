import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='mt-5 relative w-full h-[800px] mx-auto'>
      <div className={`${styles.paddingX} mt-[130px] absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fb6e17]'/>
          <div className='w-1 sm:h-80 h-40 orange-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>I'm <span className='text-[#fb6e17]'>Ross</span> and I...</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Develop full stack web applications.</p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Improve organisational alignment and efficiency.</p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Coach agile methodology, systems and rituals.</p>
          <a href={`#about`}><button className='mt-8 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md shadow-primary'>Okay, cool, but what else?</button></a>
        </div>
      </div>

    </section>
  )
}

export default Hero