import type { Metadata } from "next";
import { Raleway, Cinzel } from "next/font/google";
import "../styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const pathPrefix = process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'development' ? '' : '/templateadv';

import Header from '@/components/Header';
import Footer from "@/components/Footer";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const cinzelSans = Cinzel({
  variable: "--font-cinzel-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template Adv",
  description: "Template moderno e responsivo para sites de advogados, desenvolvido com Next.js, TypeScript e TailwindCSS.",
  icons: {
    icon: [
      { url: `${pathPrefix}/favicon.ico` },
      { url: `${pathPrefix}/icon.png`, type: 'image/png' },
    ],
    apple: [
      { url: `${pathPrefix}/apple-icon.png` },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ralewaySans.variable} ${cinzelSans.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
