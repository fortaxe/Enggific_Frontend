import { addId } from '@/redux/clientSlice/idSlice';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const EquipmentCard = ({ equipment, page, subName , subId }) => {

    const [idType, setIdType] = useState("");
  const [id, setId] = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch();
    

    const category = {
        id: '1'
    }

    const handleAdd = (newId) => {
            dispatch(addId({ idType:"category", id: newId }));
            // setIdType("");
            // setId("");
            navigate(`/${(equipment.name).replace(/\s+/g, '-')}/sub-categories`)
        
      };

    const handleNavigate = () => {
        if(page === 'sub-category'){
            dispatch(addId({ idType:"sub-category", id: subId }));
            navigate(`/${subName.replace(/\s+/g, '-')}/${(equipment.name).replace(/\s+/g, '-')}/products`)
        } else {
            // console.log("equipment._id", equipment._id)
            handleAdd(equipment._id)
        }
    }

    // console.log("page", page)

    const backgroundImage = page === 'sub-category' ? equipment.productTypeLogo : equipment.categoryLogo
    
    return (
        <div onClick={handleNavigate} className='w-full sm:w-[calc(50%-14.5px)] md:w-[calc(50%-14.5px)] lg:w-[calc(33.333%-19.33px)] h-[282.95px] shadow-md cursor-pointer'>
            <div className='h-[214.42px] bg-cover bg-center border-b-[3.92px] border-[#E5810C]' style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className='h-[68.53px] border border-[#E0E0E0] px-[31px] flex gap-[13.2px] justify-start items-center overflow-hidden hover:border-[#E5810C] hover:bg-[#E5810C] hover:text-white transition-all duration-300'>
                <div className=''>
                    {/* {equipment.icon} */}
                </div>
                <p className='break-words lg:text-lg text-base'>{equipment.name}</p>
            </div>
        </div>
    )
}

export default EquipmentCard