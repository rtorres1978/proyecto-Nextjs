import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Ingredient } from "../interfaces/ingedient.type";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
interface CardIngrdientsProps {
  ingredient: Ingredient;
  addIngredient: (id: string) => void;
  removeIngredient: (id: string) => void;
}

const MakeIngredient = ({
  ingredient,
  addIngredient,
  removeIngredient,
}: CardIngrdientsProps) => {
  const { id, alt, image, price, rotate, name, quantity } = ingredient;
  return (
    <Card className="mt-3 ">
      <CardHeader>
        <Image
          src={image}
          width={104}
          height={37}
          alt={alt}
          className={cn("mx-auto h-[30px]", rotate && "-rotate-12")}
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-bold text-center">{name}</h3>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() => removeIngredient(id)}
          className="rounded-full p-2 bg-[#F5F5FF] group"
        >
          <Minus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>

        <span className="text-xl font-bold">{quantity}</span>
        <Button
          onClick={() => addIngredient(id)}
          className="rounded-full p-2 bg-[#F5F5FF] group"
        >
          <Plus className="stroke-[#5243C2] group-hover:stroke-white" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MakeIngredient;
