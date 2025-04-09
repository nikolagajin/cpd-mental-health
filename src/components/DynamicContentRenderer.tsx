import React from 'react';
import AlertParagraph from '@/components/elements/AlertParagraph'
import Paragraph from '@/components/elements/Paragraph'
import QuoteParagraph from './elements/QuoteParagraph';
import FramedParagraph from './elements/FramedParagraph';
import AlertParagraphDark from './elements/AlertParagraphDark';
import { ElementType } from '@/types/ElementTypes';
import Heading from './elements/Heading';


interface ContentItem {
    type: ElementType;
    content?: string;
    rawContent?: React.ReactNode;
}

interface DynamicContentProps {
    contentData?: ContentItem[];
}

const DynamicContentRenderer: React.FC<DynamicContentProps> = ({ contentData }) => {
    const renderComponent = (item: ContentItem, index: number) => {
        switch (item.type) {
            case "Paragraph":
                return <Paragraph key={index} content={item.content} rawContent={item.rawContent} />;
            case "Heading":
                return <Heading key={index} content={item.content} />;
            case "AlertParagraph":
                return <AlertParagraph key={index} content={item.content} rawContent={item.rawContent} />;
                case "AlertParagraphDark":
                    return <AlertParagraphDark key={index} content={item.content} rawContent={item.rawContent} />;
            case "QuoteParagraph":
                return <QuoteParagraph key={index} content={item.content} rawContent={item.rawContent} />;
            case "FramedParagraph":
                return <FramedParagraph key={index} content={item.content} rawContent={item.rawContent} />;
            default:
                return null; // Or handle unknown types
        }
    };

    return <div>{contentData && contentData.map(renderComponent)}</div>;
};

export default DynamicContentRenderer;
