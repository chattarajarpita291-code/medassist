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
         db.run(`CREATE TABLE IF NOT EXISTS login (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error("Error creating table:", err.message);
            } else {
                console.log("✅ Login table ready");
            }
        });
    }
});

app.get("/", (req, res) => {
    res.send("Backend server is running 🚀");
});

app.post('/register',(req,res) =>{
    const sql= "INSERT INTO login (name,email,password)VALUES (?,?,?)";
    bcrypt.hash(req.body.password.toString(),10,(err,hash) =>{
        if(err) return res.json({Error:"Error for hassing password"});
            const values = [
        req.body.name,
        req.body.email,
        hash
    ] 
    db.run(sql, values,function(err) { 
        if (err) return res.json({Error:"Inserting data Error in server"});
        return res.json({Status: "Success",InsertedID: this.lastID})
    })

})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
