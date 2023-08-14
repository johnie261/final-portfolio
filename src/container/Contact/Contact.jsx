import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss'
import { AppWrap } from '../../wrapper'

const Contact = () => {

  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_fpwwjze",
        "template_vd7koi7",
        {
          from_name: form.name,
          to_name: "John",
          from_email: form.email,
          to_email: "njorogejohn261@gmail.com",
          message: form.message
        },
        "38phpdQDG2wSK9K_G"
      )
      .then (
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.");
        
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  }

  return (
    <div className="content">
      <h3 className="header-text">chat with me.</h3>

      
  <div className='app-form'>

    <form 
      className="app__footer-form app__flex"
      // onClick={handleSubmit}
      ref={formRef}
    >
      <div className="app__flex">
        <input 
          className="p-text" 
          type="text" 
          placeholder="Your Name" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
        />
      </div>
      <div className="app__flex">
        <input 
          className="p-text" 
          type="email" 
          placeholder="Your Email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <textarea
          className="p-text"
          placeholder="Your Message"
          value={form.message}
          name="message"
          onChange={handleChange}
        />
      </div>
      <button 
        type="submit" 
        onClick={handleSubmit}
        className="p-text" 
      >
        {!loading ? 'Send Message' : 'Sending...'}
      </button>
      </form>
    </div>
  </div>
  )
}

export default AppWrap(Contact, 'contact')