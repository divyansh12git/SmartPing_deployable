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
    console.log(userInput);
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


  }
  const handleInput=(e)=>{
    setUserInput(e.target.value);
    // console.log(e.target.value)
  }
  return (
    <>
      <NavBar />
      <div className='h-[80vh] w-full  flex flex-col justify-center items-center gap-5'>
      <div className="h-[60vh] w-[60vw]  flex flex-col justify-end rounded-xl border border-black overflow-auto py-5" id='chat' ref={myRef}>
        
        {/* <div className='h-52 w-96 mx-5 self-end  my-5 bg-[#4285F4] border border-black rounded-xl'>
          123
        </div>
        <div className='h-52 w-96 mx-5 self-start  my-5 bg-white border border-black rounded-xl'>

        </div> */}
        {/* <div style={{backgroundColor:"red"}}>4545</div> */}
      </div>
      <form className="flex gap-5" onSubmit={(e)=>{handleChat(e)}} action='' method="POST">
        <input onChange={handleInput} value={userInput} className="w-[50vw] h-14  rounded-full border border-black text-xl px-6" name='textInput' placeholder='Type your query here...'></input>
        <button  type='submit' className="w-[9vw] h-14 bg-[#4285F4] rounded-full border border-black text-xl text-white">SEND</button>
      </form>
      </div>

    </>
  )
}

export default Chat;