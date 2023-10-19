import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ 
      ...form, 
      [name]: value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_8pin03t', 
      'template_z2web9b',
      formRef.current,
      '8cnZK5TnaQkdQpVNZ'
    )
    .then(
      () => {
      setLoading(false);
      alert("Thanks, I'll get back to you very soon!")
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 
      (error) => {
        setLoading(false);
        console.log(error);
        alert("Sorry, something went wrong. Please try emailing directly: thisisrosssimpson@gmail.com")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className='text-white font-medium mb-1'>thisisrosssimpson@gmail.com</p>        
        <p><a className='underline inline-flex mt-3 text-white font-medium mb-4' href='https://www.linkedin.com/in/simpsonre/' target='blank'>LinkedIn</a></p>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 w-fit px-4 border border-gray-400 rounded shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")