class Example extends Phaser.Scene {
  preload() {
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

    this.load.spritesheet('rat', 'rat.png', {
      frameWidth: 250,
      frameHeight: 150,
      endFrame: 6
    });

    this.load.spritesheet('ratjump', 'ratjump.png', {
      frameWidth: 250,
      frameHeight: 150,
      endFrame: 4
    });


  }

  create() {
    //FISH
    this.fish = this.add.sprite(100, 100, 'fish');
    this.anims.create({
      key: 'fish',
      frames: this.anims.generateFrameNumbers('fish', { start: 0, end: 6 }),
      frameRate: 12,
      repeat: -1
    });


    //SLIME
    this.slime = this.add.sprite(100, 200, 'slime');

    this.anims.create({
      key: 'slime',
      frames: this.anims.generateFrameNumbers('slime', { start: 0, end: 6 }),
      frameRate: 12,
      repeat: -1
    });

    //RAT
    this.rat = this.add.sprite(100, 300, 'rat');
    this.anims.create({
      key: 'rat',
      frames: this.anims.generateFrameNumbers('rat', { start: 0, end: 5 }),
      frameRate: 12,
      repeat: -1
    });

    //RAT JUMP
    this.ratjump = this.add.sprite(100, 400, 'ratjump');

    this.anims.create({
      key: 'ratjump',
      frames: this.anims.generateFrameNumbers('ratjump', { start: 0, end: 3 }),
      frameRate: 12,
      repeat: -1
    });

    this.input.keyboard.on('keydown', (event) => {
      // When the space key is pressed, play the "fish" animation
      if (event.code === 'Space') {
        this.fish.anims.play('fish');
      }



    });
    
    this.slime.anims.play('slime', true);
    this.rat.anims.play('rat', true);
    this.ratjump.anims.play('ratjump', true);





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
