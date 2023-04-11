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
// import './style.css'

function OurStory() {
  return (
    <div className='h-full'>
      <Header customer />
      <div className='lg:max-w-7xl lg:m-auto lg:flex mb-4'>
        <span className='pl-6 text-2xl font-bold'>About NOBILL</span>
      </div>
      <div className='lg:max-w-7xl lg:m-auto flex justify-center pl-6'>
        <img src={G6} className='flex-1 overflow-hidden' alt='home-bg' />
        <div className='lg:w-1/2 flex-1 flex-col flex justify-center lg:flex lg:justify-center lg:flex-col bg-green/10'>
          <p className='text-center'>
            <span className='text-xs'>Say</span>
            <span className='text-2xl italic ml-1'>NO</span>
          </p>
          <p className='text-xs text-center'>to Paper Receipts For</p>
          <p className=' text-center lg:text-left text-5xl italic text-green'>GOOD</p>
        </div>
      </div>

      <div className=''>
        <div className='lg:max-w-7xl lg:m-auto'>
          <div className='px-6 py-10'>
            <p className='text-2xl font-bold lg:text-3xl mb-4'>Our Team</p>
            <p className='text-sm'>
              In the payments industry, Sean Wang and Nitin Gupta saw an opportunity to bring their
              passion for technology to the forefront. Sean, a Technocrat, founded UAE's leading
              digital wallet, PayBy, which Astra Tech, a UAE-based technology and investment
              development group, later acquired. He served as the Founder and CTO of the company,
              while Nitin, a creator and innovator in the payments industry, headed the business and
              payments division.
            </p>
          </div>
          <div className='p-6 flex justify-center items-center bg-green/5'>
            <img src={G1} alt='' className='w-28' />
            <div>
              <p className='text-base font-bold'>Nitin Gupta</p>
              <p className='text-sm'>Founder & CEO</p>
              <p className='text-xs flex items-center'>
                <span className='text-green font-medium text-xl h-8 mr-1'>&#8250;</span>Previously -
                Co-founded Texcent
              </p>
            </div>
          </div>
          <div className='p-6 bg-green/5 flex justify-center items-center flex-row-reverse'>
            <img src={G2} alt='' className='w-28' />
            <div>
              <p className='text-base font-bold'>Sean Wang</p>
              <p className='text-sm'>Founder & CTO</p>
              <p className='text-xs flex items-center '>
                <span className='text-green font-medium text-xl h-8 mr-1'>&#8250;</span> Previously
                - Founder & CTO PayBy
              </p>
            </div>
          </div>
          <div className='p-6 text-sm'>
            However, their ambitions didn't stop there. These visionaries saw a problem with paper
            receipts and wanted to find a solution that would minimize waste and conserve natural
            resources.
          </div>
          <div className='p-6'>
            <img src={G7} alt='g7' className='w-full' />
          </div>
          <div className='text-sm p-6'>
            Their continued efforts led to the creation of NoBill, a technology company to reimagine
            paper receipts for a sustainable future, enabling retailers with powerful e-commerce
            software to bridge the technological gap between online and offline purchases. NoBill
            offers a convenient and innovative smart receipt solution for retailers and customers by
            simplifying purchases and keeping receipts organized and easily accessible.
          </div>
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto bg-[#19172E]'>
        <div className='px-6 py-10'>
          <p className='text-2xl text-green font-bold lg:text-3xl'>
            Our Innovation <br />
            and Determination
          </p>
          <p className='text-sm text-white'>
            Their continued efforts led to the creation of NoBill, a technology company to reimagine
            paper receipts for a sustainable future, enabling retailers with powerful e-commerce
            software to bridge the technological gap between online and offline purchases. NoBill
            offers a convenient and innovative smart receipt solution for retailers and customers by
            simplifying purchases and keeping receipts organized and easily accessible.
          </p>
        </div>
      </div>
      <div className='lg:max-w-7xl lg:m-auto'>
        <div className='bg-1 flex justify-center items-center'>
          <img src={G3} alt='c_3_full' className='w-28' />
          <div className='p-6'>
            <span className='text-sm font-semibold rounded'>
              With NoBill, customers can contribute to a sustainable, paperless ecosystem by
              reducing their carbon footprints, and this supports the
            </span>
          </div>
        </div>
        <img className='w-full' src={G4}></img>
        <p className='text-center text-sm m-6'>
          At NoBill, <span className='text-green font-medium'>Sean and Nitin</span> are proud of
          what they've accomplished so far, and they're excited to see the positiveAt NoBill, Sean
          and Nitin are proud of what they've effects their innovative solution will have on the
          world for years to come.
        </p>
        <p className='text-center text-lg'>
          say<span className='text-5xl italic'>GoodBye</span>
        </p>
        <p className='text-center italic text-base'>to paper bills and join the</p>
        <p className='text-5xl text-center text-green italic'>Revolution</p>
        <p className='text-base text-center mb-6'>
          with <span className='italic'>NoBill!</span>
        </p>
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
