
import React from 'react'
import NavBar from '../components/navbar'
import Features from '../components/features';

function Home() {
  return (
    <div>
    <NavBar tcolor={"text-[#4285F4]"}/>
    <Features size='w-auto h-[30rem] my-5 mr-2' tcolor="text-[#4285F4]" image_url='/images/chat.jpg' heading='Ask Your Doubts?' reverse='false' t_color='bg-[#4285F4]'  body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[30rem] my-5 mr-2' tcolor="text-[#099884]" image_url='/images/map.jpg' heading='Get Fastest Route' reverse='true' t_color='bg-[#099884]'  body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[25rem] my-5 mr-2' tcolor="text-[#E94235]" image_url='/images/health.jpg' heading='Health Updates' reverse='false' t_color='bg-[#E94235]'  body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[20rem] my-5 mr-2' tcolor="text-[#FABB05]" image_url='/images/anal.jpg' heading='Analyze Image' reverse='true' t_color='bg-[#FABB05]'  body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>

    </div>
  )
}

export default Home;