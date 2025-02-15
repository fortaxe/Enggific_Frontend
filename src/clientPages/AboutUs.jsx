import ChooseUs from '@/clientComponents/ChooseUs'
import CompanyBanners from '@/clientComponents/CompanyBanners'
import KnowUs from '@/clientComponents/KnowUs'
import LocationMap from '@/clientComponents/LocationMap'
import OurCards from '@/clientComponents/OurCards'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <div className='xl:mt-[270px] mt-[200px]'>
      <div className='flex flex-wrap xl:flex-row flex-col justify-start gap-[29px] xl:px-[60px] px-[16px]'>
        <div className='w-full md:w-[calc(55%-14.5px)] md:h-[336px] h-[282px] py-[18px] xl:mb-[70px] mb-[30px] bg-cover bg-center' style={{ backgroundImage: `url(/hands.png)` }}>

        </div>
        <div className='w-full md:w-[calc(45%-14.5px)] md:h-auto h-[282px] py-[18px] xl:mb-[70px] mb-[30px]'>
          <div className=''>
            <h2 className='md:text-[38px] text-[26px] text-textBlack font-bold mb-[22.81px]'>Know about us</h2>
            <p className='text-base'><span className='text-textOrange font-bold'>ENGGIFIC</span> Engineering & Scientific is one of the pioneers engaged in offering <span className='text-textBlack font-bold'>wide range of Engineering & Scientific laboratory equipments</span>. We Manufacture, Export, Import and Supply a wide range of LAB EQUIPMENTS which includes testing equipment, measuring devices, quality control equipment, scientific apparatus, land surveying instruments, site safety equipments, civil engineering equipments, mechanical lab testing machine, drawing instruments, construction machinery and more.</p>
          </div>
        </div>
      </div>

      <OurCards />

      <div className='flex flex-wrap xl:flex-row flex-col justify-start gap-[29px] xl:px-[60px] px-[16px]'>
        <div className='w-full md:w-[calc(55%-14.5px)] md:h-[336px] h-[282px] py-[18px] xl:mb-[70px] mb-[30px] bg-cover bg-center' style={{ backgroundImage: `url(/dgps.png)` }}>
        </div>
        <div className='w-full md:w-[calc(45%-14.5px)] md:h-auto h-[282px] py-[18px] xl:mb-[70px] mb-[30px]'>
          <div className='flex items-center h-full'>
            <p className='xl:text-base text-[13px]'>We supply survey equipments like total station, dgps, levelling instrument. We also deal in engineering items like engineering models, engineering charts, laboratory microscopes, electronic balances, glassware item and many other kinds of scientific & engineering machinery along with accessories, necessary spare parts etc. Our entire product range is appreciated & used by many Construction Companies, Builders, Developers, Architects, Land Surveyors, Engineering Colleges, Educational Institutes & Universities, Research Laboratories, Civil Engineers, Professors, Scientists etc.</p>
          </div>
        </div>
      </div>


      <div className='flex flex-wrap justify-start gap-[74px] xl:px-[170px] px-[16px]'>
        <div className='w-full md:w-[calc(50%-37px)] md:h-[336px] h-[258.7px] py-[18px] xl:mb-[70px] mb-[30px] bg-cover bg-center' style={{ backgroundImage: `url(/what_new.png)` }}>
        </div>

        <div className='w-full md:w-[calc(50%-37px)] md:h-auto h-[282px] py-[18px] xl:mb-[70px] mb-[30px]'>
          <h2 className='md:text-[38px] text-[26px] text-textBlack font-bold mb-[22.81px]'>What’s New?</h2>
          <p className='text-base'>
            We have added many new products to our lab equipment list which are the latest in technology and have advanced features. We have added many lab products which are compact, portable, easy to carry, user-friendly, and will surely benefit our customers.
          </p>
        </div>
      </div>

      <ChooseUs />

      <div className='flex flex-wrap justify-start gap-[29px] xl:px-[60px] px-[16px] xl:py-[70px] py-[30px]'>
        <div className='w-full md:w-[calc(55%-14.5px)] md:h-[336px] h-[282px] py-[18px] mb-[70px] bg-cover bg-center' style={{ backgroundImage: `url(/team.png)` }}>

        </div>
        <div className='w-full md:w-[calc(45%-14.5px)] md:h-auto h-[282px] py-[18px] xl:mb-[70px] mb-[30px]'>
          <div className=''>
            <h2 className='md:text-[38px] text-[26px] text-textBlack font-bold mb-[22.81px]'>Our Team</h2>
            <p className='text-base'>Behind every successful project is a team of skilled professionals passionate about excellence. Our engineers, designers, and support staff work in harmony to ensure your satisfaction.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-start gap-[74px] xl:px-[170px] px-[16px] xl:py-[100px] py-[30px] bg-[#F8F8F8]'>
        <div className='w-full md:w-[calc(50%-37px)] md:h-[336px] h-[258.7px] py-[18px] mb-[70px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(/get_in_touch.png)` }}>
        </div>

        <div className='w-full md:w-[calc(50%-37px)] md:h-auto h-[282px] py-[18px] xl:mb-[70px] mb-[30px]'>
          <h2 className='md:text-[38px] text-[26px] text-textBlack font-bold mb-[22.81px]'>Get In Touch</h2>
          <p className='text-base'>
          Whether you're setting up a new laboratory or upgrading your existing equipment, <span className='font-bold text-textOrange'>ENGGIFIC</span> is here to help. Explore our products or contact us to discuss your specific requirements. Together, let’s create solutions that shape the future of science and technology.
          </p>
        </div>
      </div>

      <CompanyBanners />

      <KnowUs />

      <div className='relative h-[90px] bg-cover bg-top mb-[30px]' style={{ backgroundImage: `url(/contact_bg.jpg)` }}>
        <div className="absolute inset-0  flex flex-row justify-center items-center gap-[32px] bg-[rgba(34,56,77,0.74)]">
          <div className='xl:block hidden'>
            <p className='text-xl text-white'>Contact us for a comprehensive range of engineering and scientific laboratory equipments</p>
          </div>
          <button onClick={()=> navigate('/contact-us')} className="xl:w-[216px] xl:h-[48px] w-[144px] h-[32px] flex justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>

      <LocationMap />

    </div>
  )
}

export default AboutUs