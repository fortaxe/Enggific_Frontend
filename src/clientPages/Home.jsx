import About from '@/clientComponents/About'
import { AnimatedComponent } from '@/clientComponents/AnimatedComponent'
import ChooseUs from '@/clientComponents/ChooseUs'
import CompanyBanners from '@/clientComponents/CompanyBanners'
import EquipmentsCards from '@/clientComponents/EquipmentsCards'
import HeroCarousel from '@/clientComponents/HeroCarousel'
import KnowUs from '@/clientComponents/KnowUs'
import LaunchedProducts from '@/clientComponents/LaunchedProducts'
import Loader from '@/clientComponents/Loader'
import OurCards from '@/clientComponents/OurCards'
import useFetchData from '@/clientComponents/utils/useFetchData'
import { BASE_URL } from '@/constants'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const apiUrl = `${BASE_URL}/admin/get/banners`;

  const { data, loading, error } = useFetchData(apiUrl);


  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  // console.log("banners data", data)

  return (
    <div className=''>
      <AnimatedComponent>
        <HeroCarousel carouselData={data.banners ? data.banners : []} />
        <About />
      </AnimatedComponent>
      <div className='relative h-[90px] bg-cover bg-top ' style={{ backgroundImage: `url(/contact_bg.jpg)` }}>
        <div className="absolute inset-0  flex flex-row justify-center items-center gap-[32px] bg-[rgba(34,56,77,0.74)]">
          <div className='hidden md:block'>
            <p className='md:text-xl text-base text-white'>Contact us for a comprehensive range of engineering and scientific laboratory equipments</p>
          </div>
          <button onClick={() => navigate('/contact-us')} className="xl:w-[216px] xl:h-[48px] w-[144px] h-[32px] flex justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>
      <EquipmentsCards />
      <AnimatedComponent>
      <ChooseUs />
      </AnimatedComponent>
      <OurCards />
      <AnimatedComponent>
      <LaunchedProducts />
      </AnimatedComponent>
      <KnowUs />
      <CompanyBanners />
      <div className='relative h-[90px] bg-cover bg-top ' style={{ backgroundImage: `url(/contact_bg.jpg)` }}>
        <div className="absolute inset-0  flex flex-row justify-center items-center gap-[32px] bg-[rgba(34,56,77,0.74)]">
          <div className='hidden md:block'>
            <p className='text-xl text-white'>Contact us for a comprehensive range of engineering and scientific laboratory equipments</p>
          </div>
          <button onClick={() => navigate('/contact-us')} className="xl:w-[216px] xl:h-[48px] w-[144px] h-[32px] flex justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home