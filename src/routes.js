import React from 'react';
import CartsContainer from 'components/cartContainer/cartsContainer';
import Navbar from 'components/navbar/navbar';

const AppRoutes = () => {
   
    return (
        <div className='appwrapper'>
            <Navbar />
            <CartsContainer />
        </div>
    );
};

export default AppRoutes;