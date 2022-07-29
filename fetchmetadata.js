import fs from "fs";
import axios from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

const main = async () => {
    const output = [];
    var i;
    for (i = 0; ; i += 25) {
        console.log(i);
        try {
            const { data: result } = await axios.get(`https://api.solscan.io/collection/nft?sortBy=nameDec&collectionId=69e037294f7da451940e0446dcc61afb7c79744541bd31335b61cc34b6bc21dc&offset=${i}&limit=25`);
            if (result.data.length === 0) break;
            output.push(...result.data.map(nft => nft.info.meta));
        }
        catch(err) {
            i -= 25;
            await sleep();
        }
    }
    fs.writeFileSync('output.json', JSON.stringify(output, null, '\t'));
}

main();