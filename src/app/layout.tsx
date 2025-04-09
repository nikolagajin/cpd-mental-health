import React from 'react';
import { Metadata } from 'next';
import './globals.css'; // Your global styles (Tailwind or other)
import Header from '@/components/Header';
import HomeHeading from '@/components/HomeHeading';

import Content from '@/components/Content';
import Footer from '@/components/Footer';

import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin-ext'] })


export const metadata: Metadata = {
  title: 'CPD:: BUDI OK',
  description: 'Psihološki imunitet - tvoj super štit!',
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
        <main className={`flex-grow bg-white mt-[4rem] ${nunito.className}`}>
          <HomeHeading />

          <div className="flex flex-wrap -mx-4 mt-12 pt-12">
            <Content />
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
