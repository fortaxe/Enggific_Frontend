import { BASE_URL } from '@/constants';
import React from 'react'
import { Link } from 'react-router-dom'
import useFetchData from './utils/useFetchData';
import { useNavigate } from 'react-router-dom';
import { addId } from '@/redux/clientSlice/idSlice';
import { useDispatch } from 'react-redux';
// font - 14 22 gap - 10
const Footer = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiUrl = `${BASE_URL}/user/get/socialMediaLinks`;

    const { data, loading } = useFetchData(apiUrl);


    const apiUrlCategories = `${BASE_URL}/admin/get/categories`;
  const { data:catagoriesData, loading:catagoriesLoading, error:catagoriesError } = useFetchData(apiUrlCategories);

  if (catagoriesLoading) return "...";
  if (catagoriesError) return <p>Error: {error}</p>;

  const handleAdd = (newId, name) => {
    dispatch(addId({ idType: "category", id: newId }));
    // setIdType("");
    // setId("");
    navigate(`/${(name).replace(/\s+/g, '-')}/sub-categories`);
};

  return (
    <footer className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-full-xl px-4 pb-6 pt-[30px] sm:pt-[40px] md:pt-[60px] sm:px-[16px] lg:px-[60px]">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
          <div className='mb-[30px]'>
            <div className="flex justify-start text-teal-600 sm:justify-start">
              <img src='/enggific_logo.png' alt='logo' 
              className="md:w-[77.77px] md:h-[64px] w-[54px] h-[54px]" />
            </div>

            <p className="mt-[10px] sm:mt-6 max-w-md leading-relaxed text-[14px] sm:text-base sm:max-w-xs text-left">
            ENGGIFIC Engineering & Scientific offers a wide range of engineering and scientific laboratory equipment as a pioneering provider
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2">
            <div className="text-left">
              <p className="text-[13px] sm:text-lg font-bold text-gray-900">Our Categories</p>

              <ul className="mt-[10px] sm:mt-8 space-y-[8px] sm:space-y-4 text-sm">
                

                {catagoriesData?.categories && catagoriesData?.categories.map((item, index) => (
                  <li key={index} onClick={() =>handleAdd(item._id, item.name)}>
                  <p className="text-gray-700 transition hover:text-gray-700/75 capitalize cursor-pointer" href="#">
                  {(item.name).toLowerCase()}
                  </p>
                </li>
                ))}
              </ul>
            </div>

            {/* <div className="text-left">
              <p className="text-[13px] sm:text-lg font-bold text-gray-900">Help</p>

              <ul className="mt-[10px] sm:mt-8 space-y-[8px] sm:space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  Customer Support
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Site Map</a>
                </li>
              </ul>
            </div> */}

            

            <div className="text-left">
              <p className="text-[13px] sm:text-lg font-bold text-gray-900">Contact Us</p>

              <ul className="mt-[8px] sm:mt-8 space-y-[8px] sm:space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href={`mailto:${data ? data.links[0].adminEmail : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    {loading ? "...." :<span className="flex-1 text-gray-700">{data ? data.links[0].adminEmail : ""}</span>}
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href={`tel:+91${data ? data.links[0]?.adminMobileNumber : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    {loading ? "...." :<span className="flex-1 text-gray-700">+91 {data ? data.links[0]?.adminMobileNumber : ""}</span>}
                  </a>
                </li>

                <li
                  className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  29 & 30, First Floor, Unity House, Abid, Hyderabad- 500001, Telangana
                  </address>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <p className="text-[13px] sm:text-lg font-bold text-gray-900">Privacy Policy</p>

              <ul className="mt-[8px] sm:mt-8 space-y-[8px] sm:space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Terms of Service</a>
                </li>

                {/* <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Privacy Policy </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[30px] sm:mt-12 border-t border-[#414141] pt-6">
          <div className="flex justify-center space-x-6">
            <p className="text-sm text-gray-500 sm:order-first sm:mt-0">&copy; copyright 2025, All Rights Reserved by ENGGIFIC</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer