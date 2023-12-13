import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ingredient } from "../interfaces/ingedient.type";

interface Props {
  burger: Ingredient[];
}
const MakeBurger = ({ burger }: Props) => {
  const[index, setIndex] = useState(0);

  // useEffect(() => {
  //   if(index === burger.length) return;
  //   setIndex((prev) => prev + 1);
  // }, [burger])

  return (
    <div
      className="bg-[url('/images/make/bg.png')] h-[550px] w-full
    bg-contain bg-no-repeat bg-center relative flex justify-center"
    >
    {/* {index > 0 && (
              <Image
             
                src="/images/make/bun-defa.png"
                width={1000}
                height={300}
                alt='Bun Default'
                className="absolute z-20"
                style={{
                  bottom: `${(burger.length) * 40}px`,
                }}
              />
            )} */}
         

      {burger.map(
        ({ alt, id, image, name, price, quantity, rotate }, i) => (
          <>
            {i === burger.length - 1 && (
              <Image
             
                src="/images/make/bun-defa.png"
                width={1000}
                height={300}
                alt='Bun Default'
                className="absolute z-20"
                style={{
                  bottom: `${(i + 2) * 40}px`,
                }}
              />
            )}

           <Image
                key={id}
                src={image}
                width={500}
                height={500}
                alt={alt}
                className="absolute z-10"
                style={{
                  bottom: `${(i+1) * 40}px`,
                }}
              />
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
