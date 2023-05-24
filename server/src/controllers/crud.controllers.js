const pool = require("../db/index");

// const getPrueba = async (req, res) => {
//   res.send("prueba segura");
// };

// const crearProducto = (req, res) => {
//     const producto = req.body;
//     console.log(producto)
//     res.send("creando un producto");
//   };


//muestra todos los productos
const getTodosLosProductos= async (req, res, next) => {
  try {
  const todosLosProductos = await pool.query ('SELECT * FROM producto')
  res.json(todosLosProductos.rows)
  res.status(200).send(todosLosProductos)
 } catch (error) {
  next(error);
 }
};


//postCrearProducto
const crearProducto = async (req, res, next)  => {
  const { name, sku, img, img1, img2, img3, description, price, category,outstanding, model } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO producto(name, sku, img, img1, img2, img3, description, price, category, outstanding, model) VALUES($1, $2, $3,$4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [name,sku, img, img1, img2, img3, description, price, category, outstanding, model]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
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
const modificarProducto = async (req, res, next) => {
  try {
    const {id} = req.params;
    const { name, sku, img, img1, img2, img3, description, price, category,outstanding, model} = req.body;
    const result = await pool.query(
      "UPDATE producto SET name =$1, sku=$2, img=$3, img1=$4, img2=$5, img3=$6, description = $7, price=$8, category=$9, outstanding =$10, model=$11 WHERE id = $12  RETURNING *",
      [name, sku, img, img1, img2, img3, description, price,category,outstanding,model, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};




//eliminarProducto
const eliminarProducto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE  FROM producto WHERE id = $1", [
      id,
    ]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};




module.exports = {

  crearProducto,
  getTodosLosProductos,
  getUnProducto,
  eliminarProducto,
  modificarProducto
};
