import React from 'react'
import { AnimatedComponent } from './AnimatedComponent'

const ChooseUs = () => {

    const data = [
        {
            // icon: [(<svg className='w-[39.67px] h-[39.67px] md:w-[57px] md:h-[57px]' viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <circle cx="28.5" cy="28.5" r="28.5" fill="#E5810C" />
            //     <path d="M40.335 20.0012C40.1708 19.8357 39.9755 19.7044 39.7606 19.6147C39.5454 19.5252 39.3148 19.479 39.0817 19.479C38.8486 19.479 38.618 19.5252 38.4029 19.6147C38.1879 19.7044 37.9927 19.8357 37.8285 20.0012L24.6787 33.1687L19.1539 27.6264C18.9836 27.4618 18.7824 27.3323 18.562 27.2454C18.3417 27.1586 18.1063 27.1161 17.8695 27.1201C17.6326 27.1243 17.3989 27.1751 17.1816 27.2695C16.9645 27.3638 16.7679 27.5001 16.6033 27.6704C16.4387 27.8408 16.3094 28.042 16.2225 28.2623C16.1357 28.4828 16.0931 28.7181 16.0972 28.955C16.1012 29.1918 16.1519 29.4254 16.2463 29.6426C16.3408 29.8599 16.4771 30.0565 16.6474 30.221L23.4254 36.9989C23.5895 37.1643 23.7847 37.2957 23.9998 37.3854C24.2149 37.475 24.4456 37.5211 24.6786 37.5211C24.9116 37.5211 25.1423 37.475 25.3575 37.3854C25.5724 37.2956 25.7676 37.1643 25.9318 36.9989L40.335 22.5958C40.5141 22.4305 40.6571 22.2299 40.7548 22.0067C40.8526 21.7834 40.9031 21.5423 40.9031 21.2984C40.9031 21.0546 40.8526 20.8136 40.7548 20.5903C40.6571 20.3671 40.5141 20.1664 40.335 20.0012Z" fill="white" />
            // </svg>)],
            icon:[(<img className='w-[54px] h-[54px]' src='/Award--Streamline-Tabler-Filled.svg' />)],
            title: 'Unmatched Quality Standards',
            decription: 'We are committed to delivering laboratory equipment that meets the highest international quality standards, ensuring precision and durability for all your scientific needs.'
        },
        {
            icon:[(<img className='w-[54px] h-[54px]' src='/Bag-Suitcase-4--Streamline-Plump-Remix.svg' />)],
            title: 'Comprehensive Product Range',
            decription: 'Our extensive portfolio includes cutting-edge engineering and scientific equipment tailored to meet the requirements of various industries, research institutions, and educational organizations.'
        },
        {
            icon:[(<img className='w-[54px] h-[54px]' src='/Group-Fill--Streamline-Mingcute-Fill.svg' />)],
            title: 'Expert Team',
            decription: 'With years of expertise, our skilled professionals provide technical support and guidance, helping you select the right equipment for your applications.'
        },
        {
            icon:[(<img className='w-[54px] h-[54px]' src='/Call-Center-Support-Service--Streamline-Core.svg' />)],
            title: 'Reliable After-Sales Support',
            decription: 'Our dedicated support team is always available for maintenance, troubleshooting, and ensuring the longevity of your equipment.'
        },
        {
            icon:[(<img className='w-[54px] h-[54px]' src='/Alarm-Clock--Streamline-Core.svg' />)],
            title: 'On-Time Delivery',
            decription: 'We prioritize your schedules by ensuring prompt and reliable delivery, so you can focus on your work without delays.'
        },
        {
            icon:[(<img className='w-[54px] h-[54px]' src='/Document-Currency-Rupee--Streamline-Heroicons.svg' />)],
            title: 'Competitive Pricing',
            decription: 'We combine affordability with quality, ensuring you get the best value for your investment without compromising on performance.'
        }
    ]

    return (
        <div className='md:px-[60px] px-[16px] md:pb-[100px] pb-[30px] xl:pt-[70px] pt-[30px]'>
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
                       className="w-full min-h-[300px] shadow-2xl px-[39px] group transition-all duration-300 "
                   >
                       <div className="flex flex-col gap-[14px] mb-[18px]">
                           <div className="top-0 left-[5%] bg-[orange] w-[39.67px] h-[39.67px] md:w-[83px] md:h-[99px] flex items-center justify-center mb-[34px]">
                               {item.icon}
                           </div>
                           <p className="md:text-base lg:text-[22px] text-[9px] leading-[17.61px] md:leading-normal text-textBlack font-bold break-words">
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