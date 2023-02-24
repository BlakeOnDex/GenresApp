var genre;
var age;
var game;

onEvent("SandBox", "click", function() {
    genre = "SandBox";
    gameChoice();
});    
             
onEvent("BattleRoyal", "click", function() {
    genre = "BattleRoyal";
    gameChoice();
});

onEvent("RPG", "click", function() {
    genre = "RPG";
    gameChoice();
});

function gameChoice() {
    age = getNumber("dropdown5");
}