import React from 'react'
import NavBar from '../components/navbar';
import { useState,useRef } from 'react';

import { sendToGemini } from '../components/api';

function Chat() {

  const [userInput,setUserInput]=useState("");
  const myRef = useRef(null);



  const handleChat=async(event)=>{
    event.preventDefault();
    const data=userInput;
    // console.log(userInput);
    setUserInput("");
    let maindiv=document.createElement('div');
    maindiv.style.alignSelf="flex-end"
    const newElement = `
    <div class='messagediv'  >
    ${data}
    </div>`
    
    maindiv.innerHTML=newElement;
    myRef.current.appendChild(maindiv);

    const responseData=await sendToGemini(data);
    // console.log(responseData);
    let response=document.createElement('div');
    response.style.alignSelf="flex-start"
    const responseHTML = `
    <div  class="responsediv">
    ${responseData}
    </div>`
    response.innerHTML=responseHTML;
    myRef.current.appendChild(response)
    myRef.scrollTop = myRef.scrollHeight;

  }
  const handleInput=(e)=>{
    setUserInput(e.target.value);
    // console.log(e.target.value)
  }
  return (
    <>
      <NavBar tcolor={"text-[#4285F4]"}/>
      <div className='h-[80vh] w-full  flex flex-col justify-center items-center gap-5'>
      <div className='overflow-auto h-[60vh] w-[60vw] rounded-xl border border-black'>

      <div className=" flex justify-end flex-col " id='chat' ref={myRef}>
        {/* <div className='h-[500rem] w-20 bg-red-200'></div> */}
        
      </div>
      </div>
      <form  onSubmit={(e)=>{handleChat(e)}}  method="POST">
      <div className="flex gap-5">
        
        <input onChange={handleInput} value={userInput} className="w-[50vw] h-14  rounded-full border border-black text-xl px-6" name='textInput' placeholder='Type your query here...'></input>
        <button  type='submit' className="w-[9vw] h-14 bg-[#4285F4] rounded-full border border-black text-xl text-white">SEND</button>
      </div>
      </form>
      </div>

    </>
  )
}

export default Chat;