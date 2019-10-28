class Rover {
    constructor(name, direction, x, y) {
        this.name = name;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.travelLog = [{this.x, this.y}];
    }
}

