import mysql from "mysql2/promise"

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "intern_school_ms"
})

console.log("Connected to MySQL successfully")

export default db;