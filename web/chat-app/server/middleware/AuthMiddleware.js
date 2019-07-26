const jwt = require('jsonwebtoken');

class AuthMiddleWare {
    checkToken(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded= jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
        } catch {
            return res.status(401).json({
                message: 'auth failed'
            });
        }
    }
}

export default AuthMiddleWare;