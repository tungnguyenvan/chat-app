import Api from './Api'

class UserController {
    constructor() {
        // Constructor
    }

    login(userModel, successAction, failAction) {
        Api.post('user/login/', userModel)
            .then(result => {
                successAction(result);
            })
            .catch(error => {
                failAction(error);
            });
    }

    register(userModel, successAction, failAction) {
        Api.post('user/signup', userModel)
            .then(result => {
                successAction(result)
            })
            .catch(err => {
                failAction(err)
            });
    }
}
var userController = new UserController()
export default userController