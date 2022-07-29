import delay from 'delay';
import { createWriteStream } from 'fs';
import path from 'path';
import ytdl from "ytdl-core";
import { DELAY_MS } from '../constants/delay';

async function downloadVideo(url : string) : Promise<void> {
  console.log('Baixando vídeo...');
  return new Promise<void>(async (resolve,reject) => {
    const video_path = path.resolve(__dirname, '../out/video.mp4');
    ytdl(url).pipe(createWriteStream(video_path))
    await delay(DELAY_MS);
    resolve();
  })
}

export { downloadVideo };
