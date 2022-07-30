const fs = require("fs");

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

const holders = [];

const rows = fs.readFileSync("output2.txt").toString("utf-8").split('\n');
rows.forEach(row => {
    let [mint, holder] = row.split(" ");
    holders.push({ mint, holder });
});

fs.writeFileSync("output3.json", JSON.stringify(holders, null, "\t"));