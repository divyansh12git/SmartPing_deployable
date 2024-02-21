import React from 'react';

function Gemini(props) {
  return (
    <div className=" overflow-auto pb-5 flex justify-center pt-10 group  absolute right-10  w-[20rem] h-[28rem]  p-3 mb-5 rounded-md bg-white border border-gray" style={{ border: '1px solid grey' }}>
      
        
        <p className='text-md'>{props.greet}</p>
      </div>
    
  );
}

export default Gemini;
