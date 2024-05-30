import React from "react";
import { sitemapLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

//TODO finished, quality controll

const page = () => {
  return (
    <main>
      <div>
        <div>
          <Image
            src="/assets/cinematicKirschbaum.jpg"
            alt="tree"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-screen h-[90vh] absolute -z-50 top-0 left-0 from-current to-transparent"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 h-[90vh] -mt-20">
          <div className="ml-1/6 mr-1/6 row-start-2 lg:mx-0 lg:col-start-2 lg:row-start-2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-xl min-w-48 text-white">
              <h2 className="text-center text-7xl mb-3 drop-shadow-lg font-heading tracking-wide">
                Site Map
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-2xl">Where to go...</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-48 mt-16 container px-0">
        <div className="flex flex-col items-start">
          {sitemapLinks.map((link) => {
            if (
              link.label == "500:  ___internal___server___error___" ||
              link.label == "502:  ___gateway___not___found___"
            ) {
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className="text-3xs mt-2 text-secondary"
                >
                  <p className="">{link.label}</p>
                </Link>
              );
            } else {
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className="my-3 text-lg link link-underline-dark"
                >
                  <li className="">{link.label}</li>
                </Link>
              );
            }
          })}
        </div>
        <div>
          <Image
            src="/assets/materialien.png"
            alt="test"
            width={500}
            height={500}
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="mt-8"></div>
    </main>
  );
};

export default page;
