import { Link } from 'react-router-dom'
import NoBillLogo from './images/no-bill-logo.svg'

export function Header() {
  return (
    <div className='lg:border-b lg:border-dashed lg:border-gray-200'>
      <div className='flex items-center px-4 py-5 lg:max-w-7xl lg:m-auto'>
				<Link to='/'><img src={NoBillLogo} className='h-5'/></Link>
        <span className='ml-auto text-xs'>For Businesses</span>
        <span className='px-5 py-2 ml-2 text-xs text-white rounded-2xl bg-green'>Get a Demo</span>
      </div>
    </div>
  )
}
