const express =require("express")

const app=express();

app.get('/', (req,res)=>{
    res.send({message:"Api is working"})
})

app.listen(8000, ()=>{
    console.log(`listening on port 8000`)
})