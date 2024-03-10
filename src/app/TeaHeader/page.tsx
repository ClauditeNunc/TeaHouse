"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import "./customHeader.css"

export default function TeaHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isActive, setIsActive] = useState('/');
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const pathname = window.location.pathname;
        const isActive = pathname.substring(pathname.lastIndexOf("/") + 1);
        setIsActive(isActive);

        const handleScroll = () => {
            if (window.scrollY > 300 && !isHeaderFixed) {
                setIsHeaderFixed(true);
            } else if (window.scrollY === 0 && isHeaderFixed) {
                setIsHeaderFixed(false);
            }
        };

        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1300);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isHeaderFixed]);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        if (!isMouseOverMenuRef.current) {
            setIsOpen(false);
        }
    };

    const handleMenuMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMenuMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (id: string) => {
        setIsOpen(false);
        setMobileOpen(false);
        setIsActive(id);
    };

    const handleWhichIsActive = (id: string) => {
        setIsActive(id);
    };

    //MOBILE STATE

    const handleMobileMouseEnter = () => {
        setMobileOpen(true);
    };

    const handleMobileMouseLeave = () => {
        if (!isMouseOverMenuRef.current) {
            setMobileOpen(false);
        }
    };

    const handleMobileMenuMouseEnter = () => {
        setMobileOpen(true);
    };

    const handleMobileMenuMouseLeave = () => {
        setMobileOpen(false);
    };

    

    const isMouseOverMenuRef = useRef(false);

    return (
        <header className={`flex justify-between z-[51] mb-[500px] bg-white w-full transition-all duration-100 ${isHeaderFixed ? 'appear-from-top fixed' : 'absolute'}`}>
            {isMobileView ? (
                <div className="w-full">
                    <div className="flex justify-between items-center px-4 py-2">
                        <img src='img/logo.png' className={`transition-all duration-100 ${isHeaderFixed ? 'fixed' : 'absolute'} w-[200px] h-[160px] top-0`} />
                        <span className='w-24 h-24' />
                        <button onClick={() => setMobileOpen(!isMobileOpen)} className="burger-button focus:outline-none">
                            <div className={`burger-icon ${isMobileOpen ? 'open' : ''}`}>
                                <div className="line w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300"></div>
                                <div className="line w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300"></div>
                                <div className="line w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300"></div>
                            </div>
                        </button>
                    </div>
                    <div className={`mobile-menu ${isMobileOpen ? 'block' : 'hidden'}`}>
                        <nav className="px-4 py-2 flex flex-col">
                            <hr className='mt-[4.5rem]' />
                            <Link id='/' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === '/' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("/")} href='/'>HOME</Link>
                            <Link id='TeaAbout' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaAbout' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaAbout")} href='/TeaAbout'>ABOUT</Link>
                            <Link id='TeaProducts' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaProducts' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaProducts")} href='/TeaProducts'>PRODUCTS</Link>
                            <Link id='TeaStore' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaStore' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaStore")} href='/TeaStore'>STORE</Link>
                            <div className='dropdown '>
                                <button
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 text-[#333]"
                                >
                                    PAGES v
                                </button>
                                <div
                                    onMouseEnter={handleMenuMouseEnter}
                                    onMouseLeave={handleMenuMouseLeave}
                                    className={`dropdown-menu flex flex-col ${isOpen ? 'open' : ''} ${isHeaderFixed ? 'fixed':'absolute'}`}
                                    >
                                    <Link id='TeaFeatures' href="/TeaFeatures" className={`dropdown-item ${isActive === 'TeaFeatures' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaFeatures")}>
                                        Features
                                    </Link>
                                    <Link id='TeaArticle' href="/TeaArticle" className={`dropdown-item ${isActive === 'TeaArticle' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaArticle")}>
                                        Blog Article
                                    </Link>
                                    <Link id='Teastimonial' href="/Teastimonial" className={`dropdown-item ${isActive === 'Teastimonial' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("Teastimonial")}>
                                        Testimonial
                                    </Link>
                                    <Link id='TeaError' href="/TeaError" className={`dropdown-item ${isActive === '/' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaError")}>
                                        404 Page
                                    </Link>
                                </div>
                            </div>
                            <Link id='TeaContact' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaContact' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaContact")} href='/TeaContact'>CONTACT</Link>                        </nav>
                    </div>
                </div>
            ) : (
                <div className="hidden md:flex justify-between items-center w-full px-4 py-2">
                    <img src='img/logo.png' className={`transition-all duration-100 ${isHeaderFixed ? 'fixed' : 'absolute'} ml-[15%] w-[200px] h-[160px] top-0`}></img>
                    <span className='w-24 h-24' />
                    <nav className="flex items-center">
                        <Link id='/' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === '/' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("/")} href='/'>HOME</Link>
                        <Link id='TeaAbout' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaAbout' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaAbout")} href='/TeaAbout'>ABOUT</Link>
                        <Link id='TeaProducts' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaProducts' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaProducts")} href='/TeaProducts'>PRODUCTS</Link>
                        <Link id='TeaStore' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaStore' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaStore")} href='/TeaStore'>STORE</Link>
                        <div className='dropdown'>
                            <button
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 text-[#333]"
                            >
                                PAGES v
                            </button>
                            <div
                                onMouseEnter={handleMenuMouseEnter}
                                onMouseLeave={handleMenuMouseLeave}
                                className={`dropdown-menu flex flex-col ${isOpen ? 'open' : ''} ${isHeaderFixed ? "fixed" : "absolute"}`}
                            >
                                <Link id='TeaFeatures' href="/TeaFeatures" className={`dropdown-item ${isActive === 'TeaFeatures' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaFeatures")}>
                                    Features
                                </Link>
                                <Link id='TeaArticle' href="/TeaArticle" className={`dropdown-item ${isActive === 'TeaArticle' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaArticle")}>
                                    Blog Article
                                </Link>
                                <Link id='Teastimonial' href="/Teastimonial" className={`dropdown-item ${isActive === 'Teastimonial' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("Teastimonial")}>
                                    Testimonial
                                </Link>
                                <Link id='TeaError' href="/TeaError" className={`dropdown-item ${isActive === '/' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleItemClick("TeaError")}>
                                    404 Page
                                </Link>
                            </div>
                        </div>
                        <Link id='TeaContact' className={`px-5 py-2 flex items-center cursor-pointer font-sans font-[500] text-lg transition duration-300 hover:text-[#88b44e] h-20 ${isActive === 'TeaContact' ? 'text-[#45a049]' : 'text-[#333333]'}`} onClick={() => handleWhichIsActive("TeaContact")} href='/TeaContact'>CONTACT</Link>
                        <Link className='h-[40px] py-[20px] px-[15px] flex items-center border-l-2' href='/viewMoreTeaProducts'><img src='./img/search.png' alt="Search" /></Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
