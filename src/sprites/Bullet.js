import { GameObjects } from 'phaser';
import { TEXTURES } from '../constants';

export default class Bullet extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.BULLET);

    // Add sprite to the scene.
    scene.add.existing(this);

    // Enable physics for sprite.
    scene.physics.world.enable(this);
  }

  init() {
    this.setActive(true);
    this.setVisible(true);
    this.body.setEnable(true);
    return this;
  }

  kill() {
    this.setActive(false);
    this.setVisible(false);
    this.body.setEnable(false);
    this.body.setVelocity(0);
  }

  update(time, delta) {
    const {
      scene: {
        game: {
          config: { height, width },
        },
      },
    } = this;

    // Out of bounds kill.
    if (this.x > width && this.y > height) {
      this.kill();
    }
  }
}
