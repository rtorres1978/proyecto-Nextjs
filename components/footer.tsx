import React from 'react'
import Image from 'next/image';
const Footer = () => {
const Year = new Date().getFullYear();
  return (
    <div className='hidden sm:flex sm:gap-x-4 py-8'>
 <p>{Year}. Make Your Burger</p>
 <p>Privacy Policy</p> | 
 <p>Terms & Conditions</p>
 <Image
 src= "/images/footer/payment.png"
 alt='imagen'
 width={293}
 height={24}
 className='sm:ml-auto'
 ></Image>

    </div>
  )
}

export default Footer