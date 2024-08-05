import mongoose from "mongoose";
import { DB_NAME } from "./constants";
// Connect to MongoDB

import express from "express"
const app=express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)        
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()