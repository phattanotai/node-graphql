const credit = require('./creditMutation');
const users = require('./userMutation');

module.exports = {
    ...users,
    ...credit,
};
