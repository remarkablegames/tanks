import { GameObjects } from 'phaser';
import { groups } from '../shared';
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

  init() {
    this.setActive(true);
    this.setVisible(true);
    this.body.setEnable(true);
  }

  kill() {
    this.setActive(false);
    this.setVisible(false);
    this.body.setEnable(false);
  }
}
