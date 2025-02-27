import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import InteractiveGrid from "./InteractiveGrid";

const HeroCarousel = ({ carouselData }) => {

  const navigate = useNavigate();

    // const carouselData = [
    //     {
    //         id: 1,
    //         image: 'carousel-bg1.png',
    //         title: 'Your Trusted Partner in Precision Lab Equipment.',
    //         exploreUrl: '/'
    //     },
    //     {
    //         id: 2,
    //         image: 'carousel-bg1.png',
    //         title: 'Your Trusted Partner in Precision Lab Equipment.',
    //         exploreUrl: '/'
    //     },
    //     {
    //         id: 3,
    //         image: 'carousel-bg1.png',
    //         title: 'Your Trusted Partner in Precision Lab Equipment.',
    //         exploreUrl: '/'
    //     }
    // ]

    const images = ['Mesuring_Device_banner.webp', 'Control_equipment_banner.webp', 'safety_equipments_banner.webp']

  return (
    <div>

<div className="w-full md:h-[533.33px] h-[206px] md:mt-[110px] mt-0">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        {images.length > 0 && images.map((item,index) => (
            <div  key={index} 
            className="relative w-full md:h-[533.33px] h-[206px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item})` }}>
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-row xl:justify-end justify-center items-center p-8 md:p-16">
              <div className="flex flex-col items-start max-w-[617px]">
              <h2 className="text-white md:text-[49.33px] text-lg text-left md:text-4xl font-bold xl:mb-[38.08px] mb-[11px]">
                {item.title}
              </h2>
              <button onClick={() => navigate('/product-categories')} className="xl:w-[218.67px] xl:h-[48px] w-[98px] h-[32px] flex justify-center items-center bg-orange-500 text-white xl:text-base text-xs hover:bg-orange-600 transition">
                Explore now
              </button>
              </div>
            </div> */}
          </div>
        )) }
      </Carousel>
    </div>

    
    </div>
    
  );
};

export default HeroCarousel;
