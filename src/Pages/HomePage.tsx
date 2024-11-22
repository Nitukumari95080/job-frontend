import React from 'react'
import Header from '../Components/Header/Header'
import DreamJob from '../Components/LandingPage/DreamJob'
import Comapany from '../Components/LandingPage/Comapany'
import JobCategory from '../Components/LandingPage/JobCategory'
import Working from '../Components/LandingPage/Working'
import Testimonials from '../Components/LandingPage/Testimonials'


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
    </div>
    
    </>
  )
}

export default HomePage
