import { Physics, State } from 'phaser';

export default class Main extends State {
  static key = 'main';

  create() {
    // Set the background color of the stage.
    this.stage.backgroundColor = '#121215';

    // We're going to be using physics, so enable the Arcade Physics system.
    this.physics.startSystem(Physics.ARCADE);
  }
}
