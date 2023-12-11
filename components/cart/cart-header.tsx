import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import React, { Children } from "react";

interface CartHeaderProps {
//  children: React.ReactNode
 text?:string;
 //icon:React.FC<React.SVGProps<SVGSVGElement>>;
 icon: React.ElementType;
 iconColor?: 'purple' | 'orange' | 'red' | 'green' | 'blue';
}


const CardHeaders = (
  { text, 
    icon:Icon, 
    iconColor= 'purple'
  }: CartHeaderProps ) => {
    
    const colorVariants: Record<string, string> = {
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      red:  'bg-red-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600'
    }  
    const colorVariantsIcon: Record<string, string> = {
      purple: 'stroke-purple-500',
      orange: 'stroke-orange-500',
      red:  'stroke-red-600',
      blue: 'stroke-blue-600',
      green: 'stroke-green-600'
    }  

  const basebgColor = "w-8 h-8 rounded-full grid place-items-center bg-purple-500"
  const baseIconColor = ' fill-white stroke-purple-500'
  
  return (
    <div>
      <article className="flex items-center gap-x-2">
        {/* cn -> nos permite unir cosas dinamicas */}
        <span className={cn(basebgColor, colorVariants[iconColor])}>
        <Icon className={cn(baseIconColor, colorVariantsIcon[iconColor])} />
        </span>
        <span className="font-bold">{text}</span>
      </article>
    </div>
  );
};

export default CardHeaders;
