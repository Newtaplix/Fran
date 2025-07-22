import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/main/hero'
import Change from '@/components/main/change'
import Testimonials from '@/components/main/testimonial'
import Faqs from '@/components/main/faqs'

const MainPage = () => {
  return (
    <div>
       
        <div>
          <Navbar/>  
          <Hero/>
          <Change/>
          <Testimonials/>
          <Faqs/>
       </div>
      
    </div>
  )
}

export default MainPage