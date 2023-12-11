import CardBurger from '@/components/cart/card-burger'
import HeroMain from '@/components/hero-main'
import React from 'react'
const HomePage = () => {
  return (
    <main>
     <HeroMain/>
     <div className='md:hidden'>
      <CardBurger/>
     </div>
    </main>
  )
}

export default HomePage
