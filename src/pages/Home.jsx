import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={"This is a title"} subtitle={"This is a subtitle"}></Heading>
            {/* Catergory tab section */}
            {/* Dynamic Nested Component */}
        </div>
    );
};

export default Home;