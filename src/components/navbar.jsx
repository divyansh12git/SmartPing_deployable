import React from 'react'

function NavBar() {
  return (
    <nav className='w-full flex  my-5'>
    <div className=' w-[70%] ml-auto'>
        <ul className='flex flex-row gap-10  ml-20 text-[#4285F4] items-center justify-between w-[80%]  '>

            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Home</li>
            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Chat</li>
            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Health</li>
            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Traffic</li>
            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Image Analyzer</li>
            <li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>About Us</li>
            
        </ul>
    </div>
        
    </nav>
  )
}

export default NavBar