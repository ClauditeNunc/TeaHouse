"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Playfair } from "next/font/google";
import "./customAbout.css"

const playdate = Playfair({ subsets: ['latin'], weight:['900'] });
const playdateSub = Playfair({ subsets: ['latin'], weight:['700'] });

export default function TeaAbout() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutRef} className="pt-[200px] w-[100%] h-[2350px] @screen lg:h-[2400px] @screen xl:h-[2600px] @screen 2xl:h-[1000px] text-center @screen 2xl:text-left items-center flex flex-col @screen 2xl:flex-row">
            <div className='w-[100%] @screen 2xl:w-[50%] pl-[5%] @screen 2xl:pl-[15%] h-[800px] pr-[5%] grid grid-rows-2 grid-cols-2'>
                <img className={`w-[400px] h-[400px] opacity-0 justify-self-end ${ isVisible ? "animate-fade-in-fastest" : ""}`} src='./img/about-1.jpg'/>
                <img className={`w-[170px] ml-[20px] opacity-0 ${ isVisible ? "animate-fade-in-fast" : ""}`}  src='./img/about-4.jpg'/>
                <img className={`w-[170px] mt-[20px] opacity-0 ${ isVisible ? "animate-fade-in-slow" : ""} justify-self-end `}  src='./img/about-3.jpg'/>
                <img className={`w-[400px] h-[400px] opacity-0 relative top-[-168px] ml-[20px] ${ isVisible ? "animate-fade-in-simultaneous" : ""}`}  src='./img/about-2.jpg'/>
            </div> 
            <div className={`flex flex-col w-[50%] @screen 2xl:pr-[15%] h-full opacity-0 ${ isVisible ? "animate-fade-in-simultaneous" : ""}`}>
                <p className='font-sans font-[600] italic text-2xl text-[#88b44e] mb-6'>About Us</p>
                <h2 className={playdate.className + " text-6xl text-[#252C30] mb-6 tracking-tight"}>The success history of TEA House in 25 years</h2>
                <div className='flex items-center w-[100%] @screen 2xl:w-[60%] justify-between mb-12'>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]'/>
                        <div className="h2-line rounded-full p-[5px] bg-black"></div>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]'/>
                </div>
                <div className='flex flex-col @screen 2xl:flex-row border-b-2 pb-3'>
                    <img src="./img/about-5.jpg" className='w-[100%] @screen 2xl:w-[35%] m-6 ml-0 mt-0' alt='a jar of tea herbs'/>
                    <div className='py-6 @screen 2xl:py-0'>
                        <h5 className={playdateSub.className + " text-2xl"}>Our tea is one of the most popular drinks in the world</h5>
                        <p className='font-sans'>Join the global tea phenomenon: Experience the worldwide love for our tea, cherished by countless enthusiasts for its unrivaled taste.</p>
                    </div>
                </div>
                <div className='flex flex-col pt-3 @screen 2xl:flex-row'>
                    <div className='py-6 @screen 2xl:py-0'>
                        <h5 className={playdateSub.className + " text-2xl"}>Daily use of a cup of tea is good for your health</h5>
                        <p className='font-sans'>Embrace vitality: Elevate your well-being with the daily ritual of savoring a comforting cup of tea for a healthier lifestyle.</p>
                    </div>
                    <img src="./img/about-6.jpg" className='w-[100%] @screen 2xl:w-[35%] @screen 2xl:m-6 @screen 2xl:mr-0 @screen 2xl:mt-0' alt="tea kettle with herbs" />
                </div>
            </div>
        </div>
    );
}
