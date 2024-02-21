import React from 'react';
import { FaRegLightbulb } from "react-icons/fa";

function Health(props) {
    return (
      <div className="flex absolute left-[-18rem] bottom-[3rem] group cursor-pointer justify-between w-[18rem] h-[19.5rem] items-center p-3 mb-2 rounded-md bg-white border border-gray" style={{ border: '1px solid grey' }}>
      <div>
            <h2 className='text-3xl mb-5'><FaRegLightbulb />Health Tip</h2>
            <p className='text-lg'>{props.tip}</p>
          </div>
        </div> 
      );         
}

export default Health