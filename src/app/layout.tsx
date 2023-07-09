import './globals.css'

import NavBar from '@/components/home/NavBar';
import Footer from '@/components/home/Footer';


export const metadata = {
  title: 'Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden font-sans">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
