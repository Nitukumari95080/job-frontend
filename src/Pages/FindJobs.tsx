import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/FindJobs/SearchBar";
import { Divider } from "@mantine/core";
import Job from "../Components/FindJobs/Job";

const FindeJobs = () => {
  return (
    <>
      <div className=" min-h-[100vh] bg-mine-shaft-950  font-[`poppins] ">
        <Header />
        <Divider size="sm" mx="md"/>
        <SearchBar />
        <Divider size="sm" mx="md"/>
        <Job/>
        <Footer />
      </div>
    </>
  );
};

export default FindeJobs;
