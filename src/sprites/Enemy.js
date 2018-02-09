import { Sprite } from 'phaser';
import { groups, sprites } from '../shared';

export default class Enemy extends Sprite {
  /** @const {String} */
  static key = 'enemy';

  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, game.cache.getBitmapData(Enemy.key));

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

  update() {
    const { body } = this;

    // Enemy should collide against player.
    this.game.physics.arcade.collide(this, sprites.player);

    // Reset velocity so collision does not make the sprite move indefinitely.
    body.velocity.x = 0;
    body.velocity.y = 0;
  }
}
