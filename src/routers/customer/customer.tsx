import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import C1 from './images/c_1.png'
import C2 from './images/c_2.png'
import C3 from './images/c_3.png'
import C3_Full from './images/c_3_full.png'
import C4 from './images/c_4.png'
import C7 from './images/c_7.svg'
import './style.css'
import { HashLink } from 'react-router-hash-link'

function Customer() {
  return (
    <div className='h-full'>
      <Header customer />
      <div className='lg:max-w-7xl lg:m-auto lg:flex'>
        <div className='lg:w-1/2 lg:flex lg:justify-center lg:flex-col'>
          <p className='text-xl font-bold text-center lg:text-left mt-9 lg:text-3xl'>
            Know your in-store
          </p>
          <p className='font-bold text-center lg:text-left text-6xl text-green'>Customers</p>
          <p className='text-xs text-center lg:text-left'>with smart E-receipt</p>
          <p className='flex items-center justify-center lg:justify-start mt-4 text-center'>
            <HashLink smooth={true} to='#get_in_touch' className='link-lg'>
              Become a Partner
            </HashLink>
          </p>
        </div>
        <img src={C1} className='w-full lg:w-1/2' alt='home-bg' />
      </div>

      <div className='bg-[#f1f1f1]'>
        <div className='lg:max-w-7xl lg:m-auto lg:flex lg:flex-row-reverse '>
          <div className='px-6 py-10 lg:w-1/2 lg:flex lg:items-center'>
            <p className='text-2xl font-bold lg:text-3xl'>
              AI-Powered InformedBusiness Intelligence
            </p>
          </div>
          <img src={C2} alt='' className='w-full lg:w-1/2' />
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto'>
        <div className='px-6 py-10'>
          <br />
          <br />
          <p className='text-2xl text-shakingBlack font-bold lg:text-3xl'>
            Manage your Loyalty Programs Effortlessly
          </p>
        </div>
        <div className='bg-1'>
          <div className='px-6'>
            <span className='text-xs bg-yellow-50 px-4 py-2 font-semibold rounded'>
              Loyalty Points
            </span>
          </div>
          <img src={C3_Full} alt='c_3_full' className='hidden lg:inline-block' />
          <img className='w-full lg:hidden' src={C3}></img>
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto lg:hidden'>
        <div className='bg-2'>
          <div className='px-6 py-10'>
            <span className='text-xs bg-green/10 px-4 py-2 font-semibold rounded'>Stamps</span>
          </div>
          <img className='w-full' src={C4} />
        </div>
      </div>

      <br />
      <div id='get_in_touch' className=' text-white'>
        <div className='lg:max-w-7xl lg:m-auto bg-[#19172E] px-6 py-10  rounded-tr-lg rounded-tl-lg'>
          <p className='text-3xl font-bold'>Get in touch</p>
          <br />
          <div className='flex gap-x-3'>
            <img src={C7} alt='email' />
            <a
              target='_blank'
              className='text-white hover:text-gray-300'
              href='mailto:help@nobill.io'
            >
              help@nobill.io
            </a>
          </div>
        </div>
      </div>
      <div className='px-6 py-10 bg-[#F4F3F5] '>
        <div className='lg:max-w-7xl lg:m-auto'>
          <br />
          <Footer isCustomer />
        </div>
      </div>
    </div>
  )
}

export default Customer
