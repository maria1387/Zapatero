const {Router} = require('express');
const pool = require('../database/db');
const router = Router();
const {   getPrueba, crearProducto } = require('../controllers/crud.controllers')




router.get('/prueba',getPrueba )

//muestra todos los productos
// router.get('/productos',getTodosLosProductos )

//muestra un producto
// router.get('/productos',getUnProducto)

//crea un producto
router.post('/productos', crearProducto)

//modifica un producto
// router.put('/productos/:id', modificarProducto)

//elimina un producto
// router.delete('/productos/:id', eliminarProducto)

module.exports = router;