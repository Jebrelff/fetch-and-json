const correctJSON = require('./1');
console.log(correctJSON, "option-b is correct JSON syntax.");
console.log("option-a is incorrect because keys should be of type string in JSON.");
console.log("option-c is incorrect because JSON doesn't support single quotes for strings, unlike JavaScript objects.\n");

const correctJSON2 = require('./2');
console.log(correctJSON2, "option-a is the correct option.");

const correctJSON3 = require('./3');
console.log(correctJSON3, "option-c is a correct syntax but it's an array of JSONs rather than a single JSON.");

console.log("option-b is incorrect because there's no key provided for the array.");
