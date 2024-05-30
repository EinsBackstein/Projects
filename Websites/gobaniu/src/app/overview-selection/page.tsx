import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContentCard from "@/components/cards/ContentCard";

const page = () => {
  return (
    <div className="my-16">
      <div>
        <Carousel
          className="flex justify-center"
          opts={{
            align: "start",
            loop: true,
          }}
          >
          <CarouselContent>
            <CarouselItem className="w-2/3 lg:w-2/4">
              <div className="flex flex-col justify-center">
                <Image
                  src="/assets/dagger_in_mountain.png"
                  alt="Here should be a definitly not AI generated Knife."
                  width={1024}
                  height={1024}
                  className="self-center w-1/2 lg:w-2/5 max-h-2/5"
                ></Image>
                <p className="w-1/2 lg:w-2/5 self-center mt-4 py-2 px-5 rounded-xl bg-gravel-50 dark:bg-secondary mb-10">
                Dieser Dolch ist eine Version unseres GERINGVERDIENER-Modells. Dieses Exemplar besteht aus einer pulvermetallurgischen Stahlklinge mit verschiedenen Gravuren und einem Griff aus Mandelbaumholz. Auf Nachfrage können Sie den Dolch selbst gestalten.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="w-2/3 lg:w-2/4">
              <div className="flex flex-col justify-center">
                <Image
                  src="/assets/knifeGoldBlade.png"
                  alt="Here should be a definitly not AI generated Knife."
                  width={1024}
                  height={1024}
                  className="self-center w-1/2 lg:w-2/5 max-h-2/5"
                  ></Image>
                <p className="w-1/2 lg:w-2/5 self-center mt-4 py-2 px-5 rounded-xl bg-gravel-50 dark:bg-secondary">
                Dieses Messer stammt aus unserem SÜDAFRIKA-Modell. Die Klinge besteht aus VG-10 Stahl und einem handgemachten Griff aus Kupfer. Auf Nachfrage können Sie das Messer selbst gestalten.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="w-2/3 lg:w-2/4">
              <div className="flex flex-col justify-center">
                <Image
                  src="/assets/knife_in_front_of_throne_gold.jpg"
                  alt="Here should be a definitly not AI generated Knife."
                  width={1024}
                  height={1024}
                  className="self-center w-1/2 lg:w-2/5 max-h-2/5"
                  ></Image>
                <p className="w-1/2 lg:w-2/5 self-center mt-4 py-2 px-5 rounded-xl bg-gravel-50 dark:bg-secondary">
                Dieses Messer ist eine Variante unseres KOLUMBIEN-Modells. Es besteht aus einer Klinge aus GIN-1 Stahl und einem Griff aus Silber mit verschiedenen Goldakzenten. Auf Nachfrage können Sie das Messer selbst gestalten.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="w-2/3 lg:w-2/4">
              <div className="flex flex-col justify-center">
                <Image
                  src="/assets/crossed_knifes.jpg"
                  alt="Here should be a definitly not AI generated Knife."
                  width={1024}
                  height={1024}
                  className="self-center w-1/2 lg:w-2/5 max-h-2/5"
                  ></Image>
                <p className="w-1/2 lg:w-2/5 self-center mt-4 py-2 px-5 rounded-xl bg-gravel-50 dark:bg-secondary">
                Dieser Dolch inspiriert von unserem AFGHANISTAN-Modell. Er besteht aus einem Silber Griff verziert mit Edelsteinen und einer Klinge aus ATS-34 Stahl. Auf Nachfrage können Sie das Messer selbst gestalten.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="w-2/3 lg:w-2/4">
              <div className="flex flex-col justify-center">
                <Image
                  src="/assets/taschenmesser-with-design.jpeg"
                  alt="Here should be a definitly not AI generated Knife."
                  width={1024}
                  height={1024}
                  className="self-center w-1/2 lg:w-2/5 max-h-2/5"
                  ></Image>
                <p className="w-1/2 lg:w-2/5 self-center mt-4 py-2 px-5 rounded-xl bg-gravel-50 dark:bg-secondary">
                Dieses Taschenmesser stammt aus unserem SCHWEIZ-Modell. Das Taschenmesser hat eine Klinge aus Palladium und AUS-10 Stahl. Auf Nachfrage können Sie das Messer selbst gestalten.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-1/4 text-white"/>
          <CarouselNext className="mr-1/4 text-white"/>
        </Carousel>
      </div>

      <div className="flex flex-col justify-center max-md:items-center space-y-1/10 md:w-2/3 md:mx-1/6 md:flex-row md:gap-1/10 md:space-y-0 ">
        
        <ContentCard
          image="/assets/carbonstahl-transparent2.png"
          image_alt="Bild von Carbonstahl"
          heading="Carbonstahl"
          p1="Carbon Stahl zählt zu den AHSS (Advanced High Strength Steel) und überzeugt vor allem durch seine Härte und Schneidfähigkeit. Carbon Stahl ist eine Legierung aus Eisen und Kohlenstoff. Durch den hohen Kohlenstoffgehalt kann Carbon Stahl scharfe Kanten entwickeln und behalten. Die macht ihn perfekt für die Nutzung bei Messern.
          "
          p2={null}
          p3={null}
          p4={null}
          />

        <ContentCard
          image="/assets/edle-holzarten.jpg"
          image_alt="Schürsch"
          heading="Edelhölzer"
          p1="Edelhölzer stechen durch ihre ausdrucksvolle Farbgebung und markante Farbkontraste hervor. Vor allem Mahagoni, Ahorn-Maser und Kirschholz erstaunen durch ihre schönen Farben und Muster. Ihre hohe Haltbarkeit macht sie optimal zur Griffherstellung."
          p2={null}
          p3={null}
          p4={null}
          />

        <ContentCard
          image="/assets/titan.jpg"
          image_alt="Schürsch"
          heading="Titan"
          p1="Titan strahlt vor allem durch Leichtgewichtigkeit und hohe Festigkeit, durch das geringere Gewicht liegt es besonders gut in der Hand und ist leicht zu führen. Die hohe Korrosionsbeständigkeit sorgt dafür das ihr Messer lange hält."
          p2={null}
          p3={null}
          p4={null}
          />
      </div>
    </div>
  );
};

export default page;
