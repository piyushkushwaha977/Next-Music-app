'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({className} : {className?:string} ) => {

    const [ active,setActive ] = useState<string | null>(null)

  return (
    <div className={cn("fixed top-5 md:top-4 inset-x-0 max-w-[18rem] md:max-w-[28rem]  mx-auto z-50 border border-white/[0.2] rounded-r-full rounded-l-full ",
     className)} 
     >
      <Menu setActive={setActive}>
      <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
      </Link>
    
      <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
      </MenuItem>
  
      <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
      </Link>
      </Menu>
    </div>
  )
}

export default Navbar