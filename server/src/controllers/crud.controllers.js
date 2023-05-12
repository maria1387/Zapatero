const pool = require("../database/db");

const getPrueba = async (req, res) => {
  res.send("prueba segura");
};

// const crearProducto = (req, res) => {
//     const producto = req.body;
//     console.log(producto)
//     res.send("creando un producto");
//   };
// const getTodosLosProductos=
//getUnProducto
const crearProducto = async (req, res) => {
  const { id, modelo, categoria, talla, precio } = req.body;
  try {
    const result = await pool.query(
      "insert into producto(id, modelo, categoria, talla, precio) values ($1, $2, $3, $4, $5) returning *",
      [id, modelo, categoria, talla, precio]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.json({error:error.message});
  }
};

//modificarProducto
//eliminarProducto

module.exports = {
  getPrueba,
  crearProducto,
};
