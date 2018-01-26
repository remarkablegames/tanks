import { Sprite } from 'phaser';
import { Bullet } from '../weapons';

const key = 'player';

export default class Player extends Sprite {
  static key = key;

  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, game.cache.getBitmapData(key));

    // Add sprite to the game.
    game.add.existing(this);

    // Set sprite anchor to center.
    this.anchor.setTo(0.5);

    // Enable physics for sprite.
    game.physics.arcade.enable(this);

    // The player should be bound to the world.
    this.body.collideWorldBounds = true;

    // Create cursor keys for movement.
    this.cursors = game.input.keyboard.createCursorKeys();

    // Create weapon that tracks player.
    this.weapon = new Bullet(game);
    this.weapon.trackSprite(this, 0, 0);
  }
}
