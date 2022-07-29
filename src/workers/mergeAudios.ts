import delay from 'delay';
import { existsSync } from 'fs';
import path from 'path';
import { DELAY_MS } from '../constants/delay';
var ffmpeg = require('fluent-ffmpeg');

async function mergeAudios(): Promise<void> {
  await delay(DELAY_MS);
  return new Promise((resolve, reject) => {
    console.log('Mesclando áudios...');
    console.log(existsSync(path.resolve(__dirname, '..', 'out/audio.mp3')))
    console.log(existsSync(path.resolve(__dirname, '..', 'audios/1.mp3')))
    ffmpeg()
      .input(path.resolve(__dirname, '..', 'out/video.mp4'))
      .input(path.resolve(__dirname, '..', 'audios/1.mp3'))
      .complexFilter([{
        filter: 'amix', options: { inputs: 2, duration: 'longest' }
      }])
      .on('end', () => {
        console.log('ok.')
      }).saveToFile('out.mp4');
  })
}

export { mergeAudios };


//ffmpeg -i src/audios/1.mp3 -i src/out/audio.mp3 -filter_complex amix=inputs=2:duration=longest output.mp3

