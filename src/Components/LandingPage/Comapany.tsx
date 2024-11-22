import React from "react";
import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
const Comapany = () => {
  return (
    <>
      <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-10 ">
          Trusted By <span className="text-cinnamon-500">1000+</span>Companies
        </div>
       <Marquee pauseOnHover={true}>
        
        {
          companies.map((company,index)=><div key={index} className="mx-8 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer ">
            <img src={`/CompanyImg/asssets/${company}.png`} alt="Company" className="h-14"/>
          </div>)
        }
       </Marquee>
      </div>
    </>
  );
};

export default Comapany;
