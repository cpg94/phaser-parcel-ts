import "phaser"
import { Tree } from '../images'
import Scenes from '../scenes'
import Man from "../sprites/Man";

class Game extends Phaser.Scene {
    man: Man | null = null
    constructor(){
        super({ key: Scenes.Game })
    }
    init(){}
    create(){
        this.add.image(232, 150, Tree.BG).setScale(2)
        this.add.image(232, 150, Tree.Lights).setScale(2)
        this.add.image(232, 150, Tree.MG).setScale(2)
        this.add.image(232, 150, Tree.FG).setScale(2)
                this.man = new Man({
                    scene: this,
                    x: 30,
                    y: 220
                })

    }
    update(){
        this.man.update()
    }
}

export default Game