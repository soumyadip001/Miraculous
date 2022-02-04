import GridViewHeader from './GridViewHeader'

export default function TopGenre({ title }) {
  return (
    <div className="flex flex-col text-white">
      <GridViewHeader showViewMore={true}>{ title }</GridViewHeader>
      <div className="flex items-center gap-4 w-full">
        <div className="basis-2/6 flex relative overlay-blue">
          <img src='/images/genrs/img1.jpg' className='h-full' alt='Genres 1' />
        </div>
        <div className="basis-3/6 flex flex-wrap">
          <div className="basis-1/3 pb-4 pr-4">
            <img src='/images/genrs/img2.jpg' className='h-full' alt='Genres 2' />
          </div>
          <div className="basis-2/3 pb-4 overlay-blue-reverse">
            <img src='/images/genrs/img3.jpg' className='h-full' alt='Genres 3' />
          </div>
          <div className="basis-2/3 pr-4">
            <img src='/images/genrs/img5.jpg' className='h-full' alt='Genres 5' />
          </div>
          <div className="basis-1/3 overlay-blue">
            <img src='/images/genrs/img6.jpg' className='h-full' alt='Genres 6' />
          </div>
          </div>
        <div className="basis-1/6 overlay-blue">
          <img src='/images/genrs/img4.jpg' className='h-full' alt='Genres 4' />
        </div>
      </div>
    </div>
  )
}
