import React from 'react'
import SearchBox from './SeachBox'
import { Link } from 'react-router-dom'
import { BASE_URL } from '@/constants';
import useFetchData from './utils/useFetchData';

const Header = () => {

    const apiUrl = `${BASE_URL}/user/get/socialMediaLinks`;

    const { data, loading, error } = useFetchData(apiUrl);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // console.log("socials data", data)

    return (
        <header className='header bg-white'>
           {(data.links && data.links.length > 0) && <div className='w-full flex justify-between items-center p-4 px-[80px] h-[34px] md:h-auto'>
                <div className='md:flex items-center hidden'>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3313 9.00055C17.3313 13.9991 10.6666 18.9976 10.6666 18.9976C10.6666 18.9976 4.00195 13.9991 4.00195 9.00055C4.00195 7.23296 4.70412 5.53777 5.954 4.2879C7.20387 3.03803 8.89906 2.33586 10.6666 2.33586C12.4342 2.33586 14.1294 3.03803 15.3793 4.2879C16.6292 5.53777 17.3313 7.23296 17.3313 9.00055Z" stroke="#414141" strokeWidth="1.33926" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.16724 9.00048C8.16724 9.66332 8.43055 10.299 8.89925 10.7677C9.36795 11.2364 10.0037 11.4997 10.6665 11.4997C11.3293 11.4997 11.965 11.2364 12.4337 10.7677C12.9024 10.299 13.1658 9.66332 13.1658 9.00048C13.1658 8.33764 12.9024 7.70194 12.4337 7.23324C11.965 6.76453 11.3293 6.50122 10.6665 6.50122C10.0037 6.50122 9.36795 6.76453 8.89925 7.23324C8.43055 7.70194 8.16724 8.33764 8.16724 9.00048Z" stroke="#414141" strokeWidth="1.33926" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-base text-textBlack'>29 & 30, First Floor, Unity House, Abid, Hyderabad- 500001, Telangana</p>
                </div>
                <div className='md:flex items-center hidden'>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33341 4H17.6667C17.6667 4 19.3334 4 19.3334 5.66667V15.6667C19.3334 15.6667 19.3334 17.3333 17.6667 17.3333H4.33341C4.33341 17.3333 2.66675 17.3333 2.66675 15.6667V5.66667C2.66675 5.66667 2.66675 4 4.33341 4Z" stroke="#414141" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.3334 6.5L11.8584 11.25C11.6011 11.4112 11.3037 11.4967 11.0001 11.4967C10.6965 11.4967 10.399 11.4112 10.1417 11.25L2.66675 6.5" stroke="#414141" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-base text-textBlack'>{data.links[0].adminEmail}</p>
                </div>
                <div className='md:flex items-center hidden'>
                    <p className='text-base text-textBlack'>Customer support +91 {data.links[0]?.adminMobileNumber}</p>
                </div>
            </div>}

            {/* Nav */}
            <div className="bg-[#22384D]">
                <div className="mx-auto flex h-[133.33px] max-w-screen-3xl items-center gap-8 px-4 sm:px-6 lg:px-[80px]">
                    <Link className="block text-teal-600" to="/">
                        <img src="/enggific_logo.png" alt="enggific" className='w-[103.69px] h-[85.33]' />
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/"> Home </Link>
                                </li>

                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/about-us"> About Us </Link>
                                </li>

                                <li className='relative'>
                                    <div className='absolute -top-[1.5rem] left-[20%] w-[47px] h-[17px] bg-[#FF1C1C] flex justify-center items-center text-[10px] text-white'>Explore</div>
                                    <Link className="text-white transition hover:text-textOrange" to="/product-categories"> Categories </Link>
                                </li>

                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/contact-us"> Contact Us </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block sm:gap-4">
                               <SearchBox />
                            </div>

                            <button
                                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header