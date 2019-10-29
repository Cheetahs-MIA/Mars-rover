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
    let name = document.querySelector("body > div > div > input[type=text]:nth-child(2)");
    let direction = document.querySelector("body > div > div > select:nth-child(6)");
    let xCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(8)");
    let yCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(10)");
    let color = document.querySelector("body > div > div > select:nth-child(4)");
    let newRover = new Rover(name.value, direction.value, xCoordinate.value, yCoordinate.value, color.value);
    name.value = '';
    direction.value = 'N';
    xCoordinate.value = 0;
    yCoordinate.value = 0;
    color.value = 'FC8272'

    console.log('Rover created')
}
document.querySelector(".new-rover > button").onclick = createRover;

function createTable () {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    testSite.forEach((rowData) => {
        let row = document.createElement('tr');
        rowData.forEach((cellData) => {
            let cell = document.createElement('td');
            if (cellData === 'crater') {
                let item = document.createElement('img');
                item.setAttribute("src", "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/12/21/09/MarsIceCrater2112.jpg");
                item.style.width = '40px';
                item.style.height = '40px';
                cell.appendChild(item);
            } else if (cellData === 'free') {
                let item = document.createElement('img');
                item.setAttribute("src", "http://www.nasa.gov/sites/default/files/images/685378main_pia16130-full_full.jpg");
                item.style.width = '40px';
                item.style.height = '40px';
                cell.appendChild(item);
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
    document.body.appendChild(table);
    document.querySelector('.pre-game').style.display = 'none';
    document.addEventListener('keydown', logKey);
}

document.querySelector('#start').onclick = createTable;



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
    console.log(testSite)
    switch (rovers[0].direction) {
        case 'N':
            document.querySelector('.a-rover').style.transform = 'rotate(0deg)';
            console.log(rovers[0].direction);
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
    }
    document.querySelector('table').remove();
    createTable();
}
