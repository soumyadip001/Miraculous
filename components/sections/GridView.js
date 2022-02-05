import styles from '../../styles/gridview.module.scss'
import GridViewHeader from './GridViewHeader';

export default function GridView({ showName, slides, title }) {
  return (
    <div className="flex flex-col text-white">
      <GridViewHeader showViewMore={true}>{ title }</GridViewHeader>
      <div className="flex items-center gap-4">
        {
          slides.map((slide, index) => 
            <div className={styles.section__card} key={index}>
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
                { !!showName &&
                  <p className={styles.section__p}>{ slide.singer }</p>
                }
              </h3>
            </div>
          )
        }
      </div>
    </div>
  )
}
