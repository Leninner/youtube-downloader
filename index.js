const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

const getYoutubeUrlInfo = async () => {
  const videoInfo = await ytdl.getInfo(
    'https://www.youtube.com/watch?v=Wv2rLZmbPMA&ab_channel=EdSheeran',
    (err, info) => {
      if (err) {
        return err;
      }

      return info;
    }
  );

  return videoInfo;
};

console.log(getYoutubeUrlInfo().then((info) => console.log(info)));

ytdl('https://www.youtube.com/watch?v=Wv2rLZmbPMA&ab_channel=EdSheeran', {
  filter: 'audioonly',
  quality: 'highestaudio',
  format: 'mp3',
}).pipe(fs.createWriteStream('D:\\my_universe.mp3'));
