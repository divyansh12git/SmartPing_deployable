import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    let navigate = useNavigate();
    let refname = useRef();
    let refusername = useRef();
    let refpass = useRef();
    const formHandler=async(e)=>{
        e.preventDefault();
         
            let uname= refname.current.value
            let username= refusername.current.value
            let password= refpass.current.value
        // console.log(uname,username,pass)
        await axios.post('http://localhost:4000/signup', {uname,username,password})
        .then((res)=>{
            console.log(res.data);
            if(res.data.msg==='Successfully Registered'){
                navigate('/');
            }else{
                alert(res.data.message)
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
  return (
    <div >
    <nav className='w-full flex  my-5'>
<div className=' w-[100%] flex flex-row gap-80'>
<img src='/images/logo.png' alt='logo'  className='self-center  h-24 rounded-full ml-10 mr-10'/>
<h1 className='text-4xl font-bold text-gray min-w-fit self-center'> Welcome To SmartPing</h1>
<ul className={`flex flex-row gap-1  mr-16 text-gray items-center justify-end w-[70%]  `}>

   
    
</ul>
</div>

    </nav>
    <div className='flex flex-row   gap-36'>
    <img src='/images/login.png'  alt='' className='w-auto h-[35rem] mt-5 mx-20 self-start'/>
    <div className='border-solid border-2 w-96 flex flex-col items-center gap-16 font-["Inter"] p-10'>
        <h1 className='text-4xl font-medium  text-gray '>SignUp</h1>
    <form action='/signup' method='post' onSubmit={formHandler} className='text-xl font-medium flex text-gray flex-col items-center gap-2'>
    <label htmlFor="Name" >Name:</label>
        <input type="text" id="Name" ref={refname} name="Name" className='border-solid border-2 font-light rounded-lg py-1 px-3'/>
    <br/>
        <label htmlFor="username" >Username:</label>
        <input type="text" id="username" ref={refusername} name="username" className='border-solid border-2 font-light rounded-lg py-1 px-3'/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={refpass} name="password" className='border-solid border-2 font-light rounded-lg py-1 px-3'/>
        <br/>
        <button type="submit" className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full border-solid border-2 text-white bg-[#4285F4]' >SignUp</button>
        
    </form>
    </div>
    </div>
</div>
  )
}

export default Signup