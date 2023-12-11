import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { Plus, Minus} from 'lucide-react';
import {
                         Card,
                         CardContent,
                         CardDescription,
                         CardFooter,
                         CardTitle,
                         CardHeader,
                       } from "@/components/ui/card";
interface CardIngrdientsProps{
 src: string
 alt: string
 title: string
 width: number
 height: number
}

const CardIngredients = ({src, alt, title, width, height}:CardIngrdientsProps) => {
  return (
   
       <Card className="mt-3 rounded-[3rem]">
        <CardHeader>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className="mx-auto"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold text-center">{title}</h3>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="rounded-full p-2 bg-[#F5F5FF] group">
            <Plus className="stroke-[#5243C2] group-hover:stroke-white" />
          </Button>
          <span className="text-xl font-bold">0</span>
          <Button className="rounded-full p-2 bg-[#F5F5FF] group">
            <Minus className="stroke-[#5243C2] group-hover:stroke-white" />
          </Button>
        </CardFooter>
      </Card>
   
  )
}

export default CardIngredients
