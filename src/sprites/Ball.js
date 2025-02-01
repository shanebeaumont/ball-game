export default class Ball {
    constructor(scene, x, y) {
        this.scene = scene;

        const ballGraphics = this.scene.add.graphics();
        ballGraphics.fillStyle(0x8CAAEE, 1);
        ballGraphics.fillCircle(25, 25, 25);
        ballGraphics.generateTexture('ball', 50, 50);
        ballGraphics.destroy();

        this.sprite = this.scene.physics.add.sprite(x, y, 'ball');
        this.sprite.setCircle(25);
        this.sprite.setBounce(0.8);
    }

    update(cursors) {
        if (cursors.up.isDown) {
            this.sprite.setVelocityY(this.sprite.body.velocity.y - 0.25);
        }
        if (cursors.left.isDown) {
            this.sprite.setVelocityX(this.sprite.body.velocity.x - 2);
        }
        if (cursors.down.isDown) {
            this.sprite.setVelocityY(this.sprite.body.velocity.y + 2);
        }
        if (cursors.right.isDown) {
            this.sprite.setVelocityX(this.sprite.body.velocity.x + 2);
        }
    }
}

