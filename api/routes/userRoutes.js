'use strict';

module.exports = function (app) {
    const userController = require('../controllers/usersController');

    //Users Routes
    app.route('/users/')
        .get(userController.allUserList)
        .post(userController.createUser);


    app.route('/users/:userId')
        .get(userController.viewUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
};
