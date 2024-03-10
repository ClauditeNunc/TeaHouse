"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Playfair } from "next/font/google";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './customSwiper.css';

const playdate = Playfair({ subsets: ['latin'], weight:['900'] });

import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

export default function TeaWelcome() {
  return (
    <div className="pt-[80px] h-[600px] @screen xl:h-[1100px]">
      <div className='w-full z-0 relative overflow-hidden'>
        <div className='absolute h-[600px] @screen xl:h-[1100px] top-[20%] @screen xl:top-[35%] left-[30%] right-[30%] w-2/5 flex flex-col text-center items-center z-50'>
          <h4 className='text-white text-3xl mb-5 font-sans zoom-in'>Welcome to <span className='text-[#262c30] text-3xl font-sans font-semibold zoom-in'>TEA House</span></h4>
          <h1 className={playdate.className + " text-6xl @screen xl:text-8xl text-[#262c30] zoom-in"}>Organic & Quality Tea Production</h1>
          <button className='exploreMore duration-300 bg-white text-xl mt-3 p-2 @screen lg:p-[1.5rem] @screen lg:px-[2.5rem] rounded-full zoom-in'>Explore More</button>
        </div>
        <Swiper className='welcome-swiper h-[600px] @screen xl:h-[1100px]'
          spaceBetween={60}
          effect={'fade'}
          navigation={true}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay,EffectFade, Navigation]}
        >
          <SwiperSlide>
            <div className="image-overlay">
              <img className='w-full h-[600px] @screen xl:h-[1100px] z-0' src="img/carousel-1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-overlay">
              <img className='w-full h-[600px] @screen xl:h-[1100px] z-0' src="img/carousel-2.jpg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
