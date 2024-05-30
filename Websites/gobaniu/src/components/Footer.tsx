"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-darker text-white static bottom-0 z-10 w-full bg-glassmorphism p-4 backdrop-blur-lg xs:px-7">
      <div className="flex flex-col items-center justify-center lg:flex-row px-5">
        <div className="flex justify-center lg:w-1/5 lg:mr-5">
          <Link href={"/"}>
            <Image
              src="/assets/logo_big+line.svg"
              alt="Logo"
              width={250}
              height={100}
              className="p-3"
            ></Image>
          </Link>
        </div>
        <Separator
          orientation="vertical"
          className="py-16 h-10 max-lg:hidden"
        />
        <Separator className="my-4 w-4/5 lg:hidden " />
        <div className="flex-auto w-4/5 text-center lg:flex lg:flex-col">
          <div className="grid grid-cols-4 lg:grid-cols-4 lg:px-5 ">
            <Link href="https://gitlab.htl-villach.at/nottj/gobaniu">
            <div className="w-full flex items-center justify-center">
                <p className="link link-underline link-underline-black">
                  Gitlab
                </p>
              </div>
            </Link>
            <Link href="/copyright">
            <div className="w-full flex items-center justify-center">
                <p className="link link-underline link-underline-black">
                  Rechtliche Hinweise
                </p>
              </div>
            </Link>
            <Link href="/about">
            <div className="w-full flex items-center justify-center">
                <p className="link link-underline link-underline-black">
                  Über Gobaniu
                </p>
              </div>
            </Link>
            <Link href="/sitemap">
              <div className="w-full flex items-center justify-center">
                <p className="link link-underline link-underline-black">
                  Site Map
                </p>
              </div>
            </Link>
          </div>
          <Separator className="my-6" />
          <div className="text-zinc-200">Copyright © 2024 Gobaniu</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<p></p>;
