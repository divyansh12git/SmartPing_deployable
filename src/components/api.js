import axios from "axios";
import removeMarkdown from "markdown-to-text";


const sendToGemini=async(data)=>{
    console.log("Sending data to gemii");
    data={
        userInput:data
    }
    let response=await axios.post("http://localhost:4000/chatbot",data,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(response=>{
            const data=response.data.botResponse;
        // console.log(response);
        return data
    }).catch(e=>{
        console.log(e);
    })
    // console.log(response)
    return response;
}


const sentToGeminiVision=async(datafile,promptdata)=>{
    console.log("Sending to gemini vision pro");
    const data={
        prompt:promptdata,
        file:datafile
    }
    let response=await axios.post("http://localhost:4000/imageprompt",data,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(response=>{
            const data=response.data.botResponse;
        // console.log(response);
        return data;
    }).catch(e=>{
        console.log(e);
    })
    // console.log(response)
    return response;
}

const getHealthTip=async()=>{
    let response=await axios.get("http://localhost:4000/getgeminicontent")
    console.log(response);
    return response;
}

const getPersonalizedResponse=async()=>{
    let response=await axios.get("http://localhost:4000/getgeminipersonalized")
    // await removeMarkdown(response);
    console.log(response);
    return response;
}

export {sendToGemini,sentToGeminiVision,getHealthTip,getPersonalizedResponse};

