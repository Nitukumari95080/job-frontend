import React from 'react'
import { Divider } from "@mantine/core";
import SearchBar from '../Components/FindTalent/SearchBar';
import Talents from '../Components/FindTalent/Talents';


const FindTalents = () => {
  return (
    <>
      <div className=" min-h-[100vh] bg-mine-shaft-950  font-[`poppins] ">
        
        <Divider size="sm" mx="md"/>
           <SearchBar/>
        <Divider size="sm" mx="md"/>
      <Talents/>
      </div>
    </>
  )
}

export default FindTalents
