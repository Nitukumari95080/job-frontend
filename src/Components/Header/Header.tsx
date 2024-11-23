import React from "react";
import {
  IconRobotFace,
  IconBellRinging,
  IconSettings,
  
} from "@tabler/icons-react";
import { Indicator, Avatar, NavLink } from '@mantine/core';
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <>
      <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
        <div className="flex gap-1 items-center text-cinnamon-600">
          <IconRobotFace className="h-8  w-8 stroke={2.25}" />
          <div className="text-3xl font-semibold ">jobHUNT</div>
        </div>
        {NavLinks()}
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <div>Nitu</div>
            <div>
              {/* With image */}
              <Avatar src="/avatar1.png" alt="it's me" />
            </div>
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1-5} />
          </div>
          <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="cinnamon.5"  size={8} processing offset={6}>
          <IconBellRinging />
          </Indicator>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
