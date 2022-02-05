import Image from 'next/image'
import MusicIcon from '../components/music/MusicIcon'
import styles from '../styles/nav.module.scss'

const sideMenuIcons = ['home', 'library_music', 'mic_none', 'music_video', 'queue_music', 'headset', 'router']
const sideMenuDownloadIcon = ['file_download', 'shopping_cart', 'favorite_border', 'history']
const sideMenuLibraryIcon = ['library_music', 'library_add']

export default function nav() {
  return (
    <nav className={`${styles.sidemenu__wrapper} flex flex-col items-center`}>
      <div className={`min-height-164 flex justify-center items-center w-full`}>
        <Image src={'/logo.png'} alt='Logo' height={78} width={78} />
      </div>
      <div className='sidemenu__nav mt-4 flex flex-col flex-grow h-full w-full'>
        <ul className='sidemenu__nav--main flex flex-col list-none items-center mb-16'>
          {
            sideMenuIcons.map(icon => (
              <MusicIcon icon={icon} key={icon} />
            ))
          }
        </ul>
        <ul className='sidemenu__nav--downloads flex flex-col flex-grow'>
          {
            sideMenuDownloadIcon.map(icon => (
              <MusicIcon icon={icon} key={icon} />
            ))
          }
        </ul>
        <ul className='sidemenu__nav--playlist flex flex-col mb-12'>
          {
            sideMenuLibraryIcon.map(icon => (
              <MusicIcon icon={icon} key={icon} />
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
