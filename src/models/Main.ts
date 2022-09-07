import Audible from '../interfaces/Audible';
import Runnable from '../interfaces/Runnable';
import Touchable from '../interfaces/Touchable';
import Device from './Device';
import Iphone from './Iphone';
import Kindle from './Kindle';
import Mp3 from './Mp3';

export default class Main implements Runnable {
  startTap(device: Touchable) {
    device.tap();
  }

  startPlaylist(device: Audible) {
    device.play('One Song...');
  }

  start(): void {
    const iphone = new Iphone();
    const kindle = new Kindle();
    const mp3 = new Mp3();
    // const dev = new Device();

    //this.startTap(iphone);

    //this.startTap(kindle);

    this.startPlaylist(kindle);

    console.log(iphone.getSerialNumber());
  }
}
