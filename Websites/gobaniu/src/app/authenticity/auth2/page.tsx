import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

//* finished, done quality control



const page = () => {
  
  return (
    <main>
<Link href="/authenticity">
      <div className='flex justify-center animate-fade animate-once animate-duration-[1500ms] animate-delay-[3000ms] animate-ease-in'>
      <Image src="/assets/a4zertifikatdsv2.png" alt='fs-cert' width={1000} height={1000} quality={100} className=' hover:scale-105 transition duration-500'/>
      </div>
</Link>
    </main>
  )
}
export default page

