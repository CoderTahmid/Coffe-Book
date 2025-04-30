import React from 'react';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-cover bg-center bg-base-200 min-h-[600px]" style={{ backgroundImage: `url(${bannerImg})` }}>
        </div>
    );
};

export default Banner;