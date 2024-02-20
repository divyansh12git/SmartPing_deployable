import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let refusername= useRef();
    let refpassword= useRef();

    let navigate = useNavigate();
    const signuphandler=()=>{
        navigate('/signup')
    }
     
   
    

    const loginHandler=async(e)=>{
        e.preventDefault();
        let username= refusername.current.value
        let password= refpassword.current.value
        await axios.post('http://localhost:4000/login', {username,password})
        .then(res=>{
            console.log(res);
            // navigate('/home');
            if(res.data.msg==="Successfully Logged In"){
                localStorage.setItem('user',JSON.stringify(res.data.user));
                
                navigate('/home');
            }else{
                alert("Invalid Username or Password");
            }
        })
        .catch(err=>{console.log(err)})
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
                <h1 className='text-4xl font-medium  text-gray '>LogIn</h1>
            <form action='/login' onSubmit={loginHandler} className='text-xl font-medium flex text-gray flex-col items-center gap-2'>
                <label htmlFor="username" >Username:</label>
                <input type="text" id="username" ref={refusername} name="username" className='border-solid border-2 font-light rounded-lg py-1 px-3'/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" ref={refpassword} name="password" className='border-solid border-2 font-light rounded-lg py-1 px-3'/>
                <br/>
                <button type="submit" className='hover:bg-gray-600 hover:text-white  px-4 py-1 rounded-full border-solid border-2 text-white bg-[#4285F4]' >LogIn</button>
                
                <p className='font-light text-sm mt-2'>Don't have an account? <Link to='/signup' className='text-[#4285F4]' onClick={signuphandler}>SignUp</Link></p>
            </form>
            </div>
            </div>
        </div>
    )
}


export default Login
