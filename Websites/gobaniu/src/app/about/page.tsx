import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

//TODO responsive, content, images, white mode

const about = () => {
  return (
    <main>
      <div>
        <div>
          <div>
            <Image
              src="/assets/messer_auf_boden_mit_Hintergrund.png"
              alt="tree"
              width={1920}
              height={1080}
              quality={100}
              className="object-cover w-screen h-5/6 absolute -z-50 top-0 left-0"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 h-[90vh] -mt-20">
            <div className="ml-1/6 mr-1/6 row-start-2 lg:mx-0 lg:row-start-2 lg:col-start-2 xl:col-start-2 xl:row-start-3">
              <div className="flex flex-col rounded-xl min-w-48 text-white bg-primary bg-opacity-35 xl:bg-opacity-0">
                <h2 className="text-center text-5xl my-3 drop-shadow-lg font-heading tracking-wide">
                  Wer wir sind
                </h2>
                <p className="drop-shadow-sm text-xl text-center">
                  Gobaniu verkörpert das ultimative Symbol für Luxus, Eleganz
                  und Exzellenz. Wir sind die Verkörperung einer einzigartigen
                  Tradition und eines unvergleichlichen Erbes, das über
                  Generationen hinweg bewahrt wurde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 flex container px-0 justify-center items-center w-[65%]">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="min-h-48">
          <div className="">
            <h2 className="font-heading text-2xl">
              Unsere Geschichte: Ein Erbe der Exzellenz
            </h2>
            <p>
              Seit vielen Jahren ist Gobaniu ein Synonym für unübertroffenen
              Luxus und unvergleichliche Qualität. Wissen der Meisterschmiede
              Japans, Neuseelands, Norwegens und Irlands - über Generationen
              weitergeben.
            </p>
          </div>
        </div>
        <div className="min-h-48">
          <div className="">
            <h2 className="font-heading text-2xl">
              Handwerkskunst und Innovation
            </h2>
            <p>
              Bei Gobaniu vereinen wir traditionelle Handwerkskunst mit
              modernster Technologie, um Messer zu schaffen, die die Grenzen
              der Schönheit überschreiten. Jedes unserer Modelle ist das
              Ergebnis eines akribischen Schaffensprozesses, bei dem jedes
              Detail mit der größten Sorgfalt gestaltet wird.
            </p>
          </div>
        </div>
        <div className="min-h-48">
          <div className="">
            <h2 className="font-heading text-2xl">Engagement für Exzellenz</h2>
            <p>
              Bei Gobaniu streben wir kontinuierlich nach Perfektion in
              allem, was wir tun. Unsere Handwerker sind Hüter
              einer langen Tradition der Handwerkskunst und setzen jeden
              Tag ihr Fachwissen und ihre Leidenschaft ein, um Messer von
              unübertroffener Qualität zu schaffen. Jedes Detail wird mit
              höchster Sorgfalt gestaltet, um den Ansprüchen unserer
              anspruchsvollsten Kunden gerecht zu werden.
            </p>
          </div>
        </div>
        <div className="min-h-48">

          <div className="">
            <h2 className="font-heading text-2xl">Unser Versprechen an Sie</h2>
            <p>
              Unsere Mission bei Gobaniu ist es, nicht nur Messer zu bauen,
              sondern auch unvergessliche Erlebnisse zu schaffen. Wir streben
              danach, die Erwartungen unserer anspruchsvollsten Kunden zu
              übertreffen und Messer zu schaffen, die nicht nur
              einzigartige Werkzeuge sind, sondern Kunstwerke. Bei
              Gobaniu geht es nicht nur um Luxus, sondern auch um die
              Erfüllung von Träumen und die Verkörperung eines Lebensstils, der
              zeitlos ist. Willkommen in der Welt von Gobaniu, wo Perfektion
              zur Tradition wird.
            </p>
          </div>
        </div>
        </div>
      <Separator orientation="vertical" className="py-96 max-lg:hidden ml-8 bg-primary"/>
      </div>
    </main>
  );
};

export default about;
