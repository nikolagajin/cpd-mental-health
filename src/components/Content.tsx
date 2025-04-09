import React from 'react';
import InfoCard from '@/components/InfoCard';
import { ElementType } from '@/types/ElementTypes';


// Define a type for the card data
type CardData = {
    size?: '1/3' | '1/2' | '1/1';
    title: string;
    imageSrc: string;
    description: string;
    emoji?: string;
    elements?: Array<{
        type: ElementType
        content: string | undefined;
        rawContent?: React.ReactNode;
    }>;
};


const Content: React.FC = () => {
    const cardData: CardData[] = [
        {
            "title": "Kako da se dobro osećam?",
            "imageSrc": "/static/img/emojis/v2/school.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "smile",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "AlertParagraphDark",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "QuoteParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "title": "Jedni uz druge",
            "imageSrc": "/static/img/emojis/v2/fist.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "users",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "title": "Škola kao tvoja safe zona",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "shield-user",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "size": '1/2',
            "title": "Kad ti je svega previše...",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "layers",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "size": '1/2',
            "title": "Ima li kraja brigama?",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "circle-slash",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "size": '1/3',
            "title": "Bes, strah i ja",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "angry",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "title": "Tuga, stid i ja",
            "imageSrc": "/static/img/emojis/v2/school.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "frown",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraphDark",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "QuoteParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "title": "Joy Hack – mali rituali koje poprave dan",
            "imageSrc": "/static/img/emojis/v2/fist.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "emoji": "party-popper",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "size": '1/2',
            "title": "Lorem Ipsum",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Heading",
                    "content": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        },
        {
            "size": '1/2',
            "title": "Lorem Ipsum",
            "imageSrc": "/static/img/emojis/v2/how.png",
            "description": "Nulla vitae elit libero, a pharetra augue.",
            "elements": [
                {
                    "type": "Paragraph",
                    "content": "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "AlertParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "Paragraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. *Sed non risus*. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                },
                {
                    "type": "FramedParagraph",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                }
            ]
        }

    ];



    return (
        <div className="container-full mx-auto pb-8 px-4 w-full">
            <div className="flex flex-wrap mx-4">
                {cardData.map((card, index) => (
                    <InfoCard
                        key={index}
                        size={card?.size || '1/3'} // Default value of "1/3"
                        title={card.title}
                        imageSrc={card.imageSrc}
                        description={card.description}
                        emoji={card.emoji || "smile"}
                        elements={card.elements}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
