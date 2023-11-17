'use client'
import './globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import { Provider } from 'react-redux'
import store from './redux/store'


// export const metadata = {
//   title: 'Canteen Management App',
//   description: 'Created by Lokendra',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}


