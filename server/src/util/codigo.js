const pool = require('../db/index')
const format = require("pg-format");

//una función que realice una consulta SQL para obtener todos las joyas agregando la cláusula LIMIT (limits = 10,)
//http://localhost:8000/joyas?limits=3&page=2&order_by=stock_ASC






const getInventario = async ({ limits = 10, page = 1, order_by = 'id_ASC'}) => {
  const [ campo, direccion ] = order_by.split("_");
  const offset = (page - 1)  * limits;

  const query = format('SELECT * FROM inventory order by %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset);
  const { rows: inventario, rowCount } = await pool.query(query);
  
  if (rowCount === 0) {
    throw { code: 404, message: `No se encontraron resultados` };
  };

  return inventario;
};




const prepararHATEOAS = (inventario) => {
  const results = inventario.map((i) => {
    return {
      name: i.nombre,
      href: `inventario/inventario/${i.id}`,
    }
  });
  const totalInventario = inventario.length
  const totalStock =  inventario.reduce((total, j) => total + j.stock, 0);
  const HATEOAS = {
    totalInventario,
    totalStock,
    results
  }

  return HATEOAS;
};

module.exports = { getInventario, prepararHATEOAS};