import React from 'react'


const ChooseUs = () => {

    const data = [
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Award--Streamline-Tabler-Filled.svg' />)],
            title: 'Unmatched Quality Standards',
            decription: 'We are committed to delivering laboratory equipment that meets the highest international quality standards, ensuring precision and durability for all your scientific needs.'
        },
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Bag-Suitcase-4--Streamline-Plump-Remix.svg' />)],
            title: 'Comprehensive Product Range',
            decription: 'Our extensive portfolio includes cutting-edge engineering and scientific equipment tailored to meet the requirements of various industries, research institutions, and educational organizations.'
        },
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Group-Fill--Streamline-Mingcute-Fill.svg' />)],
            title: 'Expert Team',
            decription: 'With years of expertise, our skilled professionals provide technical support and guidance, helping you select the right equipment for your applications.'
        },
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Call-Center-Support-Service--Streamline-Core.svg' />)],
            title: 'Reliable After-Sales Support',
            decription: 'Our dedicated support team is always available for maintenance, troubleshooting, and ensuring the longevity of your equipment.'
        },
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Alarm-Clock--Streamline-Core.svg' />)],
            title: 'On-Time Delivery',
            decription: 'We prioritize your schedules by ensuring prompt and reliable delivery, so you can focus on your work without delays.'
        },
        {
            icon:[(<img className='md:w-[54px] md:h-[54px] w-[48.86px] h-[48.86px]' src='/Document-Currency-Rupee--Streamline-Heroicons.svg' />)],
            title: 'Competitive Pricing',
            decription: 'We combine affordability with quality, ensuring you get the best value for your investment without compromising on performance.'
        }
    ]

    return (
        <div className='md:px-[60px] px-[16px] md:pb-[100px] pb-[30px]'>
            {/* <AnimatedComponent> */}
            <div className=''>
                <div className=''>
                    <h3 className='md:text-2xl text-base text-textBlack'>The benefits of</h3>
                    <div className="flex items-baseline">
                            <h2 className='md:text-[38px] md:leading-[43.7px] text-[26px] leading-[29.9px] text-textBlack font-bold'>
                                Choosing us
                            </h2>
                            <div className="flex-grow h-px bg-gray-300 ml-2"></div>
                        </div>
                    {/* <h2 className='md:text-[38px] text-[26px] text-white font-bold'>Choosing us</h2> */}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[29px] gap-[16px]  md:mt-[50px] mt-[16px]'>
                    {data.map((item, index) => (
                       <div
                       key={index}
                       className="w-full min-h-[300px] px-[39px] group transition-all duration-300 "
                       style={{  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)' }}
                   >
                       <div className="flex flex-col gap-[14px] mb-[18px]">
                           <div className="top-0 left-[5%] bg-[orange] w-[75.1px] h-[89.57px] md:w-[83px] md:h-[99px] flex items-center justify-center mb-[30px]">
                               {item.icon}
                           </div>
                           <p className="text-[19.9px] lg:text-[22px] leading-[17.61px] md:leading-normal text-textBlack font-bold break-words mb-[9.57px]">
                               {item.title}
                           </p>
                           <p className="md:text-sm lg:text-base text-textBlack">{item.decription}</p>
                       </div>
                       {/* <div className="md:block hidden">
                           <p className="md:text-sm lg:text-base text-textBlack">{item.decription}</p>
                       </div> */}
                   </div>
                   
                    
                    
                    ))}
                </div>
            </div>
            {/* </AnimatedComponent> */}
        </div>
    )
}

export default ChooseUs