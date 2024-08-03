require('dotenv').config()

const express = require('express')
const app = express()
const port = 65535

app.get('/',(req,res)=>{
res.send("Hello world");
})


app.get('/twitter',(req,res)=>{
    res.send("Twitter API Endpoint");
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})


app.get('/youtube',(req,res)=>{
res.send("<h2>Hello word</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})