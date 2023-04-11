import { Link } from 'react-router-dom'
import Facebook from './images/facebook.svg'
import Instagram from './images/instagram.svg'
import NoBillLogo from './images/no-bill-logo.svg'
import Twitter from './images/twitter.svg'
export function Footer({ isCustomer }: { isCustomer: boolean } = { isCustomer: false }) {
  return (
    <div>
      <div className='lg:flex lg:justify-between'>
        <img src={NoBillLogo} className='h-8 mt-4' />
        <div className='grid-cols-2 grid my-6 lg:grid-cols-3 flex-1 gap-2 lg:ml-8 max-w-lg'>
          <span className='text-sm text-green'>GET NOBILL</span>
          <span className='text-sm text-green'>RESOURCES</span>
          <span className='text-sm text-green'>ABOUT</span>
          {isCustomer ? (
            <Link className='text-xs' to='/'>
              For Users
            </Link>
          ) : (
            <Link className='text-xs' to='/customer'>
              For Businesses
            </Link>
          )}
          <a href='/Nobill API Documents.pdf' target='_blank' className='text-xs'>
            Developer APIs
          </a>
          <div>
            <a href='/our-story' className='text-xs'>
              Our Story
            </a>
            <br />
            <a href='/PRIVACY POLICY-NoBill.pdf' target='_blank' className='text-xs'>
              Privacy Policy
            </a>
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
        <a
          href={
            isCustomer
              ? '/TERMS AND CONDITIONS-NoBill (Merchant) .pdf'
              : '/TERMS AND CONDITIONS- NoBill (Users).pdf'
          }
          target='_blank'
        >
          Terms and Conditions
        </a>
      </div>
    </div>
  )
}
