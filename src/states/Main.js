import { Physics, State } from 'phaser';
import { Enemy, Player } from '../sprites';
import { groups, sprites } from '../shared';

export default class Main extends State {
  static key = 'main';

  create() {
    const { game } = this;

    // Set the background color of the stage.
    this.stage.backgroundColor = '#121215';

    // We're going to be using physics, so enable the Arcade Physics system.
    this.physics.startSystem(Physics.ARCADE);

    // The player and its settings.
    sprites.player = new Player(game, 128, this.world.height / 2);

    // Create enemies group.
    groups.enemies = this.add.group();

    // Create an enemy.
    new Enemy(game, this.world.width - 128, this.world.height / 2);
  }
}
