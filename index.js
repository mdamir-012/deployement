const express =require("express")
require("dotenv").config()
const app=express();

app.get('/', (req,res)=>{
    res.send({message:"Api is working"})
})
app.get('/test', (req,res)=>{
    res.send({message:"Api is working and secret code is -" +process.env.secret})
})

app.listen(8000, ()=>{
    console.log(`listening on port 8000`)
})