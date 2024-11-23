import React, { useState } from 'react';
import { Divider, RangeSlider } from '@mantine/core';
import MultiInput from './MultiInput';
import { dropdownData } from '../../Data/JobsData';

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]); 

  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <MultiInput {...item} />
          </div>
          {index < dropdownData.length - 1 && (
            <Divider mr="xs" size="sm" orientation="vertical" />
          )}
        </React.Fragment>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className='flex justify-between text-xs'>
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA-&#8377;{value[1]} LPA</div>
      </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          size="xs"
          color='cinnamon.6'
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
