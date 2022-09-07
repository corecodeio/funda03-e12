import Audible from '../interfaces/Audible';
import Touchable from '../interfaces/Touchable';
import Device from './Device';
export default class Iphone extends Device implements Touchable, Audible {
  // screen
  // sound
  // calls
  position: [number, number] = [0, 0];
  volumen: number | undefined;
  color: string | undefined;

  tap(): void {
    const [x, y] = this.position;
    console.log(`Tap on: x:${x}, y:${y}`);
  }

  play(song: string): void {
    const message = `[IPHONE] 🎶 ${song}`;
    console.log(message);
  }

  getBrand(): string {
    return 'Apple phone';
  }
}
