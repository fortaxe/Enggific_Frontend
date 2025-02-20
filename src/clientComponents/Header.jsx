import React from 'react'
import SearchBox from './SeachBox'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '@/constants';
import useFetchData from './utils/useFetchData';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addId } from '@/redux/clientSlice/idSlice';


const Header = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const apiUrl = `${BASE_URL}/user/get/socialMediaLinks`;

    const { data, loading, error } = useFetchData(apiUrl);

    const categoryApiUrl = `${BASE_URL}/admin/get/categories`;


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetchData(categoryApiUrl);

    // console.log("categoryData", categoryData)


    if (loading) return <p>...</p>;
    if (error) return <p>Error: {error}</p>;

    // console.log("socials data", data)

    const handleRedirect = (name, id) => {
        dispatch(addId({ idType: "category", id: id }));
        setIsDropdownOpen(false)
        navigate(`/${name.replace(/\s+/g, '-')}/sub-categories`)
    }



    return (
        <header className='header bg-white fixed top-0 left-0 w-full z-50'>
            {(data.links && data.links.length > 0) && <div className='w-full lg:flex hidden justify-evenly items-center p-4 h-[34px] md:h-auto'>
                <div className='lg:flex items-center hidden'>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3313 9.00055C17.3313 13.9991 10.6666 18.9976 10.6666 18.9976C10.6666 18.9976 4.00195 13.9991 4.00195 9.00055C4.00195 7.23296 4.70412 5.53777 5.954 4.2879C7.20387 3.03803 8.89906 2.33586 10.6666 2.33586C12.4342 2.33586 14.1294 3.03803 15.3793 4.2879C16.6292 5.53777 17.3313 7.23296 17.3313 9.00055Z" stroke="#414141" strokeWidth="1.33926" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.16724 9.00048C8.16724 9.66332 8.43055 10.299 8.89925 10.7677C9.36795 11.2364 10.0037 11.4997 10.6665 11.4997C11.3293 11.4997 11.965 11.2364 12.4337 10.7677C12.9024 10.299 13.1658 9.66332 13.1658 9.00048C13.1658 8.33764 12.9024 7.70194 12.4337 7.23324C11.965 6.76453 11.3293 6.50122 10.6665 6.50122C10.0037 6.50122 9.36795 6.76453 8.89925 7.23324C8.43055 7.70194 8.16724 8.33764 8.16724 9.00048Z" stroke="#414141" strokeWidth="1.33926" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='2xl:text-base md:text-sm text-textBlack'>29 & 30, First Floor, Unity House, Abid, Hyderabad- 500001, Telangana</p>
                </div>
                <div className='lg:flex items-center hidden'>
                    <a href={`mailto:${data.links[0].adminEmail}`} className="flex items-center">
                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33341 4H17.6667C17.6667 4 19.3334 4 19.3334 5.66667V15.6667C19.3334 15.6667 19.3334 17.3333 17.6667 17.3333H4.33341C4.33341 17.3333 2.66675 17.3333 2.66675 15.6667V5.66667C2.66675 5.66667 2.66675 4 4.33341 4Z" stroke="#414141" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.3334 6.5L11.8584 11.25C11.6011 11.4112 11.3037 11.4967 11.0001 11.4967C10.6965 11.4967 10.399 11.4112 10.1417 11.25L2.66675 6.5" stroke="#414141" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='2xl:text-base  md:text-sm text-textBlack hover:text-orange-500 transition-all duration-300'>{data.links[0].adminEmail}</p>
                    </a>
                </div>
                <div className='lg:flex items-center hidden'>
                    <a href={`tel:+91${data.links[0]?.adminMobileNumber}`} className="2xl:text-base md:text-sm text-textBlack hover:text-orange-500 transition-all duration-300">
                        Customer support +91 {data.links[0]?.adminMobileNumber}
                    </a>
                </div>
            </div>}

            {/* Nav */}
            <div className="bg-[#22384D] lg:px-[60px] px-[16px]">
                <div className="mx-auto flex h-[82px] max-w-screen-3xl items-center gap-8">
                    <Link className="block text-teal-600" to="/">
                        <img src="/enggific_logo.png" alt="enggific" className='md:w-[77.77px] md:h-[64px] w-[63.83px] h-[55px]' />
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-[32px] text-base">
                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/about-us">
                                        About Us
                                    </Link>
                                </li>

                                <li className="relative" ref={dropdownRef}>
                                    <div className="absolute -top-[1.2rem] left-[20%] w-[47px] h-[17px] bg-[#FF1C1C] flex justify-center items-center text-[10px] text-white">
                                        Explore
                                    </div>
                                    <button
                                        className="text-white transition hover:text-textOrange"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    >
                                        Categories
                                    </button>

                                    {categoryLoading ? "...." : isDropdownOpen && (
                                        <div className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-md z-50">
                                            <ul className="py-2">
                                                {(categoryData && categoryData.categories.length > 0) && categoryData.categories.map((category) => (
                                                    <li key={category._id}>
                                                        <p
                                                            // to={`/${category.name}/sub-categories`}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-textOrange"
                                                            onClick={() => handleRedirect(category.name, category._id)}
                                                        >
                                                            {category.name}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                <li>
                                    <Link className="text-white transition hover:text-textOrange" to="/contact-us">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button
                                className="block md:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    width={24}
                                    height={20}
                                    viewBox="0 0 24 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.5 0.5H22.5C22.5 0.5 23.5 0.5 23.5 1.5V2.5C23.5 2.5 23.5 3.5 22.5 3.5H1.5C1.5 3.5 0.5 3.5 0.5 2.5V1.5C0.5 1.5 0.5 0.5 1.5 0.5Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M1.5 8.5H22.5C22.5 8.5 23.5 8.5 23.5 9.5V10.5C23.5 10.5 23.5 11.5 22.5 11.5H1.5C1.5 11.5 0.5 11.5 0.5 10.5V9.5C0.5 9.5 0.5 8.5 1.5 8.5Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M1.5 16.5H22.5C22.5 16.5 23.5 16.5 23.5 17.5V18.5C23.5 18.5 23.5 19.5 22.5 19.5H1.5C1.5 19.5 0.5 19.5 0.5 18.5V17.5C0.5 17.5 0.5 16.5 1.5 16.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar (Mobile Menu) */}
            {isSidebarOpen && (
                <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>

                    {/* Side Panel */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-[#22384D] text-white z-50 shadow-lg transform transition-transform ease-in-out duration-300 translate-x-0">
                        <div className="flex justify-between items-center p-4 border-b border-gray-700">
                            <span className="text-lg font-semibold">Menu</span>
                            <button onClick={() => setSidebarOpen(false)} className="text-gray-300 hover:text-white">
                                ✕
                            </button>
                        </div>

                        <nav className="p-4">
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link className="block transition hover:text-textOrange" to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
                                </li>
                                <li>
                                    <Link className="block transition hover:text-textOrange" to="/about-us" onClick={() => setSidebarOpen(false)}>About Us</Link>
                                </li>
                                <li>
                                    <Link className="block transition hover:text-textOrange" to="/product-categories" onClick={() => setSidebarOpen(false)}>Categories</Link>
                                </li>
                                <li>
                                    <Link className="block transition hover:text-textOrange" to="/contact-us" onClick={() => setSidebarOpen(false)}>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header