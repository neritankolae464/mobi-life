/*  
 * Filename: ComplexCode.js 
 *  
 * Description: This code generates a complex maze using a randomized Prim's algorithm. 
 * The maze is represented using a 2D array of cells, where each cell can be a wall or a passage. 
 * The algorithm starts by initializing all cells as walls and then randomly carves passages 
 * until there's a path from the entrance to the exit. 
 */

// Constants
const MAZE_WIDTH = 31;
const MAZE_HEIGHT = 31;

// Cell states
const WALL = 0;
const PASSAGE = 1;

// Create the maze matrix
const maze = Array.from({ length: MAZE_HEIGHT }, () => Array(MAZE_WIDTH).fill(WALL));

// Mark the entrance and exit locations
const entrance = { x: 1, y: 1 };
const exit = { x: MAZE_WIDTH - 2, y: MAZE_HEIGHT - 2 };
maze[entrance.y][entrance.x] = PASSAGE;
maze[exit.y][exit.x] = PASSAGE;

// Apply Prim's algorithm to generate the maze
const visitedCells = [];
visitedCells.push(entrance);

while (visitedCells.length > 0) {
  const currentCell = visitedCells.pop();
  const neighbors = [];

  // Check top neighbor
  if (currentCell.y > 2) {
    const topNeighbor = { x: currentCell.x, y: currentCell.y - 2 };
    neighbors.push(topNeighbor);
  }

  // Check right neighbor
  if (currentCell.x < MAZE_WIDTH - 3) {
    const rightNeighbor = { x: currentCell.x + 2, y: currentCell.y };
    neighbors.push(rightNeighbor);
  }

  // Check bottom neighbor
  if (currentCell.y < MAZE_HEIGHT - 3) {
    const bottomNeighbor = { x: currentCell.x, y: currentCell.y + 2 };
    neighbors.push(bottomNeighbor);
  }

  // Check left neighbor
  if (currentCell.x > 2) {
    const leftNeighbor = { x: currentCell.x - 2, y: currentCell.y };
    neighbors.push(leftNeighbor);
  }

  while (neighbors.length > 0) {
    const randomIndex = Math.floor(Math.random() * neighbors.length);
    const neighbor = neighbors[randomIndex];

    const wallX = currentCell.x + Math.sign(neighbor.x - currentCell.x);
    const wallY = currentCell.y + Math.sign(neighbor.y - currentCell.y);
    maze[wallY][wallX] = PASSAGE;

    visitedCells.push(neighbor);
    neighbors.splice(randomIndex, 1);
  }
}

// Print the maze (optional)
for (let row = 0; row < MAZE_HEIGHT; row++) {
  for (let col = 0; col < MAZE_WIDTH; col++) {
    process.stdout.write(maze[row][col] === WALL ? '██' : '  ');
  }
  process.stdout.write('\n');
}