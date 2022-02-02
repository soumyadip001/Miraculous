import React from 'react'
import styles from './header.module.scss'

export default function header() {
  return (
    <div className={`${styles.header} flex items-center text-white`}>
      <div className={styles.header__top_left}>
        <div className={styles.header__top_search}>
          <input type='text' className='' placeholder='Search Music Here..' />
          <button>
            <i class="material-icons">search</i>
          </button>
        </div>
        <div className={styles.header__top_trend}>
          <span>Trending Songs :</span>
          <span>
            <a href='#'>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a>
          </span>
        </div>
      </div>
      <div className={styles.header__top_right}>
        Languages
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  )
}
