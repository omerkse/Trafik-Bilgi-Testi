const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(process.cwd(), "public", "db", "cyber-heroes.db");

// Her sorgu için yeni bağlantı açalım
export default async function handler(req, res) {
  if (req.method === "GET") {
    // Yeni bağlantı aç
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error("Database connection error:", err.message);
        res.status(500).json({ error: "Database connection failed" });
        return;
      }
    });

    db.all("SELECT * FROM questions", [], (err, rows) => {
      if (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: "Failed to fetch questions" });
        return;
      }

      const parsedRows = rows.map((row) => {
        let answers = [];
        try {
          if (typeof row.answers === "string") {
            answers = JSON.parse(row.answers);
          }
        } catch (error) {
          console.error(`Error parsing JSON for question ID ${row.id}:`, error);
        }

        return {
          id: row.id,
          question: row.question,
          point: row.point,
          correctAnswer: row.correctAnswer,
          answers: answers,
          image_path: row.image_path,
        };
      });

      // Bağlantıyı kapat
      db.close((err) => {
        if (err) {
          console.error("Error closing database:", err.message);
        }
      });

      res.status(200).json(parsedRows);
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
