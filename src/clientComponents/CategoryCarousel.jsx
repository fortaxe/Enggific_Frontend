import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react';
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
    <div className="w-full relative group">
      {/* Navigation arrows */}
      {categories.length > itemsPerScreen && (
        <>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent w-10 h-full flex items-center justify-center shadow-md group-hover:bg-black group-hover:bg-opacity-50 rounded-l-[12px]"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent w-10 h-full flex items-center justify-center shadow-md group-hover:bg-black group-hover:bg-opacity-50 rounded-r-[12px]"
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
            gap: '21px',
          }}
        >
          {visibleCategories.map((category, index) => (
            // <div
            //   key={index}
            //   className="flex-shrink-0 flex flex-col cursor-pointer rounded-xl overflow-hidden transition-all duration-300 h-[224px] group my-[10px]"
            //   style={{ 
            //      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
            //     width: `calc((100% - ${(itemsPerScreen - 1) * 30}px) / ${itemsPerScreen})`,
            //   }}
            //   onClick={() => handleAdd(category._id, category.name)}
            // >
            //   <div className="h-full flex-grow flex w-full overflow-hidden">
            //     <img
            //       src={category.categoryLogo}
            //       alt={"category"}
            //       className="w-full h-full object-contain"
            //     />
            //   </div>

            // </div>

            <div className="relative w-80 h-80 rounded-[12px] overflow-hidden shadow-lg cursor-pointer border border-gray-200" key={index} style={{ width: `calc((100% - ${(itemsPerScreen - 1) * 21}px) / ${itemsPerScreen})` }} onClick={() => handleAdd(category._id, category.name)}>
              <img
                src={category.categoryLogo} // Update the path accordingly
                alt="Engineering Lab Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full h-[140px] bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-row items-end justify-between p-4">
                <h3 className="text-white text-[18px] font-bold leading-[20.13px] capitalize">{category.name.toLowerCase()}</h3>
                <div className="bg-gradient-to-r from-[#F8710C] to-[#F22B06] w-[52px] h-[52px] flex items-center justify-center rounded-full mt-2">
                  <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5625 26.4375L26.4375 9.5625M26.4375 9.5625H13.7812M26.4375 9.5625V22.2188" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;