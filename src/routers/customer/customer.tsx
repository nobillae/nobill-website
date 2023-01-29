import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import './style.css'
import C1 from './images/c_1.png'
import C2 from './images/c_2.png'
import C3 from './images/c_3.png'
import C4 from './images/c_4.png'
import C7 from './images/c_7.svg'

function Customer() {
  return (
    <div className='h-full'>
      <Header />
      <p className='text-xl font-bold text-center mt-9'>Know your in-store</p>
      <p className='font-bold text-center text-6xl text-green'>Customers</p>
      <p className='text-xs text-center'>with smart E-receipt</p>
      <p className='flex items-center justify-center mt-4 text-center'>
        <Link to='/contact-us' className='px-5 py-2 text-white bg-green rounded-3xl'>
          Become a Partner
        </Link>
      </p>
      <img src={C1} className='w-full' alt='home-bg' />
      <div className='bg-[#f1f1f1]'>
        <div className='px-6 py-10'>
          <p className='text-2xl font-bold'>AI-Powered InformedBusiness Intelligence</p>
        </div>
        <img src={C2} alt='' className='w-full' />
      </div>
      <div className='px-6 py-10'>
        <br />
        <br />
        <p className='text-3xl text-shakingBlack font-bold'>
          Manage your Loyalty Programs Effortlessly
        </p>
      </div>
      <div className='bg-1'>
        <div className='px-6'>
          <span className='text-xs bg-yellow-50 px-4 py-2 font-semibold rounded'>
            Loyalty Points
          </span>
        </div>
        <img className='w-full' src={C3}></img>
      </div>
      <div className='bg-2'>
        <div className='px-6 py-10'>
          <span className='text-xs bg-green/10 px-4 py-2 font-semibold rounded'>Stamps</span>
        </div>
        <img className='w-full' src={C4} />
      </div>
      <br />
      <div className='px-6 py-10 bg-[#19172E] rounded-tr-lg rounded-tl-lg text-white'>
        <p className='text-3xl font-bold'>Get in touch</p>
        <br />
        <div className='flex gap-x-3'>
          <img src={C7} alt='email' />
          <span>help@nobill.io</span>
        </div>
      </div>
      <div className='px-6 py-10 bg-[#F4F3F5] '>
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default Customer
