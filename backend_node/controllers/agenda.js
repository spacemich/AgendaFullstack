import { db } from "../db.js";

export const getAgendas = (_, res) => {
  const q = "SELECT * FROM agenda ORDER BY nome";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addAgenda = (req, res) => {
  const q = "INSERT INTO agenda (`nome`, `endereco`,`telefone`,`email`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.telefone,
    req.body.email,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Registro criado com sucesso");
  });
};

export const updateAgenda = (req, res) => {
  const q = "UPDATE agenda SET `nome` = ?, `endereco` = ?, `telefone = ?, `email` = ? WHEREE `codigo` = ?";

  const values = [
    req.body.nome,
    req.body.endereco,
    req.body.telefone,
    req.body.email,
  ];

  db.query(q, [...values, req.params.codigo], (err) => {
    if (err) return res.jason(err);
    return res.status(200).json("Registro atualizado com sucesso");
  });
};

export const deleteAgenda = (req, res) => {
  const q = "DELETE FROM agenda WHERE `codigo` = ?";

  db.query(q, [req.params.codigo], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro deletado com sucesso");
  });
};