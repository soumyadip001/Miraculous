import { useState } from 'react'
import styles from 'styles/components/music.module.scss'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Volume() {
  const [volumebar, setVolumebar] = useState(false);

  return (
    <div className={`flex justify-center items-center ${styles.music__control__volume}`}>
      <i 
        className={`material-icons cursor-pointer rounded-full border-2 border-white p-3`}
        onClick={() => setVolumebar(!volumebar)}
      >volume_up</i>
      { volumebar &&
        <div className={`${styles.volume__control}`}>
          <ProgressBar completed={60} height={3} bgColor={'#3bc8e7'} labelAlignment={'outside'} isLabelVisible={false} />
          <span className={`${styles.volume__control__label}`}>60</span>
        </div>
      }
    </div>
  )
}
