const {Router} = require('express');
// const pool = require('../db')
const { getAllInventory, getInventory, createInventory, deleteInventory, updateInventory } = require('../controllers/inventory.controllers')


const router = Router();
//obtener datos
router.get('/inventario', getAllInventory)
//obtener datou una persona
router.get('/inventario/:id', getInventory)
//crear datos
router.post('/inventario', createInventory)
//eliminar datos
router.delete('/inventario/:id', deleteInventory)
// actualizar datos 
router.put('/inventario/:id', updateInventory)
module.exports = router;