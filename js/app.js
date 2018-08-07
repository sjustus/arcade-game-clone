// Instantiate player, store in variable
const player = new Player();

//Create allEnemies array length of 3 and use map to add enemies to it
const allEnemies = [...Array(3)].map((_, i,) => new Enemy (0, i + 1));

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
