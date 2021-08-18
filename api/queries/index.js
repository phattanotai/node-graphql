const users = require('./userQuery');
const credit = require('./creditQuery');
const lotto = require('./lottoQuery');
module.exports = {
    ...users,
    ...credit,
    ...lotto
};