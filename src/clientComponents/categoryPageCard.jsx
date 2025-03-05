import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const CategoryPageCard = ({ equipment, page, subName, subId }) => {
    const [idType, setIdType] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const category = {
        id: '1'
    };

    const handleAdd = (newId) => {
        dispatch(addId({ idType: "category", id: newId }));
        // setIdType("");
        // setId("");
        navigate(`/${(equipment.name).replace(/\s+/g, '-')}/sub-categories`);
    };

    const handleNavigate = () => {
        if (page === 'sub-category') {
            dispatch(addId({ idType: "sub-category", id: subId }));
            navigate(`/${subName.replace(/\s+/g, '-')}/${(equipment.name).replace(/\s+/g, '-')}/products`);
        } else {
            // console.log("equipment._id", equipment._id)
            handleAdd(equipment._id);
        }
    };

    // console.log("page", page)
    const backgroundImage = page === 'sub-category' ? equipment.productTypeLogo : equipment.categoryLogo;

    return (
        <div onClick={handleNavigate} className='w-full cursor-pointer rounded-[12px] group'
        style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)' }}
        >
            <div className='h-[160px] sm:h-[283px] rounded-t-[12px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className='sm:h-[68.53px] px-2 sm:px-4 md:px-[31px] py-[10px] sm:py-[20px] flex gap-[13.2px] justify-center items-center overflow-hidden transition-all duration-300 rounded-b-[12px] group-hover:bg-gradient-to-r from-[#F8710C] to-[#F22B06] border-t-2 border-[#E0E0E0] group-hover:text-white'>
                <p className='break-words text-[12px] sm:text-base text-center capitalize truncate'>{equipment.name.toLowerCase()}</p>
            </div>
        </div>

    );
};

export default CategoryPageCard 