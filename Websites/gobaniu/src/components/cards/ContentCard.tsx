
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { ClassNameValue } from "tailwind-merge";

interface Props {
    image: string;
    image_alt: string;
    heading: string;
    p1: string;
    p2: string | null;
    p3: string | null;
    p4: string | null;
}

const ContentCard = ({
    image,
    image_alt,
    heading,
    p1,
    p2,
    p3,
    p4,
} : Props) => {
    return (
        <Card className="lg:w-72 w-80 flex flex-col object-cover overflow-hidden rounded-lg">
            <CardHeader>
              <div className="h-40 relative">
                <Image
                    src={image}
                    alt={image_alt}
                    quality={100}
                    style={{
                        
                    }}
                    layout="fill"
                    sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
                    objectFit="cover"
                    />
              </div>
            </CardHeader>
            <CardContent className="bg-gravel-50">
              <div className="flex flex-col"></div>
              <h1 className="font-heading font-bold text-2xl pt-4">{heading}</h1>
              <Separator className="mb-2 bg-secondary lg:max-w-90% dark:bg-white"/>
              <p className={p1 == null ? "pb-1 hidden": "pb-1 text-lg leading-[1.75rem]"}>{p1}</p>
              <p className={p2 == null ? "pb-1 hidden": "pb-1 text-lg leading-[1.75rem]"}>{p2}</p>
              <p className={p3 == null ? "pb-1 hidden": "pb-1 text-lg leading-[1.75rem]"}>{p3}</p>
              <p className={p4 == null ? "pb-1 hidden": "pb-1 text-lg leading-[1.75rem]"}>{p4}</p>
            </CardContent>
        </Card>
    );
};

export default ContentCard;

