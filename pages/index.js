import Layout from '../layout/default'
import LargeBanner from '../components/banner/LargeBanner'

export default function Home() {
  return (
    <Layout>
      <div className='section__wrapper bg-dark mt-24 w-full flex flex-col min-width-section px-20'>
        <LargeBanner />
        <div className='section__recent-played'>Recently Played Section</div>
        <div className='section__weekly-top'>Weekly Top 15</div>
        <div className='section__featured-artists'>Featured Artists</div>
        <div className='banner--small'>Small Add/Banner</div>
        <div className='section__new-releases'>New Releases</div>
        <div className='section__featured-albums'>Featured Albums</div>
        <div className='section__top-genres'>Top Genres</div>
        <div className='banner--small'>Small Add/Banner</div>
        <div className='section__live-audio'>Live Radio</div>
      </div>
    </Layout>
  )
}
