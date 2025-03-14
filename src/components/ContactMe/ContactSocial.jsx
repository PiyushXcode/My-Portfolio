import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex flex-row gap-5 '>
      <SingleContactSocial Link='https://www.linkedin.com/in/piyush-prasad-48a41a2a9/' Icon={FaLinkedinIn}/>
      <SingleContactSocial Link='https://github.com/PiyushXcode' Icon={FiGithub}/>
      <SingleContactSocial Link='https://www.instagram.com/oyyeee.piyush/' Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial
