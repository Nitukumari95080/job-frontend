import React from "react";
import { Avatar, Text, Button } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
const TalentCard = (props: any) => {
  return (
    <>
      <div className="bg-mine-shaft-800 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-cinnamon-500 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-full">
              <Avatar src={`/${props.image}.png`} size="lg" alt="" />
            </div>
            <div>
              <div className=" text-mine-shaft-50 text-lg font-semibold">
                {props.name}
              </div>
              <div className="font-sm text-mine-shaft-300">
                {props.role} &bull; {props.company}
              </div>
            </div>
          </div>
          <IconHeart className="text-mine-shaft-300 hover:cursor-pointer "stroke={1.5} />
        </div>

        <div
          className="
            flex gap-2 
            // [&>div]:py-1
            // [&>div]:px-2
            // [&>div]:bg-mine-shaft-700 
            // [&>div]:text-cinnamon-600 
            //  [&>div]:rounded-lg 
            //  [&>div]:text-xs
            "
        >
          {
            props.topSkills?.map((skill:any,index:any)=><div className="p-2 py-1 bg-mine-shaft-800 text-cinnamon-600 rounded-lg text-xs">{skill}</div>)
          }
        </div>
        <div>
          <Text
            className="!text-xs !text-mine-shaft-300 text-justify"
            lineClamp={3}
          >
           {props.about}
          </Text>
          <Divider size="xs" color="mineShaft.6" />
        </div>
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-100">
            &#8377;{props.expectedCtc}
          </div>
          <div className="flex gap-1 text-xs items-center">
            <IconMapPin className="h-5 w-5 text-mine-shaft-400" stroke={1.5} />
            {props.location}
          </div>
        </div>
        <Divider size="xs" color="mineShaft.6" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
          <Link to="/talent-profile">
            <Button  color="cinnamon.6" variant="outline" fullWidth>Profile</Button>
          </Link>
          <div>
            <Button color="cinnamon.6" variant="light" fullWidth>Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentCard;
