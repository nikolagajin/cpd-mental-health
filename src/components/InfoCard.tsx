"use client"

import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import DynamicContentRenderer from './DynamicContentRenderer';
import { Button } from './ui/button';
import { ElementType } from '@/types/ElementTypes';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Angry, CircleSlash2, Frown, Layers, PartyPopper, ShieldUser, Smile, Users } from 'lucide-react';


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
                    <div className="bg-gradient-to-br from-cpd-blue to-indigo-700/40 rounded-lg p-6 flex flex-col items-center text-center text-white relative cursor-pointer h-full justify-between  shadow-xl shadow-gray-300">
                        <div className="absolute left-4 top-4 rotate-30-deg">
                            {emoji == "smile" &&
                                <Smile size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "users" &&
                                <Users size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "shield-user" &&
                                <ShieldUser size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "layers" &&
                                <Layers size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "circle-slash" &&
                                <CircleSlash2 size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "angry" &&
                                <Angry size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "frown" &&
                                <Frown size={106} className='opacity-[0.2]' />
                            }
                            {emoji == "party-popper" &&
                                <PartyPopper size={106} className='opacity-[0.2]' />
                            }
                        </div>
                        <div className='ml-16 text-right'>
                            <h3 className="font-bold text-2xl uppercase mt-0 text-cpd-light-gray w-full text-right">{title}</h3>
                        </div>
                        <Button className="bg-white text-sky-700 font-bold rounded-lg py-2 px-4 hover:bg-opacity-80 border-2 border-light-gray w-full">
                            Saznaj više
                        </Button>
                    </div>
                </DialogTrigger>
                {isOpen && (
                    <DialogContent className="sm:max-w-3xl bg-cpd-light-gray overflow-y-scroll h-full">
                        <div className="w-full items-center mb-4">
                            <DialogHeader >
                                <div className="justify-center w-20 mx-auto">
                                    {/* <img src={imageSrc} alt="Emoji" className="w-20" /> */}
                                    {emoji == "smile" &&
                                        <Smile size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "users" &&
                                        <Users size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "shield-user" &&
                                        <ShieldUser size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "layers" &&
                                        <Layers size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "circle-slash" &&
                                        <CircleSlash2 size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "angry" &&
                                        <Angry size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "frown" &&
                                        <Frown size={106} className='opacity-[0.2]' />
                                    }
                                    {emoji == "party-popper" &&
                                        <PartyPopper size={106} className='opacity-[0.2]' />
                                    }
                                </div>
                                <DialogTitle className='text-center mt-4 uppercase text-2xl font-bold'>{title}</DialogTitle>
                                <DialogDescription className='text-center font-semibold text-md'>{description}</DialogDescription>
                            </DialogHeader>
                        </div>

                        <DynamicContentRenderer contentData={elements || []} />

                        <DialogClose >
                            <Button className='w-full text-white bg-cpd-blue border border-cpd-light-gray'>Zatvori</Button>
                        </DialogClose>

                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
};

export default InfoCard;
