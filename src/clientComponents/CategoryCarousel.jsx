import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategoryCarousel = ({ categories, page, subName, subId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleAdd = (newId, name) => {
    dispatch(addId({ idType: "category", id: newId }));
    navigate(`/${(name).replace(/\s+/g, '-')}/sub-categories`);
  };

  // Determine how many items to show per screen
  const getItemsPerScreen = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 4;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  };
  
  const [itemsPerScreen, setItemsPerScreen] = useState(getItemsPerScreen());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerScreen(getItemsPerScreen());
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (categories.length > itemsPerScreen) {
        setCurrentIndex((prevIndex) => 
          prevIndex === categories.length - itemsPerScreen ? 0 : prevIndex + 1
        );
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [categories.length, itemsPerScreen]);
  
  const handleNext = () => {
    if (currentIndex < categories.length - itemsPerScreen) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(categories.length - itemsPerScreen); // Loop to end
    }
  };
  
  // Visible categories based on current index and items per screen
  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerScreen);
  
  return (
    <div className="w-full relative">
      {/* Navigation arrows */}
      {categories.length > itemsPerScreen && (
        <>
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Category cards container */}
      <div className="w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(0px)`,
            gap: '29px',
          }}
        >
          {visibleCategories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-md flex flex-col cursor-pointer rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-[224px]"
              style={{ 
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                width: `calc((100% - ${(itemsPerScreen - 1) * 29}px) / ${itemsPerScreen})`,
              }}
              onClick={() => handleAdd(category._id, category.name)}
            >
              <div className="h-[214px] flex-grow flex items-center justify-center overflow-hidden">
                <img
                  src={category.categoryLogo}
                  alt={"category"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className='h-[68.53px] w-full border border-[#E0E0E0] px-3 py-[20px] flex justify-center items-center border-t-gradient-to-r from-[#F8710C] to-[#F22B06] border-t-2 hover:bg-gradient-to-r from-[#F8710C] to-[#F22B06] hover:text-white transition-all duration-300'>
                <p className='break-words text-center text-base truncate w-full capitalize'>{category.name.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;