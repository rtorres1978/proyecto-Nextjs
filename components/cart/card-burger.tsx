import React from "react";
import Image from "next/image";
import { Clock, Beaker, Flame, Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import CardHeaders from "./cart-header";
import CardIngredients from "./card-ingredients";


const CardBurger = () => {
  return (
    <div>
      <div className="mt-20">
        <Image
          src="/images/burger-2.png"
          alt="imagen2"
          width={325}
          height={310}
          style={{
            margin: "auto",
          }}
        />
      </div>
      <section className="flex justify-between mt-5 ">
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

      <Button className="group w-full bg-rose-50 rounded-2xl p-8 mt-8 text-base hover:bg-rose-500 ">
        <span className="group-hover:text-white  text-red-500">
          + Tomato Ketchup
        </span>

        <Badge className="group-hover:bg-black bg-red-500 ml-2">0.2 oz</Badge>
      </Button>

     <section className="grid grid-cols-2 gap-x-8 mt-8 ">
     <CardIngredients src="/images/sm/cutlet.png" alt="Imagen Ingredients" title="curl" width={104} height={37} />
     <CardIngredients src="/images/sm/mayo.png"  alt="Imagen Ingredients" title="may" width={104} height={59}/>
     </section>
     
     <section>
      <p className="text-indigo-500 text-4xl font-extrabold text-center mt-8">$12.95</p>
      <Button className="w-full bg-indigo-500 rounded-full mt-8 p-8">Checkout</Button>
     </section>


    </div>
  );
};

export default CardBurger;
