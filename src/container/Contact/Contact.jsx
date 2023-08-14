import React, {useState, useRef} from 'react'
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

  const handleSubmit = () => {
    // e.preventDefault()
  }

  return (
    <div className="content">
      <h3 className="header-text">chat with me.</h3>

      
  <div className='app-form'>

    <form 
      className="app__footer-form app__flex"
      onClick={handleSubmit}
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