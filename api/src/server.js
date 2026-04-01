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