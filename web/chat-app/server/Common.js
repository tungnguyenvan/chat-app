module.exports = Object.freeze({
    // PORT
    SERSER_PORT: 3001,
    DATABASE_URL: 'mongodb://localhost:27017/chat-app',

    // STATUS CODE
    STATUS_OK       : 200,
    STATUS_NOT_FOUND: 404,

    // MESSAGE
    MESS_NOT_FOUND:  'Not found',

    // Json web token key
    JWT_KEY         : 'secret',
    PRE_TOKEN       : 'Bearer',
    PRE_TOKEN_FAIL_MESS   : 'Prefix token fail',
});