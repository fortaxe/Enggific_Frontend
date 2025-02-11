import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const [activeFilter, setActiveFilter] = useState(0);

    const filters = [
        'Soil Test Equipment',
        'Concrete Test Equipment',
        'Bitumen Test Equipment',
        'Scientific Items',
        'Microscopes & Lab Apparatus',
        'Engineering & Workshop',
    ];

    const navigate = useNavigate()

    const product = {
        id: '1'
    }
    const equipment = {
        id: '2'
    }
    const category = {
        id: '1'
    }

    const handleNavigate = () => {
        navigate(`/product-categories/${equipment.id}/${category.id}/${product.id}`)  
        
    }

    return (
        <section>
            <div className="mx-auto max-w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-[38px] text-textBlack font-bold sm:text-3xl">Measuring Devices</h2>
                </header>

                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Filters & Sorting </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-2">
                    <div className="hidden space-y-4 lg:block">
                        <div>
                            <p className="block text-lg font-bold text-textBlack px-[11px] mb-[17px]">Sub Category</p>
                            <div className="space-y-2">
                                {filters.map((filter, index) => (
                                    <div
                                        key={index}
                                        className={`w-[265px] h-[49px] px-[11px] flex items-center cursor-pointer rounded-md 
                                                    ${activeFilter === index
                                                ? 'bg-[#FCF1E4] text-[#E5810C]'
                                                : 'text-textBlack'
                                            } 
                                                    hover:bg-[#FCF1E4] hover:text-[#E5810C] transition duration-300`}
                                        onClick={() => setActiveFilter(index)}
                                    >
                                        <p className="text-base">{filter}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-3'>
                        {/* Sorting */}
                        <div className='flex items-center mb-[31px] gap-[13px]'>
                            <label htmlFor="SortBy" className="block text-lg font-bold text-textBlack"> Sort By </label>

                            <select id="SortBy" className="mt-1 w-[155px] h-[38px] border border-[#D2D2D2] focus:border-[#E5810C] focus:outline-none text-sm">
                                <option>Sort By</option>
                                <option value="Price, DESC">Price</option>
                                <option value="Price, ASC">Price</option>
                                <option value="Title, DESC">Title</option>
                                <option value="Title, ASC">Title</option>
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-[29px]">
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    onClick={handleNavigate}
                                    className="w-full sm:w-[calc(50%-14.5px)] md:w-[calc(50%-14.5px)] lg:w-[calc(33.333%-19.33px)] md:h-auto h-[282px]  border border-[#D2D2D2] px-[14px] py-[18px] cursor-pointer"
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


                </div>
            </div>
        </section>
    )
}

export default ProductList