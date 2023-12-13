import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import CardHeaders from '@/components/cart/cart-header'
import { Clock, Beaker, Flame } from 'lucide-react'
import { Ingredient } from '../interfaces/ingedient.type'

interface MakeCartProps{
  ingredients: Ingredient[];
}
export const MakeCard = ({ingredients}:MakeCartProps ) => {

  const total = ingredients.reduce((acc, item) => {
      return acc + item.price! * item.quantity
  }, 0)                    
  return (
    <div className='p-8'>
      <h2 className='text-3xl font-normal mb-4'>Summary</h2>
      <Separator className='mb-4'/>
    <div className='grid grid-cols-2'>
    <p className='font-bold text-4xl text-indigo-700'>${total.toFixed(2)}</p>
    <Button className=' bg-indigo-500 rounded-full' disabled = {total === 0}>Checkout</Button>
    </div>

    <section className="flex justify-between mt-5 bg-[#F5F6FF] p-3 rounded-full">
        <CardHeaders text="7 min" icon={Clock} iconColor="blue"></CardHeaders>

        <CardHeaders
          text="60 oz"
          icon={Beaker}
          iconColor="orange"
        ></CardHeaders>

        <CardHeaders
          text="249 kca"
          icon={Flame}
          iconColor="green"
        ></CardHeaders>
      </section>


    </div>
  )
}

export default MakeCard