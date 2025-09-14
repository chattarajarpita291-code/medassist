import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';


dotenv.config();
const app =express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse form submissions
app.use(cors({
  origin: "http://localhost:5173", // your React app URL (change if different)
  credentials: true                 // allow cookies and auth headers
}));
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

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password });
  const sql = "SELECT * FROM login WHERE email = ?";
  
  db.get(sql, [email], (err, row) => {
    if (err) {
    console.error("DB error:", err);
      return res.json({ Error: "Database error" });
    }
     console.log("DB row result:", row);
    if (!row) {
      return res.json({ Error: "User not found" });
    }

    // Compare hashed password
    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        console.error("Bcrypt error:", err);
        return res.json({ Error: "Error comparing passwords" });
      }
      if (!result) {

        return res.json({ Error: "Invalid credentials" });
      }
      
      
      const SECRET = process.env.JWT_SECRET
      // If password matches, generate token
      const token = jwt.sign(
        { id: row.id, name: row.name, email: row.email },
        SECRET, // 🔐 Use env var in production
        { expiresIn: "1h" }
      );

      // Send token in cookie
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000,
      });

      return res.json({ Status: "Success", token });
    });
  });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
