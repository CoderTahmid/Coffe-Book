import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) => {
        if (sortBy === "popularity") {
            //sort by popularity
        } else if (sortBy === "rating") {
            //sort by rating
        }
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <div>
                    <h1>Sort Coffee&apos; by Popularity & Rating-&gt;</h1>
                </div>
                <div className='space-x-4'>
                    <button onClick={() => handleSort("popularity")} className='btn btn-warning'>Sort by Popularity</button>
                    <button onClick={() => handleSort("rating")} className='btn btn-warning'>Sort by Rating</button>
                </div>
            </div>
            <div className='grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;