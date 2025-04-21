import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mich123", 
  port: "3305",
  database: "bd_agenda",
});
