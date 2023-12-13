import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ingredient } from "../interfaces/ingedient.type";

interface Props {
  burger: Ingredient[];
}
const MakeBurger = ({ burger }: Props) => {
  let counter = 0;

  
  return (
    <div
      className="bg-[url('/images/make/bg.png')] h-[550px] w-full
    bg-contain bg-no-repeat bg-center relative flex justify-center"
    >
   
      {burger.map(
        ({ alt, id, image, name, price, quantity, rotate }, i) => (
          <>
           {
             i === burger.length - 1 && counter > 0 && (
              <Image
              key={i}
              src="/images/make/bun-defa.png"
              width={1000}
              height={300}
              alt='Bun Default'
              className="absolute z-20"
              style={{
                bottom: `${(counter + 1) * 40}px`,
              }}
            />
             )
           }

          {quantity > 0 &&
            Array.from({length: quantity}, (_,idx) => {
            counter++
            return(
              <Image
              key={idx}
              src={image}
              alt={alt}
              width={1000}
              height={300}
              className="absolute z-10"
              style={
                {
                  bottom: `${counter * 40}px`
                }
              }
              />
            )
            })

          }
          </>
             
        )
      )}

      <Image
        src="/images/make/bun.png"
        alt="burger bun"
        width={1000}
        height={300}
        className="absolute bottom-0"
      />
    </div>
  );
};

export default MakeBurger;
