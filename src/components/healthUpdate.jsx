import React from 'react'

const HealthUpdate = () => {


    const num = Math.floor(Math.random() * 10);
    
    const data = JSON.parse(localStorage.getItem('news'));
    // console.log(data[num].title)
    const news = data[num];

    const newsHandler = () => {
        window.open(news.url, '_blank');
    }

  return (
    <div className='border-2 border-solid rounded-md w-[85vw] h-20 px-5 py-2 bg-[#F2F3F9]' onClick={newsHandler}>
        <p className='font-semibold'>{news.title}</p>
        <p className='text-sm'>{news.description}</p>
    </div>
  )
}

export default HealthUpdate