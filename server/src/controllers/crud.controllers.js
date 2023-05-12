const pool = require("../database/db");

const getPrueba = async (req, res) => {
  res.send("prueba segura");
};

// const crearProducto = (req, res) => {
//     const producto = req.body;
//     console.log(producto)
//     res.send("creando un producto");
//   };


//muestra todos los productos
const getTodosLosProductos= async (req, res) => {
 try {
  const todosLosProductos = await pool.query ('SELECT * FROM producto')
  res.json(todosLosProductos.rows)
 } catch (error) {
  next(error);
 }
};


//postCrearProducto
const crearProducto = async (req, res) => {
  const { modelo, categoria, talla, precio } = req.body;
  try {
    const result = await pool.query(
      "insert into producto( modelo, categoria, talla, precio) values ($1, $2, $3, $4) returning *",
      [ modelo, categoria, talla, precio]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.json({error:error.message});
  }
};

//getUnProducto
const getUnProducto = async (req, res) => {
try {
  const {id} = req.params;
  const result = await pool.query('SELECT * FROM producto WHERE id = $1', [id])
  
  if (result.rows.length === 0) 
  return res.status(404).json({
    message: 'Producto not found',
  });
  res.json(result.rows[0]);
} catch (error) {
  next(error);
}

};



//modificarProducto
const modificarProducto = async (req, res) => {
  const {id} = req.params;
  const {modelo, categoria, talla, precio } = req.body;
  const result = await pool.query('UPDATE producto SET modelo =$1, categoria =$2, talla =$3, precio =$4 WHERE id = $4',
  [ modelo, categoria, talla, precio]
  );
  console.log(result)

  return res.json(result.rows[0])
  if(result.rows.length === 0)
return res.status(404).json({
  message: 'Producto not found'});
};

//eliminarProducto
const eliminarProducto = async (req, res) => {
const {id} = req.params;
const result = await pool.query('DELETE FROM producto WHERE id = $1', [id])
if(result.rowCount === 0)
return res.status(404).json({message: 'Producto not found'});
return result. sendStatus(204);

}




module.exports = {
  getPrueba,
  crearProducto,
  getTodosLosProductos,
  getUnProducto,
  eliminarProducto,
  modificarProducto
};
