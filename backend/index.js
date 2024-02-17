import express from "express";
import   {GoogleGenerativeAI} from "@google/generative-ai" ;
import 'dotenv/config';


const app=express();
const PORT=4000;


const genAI = new GoogleGenerativeAI(process.env.API_KEY);


// console.log(process.env.GEMINI_API);

async function generateContentFromGemini() {
    const generationConfig = {
       
        // maxOutputTokens: 200,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
      };
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro",generationConfig});
  
    const prompt ="a short note on india";
    const { totalTokens } = await model.countTokens(prompt);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  async function chatBot() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    let chatHistory=[
      {
        role: "user",
        parts: "Hi, I am your bestfriend. ",
      },
      {
        role: "model",
        parts: "Yes, I am your bestfriend, tell me anything about yourself.",
      },
    ]
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
    const msg = "short note on taj mahal ";

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
   chatHistory.push(
    {
      role:"user",
      parts:msg
    },
    {
      role:"model",
      parts:text
    }
)
  console.log(chatHistory[3].parts);
}









const data={
    response:"server",
    hi:"bro"
}
app.get('/',(req,res)=>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});
