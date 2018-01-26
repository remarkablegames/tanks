import { Sprite } from 'phaser';
import { groups } from '../shared';

const key = 'enemy';

export default class Enemy extends Sprite {
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

    // Then add sprite to the group.
    groups.enemies.add(this);

    // Enable physics for sprite.
    game.physics.arcade.enable(this);

    // The player should be bound to the world.
    this.body.collideWorldBounds = true;
  }
}
