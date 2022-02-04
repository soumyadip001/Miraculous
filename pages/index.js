import Layout from '../layout/default'
import LargeBanner from '../components/banner/LargeBanner'
import GridView from '../components/sections/GridView'
import WeeklyTop from '../components/sections/WeeklyTop'
import SmallBanner from '../components/banner/SmallBanner'
import TopGenre from '../components/sections/TopGenre'

const slidesRecentlyPlayed = [
  {
    name: 'Until I Met You',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music1.jpg',
  },
  {
    name: 'Gimme Some Courage',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music2.jpg',
  },
  {
    name: 'Dark Alley Acoustic',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music3.jpg',
  },
  {
    name: 'Walking Promises',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music4.jpg',
  },
];

const slidesFeaturedArtists = [
  {
    name: 'Until I Met You',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music7.jpg',
  },
  {
    name: 'Gimme Some Courage',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music8.jpg',
  },
  {
    name: 'Dark Alley Acoustic',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music9.jpg',
  },
  {
    name: 'Walking Promises',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/slides/r_music4.jpg',
  },
];

const slidesFeaturedAlbums = [
  {
    name: 'Bloodlust',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/albums/album1.jpg',
  },
  {
    name: 'Gimme Some Courage',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/albums/album2.jpg',
  },
  {
    name: 'Dark Alley Acoustic',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/albums/album3.jpg',
  },
  {
    name: 'Walking Promises',
    singer: 'Ava Cornish & Brian Hill',
    src: 'images/albums/album4.jpg',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className='section__wrapper bg-dark mt-24 w-full flex flex-col min-width-section px-20'>
        <LargeBanner />
        <div className='section__recent-played mb-12'>
          <GridView showName={true} slides={[...slidesRecentlyPlayed]} title='Recently Played' />
        </div>
        <div className='section__weekly-top mb-12'>
          <WeeklyTop />
        </div>
        <div className='section__featured-artists mb-12'>
          <GridView showName={false} slides={[...slidesFeaturedArtists]} title='Featured Artists' />
        </div>
        <div className='banner--small mb-12 flex justify-center items-center'>
          <SmallBanner />
        </div>
        <div className='section__new-releases mb-12'>New Releases</div>
        <div className='section__featured-albums mb-12'>
          <GridView showName={true} slides={[...slidesFeaturedAlbums]} title='Featured Albums' />
        </div>
        <div className='section__top-genres mb-12'>
          <TopGenre title={'Top Genres'}></TopGenre>
        </div>
        <div className='banner--small mb-12 flex justify-center items-center'>
          <SmallBanner name='adv1' />
        </div>
        <div className='section__live-audio mb-12'>Live Radio</div>
      </div>
    </Layout>
  )
}
