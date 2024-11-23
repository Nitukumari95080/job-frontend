import React from "react";
import { jobCategory } from "../../Data/Data";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';


const JobCategory = () => {
  if (!Array.isArray(jobCategory) || jobCategory.length === 0) {
    return (
      <div className="mt-20 pb-5 text-center text-cinnamon-500">
        No job categories available at the moment.
      </div>
    );
  }

  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        Browser <span className="text-cinnamon-600"> Jobs</span> Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2 mb-10">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>
      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-cinnamon-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}>
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 p-5 border border-cinnamon-400 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out !shadow-cinnamon-300 my-5">
              <div className="p-2 bg-cinnamon-600 rounded-full">
                {/* only imge ko print karna h  */}
                <img
                  className="h-16 w-16"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-mine-shaft-200 text-center">
                {category.desc}
              </div>
              <div className="text-cinnamon-600 text-lg ">{category.jobs}+ new job</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
