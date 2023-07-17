import  express  from "express";
import Main from "../dist/index.html"

const app = express()

app.get("/", (req,res)=>{
    res.sendFile(Main)
})

app.listen(3000)