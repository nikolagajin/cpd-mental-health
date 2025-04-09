"use client";

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin-ext'] })


const HomeHeading = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`relative overflow-hidden bg-cpd-hero-bg  ${nunito.className}`}>
            {/* Main Hero Content with Parallax Effect */}
            <div className="container mx-auto px-4 my-5 text-cpd-hero-text-color pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Text content - transforms based on scroll */}
                    <div className="md:col-span-2 text-left" style={{
                        transform: `translateY(${scrollY * 0.2}px)`,
                        opacity: 1 - scrollY / 400,
                    }}>
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
                            PSIHOLOŠKI IMUNITET - TVOJ SUPER ŠTIT!
                        </h1>
                        <h2 className="py-2 text-xl md:text-2xl">
                            Lorem ipsum dolor sit amet
                        </h2>
                        <p className="text-base md:text-lg mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Image content - transforms at a different rate */}
                    <div className="flex justify-center items-center" style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                        opacity: 1 - scrollY / 500,
                    }}>
                        <Image
                            src="/static/img/mh/bgless.jpeg"
                            alt="Psihološki imunitet"
                            width={500}
                            height={400}
                            className="object-contain max-h-[400px] w-auto"
                            id="hero-image"
                        />
                    </div>
                </div>
            </div>
            
            {/* Curved Bottom Line - SVG Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg 
                    className="relative block w-full h-[70px]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        className="fill-cpd-layout-bg"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HomeHeading;
