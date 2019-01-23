import { Scene } from 'phaser';
import { SCENES, TEXTURES } from '../constants';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    // player
    this.make
      .graphics()
      .fillStyle(0x1ce2b2)
      .fillRect(0, 0, 25, 25)
      .generateTexture(TEXTURES.PLAYER, 25, 25);

    // enemy
    this.make
      .graphics()
      .fillStyle(0xff0400)
      .fillRect(0, 0, 25, 25)
      .generateTexture(TEXTURES.ENEMY, 25, 25);

    // bullet
    const bulletWidth = 15;
    const bulletHeight = bulletWidth;
    const bulletRadius = 5;
    this.make
      .graphics()
      .fillStyle(0xffffff)
      .fillCircle(bulletWidth / 2, bulletHeight / 2, bulletRadius)
      .generateTexture(TEXTURES.BULLET, bulletWidth, bulletHeight);
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
