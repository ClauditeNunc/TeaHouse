"use client"
import React, {useEffect, useRef, useState} from 'react';
import { Playfair } from "next/font/google";


const playdate = Playfair({ subsets: ['latin'], weight:['900'] });

export default function TeaContact() {
const [isVisible, setIsVisible] = useState(false);
const contactRef = useRef(null);

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

    if (contactRef.current) {
        observer.observe(contactRef.current);
    }

    return () => {
        if (contactRef.current) {
            observer.unobserve(contactRef.current);
        }
    };
}, []);

  return (
    <div ref={contactRef} className="py-[150px] flex flex-col w-[70%] ml-[15%]">
            <div className={`flex flex-col items-center w-full duration-1000 ${isVisible ? "opacity-100 translate-y-[0px]": "opacity-0 translate-y-[100px]"}`}>
                <h3 className='font-sans italic text-[#88b44e] font-[600] text-2xl'>Contact Us</h3>
                <h2 className={playdate.className + " text-6xl pt-6 text-center"}>Contact us right now</h2>
                <div className='flex items-center w-[40%] justify-between my-12 '>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                    <div className="h2-line rounded-full p-[5px] bg-black"></div>
                    <hr className='w-[42%] border-none h-[3px]  bg-[#93a976]' />
                </div>
                <p className='text-center text-lg w-[60%]'>In a world bustling with activity, our doors are always open to your inquiries and feedback.
                Whether you seek assistance or wish to share your thoughts, we eagerly await your message.
                </p>
            </div>
            <div className="flex flex-col @screen 2xl:flex-row justify-between w-[70%] ml-[15%] mt-12">
                <div className={`flex flex-col items-center duration-1000 delay-75 ${isVisible ? "opacity-100 translate-y-[0px]": "opacity-0 translate-y-[100px]"}`}>  
                    <div className='bg-[#88b44e] bg-opacity-10 w-[100px] rounded-full p-[20px]'><img src='./img/mail.png' className='bg-[#88b44e] w-[60px] p-[10px] rounded-full'/></div>
                    <p className='py-2'>mamedovfaik2005@gmail.com</p>
                    <p className='py-2'>somesupport@mail.com</p>
                </div>
                <div className={`flex flex-col items-center duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-[0px]": "opacity-0 translate-y-[100px]"}`}>  
                <div className='bg-[#88b44e] bg-opacity-10 w-[100px] rounded-full p-[20px]'><img src='./img/phone.png' className='bg-[#88b44e] w-[60px] p-[10px] rounded-full'/></div>
                    <p className='py-2'>+48 572 776 624</p>
                    <p className='py-2'>+012 345 678 902</p>
                </div>                
                <div className={`flex flex-col items-center duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-[0px]": "opacity-0 translate-y-[100px]"}`}>  
                <div className='bg-[#88b44e] bg-opacity-10 w-[100px] rounded-full p-[20px]'><img src='./img/geopin.png' className='bg-[#88b44e] w-[60px] p-[10px] rounded-full'/></div>
                    <p className='py-2'>Poland, Lodz, Strajku Studentow 13</p>
                    <p className='py-2'>USA, North Carolina, Charlotte</p>
                </div>                
            </div>
    </div>
  );
}
