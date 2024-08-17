import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/Navbar";
import AnimatedCursor from "react-animated-cursor";
// import Footer from "@/components/section/Footer";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aviorsol",
  description: "Aviorsol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${inter.variable} dark`}>
        <div className="md:block hidden">
          <AnimatedCursor
            color="255, 255 ,255"
            innerSize={12}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={1}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
          />
        </div>
        <header>
          <Navbar />
        </header>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
