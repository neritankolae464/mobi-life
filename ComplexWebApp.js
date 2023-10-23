/*
Filename: ComplexWebApp.js

This code is a complex web application that utilizes various advanced JavaScript techniques and technologies such as asynchronous operations, object-oriented programming, DOM manipulation, and event handling. It simulates a multi-user chat room environment with real-time updates and messaging functionalities.

*/

// Global variables
const users = [];
let messages = [];

// User class
class User {
  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
  }

  join() {
    users.push(this);
    console.log(`${this.name} joined the chat. Total active users: ${users.length}`);
  }

  leave() {
    const index = users.findIndex(user => user.id === this.id);
    if (index > -1) {
      users.splice(index, 1);
      console.log(`${this.name} left the chat. Total active users: ${users.length}`);
    }
  }

  sendMessage(message) {
    const newMessage = {
      from: this.name,
      content: message,
      timestamp: new Date().toLocaleString()
    };

    messages.push(newMessage);
    console.log(`New message from ${this.name}: ${message}`);
    notifyAll(newMessage);
  }
}

// Display class
class Display {
  static updateUsers() {
    const userList = document.querySelector('#user-list');
    userList.innerHTML = '';
    users.forEach(user => {
      const userElement = document.createElement('li');
      userElement.innerText = user.name;
      userList.appendChild(userElement);
    });
  }

  static updateMessages() {
    const messageContainer = document.querySelector('#message-container');
    messageContainer.innerHTML = '';
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.innerHTML = `<strong>${message.from}</strong> (${message.timestamp}): ${message.content}`;
      messageContainer.appendChild(messageElement);
    });
  }

  static notify(message) {
    const notification = document.querySelector('#notification');
    notification.textContent = `New message from ${message.from}`;
    // Add animation or other UI effects for notification
  }
}

// DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#chat-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = document.querySelector('#user-input');
    const message = document.querySelector('#message-input');

    const currentUser = users.find(u => u.name === user.value);
    if (currentUser) {
      currentUser.sendMessage(message.value);
      message.value = '';
    } else {
      console.log('User not found');
    }
  });
});

// Notify all users of new messages
function notifyAll(message) {
  users.forEach(user => {
    if (user.name !== message.from) {
      Display.notify(message);
    }
  });
}

// Simulating users joining the chat
const user1 = new User('Alice');
const user2 = new User('Bob');
const user3 = new User('Charlie');
user1.join();
user2.join();
user3.join();

// Simulating users leaving the chat
setTimeout(() => {
  user1.leave();
}, 5000);

setTimeout(() => {
  user2.leave();
}, 7000);

// Simulating messages being sent
setTimeout(() => {
  user3.sendMessage('Hello everyone!');
}, 1000);

setTimeout(() => {
  user1.sendMessage('Hey Charlie, how are you?');
}, 2000);

setTimeout(() => {
  user2.sendMessage('I am good, thanks for asking!');
}, 3000);

setTimeout(() => {
  user3.sendMessage('You are welcome!');
}, 4000);

// Display updated users and messages
setInterval(() => {
  Display.updateUsers();
  Display.updateMessages();
}, 1000);