import React from "react";
import { Carousel } from "react-carousel-minimal";
import { useNavigate } from "react-router-dom";

const HeroCarousel = ({ carouselData }) => {
  const navigate = useNavigate();

  console.log("carar", carouselData)

  const images = ['Mesuring_Device_banner.webp', 'Control_equipment_banner.webp', 'safety_equipments_banner.webp']

  const data = images.map((item) => ({
    image: `/${item}`,
    caption: '',
  }));

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
  };

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return (
    <div className="w-full md:h-[533.33px] h-[206px] md:mt-[110px]">
      <Carousel
        data={data}
        time={3000}
        width="100%"
        height="533.33px"
        // captionStyle={captionStyle}
        radius="10px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="white"
        slideImageFit="cover"
        thumbnails={false}
        showNav={false}
        onClick={(index) => navigate(carouselData[index]?.exploreUrl || '/')}
      />
    </div>
  );
};

export default HeroCarousel;
