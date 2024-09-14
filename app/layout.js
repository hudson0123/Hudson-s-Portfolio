import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import {Fugaz_One} from "next/font/google"

// Import Componenets
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata = {
  title: "Portfolio Website",
  description: "Showcase Projects, AboutMe, Contat information",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
