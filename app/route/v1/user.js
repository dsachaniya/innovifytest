
const router = require('express').Router();
const UserController = require(APP_CONTROLLER_PATH + 'user');
let userController = new UserController();

router.get('/search', userController.getUserByFirstName);
router.get('/:id', userController.get);
router.put('/:id', userController.update);

router.post('/', userController.create);

module.exports = router;
