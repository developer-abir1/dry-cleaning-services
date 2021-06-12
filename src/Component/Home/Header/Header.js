import React from 'react';
import Navbar from '../../Shear/Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import './Header.css'

const Header = () => {
    return (
        <section className="mainHeader">
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </section>
    );
};

export default Header;