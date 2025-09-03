import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app =express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const db= new sqlite3.Database('./signup.db',(err) =>{
    if(err){
        console.error("Error opening database:", err.message);
    }
    else {
        console.log("Connected to the database.");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});