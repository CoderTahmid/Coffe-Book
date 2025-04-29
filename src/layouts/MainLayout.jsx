import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;