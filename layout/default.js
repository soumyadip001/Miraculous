import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Head>
        <title>Miraculous - Online Music Store Html Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <main>
        <Header />
        { children }
      </main>
      <Footer />
    </div>
  )
}
