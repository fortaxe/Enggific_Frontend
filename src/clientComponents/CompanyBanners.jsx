import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const CompanyBanners = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size on client side
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="xl:pt-[60px] pt-[30px]">
      <div className="text-center mb-[30px]">
        <h2 className="md:text-[38px] md:leading-[43.7px] text-[25px] leading-[29.9px] text-textBlack font-bold">
          Our Clients
        </h2>
      </div>

      <Marquee className="bg-white dark:bg-primary md:pb-[60px] pb-[30px]" pauseOnHover={true} speed={80}>
  {[...Array(10)].map((_, index) => (
    <img
      key={index}
      src={`/company${index + 1}.png`}
      width={isMobile ? 90 : 140}
      height={isMobile ? 40 : 64}
      alt={`image`}
      className="ml-6 mr-[30px]" // Added margin-right for spacing
      style={{ 
        aspectRatio: 3 / 2, 
        objectFit: "contain",
        ...(isMobile && { maxWidth: "90px", maxHeight: "40px" })
      }}
    />
  ))}
</Marquee>

    </div>
  );
};

export default CompanyBanners;