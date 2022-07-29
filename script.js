const fs = require('fs');
const metadata = require("./metadata.json");

const output = metadata.map((data) => data.image);
fs.writeFileSync('output.json', JSON.stringify(output, null, '\t'));