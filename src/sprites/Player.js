import { GameObjects } from 'phaser';

export default class Player extends GameObjects.Sprite {
  /** @const {String} */
  static key = 'player';

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, Player.key);

    // Add sprite to the scene.
    scene.add.existing(this);

    // Enable physics for sprite.
    scene.physics.world.enable(this);

    // The player should be bound to the world.
    this.body.collideWorldBounds = true;

    // Create cursor keys for movement.
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const { body, cursors } = this;

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
  }
}
