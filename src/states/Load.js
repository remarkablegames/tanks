import { State } from 'phaser';
import { Enemy, Player } from '../sprites';
import { Bullet } from '../weapons';

export default class Load extends State {
  static key = 'load';

  preload() {
    // player
    this.addBitmapData('rect', [25, 25], '#1ce2b2', Player.key);
    // enemy
    this.addBitmapData('rect', [25, 25], '#ff0400', Enemy.key);
    // bullet
    this.addBitmapData('arc', [15, 15, 5], '#fff', Bullet.key);
  }

  /**
   * Creates and adds bitmap data to game cache.
   *
   * @param {String} shape - The shape (e.g, 'rect', 'arc').
   * @param {Array}  size  - The height, width, and/or radius.
   * @param {String} color - The fill color.
   * @param {String} key   - The bitmap data cache key.
   */
  addBitmapData(shape, size, color, key) {
    const [width, height, radius] = size;

    // create bitmap data object
    const bmd = this.add.bitmapData(width, height);

    // draw to the canvas context
    // https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    const { ctx } = bmd;
    ctx.beginPath();

    switch (shape) {
      case 'arc':
        ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2, true);
        break;
      case 'rect':
        ctx.rect(0, 0, width, height);
        break;
      default:
        break;
    }

    // add fill color
    ctx.fillStyle = color;
    ctx.fill();

    // save to cache
    this.cache.addBitmapData(key, bmd);
  }
}
