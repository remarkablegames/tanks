import { Scene } from 'phaser';
import { Bullet, Enemy, Player } from '../sprites';
import { groups, sprites } from '../shared';
import { SCENES } from '../constants';

const FIRE_DELAY = 400;
const BULLET_SPEED = 500;

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    const {
      game: {
        config: { height, width },
      },
    } = this;

    // The player and its settings.
    sprites.player = new Player(this, 128, height / 2);

    // Create enemies group.
    groups.enemies = this.add.group();

    // Create an enemy.
    new Enemy(this, width - 128, height / 2);

    // Create bullets group.
    groups.bullets = this.physics.add.group({
      classType: Bullet,
      runChildUpdate: true,
    });

    this.lastFired = 0;

    // Check for overlap between bullet and enemy.
    this.physics.add.overlap(
      groups.bullets,
      groups.enemies,
      this.bulletEnemyOverlap
    );
  }

  bulletEnemyOverlap(bullet, enemy) {
    if (!bullet.active || !enemy.active) {
      return;
    }
    bullet.kill();
    enemy.kill();
  }

  update(time, delta) {
    sprites.player.update();

    groups.enemies.children.each(enemy => enemy.update());

    // Fire bullet when left mouse button is pressed.
    if (this.input.activePointer.isDown && time > this.lastFired) {
      const bullet = groups.bullets
        .get(sprites.player.x, sprites.player.y)
        .init();

      this.physics.moveTo(
        bullet,
        this.input.activePointer.x,
        this.input.activePointer.y,
        BULLET_SPEED
      );
      this.lastFired = time + FIRE_DELAY;
    }
  }
}
