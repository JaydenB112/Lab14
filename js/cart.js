/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);


function loadCart() {
  // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = undefined
  cartItems = localStorage.getItem("cart-contents")
  // let cartString = localStorage.getItem("cart")
  let cartObject = JSON.parse(cartItems)
  console.log(cartObject)
  if (cartObject == undefined) {
    cartItems = []
  } else {
    cartItems = cartObject
  }
  state.cart = new Cart(cartItems);
}
// console.log(loadCart)


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {
  // state.cart.Items = []
  // let stateCartJson = JSON.stringify(state.cart)
  // localStorage.setItem('cart',stateCartJson)
  // let element= document.getElementByTagName('tr')
  // element.remove()
  let gititgone = document.querySelectorAll('tr tbody')
  for (let i = 0; i < gititgone.length; i++) {
    gititgone[i].remove()
  }
}
console.log(clearCart())


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tableBody = document.querySelector("tbody")

  for (let i = 0; i < state.cart.items.length; i++) {



    let daRow = document.createElement("tr")
    // let daData = document.createElement("td")
    let deleteData = document.createElement("td")
    // let itemName = document.createElement('td')
    let quantityData = document.createElement("td")
    let itemData = document.createElement("td")
    let deleteProduct = document.createElement('button')
    deleteProduct.innerHTML = 'Delete'
    //moire tds
    itemData.innerHTML = state.cart.items[i].product.name
    // itemName.innerHTML = state.cart.product.name
    quantityData.innerHTML = state.cart.items[i].quantity
    console.log(state.cart.items[i])
    //set other tds
    //daRow.append(daData)
    //append tds
    // tableBody.append(daRow)
    deleteData.append(deleteProduct)
    daRow.append(deleteData)
    daRow.append(quantityData)
    daRow.append(itemData)
    tableBody.append(daRow)
    // deleteData.innerHTML = state.cart.items[i].product.name
  }
  //  console.log(showCart)
}

// TODO: Find the table body

// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR

//  console.log(showCart)

function removeItemFromCart(event) {
  deleteProduct.addEventListener('click', removeItemFromCart)
  
console.log(event.target)
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  //state.cart.removeItem[i]
}

// This will initialize the page and draw the cart on screen
renderCart();
