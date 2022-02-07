import GridViewHeader from './GridViewHeader'

export default function TopGenre({ title }) {
  return (
    <div className="flex flex-col text-white">
      <GridViewHeader showViewMore={true}>{ title }</GridViewHeader>
      <div className="flex items-center lg:gap-4 md:gap-2 md:flex-col lg:flex-row w-full">
        <div className="lg:basis-2/6 md:w-full flex relative overlay-blue">
          <img src='/images/genrs/img1.jpg' className='w-full h-auto' alt='Genres 1' />
        </div>
        <div className="lg:basis-3/6 flex flex-wrap">
          <div className="lg:basis-1/3 pb-4 pr-4">
            <img src='/images/genrs/img2.jpg' className='w-full h-auto' alt='Genres 2' />
          </div>
          <div className="lg:basis-2/3 pb-4 overlay-blue-reverse">
            <img src='/images/genrs/img3.jpg' className='w-full h-auto' alt='Genres 3' />
          </div>
          <div className="lg:basis-2/3 pr-4">
            <img src='/images/genrs/img5.jpg' className='w-full h-full' alt='Genres 5' />
          </div>
          <div className="lg:basis-1/3 overlay-blue">
            <img src='/images/genrs/img6.jpg' className='w-full h-auto' alt='Genres 6' />
          </div>
        </div>
        <div className="lg:basis-1/6 md:w-full overlay-blue">
          <img src='/images/genrs/img4.jpg' className='w-full h-auto' alt='Genres 4' />
        </div>
      </div>
    </div>
  )
}
