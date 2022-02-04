import styles from '../../styles/mcard.module.scss'

export default function MusicCard({ index, mcard }) {
  const songName = (mcard.name.length > 17) ? `${mcard.name.substr(0, 14)}...` : mcard.name ;

  return (
    <div className={`flex basis-30-p justify-start items-center ${styles.mcard}`} key={index}>
      <div className={`flex flex-grow justify-start items-center`}>
        <span className={styles.mcard__number}>
          { (index.toString().length > 1) ? index + 1 : (index+1).toString().padStart(2, '0') }
        </span>
        <div className={`flex justify-start items-center ${styles.mcard__song}`}>
          <div className={styles.mcard__image__container}>
            <img lassName={styles.mcard__image} src={mcard.image} alt={mcard.name} />
          </div>
          <div className={`flex flex-col justify-between items-start ${styles.mcard__name}`}>
            <h3 className='font-md'>
              <a href={mcard.link} className='text-white hover:text-sky-300' title={mcard.name} target={'_blank'}>
                { songName }
              </a>
            </h3>
            <p className='display-para-sm'>{mcard.singer}</p>
          </div>
        </div>
      </div>
      <div className={`flex justify-center items-center ${styles.mcard__right}`}>
        <span className={styles.mcard__songtime}>{mcard.duration}</span>
        <i className='material-icons cursor-pointer hover:text-sky-300'>more_horiz</i>
      </div>
      <div className={styles.mcard__options}>
        <ul className={styles.mcard__options__ul}>
          <li>Add To Favourites</li>
          <li>Add To Queue</li>
          <li>Download Now</li>
          <li>Add To Playlist</li>
          <li>Share</li>
        </ul>
      </div>
      { !!!mcard.hideDivider &&
        <div className='divider'></div>
      }
    </div>
  )
}
