"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Playfair } from "next/font/google";
import Link from 'next/link';
import { useCart } from '../CartContext';

const playdate = Playfair({ subsets: ['latin'], weight: ['800', '600'], style: ["normal", "italic"] });

type Product = {
    id: number;
    chosenImage: string;
    name: string;
    description: string;
    price: number;
    type: string;
    quantity: number;
};

export default function TeaStore() {
    const { addToCart, cartItems, increaseQuantity } = useCart();
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const storeRef = useRef(null);
    const [products, setProducts] = useState<Product[]>([]);

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

        if (storeRef.current) {
            observer.observe(storeRef.current);
        }

        return () => {
            if (storeRef.current) {
                observer.unobserve(storeRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/pseudodb.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCart = (product: Product) => {
        const sameItemExists = cartItems.some(item => item.name === product.name);
        if (sameItemExists) {
            increaseQuantity(product.name)
        } else {
            addToCart({ ...product, quantity: 1 });
        }
    };

    return (
        <div ref={storeRef} className='flex flex-col items-center pt-[120px] pb-[50px]'>
            <div className='flex flex-col items-center w-[50%] text-center'>
                <h3 className='font-sans font-[600] italic text-2xl text-[#88b44e] pb-4'>Online Store</h3>
                <h2 className={playdate.className + ' font-[900] text-[#252c30] text-5xl pb-3'}>Want to stay healthy?<br />Choose a cup of Zen</h2>
                <div className='flex items-center w-[30%] justify-between my-6 '>
                    <hr className='w-[42%] border-none h-[2px]  bg-[#93a976]' />
                    <div className="h2-line rounded-full p-[5px] bg-black"></div>
                    <hr className='w-[42%] border-none h-[2px]  bg-[#93a976]' />
                </div>
            </div>
            <div className='flex flex-col justify-between items-center w-[100%] @screen xl:flex-row @screen xl:w-[70%]'>
                {products.filter((_, index) => index < 3).map((product, index) => (
                    <div
                        key={index}
                        className='relative w-[70%] @screen xl:w-[31%] mb-6 text-center'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`absolute inset-0 bg-[#88b44e] bg-opacity-30 flex flex-col justify-center z-50 duration-300 items-center ${isVisible && hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            <button className='flex justify-center bg-[#88b44e] text-white py-3 min-w-[200px]  rounded-full text-xl duration-300 hover:text-black mb-3'>More Detail {"->"}</button>
                            <button onClick={() => handleAddToCart(product)} className='flex justify-center bg-[#252c30] text-white py-3 min-w-[200px] rounded-full text-xl'>Add to Cart <img src='./img/addToCart.png'/></button>
                        </div>
                        <div className={`flex flex-col items-center justify-between min-h-[550px] ${isVisible?"translate-y-0 opacity-100":"translate-y-[100px] opacity-0"}`} style={{transitionDuration:`${index}s`}}>
                            <img src={product.chosenImage} alt={product.name} className='h-[60%]' />
                            <div className='flex items-center justify-between w-[30%]'>
                                <img className='size-[20px]' src="./img/star.png" /><img className='size-[20px]' src="./img/star.png" /><img className='size-[20px]' src="./img/star.png" /><img className='size-[20px]' src="./img/star.png" /><img className='size-[20px]'  src="./img/star.png" />
                            </div>
                            <h3 className={playdate.className + " font-[800] text-4xl tracking-tight text-[#252c30] h-[10%]"}>{product.name}</h3>
                            <p className='h-[20%] text-center font-sans font-[400] text-xl'>{product.description}</p>
                            <p className={playdate.className + " font-bold text-[#88b44e] text-3xl h-[10%]"}>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="viewMoreTeaProducts" className='text-white bg-[#88b44e] py-5 px-12 duration-200 rounded-full hover:text-[#88b44e] hover:bg-white hover:shadow-[0_0_15px_0_#88b44e]'>View More Products</Link>
        </div>
    );
}
