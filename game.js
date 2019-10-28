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
    let direction = document.querySelector("body > div > div > select");
    let xCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(6)");
    let yCoordinate = document.querySelector("body > div > div > input[type=number]:nth-child(8)");
    let newRover = new Rover(name.value, direction.value, xCoordinate.value, yCoordinate.value);
    name.value = '';
    direction.value = '';
    xCoordinate.value = 0;
    yCoordinate.value = 0;
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
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
    document.querySelector('.pre-game').style.display = 'none';
}

document.querySelector('#start').onclick = createTable;
