import Loader from '@/clientComponents/Loader';
import LoginPopup from '@/clientComponents/LoginPopup';
import MagniFyingImage from '@/clientComponents/MagniFyingImage';
import NotFound from '@/clientComponents/NotFound';
import useFetchData from '@/clientComponents/utils/useFetchData';
import { BASE_URL } from '@/constants';
import { clientLogin } from '@/redux/clientSlice/clientAuthSlice';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { productId } = useParams();
    const apiUrl = `${BASE_URL}/user/get/product/${productId}`;
    const { data, loading, error } = useFetchData(apiUrl);

    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.clientAuth);
    const [showLogin, setShowLogin] = useState(false);
    const [productTobeEnquire, setProductTobeEnquire] = useState(null);

    useEffect(() => {
        if (data?.product?.productImages?.length) {
            setSelectedImage(data.product.productImages[0].url);
        }
    }, [data]);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error}</p>;


    // console.log("product details", data)




    const handleEnquireNow = async (id) => {

        setProductTobeEnquire(id)
        setShowLogin(true)
          
        };
    const handleLoginSuccess = async () => {
        await dispatch(clientLogin());
        setShowLogin(false); // Close popup on success
    };





    return (
        <div className='xl:px-[60px] px-[16px] xl:mt-[170px] mt-[100px]'>
            <div className="md:flex items-start py-12 md:px-6">
                <div className="flex xl:flex-row flex-col md:gap-4 gap-2">
                    {/* Main Image with Magnify Effect */}

                    <img src={selectedImage} alt="product" className="xl:w-[414.31px] w-full max-w-[414px] h-[380px] xl:h-[414.31px] object-cover" />

                    {/* Thumbnail Images */}
                    <div className="xl:w-[94.88px] w-[58.04px] flex xl:flex-col flex-row xl:gap-3 gap-[9.28px]">
                        {data.product && data.product.productImages.map((img) => (
                            <img
                                key={img._id}
                                className={`xl:w-[94.88px] xl:h-[94.88px] w-[58.04px] h-[58.04px] cursor-pointer border-2 rounded ${selectedImage === img.url ? "border-[#E5810C]" : "border-gray-300"
                                    }`}
                                alt={`product`}
                                src={img.url}
                                onClick={() => setSelectedImage(img.url)}
                            />
                        ))}
                    </div>
                </div>
                <div className="xl:w-4/6 w-full lg:ml-8 md:ml-6 ml-0 md:mt-0 mt-6">
                    <div className="xl:max-w-[742px] mb-[20px]">
                        <p className="text-2xl text-textBlack">{data.product && data.product.name}</p>
                    </div>

                    {/* <div className='mb-[20px]'>
                        <p className='text-base text-[#747474]'>SKU: {data.product && data.product.sku}</p>
                    </div> */}

                    <div className='bg-[#F5FFF1] flex justify-center items-center gap-[3px] w-[134px] h-[45px] text-[#51C86B] border border-[#51C86B] mb-[20px]'>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4934 5.97752L12.6735 1.1486C12.2543 0.9171 11.7456 0.9171 11.3264 1.1486L2.50651 5.97752C2.05699 6.22347 1.77729 6.69489 1.77686 7.20729V16.7929C1.77729 17.3053 2.05699 17.7768 2.50651 18.0227L11.3264 22.8516C11.7457 23.0828 12.2542 23.0828 12.6735 22.8516L21.4934 18.0227C21.9429 17.7768 22.2226 17.3053 22.223 16.7929V7.20729C22.2226 6.69489 21.9429 6.22346 21.4934 5.97752ZM11.8997 2.20298C11.9597 2.17018 12.0322 2.17018 12.0922 2.20298L20.4701 6.78834L17.0684 8.64955L8.59727 4.01307L11.8997 2.20298ZM11.3986 21.5216L3.0798 16.9683C3.01722 16.9322 2.97893 16.8652 2.97957 16.7929V7.85676L11.3986 12.4672V21.5216ZM3.52982 6.78834L7.34544 4.69862L15.8156 9.3351L12 11.4228L3.52982 6.78834ZM21.0203 16.7929C21.021 16.8652 20.9827 16.9322 20.9201 16.9683L12.6013 21.5216V12.4652L16.2095 10.4897V14.4056C16.2095 14.8685 16.7106 15.1578 17.1115 14.9263C17.2976 14.8189 17.4122 14.6204 17.4122 14.4056V9.83222L21.0203 7.85676V16.7929Z" fill="#51C86B" />
                        </svg>
                        {data.product.status === 'available' ? "In Stock" : "Out of Stock"}
                    </div>

                    <div className='border border-[#D2D2D2] pl-[17px] pt-[30px] pb-[29px] mb-[20px]'>
                        <div>
                            {data.product && data.product.composition ? (
                                <div
                                    className="text-base text-textBlack"
                                    dangerouslySetInnerHTML={{ __html: data.product.composition }}
                                />
                            ) : (
                                <p className="text-base text-textBlack">No composition available</p>
                            )}
                        </div>
                    </div>

                    <button onClick={() => handleEnquireNow(data.product._id)} className="w-[275px] h-[45px] flex justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                        Enquire Now
                    </button>

                </div>
            </div>
            <div className='bg-[#D2D2D2] h-[1px] w-full mb-[70px]' />

            <div className=''>
                <div className='text-center mb-[55px]'>
                    <h2 className='md:text-[38px] text-[26px] text-textOrange font-bold'>Related products</h2>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-[29px]">
                {(data.relatedProducts && data.relatedProducts.length > 0) ? data.relatedProducts.map((item) => (
                    <div
                        key={item._id}
                        className="w-[calc(50%-14.5px)] md:w-[calc(25%-21.75px)] md:h-auto h-[282px]  border border-[#D2D2D2] px-[14px] py-[18px] mb-[70px]"
                    >
                        <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                            <p className='text-xs font-bold text-white'>Sale</p>
                        </div>

                        <div className='md:h-[273px] h-[159.55px] mb-[12px]'>
                            <img src={item.thumbnailImage} alt='product' className='w-full h-full object-cover' />
                        </div>

                        <p className='text-textBlack md:text-sm text-xs mb-[22px]'>{item.name}</p>

                        <button onClick={() => handleEnquireNow(item._id)} className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                            Enquire Now
                        </button>
                    </div>
                )): <NotFound />}
            </div>

            {showLogin && <LoginPopup onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} productId={productTobeEnquire} />}
        </div>

    );
}

export default ProductDetail