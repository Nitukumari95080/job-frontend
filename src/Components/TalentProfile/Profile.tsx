import React from "react";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Button, Divider } from "@mantine/core";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  return (
    <>
      <div className="w-2/3">
        <div className="relative">
          <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
          <img
            className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
            src="/avatar.png"
            alt=""
          />
        </div>
        <div className="px-3 mt-16">
          <div className="text-3xl font-semibold flex text-mine-shaft-100 justify-between">
            {props.name}
            <Button color="cinnamon.4" variant="light">
              Message
            </Button>
          </div>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role}{" "}
            &bull; {props.company}
          </div>
          <div className="font-semibold flex text-lg text-mine-shaft-100 items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {props.location}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-mine-shaft-100">
            About
          </div>
          <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-mine-shaft-100">
            Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {props.skills?.map((skill: any, index: number) => (
              <div
                key={index}
                className="bg-cinnamon-500 text-sm bg-opacity-15 rounded-3xl text-cinnamon-500 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-4 text-mine-shaft-100">
            Experience
          </div>
          <div className="flex flex-col gap-8">
            {props.experience?.map((exp: any, index: number) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
          <div className="text-2xl font-semibold mb-4 text-mine-shaft-100">
            Certifications
          </div>
          {props.certifications?.map((certi: any, index: number) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
