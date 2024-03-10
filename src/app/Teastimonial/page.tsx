"use client"
import React, {useState, useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Playfair } from "next/font/google";
import "./customTeastimonial.css"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const playdate = Playfair({ subsets: ['latin'], weight:['800'] });

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Teastimonial() {
    const [isVisibleText, setIsVisibleText] = useState(false);
    const [isVisibleSwiper, setIsVisibleSwiper] = useState(false);
    const textRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observertext = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisibleText(true);
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

        if (textRef.current) {
            observertext.observe(textRef.current);
        }

        if (swiperRef.current) {
            observerSwiper.observe(swiperRef.current);
        }

        return () => {
            if (textRef.current) {
                observertext.unobserve(textRef.current);
            }
            if (swiperRef.current) {
                observerSwiper.unobserve(swiperRef.current);
            }
        };
    }, []);



    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
          return '<span class="' + className + '">' + '</span>';
        },
      };
  return (
    <div ref={textRef} className="h-[1100px] @screen 2xl:h-[900px] bg-[url('/img/testimonial-bg.jpg')] bg-cover bg-no-repeat relative overflow-hidden">
        <div className="bg-[#88b44e] bg-opacity-80 pt-[80px] z-[49] h-full">
            <div className={`flex flex-col justify-center items-center pt-12 duration-1000 ${isVisibleText ? "opacity-100 translate-y-0":"opacity-0 translate-y-[200px]"}`}>
                <h3 className='font-sans italic text-white font-[600] text-2xl'>Testimonial</h3>
                <h2 className={playdate.className + " text-6xl tracking-tight py-6 w-[60%] @screen xl:w-[30%] text-center"}>What our clients say about our tea</h2>
                <div className='flex items-center w-[20%] justify-between'>
                        <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                        <div className="h2-line rounded-full p-[5px] bg-black border-[10px] border-white"></div>
                        <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                </div>
            </div>
            <Swiper className={`teastimonial-swiper w-[95%] @screen lg:w-[50%] @screen xl:w-[33%] duration-1000 ${isVisibleSwiper ? "opacity-100 translate-y-0":"opacity-0 translate-y-[200px]"}`}
            spaceBetween={500}
            pagination={pagination}
            speed={2000}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            ref={swiperRef}
            >
            <SwiperSlide>
                <div className="w-[100%] bg-white  h-[350px] border-[40px] border-[#88b44e] p-10">
                    <p className='text-center text-lg'>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className='flex justify-center my-5'>
                        <img className='rounded-full w-[70px] mr-5' src="./img/testimonial-1.jpg" alt="customer's profile picture" />
                        <div className='flex flex-col'>
                            <p className={playdate.className + " text-3xl tracking-tight"}>Client Name</p>
                            <p className='text-[#88b44e] text-xl font-sans'>Profession</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-[100%] bg-white h-[350px] border-[40px] border-[#88b44e] p-10">
                    <p className='text-center text-lg'>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className='flex justify-center my-5'>
                        <img className='rounded-full w-[70px] mr-5' src="./img/testimonial-2.jpg" alt="customer's profile picture" />
                        <div className='flex flex-col'>
                            <p className={playdate.className + " text-3xl tracking-tight"}>Client Name</p>
                            <p className='text-[#88b44e] text-xl font-sans'>Profession</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="w-[100%] bg-white h-[350px] border-[40px] border-[#88b44e] p-10">
                    <p className='text-center text-lg'>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                    <div className='flex justify-center my-5'>
                        <img className='rounded-full w-[70px] mr-5' src="./img/testimonial-3.jpg" alt="customer's profile picture" />
                        <div className='flex flex-col'>
                            <p className={playdate.className + " text-3xl tracking-tight"}>Client Name</p>
                            <p className='text-[#88b44e] text-xl font-sans'>Profession</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
      </div>
        );
}
