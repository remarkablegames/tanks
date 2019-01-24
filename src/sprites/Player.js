import { GameObjects } from 'phaser';
import { TEXTURES } from '../constants';

const PLAYER_SPEED = 150;

export default class Player extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.PLAYER);

    // Add sprite to the scene.
    scene.add.existing(this);

    // Enable physics for sprite.
    scene.physics.world.enable(this);

    // The player should be bound to the world.
    this.body.setCollideWorldBounds(true);

    // Create cursor keys for movement.
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    const { body, cursors } = this;

    // Reset the player velocity (movement).
    body.setVelocity(0);

    // Move the player when cursor is down.
    switch (true) {
      case cursors.up.isDown:
        body.setVelocityY(-PLAYER_SPEED);
        break;
      case cursors.right.isDown:
        body.setVelocityX(PLAYER_SPEED);
        break;
      case cursors.down.isDown:
        body.setVelocityY(PLAYER_SPEED);
        break;
      case cursors.left.isDown:
        body.setVelocityX(-PLAYER_SPEED);
        break;
    }
  }
}
