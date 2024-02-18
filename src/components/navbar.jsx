import React from 'react'

function NavBar() {
  return (
    <nav className='w-full flex  my-5'>
    <div className=' w-[70%] ml-auto'>
        <ul className='flex flex-row gap-10  ml-20 text-[#4285F4] items-center justify-between w-[80%]  '>

            <a href='/'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Home</li></a>
            <a href='/chat'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Chat</li></a>
            <a href='/health'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Health</li></a>
            <a href='/traffic'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Traffic</li></a>
            <a href='/Imguploader'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Image Analyzer</li></a>
            <a href='/aboutUs'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>About Us</li></a>
            
        </ul>
    </div>
        
    </nav>
  )
}

export default NavBar