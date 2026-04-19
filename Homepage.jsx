import React from 'react';
import Navbar from './src/Navbar';
import { Outlet } from 'react-router';
import Banner from './src/Banner';
import Footer from './Footer';
import Homecontent from './Homecontent';

const Homepage = () => {
    return (
        <div className=''>
           <Navbar> </Navbar>
           
            
           <Outlet> </Outlet>
           <Footer> </Footer>
       
        </div>
    );
};

export default Homepage;