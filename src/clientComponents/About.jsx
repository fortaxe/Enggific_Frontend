import React from 'react'
import { AnimatedListDemo } from "@/components/magicui/animated-list"

const About = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-[157px] 2xl:px-[257px] py-[60px] bg-[#F6F6F6]">
        {/* Left Side - Animated List */}
        <div className="w-full xl:w-[35%] flex bg-white rounded-[23.37px] px-[16px] py-[30px]">
          <AnimatedListDemo />
        </div>
  
        {/* Right Side - About Us */}
        <div className="w-full xl:w-[65%] flex flex-col items-start md:pl-8 mt-6 md:mt-0">
        <p className="text-[16px] underline decoration-[#FA9508] underline-offset-4">About Us</p>

  
          <p className="md:text-[38px] text-[22px] text-[#424242] font-bold mb-[23px]">
            Know about us
          </p>
  
          <p className="md:text-base text-[13px] text-textBlack text-left max-w-[767px] md:leading-[28px]">
            ENGGIFIC Engineering & Scientific is one of the pioneers engaged in
            offering <span className="font-bold">a wide range of Engineering & Scientific laboratory equipment</span>. We
            Manufacture, Export, Import, and Supply a wide range of LAB
            EQUIPMENTS which includes testing equipment, measuring devices,
            quality control equipment, scientific apparatus, land surveying
            instruments, site safety equipment, civil engineering equipment,
            mechanical lab testing machines, drawing instruments, construction
            machinery, and more.
          </p>
        </div>
      </div>
    );
  };
  

export default About