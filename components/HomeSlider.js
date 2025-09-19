"use client";

import { foodkingUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section">
      <Swiper
        ref={swiperRef}
        {...sliderProps.hero}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg.jpg")',
              }}
            >
              <div
                className="chilii-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div
                className="fire-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.7s"
              >
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              <div
                className="offer-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/offer-shape.png" alt="shape-img" />
              </div>
              <h2
                className="hero-back-title"
                data-animation="fadeInRight"
                data-duration={duration}
                data-delay="2.5s"
              >
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">Hi, I'm Alika Maya</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        Empowering Lives Through
                        <span>Style & Inspiration</span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-dot text-center pt-5">
        <div className="dot" />
      </div>
    </section>
  );
};
export default HomeSlider;