import express from "express";

const app = express();
const PORT = 1998;

app.use(express.json());

let students = [
  { id: 1, name: "Aime Kelvin", age: 19, grade: 12 },
  { id: 2, name: "Cyusa Rugwiro", age: 19, grade: 12 },
  { id: 3, name: "Imena Ben", age: 19, grade: 12 },
];


app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.post("/add-students", (req, res) => {
  const { name, age, grade } = req.body;


  if (!name || !age || !grade) {
    return res.status(400).json({ message: "name, age, and grade are required" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    age,
    grade,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.put("/student/:id", (req,res)=>{
  const id = parseInt(req.params.id)
  students = students.map(s => s.id ===  id ? {...s, ...req.body} : s)
  
})

app.get("/student/:id", (req,res)=>{
    let {id} = req.params.id
    const student = students.find( s => s.id === parseInt(id))
    res.json(student).status(200)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});