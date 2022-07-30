const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('images.zip');
const archive = archiver('zip');

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

// append files from a sub-directory and naming it `new-subdir` within the archive
archive.directory('assets', 'assets');

archive.finalize();