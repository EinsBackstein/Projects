import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
    return (
        <main>
            <div className="mt-10">
                <h1 className="font-heading text-4xl text-center">Garantiert einzigartig</h1>
            </div>
            <div className="mt-10">
                <div
                    className="min-h-48 w-full flex flex-row justify-center items-center gap-2 my-10">
                    <div className="w-full md:mx-20 lg:w-1/2 p-5">
                        <h2 className="font-heading text-3xl">Einzigartigkeit</h2>
                        <p className="text-md">Unsere Messer sollen einzigartig sein. Das heißt, kein
                            Kunde soll ein Messer bekommen, welches in dieser Form schon einmal geschmiedet worden ist. Individualität: Alle Messer haben Alleinstellungsmerkmale wie z.B Gravuren von Initialen oder andere Texte auf Anfrage. Ebenso wird eine breite Auswahl von Materialien für Klinge sowie Handgriff bereitgestellt. Auf Wunsch des Kunden können auch Edelsteine oder andere Objekte in jedes individuelle Messer eingearbeitet werden.
                        </p>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="dark:bg-white bg-primary py-28 mr-48 max-md:hidden"/>
                </div>
                <div
                    className="min-h-48 w-full flex flex-row justify-center items-center gap-2 my-10">
                    <Separator
                        orientation="vertical"
                        className="dark:bg-white bg-primary py-28 ml-48 max-md:hidden"/>
                    <div className="w-full md:mx-20 lg:w-1/2 p-5">
                        <h2 className="font-heading text-3xl">NFT</h2>
                        <p className="text-md">Wir bieten Ihnen die Möglichkeit, Ihr Messer zusätzlich
                            noch als ein einzigartiges NFT zu besitzen. Jedes NFT ist eine digitale
                            Besitzurkunde, die die Authentizität und Einzigartigkeit Ihres Messers
                            garantiert. Durch die Kombination aus moderner Technologie und traditionellem
                            Handwerk wird Ihr Messer zu einem unvergleichbaren Vermögenswert, sowohl physischen als auch in der digitalen Welt. Mit dem NFT wird die Geschichte Ihres Messers festgehalten und über Generationen weitergegeben.
                        </p>
                    </div>
                </div>
                <div
                    className="min-h-48 w-full flex flex-row justify-center items-center gap-2 my-10">
                    <div className="w-full md:mx-20 lg:w-1/2 p-5">
                        <h2 className="font-heading text-3xl">Zertifikat</h2>
                        <p className="text-md">Bei jedem Kauf bekommen Sie ein Zertifikat von uns ausgestellt, um die Echtheit und Einzigartigkeit Ihres Messers zu garantieren. Unser Versprechen ist es, Ihnen nur das Beste zu bieten und dafür zu sorgen, dass jedes Messer, das aus unserer Werkstatt kommt, höchsten Standards entspricht. Unsere Begeisterung für die Handwerkskunst und Genauigkeit zeigt sich in allen Einzelheiten Ihres Messers, und das Zertifikat dient als Beweis dafür. </p>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="dark:bg-white bg-primary py-28 mr-48 max-md:hidden"/>
                </div>
            </div>
            <div className="mt-10 -mb-3">
                <div>
                    <Link href="/authenticity/auth2">
                        <Image
                            src="/assets/topedgevis.png"
                            alt="tree"
                            width={1920}
                            height={1080}
                            quality={100}
                            className="object-cover w-screen h-5/6 -z-50 top-0 left-0"/>
                    </Link>
                </div>
                <div className="">
                    <div
                        className="ml-1/6 mr-1/6 row-start-2 lg:mx-0 lg:col-start-2 lg:row-start-2">
                        <div className="flex flex-col rounded-xl min-w-48 text-white">
                            <h2
                                className="text-center text-3xl mb-3 drop-shadow-lg font-heading tracking-wide"></h2>
                            <p className="drop-shadow-sm text-lg text-center"></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
