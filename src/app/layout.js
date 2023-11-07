import './globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400", 
  subsets: ["latin", "cyrillic"], 
  display: "swap", 
  italicVariant: "oblique", 
  stretch: "condensed", 
  className: "custom-roboto-font", 
  fallbacks: ["Arial", "sans-serif"],
});

export const metadata = {
  title: 'Canteen Management App',
  description: 'Created by Lokendra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
