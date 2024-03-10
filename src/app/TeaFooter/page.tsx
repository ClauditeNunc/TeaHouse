"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Playfair } from "next/font/google";
import Link from 'next/link';


const playdate = Playfair({ subsets: ['latin'], weight: ['600'] });

export default function TeaFooter() {
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
        <div ref={contactRef}>
            <div className='h-[1200px] flex-col items-start bg-[#242c2f] px-[15%] py-[5%] flex justify-between @screen 2xl:h-[500px] @screen 2xl:flex-row '>
                <div>
                    <h5 className={playdate.className + " text-4xl text-[#88b44e] pb-6"}>Our Office</h5>
                    <div>
                        <div className='py-2 flex items-center font-sans font-[500] text-lg text-[#B0B9AE]'><img src="./img/green-geopin.png" className='h-[20px] pr-2' alt="geopin icon" />Some Street, Lodz, Poland</div>
                        <div className='py-2 flex items-center font-sans font-[500] text-lg text-[#B0B9AE]'><img src="./img/green-phone.png" className='h-[20px] pr-2' alt="phone icon" />+48 572 776 624</div>
                        <div className='py-2 flex items-center font-sans font-[500] text-lg text-[#B0B9AE]'><img src="./img/green-mail.png" className='h-[20px] pr-2' alt="mail icon" />mamedovfaik2005@gmail.com</div>
                    </div>
                    <div className='flex justify-between w-[70%] mt-3'>
                        <a href='https://twitter.com' target='_blank'><img src="./img/white-twitter.png" className='p-3 bg-[#88b44e] rounded-full duration-300 hover:bg-black cursor-pointer' alt="" /></a>
                        <a href='https://youtube.com' target='_blank'><img src="./img/white-youtube.png" className='p-3 bg-[#88b44e] rounded-full duration-300 hover:bg-[#ff110c] cursor-pointer' alt="" /></a>
                        <a href='https://facebook.com' target='_blank'><img src="./img/white-facebook.png" className='p-3 bg-[#88b44e] rounded-full duration-300 hover:bg-[#0766ff] cursor-pointer' alt="" /></a>
                        <a href='https://linkedIn.com' target='_blank'><img src="./img/white-linkedIn.png" className='p-3 bg-[#88b44e] rounded-full duration-300 hover:bg-[#223c55] cursor-pointer' alt="" /></a>
                    </div>
                </div>
                <div>
                    <h5 className={playdate.className + " text-4xl text-[#88b44e] pb-6"}>Quick Links</h5>
                    <div className='flex flex-col justify-between'>
                        <span className='font-sans text-[#88b44e] font-[800] pb-3'>{">"}<Link href={"#"} className='pl-1 text-lg text-[#B0B9AE] font-[400] duration-200 hover:text-[#F5F8F2] hover:tracking-wider'>About Us</Link></span>
                        <span className='font-sans text-[#88b44e] font-[800] pb-3'>{">"}<Link href={"#"} className='pl-1 text-lg text-[#B0B9AE] font-[400] duration-200 hover:text-[#F5F8F2] hover:tracking-wider'>Contact Us</Link></span>
                        <span className='font-sans text-[#88b44e] font-[800] pb-3'>{">"}<Link href={"#"} className='pl-1 text-lg text-[#B0B9AE] font-[400] duration-200 hover:text-[#F5F8F2] hover:tracking-wider'>Our Services</Link></span>
                        <span className='font-sans text-[#88b44e] font-[800] pb-3'>{">"}<Link href={"#"} className='pl-1 text-lg text-[#B0B9AE] font-[400] duration-200 hover:text-[#F5F8F2] hover:tracking-wider'>Terms & Conditions</Link></span>
                        <span className='font-sans text-[#88b44e] font-[800] pb-3'>{">"}<Link href={"#"} className='pl-1 text-lg text-[#B0B9AE] font-[400] duration-200 hover:text-[#F5F8F2] hover:tracking-wider'>Support</Link></span>
                    </div>
                </div>
                <div>
                    <h5 className={playdate.className + " text-4xl text-[#88b44e] pb-6"}>Business Hours</h5>
                    <div>
                        <div className='pb-3'>
                            <p className="text-[#B0B9AE] font-sans text-xl">Monday - Friday</p>
                            <p className={playdate.className + " text-[#F5F8F2] text-xl"}>09:00 am - 07:00 pm</p>
                        </div>
                        <div className='pb-3'>
                            <p className="text-[#B0B9AE] font-sans text-xl">Saturday</p>
                            <p className={playdate.className + " text-[#F5F8F2] text-xl"}>09:00 am - 12:00 pm</p>
                        </div>
                        <div className='pb-3'>
                            <p className="text-[#B0B9AE] font-sans text-xl">Sunday</p>
                            <p className={playdate.className + " text-[#F5F8F2] text-xl"}>Closed</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className={playdate.className + " text-4xl text-[#88b44e]"}>Newsletter</h5>
                    <div className=" flex flex-col">
                        <p className=" text-lg text-[#B0B9AE] py-3">Indulge in our exquisite teas, crafted<br/> for pure delight and relaxation.</p>
                        <form className="flex justify-between w-[300px] border border-gray-300 rounded-lg p-1">
                            <input type="email" placeholder="Your email" className="bg-transparent border-none px-4 py-2 text-lg text-white rounded-full focus:outline-none focus:ring-2 w-3/5" />
                            <button type="submit" className="border border-transparent rounded-lg  text-white text-lg px-4 py-2 ml-2 transition duration-300 hover:bg-[#88b44e] cursor-pointer">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-[100px] bg-[#252525] text-[#B0B9AE] text-xl px-[10%] flex items-center justify-between'>
                <div>© <a href='#' className='text-[#88b44e] hover:text-[#F5F8F2]'>Tea House</a>, All Rights Reserved.</div>
                <div>Designed By <a className='text-[#88b44e] hover:text-[#F5F8F2]' href='https://htmlcodex.com/'>HTML Codex</a>, design realised by <a className='text-[#88b44e] hover:text-[#F5F8F2]' href='https://www.linkedin.com/in/kbln27'>Faik Mammadov.</a></div>
            </div>
        </div>
    );
}
