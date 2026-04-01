import db from "../config/db.js"
import subjectRoutes from "../routes/subject.routes.js"

let addSubject = async (req, res) => {
    
    try {
     
        const { subject, credit } = req.body;

        const sql = "INSERT INTO subject (subject_name, credit) VALUES (?, ?)";

        const [result] = await db.query(sql, [subject, credit]);

        res.json({
            message: "Subject added successfully",
            id: result.insertId
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

let getAllSubjects = (req, res) => async (req, res) => {
    let sql = "SELECT * FROM subject"
    const [ result ] = await  db.query(sql)
    console.log(db.query(sql))
     res.json({id: result}).status(200);

}


let getSubjectById = async (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM subject WHERE subject_id =  ?";
  const [result] = await db.query(sql, [id]); // <-- wrap id in array

  res.status(200).json(result); // <-- status first, then json
}

let deleteSubjectById = async (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "DELETE FROM subject WHERE subject_id =  ?";
  const [result] = await db.query(sql, [id]); // <-- wrap id in array

  res.status(200).json(result); 
}

let updateSubjectById = async (req, res) => {
  const { subject_name, credit } = req.body;
  const id = parseInt(req.params.id);

  const [result] = await db.query(
    "UPDATE subject SET subject_name = ?, credit = ? WHERE subject_id = ?",
    [subject_name, credit, id]
  );

  res.status(200).json(result);
};

export {addSubject,getAllSubjects, getSubjectById, deleteSubjectById, updateSubjectById}