import React from 'react'

const LocationMap = () => {
    return (
        <div className='mb-[30px]'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.497762928669!2d72.83256511490236!3d18.921984187176797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1b004e4bbff%3A0x1dc529a3bdedcf17!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1691051234567!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taj Hotel Mumbai Location"
            ></iframe>
        </div>
    )
}

export default LocationMap