

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTopArrow from "@/components/ScrollTopArrow";
import InstagramPost from "@/components/InstagramPost";
import HeaderText from "@/components/HeaderText";
import Loading from "@/components/Loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({ subsets: ["latin"] });

const posts = [
  {
    image: { src: "/IG/mainpage/IG8.jpg", alt: "1" },
    caption: "Czy istnieje lepszy niedzielny obiad? 🤤🍽️",
    href: "https://www.instagram.com/p/C5vMZ_ZsgO8/",
  },
  {
    image: { src: "/IG/mainpage/IG6.jpg", alt: "2" },
    caption: "Takie imprezy moglibyśmy organizować co tydzień 🥰🥳",
    href: "https://www.instagram.com/p/CuVCkzAMjz6/",
  },
  {
    image: { src: "/IG/mainpage/IG3.jpg", alt: "3" },
    caption:
      "Piątkowy wieczór 🎉😋 bez naszego 𝐧𝐨𝐰𝐞𝐠𝐨 𝐦𝐞𝐧𝐮 to jak taniec bez muzyki 🤪 ",
    href: "https://www.instagram.com/p/C5YEj0MMm5-/",
  },
  {
    image: { src: "/IG/mainpage/IG4.jpg", alt: "4" },
    caption:
      "Nasze 𝐀𝐬𝐬𝐢𝐞𝐭𝐭𝐞 z jabłka to połączenie tradycji z nowoczesnością, gdzie każdy kęs to uczta dla zmysłów 🍏 ",
    href: "https://www.instagram.com/p/C3vHlOEMSPb/",
  },
];

export const metadata: Metadata = {
  title: "Willa Poprad",
  description: "Created by Eryk & Wiktor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading src="/loading.gif" />
        <TopBar />
        <Header />
        <ScrollTopArrow />
        {children}
        <div className="border-t-2 border-customYellow m-5"></div>
        <HeaderText color="customYellow" text="Sprawdź naszego Instagrama" />

        <InstagramPost posts={posts} />
        <Footer />
      </body>
    </html>
  );
}
