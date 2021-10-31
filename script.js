class AudioController {
    constructor() {
        this.bgMusic = new Audio('audio/genjoh.mp3');
        //this.flipSound = new Audio('audio/genjoh.mp3');
        //this.matchSound = new Audio('audio/genjoh.mp3');
        //this.victorySound = new Audio('audio/genjoh.mp3');
        //this.gameOverSound =new Audio('audio/genjoh.mp3');

        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    //let game = new Juego(99, cards);


    overlays.forEach(overlay => {
       overlay.addEventListener('click', () => {
          overlay.classList.remove('visible');
          //game.startGame();
          let audioController = new AudioController();
audioController.startMusic();
        });
    
    });

    cards.forEach(card => {
       card.addEventListener('click', () => {
          //game.flipCard('card'); 
        });
    });
}

//un EventLister para cargar primero el DOM
if (document.readyState ==='loading') {
    document.addEventListener ('DOMcontentloaded', ready());
}else{
    ready();
}

