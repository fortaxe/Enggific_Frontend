import { addId } from '@/redux/clientSlice/idSlice';
import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';

const CategoryCarousel = ({ categories }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (newId, name) => {
    dispatch(addId({ idType: "category", id: newId }));
    navigate(`/${name.replace(/\s+/g, '-')}/sub-categories`);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
      partialVisibilityGutter: 21
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      partialVisibilityGutter: 21
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 21
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 21
    }
  };


  const CustomLeftArrow = ({ onClick }) => (
    <button
      className="absolute left-[10.5px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent w-10 h-full flex items-center justify-center shadow-md group-hover:bg-black group-hover:bg-opacity-50 rounded-l-[12px]"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      className="absolute right-[10.5px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent w-10 h-full flex items-center justify-center shadow-md group-hover:bg-black group-hover:bg-opacity-50 rounded-r-[12px]"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="w-full relative">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={false}
        keyBoardControl
        containerClass="w-full group flex"
        itemClass="px-[10.5px]"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {categories.map((category, index) => (
          <div
            className="relative w-full h-80 rounded-[12px] overflow-hidden cursor-pointer border border-gray-200 group"
            key={index}
            onClick={() => handleAdd(category._id, category.name)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={category.categoryLogo}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full h-[140px] bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-row items-end justify-between p-4">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-white text-[18px] font-bold leading-[28px] capitalize whitespace-pre-wrap min-w-[90] w-[190px]">
                  {category.name.toLowerCase()}
                </h3>
                <motion.div
                  className="bg-gradient-to-r from-[#F8710C] to-[#F22B06] w-[52px] h-[52px] flex items-center justify-center rounded-full mt-2"
                  animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5625 26.4375L26.4375 9.5625M26.4375 9.5625H13.7812M26.4375 9.5625V22.2188"
                      stroke="white"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
