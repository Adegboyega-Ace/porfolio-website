import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if any of the form fields are empty
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all required fields')
      return;
    }

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Adegboyega",
        from_email: form.email,
        to_email: "gboyegaadeyeye@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      alert("Thanks for contacting me, I'll reach out to you as soon as I can.");

      setForm({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    });
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
      <p className={styles.sectionSubText}>
        Get in touch
      </p>
      <h3 className={styles.sectionHeadText}>
        Contact Me.
      </h3>

      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
      >
        {/* name input field */}
        <label 
        className='flex flex-col'
        >
          <span className='text-white' >
            Your name 
          </span>
        </label>

        <input 
        type="text"
        name='name'
        value={form.name}
        onChange={handleChange}
        placeholder='What is your cool name?'
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />

        {/* email input field */}
        <label 
        className='flex flex-col'
        >
          <span className='text-white' >
            Your email 
          </span>
        </label>

        <input 
        type="email"
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder='enter your email address'
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />

        {/* message input field */}
      
        <label 
        className='flex flex-col'
        >
          <span className='text-white' >
            Your message 
          </span>
        </label>

        <textarea
        rows={7}
        type='text'
        name='message'
        value={form.message}
        onChange={handleChange}
        placeholder='What do you want to say?'
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />

        <button 
        type='submit'
        className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:shadow-xl'
        >
          {loading ? "sending" : "send" }
        </button>
      </form>
      </motion.div>
    </div>
  )
}

export default  SectionWrapper (Contact, "contact");