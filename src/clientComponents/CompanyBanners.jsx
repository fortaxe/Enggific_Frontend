import React from "react";

const CompanyBanners = () => {
  return (
    <div className="xl:px-[60px] px-[16px] xl:py-[70px] py-[30px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[16px] xl:gap-[29px]">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[80px] md:h-[90px] xl:h-[100px]"
            style={{
              backgroundImage: `url(/company${index + 1}.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CompanyBanners;
