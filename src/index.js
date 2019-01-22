import './index.css';
import { Boot, Main } from './states';
import Phaser from 'phaser';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  backgroundColor: '#121215',
  width: 800,
  height: 600,
  title: 'Tanks',
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: true,
};

new Phaser.Game(config);
