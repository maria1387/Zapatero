const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
  getPrueba
} = require('../controllers/auth')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const { verifyToken } = require('../middlewares/verifyToken')
const forgotPassword = require('../controllers/password')
const router = Router()

router.get('/get-users', getUsers)
router.get('/prueba', getPrueba, verifyToken)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login )
router.get('/logout', logout)
router.get('/forgotpassword', forgotPassword)
module.exports = router
