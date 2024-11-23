import React from "react";
import { TextInput,Button } from "@mantine/core";

const Subscibe = () => {
  return (
    <>
      <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
          Never Wants to Miss Any{" "}
          <span className="text-cinnamon-600">Job News?</span>
        </div>
        <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2  items-center rounded-xl">
          <TextInput
          className="[&_input]:text-mine-shaft-100 font-semibold"
            variant="unstyled"
            placeholder="Your@gmail.com"
            size="xl"
          />
          <Button size="lg" variant="filled" className="!rounded-lg" color="cinnamon.6">Subscribe</Button>

        </div>
      </div>
    </>
  );
};

export default Subscibe;
