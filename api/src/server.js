import express from "express";
import db from "./config/db.js";
import subjectRoutes from "./routes/subject.routes.js"

const app = express();
const PORT = 1998;


app.use(express.json());


app.post("/subject", subjectRoutes);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


app.get("/subjects", async (req, res) => {
    let sql = "SELECT * FROM subject"
    const [ result ] = await  db.query(sql)
    console.log(db.query(sql))
     res.json({id: result}).status(200);

})

app.get("/subject/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM subject WHERE subject_id =  ?";
  const [result] = await db.query(sql, [id]); // <-- wrap id in array

  res.status(200).json(result); // <-- status first, then json
});
