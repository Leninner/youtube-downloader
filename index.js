const fs = require('fs');
const ytdl = require('ytdl-core');

// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

const options = process.argv;

const optionsDownload = {
  url: options[3],
  fileName: options[4],
};

const optionsInfo = {
  url: options[3],
};

switch (options[2]) {
  case '--download':
    downloadVideo(optionsDownload);
    break;

  case '--info':
    getVideoInfo(optionsInfo);
    break;

  default:
    console.log('Invalid option');
    break;
}

async function downloadVideo({ url, fileName }) {
  try {
    ytdl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
      format: 'mp3',
    }).pipe(fs.createWriteStream(`D:\\${fileName}`));
  } catch (error) {
    console.log(error);
  }
}

async function getVideoInfo({ url }) {
  try {
    ytdl
      .getInfo(url, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      })
      .then((info) => {
        console.log(info);
      });
  } catch (error) {
    console.log(error);
  }
}
