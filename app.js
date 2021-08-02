// i dont really know what i'm doing yet so this might end up elsewhere.

var startButton = document.getElementById("startButton");
var gameSpace = document.getElementById("gameSpace");
var battleField = document.getElementById("battleField");
var playerRow1 = document.getElementById("playerRow1");
var playerRow2 = document.getElementById("playerRow2");

//game start script,  sets the state to active, probably gonna tie the "gameclock" to the priority system, will have that chake for gamestate, do pausing with that.
gameStart = function () {
    if ((boardState.gameState = "inactive")) {
        gameSpace.innerHTML = "wat";
        boardState.gameState = "active";
    }
    console.log(boardState.gameState);
};
startButton.addEventListener("click", gameStart);

//objects?
var boardState = {
    gameState: "inactive",
    playerCount: 3,
    turn: 1,
};

const player = {
    lifeTotal: 20,
    manaPool: "",
    name: "",

    isActivePlayer: false,
};

const spell = {
    type: "",
    stackPosition: 0,
};

console.log(boardState.gameState);
