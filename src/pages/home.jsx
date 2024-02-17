
import React from 'react'
import NavBar from '../components/navbar'
import Features from '../components/features';
import Foot from '../components/foot';

function Home() {
  return (
    <div>
    <NavBar tcolor={"text-[#4285F4]"}/>
    <Features size='w-auto h-[30rem] mt-5 mr-2' tcolor="text-[#4285F4]" image_url='/images/chat.jpg' heading='Ask Your Doubts?' reverse='flex flex-row gap-20 justify-center' t_color='bg-[#4285F4]' redirect='chat' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[30rem] my-5 mr-2' tcolor="text-[#099884]" image_url='/images/map.jpg' heading='Get Fastest Route' reverse='flex flex-row-reverse  justify-center my-10  ' t_color='bg-[#099884]' redirect='traffic' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[25rem] my-5 mr-2 ml-4' tcolor="text-[#E94235]" image_url='/images/health.jpg' heading='Health Updates' reverse='flex flex-row gap-20 justify-center my-10' t_color='bg-[#E94235]'  redirect='health' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Features size='w-auto h-[20rem] my-5 mr-2 self-center' tcolor="text-[#FABB05]" image_url='/images/anal.jpg' heading='Analyze Image' reverse='flex flex-row-reverse justify-center my-10 mt-20' t_color='bg-[#FABB05]'  redirect='imageAnalyzer' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quasi repellat doloremque numquam, facilis aspernatur ducimus officiis quam assumenda possimus vel fugit voluptatibus nemo praesentium, quidem fuga, hic autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi enim natus amet rem distinctio. Aliquam nemo quaerat pariatur, praesentium possimus veritatis deserunt vitae libero, enim totam unde, cum quam!'/>
    <Foot/>
    </div>
  )
}

export default Home;