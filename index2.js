const fs = require("fs");
const axios = require("axios");

const mints = fs.readFileSync("output1.txt").toString("utf-8").split('\n');

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

fs.writeFileSync("output2.txt", "");

let number = 0;
const getData = async mint => {
    try {
        const { data: result } = await axios.get(`https://api.solscan.io/transfer/token?token_address=${mint}&type=all&offset=0&limit=20`);
        if (!result.data.items.length) return ;
        fs.appendFileSync("output2.txt", mint + " " + result.data.items.map(item => item.destOwnerAccount).join('-') + "\n");
    } catch (err) {
        await sleep();
        await getData(mint);
    }
}

const main = async () => {
    for (let mint of mints) {
        console.log(++number);
        await getData(mint);
    }
}

main();