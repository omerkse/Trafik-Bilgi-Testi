const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(process.cwd(), "public", "db", "cyber-heroes.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

module.exports = db;
