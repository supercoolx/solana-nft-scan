import download from "download";
import metadata from "metadata.json"

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

const downloadImage = async (url) => {
    try {
        await download(url, 'assets');
    } catch (err) {
        await sleep();
        await downloadImage(url);
    }
};

const main = async () => {
    let i = 0;
    for (let data of metadata) {
        console.log(i++);
        await downloadImage(data.image);
    }
}

main();