import express from "express"

let app = express()

let PORT = 1998

app.listen(PORT, ()=>{
    console.log(`server is running on port http://localhost:${PORT}`)
})

app.get("/", (req,res)=>{
    res.send("Hello this is the root of our project.")
})