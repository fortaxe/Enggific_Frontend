import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

const MagniFyingImage = ({ image }) => {
  return (
    <div className="mgi_perimeter">
      <div className="mgi_image w-[414.31px] h-[414.31px]">
        <ReactImageMagnify
          smallImage={{
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: `${image}`,
            // sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
          }}
          largeImage={{
            alt: "",
            src: `${image}`,
            width: 1200,
            height: 1800,
          }}
          isHintEnabled={true}
        />
      </div>
    </div>
  )
}

export default MagniFyingImage