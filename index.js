const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

async function unzipScriptZip() {
    const zipFilePath = 'script.zip';

    try {
        await fs.createReadStream(zipFilePath)
            .pipe(unzipper.Parse())
            .on('entry', entry => {
                const filePath = entry.path;
                const type = entry.type; // 'Directory' or 'File'

                if (type === 'Directory') {
                    fs.mkdirSync(filePath, { recursive: true });
                    entry.autodrain();
                } else {
                    entry.pipe(fs.createWriteStream(filePath));
                }
            });
        console.log('File unzipped successfully!');
    } catch (err) {
        console.error('Error unzipping file:', err);
    }
}

// Example usage
unzipScriptZip();
