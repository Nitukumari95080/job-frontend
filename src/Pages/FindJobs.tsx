import React from "react";
import SearchBar from "../Components/FindJobs/SearchBar";
import { Divider } from "@mantine/core";
import Job from "../Components/FindJobs/Job";


const FindeJobs = () => {
  return (
    <>
      <div className=" min-h-[100vh] bg-mine-shaft-950  font-[`poppins] ">
      
        <SearchBar />
        <Divider size="sm" mx="md"/>
        <Job/>
        
      </div>
    </>
  );
};

export default FindeJobs;
