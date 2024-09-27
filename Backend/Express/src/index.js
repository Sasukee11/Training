const express = require("express");
const app = express();
const db = require("./db.js");

//list
app.use(express.json());
app.get("/", async (req, res) => {
  const selectUsersQuery = "SELECT * FROM users;";

  const results = (await db.query(selectUsersQuery))[0];
  res.json(results);
});

//add

app.post("/", async (req, res) => {
  const { id, name, email, password, phone, status = "ACTIVE" } = req.body;
  const postUserQuery = `INSERT INTO users (id, name,email,password,phone,status)
VALUES ('${id}','${name}','${email}','${password}','${phone}','${status}');`;
  await db.query(postUserQuery);
  res.sendStatus(200);
});
app.listen(3000, () => {
  console.log("Server Started");
});

//update

app.put("/", async (req, res) => {
  const { id, name, email, password, phone, status = "ACTIVE" } = req.body;
  const updateUserQuery = `UPDATE users
SET name = '${name}', email = '${email}', password = '${password}',phone = '${phone}' , status = '${status}' 
WHERE id = '${id}';`;

  await db.query(updateUserQuery);

  res.sendStatus(200);
});

//delete

app.delete("/", async (req, res) => {
  const { id } = req.body;
  const deleteUserQuery = `DELETE FROM users WHERE id = '${id}'`;
  await db.query(deleteUserQuery);
  res.sendStatus(200);
});
