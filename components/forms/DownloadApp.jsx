import GridViewHeader from '../sections/GridViewHeader';

export default function DownloadApp() {
  return (
    <div className='flex flex-col items-start justify-center basis-1/4'>
      <GridViewHeader showViewMore={false}>Download Our App</GridViewHeader>
      <p className='display-para'>Go Mobile with our app. Listen to your favourite songs at just one click. Download Now !</p>
      <img src='/images/google_play.jpg' alt='Google Play' className='mt-4 cursor-pointer' />
      <img src='/images/app_store.jpg' alt='App Store' className='mt-4 cursor-pointer' />
      <img src='/images/windows.jpg' alt='Windows Store' className='mt-4 cursor-pointer' />
    </div>
  )
}
