import { Geist, Geist_Mono, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dm_serif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--dm-font",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

export const metadata = {
  title: "Beyond Faith",
  description: "Your Journey to Inner Strength",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dm_serif.variable} ${inter.variable} font-inter antialiased`}
      >
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
