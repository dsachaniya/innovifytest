
const router = require('express').Router();
const UserController = require(APP_CONTROLLER_PATH + 'user');
let userController = new UserController();

router.get('/search', userController.getUserByFirstName);
router.get('/:id/getSingle', userController.get);
router.put('/:id/update', userController.update);
router.delete('/:id/delete', userController.remove);

router.post('/create', userController.create);

module.exports = router;
