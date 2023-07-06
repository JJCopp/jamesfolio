import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})  

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${roboto_mono.variable} font-sans`}>
  <Component {...pageProps} />
    </main>
  
  )
}
