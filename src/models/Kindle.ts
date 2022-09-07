import Touchable from '../interfaces/Touchable';
import Device from './Device';

export default class Kindle extends Device implements Touchable {
  position: [number, number] = [0, 0];

  tap(): void {
    const [x, y] = this.position;
    console.log(`Tap on: x:${x}, y:${y}`);
  }
}
