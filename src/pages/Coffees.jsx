import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;