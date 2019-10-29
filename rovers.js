const rovers = [];
class Rover {
    constructor(name, direction, x, y, color) {
            this.color = color;
            this.name = name;
            this.direction = direction;
            this.x = x;
            this.y = y;
            this.travelLog = [{x: x, y: y}];
            testSite[y][x] = name;
            rovers.push(this);
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

    moveForward = () => {
            switch (this.direction) {
              case 'N':
                if (this.y > 0) {
                  switch (testSite[this.y-1][this.x]) {
                    case 'free':
                      testSite[this.y-1][this.x] = this.name;
                      testSite[this.y][this.x] = 'free';
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
                  switch (testSite[this.y+1][this.x]) {
                    case 'free':
                      testSite[this.y+1][this.x] = this.name;
                      testSite[this.y][this.x] = 'free';
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
                  switch (testSite[this.y][this.x+1]) {
                    case 'free':
                      testSite[this.y][this.x+1] = this.name;
                      testSite[this.y][this.x] = 'free';
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
                  switch (testSite[this.y][this.x-1]) {
                    case 'free':
                      testSite[this.y][this.x-1] = this.name;
                      testSite[this.y][this.x] = 'free';
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

     moveBackward () {
        switch (this.direction) {
          case 'N':
            if (this.y < 9) {
              switch (testSite[this.y+1][this.x]) {
                case 'free':
                  testSite[this.y+1][this.x] = this.name;
                  testSite[this.y][this.x] = 'free';
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
              switch (testSite[this.y-1][this.x]) {
                case 'free':
                  testSite[this.y-1][this.x] = this.name;
                  testSite[this.y][this.x] = 'free';
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
              switch (testSite[this.y][this.x-1]) {
                case 'free':
                  testSite[this.y][this.x-1] = this.name;
                  testSite[this.y][this.x] = 'free';
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
              switch (testSite[this.y][this.x+1]) {
                case 'free':
                  testSite[this.y][this.x+1] = this.name;
                  testSite[this.y][this.x] = 'free';
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
