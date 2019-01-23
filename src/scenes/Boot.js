import { Scene } from 'phaser';
import { Bullet, Enemy, Player } from '../sprites';
import Main from './Main';

export default class Boot extends Scene {
  static key = 'boot';

  preload() {
    // player
    this.make
      .graphics()
      .fillStyle(0x1ce2b2)
      .fillRect(0, 0, 25, 25)
      .generateTexture(Player.key, 25, 25);

    // enemy
    this.make
      .graphics()
      .fillStyle(0xff0400)
      .fillRect(0, 0, 25, 25)
      .generateTexture(Enemy.key, 25, 25);

    // bullet
    const bulletWidth = 15;
    const bulletHeight = bulletWidth;
    const bulletRadius = 5;
    this.make
      .graphics()
      .fillStyle(0xffffff)
      .fillCircle(bulletWidth / 2, bulletHeight / 2, bulletRadius)
      .generateTexture(Bullet.key, bulletWidth, bulletHeight);
  }

  create() {
    this.scene.start(Main.key);
  }
}
