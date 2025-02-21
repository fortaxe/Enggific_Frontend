import ChatUsDialog from '@/clientComponents/ChatUsDialog';
import Loader from '@/clientComponents/Loader';
import useFetchData from '@/clientComponents/utils/useFetchData';
import { BASE_URL } from '@/constants';
import React from 'react'
import { useState } from 'react';

const ContactUs = () => {
    const [activePopup, setActivePopup] = useState(null);

    const apiUrl = `${BASE_URL}/user/get/socialMediaLinks`;

    const { data, loading, error } = useFetchData(apiUrl);

    if (loading) return <Loader />

    const handleOpen = (type) => {
        setActivePopup(type);
    };

    const handleClose = () => {
        setActivePopup(null);
    };
    return (
        <div className='md:mt-[170px] mt-[100px] pb-[128px] px-[16px]'>
            <div>
                <div className='md:block hidden text-center md:mb-[127px] mb-[30px]'>
                    <h2 className='md:text-[38px] text-[26px] text-textOrange font-bold'>How can we help you?</h2>
                </div>

                <div className="flex md:flex-wrap md:flex-row flex-col justify-center gap-4">
                    {/* Chats_us */}
                    {/* <div onClick={() => handleOpen('chat')} className={`cursor-pointer border border-[#AEAEAE] w-full h-40 sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center ${activePopup ?  'border-[#FDC115]' : ''}`}>
                        <div className='bg-[#FDC115] w-[110px] h-[110px] rounded-full flex justify-center items-center mb-[29px]'>
                            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M32 0C14.3264 0 0 14.3264 0 32C0 38.048 1.68 43.712 4.6016 48.5376L1.7472 58.24C1.58331 58.7971 1.57253 59.388 1.71598 59.9507C1.85944 60.5133 2.15183 61.027 2.56243 61.4376C2.97303 61.8482 3.48666 62.1406 4.04933 62.284C4.61201 62.4275 5.20293 62.4167 5.76 62.2528L15.4624 59.3984C20.4502 62.4163 26.1703 64.0079 32 64C49.6736 64 64 49.6736 64 32C64 14.3264 49.6736 0 32 0ZM24.7616 39.2416C31.2352 45.712 37.4144 46.5664 39.5968 46.6464C42.9152 46.768 46.1472 44.2336 47.4048 41.2928C47.5636 40.927 47.6212 40.5252 47.5717 40.1295C47.5221 39.7338 47.3672 39.3586 47.1232 39.0432C45.3696 36.8032 42.9984 35.1936 40.6816 33.5936C40.1979 33.2591 39.6034 33.125 39.023 33.2192C38.4425 33.3135 37.921 33.6289 37.568 34.0992L35.648 37.0272C35.5471 37.1846 35.3898 37.2975 35.2083 37.3427C35.0269 37.3879 34.835 37.362 34.672 37.2704C33.3696 36.5248 31.472 35.2576 30.1088 33.8944C28.7456 32.5312 27.5552 30.72 26.8864 29.5008C26.8035 29.3459 26.7795 29.1662 26.8189 28.995C26.8583 28.8238 26.9585 28.6726 27.1008 28.5696L30.0576 26.3744C30.4796 26.0075 30.7519 25.4982 30.8227 24.9436C30.8935 24.3889 30.7579 23.8275 30.4416 23.3664C29.008 21.2672 27.3376 18.5984 24.9152 16.8288C24.6026 16.6023 24.2364 16.461 23.8526 16.4189C23.4688 16.3768 23.0807 16.4354 22.7264 16.5888C19.7824 17.8496 17.2352 21.0816 17.3568 24.4064C17.4368 26.5888 18.2912 32.768 24.7616 39.2416Z" fill="white" />
                            </svg>
                        </div>

                        <p className='text-2xl font-bold text-textOrange'>Chat With Us</p>
                        <p className='text-base text-textBlack'>Have a Query? Let’s Chat!</p>
                        <p className='text-[13px] text-[#959595]'>Chat us on whatsapp</p>
                    </div> */}
                    {/* Call_us */}
                    <a href={`tel:+91${data && data.links[0]?.adminMobileNumber}`}>
                        <div className="border border-[#AEAEAE] w-[349px] h-[349px] sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center p-4">

                            <div
                                className='bg-[#FDC115] w-[129.88px] h-[129.88px] md:w-[110px] md:h-[110px] rounded-full flex justify-center items-center md:mb-[29px] mb-[16px] bg-no-repeat bg-center bg-contain'
                                style={{ backgroundImage: "url('/call.svg')" }}
                            >
                            </div>



                            <p className='text-2xl font-bold text-textOrange'>Call Us</p>
                            <p className='text-base text-textBlack'>+91 {data?.links && data.links[0]?.adminMobileNumber}</p>
                            <p className='text-[13px] text-[#959595]'>Monday - Saturday 9:00 AM - 5:00 PM</p>
                        </div>
                    </a>

                    {/* Email_us */}
                    <a href={`mailto:${data && data.links[0].adminEmail}`}>
                        <div className="border border-[#AEAEAE] w-[349px] h-[349px] sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center">
                        <div
                                className='bg-[#FDC115] w-[129.88px] h-[129.88px] md:w-[110px] md:h-[110px] rounded-full flex justify-center items-center md:mb-[29px] mb-[16px] bg-no-repeat bg-center bg-contain'
                                style={{ backgroundImage: "url('/email.svg')" }}
                            >
                            </div>

                            <p className='text-2xl font-bold text-textOrange'>Email Us</p>
                            <p className='text-base text-textBlack'>{data?.links && data.links[0]?.adminEmail}</p>
                            <p className='text-[13px] text-[#959595]'>Get answers within 1-2 business days</p>
                        </div>
                    </a>

                </div>
            </div>
            {activePopup === 'chat' && <ChatUsDialog title={activePopup} onClose={handleClose} />}
        </div>
    )
}

export default ContactUs