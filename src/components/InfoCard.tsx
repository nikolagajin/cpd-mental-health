import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Define the type for the InfoCard props
type InfoCardProps = {
    size?: '1/3' | '1/2' | '1/1';
    title: string;
    imageSrc: string;
    description?: string;
    content: React.ReactNode;
};

const InfoCard: React.FC<InfoCardProps> = ({ size = '1/3', title, imageSrc, description, content }) => {
    const sizeClasses = {
        '1/3': 'w-full md:w-1/3',
        '1/2': 'w-full md:w-1/2',
        '1/1': 'w-full',
    };

    return (
        <div className={`p-4 ${sizeClasses[size]} transition-transform transform hover:scale-105`}>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="bg-cpd-orange rounded-lg p-6 flex flex-col items-center text-center text-white relative cursor-pointer h-full justify-between">
                        <div>
                            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 border-4 border-white overflow-hidden">
                                <img src={imageSrc} alt="Emoji" className="w-16" />
                            </div>
                            <h3 className="font-bold text-2xl uppercase my-8 text-cpd-light-gray">{title}</h3>
                        </div>
                        <button className="bg-white text-cpd-blue font-semibold rounded-lg py-2 px-4 hover:bg-opacity-80 border-2 border-cpd-blue w-1/2">
                            Saznaj više
                        </button>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] bg-cpd-light-gray">
                    <div className="flex flex-col">
                        <div className="w-full items-center mb-4">
                            <div className="rounded-full bg-white p-2 mx-auto justify-center w-16 overflow-hidden">
                                <img src={imageSrc} alt="Emoji" className="w-12" />
                            </div>
                            <DialogHeader>
                                <DialogTitle>{title}</DialogTitle>
                            </DialogHeader>
                        </div>
                        <DialogDescription>
                            {content}
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InfoCard;
