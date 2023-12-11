"use client";

import React from "react";
import IconLogo from "@/components/icons/icon-logo";
import { Button } from "@/components/ui/button";
import {MenuSquare, Phone, icons } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuDes from "./icons/menudesplegable";
import { cn } from "@/lib/utils";



const Navbar = () => {
  
  const pathname = usePathname()

  console.log(pathname)

  return (
    <>
      <nav className="flex justify-between sm:justify-start sm:gap-x-8 items-center py-8">
        {/* Logo */}
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-100 rounded-full"
        >
          <IconLogo />
        </Button>
         {/* FIN Logo */}

         <Link href="/"
         className={cn("hidden sm:block pb-3", pathname === "/" && "border-b-4 border-blue-500 font-medium" ) }
         >Discover</Link>
         <Link href="/make"
         className={cn("hidden sm:block pb-3", pathname === "/make" && "border-b-4 border-blue-500 font-medium" ) } 
         >Make Your Burger</Link>
       

        <Button className="rounded-full bg-rose-50 text-red-500 hover:bg-rose-500 hover:text-red-50 sm:ml-auto">
          <Phone className="mr-2 h-4 w-4" />
          Call Me Back
        </Button>

        <a 
        href="tel: 8 800437-87-22"
        className="hidden sm:block"
        >8 800 437-87-22</a>
        
        <Button variant={"secondary"} size="icon" className="rounded-full hidden sm:block"  >😒</Button>

        <Sheet >
          <SheetTrigger asChild>
            <Button 
              variant="outline"
              size="icon"
              className="bg-gray-200 rounded-full sm:hidden"
            >
              <MenuDes />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
