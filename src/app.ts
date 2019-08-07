import "phaser"
import Boot from './scenes/Boot'
import Game from './scenes/Game'


const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    title: "Phaser Example",
    width: 464,
    height: 300,
    parent: 'game',
    scene: [Boot, Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y:300
            },
            debug: false
        }
    },
};

window.onload = () => {
    new Phaser.Game(config)
}
