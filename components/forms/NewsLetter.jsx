import Button from './Button';
import TextInput from './TextInput';
import GridViewHeader from '../sections/GridViewHeader';

export default function NewsLetter() {
  return (
    <div className='flex flex-col items-start justify-center'>
      <GridViewHeader showViewMore={false}>Subscribe</GridViewHeader>
      <p className='display-para'>Subscribe to our newsletter and get latest updates and offers.</p>
      <TextInput placeholder='Enter Your Name' />
      <TextInput placeholder='Enter Your Email' />
      <div className='mt-4 w-full'>
        <Button size={'md'} nomargin>Sign me up</Button>
      </div>
    </div>
  )
}
