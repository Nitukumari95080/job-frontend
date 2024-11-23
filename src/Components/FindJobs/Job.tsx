import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../../Data/JobsData'

const Job = () => {
  return (
    <>
      <div className='p-5'>
        <div className='flex justify-between'>
            <div className='text-2xl font-bold'>Recommended Jobs</div>
            <Sort/>
        </div>
        <div className='mt-10  flex flex-wrap gap-5'>
        {
            jobList.map((job,index)=><JobCard key={index} {...job}/>)
        }
        </div>
        
        
      </div>
    </>
  )
}

export default Job