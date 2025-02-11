import About from '@/clientComponents/About'
import ChooseUs from '@/clientComponents/ChooseUs'
import CompanyBanners from '@/clientComponents/CompanyBanners'
import EquipmentsCards from '@/clientComponents/EquipmentsCards'
import HeroCarousel from '@/clientComponents/HeroCarousel'
import KnowUs from '@/clientComponents/KnowUs'
import LaunchedProducts from '@/clientComponents/LaunchedProducts'
import OurCards from '@/clientComponents/OurCards'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <HeroCarousel />
      <About />
      <div className='relative h-[90px] bg-cover bg-top ' style={{ backgroundImage: `url(/contact_bg.jpg)` }}>
        <div className="absolute inset-0  flex flex-row justify-center items-center gap-[32px] bg-[rgba(34,56,77,0.74)]">
          <div className='hidden md:block'>
            <p className='md:text-xl text-base text-white'>Contact us for a comprehensive range of engineering and scientific laboratory equipments</p>
          </div>
          <button className="w-[216px] py-[15px] px-[61px] bg-orange-500 text-white text-base hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>
      <EquipmentsCards />
      <ChooseUs />
      <OurCards />
      <LaunchedProducts />
      <KnowUs />
      <CompanyBanners />
      <div className='relative h-[90px] bg-cover bg-top ' style={{ backgroundImage: `url(/contact_bg.jpg)` }}>
        <div className="absolute inset-0  flex flex-row justify-center items-center gap-[32px] bg-[rgba(34,56,77,0.74)]">
          <div>
            <p className='text-xl text-white'>Contact us for a comprehensive range of engineering and scientific laboratory equipments</p>
          </div>
          <button className="w-[216px] py-[15px] px-[61px] bg-orange-500 text-white text-base hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home