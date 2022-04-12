const Router = require('express').Router;
const router = new Router();
const UserController = require('../controllers/user.controller')


router.post('/registration', UserController.addUser)
router.post('/login')
router.post('/logout')
router.get('/users', UserController.getUsers)

module.exports = router
