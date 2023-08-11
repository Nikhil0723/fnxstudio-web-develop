'use client'

import Image from 'next/image'
import { Link } from "react-scroll";
import React, { useEffect, useState } from 'react'

function Header() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 70) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-10 ease-in-out transition-all duration-[0.5s] ${show && 'bg-white shadow-lg'}`}>
            <div className='flex items-center justify-between max-w-7xl mx-auto py-7 px-5'>
                <div className='relative w-40 h-10'>
                    <Image className='absolute max-w-full h-auto object-contain' src='/fornax.svg' alt='' width={144} height={40} />
                    <Image className='absolute right-0' src='/kite.svg' alt='' width={14} height={14} />
                </div>

                <div className={`text-white font-medium flex items-center space-x-16 ${show && '!text-black'}`}>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass='!opacity-100'
                        className='cursor-pointer opacity-70'
                    >
                        Home
                    </Link>
                    <Link
                        to="info"
                        spy={true}
                        smooth={true}
                        offset={-105}
                        duration={500}
                        activeClass='!opacity-100'
                        className='cursor-pointer opacity-70'
                    >
                        What we do
                    </Link>
                    <Link
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-105}
                        duration={500}
                        activeClass='!opacity-100'
                        className='cursor-pointer opacity-70'
                    >
                        Our Work
                    </Link>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-105}
                        duration={500}
                        activeClass='!opacity-100'
                        className='cursor-pointer opacity-70'
                    >
                        Our Services
                    </Link>
                    <Link
                        to="freebees"
                        spy={true}
                        smooth={true}
                        offset={-105}
                        duration={500}
                        activeClass='!opacity-100'
                        className='cursor-pointer opacity-70'
                    >
                        Freebees
                    </Link>
                </div>

                <button className='bg-fnx-primary text-white py-3 px-5 rounded-lg font-medium'>
                    Contact Us
                </button>
            </div>
        </header>
    )
}

export default Header