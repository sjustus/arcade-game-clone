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

// check for collisions -- takes either entity (player or enemy) as parameter
  checkCollisions(eitherEntity) {
    //if y coords are equal
    if (this.y === eitherEntity.y) {
      //check x coords
      if (this.x >= eitherEntity.x - 0.5 && this.x <= eitherEntity.x + 0.5) {
        //if x and y match, checkCollisions is true
        return true;
      }
    // if y coords do not match return false
    } else
        return false;
  }
}


// Create class for Player extend Entity
class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-horn-girl.png';
    this.win = false;
  }

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

   update() {
     // check for winning condition
     if (this.y < 1) {
       this.win = true;
       this.x = 2;
       this.y = 5;
       console.log('win');
     }
   }
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
