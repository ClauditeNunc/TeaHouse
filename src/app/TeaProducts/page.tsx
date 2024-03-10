"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Playfair } from "next/font/google";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import './customProducts.css'

const playdate = Playfair({ subsets: ['latin'], weight: ['600'] });
const playdateTitle = Playfair({ subsets: ['latin'], weight: ['900'] });

export default function TeaProducts() {
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isVisibleSwiper, setIsVisibleSwiper] = useState(false);
    const [howManySlides,setHowManySlides] = useState(3);
    const titleRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1500 && screenWidth >= 1000) {
              setHowManySlides(2);
            } else if (screenWidth < 1000) {
              setHowManySlides(1);
            }else{
                setHowManySlides(3);
            }
          };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerTitle = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisibleTitle(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const observerSwiper = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisibleSwiper(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (titleRef.current) {
            observerTitle.observe(titleRef.current);
        }

        if (swiperRef.current) {
            observerSwiper.observe(swiperRef.current);
        }

        return () => {
            if (titleRef.current) {
                observerTitle.unobserve(titleRef.current);
                window.removeEventListener('resize', handleResize);
            }
            if (swiperRef.current) {
                observerSwiper.unobserve(swiperRef.current);
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return (
        <div className="bg-[#88b44e] bg-opacity-20 w-full pt-[200px] pb-[20px] h-[1700px] @screen lg:h-[1000px] flex flex-col justify-end">
            <div ref={titleRef} className={`w-[80%] ml-[10%] mr-[10%] @screen xl:w-[50%] @screen xl:ml-[25%] @screen xl:mr-[25%] text-center ${isVisibleTitle ? "animated" : "opacity-0"}`}>
                <h3 className='font-sans italic font-[600] text-2xl text-[#88b44e] pt-12'>Our Products</h3>
                <h2 className={playdateTitle.className + " text-[#252C30] text-6xl mt-5 w-[70%] ml-[15%] mr-[15%]"}>Tea has a complex positive effect on the body</h2>
                <div className='flex items-center w-[40%] justify-between my-12 ml-[30%] mr-[30%]'>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                    <div className="h2-line rounded-full p-[5px] bg-black"></div>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                </div>
            </div>
            <div className="bg-[url('/img/product-bg.png')] bg-no-repeat bg-cover w-full h-full">
                <div ref={swiperRef} className={`${isVisibleSwiper ? "animated" : "opacity-0"}`}>
                    <Swiper className='products-swiper h-[100%] w-[70%]'
                        spaceBetween={60}
                        navigation={true}
                        slidesPerView={howManySlides}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                          }}
                        modules={[Navigation, Autoplay]}
                    >
                        <SwiperSlide>
                            <a href='#'>
                                <img src='./img/product-1.jpg' className={`${howManySlides == 1? "w-full":""}`}/>
                                <div className='bg-white w-[90%] ml-[5%] mr-[5%] h-[200px] relative bottom-[50px] flex flex-col items-center'>
                                    <h4 className={playdate.className + " text-[#88B44E] text-4xl tracking-[-1px] pt-[25px]"}>Green Tea</h4>
                                    <p className='w-[80%] text-center font-sans text-lg'>Embark on a journey of rejuvenation with our premium green teas.</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#'>
                                <img src='./img/product-2.jpg' className={`${howManySlides == 1? "w-full":""}`} />
                                <div className='bg-white w-[90%] ml-[5%] mr-[5%] h-[200px] relative bottom-[50px] flex flex-col items-center'>
                                    <h4 className={playdate.className + " text-[#88B44E] text-4xl tracking-[-1px] pt-[25px]"}>Black Tea</h4>
                                    <p className='w-[80%] text-center font-sans text-lg'>Indulge in the bold richness of our exquisite black teas.</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#'>
                                <img src='./img/product-3.jpg' className={`${howManySlides == 1? "w-full":""}`}/>
                                <div className='bg-white w-[90%] ml-[5%] mr-[5%] h-[200px] relative bottom-[50px] flex flex-col items-center'>
                                    <h4 className={playdate.className + " text-[#88B44E] text-4xl tracking-[-1px] pt-[25px]"}>Spiced Tea</h4>
                                    <p className='w-[80%] text-center font-sans text-lg'>Awaken your senses with the aromatic allure of spiced teas.</p>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='#'>
                                <img src='./img/product-4.jpg' className={`${howManySlides == 1? "w-full":""}`}/>
                                <div className='bg-white w-[90%] ml-[5%] mr-[5%] h-[200px] relative bottom-[50px] flex flex-col items-center'>
                                    <h4 className={playdate.className + " text-[#88B44E] text-4xl tracking-[-1px] pt-[25px]"}>Organic Tea</h4>
                                    <p className='w-[80%] text-center font-sans text-lg'>Savor the pure taste of nature with our organic tea collection.</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
