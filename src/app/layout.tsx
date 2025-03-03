import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../styles/globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
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
      <body className={`${ralewaySans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
