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
  const { name, img, img1, img2, img3, description, price, categoria,destacado } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO inventory(name, img, img1, img2, img3, description, price, categoria, destacado) VALUES($1, $2, $3,$4, $5, $6, $7, $8, $9) RETURNING *",
      [name, img, img1, img2, img3, description, price, categoria, destacado]
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
  const { name, img, img1, img2, img3, description, price, categoria,destacado} = req.body;
  const result = await pool.query(
    "UPDATE inventory SET name = $1, img=$2,img1=$3, img2=$4, img3=$5, description = $6, price=$7, categoria=$8, destacado =$9 WHERE id = $10  RETURNING *",
    [name, img, img1, img2, img3, description, price,categoria,destacado, id]
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
