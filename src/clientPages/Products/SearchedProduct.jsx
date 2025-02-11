import useQuery from '@/clientComponents/utils/useQuery';
import React from 'react'

const SearchedProduct = () => {
    const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  console.log('searchTerm', searchTerm)

//   const filteredProducts = allProducts.filter((product) =>
//     product.toLowerCase().includes(searchTerm)
//   );
  return (
    <div className='px-[60px] py-[70px]'>
        <div className='mb-[70px]'>
                <h2 className='md:text-[38px] text-[26px] text-textBlack'>We found the following for <span className='font-bold'>{searchTerm}</span></h2>
        </div>

        {/* searched List */}
        <div className="flex flex-wrap justify-center gap-[29px]">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-14.5px)] md:w-[calc(25%-21.75px)] md:h-auto h-[282px]  border border-[#D2D2D2] px-[14px] py-[18px] mb-[70px]"
                        >
                            <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                                <p className='text-xs font-bold text-white'>Sale</p>
                            </div>

                            <div className='md:h-[273px] h-[159.55px] mb-[12px]'>
                                <img src='/product-1.png' alt='product' className='w-full h-full object-cover' />
                            </div>

                            <p className='text-textBlack md:text-sm text-xs mb-[22px]'>Vernier Caliper 150mm, 6 inches, Magnetic Steel made with Pinch Fine Measure Function</p>

                            <button className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                                Enquire Now
                            </button>
                        </div>
                    ))}
                </div>
    </div>
  )
}

export default SearchedProduct