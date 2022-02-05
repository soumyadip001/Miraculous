import styles from '../../styles/gridview.module.scss'

export default function GridViewHeader({ children, showViewMore }) {
  return (
    <div className="flex justify-between w-full mb-4">
      <p className={styles.section__heading}>{ children }</p>
      { !!showViewMore &&
        <a href="#" className={styles.section__more}>View More</a>
      }
      
    </div>
  )
}
