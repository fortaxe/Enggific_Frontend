import CategoryPageCard from "@/clientComponents/categoryPageCard";
import EquipmentCard from '@/clientComponents/EquipmentCard'
import Loader from '@/clientComponents/Loader';
import useFetchData from '@/clientComponents/utils/useFetchData';
import { BASE_URL } from '@/constants';
import React from 'react'

const ProductCategories = () => {
  const apiUrl = `${BASE_URL}/admin/get/categories`;
  const { data, loading, error } = useFetchData(apiUrl);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='xl:mt-[170px] mt-[100px]'>
      <div className='lg:px-[60px] px-[16px]'>
        <div className='md:mb-[40px] mb-[30px]'>
          <h3 className='md:text-2xl text-base text-center text-textBlack'>What's new</h3>
          <div className="relative">
            <h2 className='md:text-[38px] text-center md:leading-[43.7px] text-[22px] leading-[28px] text-textBlack font-bold'>
              Newly launched products
            </h2>
          </div>
        </div>

        {/* Grid for Categories */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[30px] gap-[16px] mt-[40px] mb-[70.07px]'>
          {(data?.categories && data?.categories.length) && data?.categories.map((item) => (
            <CategoryPageCard key={item._id} equipment={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
