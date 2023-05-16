const {Router} = require('express');
// const pool = require('../db/index');
const router = Router();
const {   getPrueba, crearProducto,getTodosLosProductos, getUnProducto, modificarProducto, eliminarProducto } = require('../controllers/crud.controllers')




// router.get('/productos',getPrueba )

//muestra todos los productos
router.get('/productos', getTodosLosProductos )

//muestra un producto
router.get('/productos/:id',getUnProducto)

//crea un producto
router.post('/productos', crearProducto)

//modifica un producto
router.put('/productos/:id', modificarProducto)

//elimina un producto
router.delete('/productos/:id', eliminarProducto)

module.exports = router;