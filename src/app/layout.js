import './globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'


export const metadata = {
  title: 'Canteen Management App',
  description: 'Created by Lokendra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
