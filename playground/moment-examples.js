var moment = require('moment');

console.log(moment().format());

// January 1 1970 @ 12:00 am -> 0
// January 1 1970 @ 12:01 am -> 60

var now = moment();

console.log('Current Timestamp: ', now.unix());

var timestamp = 1466731779;
var currentMoment = moment.unix(timestamp);

console.log('Current Moment: ', currentMoment.format("MMM D YYYY @ h:mm A"));

// January 3rd, 2016 @ 12:13 AM

console.log('Challenge Moment: ', currentMoment.format("dddd, MMMM Do YYYY @ h:mm A"))
