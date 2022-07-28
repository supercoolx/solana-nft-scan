import fs from "fs";
import axios from "axios";

const mints = fs.readFileSync("output1.txt").toString("utf-8").split('\n');

const MINTER = "BRAiNSRTXfk6Rx95FAfsQVAfDctgqNR6PrYAxsa3sjhv";

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

let number = 0;
const getData = async mint => {
    console.log(number);
    try {
        const { data: result } = await axios.get(`https://api.solscan.io/transfer/token?token_address=${mint}&type=all&offset=0&limit=20`);
        number++;
        if (result.data.items.length < 2) return;
        if (result.data.items.at(-1).destOwnerAccount !== MINTER) return;
        fs.appendFileSync("output2.txt", mint + " " + result.data.items.at(-2).destOwnerAccount);
    } catch (err) {
        await sleep();
        await getData(mint);
    }
}

const main = async () => {
    for (let mint of mints) {
        await getData(mint);
    }
}

main();