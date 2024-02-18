import   {GoogleGenerativeAI} from "@google/generative-ai" ;
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);




export default ChatBot;