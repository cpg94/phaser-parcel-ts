import "phaser"
import { Man } from '../images'

interface IMan {
    scene: Phaser.Scene,
    x: number;
    y: number
}

class ManSprite extends Phaser.Physics.Arcade.Sprite {
    isRunning = false
    isIdle = false
    isAttacking = false
    constructor({ scene, x, y }: IMan){
        super(scene, x, y, Man.Man)
        scene.physics.world.enable(this);
        scene.add.existing(this)
        this.setCollideWorldBounds(true)
        // Run Animation
        scene.anims.create({
            key: Man.Run,
            frames: scene.anims.generateFrameNames(Man.Man, {
              prefix: 'adventurer-run-0',
              start: 0,
              end: 5,
            }),
            frameRate: 10,
            repeat: -1
        });


        // Idle Animation
        scene.anims.create({
            key: Man.Idle,
            frames: scene.anims.generateFrameNames(Man.Man, {
              prefix: 'adventurer-idle-0',
              start: 0,
              end: 1,
            }),
            frameRate: 5,
            repeat: -1
        });

        // Attack Animation
        scene.anims.create({
            key: Man.Attack,
            frames: scene.anims.generateFrameNames(Man.Man, {
              prefix: 'adventurer-attack1-0',
              start: 0,
              end: 4,
            }),
            frameRate: 5,
        });
        this.idle()
    }

    idle(){
        if(!this.isIdle){
            this.isIdle = true
            this.isRunning = false
            this.isAttacking = false
            this.play(Man.Idle)
        }
    }

    run(){
        if(!this.isRunning){
            this.isRunning = true
            this.isIdle = false
            this.isAttacking = false
            this.play(Man.Run)
        }
    }
    
    update(){
        const LEFT = this.scene.input.keyboard.addKey('LEFT');
        const RIGHT = this.scene.input.keyboard.addKey('RIGHT');
        const SPACE = this.scene.input.keyboard.addKey('SPACE');
        const A = this.scene.input.keyboard.addKey('A');
        if(LEFT.isDown){
            this.x = this.x -=2
            this.scaleX = -1       
            this.run()
        } else if (RIGHT.isDown){
            this.x = this.x +=2 
            this.scaleX = +1
            this.run()
        } else {
            this.idle()
        }
        
        if (SPACE.isDown){
            this.setVelocityY(-100)
        }

        if (A.isDown){
            this.play(Man.Attack)
        }
    }
}

export default ManSprite