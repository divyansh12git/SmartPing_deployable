
import React from 'react'
import NavBar from '../components/navbar'
import Features from '../components/features';
import Foot from '../components/foot';

function Home() {
  return (
    <div>
    <NavBar tcolor={"text-[#4285F4]"}/>
    <Features size='w-auto h-[30rem] mt-5 mr-2' tcolor="text-[#4285F4]" image_url='/images/chat.jpg' heading='Ask Your Doubts?' reverse='flex flex-row gap-20 justify-center ' t_color='bg-[#4285F4]' redirect='chat' body=" SmartPing's Chatbot functionality provides on-demand assistance, addressing users  ' inquiries and doubts promptly. Harnessing natural language processing capabilities, the Chatbot swiftly addresses user inquiries, offering guidance, information, and troubleshooting assistance. Whether users seek directions, recommendations, This interactive feature ensures a personalized and efficient user experience, catering to diverse needs and preferences." />
    <Features size='w-auto h-[30rem] my-5 mr-2' tcolor="text-[#099884]" image_url='/images/map.jpg' heading='Get Fastest Route' reverse='flex flex-row-reverse  justify-center my-10  ' t_color='bg-[#099884]' redirect='traffic' body="SmartPing's Traffic Analyzer utilizes real-time data to identify the quickest routes, reducing congestion and expediting travel. By analyzing traffic patterns and road conditions, it guides users towards efficient pathways, minimizing delays and enhancing overall commuting experiences, ultimately facilitating smoother traffic flow and reducing congestion." />
    <Features size='w-auto h-[25rem] my-5 mr-2 ml-4' tcolor="text-[#E94235]" image_url='/images/health.jpg' heading='Health Updates' reverse='flex flex-row gap-20 justify-center my-10' t_color='bg-[#E94235]'  redirect='health' body=" SmartPing aims to streamline daily life by providing essential services and information at the fingertips of its users. One of its standout features is the Health Analysis page, offering a comprehensive overview of nearby medical resources such as pharmacies and hospitals, along with essential health precautions relevant to the user's location." />
    <Features size='w-auto h-[20rem] my-5 mr-2 self-center' tcolor="text-[#FABB05]" image_url='/images/anal.jpg' heading='Analyze Image' reverse='flex flex-row-reverse justify-center my-10 mt-20' t_color='bg-[#FABB05]'  redirect='imguploader' body="Image Analyzer feature leverages the Gemini API to analyze uploaded images, providing comprehensive details and information. By harnessing advanced image recognition technology, it identifies objects, landmarks, and even text within images, offering users relevant information such as location details, historical facts, or product identification. This innovative tool enhances users' understanding of their surroundings and facilitates effortless exploration. Whether seeking to learn more about a landmark or identify an unfamiliar object."/>
    <Foot/>
    </div>
  )
}

export default Home;