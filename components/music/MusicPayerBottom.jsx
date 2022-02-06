import styles from 'styles/components/music.module.scss'
import Button from '../forms/Button'
import Progress from '../music/Progress'
import Play from './Play'
import Volume from './Volume'

export default function MusicPayerBottom() {
  return (
    <div className={styles.player_wrapper}>
      <div className={`flex justify-center items-center ${styles.player__close}`}>
        <i className={`material-icons`}>expand_less</i>
      </div>
      <div className={`flex w-full h-full ${styles.player__container}`}>
        <div className={`basis-1/5 h-full ${styles.player__left}`}>
          <div className={`flex justify-center items-center ${styles.player__song__cover}`}>
            <div className={`flex-grow flex justify-start items-center`}>
              <img src="/images/weekly/song1.jpg" alt="Song 1" />
              <div className={`flex flex-col justify-center items-start ml-4`}>
                <h3 className={styles.player__h3}>Cro Magnon Man</h3>
                <p className={styles.player__para}>Mushroom Records</p>
              </div>
            </div>
            <div className='basis-1/5 flex justify-center items-center'>
              <i className={`material-icons rounded-full border-2 border-white`}>chevron_right</i>
            </div>
          </div>
        </div>
        <div className="player__mid flex-grow flex justify-evenly items-center">
          <i className={`material-icons cursor-pointer`}>skip_previous</i>
          <Play />
          <i className={`material-icons cursor-pointer`}>skip_next</i>
          <div className="progress-bar basis-1/2">
            <Progress completed={60} />
          </div>
          <Volume />
          <i className={`material-icons cursor-pointer`}>queue_play_next</i>
          <i className={`material-icons cursor-pointer`}>sync</i>
          <Button size={'md'}>
            Quality &nbsp;
            <i className={`material-icons rounded-full border-2 border-white font-icon-sm`}>expand_less</i>
          </Button>
        </div>
        <div className="player__right basis-2/12 flex justify-center items-center">
          <Button size={'md'}>
            <i className={`material-icons rounded-full border-2 border-white font-icon-sm`}>expand_less</i>
            &nbsp; Queue
          </Button>
        </div>
      </div>
    </div>
  )
}
