const userType = require('./userType');
const bankType = require('./bankType');
const creditType = require('./creditType');
const lottoType = require('./lottoType');
module.exports = { 
    ...userType,
    ...bankType,
    ...creditType,
    ...lottoType
} ;
