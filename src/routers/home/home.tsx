import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import Advantages_01 from './images/advantages-01.svg'
import Advantages_02 from './images/advantages-02.svg'
import Advantages_03 from './images/advantages-03.svg'
import Advantages_04 from './images/advantages-04.svg'
import Advantages_05 from './images/advantages-05.svg'
import Advantages_06 from './images/advantages-06.svg'
import AppStore from './images/app_store.png'
import G_2_1 from './images/g2_1.svg'
import G_2_2 from './images/g2_2.svg'
import G_2_3 from './images/g2_3.svg'
import G_2_4 from './images/g2_4.svg'
import G_2_5 from './images/g2_5.svg'
import G_2_6 from './images/g2_6.svg'
import G_3 from './images/g3_1.png'
import GooglePlay from './images/google_play.png'
import G_1 from './images/g_1.png'
import HandHoldingReceiptImg from './images/hand-holding-receipt.png'
import Impressive from './images/impressive.png'
import NoBill_S from './images/no_bill_s.svg'
import ReceiptImg from './images/receipt.png'
import './index.css'
function Home() {
  return (
    <div className='w-full'>
      <div className='h-full px-8 lg:px-0'>
        <Header />
        <br />
        <br />
        <div>
          <section className='flex lg:max-w-7xl lg:m-auto'>
            <div className='lg:flex-1 lg:pl-12 lg:flex lg:justify-center  lg:flex-col'>
              <p className='text-xl font-bold text-center lg:text-left mt-9'>
                Say NO to Paper Receipts for
              </p>
              <p className='font-bold text-center lg:text-left text-8xl text-green'>GOOD</p>
              <p className='text-xs text-center lg:text-left'>
                Smart Digital Receipts sent to your phone.
              </p>
              <p className='flex items-center justify-center mt-4 text-center lg:justify-start'>
                <Link
                  to='/customer'
                  className='px-5 py-2 hover:text-gray-300 text-white bg-green rounded-3xl'
                >
                  Contact Us
                </Link>
              </p>
            </div>
            <div className='lg:flex-1'>
              {/* <div className='lg:hidden relative w-full h-56'>
            <div className='absolute overflow-clip'>
              <img
                src={HomeBG}
                className='relative top-[-150px] right-[300px] max-w-none z-10'
                alt='home-bg'
              />
            </div>
          </div> */}
              <div className='h-[214px] lg:h-auto relative receipt-container w-full'>
                <div className='absolute lg:relative w-full h-[420px] flex lg:h-auto bottom-0 overflow-hidden'>
                  <img
                    src={HandHoldingReceiptImg}
                    alt='hand-holding-receipt'
                    className='bottom-0 z-20 w-44'
                  ></img>
                  <img
                    src={ReceiptImg}
                    alt='receipt'
                    className='w-56 ml-4 left-[164px] bottom-0 z-30'
                  ></img>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='lg:bg-[#F1F1F1]'>
          <section className='px-6 py-10  lg:max-w-7xl lg:m-auto'>
            <p className='text-2xl font-bold'>Advantages of Smart Receipt</p>
            <br />
            <div className='flex flex-row-reverse justify-center'>
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
              <div className='lg:mr-40'>
                <img src={G_1} className='p-4 w-80 ' />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className='lg:max-w-7xl lg:m-auto'>
            <div className='flex flex-row justify-end gap-x-6 p-4'>
              <img src={GooglePlay} alt='google_play' className='w-32' />
              <img src={AppStore} alt='app_store' className='w-32' />
            </div>
            <p className='font-bold text-2xl p-4'>
              Support UAE's Net- Zero & Paperless Strategy -{' '}
              <span className='text-green'>Go Green</span>
            </p>
            <div className='grid items-end grid-cols-2 lg:grid-cols-6 mt-6 text-sm text-center'>
              <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] pt-6 pb-3 border-b lg:border-b-0 pr-3'>
                <img src={G_2_1} alt='G_2_1' className='inline' />
                <p className='mt-2 text-xl text-shakingBlack  font-bold'>300 billion</p>
                <span className='text-xs'>receipts of paper are produced annually</span>
              </div>
              <div className='pt-6 pb-3 border-b border-[#D8D8D8] pl-3 lg:border-b-0'>
                <img src={G_2_2} alt='G_2_2' className='inline' />
                <p className='mt-2 text-xl text-shakingBlack  font-bold'>25 million</p>
                <span className='text-xs'>Trees Consuming </span>
              </div>
              <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] py-3 border-b lg:border-l pr-3 lg:border-b-0'>
                <img src={G_2_3} alt='G_2_3' className='inline' />
                <p className='mt-2 text-xl text-shakingBlack  font-bold'>18 billion</p>
                <span className='text-xs'>litres of water</span>
              </div>
              <div className='py-3 border-b border-[#D8D8D8] pl-3 lg:border-b-0'>
                <img src={G_2_4} alt='G_2_4' className='inline' />
                <p className='mt-2 text-xl text-shakingBlack  font-bold'>22 million</p>
                <span className='text-xs'>barrels of oil</span>
              </div>
              <div className='odd:border-r odd:border-solid odd:border-[#D8D8D8] pt-3 pb-6 pr-3 lg:pb-0 lg:border-x'>
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
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className='lg:bg-[#F1F1F1]'>
          <section className='lg:max-w-7xl lg:m-auto lg:grid lg:grid-cols-2 max-h-[478px]'>
            <img
              src={Impressive}
              alt='Impressive'
              className='w-full lg:flex-1 relative bottom-[120px]'
            />
            <p className='text-3xl text-shakingBlack font-bold lg:flex lg:items-center lg:ml-8'>
              Impressive <br />
              Loyalty & Reward
              <br />
              Programs
            </p>
          </section>
        </div>
        <div>
          <br />
          <br />
          <br />
          <section className='lg:flex container-2 lg:max-w-7xl lg:m-auto max-h-96'>
            <div className='lg:flex-1 lg:pl-14'>
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
            </div>
            <div className='flex-1'>
              <img src={G_3} className='max-w-none w-full relative right-12'></img>
            </div>
          </section>
        </div>
        <div className='lg:bg-[#F1F1F1]'>
          <section className='lg:max-w-7xl lg:m-auto'>
            <br />
            <br />
            <p className='text-3xl text-shakingBlack font-bold'>Get started today</p>
            <br />
            <br />
            <Link
              to='/customer'
              className='px-5 py-2 text-white hover:text-gray-300 bg-green rounded-3xl'
            >
              Contact Us
            </Link>
            <br />
            <br />
            <hr className='border-dashed border-t border-[#252241] opacity-30 h-0' />
            <Footer />
            <br />
            <br />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
