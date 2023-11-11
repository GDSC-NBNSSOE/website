import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootNavbar from '@/components/Navbar'
import RootFooter from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="p-0 m-0 bg-white w-screen h-screen">
      <RootNavbar/>
      <Component {...pageProps} />
      <RootFooter/>
    </main>
  )
}
