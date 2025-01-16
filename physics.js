function generateSquareMaze(dimension) {

    function iterate(field, x, y) {
        field[x][y] = false;
        while(true) {
            var directions = [];

            if (x > 1 && field[x - 2][y] === true) directions.push([-1, 0]);  // Up
            if (x < field.dimension - 2 && field[x + 2][y] === true) directions.push([1, 0]);  // Down
            if (y > 1 && field[x][y - 2] === true) directions.push([0, -1]);  // Left
            if (y < field.dimension - 2 && field[x][y + 2] === true) directions.push([0, 1]);  // Right

            if (directions.length === 0) return field;

            var dir = directions[Math.floor(Math.random() * directions.length)];

            field[x + dir[0]][y + dir[1]] = false;

            field = iterate(field, x + dir[0] * 2, y + dir[1] * 2);
        }
    }

    var field = new Array(dimension);
    field.dimension = dimension;
    for (var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    field = iterate(field, 1, 1);

    for (var i = 1; i < dimension - 1; i++) {
        for (var j = 1; j < dimension - 1; j++) {
            if (field[i][j] === true && Math.random() < 0.25) {
                field[i][j] = true;
            }
            else if (Math.random() < 0.10) {
                field[i][j] = false;
            }
        }
    }

    return field;
}
