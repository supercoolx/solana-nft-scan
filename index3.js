const fs = require("fs");

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

const result = [];

const rows = fs.readFileSync("output2.txt").toString("utf-8").split('\n');
rows.forEach(row => {
    let [mint, holderList] = row.split(" ");
    const holders = holderList ? holderList.split("-").reverse() : [];
    result.push({ mint, holders });
});

fs.writeFileSync("output3.json", JSON.stringify(result, null, "\t"));