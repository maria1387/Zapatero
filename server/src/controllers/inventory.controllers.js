const pool = require("../db");
// const { getInventario, prepararHATEOAS } = require('../util/codigo');
// leer toda las tareas
// const getAllInventory = async(req, res, next)=>{
//   try{
//  const queryString = req.query;
//    const inventario = await getInventario(queryString);
//    const HATEOAS = await prepararHATEOAS(inventario);
//    res.json(HATEOAS);
//   }catch (error){
//     next(error)
//   }
// };

const getAllInventory = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM inventory");
    // console.log(allTasks)
    // res.send('tareas')
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

//leer una tarea especifica
const getInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM inventory WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
//crear o agregar tarea
const createInventory = async (req, res, next) => {
  const { name, img, img1, img2, img3, description, price, categoria,destacado } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO inventory(name, img, img1, img2, img3, description, price, categoria, destacado) VALUES($1, $2, $3,$4, $5, $6, $7, $8, $9) RETURNING *",
      [name, img, img1, img2, img3, description, price, categoria, destacado]
    );

    res.json(result.rows[0]);
  } catch (error) {
    // // console.log(error.message);
    // res.json({error: error.message});
    next(error);
  }
};
//eliminar tarea
const deleteInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE  FROM inventory WHERE id = $1", [
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
//actualizar tarea
const updateInventory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, img, img1, img2, img3, description, price, categoria,destacado} = req.body;
    const result = await pool.query(
      "UPDATE inventory SET name = $1, img=$2,img1=$3, img2=$4, img3=$5, description = $6, price=$7, categoria=$8, destacado =$9 WHERE id = $10  RETURNING *",
      [name, img, img1, img2, img3, description, price,categoria,destacado, id]
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

module.exports = {
  getAllInventory,
  getInventory,
  createInventory,
  deleteInventory,
  updateInventory,
};
