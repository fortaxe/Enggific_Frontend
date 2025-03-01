import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CategoryCarousel = ({ categories, page, subName, subId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (newId, name) => {
    dispatch(addId({ idType: "category", id: newId }));
    navigate(`/${(name).replace(/\s+/g, '-')}/sub-categories`);
  };

  const handleNavigate = () => {
    // Your existing navigation logic here
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
      // Removed partialVisibilityGutter
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      // Removed partialVisibilityGutter
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      // Removed partialVisibilityGutter
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      // Removed partialVisibilityGutter
    },
  };

  return (
    <div className="w-full" onClick={handleNavigate}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        itemClass=""
        partialVisible={false}
        centerMode={false}
        customTransition="transform 500ms ease-in-out"
        removeArrowOnDeviceType={["mobile"]}
        slidesToSlide={1}
        keyBoardControl={true}
        customStyles={{
          container: {
            paddingLeft: 0,
            marginRight: -29, // Negative margin to offset last item's margin
          }
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              marginRight: '29px' // Keep right margin on all items
            }}
            className="bg-white shadow-md flex flex-col cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => handleAdd(category._id, category.name)}
          >
            <div className="h-[214px] flex-grow flex items-center justify-center overflow-hidden">
              <img
                src={category.categoryLogo}
                alt={"category"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className='h-[68.53px] w-full border border-[#E0E0E0] px-3 py-[20px] flex justify-center items-center border-t-[#FA9508] border-t-2 hover:border-[#E5810C] hover:bg-[#E5810C] hover:text-white transition-all duration-300'>
              <p className='break-words text-center text-base truncate w-full capitalize'>{category.name.toLowerCase()}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;