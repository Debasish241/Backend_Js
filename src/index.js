// // require('dotenv').config({path: './env'})
// import dotenv from "dotenv";
// // import mongoose from "mongoose";
// // import { DB_NAME } from "./constants.js";
// import connectDB from "./db/index.js";

// dotenv.config({
//     path: './.env'
// });

// // Connect to MongoDB
// //---------------------------//
// // professional configurations

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000,()=>{
//         console.log(`Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err)=>{
//     console.log("MONGO db connection failed !!!",err)
// })




import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

const app = express(); // Initialize Express app

// Connect to MongoDB
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB connection failed!!!", err);
    process.exit(1); // Exit the process with failure
});










//--------------------------------------//
//basic configuration

/*import express from "express"

const app=express()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
    app.on('error',(error)=>{
        console.log("ERROR: Couldn't connect to MongoDB",error);
        throw error;
    })


    app.listen(process.env.PORT,()=>{
        console.log(`App listening on port ${process.env.PORT}`)
    })
    } catch (error) {
        console.error("ERROR: ",error)

        throw error
    }
})()*/