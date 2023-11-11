/*
Filename: ComplexProgram.js
Description: This code is a complex program implementing a game called "Space Invaders". It incorporates various features like player spaceship movement, enemy movement, collision detection, power-ups, and a scoring system. Brace yourself for a thrilling gaming experience!

Note: This code snippet depicts a small part of the overall game implementation, and it is not executable on its own.
*/

// Game Constants
const canvasWidth = 800;
const canvasHeight = 600;
const playerWidth = 50;
const playerHeight = 50;
const enemyWidth = 30;
const enemyHeight = 30;

// Game Variables
let playerX = canvasWidth / 2 - playerWidth / 2;
let playerY = canvasHeight - playerHeight - 10;
let playerSpeed = 5;
let enemies = [];
let enemySpeed = 2;
let score = 0;

// Player Movement
function movePlayer(direction) {
  if (direction === "left" && playerX > 0) {
    playerX -= playerSpeed;
  } else if (direction === "right" && playerX + playerWidth < canvasWidth) {
    playerX += playerSpeed;
  }
}

// Create Enemies
function createEnemies() {
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 10; column++) {
      const enemy = {
        x: column * (enemyWidth + 10),
        y: row * (enemyHeight + 10),
        width: enemyWidth,
        height: enemyHeight,
        alive: true,
      };
      enemies.push(enemy);
    }
  }
}

createEnemies();

// Update Enemies
function updateEnemies() {
  for (let enemy of enemies) {
    if (enemy.alive) {
      enemy.y += enemySpeed;
      
      // Collision Detection
      if (enemy.y + enemy.height > playerY && enemy.y < playerY + playerHeight &&
          enemy.x + enemy.width > playerX && enemy.x < playerX + playerWidth) {
        gameover();
      }
    }
  }
}

// Game Over
function gameover() {
  alert("Game Over! Your score is: " + score);
  // Reset game variables and start a new game
  playerX = canvasWidth / 2 - playerWidth / 2;
  playerY = canvasHeight - playerHeight - 10;
  score = 0;
  enemies = [];
  createEnemies();
}

// Main Game Loop
function gameLoop() {
  // Clear canvas
  // Draw player
  // Draw enemies
  // Update player position based on input
  // Update enemies position and check for collision
  // Draw power-ups
  // ...
  // Update score
  
  requestAnimationFrame(gameLoop);
}

// Keyboard Controls
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    movePlayer("left");
  } else if (e.key === "ArrowRight") {
    movePlayer("right");
  }
});

// Start the game loop
gameLoop();