import React from 'react';


interface HeadingProps {
    content?: string;
}

const Heading: React.FC<HeadingProps> = ({ content }) => {
    return (
        <div className="text-cpd-gray px-4 py-3 text-center ">
            {(content &&
                <h2 className="block sm:inline text-xl font-semibold uppercase">
                    {content}
                </h2>
            )}
        </div>
    );
};

export default Heading;
