import MagniFyingImage from '@/clientComponents/MagniFyingImage';
import SideBySideMagnifyingImage from '@/clientComponents/MagniFyingImage';
import { useState } from 'react';


const ProductDetail = () => {
    const images = [
        "/vernier-caliper-1.png",
        "/vernier-caliper-2.png",
        "/vernier-caliper-3.png",
        "/vernier-caliper-4.png",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);


    return (
        <div className='px-[60px]'>
            <div className="md:flex items-start py-12 2xl:px-20 md:px-6 px-4">
                <div className="flex md:gap-4 gap-2">
                    {/* Main Image with Magnify Effect */}
                    <MagniFyingImage image={selectedImage} />
                    {/* <SideBySideMagnifyingImage image={'https://adamrisberg.github.io/react-image-magnifiers/'} /> */}

                    {/* Thumbnail Images */}
                    <div className="w-[94.88px] flex flex-col gap-3">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                className={`w-[94.88px] h-[94.88px] cursor-pointer border-2 rounded ${selectedImage === img ? "border-[#E5810C]" : "border-gray-300"
                                    }`}
                                alt={`product-${index + 1}`}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:hidden">
                    <img className="w-full" alt="product" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                    <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                        <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    </div>
                </div>
                <div className="xl:w-4/6 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="max-w-[742px] mb-[20px]">
                        <p className="text-2xl text-textBlack">Vernier Caliper 150mm, 6 inches, Magnetic Steel made with Pinch Fine Measure Function</p>
                    </div>

                    <div className='mb-[20px]'>
                        <p className='text-base text-[#747474]'>MFR#: LL300N-P</p>
                    </div>

                    <div className='bg-[#F5FFF1] flex justify-center items-center gap-[3px] w-[134px] h-[45px] text-[#51C86B] border border-[#51C86B] mb-[20px]'>
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4934 5.97752L12.6735 1.1486C12.2543 0.9171 11.7456 0.9171 11.3264 1.1486L2.50651 5.97752C2.05699 6.22347 1.77729 6.69489 1.77686 7.20729V16.7929C1.77729 17.3053 2.05699 17.7768 2.50651 18.0227L11.3264 22.8516C11.7457 23.0828 12.2542 23.0828 12.6735 22.8516L21.4934 18.0227C21.9429 17.7768 22.2226 17.3053 22.223 16.7929V7.20729C22.2226 6.69489 21.9429 6.22346 21.4934 5.97752ZM11.8997 2.20298C11.9597 2.17018 12.0322 2.17018 12.0922 2.20298L20.4701 6.78834L17.0684 8.64955L8.59727 4.01307L11.8997 2.20298ZM11.3986 21.5216L3.0798 16.9683C3.01722 16.9322 2.97893 16.8652 2.97957 16.7929V7.85676L11.3986 12.4672V21.5216ZM3.52982 6.78834L7.34544 4.69862L15.8156 9.3351L12 11.4228L3.52982 6.78834ZM21.0203 16.7929C21.021 16.8652 20.9827 16.9322 20.9201 16.9683L12.6013 21.5216V12.4652L16.2095 10.4897V14.4056C16.2095 14.8685 16.7106 15.1578 17.1115 14.9263C17.2976 14.8189 17.4122 14.6204 17.4122 14.4056V9.83222L21.0203 7.85676V16.7929Z" fill="#51C86B" />
                        </svg>
                        In Stock
                    </div>

                    <div className='border border-[#D2D2D2] pl-[17px] pt-[30px] pb-[29px] mb-[20px]'>
                        <div>
                            <p className='text-base text-textBlack font-bold'>Product Details</p>
                            <ul className='list-disc pl-[17px]'>
                                <li className='text-base'>ESAW Vernier Caliper with Fine Wheel Measurement</li>
                                <li className='text-base'>Inside, Outside and Depth Jaws for Measurement of Any Objects.</li>
                                <li className='text-base'>Graduation on one side is 0.1 cm and on other side, is 1/128 inch.</li>
                                <li className='text-base'>Cast Iron Made with Tension Screw knob and Laser Engraving.</li>
                                <li className='text-base'>Economic, well designed and suitable for day to day uses.</li>
                            </ul>
                        </div>
                    </div>

                    <button className="w-[275px] h-[45px] flex justify-center items-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
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
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="w-[calc(50%-14.5px)] md:w-[calc(25%-21.75px)] md:h-auto h-[282px]  border border-[#D2D2D2] px-[14px] py-[18px] mb-[70px]"
                        >
                            <div className='md:w-[55px] md:h-[27px] w-[32.14px] h-[15.78px] bg-[#FF1C1C] flex items-center justify-center'>
                                <p className='text-xs font-bold text-white'>Sale</p>
                            </div>

                            <div className='md:h-[273px] h-[159.55px] mb-[12px]'>
                                <img src='/product-1.png' alt='product' className='w-full h-full object-cover' />
                            </div>

                            <p className='text-textBlack md:text-sm text-xs mb-[22px]'>Vernier Caliper 150mm, 6 inches, Magnetic Steel made with Pinch Fine Measure Function</p>

                            <button className="w-full md:h-[45px] h-[32px] flex items-center justify-center bg-orange-500 text-white text-base hover:bg-orange-600 transition">
                                Enquire Now
                            </button>
                        </div>
                    ))}
                </div>
        </div>

    );
}

export default ProductDetail