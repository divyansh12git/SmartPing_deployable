import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function NavBar(props) {
  //let color=props.tcolor;
  let navigate = useNavigate();
  const logoutHandler=async()=>{
    await axios.get('http://localhost:4000/logout')
    .then((res)=>{
      console.log(res.data);
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <nav className='w-full flex  my-5'>
    <div className=' w-[100%] flex flex-row gap-52'>
    <img src='/images/logo.png' alt='logo'  className='self-center  h-20 rounded-full ml-10 mr-10'/>


        <ul className={`flex flex-row gap-1  ml-10 ${props.tcolor} items-center justify-around w-[70%]  `}>
            <Link to='/home'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Home</li></Link>
            <Link to='/chat'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Chat</li></Link>
            <Link to='/health'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Health</li></Link>
            <Link to='/traffic'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Traffic</li></Link>
            <Link to='/Imguploader'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>Image Analyzer</li></Link>
            <Link to='/aboutUs'><li className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full'>About Us</li></Link>
            <button onClick={logoutHandler} className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full border-solid border-2 text-white bg-[#4285F4]' >LogOut</button>
        </ul>
    </div>
        
    </nav>
  )
}

export default NavBar