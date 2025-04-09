"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative w-full text-white py-8 px-4 bg-cpd-light-gray mt-12">
            <div className="absolute top-[-70px] left-0 w-full overflow-hidden leading-none">
                <svg 
                    className="relative block w-full h-[70px]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                        className="fill-cpd-light-gray"
                    ></path>
                </svg>
            </div>
            <div className="container mx-auto max-w-6xl text-gray-700">
                <div className="grid grid-cols-1 gap-8">
                    {/* Top section with questions and social media */}
                    <div className="text-center">
                        <p className="text-xl md:text-2xl mb-4">
                            <span className="block">Imaš pitanja</span>
                            <span className="block">o drugim temama?</span>
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Možeš da nam se obratiš putem:</h2>

                        <div className="flex justify-center gap-6 mb-10">
                            <Link href="https://www.facebook.com/" className="block">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-3 hover:scale-110 transition-transform duration-200">
                                    <Image
                                        src="/static/img/emojis/v2/facebook_logo.png"
                                        alt="Facebook"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Link>

                            <Link href="https://www.instagram.com/" className="block">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-3 hover:scale-110 transition-transform duration-200">
                                    <Image
                                        src="/static/img/emojis/v2/instagram_logo.png"
                                        alt="Instagram"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Link>

                            <Link href="mailto:example@example.com" className="block">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-3 hover:scale-110 transition-transform duration-200">
                                    <Image
                                        src="/static/img/emojis/v2/mail.png"
                                        alt="Email"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Disclaimer section */}
                    <div className="text-center text-sm md:text-base  text-gray-700">
                        <p className="mb-8 max-w-4xl mx-auto leading-relaxed">
                            Ova platforma je izrađena u okviru projekta „Promovisanje dobrobiti dece u zaštiti od nasilja“ koji finansira Evropska unija u okviru Evropskog instrumenta za demokratiju i ljudska prava (EIDHR), a sufinansira se iz budžeta Republike Srbije, uz podršku Ministarstva za ljudska i manjinska prava i društveni dijalog. Sadržaj i stavovi izneti na ovoj platformi ne odražavaju nužno stavove Evropske unije i Ministarstva za ljudska i manjinska prava i društveni dijalog.
                        </p>
                    </div>

                    
                    <div className="py-5 flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <Image
                            src="/static/img/eu_logo_l.png"
                            alt="EU za Tebe"
                            width={0}
                            height={80}
                            className="h-auto h-12 w-auto"
                        />
                        <Image
                            src="/static/img/mljp_logo.jpg"
                            alt="Atina Logo"
                            width={0}
                            height={80}
                            className="h-auto h-20 w-auto"
                        />
                        <Image
                            src="/static/img/cpd_logo_2.png"
                            alt="Centar za prava deteta Logo"
                            width={0}
                            height={80}
                            className="h-auto h-20 w-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
