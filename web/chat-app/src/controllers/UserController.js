import Api from './Api'

class UserController {
    constructor() {
        // Constructor
    }

    login(userModel, successAction, failAction) {
        Api.post('user/login/', userModel)
            .then(result => {
                return successAction(result);
            })
            .catch(error => {
                return failAction(error);
            });
    }

    register(userModel, successAction, failAction) {
        Api.post('user/signup', userModel)
            .then(result => {
                return successAction(result)
            })
            .catch(err => {
                return failAction(err)
            });
    }

    get(userId, successAction, failAction) {
        Api.post('user/' + userId)
            .then(result => {
                return successAction(result)
            })
            .catch(err => {
                return failAction(err)
            })
    }
}

var userController = new UserController()
export default userController