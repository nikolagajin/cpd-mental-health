import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="text-5xl font-bold">
                    Welcome to My Static Next.js App!
                </h1>
                <p className="mt-4 text-xl">
                    This is a basic static page.
                </p>
            </div>
        </main>
    );
};

export default HomePage;
