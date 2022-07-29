import delay from 'delay';
import { DELAY_MS } from '../constants/delay';

import { resolve } from 'path';


async function extractAudioFromVideo(path: string) : Promise<void> {
  console.log('Extraindo áudio do vídeo...');
  return new Promise(async (resolv,reject) => {
    await delay(DELAY_MS);
    const extractAudio = require('ffmpeg-extract-audio')
    await extractAudio({
      input: path,
      output: `${resolve(`${__dirname}`, '..', 'out/audio.mp3')}`,
    })
    resolv();
  })
}

export { extractAudioFromVideo };
