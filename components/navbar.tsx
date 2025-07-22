import React from 'react'
import Logo from './logo'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between fixed top-0 w-full z-90 bg-blue-600 p-2 text-white items-center '>
       <div className='flex-1 items-center justify-center '>
          <Logo/>
       </div>
        <Menu/>
    </div>
  )
}

export default Navbar