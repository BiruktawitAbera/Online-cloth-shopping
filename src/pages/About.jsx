import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius quam est quis praesentium, repudiandae quibusdam consequatur rerum debitis? Consectetur ipsam neque eligendi cum laborum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolores corporis saepe ad fugiat perferendis soluta. Alias nesciunt fugit tenetur amet recusandae modi quas nam sed!</p>
        <b className='text-gray-800'>Our mission</b>
        <p>Our mission is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto expedita nostrum vitae harum obcaecati numquam.</p>
        </div>
      </div>
      <div>
        <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum molestias nihil totam cum non.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum molestias nihil totam cum non.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptionam Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum molestias nihil totam cum non.</p>
          </div>
        </div>

        <NewsLetter/>
      </div>
    </div>
  )
}

export default About