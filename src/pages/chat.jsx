import React from 'react'
import NavBar from '../components/navbar';




function Chat() {
  const handlechat=(event)=>{
    event.preventDefault();
    // console.log()
  }
  return (
    <>
      <NavBar tcolor={"text-[#4285F4]"}/>
      <div className='h-[89vh] w-full  flex flex-col justify-center items-center gap-5'>
      <div className="h-[60vh] w-[60vw]  rounded-xl border border-black "></div>
      <form className="flex gap-5" onSubmit={(e)=>{handlechat(e)}} action='http://localhost:4000/chatbot' method="POST">
        <input className="w-[50vw] h-14  rounded-full border border-black text-xl px-6" name='textInput' placeholder='Type your query here...'></input>
        <button type='submit' className="w-[9vw] h-14 bg-[#4285F4] rounded-full border border-black text-xl text-white">SEND</button>
      </form>
      </div>

    </>
  )
}

export default Chat;