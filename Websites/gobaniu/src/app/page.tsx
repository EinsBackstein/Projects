import ContentCard from "@/components/cards/ContentCard";
import { Video } from "@/components/video/HomeVideo";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
// import { FaBeer } from "react-icons/fa";



export default function Home() {
  return (
    <main>
      <Video />
      <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-5 h-screen -mt-20">
        <div className="ml-1/6 mr-1/6 row-start-4 pt-1/10 lg:pt-0 lg:mx-0 lg:col-start-4 lg:row-start-4">
          <div className="flex flex-col bg-gravel-50 dark:bg-secondary p-3 rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-60 dark:bg-opacity-60">
            <p className="text-center">
            Durch unbegrenzten Anpassungsmöglichkeiten wird ihrer Kreativität keine Grenze gesetzt. Suchen sie sich das Material ihrer Wahl und vieles mehr aus.
            </p>
            <Link className="self-center" href={'overview-selection'}>
            <button className="border-tertiary1 rounded-2xl bg-green-700 dark:bg-tertiary1 py-2 px-5 text-center mt-2">Mehr</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <Image
          src="/assets/schloss-schönbrunn.jpg"
          // src="/assets/klasse.png"
          alt="Picture of the beautiful view in a bar"
          width={1024}
          height={683}
          quality={100}
          className="w-screen h-screen absolute -z-50 object-cover"
        ></Image>

        <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-5 h-screen">
          <div className="ml-1/6 mr-1/6 pt-1/10 row-start-4 lg:pt-0 lg:mx-0 lg:col-start-4 lg:row-start-4">
            <div className="flex flex-col bg-gravel-50 dark:bg-secondary p-3 rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-60 dark:bg-opacity-60">
              <p className="text-center">
              Bei Gobaniu steht seit Beginn fest das die Qualität und die Einzigartigkeit eines Messers, dieses zu etwas besonderem macht. So wurde Gobaniu aus unseren 3 Grunprinzipien aufgebaut.
              </p>
              <Link className="self-center" href={'values'}>
              <button className="border-tertiary1 rounded-2xl bg-green-700 dark:bg-tertiary1 py-2 px-5 text-center mt-2">
                Unsere Werte
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gravel-100 dark:bg-black py-20">
        <div className="hidden lg:flex bg-gravel-50 dark:bg-secondary mx-1/6 border-secondary rounded-xl">
          <Image
            src="/assets/platinklumpen.png"
            alt="Picture of the materials used by us."
            width={250}
            height={100}
            quality={100}
            className="p-3 rounded-3xl"
          ></Image>

          <div>
            <h1 className="text-2xl pt-2 text-center">Materialen</h1>
            <p className="p-5">
            Für unsere Messer bieten wir eine breite Auswahl an exklusiven Materialen. Für die Griffe gibt es unteranderem Edelhölzer als Basis. Als zusätzliche Verzierung gibt es Edelsteine oder Gold und Silber. Die Klinge kann man aus Damaszener Stahl, pulvermetallurgischer Stahl und verschiedene exotische Materialen, wie meteoritischer Stahl, Titanlegierungen oder auch Keramik.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex bg-gravel-50 dark:bg-secondary mt-24 mx-1/6 border-secondary rounded-xl">
          <div>
            <h1 className="text-2xl pt-2 text-center">Status</h1>
            <p className="p-5">
            Ein Messer kann in vielen Situationen nützlich sein. Jedoch sollte man nicht nur an den Nutzen denken, sondern auch das Messer als ein Statussymbol. Deshalb ist es wichtig ein besonderes Messer zu besitzen. Gobaniu bietet ein Messer das nicht nur in Funktionalität ausgezeichnet sind, sondern auch in ihrer Einzigartigkeit.
            </p>
          </div>
          <Image
            src="/assets/fabergeei2.jpg"
            alt="Schürsch"
            width={250}
            height={100}
            quality={100}
            className="p-3 rounded-3xl"
          ></Image>
        </div>

        <Carousel
          className="flex justify-center lg:hidden"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex justify-center lg:hidden">
                <ContentCard
                  image="/assets/platinklumpen.png"
                  image_alt="Bild von Platin"
                  heading="Materialen"
                  p1="Für unsere Messer bieten wir eine breite Auswahl an exklusiven Materialen. Für die Griffe gibt es unteranderem Edelhölzer als Basis. Als zusätzliche Verzierung gibt es Edelsteine oder Gold und Silber. Die Klinge kann man aus Damaszener Stahl, pulvermetallurgischer Stahl und verschiedene exotische Materialen, wie meteoritischer Stahl, Titanlegierungen oder auch Keramik."
                  p2={null}
                  p3={null}
                  p4={null}
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex justify-center px-3 lg:hidden">
                <ContentCard
                  image="/assets/fabergeei2.jpg"
                 image_alt="Bild von Schürsch"
                  heading="Status"
                  p1="Ein Messer kann in vielen Situationen nützlich sein. Jedoch sollte man nicht nur an den Nutzen denken, sondern auch das Messer als ein Statussymbol. Deshalb ist es wichtig ein besonderes Messer zu besitzen. Gobaniu bietet ein Messer das nicht nur in Funktionalität ausgezeichnet sind, sondern auch in ihrer Einzigartigkeit."
                  p2={null}
                  p3={null}
                  p4={null}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-[15%] md:ml-1/4 text-white" />
          <CarouselNext className="mr-[15%] md:mr-1/4 text-white" />
        </Carousel>


      </div>
    </main>
  );
};
