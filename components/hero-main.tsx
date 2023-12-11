import React from 'react'
import { Button } from '@/components/ui/button'
import { Import, Link } from 'lucide-react'
import Image from 'next/image'
const HeroMain = () => {
  return (
   <div className='mt-20 sm:mt-0 sm:flex sm:items-center sm:max-h-[735px]  '>
   <h1 className=' text-gray-800 text-5xl font-medium sm:w-60 w-1/3 '>
     <span>Make Your Burger</span>
    </h1>
     <p className='text-gray-800 text-xl font-normal leading-loose mt-5 sm:hidden'>Parallax screen. Burger ingredients and emojis moving depending on the position of the mouse pointer.</p>
   
   <div className='relative flex justify-center items-center sm:grow sm:w-2/3'>
    
   <a href="/make" className='absolute sm:top-[540px] sm:left-20'>
  <Button className='w-28 h-28 rounded-full uppercase' >
      make burger
   </Button>
   </a>
   
   
    {/* <Image 
   src="/images/burger.png" 
   alt='imagen'
   width={375}
   height={520} 
   //className='mx-auto'
  // fill={true}
   style={{
    margin: "auto",
  }}
   /> */}
    <Image 
   src="/images/sm/sm-main-img.png" 
   alt='imagen'
   width={973}
   height={934} 
   className='mx-auto'
 
   />
   </div>
   </div>


  )
}

export default HeroMain
