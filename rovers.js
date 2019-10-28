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

    moveForward = (site) => {
            switch (this.direction) {
              case 'N':
                if (this.y > 0) {
                  switch (site[this.y-1][this.x]) {
                    case 'free':
                      site[this.y-1][this.x] = this.name;
                      site[this.y][this.x] = 'free';
                      this.y--;
                      this.travelLog.push({x : this.x, y : this.y});
                      console.log(`${this.name} moved forward.`);
                      break;
                    case 'crater':
                      console.log('Crater ahead, we can\'t advance!');
                      break;
                    default:
                      console.log('Enemy ahead, we can\'t advance!');
                      break;
                  } 
                } else {
                  console.log('Can\'t leave test site!');
                  break;
                }
                break;
              case 'S':
                if (this.y < 9) {
                  switch (site[this.y+1][this.x]) {
                    case 'free':
                      site[this.y+1][this.x] = this.name;
                      site[this.y][this.x] = 'free';
                      this.y++;
                      this.travelLog.push({x : this.x, y : this.y});
                      console.log(`${this.name} moved forward.`);
                      break;
                    case 'crater':
                      console.log('Crater ahead, we can\'t advance!');
                      break;
                    default:
                      console.log('Enemy ahead, we can\'t advance!');
                      break;
                  } 
                } else {
                  console.log('Can\'t leave test site!');
                  break;
                }
                break;
              case 'E':
                if (this.x < 9) {
                  switch (site[this.y][this.x+1]) {
                    case 'free':
                      site[this.y][this.x+1] = this.name;
                      site[this.y][this.x] = 'free';
                      this.x++;
                      this.travelLog.push({x : this.x, y : this.y});
                      console.log(`${this.name} moved forward.`);
                      break;
                    case 'crater':
                      console.log('Crater ahead, we can\'t advance!');
                      break;
                    default:
                      console.log('Enemy ahead, we can\'t advance!');
                      break;
                  } 
                } else {
                  console.log('Can\'t leave test site!');
                  break;
                }
                break;
              case 'W':
                if (this.x > 0) {
                  switch (site[this.y][this.x-1]) {
                    case 'free':
                      site[this.y][this.x-1] = this.name;
                      site[this.y][this.x] = 'free';
                      this.x--;
                      this.travelLog.push({x : this.x, y : this.y});
                      console.log(`${this.name} moved forward.`);
                      break;
                    case 'crater':
                      console.log('Crater ahead, we can\'t advance!');
                      break;
                    default:
                      console.log('Enemy ahead, we can\'t advance!');
                      break;
                  } 
                } else {
                  console.log('Can\'t leave test site!');
                  break;
                }
                break;
            }
          }

    
     moveBackward (site) {
        switch (this.direction) {
          case 'N':
            if (this.y < 9) {
              switch (site[this.y+1][this.x]) {
                case 'free':
                  site[this.y+1][this.x] = this.name;
                  site[this.y][this.x] = 'free';
                  this.y++;
                  this.travelLog.push({x : this.x, y : this.y});
                  console.log(`${this.name} moved backward.`);
                  break;
                case 'crater':
                  console.log('Crater behind, we can\'t advance!');
                  break;
                default:
                  console.log('Enemy behind, we can\'t advance!');
                  break;
              } 
            } else {
              console.log('Can\'t leave test site!');
              break;
            }
            break;
          case 'S':
            if (this.y > 0) {
              switch (site[this.y-1][this.x]) {
                case 'free':
                  site[this.y-1][this.x] = this.name;
                  site[this.y][this.x] = 'free';
                  this.y--;
                  this.travelLog.push({x : this.x, y : this.y});
                  console.log(`${this.name} moved backward.`);
                  break;
                case 'crater':
                  console.log('Crater behind, we can\'t advance!');
                  break;
                default:
                  console.log('Enemy behind, we can\'t advance!');
                  break;
              } 
            } else {
              console.log('Can\'t leave test site!');
              break;
            }
            break;
          case 'E':
            if (this.x > 0) {
              switch (site[this.y][this.x-1]) {
                case 'free':
                  site[this.y][this.x-1] = this.name;
                  site[this.y][this.x] = 'free';
                  this.x--;
                  this.travelLog.push({x : this.x, y : this.y});
                  console.log(`${this.name} moved backward.`);
                  break;
                case 'crater':
                  console.log('Crater behind, we can\'t advance!');
                  break;
                default:
                  console.log('Enemy behind, we can\'t advance!');
                  break;
              } 
            } else {
              console.log('Can\'t leave test site!');
              break;
            }
            break;
          case 'W':
            if (this.x < 9) {
              switch (site[this.y][this.x+1]) {
                case 'free':
                  site[this.y][this.x+1] = this.name;
                  site[this.y][this.x] = 'free';
                  this.x++;
                  this.travelLog.push({x : this.x, y : this.y});
                  console.log(`${this.name} moved backward.`);
                  break;
                case 'crater':
                  console.log('Crater behind, we can\'t advance!');
                  break;
                default:
                  console.log('Enemy behind, we can\'t advance!');
                  break;
              } 
            } else {
              console.log('Can\'t leave test site!');
              break;
            }
            break;
        }
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
