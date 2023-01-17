import { Link } from 'react-router-dom'
import { Header } from '../../components/header'
import HomeBG from './images/home-bg.svg'
import ReceiptImg from './images/receipt.png'
import HandHoldingReceiptImg from './images/hand-holding-receipt.png'
import InteractionBG from './images/Intersection.png'
import Advantages_01 from './images/advantages-01.svg'
import Advantages_02 from './images/advantages-02.svg'
import Advantages_03 from './images/advantages-03.svg'
import Advantages_04 from './images/advantages-04.svg'
import Advantages_05 from './images/advantages-05.svg'
import Advantages_06 from './images/advantages-06.svg'
import G_1 from './images/g_1.png'
import G_2_1 from './images/g2_1.svg'
import G_2_2 from './images/g2_2.svg'
import G_2_3 from './images/g2_3.svg'
import G_2_4 from './images/g2_4.svg'
import G_2_5 from './images/g2_5.svg'
import G_2_6 from './images/g2_6.svg'
import GooglePlay from './images/google_play.png'
import AppStore from './images/app_store.png'
import NoBill_S from './images/no_bill_s.svg'
import G_3 from './images/g3_1.png'
import NoBillLogo from './images/no-bill-logo.svg'
import Twitter from './images/twitter.svg'
import Facebook from './images/facebook.svg'
import Instagram from './images/instagram.svg'
function Home() {
  return (
    <div className='h-full'>
      <Header />
      <p className='text-xl font-bold text-center mt-9'>Say NO to Paper Receipts for</p>
      <p className='font-bold text-center text-8xl text-green'>GOOD</p>
      <p className='text-xs text-center'>Smart Digital Receipts sent to your phone.</p>
      <p className='flex items-center justify-center mt-4 text-center'>
        <Link to='/contact-us' className='px-5 py-2 text-white bg-green rounded-3xl'>
          Contact Us
        </Link>
      </p>
      <div className='relative w-full h-56'>
        <div className='absolute overflow-clip'>
          <img
            src={HomeBG}
            className='relative top-[-150px] right-[300px] max-w-none z-10'
            alt='home-bg'
          />
        </div>
      </div>
      <div className='w-full h-[214px] relative'>
        <div className='absolute w-full h-[420px] bottom-0 overflow-hidden'>
          <img src={InteractionBG} alt='' className='absolute -right-14 -bottom-44' />
          <img
            src={HandHoldingReceiptImg}
            alt='hand-holding-receipt'
            className='absolute bottom-0 z-20 w-44'
          ></img>
          <img
            src={ReceiptImg}
            alt='receipt'
            className='w-40 absolute left-[164px] bottom-0 z-30'
          ></img>
        </div>
      </div>
      <div className='px-6 py-10'>
        <p className='text-2xl font-bold'>
          Advantages
          <br />
          of Smart Receipt
        </p>
        <div className='grid items-center grid-cols-2 mt-6 text-sm font-bold text-center justify-items-center gap-y-6'>
          <div>
            <img src={Advantages_01} alt='Advantages_01' className='inline' />
            <p className='mt-2'>All your receipts in one place</p>
          </div>
          <div>
            <img src={Advantages_02} alt='Advantages_01' className='inline' />
            <p className='mt-2'>Track refunds and warranties</p>
          </div>
          <div>
            <img src={Advantages_03} alt='Advantages_01' className='inline' />
            <p className='mt-2'>Itemized & informative</p>
          </div>
          <div>
            <img src={Advantages_04} alt='Advantages_01' className='inline' />
            <p className='mt-2'>Offers & Promotions</p>
          </div>
          <div>
            <img src={Advantages_05} alt='Advantages_01' className='inline' />
            <p className='mt-2'>Automatic Loyalty Stamp Cards</p>
          </div>
          <div>
            <img src={Advantages_06} alt='Advantages_01' className='inline' />
            <p className='mt-2'>Automatic Reward Points Earnings</p>
          </div>
        </div>
        <img src={G_1} className='p-4' />
        <div className='flex flex-row justify-between gap-x-6 p-4'>
          <img src={GooglePlay} alt='google_play' className='w-32' />
          <img src={AppStore} alt='app_store' className='w-32' />
        </div>
        <p className='font-bold text-2xl p-4'>
          Support UAE's Net- Zero & Paperless Strategy -{' '}
          <span className='text-green'>Go Green</span>
        </p>
        <div className='grid items-end grid-cols-2 mt-6 text-sm text-center'>
          <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] pt-6 pb-3 border-b pr-3'>
            <img src={G_2_1} alt='G_2_1' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>300 billion</p>
            <span className='text-xs'>receipts of paper are produced annually</span>
          </div>
          <div className='pt-6 pb-3 border-b border-[#D8D8D8] pl-3'>
            <img src={G_2_2} alt='G_2_2' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>25 million</p>
            <span className='text-xs'>Trees Consuming </span>
          </div>
          <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] py-3 border-b pr-3'>
            <img src={G_2_3} alt='G_2_3' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>18 billion</p>
            <span className='text-xs'>litres of water</span>
          </div>
          <div className='py-3 border-b border-[#D8D8D8] pl-3'>
            <img src={G_2_4} alt='G_2_4' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>22 million</p>
            <span className='text-xs'>barrels of oil</span>
          </div>
          <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] pt-3 pb-6 pr-3'>
            <img src={G_2_5} alt='G_2_5' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>over 90%</p>
            <span className='text-xs'>of paper receipts are coated with BPA or BPS</span>
          </div>
          <div className='pb-6 pt-3 pl-3'>
            <img src={G_2_6} alt='G_2_6' className='inline' />
            <p className='mt-2 text-xl text-shakingBlack  font-bold'>12 billion</p>
            <span className='text-xs'>pounds of carbon dioxide (CO2)</span>
          </div>
        </div>
        <br />
        <br />
        <img src={NoBill_S} />
        <p className='text-3xl text-shakingBlack font-bold'>
          Smart Digital <br />
          Receipts
        </p>
        <p>Download the app and activate the intelligent receipt on your phone.</p>
        <div className='flex flex-row gap-x-2 pt-4 pl-1'>
          <img src={GooglePlay} alt='google_play' className='w-32' />
          <img src={AppStore} alt='app_store' className='w-32' />
        </div>
        <br />
        <br />
        <img src={G_3} className='max-w-none h-80 relative right-12'></img>
        <br />
        <p className='text-3xl text-shakingBlack font-bold'>Get started today</p>
        <br />
        <br />
        <Link to='/contact-us' className='px-5 py-2 text-white bg-green rounded-3xl'>
          Contact Us
        </Link>
        <br />
        <br />
        <hr className='border-dashed border-t border-[#252241] opacity-30 h-0'/>
        <img src={NoBillLogo} className='h-8 mt-4'/>
        <div className='grid-cols-2 grid my-6'>
          <span className='text-sm text-green'>GET NOBILL</span>
          <span className='text-sm text-green'>RESOURCES</span>
          <span className='text-xs'>For Businesses</span>
          <span className='text-xs'>Developer APIs</span>
        </div>
        <div className='grid-cols-2 grid mb-6'>
          <div className='flex flex-col gap-y-2'>
            <span className='text-sm text-green'>ABOUT</span>
            <span className='text-xs'>Our Story</span>
            <span className='text-xs'>Culture</span>
          </div>
          <div className='flex gap-4 items-center'>
            <img src={Instagram} alt="Instagram" className='h-5' />
            <img src={Facebook} alt="Facebook" className='h-5'/>
            <img src={Twitter} alt="Twitter" className='h-5'/>
          </div>
        </div>
        <hr className='border-dashed border-t border-[#252241] opacity-30 h-0'/>
        <div className='mt-6 text-xs flex justify-between'>
          <span className='t'>©2023 nobill.io . All rights reserved</span>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Home
