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
import G8 from './images/Group_8.svg'
import G10 from './images/Group_10.svg'
import G11 from './images/Group_11.svg'
import './style.css'

function OurStory() {
  return (
    <div className='h-full'>
      <Header customer />
      <div className='md:max-w-7xl md:m-auto md:flex mb-4 md:mb-8 md:mt-10'>
        <span className='pl-6 text-2xl md:text-3xl font-bold'>About NOBILL</span>
      </div>
      <div className='pl-6'>
        <div className='md:max-w-7xl md:m-auto flex justify-center  bg-green/10 rounded-xl'>
          <img src={G6} className='flex-1 overflow-hidden' alt='home-bg' />
          <div className='md:w-1/2 flex-1 flex-col flex justify-center md:flex md:justify-center md:flex-col '>
            <p className='text-center'>
              <span className='text-xs md:text-2xl font-serif'>Say</span>
              <span className='text-2xl italic ml-1 md:text-7xl font-serif'>NO</span>
            </p>
            <p className='text-xs text-center font-serif md:text-3xl'>to Paper Receipts For</p>
            <p className='text-center text-5xl italic text-green md:text-9xl font-serif'>GOOD</p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='md:max-w-7xl md:m-auto'>
          <div className='px-6 md:pl-2 py-10'>
            <p className='text-2xl font-bold md:text-3xl mb-4'>Our Team</p>
            <p className='text-sm md:text-base'>
              In the payments industry, Sean Wang and Nitin Gupta saw an opportunity to bring their
              passion for technology to the forefront. Sean, a Technocrat, founded UAE's leading
              digital wallet, PayBy, which Astra Tech, a UAE-based technology and investment
              development group, later acquired. He served as the Founder and CTO of the company,
              while Nitin, a creator and innovator in the payments industry, headed the business and
              payments division.
            </p>
          </div>
          <div className='md:flex md:items-center'>
            <div className='p-6 flex md:gap-x-4 justify-center items-center md:flex-1 md:justify-start bg-green/5 md:bg-white'>
              <img src={G1} alt='' className='w-28' />
              <div>
                <p className='text-base font-bold'>Nitin Gupta</p>
                <p className='text-sm'>Founder & CEO</p>
                <p className='text-xs flex items-center'>
                  <span className='text-green font-medium text-xl h-8 mr-1 point'>&#8250;</span>
                  Previously - Co-founded Texcent
                </p>
                <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACTpRUUBcY_UG8RK-qb5V45Mm6VjKiTUKqo&keywords=sean%20wang&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=9116d73e-67da-4157-a9cd-324d029caebb&sid=_v*'>
                  <img src={G11} className='w-6 mt-4 cursor-pointer' alt='g_11' />
                </a>
              </div>
            </div>
            <div className='p-6 bg-green/5 md:gap-x-4 flex justify-center md:flex-row md:flex-1 md:justify-start items-center flex-row-reverse md:bg-white'>
              <img src={G2} alt='' className='w-28' />
              <div>
                <p className='text-base font-bold'>Sean Wang</p>
                <p className='text-sm'>Founder & CTO</p>
                <p className='text-xs flex items-center '>
                  <span className='text-green font-medium text-xl h-8 mr-1'>&#8250;</span>{' '}
                  Previously - Founder & CTO PayBy
                </p>
                <img src={G11} alt='g_11' className='w-6 mt-4' />
              </div>
            </div>
          </div>
          <div className='p-6 text-sm md:text-base'>
            However, their ambitions didn't stop there. These visionaries saw a problem with paper
            receipts and wanted to find a solution that would minimize waste and conserve natural
            resources.
          </div>
          <div className='md:flex'>
            <div className='p-6 flex-1 md:pl-0 flex items-center justify-center'>
              <img src={G7} alt='g7' className='w-2/3' />
            </div>
            <div className='text-sm p-6 flex-1 md:pl-0 self-center md:text-base'>
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
      <div className='md:max-w-7xl md:m-auto md:flex md:px-14 md:py-20 bg-[#19172E]'>
        <img src={G8} alt='g5' className='md:flex-1 hidden md:block md:max-w-xs' />
        <div className='px-6 py-10 md:self-center md:flex-1 bg-3'>
          <p className='text-2xl text-green font-bold md:text-5xl md:mb-6'>
            Our Innovation <br />
            and Determination
          </p>
          <p className='text-sm text-white md:text-base w-3/4'>
            With innovation and determination, NoBill is redefining paper receipts to reduce the
            negative impact on the environment. By offering smart receipts, they aim to create a
            more viable solution that minimizes waste and conserves natural resources. It is worth
            mentioning that the excessive use of non-recyclable thermal paper bills has a
            significant effect on the environment, including deforestation, water consumption, and
            oil use.
          </p>
        </div>
      </div>
      <div className='md:max-w-7xl md:m-auto'>
        <img src={G3} alt='c_3_full' className='w-full hidden md:block' />
        <img src={G10} alt='' className='md:hidden' />
        <img className='md:hidden' src={G4}></img>
        <p className='text-center text-sm m-6 md:text-lg md:w-2/4 md:mx-auto md:mt-9'>
          At NoBill, <span className='text-green font-medium'>Sean and Nitin</span> are proud of
          what they've accomplished so far, and they're excited to see the positive effects their
          innovative solution will have on the world for years to come.
        </p>
        <img src={G9} alt='g_9' className='w-2/3 md:w-1/3 mx-auto p-6' />
      </div>
      <br />
      <div className='px-6 py-10 bg-[#F4F3F5] '>
        <div className='md:max-w-7xl md:m-auto'>
          <br />
          <Footer isCustomer />
        </div>
      </div>
    </div>
  )
}

export default OurStory
