import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) => {
        if (sortBy === "popularity") {
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sorted);
        } else if (sortBy === "rating") {
            const sorted = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sorted);
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
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;