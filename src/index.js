import './index.css';
import { AUTO } from 'phaser';

import Game from './Game';
new Game(800, 600, AUTO, document.getElementById('game'));

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
