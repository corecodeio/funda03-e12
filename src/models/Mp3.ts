import Device from './Device';
import Audible from '../interfaces/Audible';

export default class Mp3 extends Device implements Audible {
  volumen: number = 0;
  play(song: string): void {
    console.log(`[MP3] 🎶 ${song}`);
  }
}
