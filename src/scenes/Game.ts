import "phaser"
import { Tree } from '../images'
import Scenes from '../scenes'

class Game extends Phaser.Scene {
    constructor(){
        super({ key: Scenes.Game })
    }
    init(){}
    create(){
        this.add.image(232, 170, Tree.BG).setScale(2)
        this.add.image(232, 170, Tree.Lights).setScale(2)
        this.add.image(232, 170, Tree.MG).setScale(2)
        this.add.image(232, 170, Tree.FG).setScale(2)
        this.add.text(70, 160, "Phaser 3 / Parcel / TS Boiler Plate")
    }
}

export default Game