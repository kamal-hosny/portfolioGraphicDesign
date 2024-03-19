import "./CustomerReviews.css";
// import React
import React from 'react'

// ? import External libraries
// import Swiper core and required modules
import {  Pagination , Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// mui icons
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
//
import MainTitle from "../MainTitle";
import Button from "../Button";

const myCustomers = [
    {
        id: 1,
        paragraph: "The designer, Abdullah Mahmoud holds a training certificate with an excellence degree recognized by Adobe",
        name: "الديزاينر",
        img: "/images/avatar.jpg",
        stars: 5,
        imgProject: "/images/g1.jpeg",
        link: "",
    },
    {
        id: 2,
        paragraph: "let him cooklet him cooklet him cooklet him cooklet him cooklet him cook",
        name: "yuta",
        img: "/images/avatar2.jpg",
        stars: 3,
        imgProject: "/images/g2.jpeg",
        link: null,
    },
    {
        id: 3,
        paragraph: "The website is good",
        name: "devin",
        img: "/images/avatar3.png",
        stars: 1,
        imgProject: "/images/g3.jpeg",
        link: null,
    },
    {
        id: 4,
        paragraph: "good job",
        name: "eren",
        img: "/images/avatar4.jpg",
        stars: 1,
        imgProject: "/images/g4.jpeg",
        link: null,
    },
    {
        id: 5,
        paragraph: "جميل",
        name: "محهول",
        img: "/images/avatar_male.webp",
        stars: 1,
        imgProject: "/images/g5.jpeg",
        link: null,
    },
]


export default function CustomerReviews() {
    return (
        <div className="customerReviews" id="customerReviews">
            <MainTitle title="Customer Reviews" />
            <div className="container">
                <Swiper
                className="swiper"
                    modules={[Pagination, Autoplay ]}
                    spaceBetween={10}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    pagination={true}
                    breakpoints={{
                        768: {
                          slidesPerView: 3,
                        },
                        576: {
                          slidesPerView: 2,
                        },
                      }}
                      loop={true}
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {myCustomers.map((x) => {
                        return(
                            <SwiperSlide key={x.id} className="swiper-slide">
                                <div className="box">
                                <div className="card">
                                    <img className="quote" src="/images/shapes/1x/quotes.png" alt="" />
                                    <div className="image">
                                        <img src={x.img !== null ? x.img: "/images/avatar_male.webp"} alt="" />
                                    </div>
                                    <h3>{x.name}</h3>
                                    <div className="stars">
                                    {Array.from({ length: x.stars }, (_, index) => (
                                        <StarIcon key={index} className="icon" />
                                    ))}
                                    </div>  
                                    <p>{x.paragraph}</p>
                                    {
                                        x.imgProject !== null ?<div className="img-project"><img  src={x.imgProject} alt="" /></div> : <></>
                                    }

                                </div>
                                {x.link !== null && <Button link={x.link}/> }
                                
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    

                </Swiper>
            </div>
        </div>
    )
}
