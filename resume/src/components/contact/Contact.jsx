import React from 'react'
import './Contact.css'
import{AiOutlineMail} from "react-icons/ai"
import{BsMessenger} from "react-icons/bs"
import{BsWhatsapp} from "react-icons/bs"



const Contact = () => {
  return (
 <section id='contact' >
<h5> Get In Touch</h5>
<h2>Contact Me</h2>
<div className='container contact_container'>
<div className='contact_options'>
  <article className='contact_option'>
  <AiOutlineMail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5>alokyadav6635@gmail.com</h5>
    <a href='mailto:alokyadav6635@gmail.com' target= "_blank">Send a message</a>
  </article>
  <article className='contact_option'>
  <BsMessenger className='contact_option-icon'/>
    <h4>Messanger</h4>
    <h5>Selftutorial</h5>
    <a href='https://alokyadav2757@gmail.com' target= "_blank">Send a message</a>
  </article>
  <article className='contact_option'>
  <BsWhatsapp className='contact_option-icon'/>
    <h4>Whatsapp</h4>
    <h5>+919696722622</h5>
    <a href='https://api.whatsapp.com/send?phone+919696722622'target= "_blank">send a message</a>
  </article>
</div>
<form action=''>
<input type="text" name='name' placeholder='Your Full Name' required ></input>
<input type="email" name='email' placeholder='Your Full Name' required ></input>
<textarea name='message' rows='7' placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
</form>



</div>


 </section>
  )
}

export default Contact
