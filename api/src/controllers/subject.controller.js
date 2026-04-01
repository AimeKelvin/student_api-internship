import db from "../config/db.js"
import subjectRoutes from "../routes/subject.routes.js"

let addSubject = async (req, res) => {
    
    try {
     
        const { subject_name, credit } = req.body;

        const sql = "INSERT INTO subject (subject_name, credit) VALUES (?, ?)";

        const [result] = await db.query(sql, [subject_name, credit]);

        res.json({
            message: "Subject added successfully",
            id: result.insertId
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export {addSubject}