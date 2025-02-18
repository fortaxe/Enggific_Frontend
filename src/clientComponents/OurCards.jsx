import React from 'react'

const OurCards = () => {
    return (
        <div className='bg-[#F8F8F8] flex justify-center items-center py-[91px]'>
            <div className='flex flex-wrap gap-[29px] max-w-[937px] w-full'>

                <div className='relative w-full sm:w-[calc(50%-14.5px)] md:w-[calc(50%-14.5px)] h-[320px] py-[61px] pl-[50px] pr-[18px] shadow-md z-[1]'>
                    <div className='z-[1]'>
                        <div className='w-[90px] h-[4px] bg-[#E5810C] mb-[15px]' />
                        <div className='mb-[15px]'>
                            <p className='md:text-[38px] text-[32px] font-bold'>Our Vision</p>
                        </div>
                        <div className=''>
                            <p className='md:text-base text-[13px]'>Our vision is to help our customers achieve precision and accuracy in their results by supplying & equipping them with the most advanced, digital, precise, modern trending - engineering and scientific lab equipment.</p>
                        </div>
                    </div>
                    {/* curve-bg */}
                    <div className='absolute bottom-0 left-0 w-full -z-[1]'>
                        <svg className='w-full h-[200px]' viewBox="0 0 450 198" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M275.186 96.0202C165.953 16.8358 46.2378 -0.960684 0.0344238 0.0391187L0.0344342 198H450V131.513C379.661 149.909 304.149 115.516 275.186 96.0202Z" fill="#FDF3E7" />
                        </svg>
                    </div>
                </div>


                <div className='relative w-full sm:w-[calc(50%-14.5px)] md:w-[calc(50%-14.5px)] h-[320px] py-[61px] pl-[50px] pr-[18px] shadow-md z-[1]'>
                    <div className='z-[1]'>
                        <div className='w-[90px] h-[4px] bg-[#E5810C] mb-[15px]' />
                        <div className='mb-[15px]'>
                            <p className='md:text-[38px] text-[32px] font-bold'>Our Mission</p>
                        </div>
                        <div className=''>
                            <p className='md:text-base text-[13px]'>Our vision is to help our customers achieve precision and accuracy in their results by
                                supplying & equipping them with the most advanced, digital, precise, modern
                                trending - engineering and scientific lab equipment.</p>
                        </div>
                    </div>
                    {/* curve-bg */}
                    <div className='absolute bottom-0 left-0 w-full -z-[1]'>
                        <svg className='w-full h-[200px]' viewBox="0 0 450 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M237.931 103.238C170.225 140.344 51.4335 81.9139 0 48V196H450V0C401.491 5.98481 322.564 56.8557 237.931 103.238Z" fill="#FDF3E7" />
                        </svg>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OurCards

{/* <svg width={450} height={198} viewBox="0 0 450 198" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M275.186 96.0202C165.953 16.8358 46.2378 -0.960684 0.0344238 0.0391187L0.0344342 198H450V131.513C379.661 149.909 304.149 115.516 275.186 96.0202Z" fill="#FDF3E7" />
</svg> */}