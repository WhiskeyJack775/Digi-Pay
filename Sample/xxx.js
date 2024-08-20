const express=require("express")
const app= express()


app.get("/hello",(req,res)=>{
    res.send("<h1>Hello!!!<\h1>")
})

app.get("/bye",(req,res)=>{
    res.send("<h1>Dengey!!!<\h1>")
})



app.use(express.json())
app.post("/request",(req,res)=>{
    if(req.body.username=="venkat1200556@gmail.com" && req.body.password=="Dai123"){
        res.status(200).json({
            Message: "User Found"
        })
    }
    else{
        res.status(404).json({
            Message: "User Not Found"
        })
    }
})

app.listen(3000,()=>{
    console.log("Listening ...")
})

