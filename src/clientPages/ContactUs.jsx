import ChatUsDialog from '@/clientComponents/ChatUsDialog';
import React from 'react'
import { useState } from 'react';

const ContactUs = () => {
    const [activePopup, setActivePopup] = useState(null);

  const handleOpen = (type) => {
    setActivePopup(type);
  };

  const handleClose = () => {
    setActivePopup(null);
  };
    return (
        <div className='mt-[70px] pb-[128px]'>
            <div>
                <div className='text-center mb-[127px]'>
                    <h2 className='md:text-[38px] text-[26px] text-textOrange font-bold'>How can we help you?</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Chats_us */}
                    <div onClick={() => handleOpen('chat')} className={`cursor-pointer border border-[#AEAEAE] w-full h-40 sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center ${activePopup ?  'border-[#FDC115]' : ''}`}>
                        <div className='bg-[#FDC115] w-[110px] h-[110px] rounded-full flex justify-center items-center mb-[29px]'>
                            <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M32 0C14.3264 0 0 14.3264 0 32C0 38.048 1.68 43.712 4.6016 48.5376L1.7472 58.24C1.58331 58.7971 1.57253 59.388 1.71598 59.9507C1.85944 60.5133 2.15183 61.027 2.56243 61.4376C2.97303 61.8482 3.48666 62.1406 4.04933 62.284C4.61201 62.4275 5.20293 62.4167 5.76 62.2528L15.4624 59.3984C20.4502 62.4163 26.1703 64.0079 32 64C49.6736 64 64 49.6736 64 32C64 14.3264 49.6736 0 32 0ZM24.7616 39.2416C31.2352 45.712 37.4144 46.5664 39.5968 46.6464C42.9152 46.768 46.1472 44.2336 47.4048 41.2928C47.5636 40.927 47.6212 40.5252 47.5717 40.1295C47.5221 39.7338 47.3672 39.3586 47.1232 39.0432C45.3696 36.8032 42.9984 35.1936 40.6816 33.5936C40.1979 33.2591 39.6034 33.125 39.023 33.2192C38.4425 33.3135 37.921 33.6289 37.568 34.0992L35.648 37.0272C35.5471 37.1846 35.3898 37.2975 35.2083 37.3427C35.0269 37.3879 34.835 37.362 34.672 37.2704C33.3696 36.5248 31.472 35.2576 30.1088 33.8944C28.7456 32.5312 27.5552 30.72 26.8864 29.5008C26.8035 29.3459 26.7795 29.1662 26.8189 28.995C26.8583 28.8238 26.9585 28.6726 27.1008 28.5696L30.0576 26.3744C30.4796 26.0075 30.7519 25.4982 30.8227 24.9436C30.8935 24.3889 30.7579 23.8275 30.4416 23.3664C29.008 21.2672 27.3376 18.5984 24.9152 16.8288C24.6026 16.6023 24.2364 16.461 23.8526 16.4189C23.4688 16.3768 23.0807 16.4354 22.7264 16.5888C19.7824 17.8496 17.2352 21.0816 17.3568 24.4064C17.4368 26.5888 18.2912 32.768 24.7616 39.2416Z" fill="white" />
                            </svg>
                        </div>

                        <p className='text-2xl font-bold text-textOrange'>Chat With Us</p>
                        <p className='text-base text-textBlack'>Have a Query? Let’s Chat!</p>
                        <p className='text-[13px] text-[#959595]'>Chat us on whatsapp</p>
                    </div>
                    {/* Call_us */}
                    <div className="border border-[#AEAEAE] w-full h-40 sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center">
                        <div className='bg-[#FDC115] w-[110px] h-[110px] rounded-full flex justify-center items-center mb-[29px]'>
                            <svg width={68} height={68} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M67.6267 52.0542C67.5151 52.9559 67.5709 53.9219 67.2703 54.7548C66.519 56.8329 65.656 58.8723 64.7543 60.886C62.3628 66.2314 58.0135 68.4941 52.1185 67.7341C45.1158 66.8282 39.122 63.6124 33.3472 59.8341C31.9776 58.941 30.6294 58.0136 29.2684 57.0991V57.185L28.4526 56.6311V56.7341L27.9846 56.2619L28.0276 56.3091L27.5381 55.8411L27.5853 55.8883L27.0529 55.5234C26.3703 54.8235 25.7305 54.0808 25.0006 53.4367C16.1088 45.5624 8.3203 36.7993 3.25395 25.9238C1.10719 21.3083 -0.515759 16.5125 0.420229 11.2701C1.02991 7.83525 2.68721 5.1475 6.0018 3.71776C8.14856 2.78606 10.2953 1.85867 12.4936 0.9785C15.6579 -0.309556 16.4093 -0.0648375 18.423 2.67014L18.8781 3.17248L18.818 3.14242L19.2902 3.61471L19.1571 3.66623C20.8531 6.76616 22.5276 9.87896 24.2493 12.966C25.9194 15.9715 25.6919 17.0706 22.8839 19.0199C17.8433 22.5191 16.624 28.4957 20.6556 33.1198C25.0613 38.1581 29.8037 42.8918 34.85 47.2884C39.4784 51.32 45.4421 50.1007 48.9456 45.0601C50.8948 42.2564 52.0026 42.0288 54.9995 43.699C58.0865 45.4164 61.1993 47.0909 64.2992 48.7868L64.3422 48.6623L64.8187 49.126L64.7887 49.0702L65.2953 49.5253L67.6267 52.0542Z" fill="#FFFEFC" />
                            </svg>


                        </div>

                        <p className='text-2xl font-bold text-textOrange'>Call Us</p>
                        <p className='text-base text-textBlack'>+91 9536 214 658</p>
                        <p className='text-[13px] text-[#959595]'>Monday - Saturday 9:00 AM - 5:00 PM</p>
                    </div>
                    {/* Email_us */}
                    <div className="border border-[#AEAEAE] w-full h-40 sm:h-48 md:h-56 lg:w-[321px] lg:h-[321px] flex flex-col justify-center items-center">
                        <div className='bg-[#FDC115] w-[110px] h-[110px] rounded-full flex justify-center items-center mb-[29px]'>
                            <svg width="69px" height="43px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>email [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                        </div>

                        <p className='text-2xl font-bold text-textOrange'>Email Us</p>
                        <p className='text-base text-textBlack'>help@enggific.com</p>
                        <p className='text-[13px] text-[#959595]'>Get answers within 1-2 business days</p>
                    </div>
                </div>
            </div>
            {activePopup === 'chat' && <ChatUsDialog title={activePopup} onClose={handleClose} />}
        </div>
    )
}

export default ContactUs