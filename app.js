import express from 'express'

const app = express()
const port = 7000

app.get("/",(req,res)=>{
    res.send("miao")
})

app.listen(port, function(){
    console.log("il server è in ascolto sulla porta" + port)
})