import React from "react";
import { work } from "../../Data/Data";
import { Avatar } from "@mantine/core";

const Working = () => {
  return (
    <div mt-20 pb-5>
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
        How it <span className="text-cinnamon-500">Works</span>
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2 mb-10">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <div className="flex px-16 justify-between items-center gap-10">
        <div className="relative">
          <img src="/Working/Girl.png" alt="Girl" className="w-[30rem]" />
          <div className="w-36 flex flex-col items-center gap-1 border border-cinnamon-600 rounded-xl py-3 px-1 backdrop-blur-md top-[15%] absolute right-0">
            <Avatar src="boy.png" alt="it's me" className="!h-16 w-16" />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xm text-mine-shaft-300 text-center">
              70% Completed
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2.5 bg-cinnamon-600 rounded-full">
                {/* only imge ko print karna h  */}
                <img
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                  className="h-12 w-12"
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
