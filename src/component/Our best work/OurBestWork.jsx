// CSS Style
import MainTitle from "../MainTitle";
import "./OurBestWork.css";
// import React
import React, { useEffect, useState } from "react";
// ? import External libraries
// import Swiper core and required modules
import { Navigation, EffectFade} from 'swiper/modules';
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
  import "swiper/css";
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';

  const myProjects = [
    {
      id: 1,
      ball: "/images/shapes/Our best work/ball-1.svg",
      imgIcon: "/images/shapes/Our best work/graphic-1.svg",
      imgProject: "/images/g1.jpeg",

    },

    {
      id: 2,
      ball: "/images/shapes/Our best work/ball-2.svg",
      imgIcon: "/images/shapes/Our best work/graphic-2.svg",
      imgProject: "images/g2.jpeg"
    },
 
    {
      id: 3,
      ball: "/images/shapes/Our best work/ball-3.svg",
      imgIcon: "/images/shapes/Our best work/graphic-3.svg",
      imgProject: "images/g3.jpeg"
    },
 
  ]




  export default function OurBestWork() {
    const [sliderIndex, setSliderIndex] = useState(0)

    useEffect(() => {
      if(sliderIndex === 0) {
        document.body.classList.add("purple")
        document.body.classList.remove("yellow")
        document.body.classList.remove("blue")
      }else if(sliderIndex === 1) {
        document.body.classList.add("yellow")
        document.body.classList.remove("purple")
        document.body.classList.remove("blue")
      }else{
        document.body.classList.add("blue")
        document.body.classList.remove("yellow")
        document.body.classList.remove("purple")
      }
    }, [sliderIndex])


    return (
      <div className="OurBestWork" id="ourBestWork">
        <MainTitle title="Our Best Work" />
        <div className="container">
          <Swiper
            className="swiper"
            modules={[Navigation, EffectFade]}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(swiper) => setSliderIndex(swiper.activeIndex)}
            onSwiper={(swiper) => console.log(swiper)}
            loop={false}
            navigation
            // navigation={{
            //   nextEl: "/public/images/goo.jpg",
            //   prevEl: ".image-swiper-button-prev",
            //   disabledClass: "swiper-button-disabled"
            // }}
            effect={'fade'}
          >
            {myProjects.map((x, index) => (
              // <SwiperSlide key={x.id} className={`swiper-slide ${sliderIndex !== index && "none"}`}>
              <SwiperSlide key={x.id} className={`swiper-slide`}>
                <div className="content">
                  <div className="left">
                    <div className="ball">
                      <img src={x.ball} alt="" />
                    </div>
                    <div className="img-icon">
                      <img src={x.imgIcon} alt="" />
                    </div>
                  </div>
                  <div className="right">
                    <img src={x.imgProject} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }