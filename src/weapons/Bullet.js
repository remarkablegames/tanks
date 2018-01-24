import { Weapon } from 'phaser';

const key = 'bullet';

export default class Bullet extends Weapon {
  static key = key;

  /**
   * @param {Phaser.Game}          game
   * @param {Phaser.PluginManager} parent
   */
  constructor(game, parent) {
    super(game, parent);

    // Create a bullet pool that automatically expands when bullets increase.
    this.createBullets(-1, game.cache.getBitmapData(key));

    // The bullet will be automatically killed when it leaves the world.
    this.bulletKillType = Weapon.KILL_WORLD_BOUNDS;

    // The speed at which the bullet is fired.
    this.bulletSpeed = 500;

    // The rate in which a bullet can be fired.
    this.fireRate = 400;
  }
}
