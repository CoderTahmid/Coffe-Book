import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Heading
                title={"Browse Coffees by Category"}
                subtitle={"Choose your desired coffee category to browse trough specific coffees that fit in your taste"}>
            </Heading>
            {/* Categories tab section */}
            <Categories categories={categories}></Categories>
            {/* Dynamic Nested Component */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;