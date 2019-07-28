const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            req.userData = decoded;
            console.log(decoded);
            next();
        }
    });
}

module.exports = checkToken;