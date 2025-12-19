import express from 'express'
import ArticlesRouter from './routers/articoli.js'
const app = express()
const port = 7000

app.get("/",(req,res)=>{
    res.send("miao")
})

app.use("/articoli",ArticlesRouter)
 
app.listen(port, function(){
    console.log("il server è in ascolto sulla porta" + port)
})
