"use client";
import React, { useState } from "react";
import MakeTitle from "./components/title";
import MakeBurger from "./components/burger";
import MakeCard from "./components/card";
import MakeIngredients from "./components/ingredients";
import { Ingredient } from "./interfaces/ingedient.type";

import { ingredients as initialState } from "./db/ingredientsDB";

const MakePage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(initialState);
  const [burger, setBurger] = useState<Ingredient[]>([]);

  const addIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
    addBurger(id);
  };

  const removeIngredient = (id: string) => {
    setIngredients((prev) =>
      prev.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
    removeBurger(id);
  };

  const addBurger = (id: string) => {
    setBurger((prev) => {
      const item = ingredients.find((ingredient) => ingredient.id === id);
      if (item) {
        return [...prev,{
          ...item, item
         
        }];
      }
      return prev;
    });
   
  };

  const removeBurger = (id: string) => {
    setBurger((prev) => {
      return prev.filter((item) => item.id !== id);
  });
};

  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <MakeTitle />
        <MakeBurger burger={burger} />
        <MakeCard ingredients={ingredients} />
      </div>
      <MakeIngredients
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </>
  );
};

export default MakePage;
