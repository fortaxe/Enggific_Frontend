import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '@/clientComponents/Loader';
import HeroCarousel from '@/clientComponents/HeroCarousel';
import useFetchData from '@/clientComponents/utils/useFetchData';
import { BASE_URL } from '@/constants';

const About = lazy(() => import('@/clientComponents/About'));
const ChooseUs = lazy(() => import('@/clientComponents/ChooseUs'));
const CompanyBanners = lazy(() => import('@/clientComponents/CompanyBanners'));
const EquipmentsCards = lazy(() => import('@/clientComponents/EquipmentsCards'));
const KnowUs = lazy(() => import('@/clientComponents/KnowUs'));
const LaunchedProducts = lazy(() => import('@/clientComponents/LaunchedProducts'));
const OurCards = lazy(() => import('@/clientComponents/OurCards'));
const UserCounterList = lazy(() => import('@/clientComponents/UserCounterList'));
const AnimatedComponent = lazy(() => import('@/clientComponents/AnimatedComponent'));

const Home = () => {
  const navigate = useNavigate();
  const apiUrl = `${BASE_URL}/admin/get/banners`;
  const { data, loading, error } = useFetchData(apiUrl);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <HeroCarousel carouselData={data.banners ? data.banners : []} />
      <Suspense fallback={"Loading..."}>
        <UserCounterList />
        <About />
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
      </Suspense>
    </div>
  );
};

export default Home;