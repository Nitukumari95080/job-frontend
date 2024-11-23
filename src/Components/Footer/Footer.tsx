import React from "react";
import { footerLinks } from "../../Data/Data";
import { IconBrandX, IconRobotFace } from "@tabler/icons-react";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <div className="pt-20 pb-5 gap-5 flex  justify-around bg-mine-shaft-950  font-[`poppins]`] ">
        {/* Left Section */}
        <div className="w-1/4 flex flex-col gap-4">
          <div className="flex gap-1 items-center text-cinnamon-600">
            <IconRobotFace className="h-6 w-6 stroke-[2.25]" />
            <div className="text-xl font-semibold">jobHUNT</div>
          </div>
          <div className="text-sm text-mine-shaft-300">
            Job portal with user profiles, skill updates, certifications, work
            experience, and admin job postings.
          </div>
          <div className="flex gap-3 text-cinnamon-600 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
            <div>
              <IconBrandFacebook />
            </div>
            <div>
              <IconBrandInstagram />
            </div>
            <div>
              <IconBrandX />
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="flex gap-10 ">
          {footerLinks.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Title */}
              <div className="text-lg font-semibold mb-4 text-cinnamon-600">{item.title}</div>
              {/* Links */}
              {item.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="text-mine-shaft-100 text-sm hover:text-cinnamon-700 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
                >
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
