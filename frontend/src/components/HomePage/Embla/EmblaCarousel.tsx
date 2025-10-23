import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

  return (
    <div className="relative">
      <div className='embla' ref={emblaRef}>
        <div className='embla_container'>
          <div className="embla_slide relative">
            <img src={'/children2.jpg'} alt='Children' className="w-full h-full object-cover" />
          </div>
          <div className="embla_slide relative">
            <img src={'/hiking.jpg'} alt='Hiking' className="w-full h-full object-cover" />
          </div>
          <div className="embla_slide relative">
            <img src={'/praise.jpg'} alt='Praise' className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Centered content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Your Main Text Here
        </h1>
        <div className="flex gap-4 mt-4">
          
          
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-extrabold rounded-lg text-sm px-2.5! py-2.5! text-center me-2 mb-2">
            View Our Events
          </button>

          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-extrabold rounded-lg text-sm px-2.5! py-2.5! text-center me-2 mb-2">
            Find a Church
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel