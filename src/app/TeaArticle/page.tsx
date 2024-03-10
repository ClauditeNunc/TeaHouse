"use client"
import React, {useEffect, useRef, useState} from 'react';
import { Playfair } from "next/font/google";
import Link from 'next/link';


const playdate = Playfair({ subsets: ['latin'], weight:['900'] });

export default function TeaArticle() {
const [isVisible, setIsVisible] = useState(false);
const articleRef = useRef(null);

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

    if (articleRef.current) {
        observer.observe(articleRef.current);
    }

    return () => {
        if (articleRef.current) {
            observer.unobserve(articleRef.current);
        }
    };
}, []);

  return (
    <div ref={articleRef} className={`py-[80px] flex flex-col items-center text-center @screen 2xl:text-left @screen 2xl:flex-row w-[100%] max-h-[1700px] @screen 2xl:max-h-[700px] pl-[15%] pr-[10%] duration-1000 ${isVisible? "opacity-100" : "opacity-0"}`}>
        <img src="./img/article.jpg" alt="a picture of leaves" className='mr-[5%] mb-6 @screen 2xl:max-h-[500px] @screen 2xl:max-h-auto @screen 2xl:mb-0' />
        <div className='w-[100%] @screen xl:w-[50%]'>
            <h3 className='font-sans italic text-[#88b44e] font-[600] text-2xl'>Featured Article</h3>
            <h2 className={playdate.className + " text-6xl pt-6"}>The history of tea leaf in the world</h2>
            <div className='flex items-center w-[100%] @screen 2xl:w-[40%] justify-between my-12 '>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                    <div className="h2-line rounded-full p-[5px] bg-black"></div>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
            </div>
            <p className='font-sans text-xl pb-6'>
                Tea leaf, a ubiquitous companion in our daily lives, holds a rich and fascinating history. Originating in ancient China, its journey spans continents and centuries,
                intertwining with cultures and shaping societies. From humble beginnings to global prominence, the story of tea is a testament to its enduring appeal and cultural
                significance.
            </p>
            <p className='font-sans text-xl pb-12'>
                The allure of tea lies not just in its taste, but in its ability to bring people together,
                to soothe souls, and to create cherished moments of tranquility amidst life's chaos.
            </p>
            <Link href='https://en.wikipedia.org/wiki/History_of_tea' target='_blank' className='py-6 px-12 bg-[#88b44e] text-white rounded-full duration-300 hover:bg-white hover:text-[#88b44e] hover:shadow-[0_0_15px_0_#88b44e]'>Read More</Link>
        </div> 
    </div>
  );
}
