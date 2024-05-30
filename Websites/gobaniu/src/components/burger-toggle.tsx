import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { navLinks } from "@/constants";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export function ToggleBurger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <RxDragHandleHorizontal className="w-10 h-10" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose className="flex flex-row justify-end items-center backdrop-filter backdrop-blur-sm bg-opacity-80 bg-darker gap-2 pr-10 pt-5  ">
          <div className="link link-underline flex flex-row justify-start items-center">
            <p className="text-white">Schließen</p>
            <IoClose className="w-5 h-5 text-white" />
          </div>
        </DrawerClose>
        <div className="flex flex-col text-white items-end pr-10 justify-center backdrop-filter backdrop-blur-sm bg-opacity-80 bg-darker h-full w-full">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.route}
                key={link.label}
                onClick={() => setIsOpen(false)}
                className="my-3 text-2xl link link-underline link-underline-black"
              >
                <p className="shadow-md">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
