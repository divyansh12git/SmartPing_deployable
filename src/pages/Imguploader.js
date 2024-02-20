import {useState} from 'react'
import './Imguploader.css'
import { MdCloudUpload, MdDelete }from 'react-icons/md' 
import { AiFillFileImage, AiFillImage } from 'react-icons/ai'
import NavBar from '../components/navbar'
import {sentToGeminiVision} from '../components/api'
function Imguploader() {
    const [image, setImage]=useState(null);
    const [fileName, setFileName]=useState("No selected file");
    const [userInput,setUserInput]=useState("")
    const sendImage=async(file)=>{
        const prompt=userInput;
        const filedata=image;
        setFileName("No selected file");
        setImage(null)
        setUserInput("")
        
        // console.log(prompt);
        // console.log(image);
        const response=await sentToGeminiVision(filedata,prompt);
        // const response=sendImage(image);
    }

  return (
    <main className='flex flex-col items-center '>
    <NavBar tcolor={"text-[#FABB05]"}/>
    <form action="" className='imageAnalyzerform' onClick={() =>document.querySelector(".input-field").click()}>
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({ target: {files}}) => {files[0] && setFileName(files[0].name)
        if(files){
            setImage(URL.createObjectURL(files[0]));
            
            // console.log(image);
        }
        }}/>
        {image ?
        <img src={image} width={200} height={160} alt={fileName}/>
        :
        <>
        <MdCloudUpload color='black' size={60}></MdCloudUpload>
        <p>Browse Files To Upload</p>
        </>
        }
    </form>
    <div className="flex gap-5">
        
        <input onChange={(e)=>{setUserInput(e.target.value)}} value={userInput} className="w-[40vw] h-14 mt-4 rounded-full border border-black text-xl px-6" name='textInput' placeholder='What the image is about...'></input>
        <button onClick={()=>{sendImage()}}  className="w-[9vw] h-14 mt-4 bg-[#4285F4] rounded-full border border-black text-xl text-white">SEND</button>
      </div>
    <section className='uploaded-row w-[49%] border border-black'>
        <AiFillFileImage color='black'></AiFillFileImage>
        <span className='upload-content'>
            {fileName}
            <MdDelete onClick={()=>{
                setFileName("No selected File")
                setImage(null)
            }}></MdDelete>
        </span>
    </section>
    </main>
  )
}

export default Imguploader;
