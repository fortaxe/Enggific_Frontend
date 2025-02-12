import { BASE_URL } from '@/constants';
import React from 'react'
import useFetchData from './utils/useFetchData';
import { useNavigate } from 'react-router-dom';

const LaunchedProducts = () => {

    const navigate = useNavigate();

    const apiUrl = `${BASE_URL}/admin/get/products`;

    const { data, loading, error } = useFetchData(apiUrl);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log("data pr", data)

    return (
        <div className='xl:px-[60px] px-[16px] xl:py-[70px] py-[30px]'>
            <div>
                <div className='text-center xl:mb-[55px] mb-[19px]'>
                    <h3 className='md:text-2xl text-base text-textBlack'>What’s new</h3>
                    <h2 className='md:text-[38px] text-[26px] text-textOrange font-bold'>Newly launched products</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-[29px]">
                    {(data.products && data.products.length > 0) && data.products.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-14.5px)] md:w-[calc(25%-21.75px)] h-auto border border-[#D2D2D2] px-[14px] py-[18px] md:mb-[70px] mb-[0px]"
                        >
                            <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                                <p className='text-xs font-bold text-white'>Sale</p>
                            </div>

                            <div className='md:h-[273px] h-[159.55px] mb-[12px]'>
                                <img src={item.thumbnailImage} alt='product' className='w-full h-full object-cover' />
                            </div>

                            <p className='text-textBlack md:text-sm text-xs mb-[22px]'>{item.name}</p>

                            <button className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                                Enquire Now
                            </button>
                        </div>
                    ))}

                    
                </div>
                <div className='flex justify-center'>

                        <button onClick={() => navigate('/products')} className="w-[216px] h-[48px] md:flex hidden justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                            View All
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default LaunchedProducts