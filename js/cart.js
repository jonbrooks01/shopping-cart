/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // let cart = document.getElementById ('tbody');
  // table.removeItem ('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

let tbodyFill = document.querySelector('#cart tbody');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < state.cart.items.length; i++){
    console.log (state.cart.items[i]);
  // TODO: Create a TR
  let tRow = document.createElement ('tr');

  tbodyFill.appendChild(tRow);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdDelete = document.createElement ('td');
  tdDelete.textContent = 'X'; 
  tRow.appendChild(tdDelete);

  let tdQuantity = document.createElement ('td');
  tdQuantity.textContent = +state.cart.quantity;
  tRow.appendChild (tdQuantity);

  let tdItem  = document.createElement ('td');
  tdItem.textContent = 'Items';
  tRow.appendChild (tdItem);

  // TODO: Add the TR to the TBODY and each of the TD's to the TR // Done above
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage

  
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
