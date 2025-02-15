import React from "react";

const CompanyBanners = () => {
  return (
    <div className="xl:px-[60px] px-[16px] xl:py-[70px] py-[30px]">
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-evenly xl:gap-[29px] gap-[16px]">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="xl:w-[200px] xl:h-[90px] w-[90-61px] h-[80px]"
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
