import { Link } from 'react-router-dom'
import NoBillLogo from './images/no-bill-logo.svg'

export function Header({ customer }: { customer: boolean }): JSX.Element {
  return (
    <div className='lg:border-b lg:border-dashed lg:border-gray-200'>
      <div className='flex items-center lg:px-4 py-5 lg:max-w-7xl lg:m-auto'>
        <Link to='/'>
          <img src={NoBillLogo} className='h-5' />
        </Link>
        <span className='ml-auto text-xs cursor-pointer'>
          {customer ? <Link to='/'>For Users</Link> : <Link to='/customer'>For Businesses</Link>}
        </span>
        <a
          href='https://b.nobill.io'
          className='link-sm'
        >
          Get a Demo
        </a>
      </div>
    </div>
  )
}
