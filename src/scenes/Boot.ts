import "phaser"
import { Tree, Man } from '../images'
import Scenes from '../scenes'

class Boot extends Phaser.Scene {
    constructor(){
        super({ key: Scenes.Boot })
    }
    preload(){
        this.load.image(Tree.BG, require("../assets/parallax-forest-back-trees.png"))
        this.load.image(Tree.FG, require("../assets/parallax-forest-front-trees.png"))
        this.load.image(Tree.MG, require("../assets/parallax-forest-middle-trees.png"))
        this.load.image(Tree.Lights, require("../assets/parallax-forest-lights.png"))

        this.load.atlas(Man.Man, require('../assets/sprites.png'), require("../assets/sprites.json"))
    }
    create(){
        this.scene.start(Scenes.Game)
    }
}

export default Boot