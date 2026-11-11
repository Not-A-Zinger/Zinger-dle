

const buttons = document.querySelectorAll(".single");
const sound = document.getElementById("back");
const bigButtons = document.querySelectorAll(".all")
const sound2 = document.getElementById("recording");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        sound.play();
    });

    button.addEventListener("mouseleave", () => {

            sound.pause();
            sound.currentTime = 0;

    });
});

bigButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        sound2.play();
    });

    button.addEventListener("mouseleave", () => {

            sound2.pause();
            sound2.currentTime = 0;

    });
});



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const sites = ["https://www.nytimes.com/games/wordle/index.html", "https://www.nytimes.com/games/connections", "https://globle-game.com/", "https://globle-capitals.com/","https://travle.earth/","https://travle.earth/"
              ,"https://www.geogridgame.com/","https://actorle.com/","https://framed.wtf/","https://episode.wtf/","https://guessthe.game/","https://guesstheaudio.com/","https://www.mcdle.net/","https://www.boatloadpuzzles.com/playcrossword/"
              ,"https://faces.wtf/","https://raddle.quest/","https://eldendle.com/","https://www.alldle.net/","https://www.chess.com/daily","https://www.nytimes.com/games/pips"];

shuffle(sites);





function openAll(){
    sites.forEach(link=>{
        window.open(link);
    })

    close()
}
function confirmation() {
    if(confirm("Are you sure?\n This will open a bajillion tabs!")){
        openAll()
    }
}
function confirmationRandom(){
        if(confirm("Are you sure?\n This will open a bajillion tabs!")){
        window.open("https://contexto.me/")
        for (i = 0; i<sites.length;i++){
            window.open(sites[i])
        }
    }
}




