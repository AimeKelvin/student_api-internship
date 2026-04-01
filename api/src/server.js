import express from "express";
import db from "./config/db.js";
import subjectRoutes from "./routes/subject.routes.js"

const app = express();

app.use(express.json());

app.use(subjectRoutes);

app.listen(1998, () => {
    console.log(`Server running at http://localhost:1998`);
});