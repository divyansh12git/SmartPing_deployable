import express from "express";

const app=express();
const PORT=4000;


const data={
    response:"server",
    hi:"bro"
}

app.get('/',(req,res)=>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} `)
})