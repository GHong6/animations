class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = "./assets/";
        this.load.image('fishstill', 'fishstill.png');
        this.load.spritesheet('fish', 'fish.png', {
            frameWidth: 250,
            frameHeight: 150,
            endFrame: 7
        });

        this.load.spritesheet('slime', 'slime.png', {
            frameWidth: 250,
            frameHeight: 150,
            endFrame: 7
        });

    }

    create() {
        this.fish = this.add.sprite(100, 100, 'fish');
    
        this.anims.create({
          key: 'fish',
          frames: this.anims.generateFrameNumbers('fish', { start: 0, end: 6 }),
          frameRate: 12,
          repeat: -1
        });
        
          this.fish.anims.play('fish', true);

          this.slime = this.add.sprite(100, 200, 'slime');
    
          this.anims.create({
            key: 'slime',
            frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 6 }),
            frameRate: 12,
            repeat: -1
          });
          
            this.slime.anims.play('slime', true);
  


      }
    }

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
