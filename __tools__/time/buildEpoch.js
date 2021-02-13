/**
* @file Reproducible Builds Timestamp 
* @version 1.0.0
* @license Apache-2.0
* @usage node buildEpoch.js
*/

var now = new Date();
if (process.env.SOURCE_DATE_EPOCH) {
  now = new Date((process.env.SOURCE_DATE_EPOCH * 1000) + (now.getTimezoneOffset() * 60000));
}
console.log(timestamp)
