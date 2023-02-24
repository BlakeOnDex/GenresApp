var genre;
var age;
var game;

("SandBox", "click", function() {
    genre = "SandBox";
    gameChoice();
});    
             
("BattleRoyal", "click", function() {
    genre = "BattleRoyal";
    gameChoice();
});

("RPG", "click", function() {
    genre = "RPG";
    gameChoice();
});

function gameChoice() {
    age = getNumber("dropdown");
}
