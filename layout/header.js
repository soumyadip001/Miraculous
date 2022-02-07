import React from 'react'
import styles from '../styles/header.module.scss'

import InputGroup from '../components/forms/InputGroup'
import Button from '../components/forms/Button'

export default function header() {
  return (
    <header className={`${styles.header} flex items-center text-white`}>
      <div className={styles.header__top_left}>
        <InputGroup />
        <div className={`${styles.header__top_trend} font-md md:hidden`}>
          <span className='text-accent'>Trending Songs :&nbsp;</span>
          <span>
            <a href='#'>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a>
          </span>
        </div>
      </div>
      <div className={styles.header__top_right}>
        <div className={styles.header__language}>
          Languages &nbsp; <span className='text-accent'>EN</span>
        </div>
        <Button>Register</Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}
