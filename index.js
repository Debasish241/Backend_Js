require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
// const port = 3000

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
res.send("Hello world");
})


//get a list of 5 jokes
// app.get('/api/jokes',(req,res)=>{
//     const jokes=[
//         {
//             id: 1,
//             title: 'What do you call a country where the clock ticks on 12 noon?',
//             content: 'The 12-hour Clock'
//         },
//         {
//             id: 2,
//             title: 'Why did the chicken cross the road?',
//             content: 'To get to the other side!'
//         },
//         {
//             id: 3,
//             title: 'What do you call a farmer who sells his tomatoes?',
//             content: 'The fruit seller'
//         },
//         {
//             id: 4,
//             title: 'What did the ticklish baby say when it got a new pillow?',
//             content: 'What do you call it, Boo-Boo?'
//         }
//     ]
//     res.send(jokes)
// })


// app.get('/twitter',(req,res)=>{
//     res.send("Twitter API Endpoint");
// })

// app.get('/login',(req,res)=>{
//     res.send('<h1>please login</h1>')
// })


// app.get('/youtube',(req,res)=>{
// res.send("<h2>Hello word</h2>")
// })

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})