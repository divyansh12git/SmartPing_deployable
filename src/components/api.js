import axios from "axios";

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

export {sendToGemini,sentToGeminiVision};