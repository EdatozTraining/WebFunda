const json = '{"result":true, "count":42}';
const json2 = '{"Name" : Lavanya, "RollNo" : 36}'
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true

console.log();

console.log("bye")