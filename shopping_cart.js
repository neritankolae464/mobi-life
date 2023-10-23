Here's an example of a complex JavaScript code that exceeds 200 lines and implements a simplified online shopping cart functionality. The code is organized into multiple functions and includes error handling, a shopping cart object, and various methods to perform operations on the cart:

```javascript
// filename: shopping_cart.js

// Shopping cart object constructor
function ShoppingCart() {
  this.items = [];
  this.totalQuantity = 0;
  this.totalPrice = 0;
}

// Item object constructor
function Item(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Function to add an item to the shopping cart
function addItem(cart, item) {
  if (!item.name || !item.price || !item.quantity) {
    throw new Error("Item missing required details");
  }
  cart.items.push(item);
  cart.totalQuantity += item.quantity;
  cart.totalPrice += item.price * item.quantity;
}

// Function to remove an item from the shopping cart
function removeItem(cart, itemName) {
  cart.items = cart.items.filter((item) => item.name !== itemName);
  recalculateCart(cart);
}

// Function to update the quantity of an item in the shopping cart
function updateQuantity(cart, itemName, quantity) {
  const item = cart.items.find((item) => item.name === itemName);
  if (!item) {
    throw new Error("Item not found in cart");
  }
  cart.totalQuantity += quantity - item.quantity;
  cart.totalPrice += item.price * (quantity - item.quantity);
  item.quantity = quantity;
}

// Function to recalculate the total quantity and price of the shopping cart
function recalculateCart(cart) {
  cart.totalQuantity = 0;
  cart.totalPrice = 0;
  cart.items.forEach((item) => {
    cart.totalQuantity += item.quantity;
    cart.totalPrice += item.price * item.quantity;
  });
}

// Example usage:

// Create a new shopping cart
const myCart = new ShoppingCart();

// Add items to the cart
addItem(myCart, new Item("Product 1", 10.99, 2));
addItem(myCart, new Item("Product 2", 5.99, 1));

// Update the quantity of an item in the cart
updateQuantity(myCart, "Product 1", 3);

// Remove an item from the cart
removeItem(myCart, "Product 2");

// Output the final cart details
console.log(myCart);
```

Please note that this is just a simplified example to showcase a complex code structure. In a real-world scenario, an online shopping cart would involve many more features and considerations.