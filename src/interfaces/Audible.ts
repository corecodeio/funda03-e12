export default interface Audible {
  volumen: number | undefined;
  play(song: string): void;
}
