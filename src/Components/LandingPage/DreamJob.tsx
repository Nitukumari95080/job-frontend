import React from "react";
import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
const DreamJob = () => {
  return (
    <>
      <div className="flex items-center px-16  ">
        <div className="left flex-col w-[45%] gap-3  ">
          <div className="text-6xl font-bold text-mine-shaft-100 leading-tight">
            Find Your <span className="text-cinnamon-500">Dream Jobs</span>{" "}
            <span>Todays With us.</span>
          </div>
          <div className="text-lg text-mine-shaft-200">
            Discover thousands of opportunities and take the next step in your
            career journey.
          </div>
          <div className="flex gap-3 mt-5">
            <TextInput
              variant="unstyled"
              label="Job Title"
              placeholder="Full Stack Developer"
              className="border-t-mine-shaft-900 rounded-lg p-1 px-2  bg-mine-shaft-900 text-cinnamon-500 [&_input]:!text-mine-shaft-100"
            />
            <TextInput
              variant="unstyled"
              label="Job Type"
              placeholder="Full Time"
              className="border-t-mine-shaft-800 rounded-lg p-1 px-2  bg-mine-shaft-900 text-cinnamon-500 [&_input]:!text-mine-shaft-100"
            />
            <div className="flex items-center justify-center h-full w-20 bg-cinnamon-500 text-mine-shaft-100 rounded-lg p-2 hover:bg-cinnamon-700 cursor-pointer">
              <IconSearch className="h-[85%] w-[85%]" />
            </div>
          </div>
        </div>
        <div className="right w-[55%] items-center justify-center">
          <div className="img w-[30rem] relative">
            <img src="/landing.jpg" alt="Landing" />
            <div className="absolute -right-10 w-fit top-[50%] border-cinnamon-500 border rounded-lg p-2 backdrop-blur-md">
              <div className="text-center text-mine-shaft-100 text-5m mb-1">
                10K+ got
              </div>
              <Avatar.Group>
                <Avatar src="boy.png" />
                <Avatar src="women1.png" />
                <Avatar src="woman.png" />
                <Avatar>+9K</Avatar>
              </Avatar.Group>
            </div>
            <div>
              <div className="absolute -left-5 w-fit top-[28%] border-cinnamon-500 border rounded-lg p-2 backdrop-blur-md flex flex-col">
                <div className="flex gap-2 items-center ">
                  <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                    <img src="/google.png" alt="" />
                  </div>
                  <div className="text-sm text-mine-shaft-100">
                    <div>Software Engineering</div>
                    <div className="text-mine-shaft-50 text-xs">Tulas</div>
                  </div>
                </div>
                <div className="flex gap-2 text-mine-shaft-800 text-xs justify-around">
                  <span>1 day ago</span>
                  <span> 120 Application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamJob;
