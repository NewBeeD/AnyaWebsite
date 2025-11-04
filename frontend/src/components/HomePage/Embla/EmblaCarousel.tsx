
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image' // Import Image component
import Link from 'next/link';

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="relative h-96 md:h-[600px]">
      <div className='embla h-full' ref={emblaRef}>
        <div className='embla_container h-full'>
          <div className="embla_slide relative h-full">
            <Image 
              src={'/children2.jpg'} 
              alt='Children' 
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
              priority // Add to first image for LCP optimization
            />
          </div>
          <div className="embla_slide relative h-full">
            <Image 
              src={'/hiking.jpg'} 
              alt='Hiking' 
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="embla_slide relative h-full">
            <Image 
              src={'/praise.jpg'} 
              alt='Praise' 
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Centered content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

        <div className='flex flex-col sm:flex-row gap-y-8 '>

          <h1 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            One Family.
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            One Church.
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            One Mission.
          </h1>

          {/* <h1 className="text-sm md:text-4xl font-bold mb-6 drop-shadow-lg">
            We connect and support the body of Christ across our entire island.
          </h1> */}

        </div>
        

        <div className="flex flex-row-reverse gap-4 mt-12! sm:mt-10!">

          <Link href={`/events/calendar`}>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-extrabold rounded-lg text-sm px-2.5! py-2.5! text-center me-2 mb-2">
              View Events
            </button>
          
          </Link>


          <Link href={`/churches/list`}>
          
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-extrabold rounded-lg text-sm px-2.5! py-2.5! text-center me-2 mb-2">
              Find a Church
            </button>
          
          </Link>
          

        </div>
      </div>
    </div>
  )
}



export default EmblaCarousel