import sqlite3 from "sqlite3";
console.log("node+database connections");

const db = new sqlite3.Database("medi.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the database.");
    }
});

const createTableSql = `CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    PASSWORD TEXT UNIQUE NOT NULL
);`;

const insertUserSql = `INSERT INTO user (NAME, PASSWORD) VALUES (?, ?);`;
const dispsql = `SELECT * FROM user;`;
const data = [
    {
        name: "admin",
        password: "admin123"
    },
    {
        name: "user",
        password: "user123"
    },
    {
        name: "guest",
        password: "guest123"
    }
];

db.serialize(() => {
    db.run(createTableSql, (err) => {
        if (err) {
            console.log("Error creating table:", err.message);
        } else {
            console.log("Table created successfully:");
            // Insert each user from the data array
            data.forEach((user) => {
                db.run(insertUserSql, [user.name, user.password], (err) => {
                    if (err) {
                        console.log("Error inserting data:", err.message);
                    } else {
                        console.log("Data inserted successfully");
                    }
                });
            });
        }
    });
});

// Showing the data in the table
db.all(dispsql, [], (err, rows) => {
    if (err) {
        console.log("Error fetching data:", err.message);
    } else {
        console.log("Data in the table:", rows);
    }
});
