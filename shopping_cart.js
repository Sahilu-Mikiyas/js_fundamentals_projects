// function createItem(name, price) {
//     return { name: name, price: price };
// }

// // ShoppingCart factory function to manage the cart
// function createShoppingCart() {
//     return {
//         cart: [],
//         addItem: function(item) {
//             this.cart.push(item);
//             alert(`${item.name} has been added to the cart.`);
//         },
//         removeItem: function(index) {
//             const removedItem = this.cart.splice(index, 1)[0];
//             alert(`${removedItem.name} has been removed from the cart.`);
//         },
//         viewTotalPrice: function() {
//             const totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
//             alert(`Total price: $${totalPrice.toFixed(2)}`);
//         },
//         viewCart: function() {
//             if (this.cart.length === 0) {
//                 alert('The cart is empty.');
//             } else {
//                 let message = 'Items in the cart:\n';
//                 this.cart.forEach((item, index) => {
//                     message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
//                 });
//                 alert(message);
//             }
//         }
//     };
// }  
  
  
  
  
  // Item class to represent individual items
  class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// ShoppingCart class to manage the cart
class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    // Method to add an item to the cart
    addItem(item) {
        this.cart.push(item);
        alert(`${item.name} has been added to the cart.`);
    }

    // Method to remove an item from the cart
    removeItem(index) {
        const removedItem = this.cart.splice(index, 1)[0];
        alert(`${removedItem.name} has been removed from the cart.`);
    }

    // Method to view the total price of items in the cart
    viewTotalPrice() {
        const totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
        alert(`Total price: $${totalPrice.toFixed(2)}`);
    }

    // Method to display items in the cart
    viewCart() {
        if (this.cart.length === 0) {
            alert('The cart is empty.');
        } else {
            let message = 'Items in the cart:\n';
            this.cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
            });
            alert(message);
        }
    }
}

// Predefined list of goods
const goods = [
    new Item('ዳቦ', 0.99),
    new Item('እንቁላል', 1.29),
    new Item('ሽንኩርት', 0.79),
    new Item('ቲማቲም', 2.49),
    new Item('ቃርያ', 1.99)
];

// Function to display the menu and handle user input
function displayMenu() {
    const myCart = new ShoppingCart();

    while (true) {
        const choice = prompt(
            'Shopping Cart Menu:\n1. Add item\n2. Remove item\n3. View cart\n4. View total price\n5. Exit\nEnter your choice (1-5):'
        );

        if (choice === '1') {
            let goodsList = 'Available goods:\n';
            goods.forEach((item, index) => {
                goodsList += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
            });
            const itemChoice = parseInt(prompt(`${goodsList}\nEnter the number of the item to add:`), 10);
            if (itemChoice > 0 && itemChoice <= goods.length) {
                myCart.addItem(goods[itemChoice - 1]);
            } else {
                alert('Invalid choice, please try again.');
            }
        } else if (choice === '2') {
            if (myCart.cart.length === 0) {
                alert('The cart is empty.');
            } else {
                let cartList = 'Items in the cart:\n';
                myCart.cart.forEach((item, index) => {
                    cartList += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
                });
                const itemChoice = parseInt(prompt(`${cartList}\nEnter the number of the item to remove:`), 10);
                if (itemChoice > 0 && itemChoice <= myCart.cart.length) {
                    myCart.removeItem(itemChoice - 1);
                } else {
                    alert('Invalid choice, please try again.');
                }
            }
        } else if (choice === '3') {
            myCart.viewCart();
        } else if (choice === '4') {
            myCart.viewTotalPrice();
        } else if (choice === '5') {
            alert('Exiting the application.');
            break;
        } else {
            alert('Invalid choice, please try again.');
        }
    }
}

displayMenu();