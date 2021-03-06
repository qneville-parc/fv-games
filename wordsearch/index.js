//Styles

//Scenes
import Boot from './js/boot';
import Preload from './js/preload';
import GameTitle from './js/gametitle';
import Main from './js/main';
import GameOver from './js/gameover';
import GameConfig from './js/config';

let game = false;

export default {

    init: (containerElement, config) => {


        if (game === false) {

            //Set Game Config
            GameConfig.setConfig(config);

            //Start Game
            game = new Phaser.Game(800, 900, Phaser.CANVAS, containerElement);
            game.state.add("Boot", Boot);
            game.state.add("Preload", Preload);
            game.state.add("GameTitle", GameTitle);
            game.state.add("Main", Main);
            game.state.add("GameOver", GameOver);
            game.state.start("Boot");
        }
    },

    destroy: () => {

        game.destroy();
        game = false;

    }
}
