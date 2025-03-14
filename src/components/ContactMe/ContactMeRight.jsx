import React from 'react'
import Contactinfo from './Contactinfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src="/images/email-image.png" alt="Contact Me" className='max-w-[300px]' />
      <Contactinfo/>
      <ContactSocial/>
    </div>

  )
}

export default ContactMeRight
