import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import DesktopNavbar from '../src/components/Navbar'
import Hero from '../src/components/HeroSection'
import About from '../src/components/About'
import HowItWorks from '../src/components/HowItWorks'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Valluverse</title>
        <meta name="description" content="Vazhga Tamil Velga Tamil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DesktopNavbar/>
      <main className='max-w-[1050px] mx-auto text-[#FFFFFF]'>
        <Hero/>
        <About/>
        <HowItWorks/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
