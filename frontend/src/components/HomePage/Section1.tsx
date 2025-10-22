import React from 'react'

const Section1 = () => {
  
  
  
  return (
    <div className='relative max-h-full'>
      <img src={'/mockimage.jpg'} alt='imageofcamp' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-white text-4xl font-bold text-center'>
          Your Text Here
        </h1>
      </div>
    </div>
  )
}

export default Section1