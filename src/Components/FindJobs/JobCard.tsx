import React from "react";
import { Text  } from "@mantine/core";
import { Divider } from "@mantine/core";
import { IconBookmarks,IconClockHour3} from "@tabler/icons-react";
const JobCard = (props:any) => {
  return (
    <>
      <div className="bg-mine-shaft-800 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cinnamon-500 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-md">
              <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
            </div>
            <div>
              <div className="text-mine-shaft-100 font-semibold">{props.jobTitle}</div>
              <div className="font-xs text-mine-shaft-300">
                {props.company} &#x2022;{props.applicants}Applicants
              </div>
            </div>
            
          </div>
          <IconBookmarks className="text-mine-shaft-300 hover:cursor-pointer" />
        </div>
        <div
          className="
            flex gap-2 
            [&>div]:py-1
            [&>div]:px-2
            [&>div]:bg-mine-shaft-700 
            [&>div]:text-cinnamon-600 
             [&>div]:rounded-lg 
             [&>div]:text-xs
            "
        >
          <div>{props.experience}</div>
          <div>{props.jobType}</div>
          <div>{props.location}</div>
        </div>
        <div>
          <Text className="!text-xs !text-mine-shaft-300 text-justify" lineClamp={3}>
           {props.description}
          </Text>
          <Divider size="xs" color="mineShaft.6" />
        </div>
        <div className="flex justify-between"> 
            <div className="font-semibold text-mine-shaft-100">
                &#8377;{props.package}
            </div>
            <div className="flex gap-1 text-xs items-center">
                <IconClockHour3 className="h-5 w-5 text-mine-shaft-400" stroke={1.5}/>{props.postedDaysAgo}Days ago
            </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
