import React from 'react';
import { Metadata } from 'next';
import './globals.css'; // Your global styles (Tailwind or other)
import Header from '@/components/Header';
import HomeHeading from '@/components/HomeHeading';
import InfoCard from '@/components/InfoCard';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'CPD::Tvoja prava',
  description: 'A basic Next.js app', // Customize this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CHP2KBZMPX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-CHP2KBZMPX');
                    `,
        }} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        <Header />
        <main className="flex-grow bg-cpd-gray p-4">
          <HomeHeading />

          <div className="flex flex-wrap -mx-4 mt-12 pt-12">
            <Content />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
