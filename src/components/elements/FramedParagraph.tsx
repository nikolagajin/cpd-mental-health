import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface FramedParagraphProps {
    content?: string;
    rawContent?: React.ReactNode
}

const FramedParagraph: React.FC<FramedParagraphProps> = ({ content, rawContent }) => {
    return (
        <div className="text-cpd-gray px-4 py-3 text-lg border-2 border-cpd-orange rounded my-4" >
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

export default FramedParagraph;
