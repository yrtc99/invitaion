import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Great_Vibes } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Epilogue } from 'next/font/google'
import { Noto_Serif_TC } from 'next/font/google'
import { Bodoni_Moda } from "next/font/google";
import AudioPlayer from '@/components/AudioPlayer';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoSerifTc = Noto_Serif_TC({
  subsets: ['latin'],
  variable: '--font-noto-serif-tc',
});

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni-moda',
});

export const metadata: Metadata = {
  title: 'Eason & Cathy 的婚禮邀請',
  description: 'Eason & Cathy 的婚禮邀請網站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${montserrat.variable} ${epilogue.variable} ${notoSerifTc.variable} ${bodoniModa.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
