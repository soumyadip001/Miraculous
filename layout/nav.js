import Image from 'next/image'

export default function nav() {
  return (
    <nav className='sidemenu__wrapper flex flex-col items-center p-2 h-full min-height-90 bg-blue-900'>
      <div className='sidemenu__wrapper__inner min-height-164 flex justify-center items-center'>
        <Image src={'/logo.png'} alt='Logo' height={78} width={78} />
      </div>
      <div className='sidemenu__nav mt-4 flex flex-col flex-grow h-full'>
        <ul className='sidemenu__nav--main flex flex-col list-none items-center mb-16'>
            <li>H</li>
            <li>Z</li>
            <li>I</li>
            <li>A</li>
            <li>B</li>
            <li>B</li>
            <li>V</li>
        </ul>
        <ul className='sidemenu__nav--downloads flex flex-col flex-grow'>
            <li>H</li>
            <li>Z</li>
            <li>I</li>
            <li>A</li>
        </ul>
        <ul className='sidemenu__nav--playlist flex flex-col'>
            <li>H</li>
            <li>Z</li>
        </ul>
      </div>
    </nav>
  )
}
