import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ParagraphProps {
    content?: string;
    rawContent?: React.ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ content, rawContent }) => {
    return (
        <div className="text-cpd-gray px-4 py-3 text-lg ">
            {(content &&
                <div className="block sm:inline">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
            )}
            {(rawContent && 
                rawContent
            )}
        </div>
    );
};

export default Paragraph;
