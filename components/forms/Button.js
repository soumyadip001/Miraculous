import styles from '../../styles/button.module.scss'

export default function Button({ children, size }) {
  const appliedClassName = size ? styles[`btn__${size}`] : styles.btn__sm
  return (
    <button
      className={`${styles.btn} ${styles.btn__primary} ${appliedClassName}`+ ''}
    >{children}</button>
  )
}
