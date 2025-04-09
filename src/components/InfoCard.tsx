"use client"

import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import DynamicContentRenderer from './DynamicContentRenderer';
import { Button } from './ui/button';
import { ElementType } from '@/types/ElementTypes';
import { DialogDescription } from '@radix-ui/react-dialog';
import IconSelector from './IconSelector';

import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin-ext'] })


// Define the type for the InfoCard props
type InfoCardProps = {
    size: '1/3' | '1/2' | '1/1';
    title: string;
    imageSrc?: string;
    description?: string;
    emoji?: string;
    elements?: Array<{
        type: ElementType;
        content?: string | undefined;
        rawContent?: React.ReactNode | undefined;
    }>; // Changed from tuple to array
};

const InfoCard: React.FC<InfoCardProps> = ({ size = '1/3', title, description, emoji, elements }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sizeClasses = {
        '1/3': 'w-full md:w-1/3',
        '1/2': 'w-full md:w-1/2',
        '1/1': 'w-full',
    };

    return (
        <div className={`p-4 ${sizeClasses[size]} transition-transform transform hover:scale-102 mb-[20px] h-[260px]`}>
            <Dialog open={isOpen} onOpenChange={setIsOpen} >

                <DialogTrigger asChild className='z-51'>
                    <div className="bg-gradient-to-br from-cpd-infocard-main-bg to-indigo-700/40 rounded-lg p-6 flex flex-col items-center text-center text-cpd-infocard-heading-color relative cursor-pointer h-full justify-between  shadow-xl shadow-gray-300">
                        <div className="absolute left-4 top-4 rotate-30-deg">

                            <IconSelector iconName={emoji || ''} />

                        </div>
                        <div className='pl-16 text-right w-full'>
                            <h3 className="font-bold text-2xl uppercase mt-0 text-cpd-infocard-heading-color w-full text-right">{title}</h3>
                        </div>
                        <Button className="
                                    bg-cpd-infocard-button-bg text-cpd-infocard-button-text-color font-bold rounded-lg py-2 px-4 border-2 border-cpd-infocard-button-border-color w-full uppercase
                                    hover:scale-102">
                            Saznaj više
                        </Button>
                    </div>
                </DialogTrigger>
                {isOpen && (
                    <DialogPortal>
                        <DialogOverlay className='bg-white/80' />
                        <DialogContent className={`sm:max-w-3xl bg-white overflow-y-scroll h-full ${nunito.className}`}>
                            <DialogHeader className='w-full items-center mb-4 relative bg-gradient-to-br from-cpd-infocard-main-bg to-indigo-700/40 pt-4 pb-10 rounded-lg text-cpd-infocard-heading-color'>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center pt-4 pb-8">
                                    <div className="justify-right w-20 mx-auto">
                                        <IconSelector iconName={emoji || ''} size={80} className='opacity-20' />
                                    </div>
                                    <div className="col-span-1 md:col-span-3 text-center md:text-left ">
                                        <DialogTitle className='text-center md:text-left md:mt-4 uppercase text-2xl font-bold'>{title}</DialogTitle>
                                        <DialogDescription className='font-semibold text-md'>{description}</DialogDescription>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                                    <svg
                                        className="relative block w-full h-[30px]"
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
                            </DialogHeader>

                            <DynamicContentRenderer contentData={elements || []} />

                            <DialogClose >
                                <Button className='w-full text-white bg-cpd-blue border border-cpd-light-gray'>Zatvori</Button>
                            </DialogClose>
                        </DialogContent>
                    </DialogPortal>
                )}

            </Dialog>
        </div>
    );
};

export default InfoCard;
