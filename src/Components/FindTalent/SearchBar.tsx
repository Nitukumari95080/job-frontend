import React, { useState } from "react";
import { Input, Divider, RangeSlider } from "@mantine/core";
import { searchFields } from "../../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]); // Salary range state

  return (
    <div className="px-5 py-8 items-center !text-mine-shaft-100 flex">
      {/* Talent Name Input */}
      <div className="flex items-center w-1/5">
        <div className="text-cinnamon-600 bg-mine-shaft-900 rounded-full p-1 mr-2">
          <IconUserCircle size={20} />
        </div>
        <Input
          className="[&_input]:!placeholder-mine-shaft-300"
          variant="unstyled"
          placeholder="Talent Name"
        />
      </div>

      {/* Dynamic Search Fields */}
      {searchFields.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <MultiInput title={item.title} icon={item.icon} options={item.options} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>
      ))}

      {/* Salary Range Slider */}
      <div className="w-1/5 text-sm text-mine-shaft-100 [&_.mantine-Slider-label]:!translate-y-10">
        <div>Salary</div>
        <div className="">
          &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
        </div>
        <RangeSlider
          color="cinnamon.6"
          size="xs"
          value={value}
          onChange={setValue}
          min={1}
          max={100}
        />
      </div>
    </div>
  );
};

export default SearchBar;
