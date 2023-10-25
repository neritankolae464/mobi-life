/* 
* File: complexJavascriptCode.js
* Description: This code demonstrates a complex and sophisticated JavaScript program that manages a library system with various functionalities.
* Author: [Your Name]
* Date: [Current Date]
*/

// Utility function to generate a unique ID for a book
function generateBookID() {
  const randomString = Math.random().toString(36).substr(2, 9);
  return `BK-${randomString}`;
}

// Class for Library System
class LibrarySystem {
  constructor() {
    this.books = [];
    this.users = [];
    this.checkouts = [];
  }

  // Method to add a book to the library
  addBook(title, author, genre, year) {
    const bookId = generateBookID();
    const newBook = { bookId, title, author, genre, year, isCheckedOut: false };
    this.books.push(newBook);
    console.log(`New book ${title} (${bookId}) added to the library.`);
  }

  // Method to remove a book from the library
  removeBook(bookId) {
    const bookIndex = this.books.findIndex(book => book.bookId === bookId);
    if (bookIndex !== -1) {
      const removedBook = this.books.splice(bookIndex, 1)[0];
      console.log(`Book ${removedBook.title} (${bookId}) removed from the library.`);
    }
  }

  // Method to register a new user
  addUser(name, email, age) {
    const userId = this.users.length + 1;
    const newUser = { userId, name, email, age };
    this.users.push(newUser);
    console.log(`New user ${name} (${userId}) registered.`);
  }

  // Method to display all books in the library
  displayBooks() {
    console.log('Library Books:');
    this.books.forEach(book => {
      const checkedOutStatus = book.isCheckedOut ? 'Checked Out' : 'Available';
      console.log(`${book.title} (${book.bookId}) - ${checkedOutStatus}`);
    });
  }

  // Method to display all users
  displayUsers() {
    console.log('Library Users:');
    this.users.forEach(user => console.log(`${user.name} (${user.userId}) - ${user.email}`));
  }

  // Method to borrow a book
  borrowBook(bookId, userId) {
    const bookIndex = this.books.findIndex(book => book.bookId === bookId);
    const userIndex = this.users.findIndex(user => user.userId === userId);
    if (bookIndex !== -1 && userIndex !== -1) {
      if (!this.books[bookIndex].isCheckedOut) {
        const checkoutId = this.checkouts.length + 1;
        const newCheckout = { checkoutId, bookId, userId, checkoutDate: new Date().toISOString() };
        this.checkouts.push(newCheckout);
        this.books[bookIndex].isCheckedOut = true;
        console.log(`Book ${this.books[bookIndex].title} (${bookId}) borrowed by ${this.users[userIndex].name} (${userId}).`);
      } else {
        console.log(`Book ${this.books[bookIndex].title} (${bookId}) is already checked out.`);
      }
    }
  }

  // Method to return a book
  returnBook(bookId, userId) {
    const bookIndex = this.books.findIndex(book => book.bookId === bookId);
    const userIndex = this.users.findIndex(user => user.userId === userId);
    if (bookIndex !== -1 && userIndex !== -1) {
      const checkoutIndex = this.checkouts.findIndex(checkout => checkout.bookId === bookId && checkout.userId === userId);
      if (checkoutIndex !== -1) {
        const removedCheckout = this.checkouts.splice(checkoutIndex, 1)[0];
        this.books[bookIndex].isCheckedOut = false;
        console.log(`Book ${this.books[bookIndex].title} (${bookId}) returned by ${this.users[userIndex].name} (${userId}).`);
      } else {
        console.log(`Book ${this.books[bookIndex].title} (${bookId}) is not checked out by ${this.users[userIndex].name} (${userId}).`);
      }
    }
  }
}

// Usage Example
const library = new LibrarySystem();

library.addBook('JavaScript: The Good Parts', 'Douglas Crockford', 'Programming', 2008);
library.addBook('Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 'Software Development', 2008);
library.addBook('Design Patterns: Elements of Reusable Object-Oriented Software', 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', 'Software Engineering', 1994);

library.addUser('John Doe', 'john@example.com', 25);
library.addUser('Jane Smith', 'jane@example.com', 30);

library.borrowBook('BK-123456789', 1);
library.borrowBook('BK-987654321', 2);

library.returnBook('BK-123456789', 1);

library.displayBooks();
library.displayUsers();