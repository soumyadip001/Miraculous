import GridViewHeader from "./GridViewHeader"
import MusicCard from "../music/MusicCard"

import styles from '../../styles/mcard.module.scss'

const musicArr = [
  {
    image: '/images/weekly/song1.jpg',
    name: 'Until I Met You',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song2.jpg',
    name: 'Walking Promises',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song3.jpg',
    name: 'Gimme Some Courage',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song4.jpg',
    name: 'Desired Games',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song5.jpg',
    name: 'Dark Alley Acoustic',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song6.jpg',
    name: 'Walking Promises',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song7.jpg',
    name: 'Endless Things',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song8.jpg',
    name: 'Dream Your Moments',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song9.jpg',
    name: 'Until I Met You',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song2.jpg',
    name: 'Walking Promises',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song10.jpg',
    name: 'Gimme Some Courage',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song4.jpg',
    name: 'Desired Games',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true
  },
  {
    image: '/images/weekly/song11.jpg',
    name: 'Dark Alley Acoustic',
    singer: 'Ava Cornish',
    link: '#',
    playing: false,
    duration: '5:10',
    showMore: true,
    hideDivider: true,
  },
  {
    image: '/images/weekly/song12.jpg',
    name: 'Walking Promises',
    singer: 'Ava Cornish',
    link: '#',
    playing: true,
    duration: '5:10',
    showMore: true,
    hideDivider: true,
  },
  {
    image: '/images/weekly/song15.jpg',
    name: 'Love Me Like You Do',
    singer: 'Ellie Goulding',
    link: 'https://gaana.com/song/love-me-like-you-dofrom-the-fifty-shades-of-grey-soundtrack',
    playing: true,
    duration: '5:10',
    showMore: true,
    hideDivider: true,
  },
]

export default function WeeklyTop() {
  return (
    <div className="flex flex-col text-white">
      <GridViewHeader showViewMore={false}>Weekly Top 15</GridViewHeader>
      <div className="flex items-center gap-4 w-full">
        <div className={`flex flex-wrap ${styles.music__card__wrapper}`}>
          {
            musicArr.map((mcard, index) => (
              <MusicCard index={index} mcard={mcard}></MusicCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}
