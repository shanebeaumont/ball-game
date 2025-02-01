import Ball from '../sprites/Ball.js';
import { defineKeys } from '../utils/input.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        this.fpsText = this.add.text(10, 10, 'FPS: 0', { font: '16px sans-serif', fill: '#C6D0F5' });

        this.ball = new Ball(this, 400, 300);

        this.platforms = this.physics.add.staticGroup();

        const platformGraphics = this.add.graphics();
        platformGraphics.fillStyle(0xA5ADCE, 1);
        platformGraphics.fillRect(0, 0, 600, 10);
        platformGraphics.generateTexture('platform', 600, 10);
        platformGraphics.destroy();
        this.platforms.create(400, 500, 'platform');

        this.physics.add.collider(this.ball.sprite, this.platforms);

        this.cursors = defineKeys(this);
    }

    update() {
        this.fpsText.setText('FPS: ' + Math.round(1000 / this.game.loop.delta));

        this.ball.update(this.cursors);
    }
}

