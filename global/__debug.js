const is_debug = true;
const moment = require('moment');
__debug = function(obj,connector){
	connection = connector || {id:'SYSTEM' , imei : 'SYSTEM'};
	object = obj || 'SYSTEM';
	if (is_debug !== true) return false;
	const date = moment().format("YYYY-MM-DD HH:mm:ss");
	console.log(date,"[",connection,"]-",object);
}
module.exports = __debug;
