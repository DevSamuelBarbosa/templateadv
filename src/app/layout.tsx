import type { Metadata } from "next";
import { Raleway, Cinzel } from "next/font/google";
import "../styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from '@/components/Header';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
