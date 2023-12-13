import React from 'react'
import MakeIngredient from './ingredient'
import { Ingredient } from '../interfaces/ingedient.type'

interface MakeIngredientsProps {
  ingredients: Ingredient[];
  addIngredient: (id:string) => void;
  removeIngredient : (id:string) => void;
}

const MakeIngredients = ({
  ingredients, addIngredient, removeIngredient 
}: MakeIngredientsProps ) => {
  return (
 
    <div className='grid grid-cols-8 gap-4'>
       {ingredients.map((item) => (
        <MakeIngredient
        key={item.id}
        ingredient={item}
        addIngredient={addIngredient}
        removeIngredient ={removeIngredient }
//         src={item.image}
//         alt={item.alt}
//         title={item.name}
        />
       ))}
   
    </div>
 
  )
}

export default MakeIngredients