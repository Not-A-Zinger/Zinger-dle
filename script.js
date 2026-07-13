function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const sites = ["https://contexto.me/", "https://www.nytimes.com/games/wordle/index.html", "https://www.nytimes.com/games/connections", "https://globle-game.com/", "https://globle-capitals.com/","https://travle.earth/","https://travle.earth/"
              ,"https://www.geogridgame.com/","https://actorle.com/","https://framed.wtf/","https://episode.wtf/","https://guessthe.game/","https://guesstheaudio.com/","https://www.mcdle.net/","https://www.boatloadpuzzles.com/playcrossword/"
              ,"https://faces.wtf/","https://raddle.quest/","https://eldendle.com/","https://www.alldle.net/"];

shuffle(sites);

console.log(sites);
// Example: ["grape", "apple", "kiwi", "banana", "orange"]


function openAll(){
    window.open("https://contexto.me/")
    window.open("https://www.nytimes.com/games/wordle/index.html")
    window.open("https://www.nytimes.com/games/connections")
    window.open("https://globle-game.com/")
    window.open("https://globle-capitals.com/")
    window.open("https://travle.earth/")
    window.open("https://www.geogridgame.com/")
    window.open("https://actorle.com/")
    window.open("https://framed.wtf/")
    window.open("https://episode.wtf/")
    window.open("https://guessthe.game/")
    window.open("https://guesstheaudio.com/")
    window.open("https://metazooa.com")
    window.open("https://neal.fun/infinite-craft/")
    window.open("https://www.nytimes.com/crosswords/game/mini")
    window.open("https://www.mcdle.net/")
    window.open("https://www.boatloadpuzzles.com/playcrossword/")
    window.open("https://faces.wtf/")
    window.open("https://raddle.quest/")
    window.open("https://eldendle.com/")

    close()
}
function confirmation() {
    if(confirm("Are you sure?\n This will open a bajillion tabs!")){
        openAll()
    }
function confirmationRandom(){
        if(confirm("Are you sure?\n This will open a bajillion tabs!")){
        for (i = 0; i<sites.length;i++){
            window.open(sites[i])
        }
    }
}

