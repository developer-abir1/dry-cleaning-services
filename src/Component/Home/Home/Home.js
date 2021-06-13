import React from 'react';
import Footer from '../../Shear/Footer/Footer';
import About from '../About/About';
import AffordalbePrice from '../AffordalbePrice/AffordalbePrice';
import CollectedDelivered from '../CollectedDelivered/CollectedDelivered';
import Header from '../Header/Header';
import OurService from '../OurService/OurService';
import Packages from '../Packages/Packages';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <About></About>
            <OurService></OurService>
            <CollectedDelivered></CollectedDelivered>
            <Packages></Packages>
            <AffordalbePrice></AffordalbePrice>
            <Footer></Footer>

        </div>
    );
};

export default Home;