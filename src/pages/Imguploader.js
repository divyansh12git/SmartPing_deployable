import {useState} from 'react';
import './Imguploader.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'; 
import { AiFillFileImage } from 'react-icons/ai';
import NavBar from '../components/navbar';

function Imguploader() {
    const [image, setImage]=useState(null);
    const [fileName, setFileName]=useState("No selected file")
  return (

    <main className="w-full h-[80vh] flex flex-col justify-center items-center">
    <NavBar tcolor={"text-[#FABB05]"}/>
    <form action="" onClick={() =>document.querySelector(".input-field").click()} className='analyzerForm'>
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
