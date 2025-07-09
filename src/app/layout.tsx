import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Top 20 Media Explorer',
  description: 'Tech submission for Zitadel, by David Evans',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <div className="animated-bg"></div>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen m-auto mt-8 max-w-[1280px] px-4">
          <header className="text-center mb-8">
            <h1 className="m-auto text-5xl md:text-8xl whitespace-nowrap mb-4 w-fit bg-clip-text text-transparent bg-gradient-to-tr from-teal-200 to-teal-700">
              The Charts.
            </h1>
            <p className="text-2xl">Showing you the best in music, audiobooks, and podcasts.</p>
          </header>
          {children}
          <footer>
            <p className="text-center p-4">Top 20 Media Explorer - D Evans, 2025</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
