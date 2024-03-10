'use client'
import React, { useState, useEffect } from 'react';
import { Playfair } from "next/font/google";
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

const ViewMoreTeaProducts: React.FC = () => {
    const { addToCart, cartItems, increaseQuantity } = useCart();
    const [products, setProducts] = useState<Product[]>([]);
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [priceMin, setPriceMin] = useState<string>('');
    const [priceMax, setPriceMax] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/pseudodb.json');
                const data: Product[] = await response.json();
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

    const filteredProducts = products.filter(product => {
        return (
            (!typeFilter || product.type === typeFilter) &&
            (!priceMin || product.price >= parseFloat(priceMin)) &&
            (!priceMax || product.price <= parseFloat(priceMax)) &&
            (!searchTerm ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className='flex flex-col items-center pt-[120px] pb-[50px]'>
            <h2 className={playdate.className + ' font-[900] text-[#252c30] text-5xl pb-3'}>Tea Products</h2>
            <div className='flex flex-col items-center w-[70%] text-center'>
                <h3 className='font-sans font-[600] italic text-2xl text-[#88b44e] pb-4'>Filter Options</h3>
                <div className='flex items-center flex-col justify-between @screen lg:flex-row @screen lg:items-center w-[100%] mb-4'>
                    <select
                        className='w-[50%] @screen lg:w-[20%] py-2 my-2 px-3 border border-gray-300 rounded-md'
                        onChange={e => setTypeFilter(e.target.value)}
                        value={typeFilter}
                    >
                        <option value=''>All Types</option>
                        <option value='Organic Tea'>Organic Tea</option>
                        <option value='Green Tea'>Green Tea</option>
                        <option value='Spiced Tea'>Spiced Tea</option>
                        <option value='Black Tea'>Black Tea</option>
                    </select>
                    <input
                        type='number'
                        placeholder='Min Price'
                        className='w-[50%] @screen lg:w-[20%] py-2 my-2 px-3 border border-gray-300 rounded-md'
                        value={priceMin}
                        onChange={e => setPriceMin(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder='Max Price'
                        className='w-[50%] @screen lg:w-[20%] py-2 my-2 px-3 border border-gray-300 rounded-md'
                        value={priceMax}
                        onChange={e => setPriceMax(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-[50%] @screen lg:w-[20%] py-2 my-2 px-3 border border-gray-300 rounded-md'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-10 w-full'>
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className='relative w-[40%] @screen xl:w-[25%] mb-6 text-center'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`absolute inset-0 bg-[#88b44e] bg-opacity-30 flex flex-col justify-center z-50 duration-300 items-center ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            <button className='flex justify-center bg-[#88b44e] text-white py-3 min-w-[200px]  rounded-full text-xl duration-300 hover:text-black mb-3'>More Detail {"->"}</button>
                            <button onClick={() => handleAddToCart(product)} className='flex justify-center bg-[#252c30] text-white py-3 min-w-[200px] rounded-full text-xl'>Add to Cart <img src='./img/addToCart.png' /></button>
                        </div>
                        <div className={`flex flex-col items-center justify-between min-h-[550px] transition-all duration-300`}>
                            <img src={product.chosenImage} alt={product.name} className='h-[60%]' />
                            <div className='flex items-center justify-between w-[30%]'>
                                <img className='size-[20px]' src="./img/star.png" alt="star" /><img className='size-[20px]' src="./img/star.png" alt="star" /><img className='size-[20px]' src="./img/star.png" alt="star" /><img className='size-[20px]' src="./img/star.png" alt="star" /><img className='size-[20px]' src="./img/star.png" alt="star" />
                            </div>
                            <h3 className={playdate.className + " font-[800] text-4xl tracking-tight text-[#252c30] h-[10%]"}>{product.name}</h3>
                            <p className='h-[20%] text-center font-sans font-[400] text-xl'>{product.description}</p>
                            <p className={playdate.className + " font-bold text-[#88b44e] text-3xl h-[10%]"}>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewMoreTeaProducts;
