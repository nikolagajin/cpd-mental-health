import React from 'react';
import InfoCard from '@/components/InfoCard';

// Define a type for the card data
type CardData = {
    title: string;
    imageSrc: string;
    description: string;
    content: React.ReactNode;
};


const Content: React.FC = () => {
    const cardData: CardData[] = [
        {
            title: 'Lorem Ipsum',
            imageSrc: "/static/img/emojis/v2/school.png",
            description: 'Nulla vitae elit libero, a pharetra augue.',
            content: (
                <div>
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Lorem Ipsum</strong>
                        <p className="block sm:inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                    </div>
                    <h4 className="text-lg font-semibold mt-4">Eget Dolor Morbi Non</h4>
                    <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <span className="font-bold">Curabitur Blandit</span>...
                    </p>
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
                        <p>Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, <a href="https://www.lipsum.com/" className="text-blue-500 underline">consectetur adipiscing elit</a>...</p>
                    </div>
                </div>
            )
        },
        {
            title: 'Lorem Ipsum dolor sit amet?',
            imageSrc: "/static/img/emojis/v2/fist.png",
            description: 'Nulla vitae elit libero, a pharetra augue.',
            content: (
                <div>
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Consectetur Adipiscing</strong>
                        <p className="block sm:inline">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                    <h4 className="text-lg font-semibold mt-4">Pharetra Magna Ultricies</h4>
                    <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <span className="font-bold">Vestibulum Ligula</span>...
                    </p>
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. <a href="https://www.lipsum.com/" className="text-blue-500 underline">adipiscing elit commodo</a>...</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Amet Consectetur Adipiscing',
            imageSrc: "/static/img/emojis/v2/how.png",
            description: 'Nulla vitae elit libero, a pharetra augue.',
            content: (
                <div>
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Consectetur Adipiscing</strong>
                        <p className="block sm:inline">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
                    </div>
                    <h4 className="text-lg font-semibold mt-4">Pharetra Magna Ultricies</h4>
                    <p className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <span className="font-bold">Vestibulum Ligula</span>...
                    </p>
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative">
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. <a href="https://www.lipsum.com/" className="text-blue-500 underline">adipiscing elit commodo</a>...</p>
                    </div>
                </div>
            ),
        },
        // Add more card data here
    ];



    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-wrap -mx-4">
                {cardData.map((card, index) => (
                    <InfoCard
                        key={index}
                        size="1/3" // You can change this as needed based on screen size requirements
                        title={card.title}
                        imageSrc={card.imageSrc}
                        description={card.description}
                        content={card.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
