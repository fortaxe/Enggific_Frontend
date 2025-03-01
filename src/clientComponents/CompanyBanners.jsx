import React from "react";
import Marquee from "react-fast-marquee";

const CompanyBanners = () => {
  return (
    <div className="xl:pt-[70px] pt-[30px]">
      <div className='text-center mb-[30px]'>
        <h2 className='md:text-[38px] md:leading-[43.7px] text-[26px] leading-[29.9px] text-textBlack font-bold'>Our Clients</h2>
      </div>
      <Marquee className="bg-white dark:bg-primary md:pb-[70px] pb-[30px]" pauseOnHover={true} speed={80}>
        {[...Array(6)].map((_, index) => (
          <img
            key={index}
            src={`/company${index + 1}.png`}
            width={200}
            height={90}
            alt={`image`}
            className="ml-6"
            style={{ aspectRatio: 3 / 2, objectFit: "contain" }}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyBanners;

