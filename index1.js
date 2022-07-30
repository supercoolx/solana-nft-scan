const fs = require("fs");
const axios = require("axios");

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

const main = async () => {
    fs.writeFileSync('output1.txt', "");
    var i;
    for (i = 0; ; i += 25) {
        let output = "";
        console.log(i);
        try {
            const { data: result } = await axios.get(`https://api.solscan.io/collection/nft?sortBy=nameDec&collectionId=40b023488409e7c9093a1729f2738991fdcbd60e23aec5d41642239477ad345f&offset=${i}&limit=25`);
            if (result.data.length === 0) break;
            result.data.forEach(token => {
                if (token.info.updateAuthority === "BRAiNSRTXfk6Rx95FAfsQVAfDctgqNR6PrYAxsa3sjhv")
                    output += token.info.mint + "\n";
            });
            fs.appendFileSync('output1.txt', output);
        }
        catch(err) {
            i -= 25;
            await sleep();
        }
    }
}

main();