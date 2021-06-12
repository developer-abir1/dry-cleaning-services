import React from 'react';
import photos from '../../../image/abstract-modern-laundry-logo-design-template_15713-134.jpg';
import ph from '../../../image/bg01.jpg'
import './CollectedDelivered.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import delivery from '../../../image/delevery.gif';
import dress from '../../../image/dress.png';
import collaction from '../../../image/collaction.png';
import cleanDress from '../../../image/cleaning-dress.png'

const CollectedDelivered = () => {
    return (

        // Collected And Delivered --- Start ---->
        <section className="collecton-section  container-fluid">
            <div className="row mt-5 pt-5 p-3">
                <div className="col-md-6 ">
                    <h5 class="text-small">Get Your Clothes Collected & Delivered </h5>
                    <h1 className="text-brand">How We Work</h1>
                    <p class="text-secondary">
                        Our Service is dedicated to making your life easier by providing pick up laundry service. Give yourself one less thing to worry about and try our residential wash and fold service that includes pick up and delivery.
                         <br />
                        <br />

                        We have been in the laundry business for more than 12 years and would love to earn your business. Try us today and save $10 Off your first laundry service of 20 pounds or more.
                    </p>

                    <button class="btn-brand mt-4 mb-3">Get Service Now</button>
                </div>
                <div className="col-md-6 ">
                    {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-controls">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active dress" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="delivery" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class='collaction' aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" class="cleanDress" aria-label="Slide 4"></button>
                        </div>
                     </div>
                        <div class="carousel-inner">
                            <div class="carousel-item " >
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={dress} style={{height:'400px', width:'100%'}} class="d-block w-100" alt="..." />

                                    </div>
                                    <div className="col-md-6  mt-5">
                                        <h1> <span class="text-small">Bag Up</span> All Your Dirty Clothes</h1>
                                        <p className="text-secondary mt-4">
                                            We are pleased to pickup your
                                            laundry and ensure that it is expertly laundered and pressed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" >
                                <div className="row "> 
                                    <div className="col-md-6 ">
                                        <img src={delivery} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />

                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small mt-5"> Pick Up</span> Your Clothes</h1>
                                        <p class="text-secondary  mt-4">
                                            Morning of your pickup, leave your bags in their designated pickup location by 8:00 am for a driver to pick up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={collaction} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />
                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small ">  Clean</span>  Your Clothes</h1>
                                        <p class="text-secondary  mt-4"> Our facilities are so good we guarantee you’ll be satisfied – we put a quality guarantee on all items </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={cleanDress} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />

                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small">  Deliver</span>  Clean, Folded Clothes </h1>
                                        <p class="text-secondary  mt-4"> We’ll deliver your pristine garments back to you, anytime and anywhere</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}



                    <div id="carouselExampleCaptions" class="carousel slide container" data-bs-ride="carousel">
                        <div className="carousel-controls">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active dress" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="delivery" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class='collaction' aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="cleanDress" aria-label="Slide 4"></button>
                            </div>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <div className="row">
                                    <div className="col-md-6">
                                        <img src={dress} style={{height:'400px'}} class="d-block w-100" alt="..." />

                                    </div>
                                    <div className="col-md-6  mt-5">
                                        <h1> <span class="text-small">Bag Up</span> All Your Dirty Clothes</h1>
                                        <p className="text-secondary mt-4">
                                            We are pleased to pickup your
                                            laundry and ensure that it is expertly laundered and pressed.
                                        </p>
                                      
                                    </div>
                                </div>
                          
                            </div>
                            <div class="carousel-item">
                            <div className="row "> 
                                    <div className="col-md-6 ">
                                        <img src={delivery} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />

                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small mt-5"> Pick Up</span> Your Clothes</h1>
                                        <p class="text-secondary  mt-4">
                                            Morning of your pickup, leave your bags in their designated pickup location by 8:00 am for a driver to pick up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                            <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={collaction} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />
                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small ">  Clean</span>  Your Clothes</h1>
                                        <p class="text-secondary  mt-4"> Our facilities are so good we guarantee you’ll be satisfied – we put a quality guarantee on all items </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                            <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={cleanDress} style={{height:'400px', width:'100%'}} class="d-block w-100"  alt="..." />

                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <h1> We  <span className="text-small">  Deliver</span>  Clean, Folded Clothes </h1>
                                        <p class="text-secondary  mt-4"> We’ll deliver your pristine garments back to you, anytime and anywhere</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        

                        
                    </div>
                </div>

            </div>
        </section>

        // Collected And Delivered --- end

    );
};

export default CollectedDelivered;