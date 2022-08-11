const fs = require("fs");
const holders = require("./output3.json");
const whitelist = require("./dogtags_1.json");

const list = [];
holders.forEach(x => list.push(...x.holders));

const output = [];
whitelist.forEach(x => {
    if(list.includes(x.wallet)) return;
    output.push(x.wallet);
});


fs.writeFileSync("output4.json", JSON.stringify(output, null, "\t"));