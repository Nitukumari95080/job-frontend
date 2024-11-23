import React from 'react'
import Header from '../Components/Header/Header'
import DreamJob from '../Components/LandingPage/DreamJob'
import Comapany from '../Components/LandingPage/Comapany'
import JobCategory from '../Components/LandingPage/JobCategory'
import Working from '../Components/LandingPage/Working'
import Testimonials from '../Components/LandingPage/Testimonials'
import Subscibe from '../Components/LandingPage/Subscibe'
import Footer from '../Components/Footer/Footer'


const HomePage = () => {
  return (
    <>
    <div className='bg-mine-shaft-950 min-h-[100vh] font-[`poppins]'>
       <Header/>
       <DreamJob/>
       <Comapany/>
       <JobCategory/>
       <Working/>
       <Testimonials/>
       <Subscibe/>
       <Footer/>
    </div>
    
    </>
  )
}

export default HomePage
