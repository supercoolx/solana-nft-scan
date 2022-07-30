const fs = require("fs");
const holders = require("./output3.json");
const whitelist = require("./dogtags_1.json");

const list = holders.map(x => x.holder);

const output = [];
whitelist.forEach(x => {
    let NFTsend = list.includes(x.wallet);
    output.push({
        wallet: x.wallet,
        NFTsend
    });
});


fs.writeFileSync("output4.json", JSON.stringify(output, null, "\t"));