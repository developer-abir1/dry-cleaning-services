import React, { useEffect, useState } from 'react';
import dry1 from '../../../image/car1.png'
import dry2 from '../../../image/carusol01.png'
import dry3 from '../../../image/ca2.png';
import ReactTypingEffect from 'react-typing-effect';

import './MainHeader.css'


const MainHeader = () => {

    
    return (
        <section className=" maniHeader-section ">
            <div id="carouselExampleInterval" class="carousel slide  bg-carousel   container-fluid" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div className="row d-flex align-items-center ">
                            <div className="col-md-5">
                                <h1 class="text-start text-brand " style={{fontSize:'60px'}}>
                                <ReactTypingEffect
                                    text={["Laundry Service" ,"Dry Cleaning "]}
                                />
                               </h1>
                                <h6 class="text-small mt-3">
                                    We Care for the clothes You Wear
                               </h6>
                                <p class="text-start  text-secondary mt-3" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam possimus architecto perspiciatis illo ad quod sunt voluptates temporibus et ratione soluta, iure vel accusantium incidunt quae odit veritatis animi facere!</p>

                                <button class=" btn-brand mt-3"> Order now</button>
                            </div>
                            <div className="col-md-7 ">
                                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_n85vndb6/laundry_shop.json" background="transparent" speed="1" loop autoplay></lottie-player>                            </div>
                        </div>
                    </div>


                </div>

            </div>



        </section>
    );
};

export default MainHeader;