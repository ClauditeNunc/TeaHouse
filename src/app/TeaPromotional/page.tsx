"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Playfair } from "next/font/google";
import Link from 'next/link';
import "./customPromotional.css";

const playdate = Playfair({ subsets: ['latin'], weight: ['800', '600'], style: ["normal", "italic"] });

export default function TeaPromotional() {
    const [isVisible, setIsVisible] = useState(false);
    const PromotionalRef = useRef(null);
    const [isIframeVisible, setIsIframeVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (PromotionalRef.current) {
            observer.observe(PromotionalRef.current);
        }

        return () => {
            if (PromotionalRef.current) {
                observer.unobserve(PromotionalRef.current);
            }
        };
    }, []);

    const handlePlayButtonClick = () => {
        setIsIframeVisible(!isIframeVisible);
    };

    return (
        <div ref={PromotionalRef} className="relative">
            <div className={`my-[80px] flex flex-col @screen lg:flex-row  h-[700px] w-full bg-[url('/img/video-bg.jpg')] bg-cover bg-no-repeat relative overflow-hidden duration-1000 ${isVisible?"opacity-100":"opacity-0"}`}>
                <div className='bg-[#88b44e] bg-opacity-80 w-[100%] h-[700px] pl-[10%] py-[5%]'>
                    <h2 className={playdate.className + " text-5xl tracking-tight pb-6"}>Tea is a drink of <span className='text-white'>health</span> and <span className='text-white'>beauty</span></h2>
                    <p className={playdate.className + " font-[600] italic text-white text-2xl pb-6"}>Cherished for centuries across cultures, tea's aromatic essence invigorates the senses while its myriad of antioxidants nourish the body. With each sip, a journey unfolds, weaving tales of tradition and well-being.</p>
                    <div className='grid grid-cols-2 gap-5 mb-12'>
                        <div className='flex items-center'>
                            <img src="./img/v.png" className='bg-white p-4 rounded-full' />
                            <p className='pl-2'>Great tea assortment</p>
                        </div>
                        <div className='flex items-center'>
                            <img src="./img/v.png" className='bg-white p-4 rounded-full' />
                            <p className='pl-2'>Unique accessories</p>
                        </div>
                        <div className='flex items-center'>
                            <img src="./img/v.png" className='bg-white p-4 rounded-full' />
                            <p className='pl-2'>Spices & additives</p>
                        </div>
                        <div className='flex items-center'>
                            <img src="./img/v.png" className='bg-white p-4 rounded-full' />
                            <p className='pl-2'>Good for health & beauty</p>
                        </div>
                    </div>
                    <Link href={"#"} className='bg-white py-5 px-10 rounded-full duration-300 hover:bg-[#88b44e] hover:shadow-[0_0_15px_0_white] hover:text-white'>Explore More</Link>
                </div>
                <div className="bg-[#88b44e] bg-opacity-80 w-[100%] pb-12 flex justify-center items-center">
                    <img src="./img/play.png" className={`pulse-container-white justify-self-center cursor-pointer delay-500 duration-1000 ${isVisible?"opacity-100":"opacity-0"}`} onClick={handlePlayButtonClick} />
                </div>
                {isIframeVisible && (
                    <div className='fixed flex flex-col justify-between top-[50%] left-[50%] mt-[-150px] ml-[-225px] bg-white w-[450px] h-[300px] @screen lg:mt-[-300px] @screen lg:ml-[-450px] @screen lg:w-[900px] @screen lg:h-[600px] z-[51] animate-slide-down'>
                        <div className='w-full flex justify-between h-[20%] items-center'>
                            <p className={playdate.className + " text-5xl tracking-tight text-[#252c30] ml-5"}>Youtube Video</p>
                            <button className='text-5xl active:border-[5px] active:border-black mr-5' onClick={handlePlayButtonClick}>X</button>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="YouTube video player"
                            allowFullScreen
                            className='h-[80%] w-[450px] @screen lg:w-[900px]'
                        ></iframe>
                    </div>
                )}
            </div>
            {isIframeVisible && (
                <div className={`fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50 pointer-events-none ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}></div>
            )}
        </div>
    );
}
