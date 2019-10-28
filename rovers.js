class Rover {
    constructor(name, direction, x, y) {
        this.name = name;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.travelLog = [{x: x, y: y}];
    }
    
    turnLeft () {
        switch (this.direction) {
            case 'N':
              this.direction = 'W';
              break;
            case 'S':
              this.direction = 'E';
              break;
            case 'E':
              this.direction = 'N';
              break;
            case 'W':
              this.direction = 'S';
              break;
          }
          console.log(`${this.name} is now facing ${this.direction}.`);
    }

    turnRight () {
        switch (this.direction) {
            case 'N':
              this.direction = 'E';
              break;
            case 'S':
              this.direction = 'W';
              break;
            case 'E':
              this.direction = 'S';
              break;
            case 'W':
              this.direction = 'N';
              break;
          }
          console.log(`${this.name} is now facing ${this.direction}.`);
        }
    }

const testSite = [
    ['USA', 'free', 'free', 'free', 'free', 'crater', 'free', 'free', 'free', 'China'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'crater', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'free', 'crater', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'crater', 'free', 'free', 'free', 'free', 'free', 'crater', 'free', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
    ['free', 'free', 'free', 'free', 'free', 'crater', 'free', 'free', 'free', 'Russia'],
  ];
