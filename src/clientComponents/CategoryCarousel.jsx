import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CategoryCarousel = ({ categories, page, subName , subId }) => {


    const navigate = useNavigate()

    const dispatch = useDispatch();


    const handleAdd = (newId, name) => {
        dispatch(addId({ idType:"category", id: newId }));
        // setIdType("");
        // setId("");
        navigate(`/${(name).replace(/\s+/g, '-')}/sub-categories`)
    
  };

const handleNavigate = () => {
    // if(page === 'sub-category'){
    //     dispatch(addId({ idType:"sub-category", id: subId }));
    //     navigate(`/${subName.replace(/\s+/g, '-')}/${(equipment.name).replace(/\s+/g, '-')}/products`)
    // } else {
    //     // console.log("equipment._id", equipment._id)
    //     handleAdd(equipment._id)
    // }
}

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full" onClick={handleNavigate}>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {categories.map((category, index) => (
          <div key={index} className=" bg-white shadow-md h-[283px] flex flex-col items-center justify-center ml-[29px] cursor-pointer" onClick={()=>handleAdd(category._id, category.name)}>
            <img src={category.categoryLogo} alt={"category"} className="w-full h-full object-contain" />
            <div className='h-[68.53px] w-full border border-[#E0E0E0] px-[31px] py-[20px] flex gap-[13.2px] justify-start items-center overflow-hidden border-t-[#FA9508] border-t-2 hover:border-[#E5810C] hover:bg-[#E5810C] hover:text-white transition-all duration-300'>
                <p className='break-words xl:text-lg text-base capitalize'>{category.name.toLowerCase()}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
