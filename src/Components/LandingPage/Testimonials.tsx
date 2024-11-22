import React from "react";
import { Avatar, Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <>
      <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-3">
          What <span className="text-cinnamon-500">User</span> says about us?
        </div>
        <div className="flex flex-col gap-3 w-[23%]">
          <div className="flex gap-2 items-center">
            {/* With image */}
            <Avatar src="/boy.png" alt="it's me" />
            <div>
              <div className="text-lg text-mine-shaft-100 font-semibold">Nitu Kumari</div>
              <Rating value={3.5} fractions={2} readOnly />
            </div>
          </div>
          <div className="text-xs text-mine-shaft-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, porro!</div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
