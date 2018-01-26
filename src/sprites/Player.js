import { Sprite } from 'phaser';
import { Bullet } from '../weapons';
import { groups } from '../shared';

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

  hitEnemy(bullet, enemy) {
    bullet.kill();
    enemy.kill();
  }

  update() {
    const { body, game, cursors } = this;

    // Reset the player velocity (movement).
    body.velocity.x = 0;
    body.velocity.y = 0;

    // Move the player when cursor is down.
    if (cursors.up.isDown) {
      body.velocity.y = -150;
    } else if (cursors.right.isDown) {
      body.velocity.x = 150;
    } else if (cursors.down.isDown) {
      body.velocity.y = 150;
    } else if (cursors.left.isDown) {
      body.velocity.x = -150;
    }

    // Fire bullet when left mouse button is pressed.
    if (game.input.activePointer.isDown) {
      this.weapon.fireAtPointer();
    }

    game.physics.arcade.overlap(
      this.weapon.bullets,
      groups.enemies,
      this.hitEnemy
    );
  }
}
