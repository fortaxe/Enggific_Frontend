import React from 'react'

const CompanyBanners = () => {


    return (
        <div className=''>
            <div className="flex flex-wrap justify-evenly gap-[29px] px-[60px] py-[70px]">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="w-[200px] h-[90px]"
                        style={{
                            backgroundImage: `url(/company${index+1}.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyBanners