import './styles.css';
import Phaser from 'phaser';
import { config } from './config.js';
import MainScene from './scenes/MainScene.js';

config.scene = MainScene;

const game = new Phaser.Game(config);

