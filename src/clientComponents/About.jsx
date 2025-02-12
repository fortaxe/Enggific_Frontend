import React from 'react'

const About = () => {
    return (
        <div className='relative h-[436px] bg-cover bg-center' style={{ backgroundImage: `url(/about_bg.png)` }}>
            <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-row justify-center items-center px-[16px] xl:px-0">
                <div className='flex flex-col justify-center items-center xl:mb-[69.81px] mb-[47px] mt-[70px]'>
                    <div className='xl:mb-[20px] mb-[12px]'>
                    <svg className='xl:w-[65px] xl:h-[72px] w-[35px] h-[38.89px]' viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 28.875C2 16.206 2 9.87152 5.93574 5.93574C9.87152 2 16.206 2 28.875 2H35.5938C48.2626 2 54.5974 2 58.5329 5.93574C62.4687 9.87152 62.4688 16.206 62.4688 28.875V42.3125C62.4688 54.9814 62.4687 61.3161 58.5329 65.2517C54.5974 69.1875 48.2626 69.1875 35.5938 69.1875H28.875C16.206 69.1875 9.87152 69.1875 5.93574 65.2517C2 61.3161 2 54.9814 2 42.3125V28.875Z" stroke="#E5810C" strokeWidth={4} />
                        <path d="M18.7969 55.75H45.6719" stroke="#E5810C" strokeWidth={4} strokeLinecap="round" />
                        <path d="M47.0546 28.7785L49.2906 23.1882C50.8836 19.2058 48.3876 14.7708 44.1568 14.0656L42.7277 13.8274C35.7802 12.6695 28.6889 12.6695 21.7411 13.8274L20.312 14.0656C16.0811 14.7708 13.5853 19.2058 15.1783 23.1882L17.4144 28.7785C18.2064 30.7586 20.3394 31.8491 22.4083 31.332C28.8599 29.7192 35.6092 29.7192 42.0605 31.332C44.1296 31.8491 46.2624 30.7586 47.0546 28.7785Z" stroke="#E5810C" strokeWidth={4} strokeLinecap="round" />
                        <path d="M26.1191 28.6366L23.8517 22.3121" stroke="#E5810C" strokeWidth={4} strokeLinecap="round" />
                    </svg>
                    </div>
                    <p className='md:text-[38px] text-[22px] text-textOrange font-bold mb-[23px]'>Know about us</p>

                    <p className='md:text-base text-[13px] text-textBlack text-center max-w-[767px]'>ENGGIFIC Engineering & Scientific is one of the pioneers engaged in offering <span className='font-bold'>wide range of Engineering & Scientific laboratory equipments</span>. We Manufacture, Export, Import and Supply a wide range of LAB EQUIPMENTS which includes testing equipment, measuring devices, quality control equipment, scientific apparatus, land surveying instruments, site safety equipments, civil engineering equipments, mechanical lab testing machine, drawing instruments, construction machinery and more.</p>
                </div>
            </div>
        </div>
    )
}

export default About