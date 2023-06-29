const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

const { config } = require("dotenv");
config();

const sgMail = require("@sendgrid/mail");
const crypto = require('crypto');
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

exports.getPrueba = async (req, res) => {
  const { email } = req.body;
  // console.log("este es el email", email)

  try {
    //const {rows} = await db.query('SELECT roles FROM users WHERE email = $1')[email]
    const { rows } = await db.query(
      `SELECT roles FROM users WHERE email ='${email}'`
    );
    console.log("este es el rol", rows);
    return res.status(200).json({
      success: true,
      roles: rows[0].roles,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

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

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log("cambiar ", email);

  try {
    // Verificar si el correo electrónico existe en la base de datos

    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "El correo electrónico no está registrado." });
    }
    const token = crypto.randomBytes(20).toString("hex");

    // Almacenar el token en la base de datos
    await db.query("UPDATE users SET reset_token = $1 WHERE email = $2", [
      token,
      email,
    ]);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Configurar el contenido del correo electrónico

    const mailOptions = {
      from: "mariapilar.abarca@gmail.com",
      to: email,
      subject: "Restablecimiento de contraseña",

      text: `Haga clic en el siguiente enlace para restablecer su contraseña: http://localhost:8001/reset-password?token=${token}`,
    };
    try {
      await sgMail.send(mailOptions);
      
     
console.log('Correo electrónico enviado');
      res.
     
json({ message: 'Se ha enviado un correo electrónico con las instrucciones para restablecer la contraseña.' });
    } catch (error) {
      
     
console.log(error);
      return res.status(500).json({ error: 'Error al enviar el correo electrónico.' });
    }
  
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Verificar si el correo electrónico existe en la base de datos
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "El correo electrónico no está registrado." });
    }

    // Restablecer la contraseña
    const newPasswordHash = crypto
      .createHash("sha256")
      .update(newPassword)
      .digest("hex");
    await pool.query("UPDATE users SET password = $1 WHERE email = $2", [
      newPasswordHash,
      email,
    ]);

    res.json({ message: "Se ha restablecido la contraseña correctamente." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
