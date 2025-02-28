import { Globe } from "@/components/magicui/globe";


const OurCards = () => {
  return (
    <div className='bg-[#F8F8F8] flex justify-center items-center py-[50px] px-[16px] md:px-[60px]'>
      <div className='flex flex-col md:flex-row justify-between items-center w-full relative min-h-[500px]'>
        {/* Vision Card - Left Side */}
        <div className='w-full sm:w-[calc(50%-14.5px)] md:w-[calc(25%-14.5px)] mb-8 md:mb-0'>
          <div className='w-[90px] h-[4px] bg-[#E5810C] mb-[15px]' />
          <div className='mb-[15px]'>
            <p className='md:text-[38px] text-[32px] font-bold'>Our Vision</p>
          </div>
          <div>
            <p className='md:text-base text-[13px]'>Our vision is to help our customers achieve precision and accuracy in their results by supplying & equipping them with the most advanced, digital, precise, modern trending - engineering and scientific lab equipment.</p>
          </div>
        </div>

        {/* Globe Component - Center */}
        <div className='w-full 500:w-[60%] sm:w-[50%]  md:w-[40%] h-[320px] flex justify-center items-center my-4 md:my-0'>
          <Globe className="relative" />
        </div>

        {/* Mission Card - Right Side */}
        <div className='w-full sm:w-[calc(50%-14.5px)] md:w-[calc(25%-14.5px)] mt-8 md:mt-0'>
          <div className='w-[90px] h-[4px] bg-[#E5810C] mb-[15px]' />
          <div className='mb-[15px]'>
            <p className='md:text-[38px] text-[32px] font-bold'>Our Mission</p>
          </div>
          <div>
            <p className='md:text-base text-[13px]'>Our mission is to help our customers achieve precision and accuracy in their results by supplying & equipping them with the most advanced, digital, precise, modern trending - engineering and scientific lab equipment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCards;