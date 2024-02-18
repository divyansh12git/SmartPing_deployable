import express from "express";
  import   {GoogleGenerativeAI} from "@google/generative-ai" ;
import 'dotenv/config';
import cors from "cors";
import bodyParser from "body-parser";


const app=express();
const PORT=4000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
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

  const ChatBot=async(input)=> {
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
    
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
  const msg =input;
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
    );
    //console.log(chatHistory[3].parts);
    return text;
}

import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}
async function imageToInput() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Explain this picture?";

  const imageParts = [
    fileToGenerativePart(`abc.png`, "image/png"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
// imageToInput();



//firebase connection




app.post("/chatbot",async(req,res)=>{
  console.log(req.body);
  const output=await ChatBot(req.body.userInput);
  console.log(output);
  res.send({"botResponse":output});
});


const data={
    response:"server",
    directory:__dirname
}
app.get('/',(req,res)=>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});
