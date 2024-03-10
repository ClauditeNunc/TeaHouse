"use client"
import React, {useEffect, useRef, useState} from 'react';
import { Playfair } from "next/font/google";
import Link from 'next/link';


const playdate = Playfair({ subsets: ['latin'], weight:['900','700'] });

export default function NotFound() {
  return (
    <div className='py-[300px] flex justify-center items-center flex-col'>
        <img className='w-[10%]' src='./img/warning.png'/>
        <h1 className={playdate.className + " text-8xl"}>404</h1>
        <h2 className={playdate.className + " text-6xl font-[700] pb-6"}>Page Not Found</h2>
        <p className='w-[40%] text-center text-xl font-light pb-6'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
        <Link href='/'className='py-6 px-12 bg-[#88b44e] text-white rounded-full duration-300 hover:bg-white hover:text-[#88b44e] hover:shadow-[0_0_15px_0_#88b44e]'>Go Back To Home</Link>        
    </div>
  );
}
