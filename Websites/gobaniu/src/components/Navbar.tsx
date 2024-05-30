"use client"

import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
import React, { useState } from "react";

import { ToggleTheme } from "./dark-toggle";
import { Button } from "@/components/ui/button";
import { ToggleBurger } from "./burger-toggle";





const Navbar = () => {
  return (
    <nav className="bg-primary text-white flex flex-row items-center justify-between p-1.5 w-2/3 ml-1/6 h-20">

    <ToggleBurger />


      <div className="">
        <Link href="/" className="font-text">
          <Image
            src="/assets/logo_big+line.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="z-50">
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default Navbar;
