import React from 'react'
import NoBillLogo from './images/no-bill-logo.svg'

export function Header() {
  return (
    <div>
      <div className='flex items-center px-4 py-5'>
				<img src={NoBillLogo} className='h-5'/>
        <span className='ml-auto text-xs'>For Businesses</span>
        <span className='px-5 py-2 ml-2 text-xs text-white rounded-2xl bg-green'>Get a Demo</span>
      </div>
    </div>
  )
}
