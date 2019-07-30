const jwt       = require('jsonwebtoken');
const Common    = require('../../Common');

function checkToken(req, res, next) {
    const prefix = req.headers.authorization.split(' ')[0];
    const token = req.headers.authorization.split(' ')[1];

    if (prefix === Common.PRE_TOKEN) {
        jwt.verify(token, Common.JWT_KEY, (err, decoded) => {
            if (err) {
                return res.status(Common.STATUS_NOT_FOUND).json({
                    error: err
                });
            } else {
                req.userData = decoded;
                console.log(decoded);
                next();
            }
        });
    } else {
        return res.status(Common.STATUS_NOT_FOUND).json({
            error: Common.PRE_TOKEN_FAIL_MESS
        });
    }
}

module.exports = checkToken;