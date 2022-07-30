const fs = require('fs');
const URL = require('url');
const path = require('path');
const download = require("download");
const urls = require("./imageurls.json");

const sleep = () => new Promise(resolve => setTimeout(resolve, 5000));

const downloadImage = async (url) => {
    try {
        const filename = path.basename(URL.parse(url).pathname);
        console.log(filename);
        if (fs.existsSync(path.join('assets', filename))) return;
        await Promise.all([
            sleep(),
            download(url, 'assets')
        ]);
    } catch (err) {
        fs.appendFileSync('error.log', url + '\n');
    }
};

const main = async () => {
    let i = 0;
    for (i = 0; urls[i]; i++) {
        await downloadImage(urls[i]);
    }
}

main();