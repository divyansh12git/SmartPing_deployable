import React from 'react'
import { useNavigate } from 'react-router-dom'

const Features = (props) => {
  let navigate = useNavigate();
  const redirectHandler = () => {
    navigate(`/${props.redirect}`);
    // console.log("clicked")
  }
  return (
    <div>
      <div className={`${props.reverse} `}>
    <img src={props.image_url}  alt='chat' className={`${props.size}  mt-5`}/>
    <div className='flex flex-col gap-10 max-w-[45rem]'>
      <h1 className={`text-4xl font-medium  mt-24 ${props.tcolor} font-["Inter"]`}>{props.heading}</h1>
      <p className='w-[70%]'>{props.body}
      </p>
      <div className='flex flex-row gap-5'>
      <button className={`${props.t_color} text-white text-lg font-medium px-4 py-2 rounded-full w-32`} onClick={redirectHandler}>Test</button>
      <img src='/images/arrow.jpg'  alt='chat' className=' w-5 h-5 my-3 '/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Features