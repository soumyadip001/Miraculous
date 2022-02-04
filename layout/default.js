import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <div className="w-full min-height-90">
      <Head>
        <title>Miraculous - Online Music Store Html Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <main className='w-full h-full flex bg-dark'>
        <Nav />
        <div className='content__wrapper flex flex-col'>
          <Header />
          { children }
          <Footer />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
