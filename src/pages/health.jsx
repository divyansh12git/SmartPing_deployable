import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar';
import HealthUpdate from '../components/healthUpdate';
import axios from 'axios';
import { sendToGemini } from '../components/api';


function Health() {
  
  
  

useEffect(() => {
  async function newsCall() {
    await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4d05b0dfd65941378b63439974a609b5")
    .then((res)=>{
      const data=res.data.articles;
      // articleSetter(articles);
      localStorage.setItem('news',JSON.stringify(data));
      // console.log(res.data.articles)
    }).catch((err)=>{
      console.log(err)
    })
    
}
newsCall();
  // console.log(data);
},[])

let [res,setRes]=useState("");

const handleChat=async(event)=>{
  event.preventDefault();
  const data=userInput;
  // console.log(userInput);
  const responseData=await sendToGemini(data);
  // console.log(responseData);
  setRes(responseData);
  
  

}

const [userInput,setUserInput]=useState("");

const handleInput=(e)=>{
  setUserInput(e.target.value);
  // console.log(e.target.value)
}

let [hiddenValue,setHid]=useState("hidden");

  return (
    <div >
      <NavBar tcolor={"text-[#E94235]"}/>
      <div className=" flex flex-col gap-10 mx-80">
      <form  onSubmit={(e)=>{handleChat(e)}}  method="POST">
      <div className="flex gap-5 my-10">
        
        <input onChange={handleInput} value={userInput} className="w-[50vw] h-14  rounded-full border border-black text-xl px-6" name='textInput' placeholder='Type Disease to enquire about here...'></input>
        <button  type='submit' onClick={()=>{setHid("visible")}} className="w-[9vw] h-14 bg-[#E94235] rounded-full border border-black text-xl text-white">SEND</button>
      </div>
      </form>
      <div className={`border-2 border-solid rounded-md  w-[100%] h-[70vh] px-5 py-2 bg-[#F2F3F9] mr-20 overflow-auto  ${hiddenValue}`}>
        <p>{res}</p>
      </div>
      </div>
      <div>
        <h2 className='text-[#E94235] text-4xl font-medium mt-16 mb-10 mx-20'>Health Updates...</h2>
      </div>
      <div className="flex flex-col gap-5 mx-80 items-center">
      <HealthUpdate/>
      <HealthUpdate/>
      <HealthUpdate/>
      <HealthUpdate/>
      </div>
    </div>
  )
}

export default Health;