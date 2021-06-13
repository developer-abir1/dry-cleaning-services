import React, { useRef, useState } from "react";
import './Testimonila.css';
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../image/bg5.jpg"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


const review = [
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    }, {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    },
    {
        name: "MD Abir Khan",
        company: 'Radiant Pharma',
        comment: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus architecto alias soluta ullam, distinctio numquam adipisci in eius neque ea, aliquam nihil! Esse praesentium sint suscipit, pariatur ad perspiciatis, architecto, aliquam excepturi facere consectetur accusantium.',
        reat: '*****'

    }
]


const Testimonial = () => {
    return (
        <section className="testmonial-section mt-5">
            <dev>
                <h5 class="text-small  text-center mt-5 ">  Testimonial</h5>
                <h2 className="text-brand text-center">Review Clients</h2>
            </dev>
            <div className="container">

                <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    {review.map(data => <SwiperSlide>
                        
                            <div className="card" style={{ width: '18em' }}>
                            <div className="imgs  d-flex justify-content-center ">
                            <img src={logo} className="reviewImg" alt="" />
                           </div>
                            <h4 class="text-center text-uppercase">{data.name}</h4>
                            <h6 class="text-small">{data.company}</h6>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aspernatur. Quaerat facere nihil libero consequatur veritatis! Delectus neque eligendi voluptas numquam ducimus vitae, fugit repudiandae maiores inventore quibusdam distinctio officiis!</p>
                            <h3 style={{color: 'gold'}}>*****</h3>
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonial;