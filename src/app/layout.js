import './globals.css'
import HeaderTop from './components/HeaderTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Imayam Promoters',
  description: 'A modern civil engineer portfolio built with Next.js',
  icons: {
    icon: '/imayam-map-logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body">
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
