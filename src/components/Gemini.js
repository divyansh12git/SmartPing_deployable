import React from 'react';

function Gemini(props) {
  return (
    <div className=" flex justify-center group cursor-pointer absolute right-10  w-[20rem] h-[28rem] items-center p-3 mb-5 rounded-md bg-white border border-gray" style={{ border: '1px solid grey' }}>
      
        
        <p>{props.greet}</p>
      </div>
    
  );
}

export default Gemini;
