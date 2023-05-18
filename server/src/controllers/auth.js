const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password, roles } = req.body;
  try {
    const hashedPassword = await hash(password, 10);

    await db.query(
      "insert into users(email,password, roles) values ($1 , $2, $3)",
      [email, hashedPassword, roles]
    );

    return res.status(201).json({
      success: true,
      message: "El registro fue exitoso",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
exports.validarRoles = async (req, res) => {
  const { email  } = req.body;

  try {
    const  prueba= await pool.query ('SELECT roles FROM users WHERE email')[email]
    res.json(prueba.rows)
   
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};



// exports.validarRoles = async (req, res) => {
//   const { email  } = req.body;

//   try {
//     const  prueba= await pool.query ('SELECT roles FROM users WHERE email')[email]
//     res.json(prueba.rows)
//     console.log (prueba)
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).json({
//       error: error.message,
//     });
//   }
// };

exports.login = async (req, res) => {
  let user = req.user;

  let payload = {
    id: user.user_id,
    email: user.email,
  };

  try {
    const token = await sign(payload, SECRET);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Iniciado sesión con éxito",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "información protegida",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Cerrar sesión con éxito",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
