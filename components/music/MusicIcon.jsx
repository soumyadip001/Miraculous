import styles from '../../styles/nav.module.scss'

export default function MusicIcon({ icon }) {
  return (
    <li className={`${styles.sidebar__menu} list-none`} key={icon}>
      <a href='#' className={`${styles.sidebar__menu__link}`}>
        <i className={`${styles.sidebar__icon} material-icons`}>{icon}</i>
      </a>
    </li>
  )
}
