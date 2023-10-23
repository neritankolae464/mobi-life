// Filename: complex_code.js

/**
 * This code represents a complex and sophisticated JavaScript program
 * that implements a task scheduler with prioritization and parallel
 * execution capabilities.
 */

// Constants
const MAX_CONCURRENT_TASKS = 4;

// Global Variables
let taskQueue = [];
let runningTasks = 0;

// Class: Task
class Task {
  constructor(priority, callback) {
    this.priority = priority;
    this.callback = callback;
  }
}

// Function: scheduleTask
function scheduleTask(priority, callback) {
  const task = new Task(priority, callback);
  taskQueue.push(task);
  taskQueue.sort((a, b) => b.priority - a.priority);
  processTasks();
}

// Function: processTasks
function processTasks() {
  while (runningTasks < MAX_CONCURRENT_TASKS && taskQueue.length > 0) {
    const task = taskQueue.shift();
    runningTasks++;
    task.callback(() => {
      runningTasks--;
      processTasks();
    });
  }
}

// Usage Example:

// Function: complexTaskA
function complexTaskA(callback) {
  // Complex and time-consuming task A goes here
  setTimeout(() => {
    console.log("Task A completed!");
    callback();
  }, 2000);
}

// Function: complexTaskB
function complexTaskB(callback) {
  // Complex and time-consuming task B goes here
  setTimeout(() => {
    console.log("Task B completed!");
    callback();
  }, 3000);
}

// Function: complexTaskC
function complexTaskC(callback) {
  // Complex and time-consuming task C goes here
  setTimeout(() => {
    console.log("Task C completed!");
    callback();
  }, 1500);
}

// Schedule tasks with different priorities
scheduleTask(2, complexTaskA);
scheduleTask(1, complexTaskB);
scheduleTask(3, complexTaskC);
