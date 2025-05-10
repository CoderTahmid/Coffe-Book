import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites } from '../utils';
import Card from '../components/Card';

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }, []);
    return (
        <div>
            <Heading title="Welcome to dashboard" subtitle="Manage coffees that you have previously added as favourite. You can view or remove them from here"></Heading>
            <div className='grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;