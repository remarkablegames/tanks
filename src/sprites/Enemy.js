import { GameObjects } from 'phaser';
import { groups, sprites } from '../shared';
import { TEXTURES } from '../constants';

export default class Enemy extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.ENEMY);

    // Add sprite to the scene.
    scene.add.existing(this);

    // Then add sprite to the group.
    groups.enemies.add(this);

    // Enable physics for sprite.
    scene.physics.world.enable(this);

    // The player should be bound to the world.
    this.body.collideWorldBounds = true;
  }

  kill() {
    this.active = false;
    this.visible = false;
  }

  update(time, delta) {
    const { body } = this;

    // Enemy should collide against player.
    this.scene.physics.world.collide(this, sprites.player);

    // Reset velocity so collision does not make the sprite move indefinitely.
    body.velocity.x = 0;
    body.velocity.y = 0;
  }
}
