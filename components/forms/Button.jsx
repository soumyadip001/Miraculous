import styles from 'styles/components/button.module.scss'

export default function Button({ children, size, nomargin }) {
  const appliedClassName = size ? styles[`btn__${size}`] : styles.btn__sm
  const marginClassName = !!nomargin ? 'no-margin' : null
  return (
    <button
      className={`${styles.btn} ${styles.btn__primary} ${appliedClassName} ${marginClassName}`}
    >{children}</button>
  )
}
