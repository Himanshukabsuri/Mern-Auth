import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors({credentials:true}))
app.use(cookieParser());
connectDB()

app.get('/',(req,res)=>{
    res.send("Server is live")
})

app.listen(PORT,()=>{
    console.log(`Server start on :${PORT}`)
})

