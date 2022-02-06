import { useState } from "react"
import styles from '../../styles/music.module.scss'

export default function Play() {
  const [play, setPlay] = useState('play_arrow')
  const togglePlay = () => {
    if (play === 'play_arrow') {
      setPlay('pause')
    } else {
      setPlay('play_arrow')
    }
  }

  return (
    <div className={styles.music__controlls}>
      <i className={`material-icons cursor-pointer rounded-full border-2 border-white p-3`} onClick={togglePlay}>{play}</i>
    </div>
  )
}
