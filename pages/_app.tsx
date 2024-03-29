import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GoogleFonts from "../components/GoogleFonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
