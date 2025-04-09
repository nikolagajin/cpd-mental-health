import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


interface AlertParagraphProps {
    content?: string;
    rawContent?: React.ReactNode
}

const AlertParagraph: React.FC<AlertParagraphProps> = ({ content, rawContent }) => {
    return (
        <div className="bg-cpd-orange text-cpd-light-gray my-4 px-4 py-3 rounded text-lg">
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

export default AlertParagraph;
