import React from "react";
import { IconBrandX, IconRobotFace } from "@tabler/icons-react";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
const Footer = () => {
  return (
    <>
      <div className="mt-20 pb-5">
        <div className="w-1/4 flex flex-col gap-4">
          <div className="flex gap-1 items-center text-cinnamon-600">
            <IconRobotFace className="h-6  w-6 stroke={2.25}" />
            <div className="text-xl font-semibold ">jobHUNT</div>
          </div>
          <div className="text-sm text-mine-shaft-300">
            JOb portal with user profiles, skill updates, cerifications, work
            experience and admin job postings.
          </div>
          <div className="flex gap-3 text-cinnamon-600 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700 ">
            <div><IconBrandFacebook /></div>
            <div><IconBrandInstagram /></div>
            <div><IconBrandX /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
