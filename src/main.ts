import path from "path";
import { downloadVideo } from "./workers/downloadYoutubeVideo";
import { extractAudioFromVideo } from "./workers/extractAudioFromVideo";
import { mergeAudios } from "./workers/mergeAudios";

(async () => {
  console.log('Faro Maker Inicializado');
  await Promise.all([
    await downloadVideo('https://www.youtube.com/watch?v=IPukuYb9xWw'), 
    await extractAudioFromVideo(path.resolve(__dirname, 'out/video.mp4')),
    await mergeAudios()
  ]);
})()