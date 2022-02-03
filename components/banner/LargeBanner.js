import styles from '../../styles/banner.module.scss'
import Button from '../forms/Button'
import Image from 'next/image'

export default function LargeBanner() {
  return (
    <div className={`flex w-full mb-8 min-height-540 ${styles.banner}`}>
      <div className='flex items-center justify-center basis-2/5 relative'>
        <Image
          src={'/images/banner.png'} alt='Main Banner'
          layout='fill' objectFit='contain'
          loading='lazy'
          height={'100%'} width={'100%'}
        />
      </div>
      <div className='flex flex-col items-start justify-center flex-1 text-white'>
        <h1 className='display-1'>This Month's <span>Record Breaking Albums !</span></h1>
        <p className='mt-4 mb-10 text-grey-1 display-para'>
          Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...
        </p>
        <p className='flex w-full'>
          <Button size={'md'}>Listen Now</Button>
          <Button size={'md'}>Add To Queue</Button>
        </p>
      </div>
    </div>
  )
}
