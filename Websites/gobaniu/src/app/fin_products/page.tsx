import Image from "next/image";
import React from "react";
import { Video } from "@/components/video/knifeShowVideo";



const page = () => {
  return (
    <main>
      <div className="container mt-20 mb-10">
        <div className="min-h-48 w-full flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0 bg-gravel-50 dark:bg-secondary rounded-lg p-5">
            <p>
            Entdecken Sie die Eleganz und Funktionalität in einem Werkzeug, das so gestaltet ist, dass es sowohl robust als auch schön ist. Dieses Messer verkörpert die perfekte Balance zwischen Kunst und Praktikabilität. Mit einer sorgfältig gewickelten roten Lederschnur am Griff für Komfort und Sicherheit wird jedes Stück zu einem Meisterwerk für sich.
            </p> 
            
          </div>
          <Video />
        </div>
        <div className="min-h-48 w-full flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
          <Image
            src="/assets/knife_with_etui.png"
            alt="Hier sollte ein Bild von einem unserer Messer sein."
            width={400}
            height={400}
            quality={100}
            className="order-first lg:order-none rounded-lg"
          />
          <div className="lg:w-1/2 mb-10 lg:mb-0 bg-gravel-50 dark:bg-secondary rounded-lg p-5">
            <p>
            Entdecken Sie das ultimative Erlebnis mit unserem exquisiten Taschenmesser! Mit einem eleganten, hölzernen Griff und einer scharfen, robusten Klinge ist dieses Messer der perfekte Begleiter für jeden Abenteurer. Es liegt in einer maßgeschneiderten, lederne Hülle, die sowohl Stil als auch Funktionalität bietet. Ein Werkzeug nicht nur für den Alltag, sondern ein Ausdruck von Kraft und Eleganz!
            </p>
          </div>
        </div>
        <div className="min-h-48 w-full flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0 bg-gravel-50 dark:bg-secondary rounded-lg p-5">
            <p>
            Entdecken Sie die exquisite Eleganz und meisterhafte Handwerkskunst unseres goldenen Taschenmessers. Jedes Detail dieses atemberaubenden Stücks wurde sorgfältig gestaltet, um nicht nur ein Werkzeug, sondern ein Kunstwerk zu sein. Die Klinge und der Griff sind mit einem komplexen Drachenmotiv verziert, das Stärke und Adel symbolisiert. Dieses Taschenmesser ist nicht nur ein praktischer Begleiter für den Alltag, sondern auch eine beeindruckende Ergänzung für jede Sammlung. Erleben Sie die perfekte Kombination aus Funktionalität und Stil.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3.avif"
            alt="Hier sollte ein Bild von einem unserer Messer sein."
            width={400}
            height={400}
            quality={100}
            className="order-first lg:order-none rounded-lg"
          />
        </div>
        <div className="min-h-48 w-full flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
          <Image
            src="/assets/kunstvollesBlade.png"
            alt="Hier sollte ein Bild von einem unserer Messer sein."
            width={400}
            height={400}
            quality={100}
            className="order-first lg:order-none rounded-lg"
          />
          <div className="lg:w-1/2 mb-10 lg:mb-0 bg-gravel-50 dark:bg-secondary rounded-lg p-5">
            <p>
              Entdecken Sie die Eleganz und Präzision unserer exklusiven Küchenmesser. Jedes Stück ist ein Kunstwerk, das mit äußerster Sorgfalt und Handwerkskunst gefertigt wurde. Die scharfen Klingen sind nicht nur funktional, sondern auch wunderschön verziert, um eine Balance zwischen Ästhetik und Funktionalität zu schaffen. Ihre Küche verdient nichts Geringeres als Perfektion - gönnen Sie sich unsere Messer der Extraklasse.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
