import Loader from '@/clientComponents/Loader';
import LoginPopup from '@/clientComponents/LoginPopup';
import MobileFilters from '@/clientComponents/MobileFilters';
import NotFound from '@/clientComponents/NotFound';
import useFetchData from '@/clientComponents/utils/useFetchData';
import useFetchProductBySubCategoryData from '@/clientComponents/utils/useFetchProductBySubCategoryData';
import { BASE_URL } from '@/constants';
import { clientLogin } from '@/redux/clientSlice/clientAuthSlice';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductList = () => {

    const [activeFilter, setActiveFilter] = useState("");

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.clientAuth);
  const [showLogin, setShowLogin] = useState(false);

  const [filters, setFilters] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const [productTobeEnquire, setProductTobeEnquire] = useState(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/get/productTypes`);
        console.log("filters Data", response)
        setFilters(response.data.productTypes);
        setActiveFilter(response.data.productTypes[0]._id);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilters();
  },[])

    
    const navigate = useNavigate()


    const handleNavigate = (productId) => {
        navigate(`/product/${productId}`)  
        
    }


  // const { data, loading, error } = useFetchProductBySubCategoryData(subCategoryId);
  const apiUrl = `${BASE_URL}/admin/get/products`;

    const { data, loading, error } = useFetchData(apiUrl);

  

  // console.log("subCategoryId", subCategoryId)

//   console.log("apiUrl", apiUrl)

//   const { data, loading, error } = useFetchSubCategoryData(categoryId);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  // console.log("product by sub", data)

    // console.log("data list", data)

    const handleEnquireNow = async (id) => {

      setProductTobeEnquire(id)
      setShowLogin(true)
        // if (user && token) {
        //   // User authenticated, make the post request
        //   try {
        //     const response = await axios.post(
        //       `${BASE_URL}/user/create/enquiry`,
        //       { productIds: [id] },
        //       { headers: { Authorization: `Bearer ${token}` } }
        //     );
    
        //     toast.success("Enquiry succesfull team will contact soon", { autoClose: 3000 });
        //     // console.log("Enquiry successful", response.data);
        //   } catch (error) {
        //     toast.error("Enquiry failed");
        //     console.error("Enquiry failed", error);
        //   }
        // } else {
        //   // User is not authenticated, show login popup
        //   setShowLogin(true);
        // }
      };
    
      const handleLoginSuccess = async () => {
        await dispatch(clientLogin());
        setShowLogin(false); // Close popup on success
      };


      const filteredProducts = (data.products && data.products.length > 0) ? data.products.filter(product =>
        activeFilter && activeFilter.length > 0
          ? activeFilter.includes(product.productType?._id || "")
          : true
      ):[];

    return (
        <section className='xl:mt-[170px] mt-[200px]'>
            <div className="mx-auto max-w-full px-4 py-[29px] sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="xl:text-[38px] text-[26px] text-textBlack font-bold sm:text-3xl">Measuring Devices</h2>
                </header>

                <div className="mt-8 block lg:hidden">
                    <button
                      onClick={() => setIsOpen(true)}
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Filters & Sorting </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-2">
                    <div className="hidden space-y-4 lg:block">
                        <div>
                            <p className="block text-lg font-bold text-textBlack px-[11px] mb-[17px]">Sub Category</p>
                            <div className="space-y-2">
                                {(filters && filters.length > 0) && filters.map((filter) => (
                                    <div
                                        key={filter._id}
                                        className={`w-[265px] h-[49px] px-[11px] flex items-center cursor-pointer rounded-md 
                                                    ${activeFilter === filter._id
                                                ? 'bg-[#FCF1E4] text-[#E5810C]'
                                                : 'text-textBlack'
                                            } 
                                                    hover:bg-[#FCF1E4] hover:text-[#E5810C] transition duration-300`}
                                        onClick={() => setActiveFilter(filter._id)}
                                    >
                                        <p className="text-base">{filter.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {isOpen && <MobileFilters  filters={filters} isOpen={isOpen} setIsOpen={setIsOpen} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />}

                    <div className='lg:col-span-3'>
                        {/* Sorting */}
                        {/* <div className='flex items-center mb-[31px] gap-[13px]'>
                            <label htmlFor="SortBy" className="block text-lg font-bold text-textBlack"> Sort By </label>

                            <select id="SortBy" className="mt-1 w-[155px] h-[38px] border border-[#D2D2D2] focus:border-[#E5810C] focus:outline-none text-sm">
                                <option>Sort By</option>
                                <option value="Price, DESC">Price</option>
                                <option value="Price, ASC">Price</option>
                                <option value="Title, DESC">Title</option>
                                <option value="Title, ASC">Title</option>
                            </select>
                        </div> */}
                        <div className="flex flex-wrap gap-[29px]">
                            {(filteredProducts && filteredProducts.length > 0) ? filteredProducts.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[calc(50%-14.5px)] lg:w-[calc(33.333%-19.33px)] md:h-auto  border border-[#D2D2D2] px-[14px] py-[18px] cursor-pointer overflow-hidden"
                                >
                                    <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                                        <p className='text-xs font-bold text-white'>Sale</p>
                                    </div>

                                    <div className='md:h-[273px] h-[159.55px] mb-[12px]' onClick={()=>handleNavigate(item._id)}>
                                        <img src={item.thumbnailImage} alt='product' className='w-full h-full object-cover' />
                                    </div>

                                    <p className='text-textBlack md:text-sm text-xs mb-[22px] break-words'>{item.name}</p>

                                    <button onClick={()=>handleEnquireNow(item._id)} className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                                        Enquire Now
                                    </button>
                                </div>
                            )): <NotFound />}
                        </div>

                    </div>


                </div>
            </div>
            {showLogin && <LoginPopup onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} productId={productTobeEnquire} />}
        </section>
    )
}

export default ProductList