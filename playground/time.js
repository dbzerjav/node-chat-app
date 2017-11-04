const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());
var createdAt = moment().valueOf();
console.log(createdAt);
var date = moment();
console.log(date.format('h:mm a'));
