import React from 'react'
import InstagramLabelIcon from '@src/assets/svgs/InstagramLabelIcon.tsx'
import IoReOrderIcon from '@src/assets/svgs/IoReOrderIcon.tsx'

const NavigationPannel = () => {
  return (
    <section className=''>
      <article>
        <InstagramLabelIcon className='w-40' />
      </article>
      <article className='flex items-center cursor-pointer'> 
        <IoReOrderIcon />
        <p className='ml-5'> More </p>
      </article>
    </section>
  )
}

export default NavigationPannel 