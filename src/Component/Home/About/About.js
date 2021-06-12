import React from 'react';
import aboutPh from '../../../image/bg21.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLeaf,  faPhone } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import { faCheckCircle, faClock, faCreditCard } from '@fortawesome/free-regular-svg-icons';

const About = () => {
    return (
        <section className="about-section container-fluid ">
            <div className="row     mt-3 p-3 m-2 py-3 ">
                <div className="col-md-6 mt-5">
                    <img src={aboutPh} class="img-fluid" alt="" />
                </div>
                <div className="col-md-6 mt-5 ">
                    <h6 class="text-small ">More than 25 Years of Experience</h6>
                    <h2 className="text-brand">We are Passionate About <br /> Laundry</h2>
                    <p class="text-secondary ">We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about the way you think about laundry!</p>
                    <div className="row text-secondary">
                        <div className="col-md-6  ">
                            <ul class="list-unstyled">
                                <li > <FontAwesomeIcon className="text-small" icon={faCheckCircle} /> 100% Customer Satisfaction</li>
                                <li><FontAwesomeIcon className="text-small" icon={faCheckCircle} /> Free Collection & Delivery</li>
                                <li><FontAwesomeIcon className="text-small" icon={faCheckCircle} /> Affordable Prices</li>
                                <li><FontAwesomeIcon className="text-small" icon={faCheckCircle} /> Best Quality</li>

                            </ul>
                        </div>
                        <div className="col-md-6 contact-me container">
                        <p class="">Call For Quality Service</p>

                       

                            <h4 class="text-small " >  <FontAwesomeIcon className="phoneIcon" icon={faPhone} /> <span className="namber"> 01752103786</span> </h4>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row serviceInfo  mt-3 p-3 m-4 py-3 ">
                <div className="col-md-4 d-flex  ">
                <div className="mt-4 m-3">
                        <FontAwesomeIcon className="text-small" style={{fontSize:'50px'}} icon={faClock} />
                    </div>
                    <div className="mt-3">

                        <h4 > <span class="exta-bonus"> Save Time & money</span> </h4>
                        <p className="text-secondary">  No more wasted time driving to the laundromats, we pickup and deliver for free!</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex">
                <div className="mt-4 m-3">
                        <FontAwesomeIcon className="text-small" style={{fontSize:'50px'}}  icon={faCreditCard} />
                    </div>
                    <div className="mt-3">
                        <h4 class=''>  <span class="exta-bonus"> Pay Online o Seconds </span></h4>
                        <p className="text-secondary">   Manage your Press account and billing online from your smartphone or computer.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex">
                <div className="mt-4 m-3">
                        <FontAwesomeIcon className="text-small" style={{fontSize:'50px'}}  icon={faLeaf} />
                    </div>
                    <div className="mt-3">
                        <h4 >  <span class="exta-bonus"> Eco-Friendly </span></h4>
                        <p className="text-secondary">
                        We use safe and clean perc-free solvents, so you, and the Earth, can look good.
                        </p>
                    </div>
                  
                </div>
            </div>
        </section>
    );
};

export default About;