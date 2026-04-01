import express from "express";

const app = express();
const PORT = 1998;

app.use(express.json());

let USERS_DB = [
  { id: 1, username: "Aime Kelvin", age: 19, joinDate: "2026-05-02", email: "aimekelvin@gmail.com" },
  { id: 2, username: "Cyusa Rugwiro", age: 19, joinDate: "2024-06-01", email: "cyusa@gmail.com" },
  { id: 3, username: "Imena Ben", age: 19, joinDate: "2021-09-08" , email: "benimena@gmail.com"},
];


app.get("/v1/public-users", (req, res) => {
  const users = USERS_DB.map(
    ({ username, joinDate }) => {
    return { username, joinDate };
  });

  res.status(200).json(users);
});

app.get("/v2/public-users", (req, res) => {
  const sortedUsers = [...USERS_DB]
    .sort((a, b) => b.joinDate - a.joinDate);

  res.status(200).json(sortedUsers);
});





app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});