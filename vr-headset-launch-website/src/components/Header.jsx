import React from 'react'

const Header = () => {
  return (
    <>
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">VR Launch</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer"><a href="#home" className='text-white hover:text-gray-300'>Home</a></li>
            <li className="cursor-pointer"><a href="#features" className='text-white hover:text-gray-300'>Features</a></li>
            <li className="cursor-pointer"><a href="#pricing" className='text-white hover:text-gray-300'>Pricing</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header