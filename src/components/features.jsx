import React from 'react'

const Features = (props) => {
  return (
    <div>
      <div className='flex flex-row gap-20'>
    <img src={props.image_url}  alt='chat' className={`${props.size} ml-28 mt-5`}/>
    <div className='flex flex-col gap-10'>
      <h1 className={`text-4xl font-medium  mt-24 ${props.tcolor} font-["Inter"]`}>{props.heading}</h1>
      <p className='w-[70%]'>{props.body}
      </p>
      <div className='flex flex-row gap-5'>
      <button className={`${props.t_color} text-white text-lg font-medium px-4 py-2 rounded-full w-32`}>Test</button>
      <img src='/images/arrow.jpg'  alt='chat' className=' w-5 h-5 my-3 '/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Features