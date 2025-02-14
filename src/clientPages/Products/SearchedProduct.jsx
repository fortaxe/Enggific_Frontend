import Loader from '@/clientComponents/Loader';
import LoginPopup from '@/clientComponents/LoginPopup';
import NotFound from '@/clientComponents/NotFound';
import useFetchData from '@/clientComponents/utils/useFetchData';
import useQuery from '@/clientComponents/utils/useQuery';
import { BASE_URL } from '@/constants';
import { clientLogin } from '@/redux/clientSlice/clientAuthSlice';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const SearchedProduct = () => {
    const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.clientAuth);
  const [showLogin, setShowLogin] = useState(false);

//   console.log('searchTerm', searchTerm)

   // const { data, loading, error } = useFetchProductBySubCategoryData(subCategoryId);
   const apiUrl = `${BASE_URL}/admin/get/products`;

   const { data, loading, error } = useFetchData(apiUrl);

//    console.log('data from searched product', data)

if (loading) return <Loader />;
if (error) return <p>Error: {error.message}</p>;


   const filteredProducts = (data.products && data.products.length > 0) 
  ? data.products.filter(product =>
      (searchTerm && searchTerm.length > 0 
        ? (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           product.productType.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : true)
    ) 
  : [];


  const handleEnquireNow = async (id) => {
    if (user && token) {
      // User authenticated, make the post request
      try {
        const response = await axios.post(
          `${BASE_URL}/user/create/enquiry`,
          { productIds: [id] },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        toast.success("Enquiry succesfull team will contact soon", { autoClose: 3000 });
        console.log("Enquiry successful", response.data);
      } catch (error) {
        toast.error("Enquiry failed");
        console.error("Enquiry failed", error);
      }
    } else {
      // User is not authenticated, show login popup
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = async () => {
    await dispatch(clientLogin());
    setShowLogin(false); // Close popup on success
  };


//   const filteredProducts = allProducts.filter((product) =>
//     product.toLowerCase().includes(searchTerm)
//   );
  return (
    <div className='px-[60px] py-[70px]'>
        <div className='mb-[70px]'>
                <h2 className='md:text-[38px] text-[26px] text-textBlack'>We found the following for <span className='font-bold'>{searchTerm}</span></h2>
        </div>

        {/* searched List */}
        <div className="flex flex-wrap justify-center gap-[29px]">
                    {(filteredProducts && filteredProducts.length > 0) ? filteredProducts.map((product) => (
                        <div
                            key={product._id}
                            className="w-[calc(50%-14.5px)] md:w-[calc(25%-21.75px)] md:h-auto h-[282px]  border border-[#D2D2D2] px-[14px] py-[18px] mb-[70px]"
                        >
                            <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                                <p className='text-xs font-bold text-white'>Sale</p>
                            </div>

                            <div className='md:h-[273px] h-[159.55px] mb-[12px]'>
                                <img src={product.thumbnailImage} alt='product' className='w-full h-full object-cover' />
                            </div>

                            <p className='text-textBlack md:text-sm text-xs mb-[22px]'>{product.name}</p>

                            <button onClick={()=>handleEnquireNow(product._id)} className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                                Enquire Now
                            </button>
                        </div>
                    )): <NotFound />}
                </div>
                {showLogin && <LoginPopup onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}
    </div>
  )
}

export default SearchedProduct