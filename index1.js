import fs from "fs";
import axios from "axios";

const sleep = async () => {
    const promise = new Promise(resolve => setTimeout(resolve, 3000));
    await promise();
}

const main = async () => {
    var i;
    for (i = 0; i < 9500; i += 25) {
        let output = "";
        console.log(i);
        try {
            const { data: result } = await axios.get(`https://api.solscan.io/collection/nft?sortBy=nameDec&collectionId=40b023488409e7c9093a1729f2738991fdcbd60e23aec5d41642239477ad345f&offset=${i}&limit=25`);
            result.data.forEach(token => {
                output += token.info.mint + "\n";
            });
            fs.appendFileSync('output.txt', output);
        }
        catch(err) {
            i -= 25;
            await sleep();
        }
    }
}

main();