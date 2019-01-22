import { GameObjects } from 'phaser';
import { groups } from '../shared';

const key = 'bullet';

export default class Bullet extends GameObjects.Sprite {
  static key = key;

  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, key);

    // Add sprite to the scene.
    scene.add.existing(this);

    // Enable physics for sprite.
    scene.physics.world.enable(this);
  }

  init() {
    this.active = true;
    this.visible = true;
    return this;
  }

  kill() {
    this.active = false;
    this.visible = false;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
  }

  hitEnemy(bullet, enemy) {
    if (!bullet.active || !enemy.active) {
      return;
    }
    bullet.kill();
    enemy.kill();
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
      return;
    }

    this.scene.physics.world.overlap(this, groups.enemies, this.hitEnemy);
  }
}
