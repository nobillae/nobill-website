import Facebook from './images/facebook.svg'
import Instagram from './images/instagram.svg'
import NoBillLogo from './images/no-bill-logo.svg'
import Twitter from './images/twitter.svg'
export function Footer() {
  return (
    <div>
      <div className='lg:flex lg:justify-between'>
        <img src={NoBillLogo} className='h-8 mt-4' />
        <div className='grid-cols-2 grid my-6 lg:grid-cols-3 flex-1 lg:ml-8 max-w-lg'>
          <span className='text-sm text-green'>GET NOBILL</span>
          <span className='text-sm text-green'>RESOURCES</span>
          <span className='text-sm text-green'>ABOUT</span>
          <span className='text-xs'>For Businesses</span>
          <span className='text-xs'>Developer APIs</span>
          <div>
            <span className='text-xs'>Our Story</span>
            <br />
            <span className='text-xs'>Culture</span>
          </div>
        </div>
        <div className='grid-cols-1 grid mb-6'>
          <div className='flex gap-4 items-center'>
            <img src={Instagram} alt='Instagram' className='h-5' />
            <img src={Facebook} alt='Facebook' className='h-5' />
            <img src={Twitter} alt='Twitter' className='h-5' />
          </div>
        </div>
        <hr className='border-dashed border-t border-[#252241] opacity-30 h-0 lg:hidden' />
      </div>
      <div className='mt-6 text-xs flex justify-between'>
        <span className='t'>©2023 nobill.io . All rights reserved</span>
        <span>Terms and Conditions</span>
      </div>
    </div>
  )
}
