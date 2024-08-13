const unzipper = require('unzipper');
const fs = require('fs');

async function unzipScriptZip(destinationPath) {
    const zipFilePath = 'script.zip';

    try {
        await fs.createReadStream(zipFilePath)
            .pipe(unzipper.Extract({ path: destinationPath }))
            .promise();
        console.log('File unzipped successfully!');
    } catch (err) {
        console.error('Error unzipping file:', err);
    }
}

// Example usage
const destinationPath = 'unzippedScript';

unzipScriptZip(destinationPath);
