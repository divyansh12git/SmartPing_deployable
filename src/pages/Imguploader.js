import {useState} from 'react'
import './Imguploader.css'
import { MdCloudUpload, MdDelete }from 'react-icons/md' 
import { AiFillFileImage, AiFillImage } from 'react-icons/ai'
function Imguploader() {
    const [image, setImage]=useState(null)
    const [fileName, setFileName]=useState("No selected file")
  return (
    <main>
    <form action="" className='imageAnalyzerform' onClick={() =>document.querySelector(".input-field").click()}>
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({ target: {files}}) => {files[0] && setFileName(files[0].name)
        if(files){
            setImage(URL.createObjectURL(files[0]))
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
    <section className='uploaded-row'>
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

export default Imguploader
