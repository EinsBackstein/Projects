"use client"; // Error components must be Client Components

import ContentCard from "@/components/cards/ContentCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";

//TODO add content, responsive, white mode

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className="h-screen">
        <div>
          <Image
            src="/assets/MesserInSchaufenster.png"
            alt="tree"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-screen h-5/6 absolute -z-50 top-0 left-0"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 h-[90vh] -mt-20">
          <div className="ml-1/6 mr-1/6 row-start-2 lg:mx-0 lg:col-start-2 lg:row-start-2">
            <div className="flex flex-col min-w-48 text-white backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-[3rem]">
              <h2 className="text-center text-5xl my-3 drop-shadow-lg font-heading  tracking-wide">
                Seite konnte nicht gefunden werden
              </h2>
              <p className="drop-shadow-sm text-lg text-center"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-16 h-16 bg-gravel-100 dark:hidden"></div>
      <div className="bg-gravel-100 dark:bg-transparent -mt-24">
        <div className="container">
          <h1 className="text-3xl text-center pb-20 font-heading tracking-wide">
            Was gibt es noch?
          </h1>
        </div>
        <div className="container">
          <h1 className="text-2xl text-center pb-5 font-heading tracking-wide">
            {" "}
            Über unsere Werte{" "}
          </h1>
        </div>
        <div className="container lg:max-w-8/10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              watchDrag: false,
            }}
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                {" "}
                <ContentCard
                  image="/assets/tradition_gala.jpg"
                  image_alt="Tradition"
                  heading="Tradition"
                  p1="Wir sind stolz auf unsere Herkunft, die seit vielen Jahren unsere Marke definiert. Während wir uns entwickeln, bleibt der ursprüngliche Gedanke doch fest in unseren Messern verankert."
                  p2={
                    "Unser Wissen, welches über Generationen hinweg gesammelt wurde, ist ausschlaggebend sein für die Qualität, Eleganz, aber auch Schärfe unserer Messer."
                  }
                  p3={null}
                  p4={null}
                />{" "}
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                {" "}
                <ContentCard
                  image="/assets/future_vision.jpg"
                  image_alt="Vision"
                  heading="Vision Future 50"
                  p1="Langfristige Planung und Vorbereitung sind der Schlüssel zum Erfolg. Deswegen denkt Gobnaniu nicht inkurzen Zeiträumen, sondern an die weit entfernte Zukunft. Mit Blick auf die nächsten 50 Jahre wird jedes einzelne Gobaniu-Stück ein wahres Kunstwerk werden. Ebenso soll das Spektrum der Materialauswahl um ein vielfaches vergrößert werden."
                  p2={null}
                  p3={null}
                  p4={null}
                />{" "}
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                {" "}
                <ContentCard
                  image="/assets/vanadium.png"
                  image_alt="Mission"
                  heading="Mission"
                  p1="Unsere Mission ist es, unseren Kunden ein Erlebnis zu bieten. Von der Gestaltung und Konfiguration bis hin zur Auslieferung soll der Kauf eines Gobaniu-Messers eine einzigartige Erfahrung sein."
                  p2={""}
                  p3={
                    "Dabei ist es unsere Aufgabe, die Messer so einzigartig uns schön wie nur möglich zu machen, und damit die Limits der Perfektion neu zu definieren."
                  }
                  p4={null}
                />{" "}
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:hidden" />
            <CarouselNext className="lg:hidden" />
          </Carousel>
        </div>
        <br></br>
      </div>
      <div className="flex justify-center pb-6">
        <Button className=" bg-green-700 dark:bg-tertiary1 dark:hover:bg-tertiary2">
          <Link className="text-white" href="/values">
            Hier gehts zur Seite
          </Link>
        </Button>
      </div>

      <div className="mt-10">
        <h1 className="font-heading text-4xl text-center">
          Garantierte Einzigartigkeit
        </h1>
      </div>
      <div className="mt-10">
        <div className="min-h-48 w-full flex flex-row justify-center items-center gap-2 my-10">
          <div className="w-full md:mx-20 lg:w-1/2 p-5">
            <h2 className="font-heading text-3xl">NFT</h2>
            <p className="text-md">
              Wir bieten Ihnen die Möglichkeit, Ihr Messer zusätzlich noch als
              ein einzigartiges NFT zu besitzen. Jedes NFT ist eine digitale
              Besitzurkunde, die die Authentizität und Einzigartigkeit Ihres
              Messers garantiert. Durch die Kombination aus moderner Technologie
              und traditionellem Handwerk wird Ihr Messer zu einem
              unvergleichbaren Vermögenswert, sowohl physischen als auch in der
              digitalen Welt. Mit dem NFT wird die Geschichte Ihres Messers
              festgehalten und über Generationen weitergegeben.
            </p>
          </div>
        </div>
        <div className="min-h-48 w-full flex flex-row justify-center items-center gap-2 my-10">
          <div className="w-full md:mx-20 lg:w-1/2 p-5">
            <h2 className="font-heading text-3xl">Zertifikat</h2>
            <p className="text-md">
              Bei jedem Kauf bekommen Sie ein Zertifikat von uns ausgestellt, um
              die Echtheit und Einzigartigkeit Ihres Messers zu garantieren.
              Unser Versprechen ist es, Ihnen nur das Beste zu bieten und dafür
              zu sorgen, dass jedes Messer, das aus unserer Werkstatt kommt,
              höchsten Standards entspricht. Unsere Begeisterung für die
              Handwerkskunst und Genauigkeit zeigt sich in allen Einzelheiten
              Ihres Messers, und das Zertifikat dient als Beweis dafür.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6">
        <Button className=" bg-green-700 dark:bg-tertiary1 dark:hover:bg-tertiary2">
          <Link className="text-white" href="/authenticity">
            Hier gehts zur Seite
          </Link>
        </Button>
      </div>
    </main>
  );
}
