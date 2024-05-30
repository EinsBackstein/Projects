import ContentCard from '@/components/cards/ContentCard'
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Video from '@/components/video/piwoTescoVideo'
import Image from 'next/image'
import React from 'react'

//TODO finished

const page = () => {
  return (
    <main>
      <div className='h-screen'>
      <Video />
      </div>
      <div className='fle justify-center container text-center'>
        <h1 className='text-2xl'> PIWO PIWO PIWO </h1>
      </div>
      <div className='flex justify-center my-10'>
        <Card className="lg:w-72 w-80 flex flex-col object-cover overflow-hidden">
          <CardHeader className='flex justify-center items-center'>  
          <Image
            src="/assets/tesco-piwo.jpeg"
            height={200}
            width={200}
            alt='Piwo'
            />
          </CardHeader>
          <CardContent>
            <h1 className='font-heading font-bold text-2xl pt-4'>PIWO PIWO PIWO</h1>
            <Separator className='mb-2 bg-secondary lg:max-w-90% dark:bg-white'/>
            <p className='pb-1 text-lg leading-[1.75rem]'> PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO PIWO</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default page