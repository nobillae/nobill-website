import { HashLink } from 'react-router-hash-link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import G1 from './images/Group_1.png'
import G2 from './images/Group_2.png'
import G3 from './images/Group_3.svg'
import G4 from './images/Group_4.svg'
import G5 from './images/Group_5.svg'
import G6 from './images/Group_6.png'
import G7 from './images/Group_7.svg'
import G9 from './images/Group_9.svg'
import G10 from './images/Group_10.svg'
import G11 from './images/Group_11.svg'
import './style.css'

function OurStory() {
  return (
    <div className='h-full'>
      <Header customer />
      <div className='lg:max-w-7xl lg:m-auto lg:flex mb-4 lg:mb-8 lg:mt-10'>
        <span className='pl-6 text-2xl lg:text-3xl font-bold'>About NOBILL</span>
      </div>
      <div className='pl-6'>
        <div className='lg:max-w-7xl lg:m-auto flex justify-center  bg-green/10 rounded-xl'>
          <img src={G6} className='flex-1 overflow-hidden' alt='home-bg' />
          <div className='lg:w-1/2 flex-1 flex-col flex justify-center lg:flex lg:justify-center lg:flex-col '>
            <p className='text-center'>
              <span className='text-xs lg:text-2xl font-serif'>Say</span>
              <span className='text-2xl italic ml-1 lg:text-7xl font-serif'>NO</span>
            </p>
            <p className='text-xs text-center font-serif lg:text-3xl'>to Paper Receipts For</p>
            <p className='text-center text-5xl italic text-green lg:text-9xl font-serif'>GOOD</p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='lg:max-w-7xl lg:m-auto'>
          <div className='px-6 lg:pl-2 py-10'>
            <p className='text-2xl font-bold lg:text-3xl mb-4'>Our Team</p>
            <p className='text-sm lg:text-base'>
              In the payments industry, Sean Wang and Nitin Gupta saw an opportunity to bring their
              passion for technology to the forefront. Sean, a Technocrat, founded UAE's leading
              digital wallet, PayBy, which Astra Tech, a UAE-based technology and investment
              development group, later acquired. He served as the Founder and CTO of the company,
              while Nitin, a creator and innovator in the payments industry, headed the business and
              payments division.
            </p>
          </div>
          <div className='lg:flex lg:items-center'>
            <div className='p-6 flex lg:gap-x-4 justify-center items-center lg:flex-1 lg:justify-start bg-green/5 lg:bg-white'>
              <img src={G1} alt='' className='w-28' />
              <div>
                <p className='text-base font-bold'>Nitin Gupta</p>
                <p className='text-sm'>Founder & CEO</p>
                <p className='text-xs flex items-center'>
                  <span className='text-green font-medium text-xl h-8 mr-1'>&#8250;</span>Previously
                  - Co-founded Texcent
                </p>
                <img src={G11} className='w-6 mt-4' alt="g_11" />
              </div>
            </div>
            <div className='p-6 bg-green/5 lg:gap-x-4 flex justify-center lg:flex-row lg:flex-1 lg:justify-start items-center flex-row-reverse lg:bg-white'>
              <img src={G2} alt='' className='w-28' />
              <div>
                <p className='text-base font-bold'>Sean Wang</p>
                <p className='text-sm'>Founder & CTO</p>
                <p className='text-xs flex items-center '>
                  <span className='text-green font-medium text-xl h-8 mr-1'>&#8250;</span>{' '}
                  Previously - Founder & CTO PayBy
                </p>
                <img src={G11} alt="g_11" className='w-6 mt-4'/>
              </div>
            </div>
          </div>
          <div className='p-6 text-sm lg:text-base'>
            However, their ambitions didn't stop there. These visionaries saw a problem with paper
            receipts and wanted to find a solution that would minimize waste and conserve natural
            resources.
          </div>
          <div className='lg:flex'>
            <div className='p-6 flex-1 lg:pl-0 flex items-center justify-center'>
              <img src={G7} alt='g7' className='w-2/3' />
            </div>
            <div className='text-sm p-6 flex-1 lg:pl-0 self-center lg:text-base'>
              Their continued efforts led to the creation of NoBill, a technology company to
              reimagine paper receipts for a sustainable future, enabling retailers with powerful
              e-commerce software to bridge the technological gap between online and offline
              purchases. NoBill offers a convenient and innovative smart receipt solution for
              retailers and customers by simplifying purchases and keeping receipts organized and
              easily accessible.
            </div>
          </div>
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto lg:flex lg:px-14 lg:py-20 bg-[#19172E]'>
        <img src={G5} alt='g5' className='lg:flex-1 hidden lg:block lg:max-w-xs' />
        <div className='px-6 py-10 lg:self-center lg:flex-1 bg-3'>
          <p className='text-2xl text-green font-bold lg:text-5xl lg:mb-6'>
            Our Innovation <br />
            and Determination
          </p>
          <p className='text-sm text-white lg:text-base w-3/4'>
            Their continued efforts led to the creation of NoBill, a technology company to reimagine
            paper receipts for a sustainable future, enabling retailers with powerful e-commerce
            software to bridge the technological gap between online and offline purchases. NoBill
            offers a convenient and innovative smart receipt solution for retailers and customers by
            simplifying purchases and keeping receipts organized and easily accessible.
          </p>
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto'>
        <img src={G3} alt='c_3_full' className='w-full hidden lg:block' />
				<img src={G10} alt="" className='lg:hidden'/>
        <img className='lg:hidden' src={G4}></img>
        <p className='text-center text-sm m-6 lg:text-lg lg:w-2/4 lg:mx-auto lg:mt-9'>
          At NoBill, <span className='text-green font-medium'>Sean and Nitin</span> are proud of
          what they've accomplished so far, and they're excited to see the positiveAt NoBill, Sean
          and Nitin are proud of what they've effects their innovative solution will have on the
          world for years to come.
        </p>
				<img src={G9} alt="g_9" className='w-2/3 lg:w-1/3 mx-auto p-6'/>
      </div>
      <br />
      <div className='px-6 py-10 bg-[#F4F3F5] '>
        <div className='lg:max-w-7xl lg:m-auto'>
          <br />
          <Footer isCustomer />
        </div>
      </div>
    </div>
  )
}

export default OurStory
