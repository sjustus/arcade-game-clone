// Create Entity class for propeties & methods common to both Player & enemy
class Entity {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
    // Update()
      //prevent player from going off board?


    // checkCollisions()
}


// Create class for Player extend Entity
class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
  }

  // Unique methods
  // If input meets condition to stay on board, allow move, otherwise
  //player does not move
  handleInput(input) {
    switch(input) {
      case 'left':
        this.x = this.x > 0 ? this.x - 1 : this.x;
        break;
      case 'up':
        this.y = this.y > 0 ? this.y - 1 : this.y;
        break;
      case 'right':
        this.x = this.x < 4 ? this.x + 1: this.x;
        break;
      case 'down':
        this.y = this.y < 5 ? this.y + 1 : this.y;
        break;
    }
  }
    // checkVictory()
    // resetHero()
}

// Create Enemy class extends Entity
class Enemy extends Entity {
  constructor(x, y, speed) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = getSpeed();
  }


 update(dt) {
    if (this.x < 5) {
      this.x += this.speed * dt;
    }
      else {
        this.x = 0;
      }
  }
}

// get random speed
getSpeed = function() {
  let speed = Math.floor((Math.random() * 4 + 1));
  return speed;
}
