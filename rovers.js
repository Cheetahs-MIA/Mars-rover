window.onload = () => {
  const rovers = [];
  class Rover {
      constructor(name, direction, x, y, color) {
              this.color = color;
              this.name = name;
              this.direction = direction;
              this.x = Number(x);
              this.y = Number(y);
              this.travelLog = [{x: x, y: y}];
              testSite[y][x] = this.name;
              rovers.push(this);
              console.log(testSite)
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
                    this.y = Number(this.y);
                    this.x = Number(this.x);
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
                        console.log(typeof this.x, typeof this.y, this.x, this.y)
                        console.log(testSite[this.y][this.x+1]);
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
    const testSite = [
        ['free', 'free', 'free', 'free', 'free', 'crater', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'crater', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'crater', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'crater', 'free', 'free', 'free', 'free', 'free', 'crater', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
        ['free', 'free', 'free', 'free', 'free', 'crater', 'free', 'free', 'free', 'free'],
    ];
    
    function createRover () {
        // let name = document.querySelector("body > div > div > input[type=text]:nth-child(2)");
        // let direction = document.querySelector("body > div > div > select:nth-child(6)");
        // let xCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(8)");
        // let yCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(10)");
        // let color = document.querySelector("body > div > div > select:nth-child(4)");
        let name = 'Rvr';
        let direction = 'N';
        let xCoordinate = 3;
        let yCoordinate = 3;
        let color = 'FC8272';

        let newRover = new Rover(name, direction, xCoordinate, yCoordinate, color);
        // name.value = '';
        // direction.value = 'N';
        // xCoordinate.value = 0;
        // yCoordinate.value = 0;
        // color.value = 'FC8272'
    
        console.log('Rover created')
        createTable();
    }

    
    function createTable () {
      document.querySelector('h1').style.display = 'flex';
        let table = document.createElement('table');
        let tableBody = document.createElement('tbody');
        testSite.forEach((rowData) => {
            let row = document.createElement('tr');
            rowData.forEach((cellData) => {
                let cell = document.createElement('td');
                if (cellData === 'crater') {
                  cell.style.backgroundImage = `url('https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/12/21/09/MarsIceCrater2112.jpg')`;
                  cell.style.width = '40px';
                  cell.style.height = '40px';
                  cell.style.backgroundSize = 'containdww';
                } else if (cellData === 'free') {
                  cell.style.backgroundImage = `url('http://www.nasa.gov/sites/default/files/images/685378main_pia16130-full_full.jpg')`;
                  cell.style.width = '40px';
                  cell.style.height = '40px';
                  cell.style.backgroundSize = 'contain';
                } else {
                    let theColor = '';
                    for (let i = 0; i < rovers.length; i++) {
                        if (rovers[i].name === cellData) {
                            theColor = rovers[i].color;
                        }
                    }
                    let item = document.createElement('span');
                    item.setAttribute("class", "a-rover");
                    item.innerText = `${cellData}`;
                    cell.appendChild(item);
                }          
                row.appendChild(cell);
            });
    
            tableBody.appendChild(row);
        });
    
        table.appendChild(tableBody);
        document.querySelector('.site').appendChild(table);
        document.querySelector('#start').style.display = 'none';
        document.addEventListener('keydown', logKey);
        rotatePic(rovers[0].direction);
    }
    
    document.querySelector("#start").onclick = createRover;
    
    
    
    function logKey(e) {
        switch (e.key) {
            case 'w':
                rovers[0].moveForward();
                break;
            case 's':
                rovers[0].moveBackward();
                break;
            case 'a':
                rovers[0].turnLeft();
                break;
            case 'd':
                rovers[0].turnRight();
                break;
            default:
                break;      
        }

        document.querySelector('table').remove();
        createTable();
    }


}
function rotatePic (direction) {
    switch (direction) {
        case 'N':
            document.querySelector('.a-rover').style.transform = 'rotate(0deg)';
            break;
        case 'E':
            document.querySelector('.a-rover').style.transform = 'rotate(90deg)';
            break;
        case 'S':
            document.querySelector('.a-rover').style.transform = 'rotate(180deg)';
            break;
        case 'W':
            document.querySelector('.a-rover').style.transform = 'rotate(270deg)';
            break;
        default:
            console.log('error');
    }
    
    }