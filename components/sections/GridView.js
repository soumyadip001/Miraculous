import styles from '../../styles/gridview.module.scss'

const sliderArr = [
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

export default function GridView() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex justify-between w-full mb-4">
        <p className={styles.section__heading}>Recently Played</p>
        <a href="#" className={styles.section__more}>View More</a>
      </div>
      <div className="flex items-center gap-4">
        {
          sliderArr.map(slide => 
            <div className={styles.section__card}>
              <img src={slide.src} alt={slide.name} />
              <div className={styles.play__overlay}>
                <div className={styles.box__overlay}></div>
                <div className={styles.more__icon}>
                  <i className='material-icons'>more_horiz</i>
                </div>
                <div className={styles.play__icon}>
                <i className='material-icons'>play_circle_outline</i>
                </div>
              </div>
              <h3 className='mt-5'>
                <a className='display-3 mb-1' href="#">{ slide.name }</a>
                <p className={styles.section__p}>{ slide.singer }</p>
              </h3>
            </div>
          )
        }
      </div>
    </div>
  )
}
