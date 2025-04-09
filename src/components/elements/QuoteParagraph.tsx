import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface QuoteParagraphProps {
    content?: string;
    rawContent?: React.ReactNode
}

const QuoteParagraph: React.FC<QuoteParagraphProps> = ({ content, rawContent }) => {
    return (
        <div className="text-cpd-gray px-4 py-3 text-lg border-l-6 border-cpd-orange italic rounded" >
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

export default QuoteParagraph;
