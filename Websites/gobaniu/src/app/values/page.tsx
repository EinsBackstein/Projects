import React from "react";
import ContentCard from "@/components/cards/ContentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

//TODO finished, quality controll

const page = () => {
  return (
    <main>
      <div>
        <div>
          <Image
            src="/assets/ct1.webp"
            alt="tree"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover w-screen h-5/6 absolute -z-50 top-0 left-0"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 h-[90vh] -mt-20">
        <div className="ml-1/6 mr-1/6 row-start-2 lg:mx-0 lg:col-start-2 lg:row-start-2">
          <div className="flex flex-col rounded-xl min-w-48 text-white">
            <h2 className="text-center text-3xl mb-3 drop-shadow-lg font-heading tracking-wide">
              Das Beste oder Nichts
            </h2>
            <p className="drop-shadow-sm text-lg text-center">
              Seit Jahren versucht Gobaniu, die Grenzen der Eleganz und des Luxus in neue Höhen zu bringen.
              Denn wer keine hohen Ansprüche an sich selbst hat, wird nie die Spitze erreichen.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-gravel-100 dark:bg-transparent">
        <div className="container" id="whtImport">
          <h1 className="text-3xl text-center pb-20 font-heading tracking-wide">Was wichtig ist...</h1>
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
                <ContentCard
                  image="/assets/tradition_gala.jpg"
                  image_alt="Tradition"
                  heading="Tradition"
                  p1="Wir sind stolz auf unsere Herkunft, die seit vielen Jahren unsere Marke definiert. Während wir uns entwickeln, bleibt der ursprüngliche Gedanke doch fest in unseren Messern verankert."
                  p2={"Unser Wissen, welches über Generationen hinweg gesammelt wurde, ist ausschlaggebend sein für die Qualität, Eleganz, aber auch Schärfe unserer Messer."}
                  p3={null}
                  p4={null}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                <ContentCard
                  image="/assets/future_vision.jpg"
                  image_alt="Vision"
                  heading="Vision Future 50"
                  p1="Langfristige Planung und Vorbereitung sind der Schlüssel zum Erfolg. Deswegen denkt Gobnaniu nicht inkurzen Zeiträumen, sondern an die weit entfernte Zukunft. Mit Blick auf die nächsten 50 Jahre wird jedes einzelne Gobaniu-Stück ein wahres Kunstwerk werden. Ebenso soll das Spektrum der Materialauswahl um ein vielfaches vergrößert werden."
                  p2={null}
                  p3={null}
                  p4={null}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
                <ContentCard
                  image="/assets/vanadium.png"
                  image_alt="Mission"
                  heading="Mission"
                  p1="Unsere Mission ist es, unseren Kunden ein Erlebnis zu bieten. Von der Gestaltung und Konfiguration bis hin zur Auslieferung soll der Kauf eines Gobaniu-Messers eine einzigartige Erfahrung sein."
                  p2={""}
                  p3={"Dabei ist es unsere Aufgabe, die Messer so einzigartig uns schön wie nur möglich zu machen, und damit die Limits der Perfektion neu zu definieren."}
                  p4={null}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="lg:hidden text-white"/>
            <CarouselNext className="lg:hidden text-white"/>
          </Carousel>
        </div>
        <br></br>
      </div>
    </main>
  );
};

export default page;
